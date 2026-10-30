(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;

  const categoryLabels = {
    English: {
      cours: "Courses",
      practice: "Practice & Games",
      vocabulary: "Multi-Sensory Vocab",
      games: "Games",
      tracing: "Tracing & Writing",
      test: "Test",
      stories: "Short Stories",
      progression: "Progression & Stats",
      alphabet: "Alphabet",
      numbers: "Numbers",
      colors: "Colors",
      geometry: "Geometry",
      family: "Family",
      stationery: "School Stationery",
      bodyParts: "Body Parts",
      dailyRoutine: "Daily Routine",
      commonOrders: "Common Orders"
    },
    French: {
      cours: "Cours",
      practice: "Entraînement & Jeux",
      vocabulary: "Vocabulaire Multisensoriel",
      games: "Jeux",
      tracing: "Traçage / Écriture",
      test: "Test",
      stories: "Histoire courte",
      progression: "Suivi & Progression",
      alphabet: "Alphabet",
      numbers: "Nombres",
      colors: "Couleurs",
      geometry: "Géométrie",
      family: "Famille",
      stationery: "Fournitures Scolaires",
      bodyParts: "Parties du Corps",
      dailyRoutine: "Routine Quotidienne",
      commonOrders: "Ordres Courants"
    }
  };

  function getViewportSize() {
    const viewport = window.visualViewport;

    return {
      width: Math.round(viewport ? viewport.width : window.innerWidth),
      height: Math.round(viewport ? viewport.height : window.innerHeight),
    };
  }

  function updateMobileLayout() {
    const { width, height } = getViewportSize();
    root.style.setProperty("--visible-width", `${width}px`);
    root.style.setProperty("--visible-height", `${height}px`);
    body.classList.remove("mobile-portrait-rotate");
  }

  function applyLocalizedLabels() {
    const langId = window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
    const labels = categoryLabels[langId] || categoryLabels.English;

    const cards = document.querySelectorAll(".category-card");
    cards.forEach((card) => {
      const key = card.getAttribute("data-cat-key");
      const label = key && labels[key] ? labels[key] : card.getAttribute("aria-label");
      if (!label) return;
      card.setAttribute("aria-label", label);

      let pill = card.querySelector(".category-card-pill");
      if (!pill) {
        pill = document.createElement("span");
        pill.className = "category-card-pill";
        card.style.position = "relative";
        card.appendChild(pill);
      }
      pill.textContent = label;
    });
  }

  function initialiseCards() {
    document.querySelectorAll(".category-card").forEach((card) => {
      card.addEventListener("pointerdown", () => card.classList.add("clicked"));

      const clearPressedState = () => card.classList.remove("clicked");
      card.addEventListener("pointerup", clearPressedState);
      card.addEventListener("pointercancel", clearPressedState);
      card.addEventListener("pointerleave", clearPressedState);
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyLocalizedLabels();
  });

  window.addEventListener("appLanguageChanged", () => {
    applyLocalizedLabels();
  });

  updateMobileLayout();
  initialiseCards();
  applyLocalizedLabels();

  window.addEventListener("resize", updateMobileLayout, { passive: true });
  window.addEventListener("orientationchange", updateMobileLayout, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateMobileLayout, { passive: true });
  }
})();
