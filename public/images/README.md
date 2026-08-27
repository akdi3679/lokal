# Images LOKAL

Convention de nommage : `{type}-{sujet}-{w}x{h}.webp` (AVIF/WebP §26, EXIF strippé §18).

## À collecter avec LOKAL (accord écrit des créateurs) :
- `hero-boutique-1200x900.webp` — vitrine / intérieur boutique
- `portrait-{slug}-600x750.webp` — un par créateur (alt = nom + craft)
- `creation-{slug}-{n}-800x600.webp` — fiches créations
- `planning-semaine.webp` — affiche planning (fallback visuel)

## Règles
- Jamais de photo sans autorisation ; jamais de visage d'enfant.
- Alt obligatoire (schéma `imageWithAlt`, ADR-0003).
- Poids cible : hero < 100 KB, cartes < 60 KB (§26 budgets).