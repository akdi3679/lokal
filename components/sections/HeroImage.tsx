"use client";

import { useState } from "react";

/**
 * Visuel du hero — posé AU-DESSUS du pattern de dots (z-10 vs z-0).
 * Déposez votre photo dans : public/images/hero-lokal.webp
 * Si absente → tuile de marque (pas d'image cassée).
 */
export default function HeroImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="relative z-10 grid aspect-[4/5] w-full max-w-[480px] rotate-2 place-items-center rounded-2xl bg-navy shadow-[var(--shadow-lokal)]"
        role="img"
        aria-label="LOKAL — boutique de créateurs"
      >
        <svg width="120" height="120" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="38" r="15" fill="#C9A876" />
          <circle cx="32" cy="38" r="4.5" fill="#1C2452" />
          <path d="M25 13c4-1 8 0 10 3 2 3 1 7-3 9-5 3-8 3-11 8-2-8-1-16 4-20z" fill="#C9A876" />
        </svg>
        <p className="absolute bottom-5 text-sm text-cream/60">Photo de la boutique à venir</p>
      </div>
    );
  }

  return (
    <img
      src="/images/hero-lokal.webp"
      alt="L'intérieur de la boutique LOKAL — créations artisanales locales"
      onError={() => setFailed(true)}
      loading="eager"
      className="relative z-10 aspect-[4/5] w-full max-w-[480px] rotate-2 rounded-2xl object-cover shadow-[var(--shadow-lokal)]"
    />
  );
}