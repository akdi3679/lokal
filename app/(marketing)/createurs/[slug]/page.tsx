import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { BRAND } from "@/data/brand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import SmartImage from "@/components/ui/SmartImage";
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await content.getCreator(slug);
  if (!c) return { title: "Créateur introuvable" };
  return {
    title: `${c.name} — ${c.brand}`,
    description: `${c.craft}. ${c.story.slice(0, 120)}…`,
    openGraph: { title: `${c.name} — ${c.brand} · LOKAL` },
  };
}

export async function generateStaticParams() {
  const creators = await content.getCreators();
  return creators.map((c) => ({ slug: c.slug }));
}

export default async function CreatorPage({ params }: Props) {
  const { slug } = await params;
  const creator = await content.getCreator(slug);
  if (!creator) notFound();

  const allWorks = await content.getCreations();
  const works = allWorks.filter((w) => w.creatorId === creator.id);

  return (
    <article className="py-16 md:py-24">
      {/* ✅ JSON-LD BreadcrumbList — fil d'Ariane structuré (Accueil → Créateurs → Marque) */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Les créateurs", path: "/createurs" },
          { name: creator.brand, path: `/createurs/${creator.slug}` },
        ])}
      />

      <div className="mx-auto w-[min(1180px,92%)]">
        <Link href="/createurs" className="inline-block text-sm font-semibold text-royal hover:underline">
          ← Tous les créateurs
        </Link>

        {/* Hero §7 */}
        <header className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <SmartImage
  src={creator.portrait?.url ?? null}
  label={creator.brand}
  alt={`${creator.name} — ${creator.brand}`}
  className="relative aspect-[4/5] w-full max-w-[440px] rounded-2xl"
/>
          <div>
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
              <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
              Créateur · {creator.category}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-extrabold text-navy md:text-6xl">
              {creator.name} — <em className="text-royal">{creator.brand}</em>
            </h1>
            <p className="mt-3 text-lg text-muted">{creator.craft}</p>
            {creator.location && <p className="mt-1 text-muted">📍 {creator.location}</p>}
          </div>
        </header>

        {/* Son univers §7 */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-navy">Son univers</h2>
          <p className="mt-5 max-w-[70ch] text-lg text-ink">{creator.story}</p>
          {!creator.verified && (
            <p className="mt-4 rounded-xl bg-sand-pale/60 p-4 text-sm text-muted">
              📝 Présentation complète en cours — découvrez son univers directement en boutique.
            </p>
          )}
        </section>

        {/* Ses créations chez LOKAL §7 */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-navy">Ses créations chez LOKAL</h2>
          {works.length === 0 ? (
            <p className="mt-5 text-muted">
              Ses créations se découvrent en boutique — chaque semaine apporte de nouvelles pièces.
            </p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((w) => (
                <article key={w.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-paper">
                  <SmartImage src={w.images[0]?.url ?? null} label={w.name} alt={w.name} className="aspect-[4/3] w-full" />
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-navy">{w.name}</h3>
                    <span className={`mt-2 inline-block rounded-full px-2.5 py-1 text-[0.72rem] font-bold uppercase ${w.unique ? "bg-navy text-sand" : "bg-sand-pale text-navy"}`}>
                      {w.unique ? "Pièce unique" : "Petite série"}
                    </span>
                    <p className="mt-3 text-sm text-muted">Prix & disponibilité à confirmer en boutique.</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Découvrir §7 */}
        {(creator.links.site || creator.links.instagram || creator.links.facebook) && (
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-navy">Découvrir</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {creator.links.site && (
                <a href={creator.links.site} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-6 py-3 font-semibold text-cream hover:bg-royal">
                  Site web ↗
                </a>
              )}
              {creator.links.instagram && (
                <a href={creator.links.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
                  Instagram ↗
                </a>
              )}
              {creator.links.facebook && (
                <a href={creator.links.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
                  Facebook ↗
                </a>
              )}
            </div>
          </section>
        )}

        {/* Retrouvez cette création chez LOKAL §7 */}
        <section className="mt-16 rounded-2xl bg-navy p-10 text-cream md:p-14">
          <h2 className="font-serif text-3xl font-bold text-sand md:text-4xl">Retrouvez cette création chez LOKAL</h2>
          <address className="mt-4 text-lg not-italic">
            {BRAND.address.line1}
            <br />
            {BRAND.address.line2}
            <br />
            <span className="text-sm opacity-70">({BRAND.address.landmark})</span>
          </address>
          <p className="mt-3 text-sand">{BRAND.hours}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sand px-6 py-3 font-semibold text-navy hover:bg-sand-soft">
              Venir en boutique
            </a>
            <a href={`tel:${BRAND.phone}`} className="rounded-full px-6 py-3 font-semibold text-cream shadow-[inset_0_0_0_2px_rgba(250,246,238,0.5)] hover:bg-cream hover:text-navy">
              Appeler
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}