/**
 * Source de vérité marque (futur Sanity : document "brand").
 * ✔ = données réelles vérifiées · ⚠️ = à valider avec LOKAL avant lancement.
 */
export const BRAND = {
  name: "LOKAL",
  tagline: "Boutique éphémère d'artisans-créateurs du 35",
  address: {
    line1: "Galerie commerciale Grand Quartier", // ✔
    line2: "35760 Saint-Grégoire",
    landmark: "À côté de Cultura", // ✔ Ouest-France
  },
  hours: "Lundi → Samedi · 9h30–20h", // ⚠️ re-vérifier avant lancement
  phone: "+33614337046", // ✔
  phoneDisplay: "06 14 33 70 46",
  instagram: "https://www.instagram.com/lokal_bzh/",
  instagramHandle: "@lokal_bzh",
  facebook: "https://www.facebook.com/p/Lokal-61565304609508/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Galerie+commerciale+Grand+Quartier%2C+35760+Saint-Gr%C3%A9goire",
  announcement:
    "Boutique éphémère · Galerie Grand Quartier, Saint-Grégoire — lun.–sam. 9h30–20h",
  fanar: {
    credit: "Site conçu avec Fanar",
    url: null as string | null, // ⚠️ TODO : URL portfolio Fanar quand prêt
  },
} as const;

export type Brand = typeof BRAND;