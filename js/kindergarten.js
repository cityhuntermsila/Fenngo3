(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const card = document.querySelector(".kindergarten-card");

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

  function initialiseCard() {
    if (!card) return;

    card.addEventListener("pointerdown", () => card.classList.add("clicked"));

    const clearPressedState = () => card.classList.remove("clicked");
    card.addEventListener("pointerup", clearPressedState);
    card.addEventListener("pointercancel", clearPressedState);
    card.addEventListener("pointerleave", clearPressedState);
  }

  function initialisePage() {
    body.classList.add("page-ready");
    updateMobileLayout();
    initialiseCard();
  }

  initialisePage();

  window.addEventListener("resize", updateMobileLayout, { passive: true });
  window.addEventListener("orientationchange", updateMobileLayout, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateMobileLayout, { passive: true });
  }
})();
