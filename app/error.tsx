"use client";

import { useEffect } from "react";

/**
 * Error boundary par segment (§46/§64) :
 * pas de blame, une action primaire, référence support, pas de fuite interne.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO Phase 6 : Sentry.captureException(error)
    console.error("[LOKAL] segment error:", error);
  }, [error]);

  return (
    <section className="mx-auto flex w-[min(1180px,92%)] flex-col items-center gap-6 py-24 text-center">
      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
        Oups
      </p>
      <h1 className="font-serif text-4xl font-extrabold text-navy md:text-5xl">
        Cette page a rencontré un imprévu.
      </h1>
      <p className="max-w-[46ch] text-muted">
        Ce n'est pas vous, c'est nous. Réessayez dans un instant — si le
        problème persiste, appelez la boutique ou écrivez-nous sur Instagram.
      </p>
      {error.digest ? (
        <p className="text-sm text-muted/70">Référence : {error.digest}</p>
      ) : null}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-navy px-7 py-4 font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-royal active:scale-[0.97]"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="rounded-full px-7 py-4 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] transition-colors hover:bg-navy hover:text-cream"
        >
          Retour à l'accueil
        </a>
      </div>
    </section>
  );
}