import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LOKAL — Boutique de créateurs",
    short_name: "LOKAL",
    description: "Boutique éphémère d'artisans-créateurs du 35 · Grand Quartier, Saint-Grégoire.",
    start_url: "/",
    background_color: "#1C2452",
    theme_color: "#1C2452",
    display: "standalone",
    lang: "fr",
  icons: [
  { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
  { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
],
  };
}