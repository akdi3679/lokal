import { localAdapter } from "./local-adapter";
// import { sanityAdapter } from "./sanity-adapter.stub";

export type { ContentAdapter, CreationFilter, ScheduleDay, Announcement } from "./types";

/**
 * 🎛️ SOURCE DE CONTENU — une seule variable à changer pour basculer
 * de `data/*.ts` → Sanity.
 *
 * Aujourd'hui : local (données statiques, SSG au build).
 * Demain : sanity (ISR + webhook de revalidation, cf. /api/revalidate).
 */
export const content = localAdapter;
// export const content = sanityAdapter;