"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next ne scrolle pas automatiquement vers les ancres après navigation.
 * Ce composant gère : arrivée depuis une autre page, hashchange, et retries
 * pendant que la section se rend.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const tryScroll = (count = 0) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else if (count < 15) window.setTimeout(() => tryScroll(count + 1), 100);
      };
      requestAnimationFrame(() => tryScroll());
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}