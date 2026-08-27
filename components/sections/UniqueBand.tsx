import Link from "next/link";
import PatternDots from "@/components/cards/PatternDots";
export default function UniqueBand() {
  return (
    <section className="relative overflow-hidden bg-royal py-20 text-center text-cream md:py-28">
      <PatternDots color="rgba(201,168,118,0.3)" className="pointer-events-none absolute inset-0 m-auto w-[min(80vw,700px)] opacity-40" />
      <div className="mx-auto w-[min(900px,92%)]">
        <h2 className="font-serif text-4xl font-bold text-cream md:text-6xl">
          Des créations que l'on ne voit <em className="text-sand">pas partout.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-cream/85">
          Pièces uniques, petites séries et créations imaginées par des artisans d'ici.
          Fait ici, imaginé par eux.
        </p>
        <Link href="/creations" className="mt-10 inline-block rounded-full bg-sand px-8 py-4 font-semibold text-navy hover:bg-sand-soft">
          Explorer les créations
        </Link>
      </div>
    </section>
  );
}