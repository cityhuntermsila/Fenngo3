(() => {
  "use strict";

  const iconImg = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,0.2));">`;

  const ICONS = {
    wakeup: iconImg("assets/images/daily-routine/wakeup.png", "Wake up"),
    washface: iconImg("assets/images/daily-routine/washface.png", "Wash my face"),
    brushteeth: iconImg("assets/images/daily-routine/brushteeth.png", "Brush my teeth"),
    getdressed: iconImg("assets/images/daily-routine/getdressed.png", "Get dressed"),
    breakfast: iconImg("assets/images/daily-routine/breakfast.png", "Eat breakfast"),
    goschool: iconImg("assets/images/daily-routine/goschool.png", "Go to school"),
    study: iconImg("assets/images/daily-routine/study.png", "Study"),
    play: iconImg("assets/images/daily-routine/play.png", "Play"),
    homework: iconImg("assets/images/daily-routine/homework.png", "Do homework"),
    sleep: iconImg("assets/images/daily-routine/sleep.png", "Sleep")
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
