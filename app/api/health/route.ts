import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Health endpoint — monitoring UptimeRobot/Sentry (§32). Jamais caché. */
export async function GET(req: Request) {
  const isDeep = new URL(req.url).searchParams.has("deep");
  const checks: Record<string, boolean> = { runtime: true };

  if (isDeep) {
    // Vérifs profondes futures (DB, Redis…) — rien en L1
    checks.data = true;
  }
  const ok = Object.values(checks).every(Boolean);

  return NextResponse.json(
    {
      status: ok ? "ok" : "degraded",
      version: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev",
      timestamp: new Date().toISOString(),
      checks,
    },
    { status: ok ? 200 : 503, headers: { "Cache-Control": "no-store" } },
  );
}