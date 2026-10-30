(() => {
  "use strict";

  const BASE = "assets/images/geometry/";

  const shapesByLang = {
    English: [
      { name: "Circle", file: "circle.png", detail: "circle/corner.png", cardColor: "#9edb24", cardShadow: "#55a716", speech: "A circle has zero straight sides and zero corners.", examples: [["circle/clock.png", "Clock"], ["circle/ball.png", "Ball"], ["circle/plate.png", "Plate"]] },
      { name: "Square", file: "square.png", detail: "square/corner.png", cardColor: "#338fe6", cardShadow: "#1761aa", speech: "A square has four equal sides and four corners.", examples: [["square/window.png", "Window"], ["square/gift-box.png", "Gift Box"], ["square/tile.png", "Tile"]] },
      { name: "Triangle", file: "triangle.png", detail: "triangle/corner.png", cardColor: "#f05f93", cardShadow: "#bd3768", speech: "A triangle has three sides and three corners.", examples: [["triangle/triangle.png", "Triangle"], ["triangle/corner.png", "Corners"], ["triangle.png", "Triangle Shape"]] },
      { name: "Rectangle", file: "rectangle.png", detail: "rectangle/corner.png", cardColor: "#ff9a25", cardShadow: "#d56c0c", speech: "A rectangle has four sides and four corners.", examples: [["rectangle/door.png", "Door"], ["rectangle/book.png", "Book"], ["rectangle/television.png", "Television"]] },
      { name: "Pentagon", file: "pentagon.png", detail: "pentagon/corner.png", cardColor: "#f48a26", cardShadow: "#be5e09", speech: "A pentagon has five sides and five corners.", examples: [["pentagon/home-plate.png", "Home Plate"], ["pentagon/badge.png", "Badge"], ["pentagon/pentagon-sign.png", "Pentagon Sign"]] },
      { name: "Hexagon", file: "hexagon.png", detail: "hexagon/corner.png", cardColor: "#ffd52b", cardShadow: "#d59e00", speech: "A hexagon has six sides and six corners.", examples: [["hexagon/honeycomb.png", "Honeycomb"], ["hexagon/nut.png", "Nut"], ["hexagon/hexagon-tile.png", "Hexagon Tile"]] },
      { name: "Oval", file: "oval.png", detail: "oval/corner.png", cardColor: "#35c8b6", cardShadow: "#159486", speech: "An oval has zero straight sides and zero corners.", examples: [["oval/egg.png", "Egg"], ["oval/watermelon.png", "Watermelon"], ["oval/balloon.png", "Balloon"]] },
      { name: "Star", file: "star.png", detail: "star/corner.png", cardColor: "#8f53e5", cardShadow: "#6234ad", speech: "A star has ten outline sides and ten corners.", examples: [["star/star-cookie.png", "Star Cookie"], ["star/star-wand.png", "Star Wand"], ["star/starfish.png", "Starfish"]] },
      { name: "Diamond", file: "diamond.png", detail: "diamond/corner.png", cardColor: "#2fc090", cardShadow: "#168561", speech: "A diamond has four sides and four corners.", examples: [["diamond/kite.png", "Kite"], ["diamond/gem.png", "Gem"], ["diamond/road-sign.png", "Road Sign"]] },
      { name: "Cube", file: "cube.png", detail: "cube/corner.png", cardColor: "#6fc63c", cardShadow: "#3c8d18", speech: "A cube has six faces, twelve edges, and eight corners.", examples: [["cube/dice.png", "Dice"], ["cube/ice-cube.png", "Ice Cube"], ["cube/toy-block.png", "Toy Block"]] }
    ],
    French: [
      { name: "Cercle", file: "circle.png", detail: "circle/corner.png", cardColor: "#9edb24", cardShadow: "#55a716", speech: "Un cercle n'a aucun côté droit et aucun coin.", examples: [["circle/clock.png", "Horloge"], ["circle/ball.png", "Ballon"], ["circle/plate.png", "Assiette"]] },
      { name: "Carré", file: "square.png", detail: "square/corner.png", cardColor: "#338fe6", cardShadow: "#1761aa", speech: "Un carré a quatre côtés égaux et quatre coins.", examples: [["square/window.png", "Fenêtre"], ["square/gift-box.png", "Cadeau"], ["square/tile.png", "Carrelage"]] },
      { name: "Triangle", file: "triangle.png", detail: "triangle/corner.png", cardColor: "#f05f93", cardShadow: "#bd3768", speech: "Un triangle a trois côtés et trois coins.", examples: [["triangle/triangle.png", "Triangle"], ["triangle/corner.png", "Coins"], ["triangle.png", "Forme Triangle"]] },
      { name: "Rectangle", file: "rectangle.png", detail: "rectangle/corner.png", cardColor: "#ff9a25", cardShadow: "#d56c0c", speech: "Un rectangle a quatre côtés et quatre coins.", examples: [["rectangle/door.png", "Porte"], ["rectangle/book.png", "Livre"], ["rectangle/television.png", "Télévision"]] },
      { name: "Pentagone", file: "pentagon.png", detail: "pentagon/corner.png", cardColor: "#f48a26", cardShadow: "#be5e09", speech: "Un pentagone a cinq côtés et cinq coins.", examples: [["pentagon/home-plate.png", "Plaque"], ["pentagon/badge.png", "Badge"], ["pentagon/pentagon-sign.png", "Panneau"]] },
      { name: "Hexagone", file: "hexagon.png", detail: "hexagon/corner.png", cardColor: "#ffd52b", cardShadow: "#d59e00", speech: "Un hexagone a six côtés et six coins.", examples: [["hexagon/honeycomb.png", "Nid d'abeille"], ["hexagon/nut.png", "Écrou"], ["hexagon/hexagon-tile.png", "Carreau"]] },
      { name: "Ovale", file: "oval.png", detail: "oval/corner.png", cardColor: "#35c8b6", cardShadow: "#159486", speech: "Un ovale n'a aucun côté droit et aucun coin.", examples: [["oval/egg.png", "Œuf"], ["oval/watermelon.png", "Pastèque"], ["oval/balloon.png", "Ballon"]] },
      { name: "Étoile", file: "star.png", detail: "star/corner.png", cardColor: "#8f53e5", cardShadow: "#6234ad", speech: "Une étoile a dix côtés et dix pointes.", examples: [["star/star-cookie.png", "Biscuit"], ["star/star-wand.png", "Baguette"], ["star/starfish.png", "Étoile de mer"]] },
      { name: "Losange", file: "diamond.png", detail: "diamond/corner.png", cardColor: "#2fc090", cardShadow: "#168561", speech: "Un losange a quatre côtés et quatre coins.", examples: [["diamond/kite.png", "Cerf-volant"], ["diamond/gem.png", "Pierre précieuse"], ["diamond/road-sign.png", "Panneau"]] },
      { name: "Cube", file: "cube.png", detail: "cube/corner.png", cardColor: "#6fc63c", cardShadow: "#3c8d18", speech: "Un cube a six faces, douze arêtes et huit coins.", examples: [["cube/dice.png", "Dé"], ["cube/ice-cube.png", "Glaçon"], ["cube/toy-block.png", "Bloc de jeu"]] }
    ],
    Arabic: [
      { name: "دائرة", file: "circle.png", detail: "circle/corner.png", cardColor: "#9edb24", cardShadow: "#55a716", speech: "الدائرة ليس لها أضلاع مستقيمة ولا زوايا.", examples: [["circle/clock.png", "ساعة"], ["circle/ball.png", "كرة"], ["circle/plate.png", "صحن"]] },
      { name: "مربع", file: "square.png", detail: "square/corner.png", cardColor: "#338fe6", cardShadow: "#1761aa", speech: "المربع له أربعة أضلاع متساوية وأربع زوايا.", examples: [["square/window.png", "نافذة"], ["square/gift-box.png", "صندوق هدية"], ["square/tile.png", "بلاطة"]] },
      { name: "مثلث", file: "triangle.png", detail: "triangle/corner.png", cardColor: "#f05f93", cardShadow: "#bd3768", speech: "المثلث له ثلاثة أضلاع وثلاث زوايا.", examples: [["triangle/triangle.png", "مثلث"], ["triangle/corner.png", "زوايا"], ["triangle.png", "شكل مثلث"]] },
      { name: "مستطيل", file: "rectangle.png", detail: "rectangle/corner.png", cardColor: "#ff9a25", cardShadow: "#d56c0c", speech: "المستطيل له أربعة أضلاع وأربع زوايا.", examples: [["rectangle/door.png", "باب"], ["rectangle/book.png", "كتاب"], ["rectangle/television.png", "تلفاز"]] },
      { name: "خماسي الأضلاع", file: "pentagon.png", detail: "pentagon/corner.png", cardColor: "#f48a26", cardShadow: "#be5e09", speech: "الشكل الخماسي له خمسة أضلاع وخمس زوايا.", examples: [["pentagon/home-plate.png", "لوحة"], ["pentagon/badge.png", "شارة"], ["pentagon/pentagon-sign.png", "لافتة خماسية"]] },
      { name: "سداسي الأضلاع", file: "hexagon.png", detail: "hexagon/corner.png", cardColor: "#ffd52b", cardShadow: "#d59e00", speech: "الشكل السداسي له ستة أضلاع وست زوايا.", examples: [["hexagon/honeycomb.png", "خلية عسل"], ["hexagon/nut.png", "صامولة"], ["hexagon/hexagon-tile.png", "بلاطة سداسية"]] },
      { name: "بيضاوي", file: "oval.png", detail: "oval/corner.png", cardColor: "#35c8b6", cardShadow: "#159486", speech: "الشكل البيضاوي ليس له أضلاع مستقيمة ولا زوايا.", examples: [["oval/egg.png", "بيضة"], ["oval/watermelon.png", "بطيخ"], ["oval/balloon.png", "بالون"]] },
      { name: "نجمة", file: "star.png", detail: "star/corner.png", cardColor: "#8f53e5", cardShadow: "#6234ad", speech: "النجمة لها عشرة أضلاع وعشرة رؤوس.", examples: [["star/star-cookie.png", "بسكويت"], ["star/star-wand.png", "عصا نجمية"], ["star/starfish.png", "نجم البحر"]] },
      { name: "معين", file: "diamond.png", detail: "diamond/corner.png", cardColor: "#2fc090", cardShadow: "#168561", speech: "المعين له أربعة أضلاع وأربع زوايا.", examples: [["diamond/kite.png", "طائرة ورقية"], ["diamond/gem.png", "جوهرة"], ["diamond/road-sign.png", "لافتة طريق"]] },
      { name: "مكعب", file: "cube.png", detail: "cube/corner.png", cardColor: "#6fc63c", cardShadow: "#3c8d18", speech: "المكعب له ستة أوجه واثنا عشر ضلعاً وثماني زوايا.", examples: [["cube/dice.png", "نرد"], ["cube/ice-cube.png", "مكعب ثلج"], ["cube/toy-block.png", "مكعب ألعاب"]] }
    ]
  };

  const uiTexts = {
    English: {
      title: "Learn Geometry",
      subtitle: "Tap a shape and discover!",
      mascot: "Let's explore<br>shapes!",
      detailSubtitle: "Look, listen and learn!",
      objectsTitle: (s) => `${s} Objects`,
      objectsSubtitle: "Tap an object to hear its name.",
      instructionPrompt: "Choose a shape. Tap a shape and discover.",
      objectSentence: (name, shape) => `${name} is shaped like a ${shape}.`
    },
    French: {
      title: "Apprendre la Géométrie",
      subtitle: "Touche une forme pour découvrir !",
      mascot: "Explorons les<br>formes !",
      detailSubtitle: "Regarde, écoute et apprends !",
      objectsTitle: (s) => `Objets en forme de ${s}`,
      objectsSubtitle: "Touche un objet pour entendre son nom.",
      instructionPrompt: "Choisis une forme. Touche pour découvrir.",
      objectSentence: (name, shape) => `${name} a la forme d'un ${shape}.`
    },
    Arabic: {
      title: "تعلم الأشكال الهندسية",
      subtitle: "اضغط على شكل لاكتشافه!",
      mascot: "!هيا نستكشف<br>الأشكال",
      detailSubtitle: "انظر، استمع وتعلم!",
      objectsTitle: (s) => `أشياء على شكل ${s}`,
      objectsSubtitle: "اضغط على أي شيء لسماع اسمه.",
      instructionPrompt: "اختر شكلاً. اضغط على شكل لاكتشافه.",
      objectSentence: (name, shape) => `${name} على شكل ${shape}.`
    }
  };

  function getActiveLangId() {
    return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
  }

  function getShapes() {
    const lang = getActiveLangId();
    return shapesByLang[lang] || shapesByLang.English;
  }

  function getUI() {
    const lang = getActiveLangId();
    return uiTexts[lang] || uiTexts.English;
  }

  const root = document.documentElement;
  const body = document.body;
  const screens = [...document.querySelectorAll(".geometry-screen")];
  const shapeGrid = document.getElementById("shapeGrid");
  const objectCards = document.getElementById("objectCards");
  const detailInfographicImage = document.getElementById("detailInfographicImage");
  const objectsPanel = document.getElementById("detailObjectsPanel");

  let currentIndex = 0;
  let preferredVoice = null;
  let speechTimer = null;

  function viewportSize() {
    const viewport = window.visualViewport;
    return {
      width: Math.round(viewport ? viewport.width : window.innerWidth),
      height: Math.round(viewport ? viewport.height : window.innerHeight)
    };
  }

  function updateMobileLayout() {
    const { width, height } = viewportSize();
    root.style.setProperty("--visible-width", `${width}px`);
    root.style.setProperty("--visible-height", `${height}px`);
    body.classList.remove("mobile-portrait-rotate");
  }

  function loadPreferredVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    const lang = getActiveLangId();
    const prefix = lang === "Arabic" ? "ar" : (lang === "French" ? "fr" : "en");

    preferredVoice = voices.find((v) => v.lang.toLowerCase().startsWith(prefix))
      || voices[0]
      || null;
  }

  function speak(text) {
    if (!text) return;
    const lang = getActiveLangId();
    const langCode = lang === "Arabic" ? "ar-SA" : (lang === "French" ? "fr-FR" : "en-US");

    if (window.AppLang) {
      window.AppLang.speak(text, langCode, 0.82, 1.25);
      return;
    }

    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;

    loadPreferredVoice();
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.rate = 0.82;
    utterance.pitch = 1.25;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  function clearSpeechTimer() {
    if (speechTimer) window.clearTimeout(speechTimer);
    speechTimer = null;
  }

  const shapeSrc = (shape) => `${BASE}${shape.file}`;
  const detailSrc = (shape) => `${BASE}${shape.detail}`;

  function applyStaticHeadings() {
    const ui = getUI();
    const titleSpan = document.getElementById("gridTitleSpan");
    if (titleSpan) titleSpan.textContent = ui.title;

    const gridSub = document.getElementById("gridSubtitle");
    if (gridSub) gridSub.textContent = ui.subtitle;

    const mascot = document.getElementById("mascotSpeech");
    if (mascot) mascot.innerHTML = ui.mascot;

    const detailSub = document.getElementById("detailSubtitle");
    if (detailSub) detailSub.textContent = ui.detailSubtitle;
  }

  function renderGrid() {
    const shapes = getShapes();
    applyStaticHeadings();

    shapeGrid.innerHTML = shapes.map((shape, index) => `
      <button class="shape-card" type="button" data-index="${index}"
        style="--card-color:${shape.cardColor};--card-shadow:${shape.cardShadow};--card-index:${index}"
        aria-label="Learn ${shape.name}">
        <img src="${shapeSrc(shape)}" alt="${shape.name}" draggable="false">
        <span>${shape.name}</span>
      </button>
    `).join("");
  }

  shapeGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".shape-card");
    if (!card) return;
    currentIndex = Number(card.dataset.index);
    openDetail();
  });

  function renderObjects(shape) {
    const ui = getUI();
    document.getElementById("objectsTitle").textContent = ui.objectsTitle(shape.name);
    document.getElementById("objectsSubtitle").textContent = ui.objectsSubtitle;

    const shapeImage = document.getElementById("objectsShapeImage");
    shapeImage.src = shapeSrc(shape);
    shapeImage.alt = shape.name;

    objectsPanel.classList.remove("is-revealed");
    objectCards.innerHTML = shape.examples.map(([path, name], index) => `
      <button class="object-card" type="button" data-object-name="${name}" style="--delay:${index * 150}ms">
        <img class="object-image" src="${BASE}${path}" alt="${name}" loading="eager" draggable="false">
        <div class="object-name">${name}</div>
      </button>
    `).join("");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => objectsPanel.classList.add("is-revealed"));
    });
  }

  function showScreen(name) {
    const screenId = { grid: "shapeGridScreen", detail: "detailScreen" }[name];
    screens.forEach((screen) => {
      const active = screen.id === screenId;
      screen.hidden = !active;
      screen.classList.toggle("is-active", active);
    });
  }

  function openDetail() {
    clearSpeechTimer();
    window.speechSynthesis?.cancel();

    const shapes = getShapes();
    const shape = shapes[currentIndex];
    if (!shape) return;

    document.getElementById("detailTitle").textContent = shape.name;
    document.getElementById("detailSpeech").textContent = shape.speech;

    detailInfographicImage.src = detailSrc(shape);
    detailInfographicImage.alt = shape.speech;
    detailInfographicImage.classList.remove("is-entering");
    void detailInfographicImage.offsetWidth;
    detailInfographicImage.classList.add("is-entering");

    renderObjects(shape);
    showScreen("detail");
    speechTimer = window.setTimeout(() => speak(shape.speech), 350);
  }

  function changeShape(direction) {
    clearSpeechTimer();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    const shapes = getShapes();
    currentIndex = (currentIndex + direction + shapes.length) % shapes.length;
    openDetail();
  }

  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton?.dataset.action === "close") {
      clearSpeechTimer();
      window.speechSynthesis?.cancel();
      showScreen("grid");
      return;
    }

    const objectCard = event.target.closest(".object-card");
    if (objectCard) {
      const shapes = getShapes();
      const ui = getUI();
      speak(ui.objectSentence(objectCard.dataset.objectName, shapes[currentIndex].name));
    }
  });

  document.getElementById("gridSoundButton").addEventListener("click", () => {
    const ui = getUI();
    speak(ui.instructionPrompt);
  });

  document.getElementById("detailSoundButton").addEventListener("click", () => {
    const shapes = getShapes();
    speak(shapes[currentIndex].speech);
  });

  document.getElementById("previousShapeButton").addEventListener("click", () => {
    const lang = getActiveLangId();
    changeShape(lang === "Arabic" ? 1 : -1);
  });

  document.getElementById("nextShapeButton").addEventListener("click", () => {
    const lang = getActiveLangId();
    changeShape(lang === "Arabic" ? -1 : 1);
  });

  window.addEventListener("appLanguageChanged", () => {
    loadPreferredVoice();
    renderGrid();
    if (document.getElementById("detailScreen") && !document.getElementById("detailScreen").hidden) {
      openDetail();
    }
  });

  renderGrid();
  loadPreferredVoice();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.addEventListener("voiceschanged", loadPreferredVoice);
  }
  updateMobileLayout();
  showScreen("grid");

  window.addEventListener("resize", updateMobileLayout, { passive: true });
  window.addEventListener("orientationchange", updateMobileLayout, { passive: true });
  window.visualViewport?.addEventListener("resize", updateMobileLayout, { passive: true });
})();
