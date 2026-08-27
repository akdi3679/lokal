import Link from "next/link";
import LogoStatic from "@/components/cards/LogoStatic";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAVIGATION } from "@/data/navigation";
import { BRAND } from "@/data/brand";
import NavLinks from "@/components/layout/NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1180px,92%)] items-center gap-6 py-3.5">
<LogoStatic height={40} inkColor="#1C2452" bgColor="#FAF6EE" />
        <div className="ml-auto flex items-center gap-5">
<div className="hidden items-center gap-6 lg:flex"><NavLinks variant="header" /></div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de LOKAL"
            className="grid size-11 place-items-center rounded-full border border-navy/15 bg-paper text-navy transition-colors hover:bg-navy hover:text-sand"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <Link
            href="/la-boutique"
            className="hidden rounded-full bg-navy px-5 py-3 text-[0.92rem] font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-royal md:inline-flex"
          >
            Nous trouver
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}