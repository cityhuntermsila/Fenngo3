(() => {
  "use strict";

  const ICONS = {
    pencil: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(70,70) rotate(32) translate(-70,-70)">
          <rect x="52" y="18" width="36" height="18" rx="6" fill="#f472b6" stroke="#ffffff" stroke-width="4"/>
          <rect x="52" y="34" width="36" height="8" fill="#cbd5e1" stroke="#ffffff" stroke-width="3"/>
          <rect x="52" y="42" width="36" height="60" fill="#facc15" stroke="#ffffff" stroke-width="4"/>
          <line x1="64" y1="42" x2="64" y2="102" stroke="#eab308" stroke-width="3"/>
          <line x1="76" y1="42" x2="76" y2="102" stroke="#eab308" stroke-width="3"/>
          <polygon points="52,102 88,102 70,128" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
          <polygon points="64,118 76,118 70,128" fill="#1e293b"/>
        </g>
      </svg>`,
    pen: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(70,70) rotate(32) translate(-70,-70)">
          <rect x="55" y="16" width="30" height="36" rx="10" fill="#1d4ed8" stroke="#ffffff" stroke-width="4"/>
          <path d="M85 24 L94 24 L94 52" fill="none" stroke="#93c5fd" stroke-width="5" stroke-linecap="round"/>
          <rect x="57" y="52" width="26" height="52" rx="6" fill="#3b82f6" stroke="#ffffff" stroke-width="4"/>
          <polygon points="57,104 83,104 70,126" fill="#e2e8f0" stroke="#ffffff" stroke-width="3.5"/>
          <circle cx="70" cy="125" r="3" fill="#1e3a8a"/>
        </g>
      </svg>`,
    book: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="20" width="84" height="100" rx="12" fill="#ef4444" stroke="#ffffff" stroke-width="5"/>
        <rect x="36" y="20" width="10" height="100" fill="#b91c1c"/>
        <rect x="54" y="36" width="46" height="28" rx="6" fill="#fef08a" stroke="#ffffff" stroke-width="3"/>
        <line x1="60" y1="80" x2="94" y2="80" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
        <line x1="60" y1="92" x2="86" y2="92" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    notebook: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="34" y="20" width="76" height="100" rx="10" fill="#a855f7" stroke="#ffffff" stroke-width="5"/>
        <rect x="44" y="28" width="58" height="84" rx="6" fill="#ffffff"/>
        <line x1="52" y1="46" x2="94" y2="46" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="52" y1="62" x2="94" y2="62" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="52" y1="78" x2="94" y2="78" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="52" y1="94" x2="80" y2="94" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <g fill="#475569">
          <rect x="26" y="34" width="14" height="6" rx="3"/>
          <rect x="26" y="54" width="14" height="6" rx="3"/>
          <rect x="26" y="74" width="14" height="6" rx="3"/>
          <rect x="26" y="94" width="14" height="6" rx="3"/>
        </g>
      </svg>`,
    eraser: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(70,70) rotate(-18) translate(-70,-70)">
          <rect x="26" y="42" width="54" height="56" rx="10" fill="#ec4899" stroke="#ffffff" stroke-width="5"/>
          <rect x="68" y="42" width="46" height="56" rx="10" fill="#38bdf8" stroke="#ffffff" stroke-width="5"/>
          <rect x="58" y="42" width="22" height="56" fill="#ffffff"/>
        </g>
      </svg>`,
    ruler: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(70,70) rotate(-30) translate(-70,-70)">
          <rect x="48" y="14" width="44" height="112" rx="8" fill="#facc15" stroke="#ffffff" stroke-width="5"/>
          <g stroke="#92400e" stroke-width="3.5" stroke-linecap="round">
            <line x1="48" y1="30" x2="64" y2="30"/>
            <line x1="48" y1="46" x2="70" y2="46"/>
            <line x1="48" y1="62" x2="64" y2="62"/>
            <line x1="48" y1="78" x2="70" y2="78"/>
            <line x1="48" y1="94" x2="64" y2="94"/>
            <line x1="48" y1="110" x2="70" y2="110"/>
          </g>
        </g>
      </svg>`,
    schoolbag: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 24 Q70 6 88 24" fill="none" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
        <rect x="30" y="26" width="80" height="92" rx="24" fill="#22c55e" stroke="#ffffff" stroke-width="5"/>
        <path d="M34 60 Q70 76 106 60 L106 44 Q106 28 88 28 L52 28 Q34 28 34 44 Z" fill="#16a34a" stroke="#ffffff" stroke-width="4"/>
        <rect x="44" y="74" width="52" height="32" rx="12" fill="#facc15" stroke="#ffffff" stroke-width="4"/>
        <rect x="64" y="56" width="12" height="16" rx="4" fill="#fef08a" stroke="#b45309" stroke-width="2.5"/>
      </svg>`,
    scissors: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <line x1="46" y1="92" x2="104" y2="26" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
        <line x1="94" y1="92" x2="36" y2="26" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
        <circle cx="70" cy="64" r="5" fill="#475569"/>
        <circle cx="44" cy="98" r="20" fill="none" stroke="#f97316" stroke-width="10"/>
        <circle cx="96" cy="98" r="20" fill="none" stroke="#f97316" stroke-width="10"/>
      </svg>`,
    sharpener: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="34" y="32" width="72" height="78" rx="18" fill="#06b6d4" stroke="#ffffff" stroke-width="5"/>
        <rect x="50" y="48" width="40" height="46" rx="8" fill="#e2e8f0" stroke="#0891b2" stroke-width="3"/>
        <circle cx="70" cy="70" r="7" fill="#475569"/>
        <path d="M58 110 A12 10 0 0 1 82 110" fill="#0f172a"/>
      </svg>`,
    pencilcase: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="44" width="104" height="56" rx="26" fill="#f43f5e" stroke="#ffffff" stroke-width="5"/>
        <line x1="26" y1="64" x2="114" y2="64" stroke="#fde047" stroke-width="5" stroke-dasharray="8 5"/>
        <circle cx="96" cy="64" r="8" fill="#facc15" stroke="#ffffff" stroke-width="3"/>
        <polygon points="70,76 74,84 82,85 76,90 78,98 70,94 62,98 64,90 58,85 66,84" fill="#fef08a"/>
      </svg>`
  };

  const THEMES = [
    { bg: "linear-gradient(145deg, #fffbeb, #fef08a)", shadow: "#ca8a04", accent: "#eab308", text: "#713f12" },
    { bg: "linear-gradient(145deg, #eff6ff, #bfdbfe)", shadow: "#1d4ed8", accent: "#3b82f6", text: "#1e3a8a" },
    { bg: "linear-gradient(145deg, #fef2f2, #fecaca)", shadow: "#b91c1c", accent: "#ef4444", text: "#7f1d1d" },
    { bg: "linear-gradient(145deg, #faf5ff, #e9d5ff)", shadow: "#7e22ce", accent: "#a855f7", text: "#4c1d95" },
    { bg: "linear-gradient(145deg, #fdf2f8, #fbcfe8)", shadow: "#be185d", accent: "#ec4899", text: "#831843" },
    { bg: "linear-gradient(145deg, #fefce8, #fde047)", shadow: "#a16207", accent: "#ca8a04", text: "#713f12" },
    { bg: "linear-gradient(145deg, #f0fdf4, #bbf7d0)", shadow: "#15803d", accent: "#22c55e", text: "#14532d" },
    { bg: "linear-gradient(145deg, #fff7ed, #fed7aa)", shadow: "#c2410c", accent: "#f97316", text: "#7c2d12" },
    { bg: "linear-gradient(145deg, #ecfeff, #a5f3fc)", shadow: "#0e7490", accent: "#06b6d4", text: "#164e63" },
    { bg: "linear-gradient(145deg, #fff1f2, #fecdd3)", shadow: "#be123c", accent: "#f43f5e", text: "#881337" }
  ];

  const DATA = {
    English: {
      title: "School Stationery",
      subtitle: "Tap any school item to hear and learn!",
      badge: "School Stationery",
      listen: "Listen",
      items: [
        { id: "pencil", label: "Pencil", phrase: "This is a pencil.", speech: "Pencil. This is a pencil." },
        { id: "pen", label: "Pen", phrase: "This is a pen.", speech: "Pen. This is a pen." },
        { id: "book", label: "Book", phrase: "This is a book.", speech: "Book. This is a book." },
        { id: "notebook", label: "Notebook", phrase: "This is a notebook.", speech: "Notebook. This is a notebook." },
        { id: "eraser", label: "Eraser", phrase: "This is an eraser.", speech: "Eraser. This is an eraser." },
        { id: "ruler", label: "Ruler", phrase: "This is a ruler.", speech: "Ruler. This is a ruler." },
        { id: "schoolbag", label: "School Bag", phrase: "This is a school bag.", speech: "School bag. This is a school bag." },
        { id: "scissors", label: "Scissors", phrase: "These are scissors.", speech: "Scissors. These are scissors." },
        { id: "sharpener", label: "Sharpener", phrase: "This is a sharpener.", speech: "Sharpener. This is a sharpener." },
        { id: "pencilcase", label: "Pencil Case", phrase: "This is a pencil case.", speech: "Pencil case. This is a pencil case." }
      ]
    },
    French: {
      title: "Fournitures Scolaires",
      subtitle: "Touche un objet scolaire pour écouter et apprendre !",
      badge: "Fournitures Scolaires",
      listen: "Écouter",
      items: [
        { id: "pencil", label: "Le crayon", phrase: "C'est un crayon.", speech: "Le crayon. C'est un crayon." },
        { id: "pen", label: "Le stylo", phrase: "C'est un stylo.", speech: "Le stylo. C'est un stylo." },
        { id: "book", label: "Le livre", phrase: "C'est un livre.", speech: "Le livre. C'est un livre." },
        { id: "notebook", label: "Le cahier", phrase: "C'est un cahier.", speech: "Le cahier. C'est un cahier." },
        { id: "eraser", label: "La gomme", phrase: "C'est une gomme.", speech: "La gomme. C'est une gomme." },
        { id: "ruler", label: "La règle", phrase: "C'est une règle.", speech: "La règle. C'est une règle." },
        { id: "schoolbag", label: "Le cartable", phrase: "C'est un cartable.", speech: "Le cartable. C'est un cartable." },
        { id: "scissors", label: "Les ciseaux", phrase: "Ce sont des ciseaux.", speech: "Les ciseaux. Ce sont des ciseaux." },
        { id: "sharpener", label: "Le taille-crayon", phrase: "C'est un taille-crayon.", speech: "Le taille-crayon. C'est un taille-crayon." },
        { id: "pencilcase", label: "La trousse", phrase: "C'est une trousse.", speech: "La trousse. C'est une trousse." }
      ]
    },
    Arabic: {
      title: "الأدوات المدرسية",
      subtitle: "اضغط على أي أداة مدرسية للاستماع والتعلم!",
      badge: "الأدوات المدرسية",
      listen: "استمع",
      items: [
        { id: "pencil", label: "قَلَمُ رَصَاص", phrase: "هَذَا قَلَمُ رَصَاص.", speech: "قَلَمُ رَصَاص. هَذَا قَلَمُ رَصَاص." },
        { id: "pen", label: "قَلَمُ حِبْر", phrase: "هَذَا قَلَمُ حِبْر.", speech: "قَلَمُ حِبْر. هَذَا قَلَمُ حِبْر." },
        { id: "book", label: "كِتَاب", phrase: "هَذَا كِتَاب.", speech: "كِتَاب. هَذَا كِتَاب." },
        { id: "notebook", label: "كُرَّاس", phrase: "هَذَا كُرَّاس.", speech: "كُرَّاس. هَذَا كُرَّاس." },
        { id: "eraser", label: "مِمْحَاة", phrase: "هَذِهِ مِمْحَاة.", speech: "مِمْحَاة. هَذِهِ مِمْحَاة." },
        { id: "ruler", label: "مِسْطَرَة", phrase: "هَذِهِ مِسْطَرَة.", speech: "مِسْطَرَة. هَذِهِ مِسْطَرَة." },
        { id: "schoolbag", label: "مِحْفَظَة", phrase: "هَذِهِ مِحْفَظَة.", speech: "مِحْفَظَة. هَذِهِ مِحْفَظَة." },
        { id: "scissors", label: "مِقَصّ", phrase: "هَذَا مِقَصّ.", speech: "مِقَصّ. هَذَا مِقَصّ." },
        { id: "sharpener", label: "مِبْرَاة", phrase: "هَذِهِ مِبْرَاة.", speech: "مِبْرَاة. هَذِهِ مِبْرَاة." },
        { id: "pencilcase", label: "مِقْلَمَة", phrase: "هَذِهِ مِقْلَمَة.", speech: "مِقْلَمَة. هَذِهِ مِقْلَمَة." }
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
