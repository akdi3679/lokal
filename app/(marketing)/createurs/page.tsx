import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Les créateurs",
  description:
    "18 artisans et créateurs d'Ille-et-Vilaine réunis chez LOKAL — bijoux, céramique, bois, vitrail, upcycling, illustration et plus.",
};

export default async function CreatorsPage() {
  // TOUS les créateurs actifs (18), plus de bloc "+N"
  const creators = await content.getCreators();

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
          Découvrez les {creators.length} talents qui font vivre LOKAL.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {creators.map((c, i) => (
            <Link
              key={c.id}
              href={`/createurs/${c.slug}`}
              className="group overflow-hidden rounded-2xl border border-navy/10 border-t-[5px] border-t-sand bg-paper transition hover:-translate-y-1 hover:shadow-(--shadow-lokal)"
            >
              <SmartImage
                src={c.portrait?.url ?? null}
                label={c.brand}
                tone={i}
                alt={`${c.name} — ${c.brand}`}
                className="aspect-[4/5] w-full"
              />
              <span className="flex flex-col gap-0.5 p-5">
                <span className="font-serif text-xl font-bold text-navy">{c.name}</span>
                <span className="font-semibold text-royal">{c.brand}</span>
                <span className="text-sm text-muted">{c.craft}</span>
                <span className="pt-3 font-bold text-navy">Découvrir son univers →</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}