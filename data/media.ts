import type { MediaImage } from "@/lib/content/types";

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

/** Images éditoriales (fallback de marque automatique si URL indisponible). */
export const MEDIA = {
  hero: {
    url: u("photo-1441986300917-64674bd600d8", 1200),
    alt: "L'intérieur de la boutique LOKAL — créations artisanales locales",
  },
  insta: [
    { url: u("photo-1515562141207-7a88fb7ce338", 600), alt: "Vu chez LOKAL — bijoux" },
    { url: u("photo-1578749556568-bc2c40e68b61", 600), alt: "Vu chez LOKAL — céramique" },
    { url: u("photo-1504148455328-c376907d081c", 600), alt: "Vu chez LOKAL — travail du bois" },
    { url: u("photo-1603006905003-be475563bc59", 600), alt: "Vu chez LOKAL — bougies" },
    { url: u("photo-1548036328-c9fa89d128fa", 600), alt: "Vu chez LOKAL — sacs & accessoires" },
    { url: u("photo-1485955900006-10f4d324d411", 600), alt: "Vu chez LOKAL — créations végétales" },
  ] as MediaImage[],
};