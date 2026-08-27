import Link from "next/link";
import { BRAND } from "@/data/brand";
import RealMap from "@/components/sections/RealMap";
export default function BoutiqueInfo() {
  return (
    <section className="py-20 md:py-28" id="boutique">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          On vous attend
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
          Venez nous <em className="text-royal">rencontrer</em>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl bg-navy p-8 text-cream md:p-10">
            <h3 className="font-serif text-2xl font-bold text-sand">LOKAL</h3>
            <address className="text-lg not-italic">
              {BRAND.address.line1}<br />
              {BRAND.address.line2}<br />
              <span className="text-sm opacity-70">({BRAND.address.landmark})</span>
            </address>
            <div className="flex items-center justify-between border-y border-sand/30 py-4">
              <span>Lundi → Samedi</span>
              <b className="text-sand">9h30 – 20h</b>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sand px-5 py-3 font-semibold text-navy hover:bg-sand-soft">
                Itinéraire
              </a>
              <a href={`tel:${BRAND.phone}`} className="rounded-full px-5 py-3 font-semibold text-cream shadow-[inset_0_0_0_2px_rgba(250,246,238,0.5)] hover:bg-cream hover:text-navy">
                Appeler
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-3 font-semibold text-cream shadow-[inset_0_0_0_2px_rgba(250,246,238,0.5)] hover:bg-cream hover:text-navy">
                Instagram
              </a>
            </div>
          </div>
         <div className="overflow-hidden rounded-2xl border border-navy/10">
  <RealMap className="min-h-[340px] flex-1" />
  <div className="flex flex-wrap items-center justify-between gap-3 bg-paper p-5">
    <small className="text-muted">
      Galerie Grand Quartier · Saint-Grégoire
      <br />
      Accès facile, parking du centre commercial
    </small>
    <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-cream hover:bg-royal">
      Ouvrir dans Google Maps
    </a>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}