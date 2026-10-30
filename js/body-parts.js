(() => {
  "use strict";

  const iconImg = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,0.2));">`;

  const ICONS = {
    head: iconImg("assets/images/body-parts/head.png", "Head"),
    hair: iconImg("assets/images/body-parts/hair.png", "Hair"),
    eye: iconImg("assets/images/body-parts/eye.png", "Eye"),
    ear: iconImg("assets/images/body-parts/ear.png", "Ear"),
    nose: iconImg("assets/images/body-parts/nose.png", "Nose"),
    mouth: iconImg("assets/images/body-parts/mouth.png", "Mouth"),
    hand: iconImg("assets/images/body-parts/hand.png", "Hand"),
    arm: iconImg("assets/images/body-parts/arm.png", "Arm"),
    leg: iconImg("assets/images/body-parts/leg.png", "Leg"),
    foot: iconImg("assets/images/body-parts/foot.png", "Foot")
  };

  const THEMES = [
    { bg: "linear-gradient(145deg, #fff1f2, #fecdd3)", shadow: "#be123c", accent: "#f43f5e", text: "#881337" },
    { bg: "linear-gradient(145deg, #fefce8, #fde047)", shadow: "#a16207", accent: "#eab308", text: "#713f12" },
    { bg: "linear-gradient(145deg, #eff6ff, #bfdbfe)", shadow: "#1d4ed8", accent: "#3b82f6", text: "#1e3a8a" },
    { bg: "linear-gradient(145deg, #f0fdf4, #bbf7d0)", shadow: "#15803d", accent: "#22c55e", text: "#14532d" },
    { bg: "linear-gradient(145deg, #fff7ed, #fed7aa)", shadow: "#c2410c", accent: "#f97316", text: "#7c2d12" },
    { bg: "linear-gradient(145deg, #fdf2f8, #fbcfe8)", shadow: "#be185d", accent: "#ec4899", text: "#831843" },
    { bg: "linear-gradient(145deg, #faf5ff, #e9d5ff)", shadow: "#7e22ce", accent: "#a855f7", text: "#4c1d95" },
    { bg: "linear-gradient(145deg, #ecfeff, #a5f3fc)", shadow: "#0e7490", accent: "#06b6d4", text: "#164e63" },
    { bg: "linear-gradient(145deg, #eef2ff, #c7d2fe)", shadow: "#4338ca", accent: "#6366f1", text: "#312e81" },
    { bg: "linear-gradient(145deg, #f0fdfa, #99f6e4)", shadow: "#0f766e", accent: "#14b8a6", text: "#134e4a" }
  ];

  const DATA = {
    English: {
      title: "My Body Parts",
      subtitle: "Tap any body part to hear and learn!",
      badge: "Body Parts",
      listen: "Listen",
      items: [
        { id: "head", label: "Head", phrase: "This is my head.", speech: "Head. This is my head." },
        { id: "hair", label: "Hair", phrase: "This is my hair.", speech: "Hair. This is my hair." },
        { id: "eye", label: "Eye", phrase: "This is my eye.", speech: "Eye. This is my eye." },
        { id: "ear", label: "Ear", phrase: "This is my ear.", speech: "Ear. This is my ear." },
        { id: "nose", label: "Nose", phrase: "This is my nose.", speech: "Nose. This is my nose." },
        { id: "mouth", label: "Mouth", phrase: "This is my mouth.", speech: "Mouth. This is my mouth." },
        { id: "hand", label: "Hand", phrase: "This is my hand.", speech: "Hand. This is my hand." },
        { id: "arm", label: "Arm", phrase: "This is my arm.", speech: "Arm. This is my arm." },
        { id: "leg", label: "Leg", phrase: "This is my leg.", speech: "Leg. This is my leg." },
        { id: "foot", label: "Foot", phrase: "This is my foot.", speech: "Foot. This is my foot." }
      ]
    },
    French: {
      title: "Les Parties du Corps",
      subtitle: "Touche une partie du corps pour écouter et apprendre !",
      badge: "Parties du Corps",
      listen: "Écouter",
      items: [
        { id: "head", label: "La tête", phrase: "Voici la tête.", speech: "La tête. Voici la tête." },
        { id: "hair", label: "Les cheveux", phrase: "Voici les cheveux.", speech: "Les cheveux. Voici les cheveux." },
        { id: "eye", label: "L'œil", phrase: "Voici l'œil.", speech: "L'œil. Voici l'œil." },
        { id: "ear", label: "L'oreille", phrase: "Voici l'oreille.", speech: "L'oreille. Voici l'oreille." },
        { id: "nose", label: "Le nez", phrase: "Voici le nez.", speech: "Le nez. Voici le nez." },
        { id: "mouth", label: "La bouche", phrase: "Voici la bouche.", speech: "La bouche. Voici la bouche." },
        { id: "hand", label: "La main", phrase: "Voici la main.", speech: "La main. Voici la main." },
        { id: "arm", label: "Le bras", phrase: "Voici le bras.", speech: "Le bras. Voici le bras." },
        { id: "leg", label: "La jambe", phrase: "Voici la jambe.", speech: "La jambe. Voici la jambe." },
        { id: "foot", label: "Le pied", phrase: "Voici le pied.", speech: "Le pied. Voici le pied." }
      ]
    }
  };

  let currentIndex = 0;

  function getLangData() {
    const langId = window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
    return DATA[langId] || DATA.English;
  }

  function renderPage() {
    const d = getLangData();
    document.getElementById("topicTitle").textContent = d.title;
    document.getElementById("topicSubtitle").textContent = d.subtitle;
    document.getElementById("modalListenText").textContent = d.listen;

    const grid = document.getElementById("topicGrid");
    grid.innerHTML = "";

    d.items.forEach((item, idx) => {
      const theme = THEMES[idx % THEMES.length];
      const card = document.createElement("button");
      card.type = "button";
      card.className = "topic-card";
      card.style.setProperty("--card-bg", theme.bg);
      card.style.setProperty("--card-shadow", theme.shadow);
      card.style.setProperty("--card-accent", theme.accent);
      card.style.setProperty("--card-text", theme.text);

      card.innerHTML = `
        <div class="topic-card-icon">${ICONS[item.id] || ""}</div>
        <div class="topic-card-label">${item.label}</div>
      `;

      card.addEventListener("click", () => openModal(idx));
      grid.appendChild(card);
    });
  }

  function openModal(index) {
    const d = getLangData();
    currentIndex = (index + d.items.length) % d.items.length;
    const item = d.items[currentIndex];

    document.getElementById("modalCategoryBadge").textContent = d.badge;
    document.getElementById("modalAvatarStage").innerHTML = ICONS[item.id] || "";
    document.getElementById("modalTitle").textContent = item.label;
    document.getElementById("modalPhrase").textContent = item.phrase;

    const modal = document.getElementById("topicModal");
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    if (window.AppLang) window.AppLang.speak(item.speech);
  }

  function closeModal() {
    const modal = document.getElementById("topicModal");
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    if (window.AppLang) window.AppLang.stopSpeech();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderPage();

    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
    document.getElementById("modalPrevBtn").addEventListener("click", () => openModal(currentIndex - 1));
    document.getElementById("modalNextBtn").addEventListener("click", () => openModal(currentIndex + 1));
    document.getElementById("modalSoundBtn").addEventListener("click", () => {
      const d = getLangData();
      const item = d.items[currentIndex];
      if (item && window.AppLang) window.AppLang.speak(item.speech);
    });

    document.getElementById("topicModal").addEventListener("click", (e) => {
      if (e.target.id === "topicModal") closeModal();
    });
  });

  window.addEventListener("appLanguageChanged", renderPage);
})();
