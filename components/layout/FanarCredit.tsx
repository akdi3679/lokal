"use client";

import { useState } from "react";
import { BRAND } from "@/data/brand";

/** Crédit footer discret (§32 brief) — jamais dominant, jamais popup. */
export default function FanarCredit() {
  const [note, setNote] = useState(false);
  const url = BRAND.fanar.url;

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-cream/55 transition-colors hover:text-sand">
        {BRAND.fanar.credit} ↗
      </a>
    );
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setNote(true);
        window.setTimeout(() => setNote(false), 2600);
      }}
      className="text-cream/55 transition-colors hover:text-sand"
      aria-label="Site conçu avec Fanar — portfolio bientôt en ligne"
    >
      {note ? "Le portfolio Fanar arrive bientôt ✦" : `${BRAND.fanar.credit} ↗`}
    </a>
  );
}