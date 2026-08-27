import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Les créateurs",
  description: "18 artisans et créateurs d'Ille-et-Vilaine réunis chez LOKAL — bijoux, céramique, bois, vitrail, upcycling, illustration et plus.",
};

export default async function CreatorsPage() {
  const creators = await content.getCreators();
  const verified = creators.filter((c) => c.verified);
  const others = creators.filter((c) => !c.verified);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          Les visages
        </p>
        <h1 className="mt-4 font-serif text-5xl font-extrabold text-navy md:text-6xl">
          Les <em className="text-royal">créateurs</em>
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-muted">
          Derrière chaque création, une personne, une histoire, un savoir-faire.
          Découvrez ceux qui font vivre LOKAL cette semaine.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verified.map((c) => (
            <Link
              key={c.id}
              href={`/createurs/${c.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-navy/10 border-t-[5px] border-t-sand bg-paper p-7 transition hover:-translate-y-1 hover:shadow-(--shadow-lokal)"
            >
              <span className="mb-3 grid size-20 place-items-center rounded-full bg-navy font-serif text-3xl font-extrabold text-sand" aria-hidden="true">
                {c.name[0]}
              </span>
              <h2 className="font-serif text-2xl font-bold text-navy">{c.name}</h2>
              <span className="font-semibold text-royal">{c.brand}</span>
              <span className="text-muted">{c.craft}</span>
              <p className="mt-2 text-[0.92rem] text-muted line-clamp-3">{c.story}</p>
              <span className="mt-auto pt-4 font-bold text-navy">Découvrir son univers →</span>
            </Link>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-12 rounded-2xl border-2 border-dashed border-sand bg-sand-pale/40 p-8 text-center">
            <b className="block font-serif text-4xl font-extrabold text-royal">+{others.length}</b>
            <p className="mt-2 text-muted">autres créateurs à découvrir directement en boutique</p>
            <Link href="/la-boutique" className="mt-5 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-cream hover:bg-royal">
              Nous trouver à Grand Quartier
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}