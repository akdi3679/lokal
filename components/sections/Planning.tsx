import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
import SmartImage from "@/components/ui/SmartImage";
import { content } from "@/lib/content";
import { BRAND } from "@/data/brand";

export default async function Planning() {
  const schedule = await content.getSchedule();
const creators = await content.getCreators();
const byBrand = new Map(creators.map((c) => [c.brand, c]));
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-cream md:py-28">
      <PatternDots color="rgba(201,168,118,0.18)" className="pointer-events-none absolute top-6 right-[4%] w-[130px]" />
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-sand">
              <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
              Qui vous accueille ?
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-cream md:text-5xl">
              Cette semaine <em className="text-sand">en boutique</em>
            </h2>
          </div>
          <p className="text-sm text-cream/60" aria-hidden="true">Faites défiler →</p>
        </div>

        {/* Une seule ligne, scroll horizontal, snap */}
        <div className="no-scrollbar -mx-[4vw] mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[4vw] pb-2">
          {schedule.map((d, i) => (
            <div key={d.day} className="w-[280px] shrink-0 snap-start">
              <div className="rounded-2xl bg-sand p-4 transition hover:-translate-y-1">
                <h3 className="text-center font-bold text-navy">{d.day}</h3>
                <ul className="mt-3 space-y-4 rounded-xl bg-paper p-4">
                  {d.who.map((w) => (
                    <li key={w.brand} className="flex items-center gap-3 border-t-2 border-sand-soft pt-4 first:border-0 first:pt-0">
                     <SmartImage
  src={byBrand.get(w.brand)?.portrait?.url ?? null}
  label={w.brand}
  tone={i}
  alt={`${w.name} — ${w.brand}`}
  className="size-12 shrink-0 rounded-full"
/>
                      <span className="text-left">
                        <span className="block font-semibold text-ink">{w.name}</span>
                        <span className="block text-sm font-semibold text-royal">{w.brand}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-cream/60">
          Planning indicatif — le planning à jour est sur{" "}
          <a className="text-sand underline" href={BRAND.instagram} target="_blank" rel="noopener noreferrer">
            {BRAND.instagramHandle}
          </a>.
        </p>
      </div>
    </section>
  );
}