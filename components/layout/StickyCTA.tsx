"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/data/brand";

/** CTA mobile sticky — apparaît après le hero (§42 brief), desktop hidden. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-navy/10 bg-cream/95 px-3 pt-3 backdrop-blur-md transition-transform duration-500 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "calc(0.7rem + env(safe-area-inset-bottom))" }}
    >
      <Link
        href="/la-boutique"
        className="flex-1 rounded-full bg-navy py-3.5 text-center font-semibold text-cream active:scale-[0.97]"
      >
        📍 Nous trouver
      </Link>
      <a
        href={`tel:${BRAND.phone}`}
        aria-label="Appeler LOKAL"
        className="grid w-12 shrink-0 place-items-center rounded-full border border-navy/15 bg-paper text-navy"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      </a>
    </div>
  );
}