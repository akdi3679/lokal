"use client";

import { useEffect, useState } from "react";
import SilkBackground from "@/components/layout/SilkBackground";
import { BRAND } from "@/data/brand";

const SNOOZE_KEY = "lokal_fanar_snooze";
const SNOOZE_MS = 30 * 60_000;

export default function FanarPanel() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(false);

  useEffect(() => {
    let snoozed = false;
    try {
      snoozed = Date.now() < Number(window.localStorage.getItem(SNOOZE_KEY) || 0);
    } catch {
      /* noop */
    }
    if (snoozed) return;
    const t = window.setTimeout(() => setOpen(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  const closePanel = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(SNOOZE_KEY, String(Date.now() + SNOOZE_MS));
    } catch {
      /* noop */
    }
  };

  const reopen = () => {
    setOpen(true);
    try {
      window.localStorage.removeItem(SNOOZE_KEY);
    } catch {
      /* noop */
    }
  };

  const textShadow = { textShadow: "0 1px 10px rgba(0,0,26,0.9)" } as const;

  return (
    <>
      {open && (
        <aside
          role="complementary"
          aria-label="À propos de la réalisation du site"
          className="fanar-enter fixed right-3 z-[70] w-[min(380px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-blue-400/40 shadow-[0_0_40px_rgba(80,80,255,0.45)] md:right-5"
          style={{ bottom: "calc(84px + env(safe-area-inset-bottom))", background: "#04041a" }}
        >
          <div className="relative">
            {/* 1 · Soie animée, pleine */}
            <div className="absolute inset-0">
              <SilkBackground />
            </div>

            {/* 2 · Voile LÉGER (0.30) : la soie reste visible */}
            <div className="absolute inset-0" style={{ background: "rgba(4,4,26,0.30)" }} />

            {/* 3 · Contenu transparent, texte avec ombre portée */}
            <div className="relative z-10 p-5">
              <button
                type="button"
                onClick={closePanel}
                aria-label="Fermer"
                className="absolute top-2 right-2 grid size-8 place-items-center rounded-full bg-white/15 text-cream/90 backdrop-blur-sm transition hover:bg-white/25 hover:text-cream"
              >
                ✕
              </button>

              <div className="flex items-start gap-3.5">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-300/40 bg-blue-950/70 font-serif text-xl font-extrabold text-blue-100"
                  aria-hidden="true"
                >
                  F
                </span>
                <div className="flex-1" style={textShadow}>
                  <h5 className="text-[1.05rem] font-bold leading-tight text-cream">
                    Ce site a été imaginé avec Fanar.
                  </h5>
                  <p className="mt-1.5 text-[0.88rem] leading-snug text-blue-100">
                    Une présence digitale pensée pour mettre en valeur LOKAL,
                    ses créateurs et leurs histoires.
                  </p>
                  <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {BRAND.fanar.url ? (
                      <a
                        href={BRAND.fanar.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-sand px-4 py-1.5 text-[0.85rem] font-bold text-navy transition hover:bg-sand-soft"
                        style={{ textShadow: "none" }}
                      >
                        Découvrir Fanar →
                      </a>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setNote(true);
                          window.setTimeout(() => setNote(false), 2600);
                        }}
                        className="inline-flex items-center gap-1 rounded-full bg-sand px-4 py-1.5 text-[0.85rem] font-bold text-navy transition hover:bg-sand-soft"
                        style={{ textShadow: "none" }}
                      >
                        {note ? "Bientôt disponible ✦" : "Découvrir Fanar →"}
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={closePanel}
                      className="text-[0.85rem] font-semibold text-blue-100/90 hover:text-cream"
                    >
                      Continuer sur LOKAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {!open && (
        <button
          type="button"
          onClick={reopen}
          aria-label="Ouvrir le panneau Fanar"
          className="group fixed right-3 z-[65] md:right-5"
          style={{ bottom: "calc(84px + env(safe-area-inset-bottom))" }}
        >
          <span className="relative grid size-14 place-items-center overflow-hidden rounded-full border border-blue-400/60 bg-[#0a0a3f] shadow-[0_0_24px_rgba(80,80,255,0.5)] transition-transform duration-300 hover:scale-110">
            <span aria-hidden="true" className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-blue-500/30" />
            <span className="relative font-serif text-xl font-extrabold text-sand">F</span>
          </span>
          <span className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-sand opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Site par Fanar
          </span>
        </button>
      )}
    </>
  );
}