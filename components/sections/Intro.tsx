export default function Intro() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
            <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
            Le concept
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
            18 créateurs. Des univers différents. <em className="text-royal">Une même envie : créer.</em>
          </h2>
          <p className="mt-6 max-w-[56ch] text-muted">
            LOKAL réunit des artisans et créateurs d'Ille-et-Vilaine qui imaginent,
            fabriquent et proposent des pièces uniques ou en petites séries. Chaque
            création raconte une histoire — et surtout, celle de la personne qui l'a faite.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["18", "créateurs & artisans, tous du 35"],
            ["10+", "univers différents à explorer"],
            ["1", "lieu pour tous les rencontrer"],
          ].map(([n, t]) => (
            <div key={n} className="flex items-baseline gap-4 rounded-2xl border border-navy/10 bg-paper p-5 transition hover:translate-x-1">
              <b className="font-serif text-3xl font-extrabold text-royal">{n}</b>
              <span className="text-muted">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}