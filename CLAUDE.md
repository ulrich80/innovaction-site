# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Site vitrine 100 % statique (HTML/CSS/JS vanilla, aucun build, aucune dépendance) de l'association INNOV'ACTION (tontine, épargne solidaire — Yaoundé, Cameroun). Tout le contenu, les commits et les commentaires de code sont en **français**.

## Commands

- **Dev server / preview**: use the Browser pane with the launch config named `site` (`.claude/launch.json` → `python -m http.server 8737`). No build, lint, or test tooling exists.
- **Docker (production)**: `docker build -t innovaction .` then `docker run -p 80:80 innovaction` — Nginx serves the site (deployed via Dokploy, auto-deploy on push to `main`).

## Architecture

- **8 HTML pages at the repo root** (index, a-propos, activites, tontine, adhesion, inscription, contact, mentions-legales, actualites). There is **no templating**: the header (nav + dropdown « Nos services »), footer, and floating WhatsApp button are duplicated in every page. Any change to these shared blocks must be replicated across **all** HTML files.
- **`css/style.css`** — single stylesheet. Design tokens (colors from the logo: `--green`, `--orange`, `--blue`, fonts Fraunces/Karla, radius, shadows) are CSS variables in `:root` at the top. A `V2` section at the bottom (~line 1117) holds the July 2026 homepage redesign styles; responsive rules live in the `RESPONSIVE` section.
- **`js/main.js`** — single script, IIFE per feature: mobile nav, services dropdown, scroll-reveal animations (`.reveal` → `.visible` via IntersectionObserver with fallbacks), floating WhatsApp link, and the two forms.
- **Forms have no backend**: `#form-tontine` (inscription.html) and `#form-contact` (contact.html) build a formatted message and open `https://wa.me/<WHATSAPP_NUMBER>?text=...`. `WHATSAPP_NUMBER` is defined at the top of `js/main.js`.
- **SEO is per-page**: each HTML file carries its own title/description/canonical/Open Graph tags; index.html and tontine.html embed JSON-LD (NGO + FAQ). `sitemap.xml` and `robots.txt` must be updated when pages are added.
- **Dockerfile copies files explicitly**: a new HTML page must be added to the `COPY` line in the Dockerfile (note: `actualites.html` is currently missing from it) and to `sitemap.xml`.

## Pre-production placeholders (see GUIDE-PERSONNALISATION.md)

- `WHATSAPP_NUMBER = "237600000000"` in `js/main.js` is a placeholder — the forms depend on it.
- `[à compléter]` markers in footers and contact.html (phone, e-mail, address, meeting times).
- The domain `www.innovaction-cameroun.org` is provisional; it appears in all HTML heads, `sitemap.xml`, and `robots.txt`.
