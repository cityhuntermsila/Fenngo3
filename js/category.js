(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;

  const categoryLabels = {
    English: {
      alphabet: "Alphabet",
      numbers: "Numbers",
      colors: "Colors",
      geometry: "Geometry"
    },
    French: {
      alphabet: "Alphabet",
      numbers: "Nombres",
      colors: "Couleurs",
      geometry: "Géométrie"
    },
    Arabic: {
      alphabet: "الأبجدية",
      numbers: "الأرقام",
      colors: "الألوان",
      geometry: "الأشكال"
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
    const shortSide = Math.min(width, height);
    const longSide = Math.max(width, height);
    const isMobileLandscapeLayout = shortSide <= 767 && longSide <= 1024;
    const visibleWidth = isMobileLandscapeLayout ? shortSide : width;
    const visibleHeight = isMobileLandscapeLayout ? longSide : height;

    root.style.setProperty("--visible-width", `${visibleWidth}px`);
    root.style.setProperty("--visible-height", `${visibleHeight}px`);

    const shouldRotate = isMobileLandscapeLayout && height > width;
    body.classList.toggle("mobile-landscape-layout", isMobileLandscapeLayout);
    body.classList.toggle("mobile-portrait-rotate", shouldRotate);
  }

  function applyLocalizedLabels() {
    const langId = window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
    const labels = categoryLabels[langId] || categoryLabels.English;

    const cards = document.querySelectorAll(".category-card");
    const map = [
      { key: "alphabet", label: labels.alphabet },
      { key: "numbers", label: labels.numbers },
      { key: "colors", label: labels.colors },
      { key: "geometry", label: labels.geometry }
    ];

    cards.forEach((card, i) => {
      if (!map[i]) return;
      card.setAttribute("aria-label", map[i].label);

      // Add or update subtitle pill
      let pill = card.querySelector(".category-card-pill");
      if (!pill) {
        pill = document.createElement("span");
        pill.className = "category-card-pill";
        card.style.position = "relative";
        card.appendChild(pill);
      }
      pill.textContent = map[i].label;
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
