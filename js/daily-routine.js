(() => {
  "use strict";

  const ICONS = {
    wakeup: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#f59e0b" stroke-width="5" stroke-linecap="round">
          <line x1="70" y1="16" x2="70" y2="28"/>
          <line x1="28" y1="34" x2="38" y2="42"/>
          <line x1="112" y1="34" x2="102" y2="42"/>
          <line x1="16" y1="74" x2="28" y2="74"/>
          <line x1="124" y1="74" x2="112" y2="74"/>
        </g>
        <circle cx="70" cy="74" r="32" fill="#facc15" stroke="#ffffff" stroke-width="5"/>
        <circle cx="58" cy="68" r="4" fill="#78350f"/>
        <circle cx="82" cy="68" r="4" fill="#78350f"/>
        <path d="M58 82 Q70 92 82 82" fill="none" stroke="#78350f" stroke-width="4" stroke-linecap="round"/>
        <rect x="20" y="102" width="100" height="16" rx="8" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
      </svg>`,
    washface: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="66" r="34" fill="#fcd3b6" stroke="#ffffff" stroke-width="4"/>
        <path d="M40 52 Q70 30 100 52" fill="#78350f"/>
        <path d="M56 64 Q60 68 64 64 M76 64 Q80 68 84 64" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M60 80 Q70 88 80 80" fill="none" stroke="#be123c" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M32 96 C26 108, 38 116, 42 104 Z" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <path d="M70 104 C64 118, 76 124, 80 110 Z" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
        <path d="M106 96 C100 108, 112 116, 116 104 Z" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
      </svg>`,
    brushteeth: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M46 30 C32 30, 26 52, 34 74 C40 92, 44 108, 54 108 C62 108, 64 90, 70 90 C76 90, 78 108, 86 108 C96 108, 100 92, 106 74 C114 52, 108 30, 94 30 C82 30, 78 38, 70 38 C62 38, 58 30, 46 30 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="4"/>
        <rect x="18" y="82" width="104" height="14" rx="7" fill="#ec4899" stroke="#ffffff" stroke-width="3"/>
        <rect x="26" y="66" width="32" height="16" rx="4" fill="#a5f3fc" stroke="#ffffff" stroke-width="2.5"/>
      </svg>`,
    getdressed: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M46 28 L20 50 L34 68 L48 56 L48 114 L92 114 L92 56 L106 68 L120 50 L94 28 Q70 42 46 28 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="5" stroke-linejoin="round"/>
        <circle cx="70" cy="64" r="12" fill="#facc15"/>
      </svg>`,
    breakfast: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="86" rx="44" ry="26" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
        <circle cx="56" cy="82" r="14" fill="#facc15"/>
        <rect x="88" y="34" width="28" height="44" rx="6" fill="#38bdf8" stroke="#ffffff" stroke-width="4"/>
        <path d="M26 68 Q64 114 102 68 Z" fill="#f97316" stroke="#ffffff" stroke-width="4"/>
      </svg>`,
    goschool: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="44" width="100" height="58" rx="14" fill="#facc15" stroke="#ffffff" stroke-width="5"/>
        <rect x="30" y="54" width="24" height="20" rx="4" fill="#e0f2fe"/>
        <rect x="60" y="54" width="24" height="20" rx="4" fill="#e0f2fe"/>
        <rect x="90" y="54" width="20" height="20" rx="4" fill="#e0f2fe"/>
        <circle cx="44" cy="104" r="14" fill="#1e293b" stroke="#ffffff" stroke-width="4"/>
        <circle cx="96" cy="104" r="14" fill="#1e293b" stroke="#ffffff" stroke-width="4"/>
      </svg>`,
    study: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 36 Q46 26 70 38 L70 108 Q46 96 22 106 Z" fill="#fef3c7" stroke="#ffffff" stroke-width="4"/>
        <path d="M118 36 Q94 26 70 38 L70 108 Q94 96 118 106 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
        <line x1="70" y1="38" x2="70" y2="108" stroke="#d97706" stroke-width="4"/>
        <polygon points="70,18 75,30 88,31 78,39 81,52 70,45 59,52 62,39 52,31 65,30" fill="#facc15" stroke="#ffffff" stroke-width="2.5"/>
      </svg>`,
    play: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="44" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
        <polygon points="70,48 86,60 80,78 60,78 54,60" fill="#1e293b"/>
        <line x1="70" y1="48" x2="70" y2="26" stroke="#1e293b" stroke-width="4"/>
        <line x1="86" y1="60" x2="110" y2="54" stroke="#1e293b" stroke-width="4"/>
        <line x1="80" y1="78" x2="96" y2="104" stroke="#1e293b" stroke-width="4"/>
        <line x1="60" y1="78" x2="44" y2="104" stroke="#1e293b" stroke-width="4"/>
        <line x1="54" y1="60" x2="30" y2="54" stroke="#1e293b" stroke-width="4"/>
      </svg>`,
    homework: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="22" width="74" height="96" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="5"/>
        <line x1="42" y1="44" x2="86" y2="44" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>
        <line x1="42" y1="62" x2="86" y2="62" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>
        <line x1="42" y1="80" x2="74" y2="80" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(88, 68) rotate(28)">
          <rect x="0" y="0" width="16" height="48" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
          <polygon points="0,48 16,48 8,62" fill="#1e293b"/>
        </g>
      </svg>`,
    sleep: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="46" fill="#1e1b4b" stroke="#ffffff" stroke-width="4"/>
        <path d="M68 34 A30 30 0 1 0 98 84 A24 24 0 1 1 68 34 Z" fill="#fde047"/>
        <text x="42" y="54" fill="#93c5fd" font-family="'Comic Sans MS', sans-serif" font-size="18" font-weight="900">Zzz</text>
      </svg>`
  };

  const THEMES = [
    { bg: "linear-gradient(145deg, #fefce8, #fde047)", shadow: "#a16207", accent: "#eab308", text: "#713f12" },
    { bg: "linear-gradient(145deg, #ecfeff, #a5f3fc)", shadow: "#0e7490", accent: "#06b6d4", text: "#164e63" },
    { bg: "linear-gradient(145deg, #fdf2f8, #fbcfe8)", shadow: "#be185d", accent: "#ec4899", text: "#831843" },
    { bg: "linear-gradient(145deg, #eff6ff, #bfdbfe)", shadow: "#1d4ed8", accent: "#3b82f6", text: "#1e3a8a" },
    { bg: "linear-gradient(145deg, #fff7ed, #fed7aa)", shadow: "#c2410c", accent: "#f97316", text: "#7c2d12" },
    { bg: "linear-gradient(145deg, #fef2f2, #fecaca)", shadow: "#b91c1c", accent: "#ef4444", text: "#7f1d1d" },
    { bg: "linear-gradient(145deg, #faf5ff, #e9d5ff)", shadow: "#7e22ce", accent: "#a855f7", text: "#4c1d95" },
    { bg: "linear-gradient(145deg, #f0fdf4, #bbf7d0)", shadow: "#15803d", accent: "#22c55e", text: "#14532d" },
    { bg: "linear-gradient(145deg, #f0fdfa, #99f6e4)", shadow: "#0f766e", accent: "#14b8a6", text: "#134e4a" },
    { bg: "linear-gradient(145deg, #eef2ff, #c7d2fe)", shadow: "#4338ca", accent: "#6366f1", text: "#312e81" }
  ];

  const DATA = {
    English: {
      title: "Daily Routine Activities",
      subtitle: "Tap any activity to hear and learn!",
      badge: "Daily Routine",
      listen: "Listen",
      items: [
        { id: "wakeup", label: "Wake up", phrase: "I wake up in the morning.", speech: "Wake up. I wake up in the morning." },
        { id: "washface", label: "Wash my face", phrase: "I wash my face.", speech: "Wash my face. I wash my face." },
        { id: "brushteeth", label: "Brush my teeth", phrase: "I brush my teeth.", speech: "Brush my teeth. I brush my teeth." },
        { id: "getdressed", label: "Get dressed", phrase: "I get dressed.", speech: "Get dressed. I get dressed." },
        { id: "breakfast", label: "Eat breakfast", phrase: "I eat my breakfast.", speech: "Eat breakfast. I eat my breakfast." },
        { id: "goschool", label: "Go to school", phrase: "I go to school.", speech: "Go to school. I go to school." },
        { id: "study", label: "Study", phrase: "I study in class.", speech: "Study. I study in class." },
        { id: "play", label: "Play", phrase: "I play with my friends.", speech: "Play. I play with my friends." },
        { id: "homework", label: "Do homework", phrase: "I do my homework.", speech: "Do homework. I do my homework." },
        { id: "sleep", label: "Go to sleep", phrase: "I go to sleep at night.", speech: "Go to sleep. I go to sleep at night." }
      ]
    },
    French: {
      title: "Activités Quotidiennes",
      subtitle: "Touche une activité pour écouter et apprendre !",
      badge: "Routine Quotidienne",
      listen: "Écouter",
      items: [
        { id: "wakeup", label: "Se réveiller", phrase: "Je me réveille le matin.", speech: "Se réveiller. Je me réveille le matin." },
        { id: "washface", label: "Se laver le visage", phrase: "Je me lave le visage.", speech: "Se laver le visage. Je me lave le visage." },
        { id: "brushteeth", label: "Se brosser les dents", phrase: "Je me brosse les dents.", speech: "Se brosser les dents. Je me brosse les dents." },
        { id: "getdressed", label: "S'habiller", phrase: "Je m'habille.", speech: "S'habiller. Je m'habille." },
        { id: "breakfast", label: "Prendre le petit-déjeuner", phrase: "Je prends mon petit-déjeuner.", speech: "Prendre le petit-déjeuner. Je prends mon petit-déjeuner." },
        { id: "goschool", label: "Aller à l'école", phrase: "Je vais à l'école.", speech: "Aller à l'école. Je vais à l'école." },
        { id: "study", label: "Étudier", phrase: "J'étudie en classe.", speech: "Étudier. J'étudie en classe." },
        { id: "play", label: "Jouer", phrase: "Je joue avec mes amis.", speech: "Jouer. Je joue avec mes amis." },
        { id: "homework", label: "Faire ses devoirs", phrase: "Je fais mes devoirs.", speech: "Faire ses devoirs. Je fais mes devoirs." },
        { id: "sleep", label: "Dormir", phrase: "Je vais dormir la nuit.", speech: "Dormir. Je vais dormir la nuit." }
      ]
    },
    Arabic: {
      title: "الأنشطة اليومية",
      subtitle: "اضغط على أي نشاط يومي للاستماع والتعلم!",
      badge: "الروتين اليومي",
      listen: "استمع",
      items: [
        { id: "wakeup", label: "أَسْتَيْقِظُ", phrase: "أَسْتَيْقِظُ فِي الصَّبَاح.", speech: "أَسْتَيْقِظُ. أَسْتَيْقِظُ فِي الصَّبَاح." },
        { id: "washface", label: "أَغْسِلُ وَجْهِي", phrase: "أَغْسِلُ وَجْهِي بِالمَاء.", speech: "أَغْسِلُ وَجْهِي. أَغْسِلُ وَجْهِي بِالمَاء." },
        { id: "brushteeth", label: "أُنَظِّفُ أَسْنَانِي", phrase: "أُنَظِّفُ أَسْنَانِي بِالفُرْشَاة.", speech: "أُنَظِّفُ أَسْنَانِي. أُنَظِّفُ أَسْنَانِي بِالفُرْشَاة." },
        { id: "getdressed", label: "أَرْتَدِي مَلَابِسِي", phrase: "أَرْتَدِي مَلَابِسِي.", speech: "أَرْتَدِي مَلَابِسِي." },
        { id: "breakfast", label: "أَتَنَاوَلُ الفَطُور", phrase: "أَتَنَاوَلُ وَجْبَةَ الفَطُور.", speech: "أَتَنَاوَلُ الفَطُور. أَتَنَاوَلُ وَجْبَةَ الفَطُور." },
        { id: "goschool", label: "أَذْهَبُ إِلَى المَدْرَسَة", phrase: "أَذْهَبُ إِلَى المَدْرَسَة.", speech: "أَذْهَبُ إِلَى المَدْرَسَة." },
        { id: "study", label: "أَدْرُسُ", phrase: "أَدْرُسُ فِي القِسْم.", speech: "أَدْرُسُ. أَدْرُسُ فِي القِسْم." },
        { id: "play", label: "أَلْعَبُ", phrase: "أَلْعَبُ مَعَ أَصْدِقَائِي.", speech: "أَلْعَبُ. أَلْعَبُ مَعَ أَصْدِقَائِي." },
        { id: "homework", label: "أُنْجِزُ وَاجِبَاتِي", phrase: "أُنْجِزُ وَاجِبَاتِي المَدْرَسِيَّة.", speech: "أُنْجِزُ وَاجِبَاتِي. أُنْجِزُ وَاجِبَاتِي المَدْرَسِيَّة." },
        { id: "sleep", label: "أَنَامُ", phrase: "أَنَامُ فِي اللَّيْل.", speech: "أَنَامُ. أَنَامُ فِي اللَّيْل." }
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
