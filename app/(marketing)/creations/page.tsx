import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import SmartImage from "@/components/ui/SmartImage";
import FiltersBar from "@/components/sections/FiltersBar";
import EmptyState from "@/components/ui/EmptyState";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Les créations",
  description:
    "Parcourez les créations des artisans LOKAL — bijoux, céramique, bois, vitrail, upcycling. Filtrez par catégorie, créateur, pièce unique.",
};

const VALID_CATS = ["bijoux", "maison", "mode", "cadeaux"];

interface Props {
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function CreationsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const [creators] = await Promise.all([content.getCreators()]);
  const ids = new Set(creators.map((c) => c.id));
  const creatorMap = new Map(creators.map((c) => [c.id, c]));

  // 1 · Sanitisation : tout paramètre faux/inconnu → URL corrigée (redirect)
  const clean: Record<string, string> = {};
  if (sp.cat && VALID_CATS.includes(sp.cat)) clean.cat = sp.cat;
  if (sp.createur && ids.has(sp.createur)) clean.createur = sp.createur;
  if (sp.unique === "1") clean.unique = "1";

  const incomingKeys = Object.keys(sp);
  const isDirty =
    incomingKeys.length !== Object.keys(clean).length ||
    incomingKeys.some((k) => clean[k] !== sp[k]);

  if (isDirty) {
    const q = new URLSearchParams(clean).toString();
    redirect(`/creations${q ? `?${q}` : ""}`);
  }

  // 2 · Données filtrées
  const works = await content.getCreations({
    category: (clean.cat ?? "all") as "all" | "bijoux" | "maison" | "mode" | "cadeaux",
    creatorId: clean.createur,
    unique: clean.unique === "1",
  });

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          En rayon cette semaine
        </p>
        <h1 className="mt-4 font-serif text-5xl font-extrabold text-navy md:text-6xl">
          Les <em className="text-royal">créations</em>
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-muted">
          Pièces uniques et petites séries imaginées par nos créateurs. Filtrez pour trouver ce qui vous parle.
        </p>

        <div className="sticky top-[90px] z-30 -mx-[4vw] bg-cream/95 px-[4vw] py-5 backdrop-blur-md">
          <FiltersBar creators={creators.map((c) => ({ id: c.id, brand: c.brand }))} />
        </div>

        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {works.length} création{works.length > 1 ? "s" : ""} trouvée{works.length > 1 ? "s" : ""}
        </p>

        {works.length === 0 ? (
          <EmptyState
            className="mt-8"
            title="Rien ne correspond… pour l'instant."
            text="Les créations tournent chaque semaine en boutique. Essayez d'autres filtres, ou passez nous voir !"
            action={
              <Link href="/creations" className="rounded-full bg-sand px-6 py-3 font-semibold text-navy hover:bg-sand-soft">
                Réinitialiser les filtres
              </Link>
            }
          />
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => {
              const c = w.creatorId ? creatorMap.get(w.creatorId) : null;
              return (
                <article key={w.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-paper transition hover:-translate-y-1 hover:shadow-(--shadow-lokal)">
<SmartImage src={w.images[0]?.url ?? null} label={w.name} tone={w.name.length} alt={w.name} className="aspect-[4/3] w-full" />
                  <div className="flex flex-col gap-1 p-5">
                    <h2 className="font-serif text-lg font-bold text-navy">{w.name}</h2>
                    {c ? (
                      <Link href={`/createurs/${c.slug}`} className="text-sm font-semibold text-royal hover:underline">
                        par {c.name} — {c.brand}
                      </Link>
                    ) : (
                      <p className="text-sm text-muted">Qui se cache derrière cette création ? Réponse en boutique…</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {w.unique && <span className="rounded-full bg-navy px-2.5 py-1 text-[0.72rem] font-bold uppercase text-sand">Pièce unique</span>}
                      {w.smallSeries && <span className="rounded-full bg-sand-pale px-2.5 py-1 text-[0.72rem] font-bold uppercase text-navy">Petite série</span>}
                    </div>
                    <p className="mt-3 border-t border-dashed border-navy/15 pt-3 text-sm text-muted">
                      Prix & disponibilité à confirmer en boutique.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}