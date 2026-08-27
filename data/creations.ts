import { CreationSchema, type Creation, type CreationInput } from "@/schemas/creation";
/**
 * ⚠️ Créations = EXEMPLES de démonstration. Aucun prix inventé.
 * Disponibilité toujours "on-request" → confirmer en boutique.
 * Remplacer par vraies fiches produit quand LOKAL fournit photos/prix.
 */
const raw: CreationInput[] = [
  {
    id: "c1",
    creatorId: "atelier-foret",
    name: "Bijou en céramique — pièce unique",
    slug: "bijou-ceramique-piece-unique",
    category: "bijoux",
    unique: true,
    placeholder: true,
    tags: ["pour-elle", "attention"],
  },
  {
    id: "c2",
    creatorId: "roud",
    name: "Affiche illustrée — série limitée",
    slug: "affiche-illustree-serie-limitee",
    category: "cadeaux",
    smallSeries: true,
    placeholder: true,
    tags: ["maison", "attention"],
  },
  {
    id: "c3",
    creatorId: "urban-river",
    name: "Sac upcyclé en bâche",
    slug: "sac-upcycle-bache",
    category: "mode",
    placeholder: true,
    tags: ["pour-elle", "pour-lui"],
  },
  {
    id: "c4",
    creatorId: "bois-boheme",
    name: "Objet en bois façonné main",
    slug: "objet-bois-faconne-main",
    category: "maison",
    unique: true,
    placeholder: true,
    tags: ["maison", "pour-lui"],
  },
  {
    id: "c5",
    creatorId: "verrev",
    name: "Création en verre & vitrail",
    slug: "creation-verre-vitrail",
    category: "maison",
    unique: true,
    placeholder: true,
    tags: ["maison"],
  },
  {
    id: "c6",
    creatorId: "mariluz",
    name: "Bougie artisanale parfumée",
    slug: "bougie-artisanale-parfumee",
    category: "cadeaux",
    smallSeries: true,
    placeholder: true,
    tags: ["maison", "attention"],
  },
  {
    id: "c7",
    creatorId: "mme-fabrique",
    name: "Trousse cousue main",
    slug: "trousse-cousue-main",
    category: "mode",
    placeholder: true,
    tags: ["attention", "pour-elle"],
  },
  {
    id: "c8",
    creatorId: null,
    name: "Kokedama — création végétale",
    slug: "kokedama-creation-vegetale",
    category: "maison",
    unique: true,
    placeholder: true,
    tags: ["maison"],
  },
];

export const CREATIONS: Creation[] = raw.map((c) => CreationSchema.parse(c));