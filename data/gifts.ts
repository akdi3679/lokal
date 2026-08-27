import type { GiftEntry } from "@/lib/content/types";

/** « Pour qui ? » — choice architecture (§54 Hick's Law, brief §9). */
export const GIFTS: GiftEntry[] = [
  {
    id: "pour-elle",
    label: "Pour elle",
    desc: "Bijoux, accessoires, petites attentions.",
    href: "/creations",
    icons: ["M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"],
  },
  {
    id: "pour-lui",
    label: "Pour lui",
    desc: "Objets en bois, upcycling, affiches.",
    href: "/creations",
    icons: ["M4 20c4-9 12-9 16-16-7 1-14 4-16 16Z"],
  },
  {
    id: "maison",
    label: "Pour la maison",
    desc: "Décoration, vitrail, kokedamas, bougies.",
    href: "/creations?cat=maison",
    icons: ["m4 11 8-7 8 7", "M6 10v10h12V10"],
  },
  {
    id: "attention",
    label: "Petites attentions",
    desc: "Un cadeau qui fait mouche, sans se ruiner.",
    href: "/creations",
    icons: [
      "M5 10h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
      "M12 10v10",
      "M12 10s-4 0-5-2 1-4 3-3 2 5 2 5Zm0 0s4 0 5-2-1-4-3-3-2 5-2 5Z",
    ],
  },
  {
    id: "unique",
    label: "Pièces uniques",
    desc: "Une création qu'on ne verra pas deux fois.",
    href: "/creations?unique=1",
    icons: ["m12 3 2.5 6L21 12l-6.5 3L12 21l-2.5-6L3 12l6.5-3L12 3Z"],
  },
];