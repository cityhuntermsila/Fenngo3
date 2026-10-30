(() => {
  "use strict";

  const iconImg = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,0.2));">`;

  const ICONS = {
    standup: iconImg("assets/images/common-orders/standup.png", "Stand up"),
    sitdown: iconImg("assets/images/common-orders/sitdown.png", "Sit down"),
    raisehand: iconImg("assets/images/common-orders/raisehand.png", "Raise your hand"),
    erase: iconImg("assets/images/common-orders/erase.png", "Erase"),
    showpoint: iconImg("assets/images/common-orders/showpoint.png", "Show / Point"),
    listen: iconImg("assets/images/common-orders/listen.png", "Listen"),
    look: iconImg("assets/images/common-orders/look.png", "Look"),
    read: iconImg("assets/images/common-orders/read.png", "Read"),
    draw: iconImg("assets/images/common-orders/draw.png", "Draw"),
    colour: iconImg("assets/images/common-orders/colour.png", "Colour"),
    write: iconImg("assets/images/common-orders/write.png", "Write"),
    repeatsay: iconImg("assets/images/common-orders/repeatsay.png", "Repeat / Say"),
    tick: iconImg("assets/images/common-orders/tick.png", "Tick"),
    cross: iconImg("assets/images/common-orders/cross.png", "Cross"),
    circle: iconImg("assets/images/common-orders/circle.png", "Circle"),
    match: iconImg("assets/images/common-orders/match.png", "Match"),
    repeatafterme: iconImg("assets/images/common-orders/repeatafterme.png", "Repeat after me"),
    lookpicture: iconImg("assets/images/common-orders/lookpicture.png", "Look at the picture"),
    listencd: iconImg("assets/images/common-orders/listencd.png", "Listen to the CD"),
    openbook: iconImg("assets/images/common-orders/openbook.png", "Open your book")
  };

  const THEMES = [
    { bg: "linear-gradient(145deg, #f0fdf4, #bbf7d0)", shadow: "#15803d", accent: "#22c55e", text: "#14532d" },
    { bg: "linear-gradient(145deg, #fff7ed, #fed7aa)", shadow: "#c2410c", accent: "#f97316", text: "#7c2d12" },
    { bg: "linear-gradient(145deg, #faf5ff, #e9d5ff)", shadow: "#7e22ce", accent: "#a855f7", text: "#4c1d95" },
    { bg: "linear-gradient(145deg, #fdf2f8, #fbcfe8)", shadow: "#be185d", accent: "#ec4899", text: "#831843" },
    { bg: "linear-gradient(145deg, #fefce8, #fde047)", shadow: "#a16207", accent: "#eab308", text: "#713f12" },
    { bg: "linear-gradient(145deg, #eff6ff, #bfdbfe)", shadow: "#1d4ed8", accent: "#3b82f6", text: "#1e3a8a" },
    { bg: "linear-gradient(145deg, #ecfeff, #a5f3fc)", shadow: "#0e7490", accent: "#06b6d4", text: "#164e63" },
    { bg: "linear-gradient(145deg, #fff1f2, #fecdd3)", shadow: "#be123c", accent: "#f43f5e", text: "#881337" },
    { bg: "linear-gradient(145deg, #eef2ff, #c7d2fe)", shadow: "#4338ca", accent: "#6366f1", text: "#312e81" },
    { bg: "linear-gradient(145deg, #f0fdfa, #99f6e4)", shadow: "#0f766e", accent: "#14b8a6", text: "#134e4a" }
  ];

  const DATA = {
    English: {
      title: "Common Classroom Orders",
      subtitle: "Tap any command to hear and practice!",
      badge: "Classroom Command",
      listen: "Listen",
      items: [
        { id: "standup", label: "Stand up.", phrase: "Stand up, please.", speech: "Stand up." },
        { id: "sitdown", label: "Sit down.", phrase: "Sit down, please.", speech: "Sit down." },
        { id: "raisehand", label: "Raise your hand.", phrase: "Raise your hand, please.", speech: "Raise your hand." },
        { id: "erase", label: "Erase.", phrase: "Erase the board, please.", speech: "Erase." },
        { id: "showpoint", label: "Show. / Point.", phrase: "Show and point!", speech: "Show. Point." },
        { id: "listen", label: "Listen.", phrase: "Listen carefully!", speech: "Listen." },
        { id: "look", label: "Look.", phrase: "Look here!", speech: "Look." },
        { id: "read", label: "Read.", phrase: "Read the text!", speech: "Read." },
        { id: "draw", label: "Draw.", phrase: "Draw a picture!", speech: "Draw." },
        { id: "colour", label: "Colour.", phrase: "Colour the picture!", speech: "Colour." },
        { id: "write", label: "Write.", phrase: "Write in your notebook!", speech: "Write." },
        { id: "repeatsay", label: "Repeat. / Say.", phrase: "Repeat and say!", speech: "Repeat. Say." },
        { id: "tick", label: "Tick.", phrase: "Tick the right box! (✓)", speech: "Tick." },
        { id: "cross", label: "Cross.", phrase: "Put a cross! (✗)", speech: "Cross." },
        { id: "circle", label: "Circle.", phrase: "Circle the correct answer!", speech: "Circle." },
        { id: "match", label: "Match.", phrase: "Match the items together!", speech: "Match." },
        { id: "repeatafterme", label: "Repeat after me, please.", phrase: "Repeat after me, please.", speech: "Repeat after me, please." },
        { id: "lookpicture", label: "Look at the picture, please.", phrase: "Look at the picture, please.", speech: "Look at the picture, please." },
        { id: "listencd", label: "Listen to the CD, please.", phrase: "Listen to the CD, please.", speech: "Listen to the CD, please." },
        { id: "openbook", label: "Open your book, please.", phrase: "Open your book, please.", speech: "Open your book, please." }
      ]
    },
    French: {
      title: "Les Ordres de la Classe",
      subtitle: "Touche une consigne pour l'écouter et la répéter !",
      badge: "Consigne Scolaire",
      listen: "Écouter",
      items: [
        { id: "standup", label: "Debout.", phrase: "Lève-toi, s'il te plaît.", speech: "Debout. Lève-toi." },
        { id: "sitdown", label: "Assis.", phrase: "Assieds-toi, s'il te plaît.", speech: "Assis. Assieds-toi." },
        { id: "raisehand", label: "Lève ta main.", phrase: "Lève ta main, s'il te plaît.", speech: "Lève ta main." },
        { id: "erase", label: "Efface.", phrase: "Efface le tableau.", speech: "Efface." },
        { id: "showpoint", label: "Montre. / Pointe.", phrase: "Montre du doigt !", speech: "Montre. Pointe." },
        { id: "listen", label: "Écoute.", phrase: "Écoute attentivement !", speech: "Écoute." },
        { id: "look", label: "Regarde.", phrase: "Regarde bien !", speech: "Regarde." },
        { id: "read", label: "Lis.", phrase: "Lis le texte !", speech: "Lis." },
        { id: "draw", label: "Dessine.", phrase: "Dessine une image !", speech: "Dessine." },
        { id: "colour", label: "Colorie.", phrase: "Colorie le dessin !", speech: "Colorie." },
        { id: "write", label: "Écris.", phrase: "Écris sur ton cahier !", speech: "Écris." },
        { id: "repeatsay", label: "Répète. / Dis.", phrase: "Répète et dis !", speech: "Répète. Dis." },
        { id: "tick", label: "Coche.", phrase: "Coche la bonne case ! (✓)", speech: "Coche." },
        { id: "cross", label: "Mets une croix.", phrase: "Mets une croix ! (✗)", speech: "Mets une croix." },
        { id: "circle", label: "Entoure.", phrase: "Entoure la bonne réponse !", speech: "Entoure." },
        { id: "match", label: "Relie.", phrase: "Relie les éléments ensemble !", speech: "Relie." },
        { id: "repeatafterme", label: "Répète après moi, s'il te plaît.", phrase: "Répète après moi, s'il te plaît.", speech: "Répète après moi, s'il te plaît." },
        { id: "lookpicture", label: "Regarde l'image, s'il te plaît.", phrase: "Regarde l'image, s'il te plaît.", speech: "Regarde l'image, s'il te plaît." },
        { id: "listencd", label: "Écoute le CD, s'il te plaît.", phrase: "Écoute le CD, s'il te plaît.", speech: "Écoute le CD, s'il te plaît." },
        { id: "openbook", label: "Ouvre ton livre, s'il te plaît.", phrase: "Ouvre ton livre, s'il te plaît.", speech: "Ouvre ton livre, s'il te plaît." }
      ]
    },
    Arabic: {
      title: "الأوامر المدرسية الشائعة",
      subtitle: "اضغط على أي تعليمة للاستماع والتدرب عليها!",
      badge: "تعليمة مدرسية",
      listen: "استمع",
      items: [
        { id: "standup", label: "قِفْ.", phrase: "قِفْ مِنْ فَضْلِكَ.", speech: "قِفْ." },
        { id: "sitdown", label: "اِجْلِسْ.", phrase: "اِجْلِسْ مِنْ فَضْلِكَ.", speech: "اِجْلِسْ." },
        { id: "raisehand", label: "اِرْفَعْ يَدَكَ.", phrase: "اِرْفَعْ يَدَكَ مِنْ فَضْلِكَ.", speech: "اِرْفَعْ يَدَكَ." },
        { id: "erase", label: "اِمْسَحْ.", phrase: "اِمْسَحِ السَّبُّورَة.", speech: "اِمْسَحْ." },
        { id: "showpoint", label: "أَرِنِي. / أَشِرْ.", phrase: "أَرِنِي وَأَشِرْ بِإِصْبَعِكَ!", speech: "أَرِنِي. أَشِرْ." },
        { id: "listen", label: "اِسْتَمِعْ.", phrase: "اِسْتَمِعْ جَيِّدًا!", speech: "اِسْتَمِعْ." },
        { id: "look", label: "اُنْظُرْ.", phrase: "اُنْظُرْ إِلَى هُنَا!", speech: "اُنْظُرْ." },
        { id: "read", label: "اِقْرَأْ.", phrase: "اِقْرَأِ النَّصَّ!", speech: "اِقْرَأْ." },
        { id: "draw", label: "اُرْسُمْ.", phrase: "اُرْسُمْ صُورَةً!", speech: "اُرْسُمْ." },
        { id: "colour", label: "لَوِّنْ.", phrase: "لَوِّنِ الرَّسْمَ!", speech: "لَوِّنْ." },
        { id: "write", label: "اُكْتُبْ.", phrase: "اُكْتُبْ عَلَى كُرَّاسِكَ!", speech: "اُكْتُبْ." },
        { id: "repeatsay", label: "أَعِدْ. / قُلْ.", phrase: "أَعِدْ وَقُلْ!", speech: "أَعِدْ. قُلْ." },
        { id: "tick", label: "ضَعْ عَلَامَةَ صَحّ.", phrase: "ضَعْ عَلَامَةَ صَحّ! (✓)", speech: "ضَعْ عَلَامَةَ صَحّ." },
        { id: "cross", label: "ضَعْ عَلَامَةَ خَطَأ.", phrase: "ضَعْ عَلَامَةَ خَطَأ! (✗)", speech: "ضَعْ عَلَامَةَ خَطَأ." },
        { id: "circle", label: "حَوِّطْ.", phrase: "حَوِّطِ الإِجَابَةَ الصَّحِيحَة!", speech: "حَوِّطْ." },
        { id: "match", label: "اِرْبِطْ.", phrase: "اِرْبِطْ بَيْنَ العَنَاصِر!", speech: "اِرْبِطْ." },
        { id: "repeatafterme", label: "أَعِدْ بَعْدِي مِنْ فَضْلِكَ.", phrase: "أَعِدْ بَعْدِي مِنْ فَضْلِكَ.", speech: "أَعِدْ بَعْدِي مِنْ فَضْلِكَ." },
        { id: "lookpicture", label: "اُنْظُرْ إِلَى الصُّورَةِ مِنْ فَضْلِكَ.", phrase: "اُنْظُرْ إِلَى الصُّورَةِ مِنْ فَضْلِكَ.", speech: "اُنْظُرْ إِلَى الصُّورَةِ مِنْ فَضْلِكَ." },
        { id: "listencd", label: "اِسْتَمِعْ إِلَى القُرْصِ مِنْ فَضْلِكَ.", phrase: "اِسْتَمِعْ إِلَى القُرْصِ مِنْ فَضْلِكَ.", speech: "اِسْتَمِعْ إِلَى القُرْصِ مِنْ فَضْلِكَ." },
        { id: "openbook", label: "اِفْتَحْ كِتَابَكَ مِنْ فَضْلِكَ.", phrase: "اِفْتَحْ كِتَابَكَ مِنْ فَضْلِكَ.", speech: "اِفْتَحْ كِتَابَكَ مِنْ فَضْلِكَ." }
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
