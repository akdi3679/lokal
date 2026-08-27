import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import { content } from "@/lib/content";

export default async function CreatorsGrid() {
  const creators = (await content.getCreators()).filter((c) => c.verified);

  return (
    <section className="py-20 md:py-28" id="createurs">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
              <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
              Les visages
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
              Les <em className="text-royal">créateurs</em>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted" aria-hidden="true">Faites défiler →</p>
            <Link href="/createurs" className="rounded-full px-5 py-2.5 text-sm font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
              Tous les créateurs
            </Link>
          </div>
        </div>

        <div className="no-scrollbar -mx-[4vw] mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[4vw] pb-2">
          {creators.map((c, i) => (
            <Link
              key={c.id}
              href={`/createurs/${c.slug}`}
              className="group w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-navy/10 border-t-[5px] border-t-sand bg-paper transition hover:-translate-y-1 hover:shadow-(--shadow-lokal)"
            >
<SmartImage src={c.portrait?.url ?? null} label={c.brand} tone={i} alt={`${c.name} — ${c.brand}`} className="aspect-[4/5] w-full" />              <span className="flex flex-col gap-0.5 p-5">
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