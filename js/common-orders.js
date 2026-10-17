(() => {
  "use strict";

  const ICONS = {
    standup: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 56 L28 24 M18 34 L28 22 L38 34" fill="none" stroke="#22c55e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="76" cy="36" r="18" fill="#fcd3b6" stroke="#ffffff" stroke-width="3.5"/>
        <rect x="60" y="56" width="32" height="36" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="3.5"/>
        <line x1="68" y1="92" x2="68" y2="120" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
        <line x1="84" y1="92" x2="84" y2="120" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
      </svg>`,
    sitdown: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 24 L28 56 M18 46 L28 58 L38 46" fill="none" stroke="#f97316" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M52 54 L52 118 M52 90 L92 90 L92 118" fill="none" stroke="#b45309" stroke-width="7" stroke-linecap="round"/>
        <circle cx="76" cy="42" r="16" fill="#fcd3b6" stroke="#ffffff" stroke-width="3"/>
        <path d="M68 60 L68 86 L96 86 L96 114" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    raisehand: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M92 84 L106 24" fill="none" stroke="#fcd3b6" stroke-width="14" stroke-linecap="round"/>
        <circle cx="106" cy="20" r="10" fill="#fcd3b6" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="64" cy="56" r="24" fill="#fcd3b6" stroke="#ffffff" stroke-width="3.5"/>
        <path d="M36 116 Q64 82 92 116 Z" fill="#8b5cf6" stroke="#ffffff" stroke-width="3.5"/>
      </svg>`,
    erase: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="28" width="100" height="76" rx="12" fill="#14532d" stroke="#fde68a" stroke-width="5"/>
        <path d="M36 56 Q56 46 76 58" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 4" stroke-linecap="round"/>
        <rect x="64" y="54" width="38" height="24" rx="6" fill="#ec4899" stroke="#ffffff" stroke-width="3.5"/>
      </svg>`,
    showpoint: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="102" cy="46" r="18" fill="#fde047" stroke="#f59e0b" stroke-width="4"/>
        <path d="M26 98 L82 58" fill="none" stroke="#fcd3b6" stroke-width="18" stroke-linecap="round"/>
        <circle cx="88" cy="54" r="9" fill="#fcd3b6" stroke="#ffffff" stroke-width="2.5"/>
      </svg>`,
    listen: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 44 C40 20, 88 20, 88 58 C88 88, 70 112, 50 112 C38 112, 34 98, 44 92" fill="#fcd3b6" stroke="#ffffff" stroke-width="4.5"/>
        <path d="M98 46 Q112 70 98 94" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
        <path d="M110 34 Q128 70 110 106" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      </svg>`,
    look: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="46" cy="70" rx="22" ry="28" fill="#ffffff" stroke="#1e293b" stroke-width="4.5"/>
        <ellipse cx="94" cy="70" rx="22" ry="28" fill="#ffffff" stroke="#1e293b" stroke-width="4.5"/>
        <circle cx="52" cy="70" r="10" fill="#0284c7"/>
        <circle cx="100" cy="70" r="10" fill="#0284c7"/>
        <circle cx="55" cy="66" r="3.5" fill="#ffffff"/>
        <circle cx="103" cy="66" r="3.5" fill="#ffffff"/>
      </svg>`,
    read: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 40 Q46 30 70 42 L70 110 Q46 98 22 108 Z" fill="#fef3c7" stroke="#ffffff" stroke-width="4"/>
        <path d="M118 40 Q94 30 70 42 L70 110 Q94 98 118 108 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
        <text x="34" y="78" fill="#b45309" font-family="'Comic Sans MS', sans-serif" font-size="20" font-weight="900">ABC</text>
        <line x1="80" y1="62" x2="108" y2="62" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
        <line x1="80" y1="78" x2="104" y2="78" stroke="#b45309" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
    draw: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="84" height="92" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
        <circle cx="64" cy="68" r="20" fill="#fef08a" stroke="#f59e0b" stroke-width="3.5"/>
        <g transform="translate(88, 52) rotate(30)">
          <rect x="0" y="0" width="16" height="52" fill="#ef4444" stroke="#ffffff" stroke-width="3"/>
          <polygon points="0,52 16,52 8,68" fill="#1e293b"/>
        </g>
      </svg>`,
    colour: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 22 C36 22, 18 48, 22 78 C26 106, 52 118, 76 114 C92 112, 96 98, 86 90 C78 84, 84 72, 98 72 C114 72, 122 56, 114 40 C106 26, 88 22, 70 22 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4.5"/>
        <circle cx="46" cy="54" r="10" fill="#ef4444"/>
        <circle cx="72" cy="44" r="10" fill="#3b82f6"/>
        <circle cx="94" cy="54" r="10" fill="#22c55e"/>
        <circle cx="46" cy="82" r="10" fill="#a855f7"/>
      </svg>`,
    write: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="82" height="94" rx="10" fill="#ffffff" stroke="#60a5fa" stroke-width="4"/>
        <path d="M38 56 Q52 46 66 56 T92 56" fill="none" stroke="#1d4ed8" stroke-width="4" stroke-linecap="round"/>
        <path d="M38 78 Q52 68 66 78" fill="none" stroke="#1d4ed8" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(88, 48) rotate(28)">
          <rect x="0" y="0" width="16" height="54" fill="#2563eb" stroke="#ffffff" stroke-width="3"/>
          <polygon points="0,54 16,54 8,70" fill="#1e293b"/>
        </g>
      </svg>`,
    repeatsay: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="28" width="96" height="66" rx="22" fill="#38bdf8" stroke="#ffffff" stroke-width="4.5"/>
        <polygon points="48,94 68,94 42,116" fill="#38bdf8"/>
        <circle cx="50" cy="61" r="6" fill="#ffffff"/>
        <circle cx="70" cy="61" r="6" fill="#ffffff"/>
        <circle cx="90" cy="61" r="6" fill="#ffffff"/>
      </svg>`,
    tick: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="48" fill="#22c55e" stroke="#ffffff" stroke-width="5"/>
        <path d="M44 72 L62 90 L98 50" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    cross: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="48" fill="#ef4444" stroke="#ffffff" stroke-width="5"/>
        <path d="M48 48 L92 92 M92 48 L48 92" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      </svg>`,
    circle: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="44" fill="none" stroke="#e11d48" stroke-width="9" stroke-dasharray="14 6"/>
        <polygon points="70,40 77,58 96,59 81,71 86,90 70,79 54,90 59,71 44,59 63,58" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/>
      </svg>`,
    match: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="40" r="16" fill="#ef4444" stroke="#ffffff" stroke-width="3.5"/>
        <circle cx="106" cy="100" r="16" fill="#ef4444" stroke="#ffffff" stroke-width="3.5"/>
        <circle cx="34" cy="100" r="16" fill="#3b82f6" stroke="#ffffff" stroke-width="3.5"/>
        <circle cx="106" cy="40" r="16" fill="#3b82f6" stroke="#ffffff" stroke-width="3.5"/>
        <line x1="50" y1="44" x2="90" y2="96" stroke="#1e293b" stroke-width="5" stroke-dasharray="6 4" stroke-linecap="round"/>
        <line x1="50" y1="96" x2="90" y2="44" stroke="#1e293b" stroke-width="5" stroke-dasharray="6 4" stroke-linecap="round"/>
      </svg>`,
    repeatafterme: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="24" width="64" height="44" rx="14" fill="#8b5cf6" stroke="#ffffff" stroke-width="3.5"/>
        <rect x="60" y="72" width="64" height="44" rx="14" fill="#ec4899" stroke="#ffffff" stroke-width="3.5"/>
        <path d="M48 46 L60 46 M80 94 L104 94" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
      </svg>`,
    lookpicture: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="26" width="100" height="88" rx="12" fill="#e0f2fe" stroke="#f59e0b" stroke-width="6"/>
        <circle cx="46" cy="52" r="10" fill="#facc15"/>
        <polygon points="24,108 58,68 86,98 100,82 116,108" fill="#22c55e"/>
      </svg>`,
    listencd: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="46" fill="#38bdf8" stroke="#ffffff" stroke-width="5"/>
        <circle cx="70" cy="70" r="14" fill="#ffffff" stroke="#0284c7" stroke-width="4"/>
        <path d="M98 30 L98 62" stroke="#ec4899" stroke-width="5" stroke-linecap="round"/>
        <circle cx="92" cy="64" r="8" fill="#ec4899"/>
      </svg>`,
    openbook: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 38 Q44 26 70 40 L70 108 Q44 94 18 106 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="4"/>
        <path d="M122 38 Q96 26 70 40 L70 108 Q96 94 122 106 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
        <line x1="70" y1="40" x2="70" y2="108" stroke="#15803d" stroke-width="4"/>
      </svg>`
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
