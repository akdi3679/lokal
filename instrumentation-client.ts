/**
 * Hook de démarrage CÔTÉ CLIENT (§48, requis L2).
 * L1 : no-op. L2 : Sentry browser SDK ici (DSN public uniquement,
 * jamais de secret ; beforeSend pour rédiger toute donnée sensible §18/§35).
 */
export async function register() {
  // if (process.env.NEXT_PUBLIC_SENTRY_DSN) { await import("@sentry/nextjs").then(...) }
}