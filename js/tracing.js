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
        modeLetters: "Lettres majuscules (A-Z)",
        modeWords: "Tracer des mots",
        modeLower: "Lettres minuscules (a-z)",
        listen: "Écouter",
        colorLabel: "Couleur du crayon :",
        clear: "Effacer",
        next: "Suivant",
        instruction: "Suis les pointillés ✨",
        completedMsg: "Bravo ! Super écriture ! 🎉"
      },
      letters: [
        { text: "A", label: "A - Astronaute", emoji: "👨‍🚀", speech: "A comme Astronaute" },
        { text: "B", label: "B - Ballon", emoji: "🎈", speech: "B comme Ballon" },
        { text: "C", label: "C - Chat", emoji: "🐱", speech: "C comme Chat" },
        { text: "D", label: "D - Dauphin", emoji: "🐬", speech: "D comme Dauphin" },
        { text: "E", label: "E - Éléphant", emoji: "🐘", speech: "E comme Éléphant" },
        { text: "F", label: "F - Fraise", emoji: "🍓", speech: "F comme Fraise" },
        { text: "G", label: "G - Gâteau", emoji: "🎂", speech: "G comme Gâteau" },
        { text: "H", label: "H - Hibou", emoji: "🦉", speech: "H comme Hibou" },
        { text: "I", label: "I - Igloo", emoji: "🧊", speech: "I comme Igloo" },
        { text: "J", label: "J - Jus", emoji: "🧃", speech: "J comme Jus" },
        { text: "K", label: "K - Koala", emoji: "🐨", speech: "K comme Koala" },
        { text: "L", label: "L - Lion", emoji: "🦁", speech: "L comme Lion" },
        { text: "M", label: "M - Mangue", emoji: "🥭", speech: "M comme Mangue" },
        { text: "N", label: "N - Nid", emoji: "🪺", speech: "N comme Nid" },
        { text: "O", label: "O - Orange", emoji: "🍊", speech: "O comme Orange" },
        { text: "P", label: "P - Papillon", emoji: "🦋", speech: "P comme Papillon" },
        { text: "Q", label: "Q - Quatre", emoji: "4️⃣", speech: "Q comme Quatre" },
        { text: "R", label: "R - Rose", emoji: "🌹", speech: "R comme Rose" },
        { text: "S", label: "S - Soleil", emoji: "☀️", speech: "S comme Soleil" },
        { text: "T", label: "T - Train", emoji: "🚂", speech: "T comme Train" },
        { text: "U", label: "U - Un", emoji: "1️⃣", speech: "U comme Un" },
        { text: "V", label: "V - Volcan", emoji: "🌋", speech: "V comme Volcan" },
        { text: "W", label: "W - Wagon", emoji: "🚃", speech: "W comme Wagon" },
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
        modeLower: "أَشْكَالُ الحُرُوفِ (بـ - يـ)",
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
      lowercase: [
        { text: "بـ", label: "بـ - بَطَّة", emoji: "🦆", speech: "ب - بَطَّة" },
        { text: "تـ", label: "تـ - تُفَّاحَة", emoji: "🍎", speech: "ت - تُفَّاحَة" },
        { text: "ثـ", label: "ثـ - ثَلْج", emoji: "❄️", speech: "ث - ثَلْج" },
        { text: "جـ", label: "جـ - جَزَر", emoji: "🥕", speech: "ج - جَزَر" },
        { text: "حـ", label: "حـ - حُوت", emoji: "🐋", speech: "ح - حُوت" },
        { text: "خـ", label: "خـ - خَرُوف", emoji: "🐑", speech: "خ - خَرُوف" },
        { text: "سـ", label: "سـ - سَمَكَة", emoji: "🐟", speech: "س - سَمَكَة" },
        { text: "شـ", label: "شـ - شَمْس", emoji: "☀️", speech: "ش - شَمْس" },
        { text: "صـ", label: "صـ - صُنْدُوق", emoji: "📦", speech: "ص - صُنْدُوق" },
        { text: "ضـ", label: "ضـ - ضَوْء", emoji: "💡", speech: "ض - ضَوْء" },
        { text: "عـ", label: "عـ - عِنَب", emoji: "🍇", speech: "ع - عِنَب" },
        { text: "غـ", label: "غـ - غَزَال", emoji: "🦌", speech: "غ - غَزَال" },
        { text: "فـ", label: "فـ - فِيل", emoji: "🐘", speech: "ف - فِيل" },
        { text: "قـ", label: "قـ - قِطَّة", emoji: "🐱", speech: "ق - قِطَّة" },
        { text: "كـ", label: "كـ - كُرَة", emoji: "⚽", speech: "ك - كُرَة" },
        { text: "لـ", label: "لـ - لُعْبَة", emoji: "🧸", speech: "ل - لُعْبَة" },
        { text: "مـ", label: "مـ - مَانْجُو", emoji: "🥭", speech: "م - مَانْجُو" },
        { text: "نـ", label: "نـ - نَجْمَة", emoji: "⭐", speech: "ن - نَجْمَة" },
        { text: "هـ", label: "هـ - هَدِيَّة", emoji: "🎁", speech: "هـ - هَدِيَّة" },
        { text: "يـ", label: "يـ - يُويُو", emoji: "🪀", speech: "ي - يُويُو" }
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
        modeLetters: "Uppercase Letters (A-Z)",
        modeWords: "Trace Words",
        modeLower: "Lowercase Letters (a-z)",
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

  // Génère automatiquement la liste des lettres minuscules (a-z) pour le Français et l'Anglais
  ["French", "English"].forEach((langKey) => {
    TRACING_DB[langKey].lowercase = TRACING_DB[langKey].letters.map((item) => {
      const lowerChar = item.text.toLowerCase();
      return {
        text: lowerChar,
        label: lowerChar + item.label.slice(1),
        emoji: item.emoji,
        speech: item.speech
      };
    });
  });

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

  let currentMode = "letters"; // "letters" | "words" | "lowercase"
  let currentIndex = 0;
  let currentColor = PENCIL_COLORS[0];
  let isDrawing = false;
  let lastPt = null;
  let hoverPt = null; // Position actuelle du curseur pour afficher le rond à la largeur de la lettre
  let currentBrushRadius = 18; // Rayon exact adapté à la demi-largeur du trait de la lettre
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
    if (currentMode === "words") return db.words;
    if (currentMode === "lowercase") return db.lowercase || db.letters;
    return db.letters;
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

  let guideCells = []; // Spatial cells of checkpoints to ensure every part of the letter is traced

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

    // Draw the full letter track onto maskCanvas
    maskCtx.fillStyle = "#000000";
    maskCtx.strokeStyle = "#000000";
    maskCtx.lineWidth = Math.max(8, fontSize * 0.055);
    maskCtx.strokeText(item.text, W / 2, H * 0.52);
    maskCtx.fillText(item.text, W / 2, H * 0.52);

    const imgData = maskCtx.getImageData(0, 0, W, H).data;
    const isOpaque = (px, py) => {
      if (px < 0 || px >= W || py < 0 || py >= H) return false;
      return imgData[(py * W + px) * 4 + 3] > 140;
    };

    // 1. Measure the exact stroke width (thickness) of the rendered letter
    const sampleStep = Math.max(6, Math.round(Math.min(W, H) / 42));
    const candidates = [];
    const widths = [];

    const isRTL = getActiveLangId() === "Arabic";
    const xStart = isRTL ? W - sampleStep : sampleStep;
    const xEnd = isRTL ? sampleStep : W - sampleStep;
    const xDir = isRTL ? -sampleStep : sampleStep;

    for (let x = xStart; isRTL ? x >= xEnd : x <= xEnd; x += xDir) {
      for (let y = sampleStep; y <= H - sampleStep; y += sampleStep) {
        if (!isOpaque(x, y)) continue;

        let left = 0;
        while (left < 120 && isOpaque(x - left - 1, y)) left++;
        let right = 0;
        while (right < 120 && isOpaque(x + right + 1, y)) right++;
        let up = 0;
        while (up < 120 && isOpaque(x, y - up - 1)) up++;
        let down = 0;
        while (down < 120 && isOpaque(x, y + down + 1)) down++;

        const hSpan = left + right + 1;
        const vSpan = up + down + 1;
        const localWidth = Math.min(hSpan, vSpan);
        const edgeDist = Math.min(left, right, up, down);

        widths.push(localWidth);
        candidates.push({ x, y, left, right, up, down, localWidth, edgeDist });
      }
    }

    if (widths.length > 0) {
      widths.sort((a, b) => a - b);
      const medianWidth = widths[Math.floor(widths.length * 0.52)];
      // Adapt cursor diameter (currentBrushRadius * 2) to the exact width of the letter stroke
      currentBrushRadius = Math.max(10, Math.min(48, Math.round(medianWidth * 0.5)));
    } else {
      currentBrushRadius = Math.max(12, Math.round(fontSize * 0.1));
    }

    // 2. Keep checkpoints near the centerline of the letter so one pass with the letter-width cursor validates that stroke cleanly
    guideCheckpoints = [];
    const cellSize = Math.max(22, Math.round(currentBrushRadius * 1.6));
    const cellMap = new Map();
    const minCenterDist = Math.max(2, Math.floor(currentBrushRadius * 0.38));

    for (let i = 0; i < candidates.length; i++) {
      const c = candidates[i];
      const isNearCenter =
        Math.min(c.left, c.right) >= minCenterDist ||
        Math.min(c.up, c.down) >= minCenterDist ||
        c.localWidth <= currentBrushRadius * 1.1;

      if (isNearCenter) {
        const cellKey = `${Math.floor(c.x / cellSize)}_${Math.floor(c.y / cellSize)}`;
        const cp = { x: c.x, y: c.y, hit: false, cellKey };
        guideCheckpoints.push(cp);
        if (!cellMap.has(cellKey)) {
          cellMap.set(cellKey, []);
        }
        cellMap.get(cellKey).push(cp);
      }
    }

    // Fallback if a very thin glyph filtered everything
    if (guideCheckpoints.length === 0) {
      for (let i = 0; i < candidates.length; i++) {
        const c = candidates[i];
        const cellKey = `${Math.floor(c.x / cellSize)}_${Math.floor(c.y / cellSize)}`;
        const cp = { x: c.x, y: c.y, hit: false, cellKey };
        guideCheckpoints.push(cp);
        if (!cellMap.has(cellKey)) {
          cellMap.set(cellKey, []);
        }
        cellMap.get(cellKey).push(cp);
      }
    }

    guideCells = Array.from(cellMap.values());

    isCompleted = false;
    updateProgressUI(0);
  }

  function updateProgressUI(pct) {
    const clamped = Math.min(100, Math.max(0, Math.round(pct)));
    document.getElementById("traceProgressFill").style.width = `${clamped}%`;
    document.getElementById("tracePercentBadge").textContent = `${clamped}%`;
  }

  function checkTracingCoverage(onStrokeEnd = false) {
    if (isCompleted || guideCheckpoints.length === 0) return;

    let hits = 0;
    for (let i = 0; i < guideCheckpoints.length; i++) {
      if (guideCheckpoints[i].hit) hits++;
    }
    const pointRatio = hits / guideCheckpoints.length;

    // Verify coverage across all spatial segments/extremities of the letter
    let coveredCells = 0;
    let untouchedMajorCells = 0;
    for (let c = 0; c < guideCells.length; c++) {
      const cell = guideCells[c];
      let cellHits = 0;
      for (let k = 0; k < cell.length; k++) {
        if (cell[k].hit) cellHits++;
      }
      const cRatio = cellHits / cell.length;
      if (cRatio >= 0.65) {
        coveredCells++;
      }
      if (cell.length >= 2 && cellHits === 0) {
        untouchedMajorCells++;
      }
    }

    const cellRatio = guideCells.length > 0 ? coveredCells / guideCells.length : pointRatio;
    const effectiveRatio = pointRatio * 0.6 + cellRatio * 0.4;

    // Target threshold: 93% while actively drawing, 88% when lifting the pencil at the end
    const targetRatio = onStrokeEnd ? 0.88 : 0.93;
    const allPartsVisited = untouchedMajorCells === 0;

    if (pointRatio >= targetRatio && cellRatio >= (onStrokeEnd ? 0.85 : 0.91) && allPartsVisited) {
      completeTracing();
    } else {
      // Cap displayed percentage at 99% until every part of the letter is genuinely completed
      const rawPct = Math.round((effectiveRatio / 0.93) * 100);
      const displayPct = Math.min(99, rawPct);
      updateProgressUI(displayPct);

      const tipEl = document.getElementById("fennyTracingTip");
      if (tipEl) {
        if (displayPct < 25) {
          tipEl.textContent = "Suis bien les pointillés ! ✍️";
        } else if (displayPct < 60) {
          tipEl.textContent = "Super départ, continue ! ✨";
        } else if (displayPct < 88) {
          tipEl.textContent = "Tu y es presque ! 🌟";
        } else {
          tipEl.textContent = "Magnifique tracé ! 🎉";
        }
      }
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
    strokeCtx.lineWidth = Math.max(8, fontSize * 0.055);
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
      ctx.lineWidth = Math.max(8, fontSize * 0.055);
      ctx.setLineDash([]);
      ctx.strokeText(item.text, W / 2, H * 0.52);
      ctx.fillText(item.text, W / 2, H * 0.52);

      // 3. Tracé de l'enfant (masqué proprement dans la lettre)
      ctx.save();
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

      // 5. Point guide lumineux animé (adapté à la largeur de la lettre)
      if (!isCompleted && guideCheckpoints.length > 0) {
        const nextPt = guideCheckpoints.find((p) => !p.hit);
        if (nextPt) {
          const r = Math.max(8, currentBrushRadius * 0.72) + Math.sin(pulsePhase) * 2.5;
          ctx.save();
          ctx.fillStyle = "rgba(250, 204, 21, 0.85)";
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

    // 7. Curseur circulaire adapté exactement à la largeur du trait de la lettre
    if (hoverPt) {
      ctx.save();
      // Halo intérieur de la couleur du crayon
      ctx.globalAlpha = isDrawing ? 0.38 : 0.24;
      ctx.fillStyle = currentColor;
      ctx.beginPath();
      ctx.arc(hoverPt.x, hoverPt.y, currentBrushRadius, 0, Math.PI * 2);
      ctx.fill();

      // Anneau blanc de contraste
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(hoverPt.x, hoverPt.y, currentBrushRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Contour net de la couleur choisie (diamètre = largeur exacte de la lettre)
      ctx.globalAlpha = 1;
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(hoverPt.x, hoverPt.y, currentBrushRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Point central de visée
      ctx.fillStyle = currentColor;
      ctx.beginPath();
      ctx.arc(hoverPt.x, hoverPt.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

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
    // Le diamètre du pinceau correspond exactement à la largeur mesurée du trait de la lettre
    const brushRadius = currentBrushRadius;
    const hitRadius = currentBrushRadius * 0.92;

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

    // Mark centerline checkpoints strictly along the drawn stroke path
    const dist = Math.hypot(toPt.x - fromPt.x, toPt.y - fromPt.y);
    const steps = Math.max(1, Math.ceil(dist / 5));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const sx = fromPt.x + (toPt.x - fromPt.x) * t;
      const sy = fromPt.y + (toPt.y - fromPt.y) * t;
      markCheckpointsNear(sx, sy, hitRadius);
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

    checkTracingCoverage(false);
  }

  canvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    isDrawing = true;
    const pt = getCanvasCoords(e);
    hoverPt = pt;
    lastPt = pt;
    drawStrokeSegment(pt, pt);
  });

  canvas.addEventListener("pointermove", (e) => {
    const pt = getCanvasCoords(e);
    hoverPt = pt;
    if (!isDrawing || !lastPt) return;
    e.preventDefault();
    drawStrokeSegment(lastPt, pt);
    lastPt = pt;
  });

  const stopDrawing = () => {
    if (isDrawing) {
      isDrawing = false;
      lastPt = null;
      checkTracingCoverage(true);
    }
  };
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", () => {
    hoverPt = null;
    stopDrawing();
  });
  canvas.addEventListener("pointerleave", () => {
    hoverPt = null;
    stopDrawing();
  });

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

  
  const WORD_ILLUSTRATIONS = {
    "CHAT": "assets/images/games/words/cat.png",
    "CAT": "assets/images/games/words/cat.png",
    "LION": "assets/images/games/words/lion.png",
    "POMME": "assets/images/games/words/apple.png",
    "APPLE": "assets/images/games/words/apple.png",
    "LIVRE": "assets/images/stationery/book.png",
    "BOOK": "assets/images/stationery/book.png",
    "CRAYON": "assets/images/stationery/pencil.png",
    "PENCIL": "assets/images/stationery/pencil.png",
    "OURS": "assets/images/games/words/bear.png",
    "BEAR": "assets/images/games/words/bear.png",
    "LAPIN": "assets/images/games/words/rabbit.png",
    "RABBIT": "assets/images/games/words/rabbit.png",
    "POISSON": "assets/images/games/words/fish.png",
    "FISH": "assets/images/games/words/fish.png",
    "CANARD": "assets/images/games/words/duck.png",
    "DUCK": "assets/images/games/words/duck.png",
    "SOLEIL": "assets/images/games/words/sun.png",
    "SUN": "assets/images/games/words/sun.png",
    "LUNE": "assets/images/games/words/moon.png",
    "MOON": "assets/images/games/words/moon.png",
    "TRAIN": "assets/images/games/words/train.png",
    "VELO": "assets/images/games/words/bike.png",
    "BIKE": "assets/images/games/words/bike.png",
    "FLEUR": "assets/images/games/words/flower.png",
    "FLOWER": "assets/images/games/words/flower.png",
    "CAHIER": "assets/images/stationery/notebook.png",
    "GOMME": "assets/images/stationery/eraser.png",
    "REGLE": "assets/images/stationery/ruler.png",
    "PERE": "assets/images/family/father.png",
    "PÈRE": "assets/images/family/father.png",
    "FATHER": "assets/images/family/father.png",
    "MERE": "assets/images/family/mother.png",
    "MÈRE": "assets/images/family/mother.png",
    "MOTHER": "assets/images/family/mother.png",
    "FRERE": "assets/images/family/brother.png",
    "FRÈRE": "assets/images/family/brother.png",
    "BROTHER": "assets/images/family/brother.png",
    "SOEUR": "assets/images/family/sister.png",
    "SŒUR": "assets/images/family/sister.png",
    "SISTER": "assets/images/family/sister.png"
  };

  function loadCurrentItem() {
    const db = getDB();
    const list = getActiveList();
    const item = getCurrentItem();
    if (!item) return;

    document.getElementById("previewEmoji").textContent = item.emoji;
    document.getElementById("previewWord").textContent = item.label;
    document.getElementById("traceInstructionBadge").textContent = db.ui.instruction;
    document.getElementById("itemPositionBadge").textContent = `${currentIndex + 1} / ${list.length}`;

    const imgEl = document.getElementById("previewImg");
    const tipEl = document.getElementById("fennyTracingTip");
    if (tipEl) tipEl.textContent = "Suis bien les pointillés ! ✍️";

    const normalizedKey = (item.text || "").toUpperCase().replace(/[^A-ZÀ-ÿ]/g, "");
    const imgSrc = WORD_ILLUSTRATIONS[normalizedKey] || WORD_ILLUSTRATIONS[item.text];
    if (imgEl) {
      if (imgSrc) {
        imgEl.src = imgSrc;
        imgEl.classList.remove("hidden");
      } else {
        imgEl.classList.add("hidden");
      }
    }

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
    const modeLowerTextEl = document.getElementById("modeLowerText");
    if (modeLowerTextEl) modeLowerTextEl.textContent = db.ui.modeLower;
    document.getElementById("listenTargetText").textContent = db.ui.listen;
    document.getElementById("colorPickerLabel").textContent = db.ui.colorLabel;
    document.getElementById("clearBtnText").textContent = db.ui.clear;
    document.getElementById("nextBtnText").textContent = db.ui.next;
    document.getElementById("tracingStarsCount").textContent = totalStars;

    document.getElementById("modeLettersBtn").classList.toggle("active", currentMode === "letters");
    document.getElementById("modeWordsBtn").classList.toggle("active", currentMode === "words");
    const modeLowerBtn = document.getElementById("modeLowerBtn");
    if (modeLowerBtn) modeLowerBtn.classList.toggle("active", currentMode === "lowercase");

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

    const modeLowerBtn = document.getElementById("modeLowerBtn");
    if (modeLowerBtn) {
      modeLowerBtn.addEventListener("click", () => {
        currentMode = "lowercase";
        currentIndex = 0;
        applyUI();
      });
    }

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
