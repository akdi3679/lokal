import { CategorySchema, type Category } from "@/schemas/category";

const raw: Category[] = [
  {
    id: "bijoux",
    name: "Bijoux",
    slug: "bijoux",
    description: "Céramique, verre, matières upcyclées… des bijoux qu'on ne voit pas partout.",
  },
  {
    id: "maison",
    name: "Maison",
    slug: "maison",
    description: "Bois façonné, vitrail, illustration : des pièces qui donnent une âme à votre intérieur.",
  },
  {
    id: "mode",
    name: "Mode & accessoires",
    slug: "mode-accessoires",
    description: "Sacs, trousses et accessoires cousus ou détournés à la main.",
  },
  {
    id: "cadeaux",
    name: "Créations & cadeaux",
    slug: "creations-cadeaux",
    description: "Une petite merveille pour offrir — ou pour se faire plaisir.",
  },
];

export const CATEGORIES: Category[] = raw.map((c) => CategorySchema.parse(c));