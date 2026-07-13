/* ============================================================
   INNOV'ACTION — Scripts du site
   ============================================================ */

/* ------------------------------------------------------------
   CONFIGURATION — À PERSONNALISER
   Remplacez le numéro ci-dessous par le numéro WhatsApp officiel
   de l'association (format international, sans "+" ni espaces).
   Exemple pour +237 6 90 12 34 56  →  "237690123456"
   ------------------------------------------------------------ */
var WHATSAPP_NUMBER = "237600000000"; // ← À REMPLACER

/* ---------- Navigation mobile ---------- */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (!toggle || !header) return;
  toggle.addEventListener("click", function () {
    var open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ---------- Animations d'apparition au défilement ---------- */
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach(function (el) { obs.observe(el); });

  /* Filet de sécurité : si l'observateur ne se déclenche pas
     (anciens navigateurs, rendu particulier), on révèle ce qui
     est déjà dans la fenêtre après 1 seconde. */
  setTimeout(function () {
    items.forEach(function (el) {
      if (!el.classList.contains("visible") && el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 1000);
  window.addEventListener("scroll", function () {
    items.forEach(function (el) {
      if (!el.classList.contains("visible") && el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        el.classList.add("visible");
      }
    });
  }, { passive: true });
})();

/* ---------- Lien WhatsApp flottant ---------- */
(function () {
  var wa = document.querySelector(".wa-float");
  if (!wa) return;
  wa.href =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent("Bonjour INNOV'ACTION, je souhaite avoir des informations sur la tontine.");
})();

/* ---------- Utilitaire : valeur d'un champ radio ---------- */
function radioValue(form, name) {
  var el = form.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : "";
}

/* ---------- Formulaire d'inscription à la tontine ---------- */
(function () {
  var form = document.getElementById("form-tontine");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var v = function (id) {
      var el = form.querySelector("#" + id);
      return el ? el.value.trim() : "";
    };

    var lines = [
      "*DEMANDE D'INSCRIPTION À LA TONTINE — INNOV'ACTION*",
      "",
      "*A. Identité*",
      "Nom : " + v("nom"),
      "Prénom(s) : " + v("prenom"),
      "Date de naissance : " + v("naissance"),
      "Lieu de naissance : " + (v("lieu-naissance") || "—"),
      "Sexe : " + radioValue(form, "sexe"),
      "N° CNI / Passeport : " + v("cni"),
      "Profession : " + v("profession"),
      "",
      "*B. Coordonnées*",
      "Téléphone (WhatsApp) : " + v("tel"),
      "Téléphone secondaire : " + (v("tel2") || "—"),
      "E-mail : " + (v("email") || "—"),
      "Ville / quartier : " + v("ville"),
      "",
      "*C. Choix de la tontine*",
      "Statut : " + radioValue(form, "statut"),
      "Cotisation : " + v("montant") + (v("montant-autre") ? " (" + v("montant-autre") + ")" : ""),
      "Fréquence : " + radioValue(form, "frequence"),
      "Paiement : " + radioValue(form, "paiement"),
      "N° Mobile Money : " + (v("momo") || "—"),
      "Début souhaité : " + (v("debut") || "—"),
      "",
      "*D. Personne à prévenir*",
      "Bénéficiaire : " + v("benef-nom"),
      "Lien : " + v("benef-lien"),
      "Téléphone : " + v("benef-tel"),
      "",
      "*E. Engagements*",
      "✔ Informations certifiées exactes",
      "✔ Statuts et règlement intérieur acceptés",
      "✔ Consentement à l'utilisation des données"
    ];

    var url =
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank");

    var success = document.getElementById("form-success");
    if (success) {
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });

  /* Affiche le champ "Autre montant" si nécessaire */
  var montant = form.querySelector("#montant");
  var autreWrap = form.querySelector("#montant-autre-wrap");
  if (montant && autreWrap) {
    montant.addEventListener("change", function () {
      autreWrap.style.display = montant.value === "Autre" ? "" : "none";
    });
  }
})();

/* ---------- Formulaire de contact ---------- */
(function () {
  var form = document.getElementById("form-contact");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var v = function (id) {
      var el = form.querySelector("#" + id);
      return el ? el.value.trim() : "";
    };

    var lines = [
      "*MESSAGE VIA LE SITE — INNOV'ACTION*",
      "",
      "Nom : " + v("c-nom"),
      "Contact : " + v("c-contact"),
      "Sujet : " + v("c-sujet"),
      "",
      "Message :",
      v("c-message")
    ];

    var url =
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank");

    var success = document.getElementById("contact-success");
    if (success) {
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });
})();
