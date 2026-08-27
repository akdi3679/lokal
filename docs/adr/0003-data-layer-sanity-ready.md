# ADR-0003 — Couche de données prête pour Sanity

**Statut :** Accepté · **Date :** 2026-08

## Contexte
LOKAL doit pouvoir gérer créateurs/créations/planning sans développeur,
mais un CMS en v1 = complexité inutile (P12).

## Décision
- `data/*.ts` = source de vérité v1, validée au build par schémas Zod (`schemas/`).
- Composants = uniquement via `lib/content` (repository pattern).
- Noms de champs Zod = futurs `defineType` Sanity 1:1 (objets `seo`, `imageWithAlt` §75).
- Bascule = 1 ligne dans `lib/content/index.ts` (+ webhook `/api/revalidate` §77).

## Conséquences
+ Migration sans toucher un seul composant.
+ Fail-fast au build si donnée invalide (P4).
− Double maintenance schémas Zod ↔ Sanity le jour de la bascule (accepté).