"use strict";

const FOOTER_FALLBACK = `
<footer class="w-full bg-[#005f11] text-white text-center text-sm sm:text-base px-3 py-3 shrink-0 relative z-50"><p>&copy; 2026 Kids Learner. All Rights Reserved.</p></footer>
`;

async function loadComponent(id, file, fallback) {
  const target = document.getElementById(id);
  if (!target) return;
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error("Fetch failed with status " + response.status);
    target.innerHTML = await response.text();
  } catch (err) {
    if (fallback) {
      target.innerHTML = fallback;
    }
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  // Remove header element if present (menu bar removed)
  const headerEl = document.getElementById("header");
  if (headerEl) {
    headerEl.innerHTML = "";
    headerEl.style.display = "none";
  }

  await loadComponent("footer", "assets/include/footer.html", FOOTER_FALLBACK);

  if (window.AppLang) {
    window.AppLang.applyPageDirection();
    window.AppLang.setupBackButton();
  }
});
