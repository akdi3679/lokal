import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-sand-pale py-24 text-center md:py-32">
      <PatternDots color="rgba(27,58,156,0.25)" className="pointer-events-none absolute inset-0 m-auto w-[min(70vw,600px)]" />
      <div className="mx-auto w-[min(900px,92%)]">
        <h2 className="font-serif text-4xl font-extrabold text-navy md:text-6xl">
          Votre prochaine découverte est peut-être <em className="text-royal">ici.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-muted">
          Bijoux, objets, créations, cadeaux et petites merveilles imaginés par des créateurs d'ici.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/createurs" className="rounded-full bg-navy px-8 py-4 font-semibold text-cream hover:bg-royal">
            Découvrir LOKAL
          </Link>
          <Link href="/la-boutique" className="rounded-full px-8 py-4 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
            Nous trouver à Grand Quartier
          </Link>
        </div>
      </div>
    </section>
  );
}