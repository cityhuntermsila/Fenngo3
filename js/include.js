"use strict";

const HEADER_FALLBACK = `
<header class="w-full bg-[#005f11] px-3 sm:px-4 lg:px-6 py-2 flex items-center justify-between relative z-50 shrink-0">
  <a href="category.html" class="block shrink-0">
    <img class="h-8 sm:h-9 lg:h-10 w-auto" src="assets/images/kinder-images/logo.png" alt="Kids Learner Logo">
  </a>

  <nav class="hidden lg:flex items-center gap-3">
    <a href="category.html" class="text-white text-xl font-extrabold hover:text-yellow-300 transition">Apps</a><span class="w-0.5 h-6 bg-white/45"></span>
    <a href="language.html" class="text-white text-xl font-extrabold hover:text-yellow-300 transition">Languages</a><span class="w-0.5 h-6 bg-white/45"></span>
    <a href="#" class="text-white text-xl font-extrabold hover:text-yellow-300 transition">Parents & Teachers</a><span class="w-0.5 h-6 bg-white/45"></span>
    <a href="#" class="text-white text-xl font-extrabold hover:text-yellow-300 transition">How to Join</a>
  </nav>

  <button id="menuBtn" class="lg:hidden w-10 h-10 rounded-full bg-[#084b12] flex items-center justify-center" aria-label="Open menu">
    <span class="w-6 h-5 flex flex-col justify-between"><span class="h-0.5 bg-white rounded"></span><span class="h-0.5 bg-white rounded"></span><span class="h-0.5 bg-white rounded"></span></span>
  </button>
</header>
<div id="mobileMenu" class="hidden lg:hidden bg-[#005f11] px-4 pb-4 relative z-50 shrink-0">
  <a href="category.html" class="block text-white text-base font-extrabold p-3 rounded-xl bg-white/10 hover:bg-white/20 hover:text-yellow-300">Apps</a>
  <a href="language.html" class="block text-white text-base font-extrabold p-3 rounded-xl bg-white/10 mt-2 hover:bg-white/20 hover:text-yellow-300">Languages</a>
  <a href="#" class="block text-white text-base font-extrabold p-3 rounded-xl bg-white/10 mt-2 hover:bg-white/20 hover:text-yellow-300">Parents & Teachers</a>
  <a href="#" class="block text-white text-base font-extrabold p-3 rounded-xl bg-white/10 mt-2 hover:bg-white/20 hover:text-yellow-300">How to Join</a>
</div>
`;

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
  await Promise.all([
    loadComponent("header", "assets/include/header.html", HEADER_FALLBACK),
    loadComponent("footer", "assets/include/footer.html", FOOTER_FALLBACK)
  ]);

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("mobile-menu-open"));
  }

  if (window.AppLang) {
    window.AppLang.applyPageDirection();
    window.AppLang.setupHeaderLanguageWidget();
    window.AppLang.updateHeaderNav();
  }
});
