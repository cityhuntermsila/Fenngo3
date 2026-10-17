(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;

  const categoryLabels = {
    English: {
      cours: "Courses",
      games: "Games",
      tracing: "Tracing & Writing",
      test: "Test",
      stories: "Short Stories",
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
      games: "Jeux",
      tracing: "Traçage / Écriture",
      test: "Test",
      stories: "Histoire courte",
      alphabet: "Alphabet",
      numbers: "Nombres",
      colors: "Couleurs",
      geometry: "Géométrie",
      family: "Famille",
      stationery: "Fournitures Scolaires",
      bodyParts: "Parties du Corps",
      dailyRoutine: "Routine Quotidienne",
      commonOrders: "Ordres Courants"
    },
    Arabic: {
      cours: "الدروس",
      games: "الألعاب",
      tracing: "التخطيط والكتابة",
      test: "الاختبار",
      stories: "قصص قصيرة",
      alphabet: "الأبجدية",
      numbers: "الأرقام",
      colors: "الألوان",
      geometry: "الأشكال",
      family: "العائلة",
      stationery: "الأدوات المدرسية",
      bodyParts: "أجزاء الجسم",
      dailyRoutine: "الروتين اليومي",
      commonOrders: "الأوامر المدرسية"
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
