/**
 * Hook de démarrage serveur (§48, requis L2).
 * L1 : no-op. L2 : initialiser Sentry ici (DSN depuis env, jamais côté client).
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.SENTRY_DSN) {
    // TODO L2 : await import("@sentry/nextjs").then((S) => S.init({ dsn: process.env.SENTRY_DSN }));
  }
}