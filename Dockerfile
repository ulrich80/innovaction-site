# ============================================================
# INNOV'ACTION — Site statique servi par Nginx
# Compatible Dokploy (provider : Dockerfile)
# ============================================================
FROM nginx:1.27-alpine

# Configuration Nginx optimisée (gzip, cache, sécurité)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fichiers du site
COPY index.html a-propos.html activites.html tontine.html adhesion.html inscription.html contact.html mentions-legales.html sitemap.xml robots.txt /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
