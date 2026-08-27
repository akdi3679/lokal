import Link from "next/link";
import LogoStatic from "@/components/cards/LogoStatic";
import FanarCredit from "@/components/layout/FanarCredit";
import { BRAND } from "@/data/brand";

export default function Footer() {
  return (
    <footer className="relative z-45 bg-navy-deep pt-16 pb-8 text-cream/75">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 border-b border-sand/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
<LogoStatic inkColor="#C9A876" bgColor="#141B3F" height={40} />
          <p className="mt-4 max-w-[30ch] text-[0.95rem]">{BRAND.tagline}.</p>
        </div>

        <nav aria-label="Découvrir">
          <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-sand">
            Découvrir
          </h4>
          <ul className="space-y-1">
            <li><Link className="hover:text-sand" href="/#decouvrir">Catégories</Link></li>
            <li><Link className="hover:text-sand" href="/createurs">Les créateurs</Link></li>
            <li><Link className="hover:text-sand" href="/creations">Les créations</Link></li>
            <li><Link className="hover:text-sand" href="/cadeaux">Idées cadeaux</Link></li>
            <li><Link className="hover:text-sand" href="/actualites">Actualités</Link></li>
          </ul>
        </nav>

        <nav aria-label="La boutique">
          <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-sand">
            La boutique
          </h4>
          <ul className="space-y-1">
            <li><Link className="hover:text-sand" href="/la-boutique">Nous trouver</Link></li>
            <li><a className="hover:text-sand" href={`tel:${BRAND.phone}`}>{BRAND.phoneDisplay}</a></li>
            <li><a className="hover:text-sand" href={BRAND.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="hover:text-sand" href={BRAND.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </nav>

        <div>
          <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-sand">
            Infos
          </h4>
          <address className="not-italic">
            {BRAND.address.line1}
            <br />
            {BRAND.address.line2}
          </address>
          <p className="mt-2">{BRAND.hours}</p>
          <ul className="mt-3 space-y-1 text-[0.9rem]">
            <li><Link className="hover:text-sand" href="/mentions-legales">Mentions légales</Link></li>
            <li><Link className="hover:text-sand" href="/politique-confidentialite">Politique de confidentialité</Link></li>
            <li><Link className="hover:text-sand" href="/politique-cookies">Politique de cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-[min(1180px,92%)] flex-wrap items-center justify-between gap-3 pt-6 text-[0.85rem]">
        <span>© 2026 {BRAND.name}</span>
        <FanarCredit />
      </div>
    </footer>
  );
}