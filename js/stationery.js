(() => {
  "use strict";

  const iconImg = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,0.2));">`;

  const ICONS = {
    pencil: iconImg("assets/images/stationery/pencil.png", "Pencil"),
    pen: iconImg("assets/images/stationery/pen.png", "Pen"),
    book: iconImg("assets/images/stationery/book.png", "Book"),
    notebook: iconImg("assets/images/stationery/notebook.png", "Notebook"),
    eraser: iconImg("assets/images/stationery/eraser.png", "Eraser"),
    ruler: iconImg("assets/images/stationery/ruler.png", "Ruler"),
    schoolbag: iconImg("assets/images/fennygo/school-bag-3d.png", "School Bag"),
    scissors: iconImg("assets/images/stationery/scissors.png", "Scissors"),
    sharpener: iconImg("assets/images/stationery/sharpener.png", "Sharpener"),
    pencilcase: iconImg("assets/images/stationery/pencilcase.png", "Pencil Case")
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

    // Render Multi-Sensory Grapheme-Phoneme letter tiles
    const tilesBox = document.getElementById("modalLetterTiles");
    if (tilesBox) {
      tilesBox.innerHTML = "";
      Array.from(item.label.toUpperCase()).forEach((ch) => {
        if (ch === " ") {
          const sp = document.createElement("span");
          sp.style.width = "10px";
          tilesBox.appendChild(sp);
          return;
        }
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "stationery-grapheme-tile";
        tile.style.cssText = "min-width:34px;height:38px;padding:0 6px;border-radius:10px;background:#fef3c7;border:2px solid #f59e0b;border-bottom:4px solid #d97706;font-weight:900;font-size:18px;color:#78350f;cursor:pointer;transition:transform 0.18s ease,background 0.18s ease;";
        tile.textContent = ch;
        tile.addEventListener("click", () => {
          tile.style.transform = "scale(1.22)";
          setTimeout(() => { tile.style.transform = "scale(1)"; }, 350);
          if (window.AppLang) window.AppLang.speak(ch.toLowerCase());
        });
        tilesBox.appendChild(tile);
      });
    }

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

    document.getElementById("modalReadBtn")?.addEventListener("click", () => {
      const d = getLangData();
      const item = d.items[currentIndex];
      const tiles = document.querySelectorAll(".stationery-grapheme-tile");
      tiles.forEach((t, i) => {
        setTimeout(() => {
          tiles.forEach(el => { el.style.background = "#fef3c7"; el.style.color = "#78350f"; el.style.transform = "scale(1)"; });
          t.style.background = "#2563eb";
          t.style.color = "#ffffff";
          t.style.transform = "scale(1.25)";
          if (i === tiles.length - 1) {
            setTimeout(() => {
              t.style.background = "#fef3c7";
              t.style.color = "#78350f";
              t.style.transform = "scale(1)";
            }, 450);
          }
        }, i * 220);
      });
      if (item && window.AppLang) window.AppLang.speak(item.label);
    });

    document.getElementById("modalSpeakBtn")?.addEventListener("click", () => {
      const d = getLangData();
      const item = d.items[currentIndex];
      const phraseEl = document.getElementById("modalPhrase");
      if (phraseEl) phraseEl.textContent = `🎙️ Repeat: "${item.label}"...`;
      setTimeout(() => {
        if (phraseEl) phraseEl.textContent = `🎉 Great pronunciation! "${item.label}" (+5 ⭐)`;
        if (window.FennyGo) {
          window.FennyGo.addStars(5);
          window.FennyGo.celebrate(`Awesome job saying ${item.label}!`);
        }
      }, 1200);
    });

    document.getElementById("topicModal").addEventListener("click", (e) => {
      if (e.target.id === "topicModal") closeModal();
    });
  });

  window.addEventListener("appLanguageChanged", renderPage);
})();
