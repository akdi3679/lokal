import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
import { content } from "@/lib/content";
import SmartImage from "@/components/ui/SmartImage";

export default async function Spotlight() {
  const featured = await content.getFeaturedCreator();
  if (!featured) return null;

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 md:grid-cols-2 md:items-center">
        <div className="relative">
          <PatternDots color="rgba(201,168,118,0.4)" className="absolute -top-10 -left-10 w-[220px]" />
        <SmartImage src={featured.portrait?.url ?? null} label={featured.brand}
  tone={1}
  alt={`${featured.name} — ${featured.brand}`}
  className="relative aspect-[4/5] w-full max-w-[440px] rounded-2xl shadow-(--shadow-lokal)"
/>
        </div>
        <div>
          <span className="inline-block rounded-full bg-sand px-4 py-1.5 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-navy">
            Le créateur du moment
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
            {featured.name} — <em className="text-royal">{featured.brand}</em>
          </h2>
          <p className="mt-5 max-w-[52ch] text-muted">{featured.story}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/createurs/${featured.slug}`} className="rounded-full bg-navy px-6 py-3.5 font-semibold text-cream hover:bg-royal">
              Découvrir son univers
            </Link>
            {featured.links.site ? (
              <a href={featured.links.site} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3.5 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
                {new URL(featured.links.site).hostname} ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}