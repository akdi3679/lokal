import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
import { content } from "@/lib/content";
import { BRAND } from "@/data/brand";

export default async function News() {
  const announcements = await content.getAnnouncements();
  const events = await content.getEvents();

  return (
    <section className="bg-paper py-20 md:py-28" id="actualites">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          La vie de la boutique
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-navy md:text-5xl">
          Actualités & <em className="text-royal">rendez-vous</em>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {announcements.map((a) => (
            <article key={a.title} className="rounded-2xl border border-navy/10 border-l-[6px] border-l-sand bg-paper p-7">
              <time className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-royal">{a.date}</time>
              <h3 className="mt-2 font-serif text-xl font-bold text-navy">{a.title}</h3>
              <p className="mt-2 text-muted">{a.text}</p>
            </article>
          ))}
          {events.length > 0 ? (
            events.map((e) => (
              <article key={e.id} className="rounded-2xl border border-navy/10 border-l-[6px] border-l-sand bg-paper p-7">
                <time className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-royal">{e.date}</time>
                <h3 className="mt-2 font-serif text-xl font-bold text-navy">{e.title}</h3>
                <p className="mt-2 text-muted">{e.description}</p>
              </article>
            ))
          ) : (
            <article className="rounded-2xl border border-navy/10 border-l-[6px] border-l-royal bg-paper p-7">
              <time className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-royal">À venir</time>
              <h3 className="mt-2 font-serif text-xl font-bold text-navy">Les prochains rendez-vous arrivent bientôt</h3>
              <p className="mt-2 text-muted">
                Rencontres créateurs, nouvelles collections… Suivez{" "}
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-royal underline">
                  {BRAND.instagramHandle}
                </a>{" "}
                pour ne rien manquer.
              </p>
            </article>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link href="/actualites" className="rounded-full px-6 py-3 font-semibold text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-cream">
            Toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}