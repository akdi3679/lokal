"use client";

/**
 * Root error boundary — remplace TOUT le layout : styles inline obligatoires
 * (globals.css n'est pas chargé ici). Ton navy/sand conservé.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void error; // TODO Phase 6 : Sentry.captureException
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          textAlign: "center",
          background: "#1C2452",
          color: "#FAF6EE",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9A876",
            }}
          >
            LOKAL
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", margin: "0.5rem 0" }}>
            Un imprévu est survenu.
          </h1>
          <p style={{ opacity: 0.8, maxWidth: "46ch", margin: "0 auto" }}>
            Rechargez la page, ou revenez un peu plus tard. La boutique, elle,
            reste ouverte !
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              background: "#C9A876",
              color: "#1C2452",
              border: 0,
              borderRadius: 999,
              padding: "14px 28px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}