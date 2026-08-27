import type { LegalDoc } from "@/data/legal";

/** Rendu commun des pages légales + bandeau « à valider par juriste » (§45). */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(860px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          Informations légales
        </p>
        <h1 className="mt-4 font-serif text-4xl font-extrabold text-navy md:text-5xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-muted">Dernière mise à jour : {doc.updated}</p>

        <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          ⚠️ Document de travail — à faire relire et valider par un juriste avant mise en ligne.
        </p>

        {doc.sections.map((s) => (
          <section key={s.title} className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-navy">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}