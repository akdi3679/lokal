"use client";

import { useEffect, useState } from "react";
import LogoAnimated from "@/components/cards/LogoAnimated";

/**
 * Loader plein écran :
 * • Durée MINIMUM garantie : 2500 ms (pour voir l'animation complète)
 * • L'animation logo se joue TOUJOURS (même si page prête en 100ms)
 * • Disparition uniquement quand : 2500ms écoulés + anim finie + page prête
 */
export default function Loader({
  ready = false,
  onDone,
}: {
  ready?: boolean;
  onDone?: () => void;
}) {
  const [animDone, setAnimDone] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [visible, setVisible] = useState(true);

  // Timer minimum FORCÉ de 2500ms
  useEffect(() => {
    const t = window.setTimeout(() => setMinTimeDone(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  // Disparition : toutes les conditions remplies
  useEffect(() => {
    if (animDone && minTimeDone && ready) {
      const fadeOut = window.setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 400);
      return () => window.clearTimeout(fadeOut);
    }
  }, [animDone, minTimeDone, ready, onDone]);

  if (!visible) return null;

  const canHide = animDone && minTimeDone && ready;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        background: "#1C2452",
        overflow: "hidden",
        opacity: canHide ? 0 : 1,
        transition: "opacity 400ms ease-out",
        pointerEvents: canHide ? "none" : "auto",
      }}
    >
      <LogoAnimated
        play
        height={200}
        inkColor="#D7BC87"
        bgColor="#1C2452"
        withBackground
        onDone={() => setAnimDone(true)}
      />
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
        }}
      >
        LOKAL — chargement en cours
      </span>
    </div>
  );
}