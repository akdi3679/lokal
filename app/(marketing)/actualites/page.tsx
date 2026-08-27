import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";
import { BRAND } from "@/data/brand";
import EmptyState from "@/components/ui/EmptyState";
export const metadata: Metadata = {
  title: "Actualités & rendez-vous",
  description: "Annonces, nouveautés, rencontres créateurs — la vie de la boutique LOKAL à Grand Quartier.",
};

export default async function NewsPage() {
  const announcements = await content.getAnnouncements();
  const events = await content.getEvents();

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-royal">
          <span className="size-2.5 rotate-45 bg-sand [border-radius:0_100%_0_100%]" aria-hidden="true" />
          La vie de la boutique
        </p>
        <h1 className="mt-4 font-serif text-5xl font-extrabold text-navy md:text-6xl">
          Actualités & <em className="text-royal">rendez-vous</em>
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {announcements.map((a) => (
            <article key={a.title} className="rounded-2xl border border-navy/10 border-l-[6px] border-l-sand bg-paper p-8">
              <time className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-royal">{a.date}</time>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy">{a.title}</h2>
              <p className="mt-3 text-muted">{a.text}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-16 font-serif text-3xl font-bold text-navy">Les prochains rendez-vous</h2>
        {events.length === 0 ? (
         <EmptyState
  className="mt-6"
  title="Le calendrier arrive bientôt"
  text="Rencontres créateurs, ateliers, nouvelles collections… Suivez @lokal_bzh pour ne rien manquer."
  action={
    <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-6 py-3 font-semibold text-cream hover:bg-royal">
      Suivre @lokal_bzh
    </a>
  }
/>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {events.map((e) => (
              <article key={e.id} className="rounded-2xl border border-navy/10 border-l-[6px] border-l-royal bg-paper p-8">
                <time className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-royal">{e.date}{e.time && ` · ${e.time}`}</time>
                <h3 className="mt-2 font-serif text-2xl font-bold text-navy">{e.title}</h3>
                <p className="mt-3 text-muted">{e.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}