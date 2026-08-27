import Link from "next/link";
const G = ["Pour elle","Pour lui","Pour la maison","Petites attentions","Pièces uniques"];
export default function Gifts() {
  return (
    <section className="bg-sand-pale py-20 md:py-28" id="cadeaux">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          Envie de faire plaisir ?
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
          Une idée <em className="text-royal">cadeau ?</em>
        </h2>
        <p className="mt-5 max-w-[46ch] text-muted">
          On ne vous demande pas « quel produit ? » mais « pour qui ? » — le reste, c'est notre métier.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {G.map(g => (
            <Link key={g} href="/creations" className="flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-paper p-6 text-center font-semibold text-navy transition hover:-translate-y-1 hover:bg-sand-soft">
              <span className="grid size-12 place-items-center rounded-full bg-sand-pale font-serif text-xl font-extrabold text-royal">{g[0]}</span>
              {g}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}