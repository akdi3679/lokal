import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
import SmartImage from "@/components/ui/SmartImage";
import { content } from "@/lib/content";
import { BRAND } from "@/data/brand";

export default async function Hero() {
  const creators = await content.getCreators();
const media = await content.getMedia();
  return (
    <section className="relative flex min-h-[calc(100svh-7rem)] items-center overflow-hidden">
      {/* Dots en arrière-plan (z-0) */}
      <PatternDots
        color="rgba(201,168,118,0.35)"
        className="pointer-events-none absolute -top-10 -right-16 z-0 w-[min(46vw,460px)]"
      />

      <div className="relative z-10 mx-auto grid w-[min(1180px,92%)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Colonne texte */}
        <div>
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
            <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
            {BRAND.tagline}
          </p>
          <h1 className="mt-5 max-w-[18ch] font-serif text-5xl font-extrabold leading-[1.05] text-navy md:text-7xl">
            La création locale, <em className="text-royal">à découvrir autrement.</em>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted">
            Une boutique éphémère qui réunit les talents et savoir-faire d'Ille-et-Vilaine.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/createurs"
              className="rounded-full bg-navy px-7 py-4 font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-royal active:scale-[0.97]"
            >
              Découvrir les créateurs
            </Link>
            <Link
              href="/la-boutique"
              className="rounded-full px-7 py-4 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] transition-colors hover:bg-navy hover:text-cream"
            >
              Nous trouver
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-paper px-4 py-2 text-[0.85rem] text-muted">
              📍 <b className="text-navy">Grand Quartier</b> · Saint-Grégoire
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-paper px-4 py-2 text-[0.85rem] text-muted">
              🕘 Lun.–sam. <b className="text-navy">9h30–20h</b>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-paper px-4 py-2 text-[0.85rem] text-muted">
              ✦ <b className="text-navy">{creators.length}</b> créateurs d'ici
            </span>
          </div>
        </div>

        {/* Colonne image — AU-DESSUS des dots (z-10), image TOUJOURS visible */}
        <div className="flex justify-center lg:justify-end">
         <SmartImage
  src={media.hero.url}
  label="LOKAL"
  tone={0}
  alt={media.hero.alt}
  className="relative z-10 aspect-[4/5] w-full max-w-[480px] rotate-2 rounded-2xl shadow-(--shadow-lokal)"
/>
        </div>
      </div>
    </section>
  );
}