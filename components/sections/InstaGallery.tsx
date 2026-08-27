import Link from "next/link";
import { BRAND } from "@/data/brand";
import SmartImage from "@/components/ui/SmartImage";
const TILES = 6;
export default function InstaGallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
              <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
              Vu chez LOKAL
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
              Le quotidien, <em className="text-royal">en images</em>
            </h2>
          </div>
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-6 py-3 font-semibold text-cream hover:bg-royal">
            Suivre {BRAND.instagramHandle}
          </a>
        </div>
       <div className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-6">
  {["Boutique", "Bijoux", "Vitrail", "Bois", "Affiches", "Sacs"].map((label, i) => (
    <a
      key={label}
      href={BRAND.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Voir le fil Instagram ${BRAND.instagramHandle} — ${label}`}
      className="group relative aspect-square overflow-hidden rounded-xl transition hover:scale-[1.04]"
    >
      <SmartImage label={label} tone={i} alt={`Vu chez LOKAL — ${label}`} className="size-full" />
      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-navy-deep/85 py-2 text-center text-[0.68rem] font-semibold text-sand transition-transform duration-300 group-hover:translate-y-0">
        {BRAND.instagramHandle}
      </span>
    </a>
  ))}
</div>
      </div>
    </section>
  );
}