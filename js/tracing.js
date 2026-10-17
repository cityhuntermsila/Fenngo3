(() => {
  "use strict";

  /* =========================================================
     1. BASE DE DONNÉES MULTILINGUE : LETTRES & MOTS DU SITE
     ========================================================= */
  const TRACING_DB = {
    French: {
      dir: "ltr",
      speechLang: "fr-FR",
      ui: {
        title: "✏️ Traçage & Écriture",
        subtitle: "Suis les pointillés avec ton doigt ou ta souris pour écrire les lettres et les mots !",
        modeLabel: "Choisis un mode :",
        modeLetters: "Tracer les lettres (A-Z)",
        modeWords: "Tracer des mots",
        listen: "Écouter",
        colorLabel: "Couleur du crayon :",
        clear: "Effacer",
        next: "Suivant",
        instruction: "Suis les pointillés ✨",
        completedMsg: "Bravo ! Super écriture ! 🎉"
      },
      letters: [
        { text: "A", label: "A - Avion", emoji: "✈️", speech: "A comme Avion" },
        { text: "B", label: "B - Ballon", emoji: "🎈", speech: "B comme Ballon" },
        { text: "C", label: "C - Chat", emoji: "🐱", speech: "C comme Chat" },
        { text: "D", label: "D - Dauphin", emoji: "🐬", speech: "D comme Dauphin" },
        { text: "E", label: "E - Éléphant", emoji: "🐘", speech: "E comme Éléphant" },
        { text: "F", label: "F - Fleur", emoji: "🌸", speech: "La lettre F" },
        { text: "G", label: "G - Gâteau", emoji: "🎂", speech: "G comme Gâteau" },
        { text: "H", label: "H - Hibou", emoji: "🦉", speech: "La lettre H" },
        { text: "I", label: "I - Île", emoji: "🏝️", speech: "La lettre I" },
        { text: "J", label: "J - Jus", emoji: "🧃", speech: "La lettre J" },
        { text: "K", label: "K - Kangourou", emoji: "🦘", speech: "La lettre K" },
        { text: "L", label: "L - Lion", emoji: "🦁", speech: "L comme Lion" },
        { text: "M", label: "M - Mangue", emoji: "🥭", speech: "M comme Mangue" },
        { text: "N", label: "N - Nid", emoji: "🪺", speech: "N comme Nid" },
        { text: "O", label: "O - Orange", emoji: "🍊", speech: "O comme Orange" },
        { text: "P", label: "P - Papillon", emoji: "🦋", speech: "P comme Papillon" },
        { text: "Q", label: "Q - Quatre", emoji: "4️⃣", speech: "La lettre Q" },
        { text: "R", label: "R - Reine", emoji: "👑", speech: "La lettre R" },
        { text: "S", label: "S - Soleil", emoji: "☀️", speech: "S comme Soleil" },
        { text: "T", label: "T - Train", emoji: "🚂", speech: "La lettre T" },
        { text: "U", label: "U - Univers", emoji: "🪐", speech: "La lettre U" },
        { text: "V", label: "V - Volcan", emoji: "🌋", speech: "V comme Volcan" },
        { text: "W", label: "W - Wagon", emoji: "🚃", speech: "La lettre W" },
        { text: "X", label: "X - Xylophone", emoji: "🎼", speech: "X comme Xylophone" },
        { text: "Y", label: "Y - Yo-Yo", emoji: "🪀", speech: "Y comme Yo-Yo" },
        { text: "Z", label: "Z - Zèbre", emoji: "🦓", speech: "Z comme Zèbre" }
      ],
      words: [
        // Mots des jeux & alphabet
        { text: "CHAT", label: "Chat", emoji: "🐱", speech: "CHAT" },
        { text: "LION", label: "Lion", emoji: "🦁", speech: "LION" },
        { text: "POMME", label: "Pomme", emoji: "🍎", speech: "POMME" },
        { text: "LUNE", label: "Lune", emoji: "🌙", speech: "LUNE" },
        { text: "OURS", label: "Ours", emoji: "🐻", speech: "OURS" },
        { text: "LIVRE", label: "Livre", emoji: "📖", speech: "LIVRE" },
        { text: "FLEUR", label: "Fleur", emoji: "🌸", speech: "FLEUR" },
        { text: "TRAIN", label: "Train", emoji: "🚂", speech: "TRAIN" },
        { text: "POULE", label: "Poule", emoji: "🐔", speech: "POULE" },
        { text: "VELO", label: "Vélo", emoji: "🚲", speech: "VELO" },
        // Famille
        { text: "PÈRE", label: "Le père", emoji: "👨", speech: "Le père. Voici le père." },
        { text: "MÈRE", label: "La mère", emoji: "👩", speech: "La mère. Voici la mère." },
        { text: "FRÈRE", label: "Mon frère", emoji: "👦", speech: "Mon frère ! C'est mon frère." },
        { text: "SŒUR", label: "Ma sœur", emoji: "👧", speech: "Ma sœur ! C'est ma sœur." },
        { text: "FILS", label: "Le fils", emoji: "👦", speech: "Le fils. Voici le fils." },
        { text: "FILLE", label: "La fille", emoji: "👧", speech: "La fille. Voici la fille." },
        // Fournitures scolaires
        { text: "CRAYON", label: "Le crayon", emoji: "✏️", speech: "Le crayon. C'est un crayon." },
        { text: "STYLO", label: "Le stylo", emoji: "🖊️", speech: "Le stylo. C'est un stylo." },
        { text: "CAHIER", label: "Le cahier", emoji: "📓", speech: "Le cahier. C'est un cahier." },
        { text: "GOMME", label: "La gomme", emoji: "🧼", speech: "La gomme. C'est une gomme." },
        { text: "RÈGLE", label: "La règle", emoji: "📏", speech: "La règle. C'est une règle." },
        // Parties du corps
        { text: "TÊTE", label: "La tête", emoji: "🧑", speech: "La tête. Voici la tête." },
        { text: "MAIN", label: "La main", emoji: "✋", speech: "La main. Voici la main." },
        { text: "PIED", label: "Le pied", emoji: "🦶", speech: "Le pied. Voici le pied." },
        { text: "NEZ", label: "Le nez", emoji: "👃", speech: "Le nez. Voici le nez." },
        // Couleurs
        { text: "ROUGE", label: "Rouge", emoji: "🔴", speech: "Rouge" },
        { text: "BLEU", label: "Bleu", emoji: "🔵", speech: "Bleu" },
        { text: "VERT", label: "Vert", emoji: "🟢", speech: "Vert" },
        { text: "JAUNE", label: "Jaune", emoji: "🟡", speech: "Jaune" }
      ]
    },

    Arabic: {
      dir: "rtl",
      speechLang: "ar-SA",
      ui: {
        title: "✏️ التَّخْطِيطُ وَالكِتَابَةُ",
        subtitle: "اتَّبِعِ النِّقَاطَ بِإِصْبَعِكَ أَوْ بِالفَأْرَةِ لِكِتَابَةِ الحُرُوفِ وَالكَلِمَاتِ!",
        modeLabel: "اخْتَرِ الوَضْعَ :",
        modeLetters: "تَخْطِيطُ الحُرُوفِ (أ-ي)",
        modeWords: "تَخْطِيطُ الكَلِمَاتِ",
        listen: "اسْتَمِعْ",
        colorLabel: "لَوْنُ القَلَمِ :",
        clear: "مَسْحٌ",
        next: "التَّالِي",
        instruction: "اتَّبِعِ النِّقَاطَ ✨",
        completedMsg: "أَحْسَنْتَ ! خَطٌّ رَائِعٌ ! 🎉"
      },
      letters: [
        { text: "أ", label: "أ - أَسَد", emoji: "🦁", speech: "أ - أَسَد" },
        { text: "ب", label: "ب - بَطَّة", emoji: "🦆", speech: "ب - بَطَّة" },
        { text: "ت", label: "ت - تُفَّاحَة", emoji: "🍎", speech: "ت - تُفَّاحَة" },
        { text: "ث", label: "ث - ثَلْج", emoji: "❄️", speech: "ث - ثَلْج" },
        { text: "ج", label: "ج - جَزَر", emoji: "🥕", speech: "ج - جَزَر" },
        { text: "ح", label: "ح - حُوت", emoji: "🐋", speech: "ح - حُوت" },
        { text: "خ", label: "خ - خَرُوف", emoji: "🐑", speech: "خ - خَرُوف" },
        { text: "د", label: "د - دُلْفِين", emoji: "🐬", speech: "د - دُلْفِين" },
        { text: "ذ", label: "ذ - ذُرَة", emoji: "🌽", speech: "ذ - ذُرَة" },
        { text: "ر", label: "ر - قَوْسُ قُزَح", emoji: "🌈", speech: "ر - قَوْسُ قُزَح" },
        { text: "ز", label: "ز - زَهْرَة", emoji: "🌸", speech: "ز - زَهْرَة" },
        { text: "س", label: "س - سَمَكَة", emoji: "🐟", speech: "س - سَمَكَة" },
        { text: "ش", label: "ش - شَمْس", emoji: "☀️", speech: "ش - شَمْس" },
        { text: "ص", label: "ص - صُنْدُوق", emoji: "📦", speech: "ص - صُنْدُوق" },
        { text: "ض", label: "ض - ضَوْء", emoji: "💡", speech: "ض - ضَوْء" },
        { text: "ط", label: "ط - طَائِر", emoji: "🐦", speech: "ط - طَائِر" },
        { text: "ظ", label: "ظ - ظَرْف", emoji: "✉️", speech: "ظ - ظَرْف" },
        { text: "ع", label: "ع - عِنَب", emoji: "🍇", speech: "ع - عِنَب" },
        { text: "غ", label: "غ - غَزَال", emoji: "🦌", speech: "غ - غَزَال" },
        { text: "ف", label: "ف - فِيل", emoji: "🐘", speech: "ف - فِيل" },
        { text: "ق", label: "ق - قِطَّة", emoji: "🐱", speech: "ق - قِطَّة" },
        { text: "ك", label: "ك - كُرَة", emoji: "⚽", speech: "ك - كُرَة" },
        { text: "ل", label: "ل - لُعْبَة", emoji: "🧸", speech: "ل - لُعْبَة" },
        { text: "م", label: "م - مَانْجُو", emoji: "🥭", speech: "م - مَانْجُو" },
        { text: "ن", label: "ن - نَجْمَة", emoji: "⭐", speech: "ن - نَجْمَة" },
        { text: "هـ", label: "هـ - هَدِيَّة", emoji: "🎁", speech: "هـ - هَدِيَّة" },
        { text: "و", label: "و - وَرْدَة", emoji: "🌹", speech: "و - وَرْدَة" },
        { text: "ي", label: "ي - يُويُو", emoji: "🪀", speech: "ي - يُويُو" }
      ],
      words: [
        // الكلمات الموجودة في الموقع
        { text: "أَسَد", label: "أَسَد", emoji: "🦁", speech: "أَسَد" },
        { text: "بَطَّة", label: "بَطَّة", emoji: "🦆", speech: "بَطَّة" },
        { text: "تُفَّاح", label: "تُفَّاح", emoji: "🍎", speech: "تُفَّاح" },
        { text: "شَمْس", label: "شَمْس", emoji: "☀️", speech: "شَمْس" },
        { text: "سَمَك", label: "سَمَك", emoji: "🐟", speech: "سَمَك" },
        { text: "كِتَاب", label: "كِتَاب", emoji: "📖", speech: "كِتَاب" },
        { text: "قَلَم", label: "قَلَم", emoji: "✏️", speech: "قَلَم" },
        { text: "جَمَل", label: "جَمَل", emoji: "🐪", speech: "جَمَل" },
        { text: "أَرْنَب", label: "أَرْنَب", emoji: "🐰", speech: "أَرْنَب" },
        { text: "لَيْمُون", label: "لَيْمُون", emoji: "🍋", speech: "لَيْمُون" },
        { text: "زَهْرَة", label: "زَهْرَة", emoji: "🌸", speech: "ز - زَهْرَة" },
        { text: "نَجْمَة", label: "نَجْمَة", emoji: "⭐", speech: "ن - نَجْمَة" },
        { text: "وَرْدَة", label: "وَرْدَة", emoji: "🌹", speech: "و - وَرْدَة" },
        { text: "فِيل", label: "فِيل", emoji: "🐘", speech: "ف - فِيل" },
        { text: "قِطَّة", label: "قِطَّة", emoji: "🐱", speech: "ق - قِطَّة" },
        { text: "كُرَة", label: "كُرَة", emoji: "⚽", speech: "ك - كُرَة" },
        // العائلة
        { text: "الأَب", label: "الأَب", emoji: "👨", speech: "الأَب. هَذَا هُوَ الأَب." },
        { text: "الأُمّ", label: "الأُمّ", emoji: "👩", speech: "الأُمّ. هَذِهِ هِيَ الأُمّ." },
        { text: "الجَدّ", label: "الجَدّ", emoji: "👴", speech: "الجَدّ. هَذَا هُوَ الجَدّ." },
        { text: "الجَدَّة", label: "الجَدَّة", emoji: "👵", speech: "الجَدَّة. هَذِهِ هِيَ الجَدَّة." },
        { text: "أَخِي", label: "أَخِي", emoji: "👦", speech: "أَخِي! هَذَا أَخِي." },
        { text: "أُخْتِي", label: "أُخْتِي", emoji: "👧", speech: "أُخْتِي! هَذِهِ أُخْتِي." },
        // الأدوات المدرسية وأجزاء الجسم
        { text: "كُرَّاس", label: "كُرَّاس", emoji: "📓", speech: "كُرَّاس. هَذَا كُرَّاس." },
        { text: "مِمْحَاة", label: "مِمْحَاة", emoji: "🧼", speech: "مِمْحَاة. هَذِهِ مِمْحَاة." },
        { text: "مِسْطَرَة", label: "مِسْطَرَة", emoji: "📏", speech: "مِسْطَرَة. هَذِهِ مِسْطَرَة." },
        { text: "الرَّأْس", label: "الرَّأْس", emoji: "🧑", speech: "الرَّأْس. هَذَا هُوَ الرَّأْس." },
        { text: "العَيْن", label: "العَيْن", emoji: "👁️", speech: "العَيْن. هَذِهِ هِيَ العَيْن." },
        { text: "اليَد", label: "اليَد", emoji: "✋", speech: "اليَد. هَذِهِ هِيَ اليَد." },
        { text: "القَدَم", label: "القَدَم", emoji: "🦶", speech: "القَدَم. هَذِهِ هِيَ القَدَم." }
      ]
    },

    English: {
      dir: "ltr",
      speechLang: "en-US",
      ui: {
        title: "✏️ Tracing & Writing",
        subtitle: "Follow the dotted lines with your finger or mouse to write letters and words!",
        modeLabel: "Choose mode:",
        modeLetters: "Trace Letters (A-Z)",
        modeWords: "Trace Words",
        listen: "Listen",
        colorLabel: "Pencil Color:",
        clear: "Clear",
        next: "Next",
        instruction: "Follow the dotted lines ✨",
        completedMsg: "Awesome! Great handwriting! 🎉"
      },
      letters: [
        { text: "A", label: "A - Apple", emoji: "🍎", speech: "A is for Apple" },
        { text: "B", label: "B - Ball", emoji: "🎈", speech: "B is for Ball" },
        { text: "C", label: "C - Cat", emoji: "🐱", speech: "C is for Cat" },
        { text: "D", label: "D - Dolphin", emoji: "🐬", speech: "D is for Dolphin" },
        { text: "E", label: "E - Elephant", emoji: "🐘", speech: "E is for Elephant" },
        { text: "F", label: "F - Fish", emoji: "🐟", speech: "F is for Fish" },
        { text: "G", label: "G - Gift", emoji: "🎁", speech: "G is for Gift" },
        { text: "H", label: "H - House", emoji: "🏠", speech: "H is for House" },
        { text: "I", label: "I - Ice cream", emoji: "🍦", speech: "I is for Ice cream" },
        { text: "J", label: "J - Juice", emoji: "🧃", speech: "J is for Juice" },
        { text: "K", label: "K - Kite", emoji: "🪁", speech: "K is for Kite" },
        { text: "L", label: "L - Lion", emoji: "🦁", speech: "L is for Lion" },
        { text: "M", label: "M - Mango", emoji: "🥭", speech: "M is for Mango" },
        { text: "N", label: "N - Nest", emoji: "🪺", speech: "N is for Nest" },
        { text: "O", label: "O - Orange", emoji: "🍊", speech: "O is for Orange" },
        { text: "P", label: "P - Pencil", emoji: "✏️", speech: "P is for Pencil" },
        { text: "Q", label: "Q - Queen", emoji: "👑", speech: "Q is for Queen" },
        { text: "R", label: "R - Rainbow", emoji: "🌈", speech: "R is for Rainbow" },
        { text: "S", label: "S - Sun", emoji: "☀️", speech: "S is for Sun" },
        { text: "T", label: "T - Tree", emoji: "🌳", speech: "T is for Tree" },
        { text: "U", label: "U - Umbrella", emoji: "☂️", speech: "U is for Umbrella" },
        { text: "V", label: "V - Volcano", emoji: "🌋", speech: "V is for Volcano" },
        { text: "W", label: "W - Watermelon", emoji: "🍉", speech: "W is for Watermelon" },
        { text: "X", label: "X - Xylophone", emoji: "🎼", speech: "X is for Xylophone" },
        { text: "Y", label: "Y - Yo-Yo", emoji: "🪀", speech: "Y is for Yo-Yo" },
        { text: "Z", label: "Z - Zebra", emoji: "🦓", speech: "Z is for Zebra" }
      ],
      words: [
        { text: "APPLE", label: "Apple", emoji: "🍎", speech: "Apple" },
        { text: "BALL", label: "Ball", emoji: "🎈", speech: "Ball" },
        { text: "CAT", label: "Cat", emoji: "🐱", speech: "Cat" },
        { text: "FISH", label: "Fish", emoji: "🐟", speech: "Fish" },
        { text: "LION", label: "Lion", emoji: "🦁", speech: "Lion" },
        { text: "SUN", label: "Sun", emoji: "☀️", speech: "Sun" },
        { text: "TREE", label: "Tree", emoji: "🌳", speech: "Tree" },
        { text: "BOOK", label: "Book", emoji: "📖", speech: "Book" },
        { text: "DUCK", label: "Duck", emoji: "🦆", speech: "Duck" },
        { text: "BEAR", label: "Bear", emoji: "🐻", speech: "Bear" },
        { text: "STAR", label: "Star", emoji: "⭐", speech: "Star" },
        { text: "LEMON", label: "Lemon", emoji: "🍋", speech: "Lemon" },
        { text: "FATHER", label: "Father", emoji: "👨", speech: "Father" },
        { text: "MOTHER", label: "Mother", emoji: "👩", speech: "Mother" },
        { text: "BROTHER", label: "Brother", emoji: "👦", speech: "Brother" },
        { text: "SISTER", label: "Sister", emoji: "👧", speech: "Sister" },
        { text: "PENCIL", label: "Pencil", emoji: "✏️", speech: "Pencil" },
        { text: "RULER", label: "Ruler", emoji: "📏", speech: "Ruler" },
        { text: "HEAD", label: "Head", emoji: "🧑", speech: "Head" },
        { text: "HAND", label: "Hand", emoji: "✋", speech: "Hand" },
        { text: "FOOT", label: "Foot", emoji: "🦶", speech: "Foot" }
      ]
    }
  };

  const PENCIL_COLORS = [
    "#4221b8", // Novakid Purple
    "#31c838", // Novakid Green
    "#ef4444", // Red
    "#0284c7", // Sky Blue
    "#f97316", // Orange
    "#ec4899"  // Pink
  ];

  /* =========================================================
     2. ÉTAT & AUDIO
     ========================================================= */
  const STORAGE_STARS = "fenncky_games_stars";
  let totalStars = parseInt(localStorage.getItem(STORAGE_STARS) || "0", 10);

  let currentMode = "letters"; // "letters" | "words"
  let currentIndex = 0;
  let currentColor = PENCIL_COLORS[0];
  let isDrawing = false;
  let lastPt = null;
  let isCompleted = false;
  let pulsePhase = 0;
  let sparkles = [];
  let rafId = null;

  const canvas = document.getElementById("tracingCanvas");
  const ctx = canvas.getContext("2d");

  // Offscreen canvases for mask & user strokes
  const maskCanvas = document.createElement("canvas");
  const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });

  const strokeCanvas = document.createElement("canvas");
  const strokeCtx = strokeCanvas.getContext("2d", { willReadFrequently: true });

  let guideCheckpoints = []; // Sampled points on the glyph to measure tracing progress

  function getActiveLangId() {
    return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
  }

  function getDB() {
    return TRACING_DB[getActiveLangId()] || TRACING_DB.English;
  }

  function getActiveList() {
    const db = getDB();
    return currentMode === "words" ? db.words : db.letters;
  }

  function getCurrentItem() {
    const list = getActiveList();
    if (currentIndex >= list.length) currentIndex = 0;
    return list[currentIndex];
  }

  // Synthétiseur d'effets sonores doux
  let audioCtx = null;
  function playChime() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === "suspended") audioCtx.resume();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = audioCtx.currentTime + idx * 0.09;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.25);
      });
    } catch (e) {}
  }

  function speakCurrentItem() {
    const db = getDB();
    const item = getCurrentItem();
    if (item && window.AppLang) {
      window.AppLang.speak(item.speech, db.speechLang, 0.85, 1.05);
    }
  }

  /* =========================================================
     3. CONFETTIS DE VICTOIRE
     ========================================================= */
  const confettiCanvas = document.getElementById("confettiCanvas");
  const confettiCtx = confettiCanvas.getContext("2d");
  let confettiPieces = [];
  let confettiRaf = null;

  function resizeConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeConfetti);
  resizeConfetti();

  function spawnConfetti(count = 70) {
    const colors = ["#4221b8", "#31c838", "#facc15", "#ef4444", "#38bdf8", "#ec4899"];
    for (let i = 0; i < count; i++) {
      confettiPieces.push({
        x: window.innerWidth * (0.25 + Math.random() * 0.5),
        y: window.innerHeight * 0.35,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 11 - 4,
        size: 8 + Math.random() * 7,
        color: colors[i % colors.length],
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        life: 95 + Math.random() * 35
      });
    }
    if (!confettiRaf) loopConfetti();
  }

  function loopConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.32;
      p.rot += p.vRot;
      p.life--;
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      confettiCtx.restore();
    });
    confettiPieces = confettiPieces.filter((p) => p.life > 0);
    if (confettiPieces.length > 0) {
      confettiRaf = requestAnimationFrame(loopConfetti);
    } else {
      confettiRaf = null;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  /* =========================================================
     4. PRÉPARATION DU MODÈLE POINTILLÉ & POINTS DE CONTRÔLE
     ========================================================= */
  function getFontSpec(text, W, H) {
    const isAr = getActiveLangId() === "Arabic";
    const fontFamily = isAr ? "'Cairo', 'Tajawal', sans-serif" : "'Nunito', sans-serif";
    const len = text.length;
    let fontSize;
    if (len === 1) {
      fontSize = Math.min(W * 0.52, H * 0.68);
    } else if (len <= 4) {
      fontSize = Math.min((W * 0.8) / (len * 0.62), H * 0.52);
    } else {
      fontSize = Math.min((W * 0.84) / (len * 0.58), H * 0.44);
    }
    fontSize = Math.max(54, Math.min(fontSize, 250));
    return { font: `900 ${Math.round(fontSize)}px ${fontFamily}`, fontSize };
  }

  function buildMaskAndCheckpoints() {
    const stage = document.getElementById("tracingStage");
    if (!stage) return;
    const W = stage.clientWidth || 640;
    const H = stage.clientHeight || 360;

    canvas.width = W;
    canvas.height = H;
    maskCanvas.width = W;
    maskCanvas.height = H;
    strokeCanvas.width = W;
    strokeCanvas.height = H;

    strokeCtx.clearRect(0, 0, W, H);
    maskCtx.clearRect(0, 0, W, H);

    const item = getCurrentItem();
    if (!item) return;

    const { font, fontSize } = getFontSpec(item.text, W, H);
    maskCtx.font = font;
    maskCtx.textAlign = "center";
    maskCtx.textBaseline = "middle";
    maskCtx.lineJoin = "round";
    maskCtx.lineCap = "round";

    // Draw solid shape onto maskCanvas
    maskCtx.fillStyle = "#000000";
    maskCtx.strokeStyle = "#000000";
    maskCtx.lineWidth = Math.max(12, fontSize * 0.08);
    maskCtx.strokeText(item.text, W / 2, H * 0.52);
    maskCtx.fillText(item.text, W / 2, H * 0.52);

    // Sample checkpoints across the glyph area on a grid
    guideCheckpoints = [];
    const imgData = maskCtx.getImageData(0, 0, W, H).data;
    const step = Math.max(14, Math.round(Math.min(W, H) / 22));

    const isRTL = getActiveLangId() === "Arabic";
    const xStart = isRTL ? W - step : step;
    const xEnd = isRTL ? step : W - step;
    const xDir = isRTL ? -step : step;

    for (let x = xStart; isRTL ? x >= xEnd : x <= xEnd; x += xDir) {
      for (let y = step; y <= H - step; y += step) {
        const idx = (y * W + x) * 4 + 3;
        if (imgData[idx] > 128) {
          guideCheckpoints.push({ x, y, hit: false });
        }
      }
    }

    isCompleted = false;
    updateProgressUI(0);
  }

  function updateProgressUI(pct) {
    const clamped = Math.min(100, Math.max(0, Math.round(pct)));
    document.getElementById("traceProgressFill").style.width = `${clamped}%`;
    document.getElementById("tracePercentBadge").textContent = `${clamped}%`;
  }

  function checkTracingCoverage() {
    if (isCompleted || guideCheckpoints.length === 0) return;
    let hits = 0;
    for (let i = 0; i < guideCheckpoints.length; i++) {
      if (guideCheckpoints[i].hit) hits++;
    }
    const ratio = hits / guideCheckpoints.length;
    const displayPct = Math.min(100, Math.round((ratio / 0.68) * 100));
    updateProgressUI(displayPct);

    if (ratio >= 0.68) {
      completeTracing();
    }
  }

  function completeTracing() {
    if (isCompleted) return;
    isCompleted = true;
    updateProgressUI(100);

    // Fill the entire letter/word cleanly on strokeCanvas
    const W = canvas.width;
    const H = canvas.height;
    const item = getCurrentItem();
    const { font, fontSize } = getFontSpec(item.text, W, H);
    strokeCtx.save();
    strokeCtx.font = font;
    strokeCtx.textAlign = "center";
    strokeCtx.textBaseline = "middle";
    strokeCtx.fillStyle = currentColor;
    strokeCtx.strokeStyle = currentColor;
    strokeCtx.lineWidth = Math.max(12, fontSize * 0.08);
    strokeCtx.strokeText(item.text, W / 2, H * 0.52);
    strokeCtx.fillText(item.text, W / 2, H * 0.52);
    strokeCtx.restore();

    const db = getDB();
    document.getElementById("traceInstructionBadge").textContent = db.ui.completedMsg;

    totalStars += 1;
    localStorage.setItem(STORAGE_STARS, String(totalStars));
    document.getElementById("tracingStarsCount").textContent = totalStars;

    playChime();
    spawnConfetti(75);
    speakCurrentItem();
  }

  /* =========================================================
     5. BOUCLE DE RENDU DU CAHIER À POINTILLÉS (60 FPS)
     ========================================================= */
  function renderLoop() {
    const W = canvas.width;
    const H = canvas.height;
    if (W === 0 || H === 0) {
      rafId = requestAnimationFrame(renderLoop);
      return;
    }

    pulsePhase += 0.08;
    ctx.clearRect(0, 0, W, H);

    // 1. Fond cahier d'écriture (lignes d'écriture scolaires)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    const topLine = H * 0.24;
    const midLine = H * 0.52;
    const baseLine = H * 0.78;

    // Ligne supérieure bleue ciel
    ctx.strokeStyle = "#bae6fd";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(20, topLine);
    ctx.lineTo(W - 20, topLine);
    ctx.stroke();

    // Ligne médiane pointillée bleue
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(20, midLine);
    ctx.lineTo(W - 20, midLine);
    ctx.stroke();

    // Ligne de base rose/rouge
    ctx.strokeStyle = "#fda4af";
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(20, baseLine);
    ctx.lineTo(W - 20, baseLine);
    ctx.stroke();

    const item = getCurrentItem();
    if (item) {
      const { font, fontSize } = getFontSpec(item.text, W, H);
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // 2. Piste intérieure lavande douce de la lettre / du mot
      ctx.fillStyle = "#ede9fe";
      ctx.strokeStyle = "#ddd6fe";
      ctx.lineWidth = Math.max(12, fontSize * 0.08);
      ctx.setLineDash([]);
      ctx.strokeText(item.text, W / 2, H * 0.52);
      ctx.fillText(item.text, W / 2, H * 0.52);

      // 3. Tracé de l'enfant (masqué proprement dans la lettre + léger halo libre)
      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.drawImage(strokeCanvas, 0, 0);
      ctx.restore();

      // Composite clipped inside mask
      ctx.save();
      // Create temporary composite on mask
      ctx.drawImage(strokeCanvas, 0, 0);
      ctx.restore();

      // 4. Contour en POINTILLÉS bien visible à suivre par l'enfant
      ctx.save();
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = isCompleted ? "#19aa20" : "#4221b8";
      ctx.lineWidth = Math.max(4, fontSize * 0.032);
      ctx.setLineDash(isCompleted ? [] : [2, Math.max(14, fontSize * 0.095)]);
      ctx.strokeText(item.text, W / 2, H * 0.52);
      ctx.restore();

      // 5. Point guide lumineux animé sur le prochain point à tracer
      if (!isCompleted && guideCheckpoints.length > 0) {
        const nextPt = guideCheckpoints.find((p) => !p.hit);
        if (nextPt) {
          const r = 9 + Math.sin(pulsePhase) * 3;
          ctx.save();
          ctx.fillStyle = "#facc15";
          ctx.strokeStyle = "#4221b8";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(nextPt.x, nextPt.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // 6. Étoiles scintillantes sous le crayon
    sparkles.forEach((sp) => {
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.life--;
      ctx.save();
      ctx.globalAlpha = Math.max(0, sp.life / 22);
      ctx.fillStyle = sp.color;
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    sparkles = sparkles.filter((sp) => sp.life > 0);

    rafId = requestAnimationFrame(renderLoop);
  }

  /* =========================================================
     6. GESTION DU DESSIN (DOIGT / SOURIS / STYLET)
     ========================================================= */
  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function markCheckpointsNear(x, y, radius) {
    const rSq = radius * radius;
    for (let i = 0; i < guideCheckpoints.length; i++) {
      const cp = guideCheckpoints[i];
      if (!cp.hit) {
        const dx = cp.x - x;
        const dy = cp.y - y;
        if (dx * dx + dy * dy <= rSq) {
          cp.hit = true;
        }
      }
    }
  }

  function drawStrokeSegment(fromPt, toPt) {
    const W = canvas.width;
    const H = canvas.height;
    const item = getCurrentItem();
    const { fontSize } = getFontSpec(item ? item.text : "A", W, H);
    const brushRadius = Math.max(18, fontSize * 0.13);

    strokeCtx.save();
    strokeCtx.strokeStyle = currentColor;
    strokeCtx.fillStyle = currentColor;
    strokeCtx.lineWidth = brushRadius * 2;
    strokeCtx.lineCap = "round";
    strokeCtx.lineJoin = "round";

    strokeCtx.beginPath();
    strokeCtx.moveTo(fromPt.x, fromPt.y);
    strokeCtx.lineTo(toPt.x, toPt.y);
    strokeCtx.stroke();

    // Keep strokes neatly inside the letter/word silhouette
    strokeCtx.globalCompositeOperation = "destination-in";
    strokeCtx.drawImage(maskCanvas, 0, 0);
    strokeCtx.restore();

    // Mark checkpoints along the segment
    const dist = Math.hypot(toPt.x - fromPt.x, toPt.y - fromPt.y);
    const steps = Math.max(1, Math.ceil(dist / 8));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const sx = fromPt.x + (toPt.x - fromPt.x) * t;
      const sy = fromPt.y + (toPt.y - fromPt.y) * t;
      markCheckpointsNear(sx, sy, brushRadius * 1.25);
    }

    // Add magic sparkles
    if (Math.random() < 0.65) {
      sparkles.push({
        x: toPt.x + (Math.random() - 0.5) * 16,
        y: toPt.y + (Math.random() - 0.5) * 16,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5 - 1,
        r: 3 + Math.random() * 4,
        color: currentColor,
        life: 20
      });
    }

    checkTracingCoverage();
  }

  canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    isDrawing = true;
    const pt = getCanvasCoords(e);
    lastPt = pt;
    drawStrokeSegment(pt, pt);
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!isDrawing || !lastPt) return;
    e.preventDefault();
    const pt = getCanvasCoords(e);
    drawStrokeSegment(lastPt, pt);
    lastPt = pt;
  });

  const stopDrawing = () => {
    isDrawing = false;
    lastPt = null;
  };
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  canvas.addEventListener("pointerleave", stopDrawing);

  /* =========================================================
     7. INTERFACE & NAVIGATION
     ========================================================= */
  function renderColorSwatches() {
    const container = document.getElementById("colorSwatches");
    container.innerHTML = "";
    PENCIL_COLORS.forEach((col) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "color-swatch-btn" + (col === currentColor ? " active" : "");
      btn.style.background = col;
      btn.setAttribute("aria-label", col);
      btn.addEventListener("click", () => {
        currentColor = col;
        renderColorSwatches();
      });
      container.appendChild(btn);
    });
  }

  function renderStrip() {
    const list = getActiveList();
    const strip = document.getElementById("tracingItemsStrip");
    strip.innerHTML = "";

    list.forEach((item, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "trace-item-pill" + (idx === currentIndex ? " active" : "");
      pill.textContent = currentMode === "words" ? `${item.emoji} ${item.text}` : item.text;
      pill.addEventListener("click", () => {
        currentIndex = idx;
        loadCurrentItem();
      });
      strip.appendChild(pill);
    });

    const activePill = strip.querySelector(".trace-item-pill.active");
    if (activePill) {
      activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function loadCurrentItem() {
    const db = getDB();
    const list = getActiveList();
    const item = getCurrentItem();
    if (!item) return;

    document.getElementById("previewEmoji").textContent = item.emoji;
    document.getElementById("previewWord").textContent = item.label;
    document.getElementById("traceInstructionBadge").textContent = db.ui.instruction;
    document.getElementById("itemPositionBadge").textContent = `${currentIndex + 1} / ${list.length}`;

    renderStrip();
    buildMaskAndCheckpoints();
    speakCurrentItem();
  }

  function applyUI() {
    const db = getDB();
    document.documentElement.dir = db.dir;
    document.body.dir = db.dir;

    document.getElementById("tracingTitle").textContent = db.ui.title;
    document.getElementById("tracingSubtitle").textContent = db.ui.subtitle;
    document.getElementById("tracingModeLabel").textContent = db.ui.modeLabel;
    document.getElementById("modeLettersText").textContent = db.ui.modeLetters;
    document.getElementById("modeWordsText").textContent = db.ui.modeWords;
    document.getElementById("listenTargetText").textContent = db.ui.listen;
    document.getElementById("colorPickerLabel").textContent = db.ui.colorLabel;
    document.getElementById("clearBtnText").textContent = db.ui.clear;
    document.getElementById("nextBtnText").textContent = db.ui.next;
    document.getElementById("tracingStarsCount").textContent = totalStars;

    document.getElementById("modeLettersBtn").classList.toggle("active", currentMode === "letters");
    document.getElementById("modeWordsBtn").classList.toggle("active", currentMode === "words");

    renderColorSwatches();
    loadCurrentItem();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyUI();
    if (!rafId) rafId = requestAnimationFrame(renderLoop);

    document.getElementById("modeLettersBtn").addEventListener("click", () => {
      currentMode = "letters";
      currentIndex = 0;
      applyUI();
    });

    document.getElementById("modeWordsBtn").addEventListener("click", () => {
      currentMode = "words";
      currentIndex = 0;
      applyUI();
    });

    document.getElementById("speakTargetBtn").addEventListener("click", speakCurrentItem);

    document.getElementById("clearCanvasBtn").addEventListener("click", () => {
      const db = getDB();
      document.getElementById("traceInstructionBadge").textContent = db.ui.instruction;
      buildMaskAndCheckpoints();
    });

    const goNext = () => {
      const list = getActiveList();
      currentIndex = (currentIndex + 1) % list.length;
      loadCurrentItem();
    };

    const goPrev = () => {
      const list = getActiveList();
      currentIndex = (currentIndex - 1 + list.length) % list.length;
      loadCurrentItem();
    };

    document.getElementById("nextItemMainBtn").addEventListener("click", goNext);
    document.getElementById("nextTraceBtn").addEventListener("click", goNext);
    document.getElementById("prevTraceBtn").addEventListener("click", goPrev);
  });

  window.addEventListener("resize", () => {
    buildMaskAndCheckpoints();
  });

  window.addEventListener("appLanguageChanged", () => {
    currentIndex = 0;
    applyUI();
  });
})();
