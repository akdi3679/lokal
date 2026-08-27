"use client";

import { useMemo, useState } from "react";

const TONES = [
  { bg: "#1C2452", fg: "#C9A876" },
  { bg: "#2B3A9C", fg: "#FAF6EE" },
  { bg: "#C9A876", fg: "#1C2452" },
  { bg: "#F4EAD6", fg: "#1C2452" },
];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

/** Image de marque générée (monogramme + dots) — utilisée si aucune photo fournie. */
function fallbackSrc(label: string, tone: number) {
  const t = TONES[tone % TONES.length];
  const letter = (label.trim()[0] ?? "L").toUpperCase();
  const name = esc(label.toUpperCase().slice(0, 18));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="${t.bg}"/><g fill="${t.fg}" opacity="0.45"><circle cx="690" cy="120" r="46"/><circle cx="745" cy="235" r="26"/><circle cx="615" cy="55" r="18"/><circle cx="85" cy="890" r="34"/></g><text x="400" y="560" font-family="Georgia,'Times New Roman',serif" font-size="330" font-weight="700" text-anchor="middle" fill="${t.fg}">${esc(letter)}</text><text x="400" y="700" font-family="Verdana,sans-serif" font-size="42" letter-spacing="6" text-anchor="middle" fill="${t.fg}" opacity="0.85">${name}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export interface SmartImageProps {
  /** Chemin local optionnel, ex: "/images/creators/verrev.webp" */
  src?: string | null;
  alt: string;
  /** Texte pour le monogramme du fallback (nom / marque). */
  label: string;
  tone?: number;
  className?: string;
}

export default function SmartImage({ src, alt, label, tone, className = "" }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const t = tone ?? hash(label);
  const fallback = useMemo(() => fallbackSrc(label, t), [label, t]);
  const finalSrc = src && !failed ? src : fallback;

  return (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      onError={() => src && setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}