import type { ScheduleDay } from "@/lib/content/types";

/** ✔ Planning hebdomadaire réel — source : affiche officielle LOKAL. */
export const SCHEDULE: ScheduleDay[] = [
  { day: "Lundi",     who: [{ name: "Emmanuelle", brand: "Un atelier dans la forêt" }, { name: "Maryll", brand: "Mariluz" }] },
  { day: "Mardi",     who: [{ name: "Annabelle",  brand: "Verrev" },                 { name: "Lucille", brand: "Mme Fabrique" }] },
  { day: "Mercredi",  who: [{ name: "Annaïg",     brand: "Urban River" },            { name: "Maryll", brand: "Mariluz" }] },
  { day: "Jeudi",     who: [{ name: "Olivier",    brand: "Roud" },                   { name: "Maryll", brand: "Mariluz" }] },
  { day: "Vendredi",  who: [{ name: "Simon",      brand: "Bois bohème" },            { name: "Olivier", brand: "Roud" }] },
  { day: "Samedi",    who: [{ name: "Lucille",    brand: "Mme Fabrique" },           { name: "Annabelle", brand: "Verrev" }] },
];