"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/sections/Loader";

/**
 * Loader initial : s'affiche au premier mount de l'app, joue l'animation
 * complète du logo, puis disparaît. Ne se rejoue pas aux navigations
 * suivantes (sinon ça coupe le parcours utilisateur).
 */
export default function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Marque que le loader a été vu (pour ne pas le rejouer aux navigations)
    try {
      window.sessionStorage.setItem("lokal_loader_seen", "1");
    } catch {
      /* noop */
    }
  }, []);

  if (!show) return null;

  return <Loader ready onDone={() => setShow(false)} />;
}