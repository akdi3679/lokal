import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";

/**
 * 404 — ton chaleureux, action primaire (retour accueil), secondaire (boutique).
 * Pas de blâme, pas de jargon technique (§64 psychologie).
 */
export default function NotFound() {
  return (
    <section className="relative mx-auto flex w-[min(1180px,92%)] flex-col items-center gap-6 overflow-hidden py-24 text-center md:py-32">
      <PatternDots
        color="rgba(201,168,118,0.22)"
        className="pointer-events-none absolute -top-16 -right-20 w-[min(40vw,380px)]"
      />
      <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
        <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
        Page introuvable
      </p>
      <h1 className="font-serif text-6xl font-extrabold text-navy md:text-8xl">
        404
      </h1>
      <p className="max-w-[42ch] text-lg text-muted">
        Cette page n'existe pas — ou plus. La boutique, elle, est bien là :
        venez découvrir les créateurs d'ici.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-navy px-7 py-4 font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-royal active:scale-[0.97]"
        >
          Retour à l'accueil
        </Link>
        <Link
          href="/createurs"
          className="rounded-full px-7 py-4 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] transition-colors hover:bg-navy hover:text-cream"
        >
          Découvrir les créateurs
        </Link>
      </div>
    </section>
  );
}