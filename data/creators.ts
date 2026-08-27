import { CreatorSchema, type Creator, type CreatorInput } from "@/schemas/creator";
/**
 * 18 créateurs LOKAL — données réelles où vérifiées publiquement,
 * placeholders clairement marqués `verified:false` ailleurs.
 * Source : Ouest-France, Grand Quartier, sites officiels des créateurs.
 */

const raw: CreatorInput[] = [
  // ✔ vérifiés publiquement
  {
    id: "verrev",
    name: "Annabelle",
    slug: "verrev",
    brand: "Verrev",
    category: "maison",
    craft: "Vitrail & créations en verre",
    story:
      "Maître verrier, Annabelle crée et restaure des vitraux. Chez LOKAL, elle apporte la lumière et la couleur du verre : fusing, thermoformage et petites pièces d'exception.",
    links: { site: "https://verrev.fr/" },
    featured: true,
    active: true,
    verified: true,
  },
  {
    id: "bois-boheme",
    name: "Simon",
    slug: "bois-boheme",
    brand: "Bois Bohème",
    category: "maison",
    craft: "Bois façonné, résine & gravure",
    story:
      "À La Baussaine, Simon crée des objets de décoration et d'ameublement uniques en bois recyclé, résine et gravure — pour mettre en valeur le patrimoine arboré local.",
    location: "La Baussaine (35)",
    links: {
      site: "https://www.bois-boheme.fr/",
      instagram: "https://www.instagram.com/bois.boheme/",
    },
    featured: true,
    active: true,
    verified: true,
  },
  {
    id: "urban-river",
    name: "Annaïg",
    slug: "urban-river",
    brand: "Urban River",
    category: "mode",
    craft: "Sacs, bijoux & accessoires upcyclés",
    story:
      "Annaïg collecte bâches et chambres à air pour leur offrir une seconde vie : des sacs, bijoux et accessoires modernes et éco-responsables, fabriqués à Betton.",
    location: "Betton (35)",
    links: {
      site: "https://urbanriver.fr/",
      instagram: "https://www.instagram.com/urbanrivercreations/",
    },
    active: true,
    verified: true,
  },
  {
    id: "roud",
    name: "Olivier",
    slug: "roud",
    brand: "Roud",
    category: "cadeaux",
    craft: "Illustration, affiches & univers graphique",
    story:
      "Artiste plasticien et muraliste rennais, Olivier déploie sous le nom de Roud un univers singulier : coloré, décalé et graphique.",
    location: "Rennes / Servon-sur-Vilaine (35)",
    links: { site: "https://roud.fr/" },
    active: true,
    verified: true,
  },
  {
    id: "atelier-foret",
    name: "Emmanuelle",
    slug: "un-atelier-dans-la-foret",
    brand: "Un atelier dans la forêt",
    category: "bijoux",
    craft: "Céramique — objets & bijoux, pièces uniques",
    story:
      "Dans son atelier, Emmanuelle façonne la terre pour créer des objets de décoration et des bijoux en céramique — des pièces uniques, parfois personnalisables.",
    links: { facebook: "https://www.facebook.com/unatelierdanslaforet/" },
    active: true,
    verified: true,
  },
  {
    id: "mariluz",
    name: "Maryll",
    slug: "mariluz",
    brand: "Mariluz",
    category: "cadeaux",
    craft: "Bougies artisanales & univers à découvrir",
    story:
      "L'univers de Maryll se découvre en boutique — sa présentation complète arrive bientôt. En attendant, venez la rencontrer selon le planning hebdomadaire.",
    active: true,
    verified: false,
  },
  {
    id: "mme-fabrique",
    name: "Lucille",
    slug: "mme-fabrique",
    brand: "Mme Fabrique",
    category: "mode",
    craft: "Créations textiles & univers à découvrir",
    story:
      "L'univers de Lucille se découvre en boutique — sa présentation complète arrive bientôt. En attendant, venez la rencontrer selon le planning hebdomadaire.",
    active: true,
    verified: false,
  },
  // ⚠️ placeholders pour les 11 autres créateurs — à compléter avec LOKAL
...Array.from({ length: 11 }).map<CreatorInput>((_, i) => ({
    id: `createur-${i + 8}`,
    name: "À découvrir",
    slug: `createur-${i + 8}`,
    brand: `Créateur ${i + 8}`,
    category: (["bijoux", "maison", "mode", "cadeaux"] as const)[i % 4],
    craft: "À compléter avec LOKAL",
    story:
      "Ce créateur ou cette créatrice fait partie des 18 talents de LOKAL. Son histoire et ses créations se découvrent en boutique, à Grand Quartier.",
    active: true,
    verified: false,
  })),
];

/** Validation au build : toute donnée invalide fait crasher la build (fail-fast §4). */
export const CREATORS: Creator[] = raw.map((c) => CreatorSchema.parse(c));