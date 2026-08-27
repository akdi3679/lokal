"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/data/navigation";

/**
 * Liens de navigation avec état actif : la page déjà ouverte devient
 * NON cliquable (aria-current + aria-disabled + pointer-events-none).
 * Les ancres (#...) restent cliquables (elles scrollent).
 */
export default function NavLinks({ variant }: { variant: "header" | "footer" | "mobile" }) {
  const pathname = usePathname();

  const base = {
    header:
      "relative py-1 text-[0.95rem] font-semibold transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-sand after:transition-all after:duration-300",
    footer: "text-[0.95rem]",
    mobile:
      "border-b border-sand/25 py-2.5 font-serif text-[clamp(1.7rem,7vw,2.4rem)] font-bold text-paper",
  }[variant];

  const idle = {
    header: "text-ink after:w-0 hover:text-royal hover:after:w-full",
    footer: "text-cream/75 hover:text-sand",
    mobile: "hover:text-sand",
  }[variant];

  const active = {
    header: "pointer-events-none text-royal after:w-full opacity-70",
    footer: "pointer-events-none text-sand opacity-70",
    mobile: "pointer-events-none text-sand opacity-70",
  }[variant];

  return (
    <>
      {NAVIGATION.map((item) => {
        const isPage = !item.href.includes("#");
        const isActive = isPage && pathname === item.href;
        if (isActive) {
          return (
            <span key={item.href} aria-current="page" aria-disabled="true" className={`${base} ${active}`}>
              {item.label}
            </span>
          );
        }
        return (
          <Link key={item.href} href={item.href} className={`${base} ${idle}`}>
            {item.label}
          </Link>
        );
      })}
    </>
  );
}