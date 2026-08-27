/**
 * Rate limiter in-memory à fenêtre glissante — edge-safe (aucune API Node).
 * Réf. §23 : en L1, filtre par instance ; la vraie couche edge = règles
 * Cloudflare (Phase 6 / deploy). Le DB/app reste la dernière ligne (§03).
 */
export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

const windows = new Map<string, number[]>();
const MAX_ENTRIES = 10_000;

export function rateLimit(
  identifier: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;

  let hits = windows.get(identifier) ?? [];
  hits = hits.filter((t) => t > windowStart);

  const allowed = hits.length < limit;
  if (allowed) hits.push(now);
  windows.set(identifier, hits);

  // Borne mémoire (§24 quotas)
  if (windows.size > MAX_ENTRIES) {
    for (const [key, value] of windows) {
      if (value.length === 0 || value[value.length - 1] <= windowStart) {
        windows.delete(key);
      }
    }
  }

  const oldest = hits[0] ?? now;
  return {
    allowed,
    remaining: Math.max(0, limit - hits.length),
    retryAfterSeconds: allowed ? 0 : Math.ceil((oldest + windowMs - now) / 1000),
  };
}