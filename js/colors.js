"use strict";

/* =========================================
   COLOR DATA

   Har image transparent PNG honi chahiye.
   Folder path:
   assets/images/color/<color-name>/
========================================= */

const colors = [
  {
    name: "Red",
    value: "#ff2f2f",
    soft: "#ffe7e7",
    dark: "#c91f1f",
    bodyColor: "#780000",

    cardImage:
      "assets/images/color/red/apple.png",

    splashImage:
      "assets/images/color/red/splash.png",

    examples: [
      {
        name: "Apple",
        image:
          "assets/images/color/red/apple.png"
      },
      {
        name: "Strawberry",
        image:
          "assets/images/color/red/strawberry.png"
      },
      {
        name: "Rose",
        image:
          "assets/images/color/red/rose.png"
      }
    ],

    quiz: [
      {
        name: "Leaf",
        image:
          "assets/images/color/green/leaf.png",
        correct: false
      },
      {
        name: "Apple",
        image:
          "assets/images/color/red/apple.png",
        correct: true
      },
      {
        name: "Banana",
        image:
          "assets/images/color/yellow/banana.png",
        correct: false
      }
    ]
  },

  {
    name: "Blue",
    value: "#1e88ff",
    soft: "#e4f2ff",
    dark: "#1768c5",
    bodyColor: "#00255f",

    cardImage:
      "assets/images/color/blue/blueberry.png",

    splashImage:
      "assets/images/color/blue/butterfly.png",

    examples: [
      {
        name: "Whale",
        image:
          "assets/images/color/blue/whale.png"
      },
      {
        name: "Water Drop",
        image:
          "assets/images/color/blue/water-drop.png"
      },
      {
        name: "Blueberry",
        image:
          "assets/images/color/blue/blueberry.png"
      }
    ],

    quiz: [
      {
        name: "Blueberry",
        image:
          "assets/images/color/blue/blueberry.png",
        correct: true
      },
      {
        name: "Banana",
        image:
          "assets/images/color/yellow/banana.png",
        correct: false
      },
      {
        name: "Apple",
        image:
          "assets/images/color/red/apple.png",
        correct: false
      }
    ]
  },

  {
    name: "Green",
    value: "#00c853",
    soft: "#e2fbe9",
    dark: "#098b40",
    bodyColor: "#004a20",

    cardImage:
      "assets/images/color/green/grapes.png",

    splashImage:
      "assets/images/color/green/grapes.png",

    examples: [
      {
        name: "Leaf",
        image:
          "assets/images/color/green/leaf.png"
      },
      {
        name: "Frog",
        image:
          "assets/images/color/green/frog.png"
      },
      {
        name: "Broccoli",
        image:
          "assets/images/color/green/broccoli.png"
      }
    ],

    quiz: [
      {
        name: "Carrot",
        image:
          "assets/images/color/orange/carrot.png",
        correct: false
      },
      {
        name: "Leaf",
        image:
          "assets/images/color/green/leaf.png",
        correct: true
      },
      {
        name: "Grapes",
        image:
          "assets/images/color/purple/grapes.png",
        correct: false
      }
    ]
  },

  {
    name: "Yellow",
    value: "#ffd600",
    soft: "#fff8cf",
    dark: "#b78c00",
    bodyColor: "#8c6500",

    cardImage:
      "assets/images/color/yellow/banana.png",

    splashImage:
      "assets/images/color/yellow/baby-chick.png",

    examples: [
      {
        name: "Sun",
        image:
          "assets/images/color/yellow/sun.png"
      },
      {
        name: "Banana",
        image:
          "assets/images/color/yellow/banana.png"
      },
      {
        name: "Star",
        image:
          "assets/images/color/yellow/star.png"
      }
    ],

    quiz: [
      {
        name: "Banana",
        image:
          "assets/images/color/yellow/banana.png",
        correct: true
      },
      {
        name: "Strawberry",
        image:
          "assets/images/color/red/strawberry.png",
        correct: false
      },
      {
        name: "Leaf",
        image:
          "assets/images/color/green/leaf.png",
        correct: false
      }
    ]
  },

  {
    name: "Orange",
    value: "#ff8c00",
    soft: "#fff0dc",
    dark: "#c96500",
    bodyColor: "#803100",

    cardImage:
      "assets/images/color/orange/orange.png",

    splashImage:
      "assets/images/color/orange/orange.png",

    examples: [
      {
        name: "Orange",
        image:
          "assets/images/color/orange/orange.png"
      },
      {
        name: "Carrot",
        image:
          "assets/images/color/orange/carrot.png"
      },
      {
        name: "Pumpkin",
        image:
          "assets/images/color/orange/pumpkin.png"
      }
    ],

    quiz: [
      {
        name: "Pumpkin",
        image:
          "assets/images/color/orange/pumpkin.png",
        correct: true
      },
      {
        name: "Cloud",
        image:
          "assets/images/color/white/cloud.png",
        correct: false
      },
      {
        name: "Grapes",
        image:
          "assets/images/color/green/grapes.png",
        correct: false
      }
    ]
  },

  {
    name: "Purple",
    value: "#8d3cff",
    soft: "#f0e6ff",
    dark: "#6321c4",
    bodyColor: "#33086c",

    cardImage:
      "assets/images/color/purple/grapes.png",

    splashImage:
      "assets/images/color/purple/grapes.png",

    examples: [
      {
        name: "Brinjal",
        image:
          "assets/images/color/purple/brinjal.png"
      },
      {
        name: "Flower",
        image:
          "assets/images/color/purple/flower.png"
      },
      {
        name: "Gift Box",
        image:
          "assets/images/color/purple/gift-box.png"
      }
    ],

    quiz: [
      {
        name: "Apple",
        image:
          "assets/images/color/red/apple.png",
        correct: false
      },
      {
        name: "Grapes",
        image:
          "assets/images/color/purple/grapes.png",
        correct: true
      },
      {
        name: "Banana",
        image:
          "assets/images/color/yellow/banana.png",
        correct: false
      }
    ]
  },

  {
    name: "Pink",
    value: "#ff5ecb",
    soft: "#ffe6f7",
    dark: "#c93396",
    bodyColor: "#72043f",

    cardImage:
      "assets/images/color/pink/donut.png",

    splashImage:
      "assets/images/color/pink/flamingo.png",

    examples: [
      {
        name: "Balloon",
        image:
          "assets/images/color/pink/balloon.png"
      },
      {
        name: "Flamingo",
        image:
          "assets/images/color/pink/flamingo.png"
      },
      {
        name: "Cotton Candy",
        image:
          "assets/images/color/pink/cotton-candy.png"
      }
    ],

    quiz: [
      {
        name: "Flamingo",
        image:
          "assets/images/color/pink/flamingo.png",
        correct: true
      },
      {
        name: "Frog",
        image:
          "assets/images/color/green/frog.png",
        correct: false
      },
      {
        name: "Cat",
        image:
          "assets/images/color/black/cat.png",
        correct: false
      }
    ]
  },

  {
    name: "Black",
    value: "#202020",
    soft: "#ededed",
    dark: "#050505",
    bodyColor: "#000000",

    cardImage:
      "assets/images/color/black/olives.png",

    splashImage:
      "assets/images/color/black/olives.png",

    examples: [
      {
        name: "Car",
        image:
          "assets/images/color/black/car.png"
      },
      {
        name: "Cat",
        image:
          "assets/images/color/black/cat.png"
      },
      {
        name: "Top Hat",
        image:
          "assets/images/color/black/hat.png"
      }
    ],

    quiz: [
      {
        name: "Car",
        image:
          "assets/images/color/black/car.png",
        correct: true
      },
      {
        name: "Frog",
        image:
          "assets/images/color/green/frog.png",
        correct: false
      },
      {
        name: "Sun",
        image:
          "assets/images/color/yellow/sun.png",
        correct: false
      }
    ]
  },

  {
    name: "White",
    value: "#ffffff",
    soft: "#f1f4f7",
    dark: "#66717c",
    bodyColor: "#77838d",

    cardImage:
      "assets/images/color/white/cloud.png",

    splashImage:
      "assets/images/color/white/swan.png",

    examples: [
      {
        name: "Cloud",
        image:
          "assets/images/color/white/cloud.png"
      },
      {
        name: "Rabbit",
        image:
          "assets/images/color/white/rabbit.png"
      },
      {
        name: "Mushroom",
        image:
          "assets/images/color/white/mushroom.png"
      }
    ],

    quiz: [
      {
        name: "Chocolate Cupcake",
        image:
          "assets/images/color/brown/chocolate-cupcake.png",
        correct: false
      },
      {
        name: "Cloud",
        image:
          "assets/images/color/white/cloud.png",
        correct: true
      },
      {
        name: "Orange",
        image:
          "assets/images/color/orange/orange.png",
        correct: false
      }
    ]
  },

  {
    name: "Brown",
    value: "#8b4513",
    soft: "#f4e7dc",
    dark: "#5e2d0d",
    bodyColor: "#321500",

    cardImage:
      "assets/images/color/brown/chocolate-cupcake.png",

    splashImage:
      "assets/images/color/brown/chocolate-cupcake.png",

    examples: [
      {
        name: "Teddy Wear",
        image:
          "assets/images/color/brown/teddy-wear.png"
      },
      {
        name: "Owl",
        image:
          "assets/images/color/brown/owl.png"
      },
      {
        name: "Monkey",
        image:
          "assets/images/color/brown/monkey.png"
      }
    ],

    quiz: [
      {
        name: "Horse",
        image:
          "assets/images/color/brown/horse.png",
        correct: true
      },
      {
        name: "Water Drop",
        image:
          "assets/images/color/blue/water-drop.png",
        correct: false
      },
      {
        name: "Brinjal",
        image:
          "assets/images/color/purple/brinjal.png",
        correct: false
      }
    ]
  }
];

const colorTranslations = {
  English: {
    Red: "Red",
    Blue: "Blue",
    Green: "Green",
    Yellow: "Yellow",
    Orange: "Orange",
    Purple: "Purple",
    Pink: "Pink",
    Black: "Black",
    White: "White",
    Brown: "Brown",
    titles: {
      learnColors: "Learn Colors",
      tapSplash: "Tap a paint splash and hear the color!",
      letsLearn: "Let's Learn",
      colorSuffix: "Color",
      sayIt: "Say it:",
      thingsThatAre: (c) => `Things that are ${c}`,
      tapToHear: "Tap any picture to hear its name.",
      colorChallenge: "Color Challenge",
      tapTheObject: (c) => `Tap the ${c} Object!`,
      lookCarefully: "Look carefully and choose the correct picture.",
      chooseCorrect: "Choose the correct object.",
      greatJob: (obj, col) => `Great Job! ${obj} is ${col}!`,
      tryAgain: (col) => `Try again. Find the ${col} object.`
    },
    items: {
      "Apple": "Apple",
      "Strawberry": "Strawberry",
      "Rose": "Rose",
      "Leaf": "Leaf",
      "Banana": "Banana",
      "Whale": "Whale",
      "Water Drop": "Water Drop",
      "Blueberry": "Blueberry",
      "Frog": "Frog",
      "Broccoli": "Broccoli",
      "Carrot": "Carrot",
      "Grapes": "Grapes",
      "Sun": "Sun",
      "Star": "Star",
      "Orange": "Orange",
      "Pumpkin": "Pumpkin",
      "Cloud": "Cloud",
      "Brinjal": "Eggplant",
      "Flower": "Flower",
      "Gift Box": "Gift Box",
      "Balloon": "Balloon",
      "Flamingo": "Flamingo",
      "Cotton Candy": "Cotton Candy",
      "Cat": "Cat",
      "Car": "Car",
      "Top Hat": "Top Hat",
      "Rabbit": "Rabbit",
      "Mushroom": "Mushroom",
      "Chocolate Cupcake": "Cupcake",
      "Teddy Wear": "Teddy Bear",
      "Owl": "Owl",
      "Monkey": "Monkey",
      "Horse": "Horse"
    }
  },
  French: {
    Red: "Rouge",
    Blue: "Bleu",
    Green: "Vert",
    Yellow: "Jaune",
    Orange: "Orange",
    Purple: "Violet",
    Pink: "Rose",
    Black: "Noir",
    White: "Blanc",
    Brown: "Marron",
    titles: {
      learnColors: "Apprendre les Couleurs",
      tapSplash: "Touche une tache pour écouter la couleur !",
      letsLearn: "Découvrons",
      colorSuffix: "Couleur",
      sayIt: "Répète :",
      thingsThatAre: (c) => `Objets de couleur ${c}`,
      tapToHear: "Touche une image pour entendre son nom.",
      colorChallenge: "Défi des Couleurs",
      tapTheObject: (c) => `Touche l'objet ${c} !`,
      lookCarefully: "Regarde bien et choisis la bonne image.",
      chooseCorrect: "Choisis le bon objet.",
      greatJob: (obj, col) => `Bravo ! ${obj} est ${col} !`,
      tryAgain: (col) => `Réessaie. Trouve l'objet ${col}.`
    },
    items: {
      "Apple": "Pomme",
      "Strawberry": "Fraise",
      "Rose": "Rose",
      "Leaf": "Feuille",
      "Banana": "Banane",
      "Whale": "Baleine",
      "Water Drop": "Goutte d'eau",
      "Blueberry": "Myrtille",
      "Frog": "Grenouille",
      "Broccoli": "Brocoli",
      "Carrot": "Carotte",
      "Grapes": "Raisin",
      "Sun": "Soleil",
      "Star": "Étoile",
      "Orange": "Orange",
      "Pumpkin": "Citrouille",
      "Cloud": "Nuage",
      "Brinjal": "Aubergine",
      "Flower": "Fleur",
      "Gift Box": "Cadeau",
      "Balloon": "Ballon",
      "Flamingo": "Flamant rose",
      "Cotton Candy": "Barbe à papa",
      "Cat": "Chat",
      "Car": "Voiture",
      "Top Hat": "Chapeau",
      "Rabbit": "Lapin",
      "Mushroom": "Champignon",
      "Chocolate Cupcake": "Gâteau",
      "Teddy Wear": "Ours en peluche",
      "Owl": "Chouette",
      "Monkey": "Singe",
      "Horse": "Cheval"
    }
  },
  Arabic: {
    Red: "أحمر",
    Blue: "أزرق",
    Green: "أخضر",
    Yellow: "أصفر",
    Orange: "برتقالي",
    Purple: "بنفسجي",
    Pink: "وردي",
    Black: "أسود",
    White: "أبيض",
    Brown: "بني",
    titles: {
      learnColors: "تعلم الألوان",
      tapSplash: "اضغط على بقعة اللون للاستماع!",
      letsLearn: "هيا نتعلم",
      colorSuffix: "اللون",
      sayIt: "ردد معي:",
      thingsThatAre: (c) => `أشياء باللون ${c}`,
      tapToHear: "اضغط على أي صورة لسماع اسمها.",
      colorChallenge: "تحدي الألوان",
      tapTheObject: (c) => `اضغط على الشيء باللون ${c}!`,
      lookCarefully: "انظر جيداً واختر الصورة الصحيحة.",
      chooseCorrect: "اختر الشيء الصحيح.",
      greatJob: (obj, col) => `أحسنت ممتاز! ${obj} باللون ${col}!`,
      tryAgain: (col) => `حاول مرة أخرى. ابحث عن الشيء باللون ${col}.`
    },
    items: {
      "Apple": "تفاحة",
      "Strawberry": "فراولة",
      "Rose": "وردة",
      "Leaf": "ورقة شجر",
      "Banana": "موز",
      "Whale": "حوت",
      "Water Drop": "قطرة ماء",
      "Blueberry": "توت",
      "Frog": "ضفدع",
      "Broccoli": "بروكلي",
      "Carrot": "جزر",
      "Grapes": "عنب",
      "Sun": "شمس",
      "Star": "نجمة",
      "Orange": "برتقال",
      "Pumpkin": "قرع",
      "Cloud": "سحابة",
      "Brinjal": "باذنجان",
      "Flower": "زهرة",
      "Gift Box": "صندوق هدية",
      "Balloon": "بالون",
      "Flamingo": "فلامنغو",
      "Cotton Candy": "غزل البنات",
      "Cat": "قطة",
      "Car": "سيارة",
      "Top Hat": "قبعة",
      "Rabbit": "أرنب",
      "Mushroom": "فطر",
      "Chocolate Cupcake": "كعكة",
      "Teddy Wear": "دبدوب",
      "Owl": "بومة",
      "Monkey": "قرد",
      "Horse": "حصان"
    }
  }
};

function getActiveLangId() {
  return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
}

function getLocalizedColorName(colorName) {
  const lang = getActiveLangId();
  return (colorTranslations[lang] && colorTranslations[lang][colorName]) || colorName;
}

function getLocalizedItemName(itemName) {
  const lang = getActiveLangId();
  return (colorTranslations[lang] && colorTranslations[lang].items && colorTranslations[lang].items[itemName]) || itemName;
}

function getLocalizedTitles() {
  const lang = getActiveLangId();
  return (colorTranslations[lang] && colorTranslations[lang].titles) || colorTranslations.English.titles;
}


/* =========================================
   DOM ELEMENTS
========================================= */

const colorsGrid =
  document.getElementById("colorsGrid");

const colorsApp =
  document.getElementById("colorsApp");

const colorsHero =
  document.querySelector(".colors-hero");

const colorModal =
  document.getElementById("colorModal");

const colorDetail =
  document.getElementById("colorDetail");

const closeColorBtn =
  document.getElementById("closeColorBtn");

const prevColorBtn =
  document.getElementById("prevColorBtn");

const nextColorBtn =
  document.getElementById("nextColorBtn");

const modalProgress =
  document.getElementById("modalProgress");

const colorTitle =
  document.getElementById("colorTitle");

const detailColorName =
  document.getElementById("detailColorName");

const sayColorName =
  document.getElementById("sayColorName");

const bigSplashImage =
  document.getElementById("bigSplashImage");

const bigSplashFallback =
  document.getElementById("bigSplashFallback");

const bigSplashWrap =
  document.querySelector(".big-splash-wrap");

const soundBtn =
  document.getElementById("soundBtn");

const examplesHeading =
  document.getElementById("examplesHeading");

const examplesGrid =
  document.getElementById("examplesGrid");

const objectFeedback =
  document.getElementById("objectFeedback");

const quizHeading =
  document.getElementById("quizHeading");

const quizOptions =
  document.getElementById("quizOptions");

const quizFeedback =
  document.getElementById("quizFeedback");

const successMessage =
  document.getElementById("successMessage");

const successText =
  document.getElementById("successText");

const celebrationLayer =
  document.getElementById("celebrationLayer");

const pageColorOverlay =
  document.getElementById("pageColorOverlay");

const popupColorWave =
  document.getElementById("popupColorWave");

const modalParticles =
  document.getElementById("modalParticles");


/* =========================================
   STATE
========================================= */

let currentIndex = 0;
let successTimer = null;
let speechSequence = 0;
let voices = [];

/* Quiz sound effects play before the existing voice message. */
const quizSoundPaths = {
  correct: "assets/images/music/cheering.mp3",
  wrong: "assets/images/music/wrong- sound.mp3"
};

let currentQuizAudio = null;
let quizAudioBusy = false;


/* =========================================
   RESPONSIVE MOBILE LAYOUT
========================================= */

function getViewportSize() {
  const viewport =
    window.visualViewport;

  return {
    width:
      viewport?.width ||
      window.innerWidth ||
      document.documentElement.clientWidth,
    height:
      viewport?.height ||
      window.innerHeight ||
      document.documentElement.clientHeight
  };
}

function updateMobileLayout() {
  const { width, height } = getViewportSize();
  document.documentElement.style.setProperty("--visible-width", `${width}px`);
  document.documentElement.style.setProperty("--visible-height", `${height}px`);
  document.body.classList.remove("mobile-portrait-rotate");
  if (colorsApp) {
    colorsApp.style.height = "";
  }
}

function getScrollableElement(...elements) {
  return (
    elements.find(
      (element) =>
        element &&
        element.scrollHeight >
          element.clientHeight + 2
    ) ||
    elements.find(Boolean) ||
    null
  );
}

function getRotatedScrollTarget(event) {
  if (
    !document.body.classList.contains(
      "mobile-landscape-layout"
    )
  ) {
    return null;
  }

  const target =
    event.target;

  if (
    colorModal?.classList.contains("show") &&
    target.closest("#colorModal")
  ) {
    return null;
  }

  return getScrollableElement(
    colorsHero,
    colorsApp
  );
}

function isLockedRotatedColorModal(event) {
  return (
    document.body.classList.contains(
      "mobile-landscape-layout"
    ) &&
    colorModal?.classList.contains("show") &&
    event.target.closest("#colorModal")
  );
}

function enableRotatedTouchScroll() {
  let lastX = 0;
  let lastY = 0;

  document.addEventListener(
    "touchstart",
    (event) => {
      const scrollTarget =
        getRotatedScrollTarget(event);

      if (
        !scrollTarget ||
        event.touches.length !== 1
      ) {
        return;
      }

      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      if (isLockedRotatedColorModal(event)) {
        event.preventDefault();
        return;
      }

      const scrollTarget =
        getRotatedScrollTarget(event);

      if (
        !scrollTarget ||
        event.touches.length !== 1
      ) {
        return;
      }

      const currentX =
        event.touches[0].clientX;

      const currentY =
        event.touches[0].clientY;

      const deltaX =
        currentX - lastX;

      const deltaY =
        lastY - currentY;

      scrollTarget.scrollTop +=
        deltaY + deltaX;

      lastX = currentX;
      lastY = currentY;

      event.preventDefault();
    },
    { passive: false, capture: true }
  );

  document.addEventListener(
    "wheel",
    (event) => {
      if (isLockedRotatedColorModal(event)) {
        event.preventDefault();
        return;
      }

      const scrollTarget =
        getRotatedScrollTarget(event);

      if (!scrollTarget) {
        return;
      }

      scrollTarget.scrollTop +=
        event.deltaY + event.deltaX;

      event.preventDefault();
    },
    { passive: false, capture: true }
  );
}


/* =========================================
   VOICE
========================================= */

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  voices =
    window.speechSynthesis.getVoices();
}

loadVoices();

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged =
    loadVoices;
}

function getPreferredVoice() {
  const lang = getActiveLangId();
  const prefix = lang === "Arabic" ? "ar" : (lang === "French" ? "fr" : "en");
  return (
    voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(prefix)
    ) ||
    voices[0] ||
    null
  );
}

function speakText(text, onComplete = null) {
  speechSequence += 1;
  const currentSpeech = speechSequence;

  soundBtn?.classList.add("speaking");

  const finishSpeech = () => {
    if (currentSpeech !== speechSequence) return;
    soundBtn?.classList.remove("speaking");
    if (typeof onComplete === "function") {
      onComplete();
    }
  };

  const lang = getActiveLangId();
  const langCode = lang === "Arabic" ? "ar-SA" : (lang === "French" ? "fr-FR" : "en-US");
  const langPrefix = langCode.slice(0, 2).toLowerCase();

  const hasNativeVoice = ("speechSynthesis" in window) &&
    window.speechSynthesis.getVoices().some(v => v.lang.toLowerCase().startsWith(langPrefix));

  if (langPrefix === "ar" || langPrefix === "fr" || !hasNativeVoice) {
    if (window.AppLang) {
      window.AppLang.speak(text, langCode, 0.8, 1.35, finishSpeech);
    } else {
      finishSpeech();
    }
    return;
  }

  if (!("speechSynthesis" in window)) {
    finishSpeech();
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = langCode;
  speech.pitch = 1.35;
  speech.rate = 0.8;
  speech.volume = 1;

  const preferredVoice = getPreferredVoice();
  if (preferredVoice) {
    speech.voice = preferredVoice;
  }

  speech.onend = finishSpeech;
  speech.onerror = finishSpeech;

  window.speechSynthesis.resume();
  window.speechSynthesis.speak(speech);
}


/* =========================================
   QUIZ SOUND + VOICE SEQUENCE
========================================= */

function stopQuizAudio() {
  if (currentQuizAudio) {
    currentQuizAudio.pause();
    currentQuizAudio.currentTime = 0;
    currentQuizAudio = null;
  }

  quizAudioBusy = false;
  quizOptions?.classList.remove(
    "audio-playing"
  );
}

function finishQuizAudioSequence() {
  currentQuizAudio = null;
  quizAudioBusy = false;

  quizOptions?.classList.remove(
    "audio-playing"
  );
}

function playQuizSoundThenSpeak(
  soundPath,
  voiceText
) {
  if (quizAudioBusy) {
    return;
  }

  quizAudioBusy = true;

  quizOptions?.classList.add(
    "audio-playing"
  );

  window.speechSynthesis?.cancel?.();

  const audio = new Audio(soundPath);
  currentQuizAudio = audio;
  audio.preload = "auto";

  let sequenceContinued = false;

  const continueWithVoice = () => {
    if (sequenceContinued) {
      return;
    }

    sequenceContinued = true;
    currentQuizAudio = null;

    speakText(
      voiceText,
      finishQuizAudioSequence
    );
  };

  audio.addEventListener(
    "ended",
    continueWithVoice,
    { once: true }
  );

  audio.addEventListener(
    "error",
    continueWithVoice,
    { once: true }
  );

  const playPromise = audio.play();

  if (
    playPromise &&
    typeof playPromise.catch === "function"
  ) {
    playPromise.catch(
      continueWithVoice
    );
  }
}



/* =========================================
   IMAGE MARKUP
========================================= */

function createImageMarkup(
  item,
  className,
  altText
) {
  return `
    <img
      class="${className}"
      src="${item.image}"
      alt="${altText}"
      draggable="false"
      onerror="this.classList.add('image-missing')"
    >
  `;
}


/* =========================================
   BUILD COLOR CARDS
========================================= */

function buildColorCards() {
  if (!colorsGrid) {
    return;
  }

  colorsGrid.innerHTML = "";

  colors.forEach((color, index) => {
    const card =
      document.createElement("button");

    card.type = "button";
    card.className = "color-card";

    card.setAttribute(
      "aria-label",
      `Learn ${color.name} color`
    );

    card.style.setProperty(
      "--color",
      color.value
    );

    card.style.setProperty(
      "--soft",
      color.soft
    );

    card.style.setProperty(
      "--dark",
      color.dark
    );

    card.style.setProperty(
      "--delay",
      `${index * 75}ms`
    );

    card.innerHTML = `
      <img
        class="card-object-image"
        src="${color.cardImage}"
        alt="${color.name} example"
        draggable="false"
        onerror="this.classList.add('image-missing')"
      >

      <span
        class="paint-blob-wrap"
        aria-hidden="true"
      >
        <span class="paint-drop one"></span>
        <span class="paint-drop two"></span>
        <span class="paint-drop three"></span>
        <span class="paint-blob"></span>
      </span>

      <span class="color-name">
        ${getLocalizedColorName(color.name)}
      </span>
    `;

    card.addEventListener(
      "click",
      () => {
        createPaintBurst(
          card,
          color.value
        );

        window.setTimeout(() => {
          openColor(index);
        }, 150);
      }
    );

    colorsGrid.appendChild(card);
  });
}


/* =========================================
   APPLY COLOR THEME
========================================= */

function applyColorTheme(color) {
  colorModal?.style.setProperty(
    "--active-color",
    color.value
  );

  colorModal?.style.setProperty(
    "--active-soft",
    color.soft
  );

  colorModal?.style.setProperty(
    "--active-dark",
    color.dark
  );

  document.body.style.setProperty(
    "--active-page-color",
    color.bodyColor
  );
}


/* =========================================
   SPLASH IMAGE
========================================= */

function updateSplashImage(color) {
  if (
    !bigSplashImage ||
    !bigSplashFallback
  ) {
    return;
  }

  bigSplashImage.onload = null;
  bigSplashImage.onerror = null;

  bigSplashImage.classList.remove(
    "visible",
    "image-missing"
  );

  bigSplashFallback.classList.remove(
    "hidden"
  );

  bigSplashImage.removeAttribute("src");

  const expectedSource =
    color.splashImage;

  bigSplashImage.onload = () => {
    if (
      colors[currentIndex]
        .splashImage !== expectedSource
    ) {
      return;
    }

    bigSplashImage.classList.add(
      "visible"
    );

    bigSplashFallback.classList.add(
      "hidden"
    );
  };

  bigSplashImage.onerror = () => {
    bigSplashImage.classList.remove(
      "visible"
    );

    bigSplashImage.classList.add(
      "image-missing"
    );

    bigSplashFallback.classList.remove(
      "hidden"
    );
  };

  bigSplashImage.src =
    color.splashImage;

  bigSplashImage.alt =
    `${color.name} paint splash`;
}


/* =========================================
   OPEN COLOR
========================================= */

function openColor(index) {
  currentIndex = index;

  const color =
    colors[currentIndex];

  const lang = getActiveLangId();
  const locCol = getLocalizedColorName(color.name);
  const t = getLocalizedTitles();

  colorDetail.classList.toggle(
    "white-color-mode",
    color.name === "White"
  );

  stopQuizAudio();
  clearSuccess();
  resetColorResponse();

  applyColorTheme(color);
  updateSplashImage(color);

  modalProgress.textContent =
    `${lang === "Arabic" ? "اللون" : (lang === "French" ? "Couleur" : "Color")} ${currentIndex + 1} / ${colors.length}`;

  colorTitle.textContent =
    lang === "Arabic" ? `اللون ${locCol}` : `${locCol} (${t.colorSuffix})`;

  detailColorName.textContent =
    locCol.toUpperCase();

  sayColorName.textContent =
    `${locCol}!`;

  examplesHeading.textContent =
    t.thingsThatAre(locCol);

  renderExamples(color);
  renderQuiz(color);

  colorModal.classList.add("show");

  colorModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  speakText(lang === "Arabic" ? `اللون ${locCol}` : locCol);
}


/* =========================================
   CLOSE COLOR
========================================= */

function closeColor() {
  speechSequence += 1;

  window.speechSynthesis?.cancel?.();
  stopQuizAudio();

  clearSuccess();
  resetColorResponse();

  colorModal.classList.remove("show");

  colorModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}


/* =========================================
   NAVIGATION
========================================= */

function navigateColor(direction) {
  if (direction === "next") {
    currentIndex =
      (currentIndex + 1) %
      colors.length;
  } else {
    currentIndex =
      (
        currentIndex -
        1 +
        colors.length
      ) %
      colors.length;
  }

  colorDetail?.animate(
    [
      {
        opacity: 0.45,
        transform:
          direction === "next"
            ? "translateX(28px) scale(0.98)"
            : "translateX(-28px) scale(0.98)"
      },
      {
        opacity: 1,
        transform:
          "translateX(0) scale(1)"
      }
    ],
    {
      duration: 320,
      easing: "ease-out"
    }
  );

  openColor(currentIndex);
}


/* =========================================
   EXAMPLE IMAGES
========================================= */

function renderExamples(color) {
  examplesHeading.textContent =
    `Things that are ${color.name}`;

  examplesGrid.innerHTML = "";

  objectFeedback.textContent =
    "Tap a picture to hear its name.";

  objectFeedback.classList.remove(
    "active"
  );

  color.examples.forEach(
    (example, index) => {
      const card =
        document.createElement("div");

      card.className = "example-card";

      card.style.setProperty(
        "--example-delay",
        `${140 + index * 130}ms`
      );

        card.innerHTML = `
        ${createImageMarkup(
        example,
        "example-image",
        getLocalizedItemName(example.name)
      )}

        <span class="example-name">
          ${getLocalizedItemName(example.name)}
        </span>
      `;

      const image =
        card.querySelector(
          ".example-image"
        );

      image?.setAttribute(
        "role",
        "button"
      );

      image?.setAttribute(
        "tabindex",
        "0"
      );

      const locColName = getLocalizedColorName(color.name);
      const locItemName = getLocalizedItemName(example.name);

      image?.setAttribute(
        "aria-label",
        `${locItemName} - ${locColName}`
      );

      const activateExample = () => {
        handleExampleClick(
          card,
          image,
          example,
          color
        );
      };

      image?.addEventListener(
        "click",
        activateExample
      );

      image?.addEventListener(
        "keydown",
        (event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            activateExample();
          }
        }
      );

      examplesGrid.appendChild(card);
    }
  );
}

function handleExampleClick(
  card,
  image,
  example,
  color
) {
  if (quizAudioBusy) {
    return;
  }

  const allCards =
    examplesGrid.querySelectorAll(
      ".example-card"
    );

  const allImages =
    examplesGrid.querySelectorAll(
      ".example-image"
    );

  allCards.forEach((item) => {
    item.classList.remove(
      "color-flash"
    );
  });

  allImages.forEach((item) => {
    item.classList.remove(
      "is-speaking"
    );
  });

  restartClass(
    image,
    "is-speaking",
    780
  );

  restartClass(
    card,
    "color-flash",
    1000,
    false
  );

  const lang = getActiveLangId();
  const locCol = getLocalizedColorName(color.name);
  const locItem = getLocalizedItemName(example.name);

  let sentence = `${locItem} is ${locCol}`;
  if (lang === "French") sentence = `${locItem} est ${locCol}`;
  if (lang === "Arabic") sentence = `${locItem} باللون ${locCol}`;

  objectFeedback.textContent = `${sentence}!`;

  restartClass(
    objectFeedback,
    "active",
    650
  );

  triggerColorResponse(color);

  speakText(sentence);
}


/* =========================================
   QUIZ
========================================= */

function renderQuiz(color) {
  const t = getLocalizedTitles();
  const locCol = getLocalizedColorName(color.name);

  quizHeading.textContent =
    t.tapTheObject(locCol);

  quizOptions.innerHTML = "";

  quizFeedback.textContent =
    t.chooseCorrect;

  quizFeedback.classList.remove(
    "correct",
    "wrong"
  );

  color.quiz.forEach((option) => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "quiz-option";

    const locOptName = getLocalizedItemName(option.name);

    button.setAttribute(
      "aria-label",
      locOptName
    );

    button.innerHTML = `
      ${createImageMarkup(
      option,
      "quiz-option-image",
      locOptName
    )}

      <span class="quiz-label">
        ${locOptName}
      </span>
    `;

    button.addEventListener(
      "click",
      () => {
        if (quizAudioBusy) {
          return;
        }

        handleQuizAnswer(
          button,
          option,
          color
        );
      }
    );

    quizOptions.appendChild(button);
  });
}

function handleQuizAnswer(
  button,
  option,
  color
) {
  const buttons =
    quizOptions.querySelectorAll(
      ".quiz-option"
    );

  buttons.forEach((item) => {
    item.classList.remove(
      "correct",
      "wrong"
    );
  });

  quizFeedback.classList.remove(
    "correct",
    "wrong"
  );

  const t = getLocalizedTitles();
  const locCol = getLocalizedColorName(color.name);
  const locOptName = getLocalizedItemName(option.name);

  if (option.correct) {
    restartClass(
      button,
      "correct",
      1000
    );

    const feedbackMsg = t.greatJob(locOptName, locCol);

    quizFeedback.textContent = feedbackMsg;

    quizFeedback.classList.add(
      "correct"
    );

    triggerColorResponse(color);
    createQuizCardCelebration(button);

    playQuizSoundThenSpeak(
      quizSoundPaths.correct,
      feedbackMsg
    );

    window.clearTimeout(
      successTimer
    );

    successTimer =
      window.setTimeout(() => {
        successMessage.classList.remove(
          "show"
        );
      }, 3200);

    return;
  }

  restartClass(
    button,
    "wrong",
    700
  );

  const wrongMsg = t.tryAgain(locCol);

  quizFeedback.textContent = wrongMsg;

  quizFeedback.classList.add(
    "wrong"
  );

  playQuizSoundThenSpeak(
    quizSoundPaths.wrong,
    wrongMsg
  );
}


/* =========================================
   DARK COLOR RESPONSE

   Example image ya correct quiz par:
   - body dark selected color
   - popup selected color wave
   - splash animation
   - particles
========================================= */

function triggerColorResponse(color) {
  document.body.style.setProperty(
    "--active-page-color",
    color.bodyColor
  );

  pageColorOverlay.classList.add(
    "active"
  );

  restartClass(
    pageColorOverlay,
    "replay",
    980,
    false
  );

  restartClass(
    popupColorWave,
    "run",
    950,
    false
  );

  restartClass(
    bigSplashWrap,
    "color-response",
    780,
    false
  );

  createModalColorParticles(
    color.value
  );
}


/* =========================================
   RESET COLOR RESPONSE
========================================= */

function resetColorResponse() {
  pageColorOverlay.classList.remove(
    "active",
    "replay"
  );

  popupColorWave.classList.remove(
    "run"
  );

  bigSplashWrap?.classList.remove(
    "color-response"
  );

  modalParticles.innerHTML = "";
}


/* =========================================
   RESTART ANIMATION CLASS
========================================= */

function restartClass(
  element,
  className,
  removeAfter = 800,
  clearStates = true
) {
  if (!element) {
    return;
  }

  if (clearStates) {
    element.classList.remove(
      "correct",
      "wrong",
      "active",
      "is-speaking"
    );
  }

  element.classList.remove(
    className
  );

  void element.offsetWidth;

  element.classList.add(
    className
  );

  if (removeAfter > 0) {
    window.setTimeout(() => {
      element.classList.remove(
        className
      );
    }, removeAfter);
  }
}


/* =========================================
   MODAL PARTICLES
========================================= */

function createModalColorParticles(color) {
  modalParticles.innerHTML = "";

  for (
    let index = 0;
    index < 24;
    index += 1
  ) {
    const particle =
      document.createElement("span");

    const angle =
      Math.random() *
      Math.PI *
      2;

    const distance =
      100 +
      Math.random() *
      240;

    particle.className =
      "modal-color-particle";

    particle.style.background =
      color;

    particle.style.setProperty(
      "--modal-particle-size",
      `${6 + Math.random() * 11}px`
    );

    particle.style.setProperty(
      "--modal-particle-x",
      `${Math.cos(angle) * distance}px`
    );

    particle.style.setProperty(
      "--modal-particle-y",
      `${Math.sin(angle) * distance}px`
    );

    modalParticles.appendChild(
      particle
    );
  }

  window.setTimeout(() => {
    modalParticles.innerHTML = "";
  }, 950);
}


/* =========================================
   CARD PAINT BURST
========================================= */

function createPaintBurst(
  card,
  color
) {
  const rect =
    card.getBoundingClientRect();

  const centerX =
    rect.left +
    rect.width / 2;

  const centerY =
    rect.top +
    rect.height / 2;

  for (
    let index = 0;
    index < 18;
    index += 1
  ) {
    const particle =
      document.createElement("span");

    const angle =
      (
        Math.PI *
        2 *
        index
      ) /
      18;

    const distance =
      45 +
      Math.random() *
      70;

    particle.className =
      "paint-particle";

    particle.style.left =
      `${centerX}px`;

    particle.style.top =
      `${centerY}px`;

    particle.style.setProperty(
      "--particle-color",
      color
    );

    particle.style.setProperty(
      "--size",
      `${7 + Math.random() * 9}px`
    );

    particle.style.setProperty(
      "--x",
      `${Math.cos(angle) * distance}px`
    );

    particle.style.setProperty(
      "--y",
      `${Math.sin(angle) * distance}px`
    );

    document.body.appendChild(
      particle
    );

    window.setTimeout(() => {
      particle.remove();
    }, 800);
  }
}


function createQuizCardCelebration(card) {
  card
    .querySelectorAll(".quiz-card-celebration-piece")
    .forEach((piece) => piece.remove());

  const image = card.querySelector(".quiz-option-image");

  const cardRect = card.getBoundingClientRect();
  const imageRect = image?.getBoundingClientRect();

  const startX = imageRect
    ? imageRect.left - cardRect.left + imageRect.width / 2
    : card.clientWidth / 2;

  const startY = imageRect
    ? imageRect.top - cardRect.top + imageRect.height / 2
    : card.clientHeight / 2;

  const colors = [
    "#ff3f5e",
    "#ffb800",
    "#4fc3ff",
    "#6ed35c",
    "#9d57ff",
    "#ff6ec7"
  ];

  const isRotatedMobile =
    document.body.classList.contains(
      "mobile-landscape-layout"
    );

  const maxDistance =
    isRotatedMobile
      ? Math.max(
        18,
        Math.min(card.clientWidth, card.clientHeight) * 0.42
      )
      : Math.min(card.clientWidth, card.clientHeight) * 0.48;

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");

    const angle = Math.random() * Math.PI * 2;
    const distance = 18 + Math.random() * maxDistance;

    piece.className = "quiz-card-celebration-piece";

    piece.style.left = `${startX}px`;
    piece.style.top = `${startY}px`;

    piece.style.setProperty(
      "--piece-color",
      colors[index % colors.length]
    );

    piece.style.setProperty(
      "--piece-size",
      `${5 + Math.random() * 7}px`
    );

    piece.style.setProperty(
      "--piece-radius",
      Math.random() > 0.5 ? "50%" : "3px"
    );

    piece.style.setProperty(
      "--piece-x",
      `${Math.cos(angle) * distance}px`
    );

    piece.style.setProperty(
      "--piece-y",
      `${Math.sin(angle) * distance}px`
    );

    piece.style.setProperty(
      "--piece-rotate",
      `${Math.random() * 720 - 360}deg`
    );

    piece.style.setProperty(
      "--piece-duration",
      `${0.7 + Math.random() * 0.45}s`
    );

    piece.style.setProperty(
      "--piece-delay",
      `${Math.random() * 0.1}s`
    );

    card.appendChild(piece);
  }

  window.setTimeout(() => {
    card
      .querySelectorAll(".quiz-card-celebration-piece")
      .forEach((piece) => piece.remove());
  }, 1400);
}

/* =========================================
   CLEAR SUCCESS
========================================= */

function clearSuccess() {
  window.clearTimeout(
    successTimer
  );

  successMessage.classList.remove(
    "show"
  );

  celebrationLayer.innerHTML = "";
}


/* =========================================
   EVENTS
========================================= */

soundBtn.addEventListener(
  "click",
  () => {
    if (quizAudioBusy) {
      return;
    }

    const color =
      colors[currentIndex];
    const lang = getActiveLangId();
    const locCol = getLocalizedColorName(color.name);

    speakText(
      lang === "Arabic" ? `اللون ${locCol}` : (lang === "French" ? `Couleur ${locCol}` : `${color.name} color`)
    );
  }
);

prevColorBtn.addEventListener(
  "click",
  () => {
    navigateColor("previous");
  }
);

nextColorBtn.addEventListener(
  "click",
  () => {
    navigateColor("next");
  }
);

closeColorBtn.addEventListener(
  "click",
  closeColor
);

colorModal.addEventListener(
  "click",
  (event) => {
    if (
      event.target === colorModal
    ) {
      closeColor();
    }
  }
);

document.addEventListener(
  "keydown",
  (event) => {
    if (
      !colorModal.classList.contains(
        "show"
      )
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeColor();
    }

    if (event.key === "ArrowLeft") {
      navigateColor("previous");
    }

    if (event.key === "ArrowRight") {
      navigateColor("next");
    }
  }
);

window.addEventListener(
  "resize",
  updateMobileLayout
);

window.addEventListener(
  "orientationchange",
  updateMobileLayout
);

window.visualViewport?.addEventListener(
  "resize",
  updateMobileLayout
);


/* =========================================
   INITIALIZE
========================================= */

function applyStaticLabels() {
  const t = getLocalizedTitles();
  const titleEl = document.getElementById("colorsTitle");
  if (titleEl) titleEl.textContent = t.learnColors;
  const subtitleEl = document.getElementById("colorsSubtitle");
  if (subtitleEl) subtitleEl.textContent = t.tapSplash;
  const modalSmallLabel = document.getElementById("modalSmallLabel");
  if (modalSmallLabel) modalSmallLabel.textContent = t.letsLearn;
  const sayLabel = document.getElementById("sayLabel");
  if (sayLabel) sayLabel.textContent = t.sayIt;
  const quizLabelTop = document.getElementById("quizLabelTop");
  if (quizLabelTop) quizLabelTop.textContent = t.colorChallenge;
  const quizInstruction = document.getElementById("quizInstruction");
  if (quizInstruction) quizInstruction.textContent = t.lookCarefully;
  const examplesInstruction = document.getElementById("examplesInstruction");
  if (examplesInstruction) examplesInstruction.textContent = t.tapToHear;
  const greatJobTitle = document.getElementById("greatJobTitle");
  if (greatJobTitle) {
    greatJobTitle.textContent = getActiveLangId() === "Arabic" ? "أحسنت!" : (getActiveLangId() === "French" ? "Bravo !" : "Great Job!");
  }

  buildColorCards();
}

updateMobileLayout();
enableRotatedTouchScroll();
applyStaticLabels();

window.addEventListener("appLanguageChanged", () => {
  applyStaticLabels();
  if (colorModal.classList.contains("show")) {
    openColor(currentIndex);
  }
});

