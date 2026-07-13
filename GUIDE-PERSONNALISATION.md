# Guide de personnalisation — Site INNOV'ACTION

## ✅ Ce qui est déjà fait

- **7 pages** : Accueil, À propos, Nos activités, La Tontine (+ FAQ), Adhésion, Inscription Tontine, Contact (+ Mentions légales)
- **SEO complet** : titres et descriptions uniques par page, données structurées Google (Organisation + FAQ), sitemap.xml, robots.txt, balises Open Graph pour les partages Facebook/WhatsApp
- **100 % responsive** : téléphone, tablette, ordinateur
- **Formulaires fonctionnels** : l'inscription tontine et le contact s'envoient directement sur WhatsApp (aucun serveur nécessaire)
- **Logo recréé en SVG vectoriel** (net sur tous les écrans) : `assets/logo.svg`

## 🔧 3 choses à personnaliser avant la mise en ligne

### 1. Le numéro WhatsApp (IMPORTANT — les formulaires en dépendent)

Ouvrez `js/main.js`, ligne ~11 :

```js
var WHATSAPP_NUMBER = "237600000000"; // ← À REMPLACER
```

Remplacez par le numéro officiel au format international **sans + ni espaces**.
Exemple pour +237 6 90 12 34 56 → `"237690123456"`

### 2. Les coordonnées `[à compléter]`

Cherchez « à compléter » dans les fichiers HTML (pied de page de chaque page + page `contact.html`) et remplacez par :
- Téléphone / WhatsApp affiché
- E-mail
- Quartier / repère précis à Yaoundé
- Jour et heure des réunions

### 3. L'adresse du site (une fois le nom de domaine acheté)

Le site utilise l'adresse provisoire `https://www.innovaction-cameroun.org/`.
Quand vous aurez votre vrai nom de domaine, faites un « Rechercher / Remplacer » de
`www.innovaction-cameroun.org` par votre domaine dans **tous les fichiers .html**, `sitemap.xml` et `robots.txt`.

## 🌐 Mise en ligne (gratuite)

Options simples, sans serveur :
1. **Netlify** (recommandé) : glissez-déposez le dossier sur https://app.netlify.com/drop → site en ligne en 1 minute
2. **GitHub Pages** ou **Vercel** : gratuits également

Ensuite :
- Déclarez le site sur **Google Search Console** (https://search.google.com/search-console) et soumettez `sitemap.xml` → indexation Google rapide
- Créez une fiche **Google Business Profile** « INNOV'ACTION Yaoundé » → visibilité locale
- Ajoutez le lien du site sur la **page Facebook** (bouton « S'inscrire » vers `inscription.html`)

## 📈 Conseils marketing intégrés au site

- Parcours de conversion AIDA : confiance (badge légal) → services → preuve (garanties) → action (CTA)
- Bouton WhatsApp flottant sur toutes les pages
- Réassurance systématique près des formulaires (légalité, délai 72 h, protection des données)
- FAQ optimisée pour apparaître dans les résultats enrichis de Google
