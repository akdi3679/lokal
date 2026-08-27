"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Anchor scrolling that works with Next.js pushState navigation
 * (pushState does NOT fire hashchange → we use click delegation instead).
 * Handles: same-page clicks, cross-page clicks, and direct URL load with #hash.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (!id) return;
      const tryScroll = (count = 0) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (count < 20) window.setTimeout(() => tryScroll(count + 1), 100);
      };
      requestAnimationFrame(() => tryScroll());
    };

    // 1 · On route change / first load (e.g. arriving from another page with /#decouvrir)
    if (window.location.hash) scrollToHash(window.location.hash);

    // 2 · Click delegation on EVERY link containing a # (nav, footer, buttons…)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href*='#']");
      if (!a) return;
      let hash = "";
      try {
        hash = new URL(a.href, window.location.origin).hash;
      } catch {
        return;
      }
      if (!hash) return;
      // Let Next navigate first, then scroll (retries until section exists)
      window.setTimeout(() => scrollToHash(hash), 60);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}