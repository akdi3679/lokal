import { NextResponse, type NextRequest } from "next/server";
import { ContactSchema } from "@/lib/validation/contact.schema";
import { rateLimit } from "@/lib/rate-limit/memory-sliding-window";

interface TurnstileResult {
  success: boolean;
  "error-codes"?: string[];
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) {
    // Mode dev sans secret = on laisse passer (à activer en prod)
    if (process.env.NODE_ENV !== "production") return true;
    return false;
  }
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as TurnstileResult;
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const requestId = crypto.randomUUID();
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // 1. Rate limit strict : 3/min/IP (§23 endpoint public sensible)
  const rl = rateLimit(`contact:${ip}`, 3, 60_000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Trop de messages en peu de temps. Réessayez dans une minute.", requestId },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
    );
  }

  // 2. Parse body
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide.", requestId }, { status: 400 });
  }

  // 3. Zod validation (§08)
  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { error: first?.message ?? "Données invalides.", requestId, field: first?.path[0] },
      { status: 400 },
    );
  }
  const data = parsed.data;

  // 4. Honeypot §12
  if (data.company && data.company !== "") {
    // Ne pas dire au bot qu'il est détecté — renvoyer "succès"
    return NextResponse.json({ success: true, requestId });
  }

  // 5. Turnstile
  const ok = await verifyTurnstile(data.turnstileToken, ip);
  if (!ok) {
    return NextResponse.json(
      { error: "Validation anti-bot échouée. Réessayez.", requestId },
      { status: 403 },
    );
  }

  // 6. Envoi email (TODO Phase 6 : Resend/Postmark)
  // await sendContactEmail({ ...data, ip, requestId });
  // En attendant, on log (à remplacer)
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[contact]", { requestId, name: data.name, email: data.email, subject: data.subject });
  }

  return NextResponse.json({ success: true, requestId });
}