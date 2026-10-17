(() => {
  "use strict";

  const ICONS = {
    head: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="76" r="10" fill="#fcd3b6" stroke="#ffffff" stroke-width="3"/>
        <circle cx="110" cy="76" r="10" fill="#fcd3b6" stroke="#ffffff" stroke-width="3"/>
        <circle cx="70" cy="74" r="44" fill="#fcd3b6" stroke="#ffffff" stroke-width="5"/>
        <path d="M28 64 Q36 22 70 24 Q104 22 112 64 Q92 44 70 46 Q48 44 28 64 Z" fill="#78350f"/>
        <circle cx="54" cy="72" r="5" fill="#1e293b"/>
        <circle cx="86" cy="72" r="5" fill="#1e293b"/>
        <circle cx="70" cy="82" r="4" fill="#f97316"/>
        <path d="M54 94 Q70 106 86 94" fill="none" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    hair: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="82" r="36" fill="#fde2cc" opacity="0.55"/>
        <path d="M24 88 Q20 26 70 22 Q120 26 116 88 Q104 54 88 58 Q70 46 52 58 Q36 54 24 88 Z" fill="#451a03" stroke="#ffffff" stroke-width="4"/>
        <path d="M46 34 Q70 24 94 34" fill="none" stroke="#92400e" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    eye: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 70 Q70 26 122 70 Q70 114 18 70 Z" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
        <circle cx="70" cy="70" r="22" fill="#0284c7"/>
        <circle cx="70" cy="70" r="10" fill="#0f172a"/>
        <circle cx="77" cy="63" r="5" fill="#ffffff"/>
        <path d="M30 46 L38 54 M70 36 L70 46 M110 46 L102 54" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    ear: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 40 C48 16, 102 16, 102 58 C102 90, 82 118, 60 118 C46 118, 42 102, 52 96" fill="#fcd3b6" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <path d="M62 48 C62 34, 88 34, 88 58 C88 76, 74 90, 64 90" fill="none" stroke="#d97706" stroke-width="4.5" stroke-linecap="round"/>
      </svg>`,
    nose: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M68 28 L52 84 C36 86, 36 106, 56 106 C64 106, 76 106, 84 106 C104 106, 104 86, 88 84 L74 28" fill="#fcd3b6" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="56" cy="96" r="5" fill="#9a3412"/>
        <circle cx="84" cy="96" r="5" fill="#9a3412"/>
      </svg>`,
    mouth: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 60 Q70 48 118 60 Q98 110 70 110 Q42 110 22 60 Z" fill="#e11d48" stroke="#ffffff" stroke-width="5"/>
        <path d="M36 62 Q70 56 104 62 L100 74 Q70 70 40 74 Z" fill="#ffffff"/>
        <ellipse cx="70" cy="96" rx="20" ry="11" fill="#fb7185"/>
      </svg>`,
    hand: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 116 L42 66 A7 7 0 0 1 56 66 L56 40 A7 7 0 0 1 70 40 L70 32 A7 7 0 0 1 84 32 L84 42 A7 7 0 0 1 98 42 L98 76 L108 66 A8 8 0 0 1 118 78 L98 110 Q86 122 66 122 Q42 122 42 116 Z" fill="#fcd3b6" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round"/>
      </svg>`,
    arm: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 92 L72 92 L92 44" fill="none" stroke="#fcd3b6" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="94" cy="38" r="14" fill="#fcd3b6" stroke="#ffffff" stroke-width="3"/>
        <rect x="16" y="74" width="26" height="36" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="4"/>
      </svg>`,
    leg: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="48" y="18" width="36" height="30" rx="8" fill="#3b82f6" stroke="#ffffff" stroke-width="4"/>
        <rect x="54" y="46" width="24" height="58" rx="10" fill="#fcd3b6" stroke="#ffffff" stroke-width="4"/>
        <path d="M50 100 L96 100 Q108 100 108 114 L48 114 Z" fill="#ef4444" stroke="#ffffff" stroke-width="4"/>
      </svg>`,
    foot: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 28 L44 82 Q44 108 72 108 L104 108 Q118 108 118 94 Q118 80 96 78 L72 72 L72 28 Z" fill="#fcd3b6" stroke="#ffffff" stroke-width="5" stroke-linejoin="round"/>
        <circle cx="114" cy="78" r="5" fill="#fcd3b6"/>
        <circle cx="104" cy="73" r="4.5" fill="#fcd3b6"/>
        <circle cx="95" cy="70" r="4" fill="#fcd3b6"/>
      </svg>`
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
    },
    Arabic: {
      title: "أجزاء الجسم",
      subtitle: "اضغط على أي جزء من الجسم للاستماع والتعلم!",
      badge: "أجزاء الجسم",
      listen: "استمع",
      items: [
        { id: "head", label: "الرَّأْس", phrase: "هَذَا هُوَ الرَّأْس.", speech: "الرَّأْس. هَذَا هُوَ الرَّأْس." },
        { id: "hair", label: "الشَّعْر", phrase: "هَذَا هُوَ الشَّعْر.", speech: "الشَّعْر. هَذَا هُوَ الشَّعْر." },
        { id: "eye", label: "العَيْن", phrase: "هَذِهِ هِيَ العَيْن.", speech: "العَيْن. هَذِهِ هِيَ العَيْن." },
        { id: "ear", label: "الأُذُن", phrase: "هَذِهِ هِيَ الأُذُن.", speech: "الأُذُن. هَذِهِ هِيَ الأُذُن." },
        { id: "nose", label: "الأَنْف", phrase: "هَذَا هُوَ الأَنْف.", speech: "الأَنْف. هَذَا هُوَ الأَنْف." },
        { id: "mouth", label: "الفَم", phrase: "هَذَا هُوَ الفَم.", speech: "الفَم. هَذَا هُوَ الفَم." },
        { id: "hand", label: "اليَد", phrase: "هَذِهِ هِيَ اليَد.", speech: "اليَد. هَذِهِ هِيَ اليَد." },
        { id: "arm", label: "الذِّرَاع", phrase: "هَذَا هُوَ الذِّرَاع.", speech: "الذِّرَاع. هَذَا هُوَ الذِّرَاع." },
        { id: "leg", label: "السَّاق", phrase: "هَذِهِ هِيَ السَّاق.", speech: "السَّاق. هَذِهِ هِيَ السَّاق." },
        { id: "foot", label: "القَدَم", phrase: "هَذِهِ هِيَ القَدَم.", speech: "القَدَم. هَذِهِ هِيَ القَدَم." }
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
