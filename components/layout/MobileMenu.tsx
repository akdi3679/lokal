"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoStatic from "@/components/cards/LogoStatic";
import { NAVIGATION } from "@/data/navigation";
import { BRAND } from "@/data/brand";
import NavLinks from "@/components/layout/NavLinks";
/** Menu mobile plein écran — navy, liens serif, fermeture auto au nav. */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className="flex flex-col gap-[5px] bg-transparent p-2.5 lg:hidden"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`h-[2.5px] w-6 rounded-sm bg-navy transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
        <span className={`h-[2.5px] w-6 rounded-sm bg-navy transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`h-[2.5px] w-6 rounded-sm bg-navy transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
      </button>

      <nav
        id="menu-mobile"
        aria-label="Menu mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-[55] flex flex-col justify-center gap-1 bg-navy px-[8%] py-10 transition-[transform,visibility] duration-500 ${
          open ? "translate-y-0 visible" : "translate-y-[-100%] invisible"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,0.75,0.25,1)" }}
      >
        <div className="absolute top-5 left-[8%] right-[8%] flex items-center justify-between">
          <LogoStatic inkColor="#FAF6EE" bgColor="#1C2452" height={26} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="grid size-11 place-items-center rounded-full border border-sand/40 text-sand"
          >
            ✕
          </button>
        </div>

       <NavLinks variant="mobile" />
        <p className="mt-6 text-[0.95rem] text-sand-soft">
          Galerie Grand Quartier, Saint-Grégoire
          <br />
          Lun.–sam. 9h30–20h ·{" "}
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="text-sand"
          >
            {BRAND.instagramHandle}
          </a>
        </p>
      </nav>
    </>
  );
}