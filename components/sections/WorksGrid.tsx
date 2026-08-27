import Link from "next/link";
import { content } from "@/lib/content";
import SmartImage from "@/components/ui/SmartImage";
export default async function WorksGrid() {
  const works = (await content.getCreations()).slice(0, 4);
  const creators = await content.getCreators();
  const creatorMap = new Map(creators.map((c) => [c.id, c]));

  return (
    <section className="bg-paper py-20 md:py-28" id="creations">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          En rayon cette semaine
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
          Les coups de cœur <em className="text-royal">du moment</em>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w) => {
            const c = w.creatorId ? creatorMap.get(w.creatorId) : null;
            return (
              <article key={w.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-paper transition hover:-translate-y-1 hover:shadow-(--shadow-lokal)">
            <SmartImage src={work.images[0]?.url ?? null} label={work.name} tone={work.name.length} alt={work.name} className="aspect-[4/3] w-full" />
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="font-serif text-lg font-bold text-navy">{w.name}</h3>
                  {c ? (
                    <Link href={`/createurs/${c.slug}`} className="text-sm font-semibold text-royal hover:underline">
                      par {c.name} — {c.brand}
                    </Link>
                  ) : (
                    <p className="text-sm text-muted">Qui se cache derrière cette création ? Réponse en boutique…</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold uppercase ${w.unique ? "bg-navy text-sand" : "bg-sand-pale text-navy"}`}>
                      {w.unique ? "Pièce unique" : "Petite série"}
                    </span>
                  </div>
                  <p className="mt-3 border-t border-dashed border-navy/15 pt-3 text-sm text-muted">
                    Prix & disponibilité à confirmer en boutique.
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/creations" className="rounded-full bg-navy px-7 py-4 font-semibold text-cream hover:bg-royal">
            Voir toutes les créations
          </Link>
        </div>
      </div>
    </section>
  );
}