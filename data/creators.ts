import { CreatorSchema, type Creator, type CreatorInput } from "@/schemas/creator";

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

const GENERIC = [
  { url: u("photo-1607006344380-b6775a5c26aa"), alt: "Savons artisanaux" },
  { url: u("photo-1485955900006-10f4d324d411"), alt: "Créations végétales" },
  { url: u("photo-1515562141207-7a88fb7ce338"), alt: "Bijoux artisanaux" },
  { url: u("photo-1611652022419-a9419f74343d"), alt: "Bijoux dorés" },
  { url: u("photo-1578749556568-bc2c40e68b61"), alt: "Céramique" },
  { url: u("photo-1528459801416-a9e53bb1e17a"), alt: "Textile artisanal" },
];

const raw: CreatorInput[] = [
  {
    id: "verrev", name: "Annabelle", slug: "verrev", brand: "Verrev",
    category: "maison", craft: "Vitrail & créations en verre",
    story: "Maître verrier, Annabelle crée et restaure des vitraux. Chez LOKAL, elle apporte la lumière et la couleur du verre : fusing, thermoformage et petites pièces d'exception.",
    portrait: { url: u("photo-1541701494587-cb58502866ab"), alt: "Créations en verre — Verrev" },
    links: { site: "https://verrev.fr/" },
    featured: true, active: true, verified: true,
  },
  {
    id: "bois-boheme", name: "Simon", slug: "bois-boheme", brand: "Bois Bohème",
    category: "maison", craft: "Bois façonné, résine & gravure",
    story: "À La Baussaine, Simon crée des objets de décoration et d'ameublement uniques en bois recyclé, résine et gravure — pour mettre en valeur le patrimoine arboré local.",
    location: "La Baussaine (35)",
    portrait: { url: u("photo-1504148455328-c376907d081c"), alt: "Travail du bois — Bois Bohème" },
    links: { site: "https://www.bois-boheme.fr/", instagram: "https://www.instagram.com/bois.boheme/" },
    featured: true, active: true, verified: true,
  },
  {
    id: "urban-river", name: "Annaïg", slug: "urban-river", brand: "Urban River",
    category: "mode", craft: "Sacs, bijoux & accessoires upcyclés",
    story: "Annaïg collecte bâches et chambres à air pour leur offrir une seconde vie : des sacs, bijoux et accessoires modernes et éco-responsables, fabriqués à Betton.",
    location: "Betton (35)",
    portrait: { url: u("photo-1548036328-c9fa89d128fa"), alt: "Sacs upcyclés — Urban River" },
    links: { site: "https://urbanriver.fr/", instagram: "https://www.instagram.com/urbanrivercreations/" },
    active: true, verified: true,
  },
  {
    id: "roud", name: "Olivier", slug: "roud", brand: "Roud",
    category: "cadeaux", craft: "Illustration, affiches & univers graphique",
    story: "Artiste plasticien et muraliste rennais, Olivier déploie sous le nom de Roud un univers singulier : coloré, décalé et graphique.",
    location: "Rennes / Servon-sur-Vilaine (35)",
    portrait: { url: u("photo-1579783902614-a3fb3927b6a5"), alt: "Affiches illustrées — Roud" },
    links: { site: "https://roud.fr/" },
    active: true, verified: true,
  },
  {
    id: "atelier-foret", name: "Emmanuelle", slug: "un-atelier-dans-la-foret", brand: "Un atelier dans la forêt",
    category: "bijoux", craft: "Céramique — objets & bijoux, pièces uniques",
    story: "Dans son atelier, Emmanuelle façonne la terre pour créer des objets de décoration et des bijoux en céramique — des pièces uniques, parfois personnalisables.",
    portrait: { url: u("photo-1578749556568-bc2c40e68b61"), alt: "Céramique — Un atelier dans la forêt" },
    links: { facebook: "https://www.facebook.com/unatelierdanslaforet/" },
    active: true, verified: true,
  },
  {
    id: "mariluz", name: "Maryll", slug: "mariluz", brand: "Mariluz",
    category: "cadeaux", craft: "Bougies artisanales & univers à découvrir",
    story: "L'univers de Maryll se découvre en boutique — sa présentation complète arrive bientôt. En attendant, venez la rencontrer selon le planning hebdomadaire.",
    portrait: { url: u("photo-1603006905003-be475563bc59"), alt: "Bougies artisanales — Mariluz" },
    active: true, verified: false,
  },
  {
    id: "mme-fabrique", name: "Lucille", slug: "mme-fabrique", brand: "Mme Fabrique",
    category: "mode", craft: "Créations textiles & univers à découvrir",
    story: "L'univers de Lucille se découvre en boutique — sa présentation complète arrive bientôt. En attendant, venez la rencontrer selon le planning hebdomadaire.",
    portrait: { url: u("photo-1528459801416-a9e53bb1e17a"), alt: "Textile — Mme Fabrique" },
    active: true, verified: false,
  },
  ...Array.from({ length: 11 }).map<CreatorInput>((_, i) => ({
    id: `createur-${i + 8}`,
    name: "À découvrir",
    slug: `createur-${i + 8}`,
    brand: `Créateur ${i + 8}`,
    category: (["bijoux", "maison", "mode", "cadeaux"] as const)[i % 4],
    craft: "À compléter avec LOKAL",
    story: "Ce créateur ou cette créatrice fait partie des 18 talents de LOKAL. Son histoire et ses créations se découvrent en boutique, à Grand Quartier.",
    portrait: GENERIC[i % GENERIC.length],
    active: true,
    verified: false,
  })),
];

export const CREATORS: Creator[] = raw.map((c) => CreatorSchema.parse(c));