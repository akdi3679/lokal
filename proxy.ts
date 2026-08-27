import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit/memory-sliding-window";

/**
 * LOKAL — proxy.ts (Next 16, ex-middleware.ts)
 * Tier L1 · filtre de bordure PAS la sécurité (§03/§19) :
 * authn/authz réelles = route handlers + validation Zod.
 *
 * • Security headers (§10)
 * • CSP en Report-Only d'abord → bascule en strict avant lancement (§10)
 * • Rate limit POST /api/contact : 5/min/IP (§23, défaut L1 endpoint public)
 */

const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'", // payloads RSC Next.js ; nonce en Phase G
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

function withSecurityHeaders(): NextResponse {
  const response = NextResponse.next();
  const h = response.headers;

  h.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  h.set("X-Content-Type-Options", "nosniff");
  h.set("Referrer-Policy", "strict-origin-when-cross-origin");
  h.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()",
  );
  h.set("Cross-Origin-Opener-Policy", "same-origin");
  h.set("Cross-Origin-Resource-Policy", "same-origin");
  // §10 : Report-Only en dev/staging → Content-Security-Policy strict au launch
  h.set("Content-Security-Policy-Report-Only", CSP_REPORT_ONLY);
  h.set("X-Frame-Options", "DENY"); // backstop navigateurs legacy

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname, method } = request.nextUrl;

  // 1 · Rate limit formulaire contact (L1 : 5 req/min/IP)
  if (pathname === "/api/contact" && method === "POST") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const rl = rateLimit(`contact:${ip}`, 5, 60_000);
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans une minute." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rl.retryAfterSeconds),
            "X-RateLimit-Remaining": "0",
            "Cache-Control": "no-store",
          },
        },
      );
    }
  }

  // 2 · Headers sécurité sur toutes les réponses
  return withSecurityHeaders();
}

// Compat : export nommé (Next 16) + default
export default proxy;

export const config = {
  matcher: [
    // Skip assets statiques & internals Next
    "/((?!_next/static|_next/image|_vercel|favicon.ico|icon.svg|apple-icon.png|manifest.webmanifest|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};