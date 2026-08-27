# Security Policy — LOKAL

**Tier déclaré : L1** (vitrine + formulaire de contact, sans auth ni paiement).

## Signaler une vulnérabilité
Email : [EMAIL SÉCURITÉ] · ou `/.well-known/security.txt`. Réponse sous 72 h.
Merci de ne pas tester en production de manière destructive.

## Périmètre attendu
Headers sécurité (HSTS, CSP report-only→strict), validation Zod + honeypot + Turnstile
sur `/api/contact`, rate-limit 3–5 req/min/IP, robots.txt (guidance, pas sécurité).

## Hors périmètre actuel (croissance documentée)
Auth, paiements, CMS public, uploads utilisateurs → voir `docs/adr/0002-tier-L1.md`.