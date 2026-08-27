import { CreationSchema, type Creation, type CreationInput } from "@/schemas/creation";

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

const raw: CreationInput[] = [
  {
    id: "c1", creatorId: "atelier-foret", name: "Bijou en céramique — pièce unique",
    slug: "bijou-ceramique-piece-unique", category: "bijoux", unique: true, placeholder: true,
    tags: ["pour-elle", "attention"],
    images: [{ url: u("photo-1611652022419-a9419f74343d"), alt: "Bijou en céramique" }],
  },
  {
    id: "c2", creatorId: "roud", name: "Affiche illustrée — série limitée",
    slug: "affiche-illustree-serie-limitee", category: "cadeaux", smallSeries: true, placeholder: true,
    tags: ["maison", "attention"],
    images: [{ url: u("photo-1579783902614-a3fb3927b6a5"), alt: "Affiche illustrée" }],
  },
  {
    id: "c3", creatorId: "urban-river", name: "Sac upcyclé en bâche",
    slug: "sac-upcycle-bache", category: "mode", placeholder: true,
    tags: ["pour-elle", "pour-lui"],
    images: [{ url: u("photo-1548036328-c9fa89d128fa"), alt: "Sac upcyclé" }],
  },
  {
    id: "c4", creatorId: "bois-boheme", name: "Objet en bois façonné main",
    slug: "objet-bois-faconne-main", category: "maison", unique: true, placeholder: true,
    tags: ["maison", "pour-lui"],
    images: [{ url: u("photo-1504148455328-c376907d081c"), alt: "Objet en bois" }],
  },
  {
    id: "c5", creatorId: "verrev", name: "Création en verre & vitrail",
    slug: "creation-verre-vitrail", category: "maison", unique: true, placeholder: true,
    tags: ["maison"],
    images: [{ url: u("photo-1541701494587-cb58502866ab"), alt: "Création en verre" }],
  },
  {
    id: "c6", creatorId: "mariluz", name: "Bougie artisanale parfumée",
    slug: "bougie-artisanale-parfumee", category: "cadeaux", smallSeries: true, placeholder: true,
    tags: ["maison", "attention"],
    images: [{ url: u("photo-1603006905003-be475563bc59"), alt: "Bougie artisanale" }],
  },
  {
    id: "c7", creatorId: "mme-fabrique", name: "Trousse cousue main",
    slug: "trousse-cousue-main", category: "mode", placeholder: true,
    tags: ["attention", "pour-elle"],
    images: [{ url: u("photo-1528459801416-a9e53bb1e17a"), alt: "Trousse cousue main" }],
  },
  {
    id: "c8", creatorId: null, name: "Kokedama — création végétale",
    slug: "kokedama-creation-vegetale", category: "maison", unique: true, placeholder: true,
    tags: ["maison"],
    images: [{ url: u("photo-1485955900006-10f4d324d411"), alt: "Kokedama" }],
  },
];

export const CREATIONS: Creation[] = raw.map((c) => CreationSchema.parse(c));