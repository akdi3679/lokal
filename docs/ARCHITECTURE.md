# Architecture — LOKAL (L1 / Type 1)

Client (browser)
  │  TLS + headers sécurité (proxy.ts)
  ▼
Next.js 16 (Vercel) — Server Components par défaut, islands clients :
  FiltersBar, MobileMenu, FanarPanel, StickyCTA, ContactForm, animations
  ▼
lib/content (repository) ──► data/*.ts (v1)  |  Sanity (v2, stub prêt)

## Décisions (ADR)
- 0001 Stack Next 16 + Tailwind v4 (blueprint Type 1 §50).
- 0002 Tier L1 : pas de DB/auth/paiement ; triggers de croissance ci-dessous.
- 0003 Data layer : Zod = contrat Sanity ; switch = 1 ligne.

## Triggers de croissance (§49)
- Blog/actus fréquentes → Type 2 : activer sanityAdapter + webhook /api/revalidate.
- Vente en ligne → Type 3 : Stripe, DB, idempotency, webhooks signés, L3. 