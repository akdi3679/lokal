import type { Metadata } from "next";
import { BRAND } from "@/data/brand";
import ContactForm from "@/components/forms/ContactForm";
import RealMap from "@/components/sections/RealMap";
export const metadata: Metadata = {
  title: "La boutique",
  description: "LOKAL, galerie Grand Quartier, Saint-Grégoire. 18 créateurs d'Ille-et-Vilaine. Lun.–sam. 9h30–20h. Itinéraire, téléphone, contact.",
};

export default function BoutiquePage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          On vous attend
        </p>
        <h1 className="mt-4 font-serif text-5xl font-extrabold text-navy md:text-6xl">
          Venez nous <em className="text-royal">rencontrer</em>
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-muted">
          LOKAL est une boutique éphémère. Venez voir, toucher, essayer, discuter avec les créateurs.
          Le meilleur de LOKAL se vit en personne.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-cream md:p-10">
              <h2 className="font-serif text-2xl font-bold text-sand md:text-3xl">LOKAL</h2>
              <address className="mt-4 text-lg not-italic">
                {BRAND.address.line1}
                <br />
                {BRAND.address.line2}
                <br />
                <span className="text-sm opacity-70">({BRAND.address.landmark})</span>
              </address>
              <div className="mt-5 flex items-center justify-between border-y border-sand/30 py-4">
                <span>Lundi → Samedi</span>
                <b className="text-sand">9h30 – 20h</b>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sand px-6 py-3 font-semibold text-navy hover:bg-sand-soft">
                  Itinéraire
                </a>
                <a href={`tel:${BRAND.phone}`} className="rounded-full px-6 py-3 font-semibold text-cream shadow-[inset_0_0_0_2px_rgba(250,246,238,0.5)] hover:bg-cream hover:text-navy">
                  {BRAND.phoneDisplay}
                </a>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 font-semibold text-cream shadow-[inset_0_0_0_2px_rgba(250,246,238,0.5)] hover:bg-cream hover:text-navy">
                  Instagram
                </a>
              </div>
            </div>

           <div className="overflow-hidden rounded-2xl border border-navy/10">
  <RealMap className="aspect-[16/9] min-h-[260px]" />
</div>
          </div>

          <aside className="rounded-2xl border border-navy/10 bg-paper p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">Nous écrire</h2>
            <p className="mt-2 text-muted">Une question avant de venir ? On vous répond rapidement.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}