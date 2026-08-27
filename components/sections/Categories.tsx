import Link from "next/link";
const CATS = [
  { k:"bijoux",  t:"Bijoux",        d:"Céramique, verre, matières upcyclées…", c:"bg-sand-pale text-navy" },
  { k:"maison",  t:"Maison",        d:"Bois, vitrail, illustration.", c:"bg-navy text-cream" },
  { k:"mode",    t:"Mode & accessoires", d:"Sacs, trousses, accessoires.", c:"bg-paper text-muted" },
  { k:"cadeaux", t:"Créations & cadeaux", d:"Une petite merveille à offrir.", c:"bg-royal text-cream" },
];
export default function Categories() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />Explorer
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
          Il y a toujours quelque chose <em className="text-royal">à découvrir.</em>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATS.map(c => (
            <Link key={c.k} href={`/creations?cat=${c.k}`} className={`group flex min-h-[210px] flex-col justify-end gap-1 rounded-2xl p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lokal)] ${c.c}`}>
              <h3 className="font-serif text-2xl font-bold">{c.t}</h3>
              <p className="text-sm opacity-80">{c.d}</p>
              <span className="mt-2 font-bold">Explorer →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}