# Site web INNOV'ACTION

Site vitrine de l'association INNOV'ACTION (Association d'Innovation et de Développement) — Yaoundé, Cameroun.
Tontine, épargne solidaire, formations pratiques et projets économiques collectifs.

## Stack

- Site 100 % statique : HTML / CSS / JavaScript (aucune dépendance, aucun build)
- Servi par **Nginx** via le `Dockerfile` fourni
- Formulaires (inscription tontine + contact) envoyés via **WhatsApp** — aucun backend requis

## Déploiement sur Dokploy

1. Dans Dokploy : **Create Application** → provider **GitHub** (ou Git) → ce dépôt, branche `main`
2. Build Type : **Dockerfile** (détecté automatiquement à la racine)
3. Deploy → le conteneur écoute sur le **port 80**
4. Ajouter le domaine dans l'onglet **Domains** (HTTPS automatique via Let's Encrypt/Traefik)

Chaque `git push` sur `main` peut redéclencher un déploiement (activer l'auto-deploy dans Dokploy).

## Personnalisation avant mise en production

Voir [GUIDE-PERSONNALISATION.md](GUIDE-PERSONNALISATION.md) :

1. **Numéro WhatsApp** dans `js/main.js` (`WHATSAPP_NUMBER`) — reçoit les inscriptions
2. Coordonnées `[à compléter]` (footers + `contact.html`)
3. Nom de domaine réel à substituer à `www.innovaction-cameroun.org` (balises SEO + `sitemap.xml` + `robots.txt`)
