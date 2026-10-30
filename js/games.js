(() => {
  "use strict";

  /* =========================================================
     1. BASE DE DONNÉES JSON MULTILINGUE (ARABE, FRANÇAIS, ANGLAIS)
     ========================================================= */
  const LATIN_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const LANG_DB = {
    French: {
      dir: "ltr",
      speechLang: "fr-FR",
      ui: {
        hubTitle: "Jeux éducatifs pour les enfants",
        hubSubtitle: "Des jeux ludiques et interactifs pour faire progresser votre enfant !",
        filterLabel: "Sélectionnez les compétences :",
        playNowBtn: "Jouez maintenant !",
        skills: [
          { key: "all", label: "Tous les jeux" },
          { key: "letters", label: "Lettres" },
          { key: "words", label: "Orthographe & Mots" },
          { key: "listening", label: "Compréhension orale" },
          { key: "numbers", label: "Comptage & Chiffres" }
        ],
        listenDefault: "Écouter",
        slicePrompt: "Coupe le fruit :",
        howMany: "Combien y en a-t-il ?",
        countRedDots: "Compte les points rouges",
        victoryTitle: "Bravo Champion !",
        victoryMsg: "Tu as terminé la manche avec succès !",
        victorySpeech: "Bravo champion ! Tu as terminé la manche avec succès !",
        playAgain: "Rejouer",
        gamesMenu: "Menu des Jeux"
      },
      gamesMeta: [
        { id: "runner", title: "La Course des Lettres", sub: "Franchis le bon portail avec ta voiture", category: "Lettres", skillKeys: ["letters", "listening"], tags: ["Niveau CP", "Compréhension orale", "Lettres"], rounds: 5 },
        { id: "maze", title: "Labyrinthe des Mots", sub: "Aide le poussin à épeler le mot complet", category: "Lettres & Mots", skillKeys: ["words", "letters"], tags: ["Niveau CP", "Orthographe", "Vocabulaire"], rounds: 5 },
        { id: "ninja", title: "Ninja des Fruits", sub: "Tranche le fruit qui porte la bonne lettre", category: "Lettres", skillKeys: ["letters", "listening"], tags: ["Niveau CP", "Compréhension orale", "Lettres"], rounds: 5 },
        { id: "basketball", title: "Basket des Chiffres", sub: "Compte les objets et tire dans le bon panier", category: "Nombres", skillKeys: ["numbers"], tags: ["Niveau CP", "Niveau 2", "Nombres"], rounds: 5 },
        { id: "whack", title: "Chasseur de Lettres", sub: "Écoute la lettre et attrape la bonne taupe", category: "Lettres", skillKeys: ["listening", "letters"], tags: ["Niveau CP", "Compréhension orale", "Lettres"], rounds: 5 },
        { id: "tower", title: "La Tour des Nombres", sub: "Empile les étages dans l'ordre de 1 à 10", category: "Nombres", skillKeys: ["numbers"], tags: ["Niveau CP", "Suite numérique", "Nombres"], rounds: 9 },
        { id: "castle", title: "Défense du Château", sub: "Compte les pois rouges et tire au canon", category: "Nombres", skillKeys: ["numbers"], tags: ["Niveau CP", "Comptage rapide", "Nombres"], rounds: 5 }
      ],
      letters: LATIN_LETTERS.map((l) => ({
        base: l,
        name: `La lettre ${l}`,
        variants: null
      })),
      words: [
        { word: "CHAT", letters: ["C", "H", "A", "T"], emoji: "🐱", img: "assets/images/games/words/cat.png" },
        { word: "LION", letters: ["L", "I", "O", "N"], emoji: "🦁", img: "assets/images/games/words/lion.png" },
        { word: "POMME", letters: ["P", "O", "M", "M", "E"], emoji: "🍎", img: "assets/images/games/words/apple.png" },
        { word: "LUNE", letters: ["L", "U", "N", "E"], emoji: "🌙", img: "assets/images/games/words/moon.png" },
        { word: "OURS", letters: ["O", "U", "R", "S"], emoji: "🐻", img: "assets/images/games/words/bear.png" },
        { word: "LIVRE", letters: ["L", "I", "V", "R", "E"], emoji: "📖", img: "assets/images/stationery/book.png" },
        { word: "FLEUR", letters: ["F", "L", "E", "U", "R"], emoji: "🌸", img: "assets/images/games/words/flower.png" },
        { word: "TRAIN", letters: ["T", "R", "A", "I", "N"], emoji: "🚂", img: "assets/images/games/words/train.png" },
        { word: "POULE", letters: ["P", "O", "U", "L", "E"], emoji: "🐔", img: "assets/images/games/words/hen.png" },
        { word: "VELO", letters: ["V", "E", "L", "O"], emoji: "🚲", img: "assets/images/games/words/bike.png" }
      ],
      numbers: [
        { value: 1, display: "1", word: "Un" },
        { value: 2, display: "2", word: "Deux" },
        { value: 3, display: "3", word: "Trois" },
        { value: 4, display: "4", word: "Quatre" },
        { value: 5, display: "5", word: "Cinq" },
        { value: 6, display: "6", word: "Six" },
        { value: 7, display: "7", word: "Sept" },
        { value: 8, display: "8", word: "Huit" },
        { value: 9, display: "9", word: "Neuf" },
        { value: 10, display: "10", word: "Dix" }
      ]
    },

    English: {
      dir: "ltr",
      speechLang: "en-US",
      ui: {
        hubTitle: "Educational Games for Kids",
        hubSubtitle: "Fun and interactive games to help your child progress!",
        filterLabel: "Select skills:",
        playNowBtn: "Play now!",
        skills: [
          { key: "all", label: "All Games" },
          { key: "letters", label: "Letters" },
          { key: "words", label: "Spelling & Words" },
          { key: "listening", label: "Listening" },
          { key: "numbers", label: "Counting & Numbers" }
        ],
        listenDefault: "Listen",
        slicePrompt: "Slice the fruit:",
        howMany: "How many?",
        countRedDots: "Count the red dots",
        victoryTitle: "Great Job Champion!",
        victoryMsg: "You completed the round successfully!",
        victorySpeech: "Great job champion! You completed the round successfully!",
        playAgain: "Play Again",
        gamesMenu: "Games Menu"
      },
      gamesMeta: [
        { id: "runner", title: "Letter Race", sub: "Drive through the right letter portal", category: "Letters", skillKeys: ["letters", "listening"], tags: ["Grade 1", "Listening", "Letters"], rounds: 5 },
        { id: "maze", title: "Word Maze", sub: "Help the chick spell the word", category: "Letters & Words", skillKeys: ["words", "letters"], tags: ["Grade 1", "Spelling", "Vocabulary"], rounds: 5 },
        { id: "ninja", title: "Fruit Ninja", sub: "Slice the fruit with the spoken letter", category: "Letters", skillKeys: ["letters", "listening"], tags: ["Grade 1", "Listening", "Letters"], rounds: 5 },
        { id: "basketball", title: "Number Basketball", sub: "Count the items and shoot the ball", category: "Numbers", skillKeys: ["numbers"], tags: ["Grade 1", "Grade 2", "Numbers"], rounds: 5 },
        { id: "whack", title: "Letter Catcher", sub: "Listen and tap the right mole", category: "Letters", skillKeys: ["listening", "letters"], tags: ["Grade 1", "Listening", "Letters"], rounds: 5 },
        { id: "tower", title: "Number Tower", sub: "Stack the floors from 1 to 10", category: "Numbers", skillKeys: ["numbers"], tags: ["Grade 1", "Number Sequence", "Numbers"], rounds: 9 },
        { id: "castle", title: "Castle Defense", sub: "Count the red dots and fire the cannon", category: "Numbers", skillKeys: ["numbers"], tags: ["Grade 1", "Fast Counting", "Numbers"], rounds: 5 }
      ],
      letters: LATIN_LETTERS.map((l) => ({
        base: l,
        name: `Letter ${l}`,
        variants: null
      })),
      words: [
        { word: "LEMON", letters: ["L", "E", "M", "O", "N"], emoji: "🍋", img: "assets/images/games/words/lemon.png" },
        { word: "LION", letters: ["L", "I", "O", "N"], emoji: "🦁", img: "assets/images/games/words/lion.png" },
        { word: "APPLE", letters: ["A", "P", "P", "L", "E"], emoji: "🍎", img: "assets/images/games/words/apple.png" },
        { word: "SUN", letters: ["S", "U", "N"], emoji: "☀️", img: "assets/images/games/words/sun.png" },
        { word: "FISH", letters: ["F", "I", "S", "H"], emoji: "🐟", img: "assets/images/games/words/fish.png" },
        { word: "BOOK", letters: ["B", "O", "O", "K"], emoji: "📖", img: "assets/images/stationery/book.png" },
        { word: "DUCK", letters: ["D", "U", "C", "K"], emoji: "🦆", img: "assets/images/games/words/duck.png" },
        { word: "BEAR", letters: ["B", "E", "A", "R"], emoji: "🐻", img: "assets/images/games/words/bear.png" },
        { word: "STAR", letters: ["S", "T", "A", "R"], emoji: "⭐", img: "assets/images/games/words/star.png" },
        { word: "CAT", letters: ["C", "A", "T"], emoji: "🐱", img: "assets/images/games/words/cat.png" }
      ],
      numbers: [
        { value: 1, display: "1", word: "One" },
        { value: 2, display: "2", word: "Two" },
        { value: 3, display: "3", word: "Three" },
        { value: 4, display: "4", word: "Four" },
        { value: 5, display: "5", word: "Five" },
        { value: 6, display: "6", word: "Six" },
        { value: 7, display: "7", word: "Seven" },
        { value: 8, display: "8", word: "Eight" },
        { value: 9, display: "9", word: "Nine" },
        { value: 10, display: "10", word: "Ten" }
      ]
    }
  };

  const GAME_THEMES = {
    runner: { bg: "radial-gradient(circle at 50% 0%, #ffe60a 0%, #ff8a00 100%)" },
    maze: { bg: "radial-gradient(circle at 50% 0%, #a7f3d0 0%, #34d399 100%)" },
    ninja: { bg: "radial-gradient(circle at 50% 0%, #fecdd3 0%, #fb7185 100%)" },
    basketball: { bg: "radial-gradient(circle at 50% 0%, #fde68a 0%, #f59e0b 100%)" },
    whack: { bg: "radial-gradient(circle at 50% 0%, #e9d5ff 0%, #917ed6 100%)" },
    tower: { bg: "radial-gradient(circle at 50% 0%, #bae6fd 0%, #60a5fa 100%)" },
    castle: { bg: "radial-gradient(circle at 50% 0%, #dee5ff 0%, #7c65e0 100%)" }
  };

  // Preloaded 3D sprites for active Canvas games
  const SPRITES = {};
  [
    ["car", "assets/images/games/car-sprite.png"],
    ["chick", "assets/images/games/chick-back.png"],
    ["chickFront", "assets/images/games/chick-sprite.png"],
    ["chickBack", "assets/images/games/chick-back.png"],
    ["star", "assets/images/games/star.png"],
    ["gems", "assets/images/games/gems.png"],
    ["apple", "assets/images/games/words/apple.png"],
    ["lemon", "assets/images/games/words/lemon.png"],
    ["duck", "assets/images/games/words/duck.png"],
    ["fish", "assets/images/games/words/fish.png"],
    ["flower", "assets/images/games/words/flower.png"],
    ["sun", "assets/images/games/words/sun.png"],
    ["lion", "assets/images/games/words/lion.png"],
    ["bear", "assets/images/games/words/bear.png"],
    ["rabbit", "assets/images/games/words/rabbit.png"],
    ["cat", "assets/images/games/words/cat.png"]
  ].forEach(([key, src]) => {
    const img = new Image();
    img.src = src;
    SPRITES[key] = img;
  });

  function getGameIconSvg(gameId) {
    const validIds = ["runner", "maze", "ninja", "basketball", "whack", "tower", "castle"];
    const safeId = validIds.includes(gameId) ? gameId : "runner";
    return `<img src="assets/images/games/${safeId}.png" alt="${safeId}" class="nk-game-3d-thumb" loading="lazy">`;
  }

  function getActiveLangId() {
    return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
  }

  function getDB() {
    const id = getActiveLangId();
    return LANG_DB[id] || LANG_DB.English;
  }

  function pickThreeLetterChoices(db, lastWinnerIdx = -1, lastTargetBase = "") {
    const letters = (db && db.letters && db.letters.length) ? db.letters : LATIN_LETTERS.map(l => ({ base: l, name: `Letter ${l}`, variants: null }));
    const available = letters.filter(l => l.base !== lastTargetBase);
    const targetPool = available.length > 0 ? available : letters;
    const target = targetPool[Math.floor(Math.random() * targetPool.length)];

    const distractors = shuffle(letters.filter(l => l.base !== target.base)).slice(0, 2);

    // Position aléatoire mais garantie différente de la manche précédente
    const allowedLanes = [0, 1, 2].filter(idx => idx !== lastWinnerIdx);
    const winnerIdx = allowedLanes[Math.floor(Math.random() * allowedLanes.length)];

    const options = [null, null, null];
    options[winnerIdx] = { label: target.base, speech: target.name };
    let dIdx = 0;
    for (let i = 0; i < 3; i++) {
      if (options[i] === null) {
        const d = distractors[dIdx++];
        options[i] = { label: d.base, speech: d.name };
      }
    }

    return { options, winnerIdx, target: options[winnerIdx] };
  }

  /* =========================================================
     2. SYNTHÉTISEUR AUDIO (Web Audio API) & VOIX MULTILINGUE
     ========================================================= */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  const SFX = {
    playTone(freq, type, duration, delay = 0, gainVal = 0.16) {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const start = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(gainVal, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    },
    success() {
      this.playTone(523.25, "sine", 0.14, 0, 0.2);
      this.playTone(659.25, "sine", 0.14, 0.09, 0.2);
      this.playTone(783.99, "triangle", 0.28, 0.18, 0.22);
    },
    error() {
      this.playTone(240, "sine", 0.18, 0, 0.15);
      this.playTone(190, "triangle", 0.25, 0.12, 0.15);
    },
    diamond() {
      this.playTone(880, "sine", 0.1, 0, 0.15);
      this.playTone(1174.66, "sine", 0.2, 0.07, 0.16);
    },
    pop() {
      this.playTone(420, "sine", 0.09, 0, 0.2);
      this.playTone(680, "triangle", 0.12, 0.04, 0.16);
    },
    shoot() {
      this.playTone(320, "triangle", 0.12, 0, 0.22);
      this.playTone(180, "sine", 0.2, 0.06, 0.18);
    },
    fanfare() {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        this.playTone(f, "triangle", 0.24, i * 0.11, 0.22);
      });
    }
  };

  let currentPromptSpeech = "";
  let currentPromptDisplay = "";

  function speakPrompt(text, badgeDisplay = null) {
    if (!text) return;
    const db = getDB();
    currentPromptSpeech = text;
    if (badgeDisplay !== null) {
      currentPromptDisplay = badgeDisplay;
      const badgeEl = document.getElementById("targetPromptBadge");
      if (badgeEl) badgeEl.textContent = badgeDisplay;
    }
    if (window.AppLang) {
      window.AppLang.speak(text, db.speechLang, 0.85, 1.05);
    }
  }

  /* =========================================================
     3. GESTION DES ÉTOILES, DIAMANTS & PROGRESSION (localStorage)
     ========================================================= */
  const STORAGE_STARS = "fenncky_games_stars";
  const STORAGE_DIAMONDS = "fenncky_games_diamonds";

  let totalStars = parseInt(localStorage.getItem(STORAGE_STARS) || "0", 10);
  let totalDiamonds = parseInt(localStorage.getItem(STORAGE_DIAMONDS) || "0", 10);

  function updateCurrencyUI() {
    document.getElementById("hubStarsCount").textContent = totalStars;
    document.getElementById("hubDiamondsCount").textContent = totalDiamonds;
    document.getElementById("gameStarsCount").textContent = totalStars;
    document.getElementById("gameDiamondsCount").textContent = totalDiamonds;
  }

  function addStars(n = 1) {
    totalStars += n;
    localStorage.setItem(STORAGE_STARS, String(totalStars));
    updateCurrencyUI();
  }

  function addDiamonds(n = 1) {
    totalDiamonds += n;
    localStorage.setItem(STORAGE_DIAMONDS, String(totalDiamonds));
    updateCurrencyUI();
  }

  /* =========================================================
     4. SYSTÈME DE CONFETTIS
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

  function spawnConfetti(count = 75) {
    const colors = ["#ef4444", "#facc15", "#22c55e", "#3b82f6", "#ec4899", "#a855f7", "#f97316"];
    for (let i = 0; i < count; i++) {
      confettiPieces.push({
        x: window.innerWidth * (0.2 + Math.random() * 0.6),
        y: window.innerHeight * 0.25,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: 8 + Math.random() * 8,
        color: colors[i % colors.length],
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        life: 110 + Math.random() * 40
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
      p.life -= 1;
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      confettiCtx.restore();
    });
    confettiPieces = confettiPieces.filter((p) => p.life > 0 && p.y < confettiCanvas.height + 30);
    if (confettiPieces.length > 0) {
      confettiRaf = requestAnimationFrame(loopConfetti);
    } else {
      confettiRaf = null;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  /* =========================================================
     5. GESTIONNAIRE DE JEU ACTIF & NAVIGATION HUB <-> JEUX
     ========================================================= */
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const overlayUI = document.getElementById("gameOverlayUI");

  let activeGameId = null;
  let activeCleanUp = null;
  let roundProgress = 0;
  let roundTarget = 5;

  function resizeGameCanvas() {
    const stage = document.getElementById("gameStage");
    if (!stage) return;
    canvas.width = stage.clientWidth || window.innerWidth;
    canvas.height = stage.clientHeight || (window.innerHeight - 68);
  }
  window.addEventListener("resize", resizeGameCanvas);

  function formatNumberForLang(num) {
    const db = getDB();
    if (num === 0) return "0";
    return db.numbers[num - 1]?.display || String(num);
  }

  function setProgress(current, total) {
    roundProgress = current;
    roundTarget = total;
    document.getElementById("progressLabel").textContent = `${formatNumberForLang(current)} / ${formatNumberForLang(total)}`;
    const pct = Math.min(100, Math.round((current / total) * 100));
    document.getElementById("progressFill").style.width = `${pct}%`;
  }

  function advanceProgress() {
    addStars(1);
    setProgress(roundProgress + 1, roundTarget);
    if (roundProgress >= roundTarget) {
      triggerVictoryModal();
      return true;
    }
    return false;
  }

  function triggerVictoryModal() {
    const db = getDB();
    SFX.fanfare();
    spawnConfetti(110);
    addStars(5);
    addDiamonds(3);
    speakPrompt(db.ui.victorySpeech);
    document.getElementById("victoryModal").classList.remove("hidden");
  }

  let activeSkillFilter = "all";

  function renderHub() {
    const db = getDB();
    const isAr = false;

    document.documentElement.dir = db.dir;
    document.body.dir = db.dir;

    document.getElementById("hubMainTitle").textContent = db.ui.hubTitle;
    document.getElementById("hubMainSubtitle").textContent = db.ui.hubSubtitle;
    const filterLabelEl = document.getElementById("hubFilterLabel");
    if (filterLabelEl) filterLabelEl.textContent = db.ui.filterLabel;

    document.getElementById("victoryTitle").textContent = db.ui.victoryTitle;
    document.getElementById("victoryMessage").textContent = db.ui.victoryMsg;
    document.getElementById("playAgainText").textContent = db.ui.playAgain;
    document.getElementById("backToHubText").textContent = db.ui.gamesMenu;
    document.getElementById("targetPromptBadge").textContent = db.ui.listenDefault;

    const skillsContainer = document.getElementById("hubSkillsFilter");
    if (skillsContainer) {
      skillsContainer.innerHTML = "";
      (db.ui.skills || []).forEach((s) => {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = "nk-skill-pill" + (activeSkillFilter === s.key ? " active" : "");
        pill.textContent = s.label;
        pill.addEventListener("click", () => {
          SFX.pop();
          activeSkillFilter = s.key;
          renderHub();
        });
        skillsContainer.appendChild(pill);
      });
    }

    const grid = document.getElementById("hubGrid");
    grid.innerHTML = "";

    const filteredGames = db.gamesMeta.filter((g) => {
      if (activeSkillFilter === "all") return true;
      return Array.isArray(g.skillKeys) && g.skillKeys.includes(activeSkillFilter);
    });

    filteredGames.forEach((g, fIdx) => {
      const idx = db.gamesMeta.findIndex((item) => item.id === g.id);
      const theme = GAME_THEMES[g.id] || GAME_THEMES.runner;
      const card = document.createElement("article");
      const isLastOdd = (fIdx === filteredGames.length - 1 && filteredGames.length % 2 === 1);
      card.className = isLastOdd ? "hub-game-card card-span-2" : "hub-game-card";
      card.style.setProperty("--card-visual-bg", theme.bg);

      const gameNum = db.numbers[idx]?.display || (idx + 1);
      const tagsHtml = (g.tags || [g.category])
        .map((t) => `<li class="nk-tag">${t}</li>`)
        .join("");

      card.innerHTML = `
        <div class="nk-card-visual">
          <span class="nk-card-step">${gameNum}</span>
          ${getGameIconSvg(g.id, isAr)}
        </div>
        <div class="nk-card-body">
          <ul class="nk-card-tags">${tagsHtml}</ul>
          <div class="nk-card-info">
            <h2 class="nk-card-title">${g.title}</h2>
            <p class="nk-card-desc">${g.sub}</p>
          </div>
          <div class="nk-card-actions">
            <button type="button" class="nk-btn-purple">${db.ui.playNowBtn}</button>
          </div>
        </div>
      `;
      card.addEventListener("click", () => launchGame(g.id));
      grid.appendChild(card);
    });
  }

  function stopCurrentGame() {
    if (typeof activeCleanUp === "function") {
      activeCleanUp();
      activeCleanUp = null;
    }
    overlayUI.innerHTML = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (window.AppLang) window.AppLang.stopSpeech();
  }

  function returnToHub() {
    stopCurrentGame();
    activeGameId = null;
    document.body.classList.remove("in-active-game");
    document.getElementById("victoryModal").classList.add("hidden");
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("gamesHub").classList.remove("hidden");
  }

  function launchGame(gameId) {
    stopCurrentGame();
    activeGameId = gameId;
    const db = getDB();
    const meta = db.gamesMeta.find((m) => m.id === gameId);
    if (!meta) return;

    document.body.classList.add("in-active-game");
    document.getElementById("gamesHub").classList.add("hidden");
    document.getElementById("victoryModal").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    document.getElementById("activeGameTitle").textContent = meta.title;

    resizeGameCanvas();
    setProgress(0, meta.rounds);

    switch (gameId) {
      case "runner":
        activeCleanUp = startRunnerGame();
        break;
      case "maze":
        activeCleanUp = startMazeGame();
        break;
      case "ninja":
        activeCleanUp = startNinjaGame();
        break;
      case "basketball":
        activeCleanUp = startBasketballGame();
        break;
      case "whack":
        activeCleanUp = startWhackGame();
        break;
      case "tower":
        activeCleanUp = startTowerGame();
        break;
      case "castle":
        activeCleanUp = startCastleGame();
        break;
    }
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /* =========================================================
     HELPER DE DESSIN CANVAS : NUAGES MOELLEUX
     ========================================================= */
  function drawCloud(ctx, x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.beginPath();
    ctx.arc(0, 0, 22, 0, Math.PI * 2);
    ctx.arc(20, -6, 26, 0, Math.PI * 2);
    ctx.arc(44, 0, 20, 0, Math.PI * 2);
    ctx.arc(22, 8, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* =========================================================
     JEU 1 : LA COURSE DES LETTRES / VOYELLES (ENDLESS RUNNER 3D)
     ========================================================= */
  function startRunnerGame() {
    const db = getDB();
    let rafId = null;
    let running = true;
    let carLane = 1;
    let carVisualX = 0;
    let carTilt = 0;
    let roadOffset = 0;
    let cloudOffset = 0;

    let currentOptions = ["A", "B", "C"];
    let correctLane = 1;
    let targetSound = "";
    let portalZ = 0.05;
    let resolvedWave = false;
    let diamonds = [];
    let starsBurst = [];
    let lastWinnerLane = -1;
    let lastTargetLetter = "";

    overlayUI.innerHTML = `
      <div></div>
      <div class="bottom-cards-bar interactive-el" dir="ltr">
        <button type="button" id="runnerLeftBtn" class="lane-arrow-btn" aria-label="Left">&lsaquo;</button>
        <button type="button" class="choice-card-btn" data-lane="0" id="laneCard0">A</button>
        <button type="button" class="choice-card-btn active-lane" data-lane="1" id="laneCard1">B</button>
        <button type="button" class="choice-card-btn" data-lane="2" id="laneCard2">C</button>
        <button type="button" id="runnerRightBtn" class="lane-arrow-btn" aria-label="Right">&rsaquo;</button>
      </div>
    `;

    const laneCards = [
      document.getElementById("laneCard0"),
      document.getElementById("laneCard1"),
      document.getElementById("laneCard2")
    ];

    function setCarLane(newLane) {
      const clamped = Math.max(0, Math.min(2, newLane));
      if (clamped !== carLane) {
        carTilt = (clamped - carLane) * 0.18;
      }
      carLane = clamped;
      laneCards.forEach((c, idx) => c.classList.toggle("active-lane", idx === carLane));
    }

    function spawnWave() {
      const choiceSet = pickThreeLetterChoices(db, lastWinnerLane, lastTargetLetter);
      lastWinnerLane = choiceSet.winnerIdx;
      lastTargetLetter = choiceSet.target.label;
      currentOptions = choiceSet.options.map((v) => v.label);
      correctLane = choiceSet.winnerIdx;
      targetSound = choiceSet.target.speech;
      portalZ = 0.02;
      resolvedWave = false;

      diamonds = [
        { lane: Math.floor(Math.random() * 3), z: 0.35, collected: false },
        { lane: Math.floor(Math.random() * 3), z: 0.62, collected: false }
      ];

      laneCards.forEach((c, idx) => {
        c.textContent = currentOptions[idx];
        c.classList.remove("correct-flash", "shake-error");
      });

      speakPrompt(targetSound, currentOptions[correctLane]);
    }

    document.getElementById("runnerLeftBtn").addEventListener("click", () => setCarLane(carLane - 1));
    document.getElementById("runnerRightBtn").addEventListener("click", () => setCarLane(carLane + 1));
    laneCards.forEach((c, idx) => {
      c.addEventListener("click", () => setCarLane(idx));
    });

    function onKeyDown(e) {
      if (e.key === "ArrowLeft") setCarLane(carLane - 1);
      if (e.key === "ArrowRight") setCarLane(carLane + 1);
    }
    window.addEventListener("keydown", onKeyDown);

    spawnWave();

    function renderLoop() {
      if (!running) return;
      const W = canvas.width;
      const H = canvas.height;
      const horizonY = H * 0.33;

      // Ciel dégradé lumineux + Soleil + Nuages
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      skyGrad.addColorStop(0, "#0284c7");
      skyGrad.addColorStop(0.6, "#38bdf8");
      skyGrad.addColorStop(1, "#e0f2fe");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, horizonY);

      // Soleil radieux
      ctx.save();
      ctx.fillStyle = "rgba(254, 240, 138, 0.35)";
      ctx.beginPath();
      ctx.arc(W * 0.85, horizonY * 0.35, 52, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.arc(W * 0.85, horizonY * 0.35, 34, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      cloudOffset = (cloudOffset + 0.35) % (W + 200);
      drawCloud(ctx, (cloudOffset % (W + 160)) - 80, horizonY * 0.28, 0.9);
      drawCloud(ctx, ((cloudOffset + W * 0.5) % (W + 160)) - 80, horizonY * 0.45, 0.7);

      // Collines verdoyantes et ville colorée à l'horizon
      ctx.fillStyle = "#4ade80";
      ctx.beginPath();
      ctx.arc(W * 0.22, horizonY + 30, W * 0.28, Math.PI, 0);
      ctx.arc(W * 0.78, horizonY + 30, W * 0.28, Math.PI, 0);
      ctx.fill();

      const bColors = ["#6366f1", "#ec4899", "#f59e0b", "#0ea5e9", "#8b5cf6"];
      for (let i = 0; i < 8; i++) {
        const bw = 42;
        const bh = 32 + ((i * 19) % 42);
        const bx = W * 0.26 + i * (W * 0.062);
        ctx.fillStyle = bColors[i % bColors.length];
        ctx.fillRect(bx, horizonY - bh, bw, bh);
        ctx.fillStyle = "#fef08a";
        for (let wy = horizonY - bh + 6; wy < horizonY - 6; wy += 10) {
          ctx.fillRect(bx + 8, wy, 8, 5);
          ctx.fillRect(bx + 24, wy, 8, 5);
        }
      }

      // Pelouse avec bandes tondues défilantes
      roadOffset = (roadOffset + 0.022) % 1;
      for (let s = 0; s < 10; s++) {
        const z1 = ((s / 10) + roadOffset) % 1;
        const z2 = Math.min(1, z1 + 0.1);
        const y1 = horizonY + (H - horizonY) * Math.pow(z1, 1.5);
        const y2 = horizonY + (H - horizonY) * Math.pow(z2, 1.5);
        ctx.fillStyle = s % 2 === 0 ? "#22c55e" : "#16a34a";
        ctx.fillRect(0, y1, W, y2 - y1 + 2);
      }

      // Route en perspective + vibreurs rouge/blanc
      const topRoadW = W * 0.18;
      const botRoadW = W * 0.8;

      // Bordures vibreurs (rouge et blanc)
      for (let s = 0; s < 12; s++) {
        const z1 = ((s / 12) + roadOffset) % 1;
        const z2 = Math.min(1, z1 + 1 / 12);
        if (z2 <= z1) continue;
        const p1 = Math.pow(z1, 1.5);
        const p2 = Math.pow(z2, 1.5);
        const y1 = horizonY + (H - horizonY) * p1;
        const y2 = horizonY + (H - horizonY) * p2;
        const rw1 = topRoadW + (botRoadW - topRoadW) * p1;
        const rw2 = topRoadW + (botRoadW - topRoadW) * p2;
        const curbW1 = 6 + 22 * p1;
        const curbW2 = 6 + 22 * p2;

        ctx.fillStyle = s % 2 === 0 ? "#ef4444" : "#ffffff";
        ctx.beginPath();
        ctx.moveTo(W / 2 - rw1 / 2 - curbW1, y1);
        ctx.lineTo(W / 2 + rw1 / 2 + curbW1, y1);
        ctx.lineTo(W / 2 + rw2 / 2 + curbW2, y2);
        ctx.lineTo(W / 2 - rw2 / 2 - curbW2, y2);
        ctx.closePath();
        ctx.fill();
      }

      // Asphalte de la route
      const roadGrad = ctx.createLinearGradient(0, horizonY, 0, H);
      roadGrad.addColorStop(0, "#475569");
      roadGrad.addColorStop(1, "#1e293b");
      ctx.fillStyle = roadGrad;
      ctx.beginPath();
      ctx.moveTo(W / 2 - topRoadW / 2, horizonY);
      ctx.lineTo(W / 2 + topRoadW / 2, horizonY);
      ctx.lineTo(W / 2 + botRoadW / 2, H);
      ctx.lineTo(W / 2 - botRoadW / 2, H);
      ctx.closePath();
      ctx.fill();

      // Lignes blanches des 3 voies + arbres sur les côtés
      for (let s = 0; s < 10; s++) {
        const z1 = ((s / 10) + roadOffset) % 1;
        const z2 = Math.min(1, z1 + 0.055);
        if (z2 <= z1) continue;
        const p1 = Math.pow(z1, 1.5);
        const p2 = Math.pow(z2, 1.5);
        const y1 = horizonY + (H - horizonY) * p1;
        const y2 = horizonY + (H - horizonY) * p2;
        const rw1 = topRoadW + (botRoadW - topRoadW) * p1;
        const rw2 = topRoadW + (botRoadW - topRoadW) * p2;

        ctx.strokeStyle = "#f8fafc";
        ctx.lineWidth = Math.max(2, 6 * z1);
        [-1 / 6, 1 / 6].forEach((offset) => {
          ctx.beginPath();
          ctx.moveTo(W / 2 + rw1 * offset, y1);
          ctx.lineTo(W / 2 + rw2 * offset, y2);
          ctx.stroke();
        });

        // Arbres cartoon sur les bas-côtés
        if (s % 3 === 0) {
          const treeScale = 0.35 + p1 * 1.1;
          [-1, 1].forEach((side) => {
            const tx = W / 2 + side * (rw1 * 0.68 + 30);
            ctx.save();
            ctx.translate(tx, y1);
            ctx.scale(treeScale, treeScale);
            ctx.fillStyle = "#78350f";
            ctx.fillRect(-6, -18, 12, 18);
            ctx.fillStyle = "#15803d";
            ctx.beginPath();
            ctx.arc(0, -32, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#4ade80";
            ctx.beginPath();
            ctx.arc(-5, -36, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          });
        }
      }

      // Diamants bleus brillants
      diamonds.forEach((d) => {
        if (d.collected) return;
        d.z += 0.0065;
        if (d.z > 0.81 && d.z < 0.92 && d.lane === carLane) {
          d.collected = true;
          SFX.diamond();
          addDiamonds(1);
        }
        if (d.z > 0 && d.z < 1) {
          const pz = Math.pow(d.z, 1.5);
          const py = horizonY + (H - horizonY) * pz;
          const rw = topRoadW + (botRoadW - topRoadW) * pz;
          const px = W / 2 + (d.lane - 1) * (rw / 3);
          const sz = 13 + 26 * pz;

          ctx.save();
          ctx.translate(px, py - sz);
          ctx.fillStyle = "#38bdf8";
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(0, -sz);
          ctx.lineTo(sz * 0.85, 0);
          ctx.lineTo(0, sz);
          ctx.lineTo(-sz * 0.85, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
      });

      // Portails colorés 3D (Orange, Bleu, Violet)
      portalZ += 0.0048;
      const pz = Math.pow(Math.max(0.01, portalZ), 1.5);
      const portalY = horizonY + (H - horizonY) * pz;
      const currentRoadW = topRoadW + (botRoadW - topRoadW) * pz;
      const portalColors = [
        ["#fb923c", "#ea580c"],
        ["#60a5fa", "#2563eb"],
        ["#c084fc", "#7e22ce"]
      ];

      if (portalZ < 0.95) {
        for (let lane = 0; lane < 3; lane++) {
          const laneCenter = W / 2 + (lane - 1) * (currentRoadW / 3);
          const pw = (currentRoadW / 3) * 0.78;
          const ph = pw * 1.15;

          ctx.save();
          const pGrad = ctx.createLinearGradient(0, portalY - ph, 0, portalY);
          pGrad.addColorStop(0, portalColors[lane][0]);
          pGrad.addColorStop(1, portalColors[lane][1]);
          ctx.fillStyle = pGrad;
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = Math.max(2.5, 5.5 * pz);
          ctx.beginPath();
          ctx.roundRect(laneCenter - pw / 2, portalY - ph, pw, ph, Math.max(8, 22 * pz));
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#ffffff";
          ctx.font = `900 ${Math.max(15, Math.round(46 * pz))}px Cairo, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(currentOptions[lane], laneCenter, portalY - ph * 0.5);
          ctx.restore();
        }
      }

      if (!resolvedWave && portalZ >= 0.83) {
        resolvedWave = true;
        if (carLane === correctLane) {
          SFX.success();
          laneCards[carLane].classList.add("correct-flash");
          speakPrompt(targetSound);
          for (let s = 0; s < 18; s++) {
            starsBurst.push({
              x: W / 2 + (carLane - 1) * (botRoadW * 0.25),
              y: H * 0.74,
              vx: (Math.random() - 0.5) * 10,
              vy: -Math.random() * 8 - 2,
              life: 35
            });
          }
          const finished = advanceProgress();
          if (!finished) setTimeout(spawnWave, 900);
        } else {
          SFX.error();
          laneCards[carLane].classList.add("shake-error");
          setTimeout(() => {
            laneCards[carLane].classList.remove("shake-error");
            portalZ = 0.12;
            resolvedWave = false;
          }, 550);
        }
      }

      // Voiture de course rouge 3D vue de dos (Sprite 3D Pixar)
      const targetNormX = (carLane - 1) * 0.27;
      carVisualX += (targetNormX - carVisualX) * 0.18;
      carTilt *= 0.88;
      const carX = W / 2 + botRoadW * carVisualX;
      const carY = H * 0.77;
      const carW = Math.min(136, W * 0.19);
      const carH = carW * 0.85;

      ctx.save();
      ctx.translate(carX, carY);
      ctx.rotate(carTilt);

      // Ombre portée au sol
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.beginPath();
      ctx.ellipse(0, carH * 0.4, carW * 0.48, carH * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();

      if (SPRITES.car && SPRITES.car.complete && SPRITES.car.naturalWidth > 0) {
        ctx.drawImage(SPRITES.car, -carW * 0.52, -carH * 0.56, carW * 1.04, carH * 1.04);
      } else {
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.roundRect(-carW * 0.44, -carH * 0.35, carW * 0.88, carH * 0.7, 18);
        ctx.fill();
      }
      ctx.restore();

      starsBurst.forEach((st) => {
        st.x += st.vx;
        st.y += st.vy;
        st.life -= 1;
        ctx.font = "24px sans-serif";
        ctx.fillText("⭐", st.x, st.y);
      });
      starsBurst = starsBurst.filter((s) => s.life > 0);

      rafId = requestAnimationFrame(renderLoop);
    }

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeyDown);
    };
  }

  /* =========================================================
     JEU 2 : LE LABYRINTHE DES MOTS (3D PERSPECTIVE & POUSSIN EXPLORATEUR)
     ========================================================= */
  function startMazeGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let currentWordObj = null;
    let lastWord = "";
    let letterStep = 0;
    let gateChoices = [];
    let nextGateChoices = [];
    let lastGateLane = -1;
    let nextTargetLane = -1;

    // Navigation & positionnement 3D
    let chickLane = 1;              // 0: Gauche, 1: Centre, 2: Droite
    let chickLaneSmooth = 1;        // Interpolation fluide entre couloirs
    let chickZ = 0.82;              // Profondeur du poussin (0 = horizon, 1 = premier plan)
    let chickLean = 0;              // Inclinaison lors des déplacements latéraux
    let animTick = 0;

    // Défilement continu et sensation de marche ("se déplacer dans le labyrinthe")
    let mazeScrollZ = 0;            // Défilement continu du sol pavé
    let transitioning = false;      // En cours de franchissement de la porte
    let gateTransitionProg = 0;     // 0 -> 1 progression de passage de porte
    let gateOpenLane = -1;          // Porte qui s'ouvre
    let gateDoorAngle = 0;          // Angle d'ouverture des battants en bois (0 -> PI*0.48)
    let shakeLane = -1;             // Porte qui tremble en cas d'erreur
    let shakeTimer = 0;
    let mouseHoverLane = -1;        // Couloir survolé à la souris

    // Particules & effets
    let particles = [];
    let ambientLeaves = [];
    for (let i = 0; i < 18; i++) {
      ambientLeaves.push({
        x: Math.random(),
        y: Math.random(),
        size: 3 + Math.random() * 5,
        speedY: 0.001 + Math.random() * 0.002,
        speedX: (Math.random() - 0.5) * 0.0015,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        color: ["#4ade80", "#86efac", "#fbbf24", "#f472b6"][Math.floor(Math.random() * 4)]
      });
    }

    overlayUI.innerHTML = `
      <div class="word-maze-banner interactive-el" id="wordMazeBanner" dir="${db.dir}"></div>
      <div class="bottom-cards-bar interactive-el" id="mazeGatesBar" dir="ltr"></div>
    `;

    const bannerEl = document.getElementById("wordMazeBanner");
    const gatesBarEl = document.getElementById("mazeGatesBar");

    function pickNewWord() {
      const candidates = db.words.filter(w => w.word !== lastWord);
      currentWordObj = (candidates.length > 0 ? candidates : db.words)[Math.floor(Math.random() * (candidates.length || db.words.length))];
      lastWord = currentWordObj.word;
      letterStep = 0;
      lastGateLane = -1;
      nextGateChoices = [];
      nextTargetLane = -1;
      setupLetterStep();
    }

    function renderWordBanner() {
      const boxesHtml = currentWordObj.letters
        .map((l, idx) => {
          let cls = "word-letter-box";
          if (idx < letterStep) cls += " solved";
          else if (idx === letterStep) cls += " current-target";
          return `<div class="${cls}">${l}</div>`;
        })
        .join("");

      const iconHtml = currentWordObj.img
        ? `<img src="${currentWordObj.img}" alt="${currentWordObj.word}" class="word-3d-icon">`
        : `<span class="word-emoji">${currentWordObj.emoji}</span>`;

      bannerEl.innerHTML = `
        ${iconHtml}
        <div class="word-letters-row" dir="${db.dir}">${boxesHtml}</div>
      `;
    }

    function generateChoicesFor(target, forbiddenLane = -1) {
      const pool = db.letters.map((x) => x.base).filter((b) => b !== target);
      const distractors = shuffle(pool).slice(0, 2);

      // Garantir que la bonne porte change de voie (lane) à chaque apparition
      const allowedLanes = [0, 1, 2].filter((l) => l !== forbiddenLane);
      const targetLane = allowedLanes[Math.floor(Math.random() * allowedLanes.length)];

      const res = [null, null, null];
      res[targetLane] = target;
      let dIdx = 0;
      for (let i = 0; i < 3; i++) {
        if (res[i] === null) {
          res[i] = distractors[dIdx++];
        }
      }
      return { choices: res, targetLane };
    }

    function setupLetterStep() {
      transitioning = false;
      gateTransitionProg = 0;
      gateOpenLane = -1;
      gateDoorAngle = 0;
      const targetLetter = currentWordObj.letters[letterStep];

      if (nextGateChoices && nextGateChoices.length === 3 && nextGateChoices.includes(targetLetter)) {
        gateChoices = nextGateChoices;
        lastGateLane = nextTargetLane;
      } else {
        const gen = generateChoicesFor(targetLetter, lastGateLane);
        gateChoices = gen.choices;
        lastGateLane = gen.targetLane;
      }

      // Préparation immédiate de la porte suivante avec position différente garantie
      const nextIdx = letterStep + 1;
      if (nextIdx < currentWordObj.letters.length) {
        const genNext = generateChoicesFor(currentWordObj.letters[nextIdx], lastGateLane);
        nextGateChoices = genNext.choices;
        nextTargetLane = genNext.targetLane;
      } else {
        nextGateChoices = ["⭐", "⭐", "⭐"];
        nextTargetLane = -1;
      }

      renderWordBanner();
      const letterObj = db.letters.find((x) => x.base === targetLetter);
      const spokenLetter = letterObj ? letterObj.name : targetLetter;
      speakPrompt(spokenLetter, `${currentWordObj.emoji} ${targetLetter}`);

      gatesBarEl.innerHTML = "";
      gateChoices.forEach((letter, laneIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-card-btn";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGateClick(laneIdx, btn));
        gatesBarEl.appendChild(btn);
      });
    }

    function spawnDust(x, y, count = 5) {
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3,
          vy: -Math.random() * 2 - 0.5,
          life: 1,
          decay: 0.04 + Math.random() * 0.04,
          radius: 4 + Math.random() * 5,
          color: "rgba(254, 243, 199, 0.8)"
        });
      }
    }

    function spawnVictorySparkles(x, y, count = 22) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          life: 1,
          decay: 0.025 + Math.random() * 0.03,
          radius: 3 + Math.random() * 4,
          isStar: true,
          color: ["#fde047", "#f59e0b", "#4ade80", "#38bdf8", "#ec4899"][Math.floor(Math.random() * 5)]
        });
      }
    }

    function handleGateClick(laneIdx, btnEl) {
      if (transitioning) return;
      const targetLetter = currentWordObj.letters[letterStep];
      const chosen = gateChoices[laneIdx];
      chickLane = laneIdx;

      if (chosen === targetLetter) {
        transitioning = true;
        gateOpenLane = laneIdx;
        gateTransitionProg = 0;
        SFX.success();
        if (btnEl) btnEl.classList.add("correct-flash");
      } else {
        SFX.error();
        shakeLane = laneIdx;
        shakeTimer = 0.5;
        if (btnEl) {
          btnEl.classList.add("shake-error");
          setTimeout(() => btnEl.classList.remove("shake-error"), 450);
        }
      }
    }

    // Calcul de la voie 3D depuis une coordonnée écran
    function getLaneFromScreenCoord(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const W = canvas.width;
      const H = canvas.height;
      const horizonY = H * 0.28;

      if (y < horizonY) return -1;
      const p = Math.pow((y - horizonY) / (H - horizonY), 1 / 1.45);
      const topMazeW = Math.max(70, W * 0.16);
      const botMazeW = Math.min(W * 0.98, Math.max(W * 0.88, 760));
      const curW = topMazeW + (botMazeW - topMazeW) * Math.pow(p, 1.45);
      const leftEdge = W * 0.5 - curW * 0.5;
      const relX = x - leftEdge;
      if (relX < 0 || relX > curW) return -1;
      return Math.min(2, Math.max(0, Math.floor((relX / curW) * 3)));
    }

    function onCanvasClick(e) {
      const laneIdx = getLaneFromScreenCoord(e.clientX, e.clientY);
      if (laneIdx >= 0) {
        const btns = gatesBarEl.querySelectorAll(".choice-card-btn");
        handleGateClick(laneIdx, btns[laneIdx]);
      }
    }

    function onPointerMove(e) {
      mouseHoverLane = getLaneFromScreenCoord(e.clientX, e.clientY);
    }

    function onKeyDown(e) {
      if (transitioning) return;
      if (e.key === "ArrowLeft") {
        chickLane = Math.max(0, chickLane - 1);
      } else if (e.key === "ArrowRight") {
        chickLane = Math.min(2, chickLane + 1);
      } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowUp") {
        const btns = gatesBarEl.querySelectorAll(".choice-card-btn");
        handleGateClick(chickLane, btns[chickLane]);
      } else if (e.key === "1" || e.key === "2" || e.key === "3") {
        const lane = parseInt(e.key, 10) - 1;
        const btns = gatesBarEl.querySelectorAll(".choice-card-btn");
        handleGateClick(lane, btns[lane]);
      }
    }

    canvas.addEventListener("click", onCanvasClick);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("keydown", onKeyDown);

    pickNewWord();

    // =========================================================
    // BOUCLE DE RENDU 3D : LE LABYRINTHE VOLUMÉTRIQUE IMMERSIF
    // =========================================================
    function renderMaze() {
      if (!running) return;
      try {
        animTick += 0.055;
      const W = canvas.width;
      const H = canvas.height;
      const horizonY = H * 0.28;
      const vpX = W * 0.5;

      // Projection 3D perspective : profondeur z [0..1.3], couloir [-1.5..1.5]
      // laneOffset: -1.5 (mur gauche), -1 (couloir 0), -0.5 (séparateur 1),
      // 0 (couloir 1), 0.5 (séparateur 2), 1 (couloir 2), 1.5 (mur droit)
      function proj(z, laneOffset) {
        const p = Math.pow(Math.max(0, z), 1.45);
        const curY = horizonY + (H - horizonY) * p;
        const topMazeW = Math.max(70, W * 0.16);
        const botMazeW = Math.min(W * 0.98, Math.max(W * 0.88, 760));
        const curW = topMazeW + (botMazeW - topMazeW) * p;
        const laneW = curW / 3;
        const curX = vpX + laneOffset * laneW;
        return { x: curX, y: curY, p, laneW, curW };
      }

      // Vitesse de défilement : marche permanente dynamique + accélération en franchissement
      const travelSpeed = transitioning ? 0.038 : 0.016;
      mazeScrollZ = (mazeScrollZ + travelSpeed) % 1;

      if (transitioning) {
        gateTransitionProg += 0.024;
        gateDoorAngle = Math.min(Math.PI * 0.48, gateDoorAngle + 0.095);
        chickZ = Math.max(0.55, chickZ - 0.008);

        // Franchissement complet et continu vers la lettre suivante sans blocage
        if (gateTransitionProg >= 1) {
          letterStep++;
          if (letterStep >= currentWordObj.letters.length) {
            transitioning = false;
            speakPrompt(currentWordObj.word, currentWordObj.word);
            const won = advanceProgress();
            if (!won) setTimeout(pickNewWord, 950);
          } else {
            setupLetterStep();
          }
        }
      } else {
        chickZ += (0.80 - chickZ) * 0.08;
      }

      if (shakeTimer > 0) {
        shakeTimer -= 0.03;
        if (shakeTimer <= 0) shakeLane = -1;
      }

      // Interpolation fluide du déplacement latéral du poussin
      const laneDelta = chickLane - chickLaneSmooth;
      chickLaneSmooth += laneDelta * 0.18;
      chickLean = laneDelta * 0.28;

      // ---------------------------------------------------------
      // 1. CIEL FÉÉRIQUE, SOLEIL RADIEUX & ARRIÈRE-PLAN DU LABYRINTHE
      // ---------------------------------------------------------
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      skyGrad.addColorStop(0, "#0284c7");
      skyGrad.addColorStop(0.55, "#38bdf8");
      skyGrad.addColorStop(0.85, "#bae6fd");
      skyGrad.addColorStop(1, "#fef08a");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, horizonY);

      // Soleil radieux et doux halo
      ctx.save();
      const sunX = W * 0.82;
      const sunY = horizonY * 0.4;
      const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 70);
      sunGlow.addColorStop(0, "rgba(254, 240, 138, 0.9)");
      sunGlow.addColorStop(0.4, "rgba(253, 224, 71, 0.45)");
      sunGlow.addColorStop(1, "rgba(253, 224, 71, 0)");
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 70, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.arc(sunX, sunY, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Nuages flottants
      drawCloud(ctx, ((animTick * 18) % (W + 200)) - 100, horizonY * 0.32, 0.75);
      drawCloud(ctx, (((animTick * 12) + W * 0.45) % (W + 200)) - 100, horizonY * 0.52, 0.6);

      // Collines verdoyantes lointaines
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(W * 0.25, horizonY + 35, W * 0.32, Math.PI, 0);
      ctx.arc(W * 0.75, horizonY + 35, W * 0.32, Math.PI, 0);
      ctx.fill();

      // Tourelles de château enchanté au loin derrière le labyrinthe
      const castles = [
        { x: W * 0.2, w: 26, h: 42, roof: "#8b5cf6" },
        { x: W * 0.28, w: 32, h: 56, roof: "#ec4899" },
        { x: W * 0.72, w: 30, h: 50, roof: "#f59e0b" },
        { x: W * 0.8, w: 24, h: 38, roof: "#3b82f6" }
      ];
      castles.forEach((c) => {
        ctx.fillStyle = "#cbd5e1";
        ctx.fillRect(c.x, horizonY - c.h, c.w, c.h);
        // Toit conique
        ctx.fillStyle = c.roof;
        ctx.beginPath();
        ctx.moveTo(c.x - 3, horizonY - c.h);
        ctx.lineTo(c.x + c.w / 2, horizonY - c.h - 22);
        ctx.lineTo(c.x + c.w + 3, horizonY - c.h);
        ctx.closePath();
        ctx.fill();
        // Petite bannière qui ondule
        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x + c.w / 2, horizonY - c.h - 22);
        ctx.lineTo(c.x + c.w / 2, horizonY - c.h - 30);
        ctx.stroke();
        ctx.fillStyle = c.roof;
        ctx.beginPath();
        ctx.moveTo(c.x + c.w / 2, horizonY - c.h - 30);
        ctx.lineTo(c.x + c.w / 2 + 10, horizonY - c.h - 26);
        ctx.lineTo(c.x + c.w / 2, horizonY - c.h - 22);
        ctx.closePath();
        ctx.fill();
      });

      // Labyrinthe brumeux à l'horizon (profondeur atmosphérique)
      ctx.fillStyle = "#15803d";
      ctx.fillRect(0, horizonY - 6, W, 8);

      // ---------------------------------------------------------
      // 2. SOL PAVÉ DU LABYRINTHE EN PERSPECTIVE (AVEC DÉFILEMENT)
      // ---------------------------------------------------------
      // Pelouse de base sous les dalles
      ctx.fillStyle = "#16a34a";
      ctx.fillRect(0, horizonY, W, H - horizonY);

      // Rendu des bandes de pavés défilantes
      const numBands = 16;
      for (let s = 0; s < numBands; s++) {
        const z1 = ((s / numBands) + mazeScrollZ) % 1;
        const z2 = Math.min(1.2, z1 + 1 / numBands);
        if (z2 <= z1) continue;

        const pLeft1 = proj(z1, -1.5);
        const pRight1 = proj(z1, 1.5);
        const pLeft2 = proj(z2, -1.5);
        const pRight2 = proj(z2, 1.5);

        // Pavage doré texturé qui alterne doucement
        ctx.fillStyle = s % 2 === 0 ? "#fef3c7" : "#fde68a";
        ctx.beginPath();
        ctx.moveTo(pLeft1.x, pLeft1.y);
        ctx.lineTo(pRight1.x, pRight1.y);
        ctx.lineTo(pRight2.x, pRight2.y);
        ctx.lineTo(pLeft2.x, pLeft2.y);
        ctx.closePath();
        ctx.fill();

        // Jointures de pavés en brique
        ctx.strokeStyle = "rgba(180, 83, 9, 0.15)";
        ctx.lineWidth = 1 + pLeft1.p * 1.5;
        ctx.beginPath();
        ctx.moveTo(pLeft1.x, pLeft1.y);
        ctx.lineTo(pRight1.x, pRight1.y);
        ctx.stroke();

        // Pas de pierre décoratifs centraux le long de chaque couloir
        for (let l = 0; l < 3; l++) {
          const lOffset = l - 1;
          const cp = proj((z1 + z2) * 0.5, lOffset);
          ctx.fillStyle = "rgba(251, 191, 36, 0.35)";
          ctx.beginPath();
          ctx.ellipse(cp.x, cp.y, cp.laneW * 0.28, 4 + cp.p * 8, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Halo de soleil sur le couloir actif / survolé
      const activeHighlightLane = mouseHoverLane >= 0 ? mouseHoverLane : chickLane;
      if (activeHighlightLane >= 0 && activeHighlightLane <= 2) {
        const hOffset = activeHighlightLane - 1;
        const hTopL = proj(0.04, hOffset - 0.5);
        const hTopR = proj(0.04, hOffset + 0.5);
        const hBotL = proj(1.15, hOffset - 0.5);
        const hBotR = proj(1.15, hOffset + 0.5);

        const laneGlow = ctx.createLinearGradient(0, horizonY, 0, H);
        laneGlow.addColorStop(0, "rgba(254, 240, 138, 0.05)");
        laneGlow.addColorStop(0.7, "rgba(254, 240, 138, 0.28)");
        laneGlow.addColorStop(1, "rgba(251, 191, 36, 0.38)");
        ctx.fillStyle = laneGlow;
        ctx.beginPath();
        ctx.moveTo(hTopL.x, hTopL.y);
        ctx.lineTo(hTopR.x, hTopR.y);
        ctx.lineTo(hBotR.x, hBotR.y);
        ctx.lineTo(hBotL.x, hBotL.y);
        ctx.closePath();
        ctx.fill();
      }

      // ---------------------------------------------------------
      // 3. MURS VOLUMÉTRIQUES EN 3D DU LABYRINTHE (HAIES & SÉPARATEURS)
      // ---------------------------------------------------------
      // SÉPARATEURS CENTRAUX (séparant les 3 voies : laneOffsets -0.5 et +0.5)
      [-0.5, 0.5].forEach((divOffset) => {
        const steps = 14;
        for (let s = 0; s < steps; s++) {
          const zA = s / steps;
          const zB = (s + 1) / steps;
          const ptA = proj(zA, divOffset);
          const ptB = proj(zB, divOffset);

          const hA = 12 + 62 * ptA.p;
          const hB = 12 + 62 * ptB.p;
          const thA = 5 + 18 * ptA.p;
          const thB = 5 + 18 * ptB.p;

          // Face latérale gauche du séparateur
          ctx.fillStyle = "#15803d";
          ctx.beginPath();
          ctx.moveTo(ptA.x - thA * 0.5, ptA.y);
          ctx.lineTo(ptA.x - thA * 0.5, ptA.y - hA);
          ctx.lineTo(ptB.x - thB * 0.5, ptB.y - hB);
          ctx.lineTo(ptB.x - thB * 0.5, ptB.y);
          ctx.closePath();
          ctx.fill();

          // Face latérale droite du séparateur
          ctx.fillStyle = "#166534";
          ctx.beginPath();
          ctx.moveTo(ptA.x + thA * 0.5, ptA.y);
          ctx.lineTo(ptA.x + thA * 0.5, ptA.y - hA);
          ctx.lineTo(ptB.x + thB * 0.5, ptB.y - hB);
          ctx.lineTo(ptB.x + thB * 0.5, ptB.y);
          ctx.closePath();
          ctx.fill();

          // Dessus ensoleillé de la haie séparatrice
          ctx.fillStyle = "#4ade80";
          ctx.beginPath();
          ctx.moveTo(ptA.x - thA * 0.5, ptA.y - hA);
          ctx.lineTo(ptA.x + thA * 0.5, ptA.y - hA);
          ctx.lineTo(ptB.x + thB * 0.5, ptB.y - hB);
          ctx.lineTo(ptB.x - thB * 0.5, ptB.y - hB);
          ctx.closePath();
          ctx.fill();
        }
      });

      // MURS GÉANTS EXTÉRIEURS DU LABYRINTHE (Gauche à -1.5, Droite à +1.5)
      // Mur Gauche
      const wallSteps = 16;
      for (let s = 0; s < wallSteps; s++) {
        const zA = s / wallSteps;
        const zB = (s + 1) / wallSteps;
        const ptA = proj(zA, -1.5);
        const ptB = proj(zB, -1.5);

        const hA = 35 + 210 * ptA.p;
        const hB = 35 + 210 * ptB.p;
        const thickA = 18 + 70 * ptA.p;
        const thickB = 18 + 70 * ptB.p;

        // Ombre portée au sol au pied du mur
        ctx.fillStyle = "rgba(10, 40, 15, 0.18)";
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptA.x + thickA * 0.35, ptA.y);
        ctx.lineTo(ptB.x + thickB * 0.35, ptB.y);
        ctx.lineTo(ptB.x, ptB.y);
        ctx.closePath();
        ctx.fill();

        // Face interne verticale du mur gauche (verdure luxuriante et feuillage)
        const wallGradL = ctx.createLinearGradient(ptA.x, ptA.y, ptA.x, ptA.y - hA);
        wallGradL.addColorStop(0, "#14532d");
        wallGradL.addColorStop(0.5, "#15803d");
        wallGradL.addColorStop(1, "#16a34a");
        ctx.fillStyle = wallGradL;
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptA.x, ptA.y - hA);
        ctx.lineTo(ptB.x, ptB.y - hB);
        ctx.lineTo(ptB.x, ptB.y);
        ctx.closePath();
        ctx.fill();

        // Crête / Dessus du mur végétal (vert lime ensoleillé)
        ctx.fillStyle = "#86efac";
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y - hA);
        ctx.lineTo(ptA.x - thickA, ptA.y - hA * 0.95);
        ctx.lineTo(ptB.x - thickB, ptB.y - hB * 0.95);
        ctx.lineTo(ptB.x, ptB.y - hB);
        ctx.closePath();
        ctx.fill();

        // Petites fleurs sauvages décoratives le long du mur
        if (s % 2 === 0) {
          const flX = ptB.x + 8;
          const flY = ptB.y - 4;
          ctx.fillStyle = ["#ef4444", "#f43f5e", "#fbbf24", "#60a5fa"][s % 4];
          ctx.beginPath();
          ctx.arc(flX, flY, 2.5 + ptB.p * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Mur Droit
      for (let s = 0; s < wallSteps; s++) {
        const zA = s / wallSteps;
        const zB = (s + 1) / wallSteps;
        const ptA = proj(zA, 1.5);
        const ptB = proj(zB, 1.5);

        const hA = 35 + 210 * ptA.p;
        const hB = 35 + 210 * ptB.p;
        const thickA = 18 + 70 * ptA.p;
        const thickB = 18 + 70 * ptB.p;

        // Ombre portée au sol
        ctx.fillStyle = "rgba(10, 40, 15, 0.18)";
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptA.x - thickA * 0.35, ptA.y);
        ctx.lineTo(ptB.x - thickB * 0.35, ptB.y);
        ctx.lineTo(ptB.x, ptB.y);
        ctx.closePath();
        ctx.fill();

        // Face interne verticale du mur droit
        const wallGradR = ctx.createLinearGradient(ptA.x, ptA.y, ptA.x, ptA.y - hA);
        wallGradR.addColorStop(0, "#0f3d20");
        wallGradR.addColorStop(0.5, "#14532d");
        wallGradR.addColorStop(1, "#15803d");
        ctx.fillStyle = wallGradR;
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptA.x, ptA.y - hA);
        ctx.lineTo(ptB.x, ptB.y - hB);
        ctx.lineTo(ptB.x, ptB.y);
        ctx.closePath();
        ctx.fill();

        // Crête / Dessus du mur végétal droit
        ctx.fillStyle = "#86efac";
        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y - hA);
        ctx.lineTo(ptA.x + thickA, ptA.y - hA * 0.95);
        ctx.lineTo(ptB.x + thickB, ptB.y - hB * 0.95);
        ctx.lineTo(ptB.x, ptB.y - hB);
        ctx.closePath();
        ctx.fill();

        // Fleurs
        if (s % 2 === 1) {
          const flX = ptB.x - 8;
          const flY = ptB.y - 4;
          ctx.fillStyle = ["#ec4899", "#f59e0b", "#38bdf8", "#a855f7"][s % 4];
          ctx.beginPath();
          ctx.arc(flX, flY, 2.5 + ptB.p * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ---------------------------------------------------------
      // 4. PORTES DU LABYRINTHE & ARCHES EN PIERRE 3D
      // ---------------------------------------------------------
      // Position Z de la porte courante (s'approche et zoome pendant la transition)
      const currentGateZ = 0.58 + gateTransitionProg * 0.65;

      // Fonction utilitaire pour dessiner un ensemble de 3 portes à une profondeur Z donnée
      function drawGateSet(gateZ, isCurrentGate, choices) {
        if (gateZ > 1.25 || gateZ < 0.05) return;

        for (let i = 0; i < 3; i++) {
          const laneOffset = i - 1;
          const ptL = proj(gateZ, laneOffset - 0.5);
          const ptR = proj(gateZ, laneOffset + 0.5);
          const ptC = proj(gateZ, laneOffset);

          const archH = (32 + 115 * ptC.p) * 1.1;
          const pillarW = 8 + 26 * ptC.p;
          const isOpening = isCurrentGate && gateOpenLane === i;
          const isShaking = isCurrentGate && shakeLane === i;
          const shakeOffX = isShaking ? Math.sin(animTick * 32) * (5 + ptC.p * 4) : 0;

          // Piliers en pierre taillée 3D de l'arche
          ctx.save();
          ctx.translate(shakeOffX, 0);

          // Pilier gauche
          ctx.fillStyle = "#64748b";
          ctx.fillRect(ptL.x, ptL.y - archH, pillarW, archH);
          ctx.fillStyle = "#94a3b8";
          ctx.fillRect(ptL.x + 2, ptL.y - archH, pillarW * 0.45, archH);

          // Pilier droit
          ctx.fillStyle = "#475569";
          ctx.fillRect(ptR.x - pillarW, ptR.y - archH, pillarW, archH);
          ctx.fillStyle = "#94a3b8";
          ctx.fillRect(ptR.x - pillarW + 2, ptR.y - archH, pillarW * 0.45, archH);

          // Linteau supérieur cintré de l'arche
          const lintelH = 12 + 28 * ptC.p;
          ctx.fillStyle = "#475569";
          ctx.beginPath();
          ctx.roundRect(ptL.x - 2, ptL.y - archH - lintelH * 0.6, (ptR.x - ptL.x) + 4, lintelH, 6);
          ctx.fill();
          ctx.strokeStyle = "#cbd5e1";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Clé de voûte au sommet
          ctx.fillStyle = "#f59e0b";
          ctx.beginPath();
          ctx.moveTo(ptC.x - 6 * ptC.p, ptL.y - archH - lintelH * 0.6 - 2);
          ctx.lineTo(ptC.x + 6 * ptC.p, ptL.y - archH - lintelH * 0.6 - 2);
          ctx.lineTo(ptC.x + 4 * ptC.p, ptL.y - archH + lintelH * 0.4);
          ctx.lineTo(ptC.x - 4 * ptC.p, ptL.y - archH + lintelH * 0.4);
          ctx.closePath();
          ctx.fill();

          // Lanternes dorées suspendues aux piliers
          const lanY = ptL.y - archH * 0.65;
          const lanSize = 4 + 10 * ptC.p;
          // Lueur de lanterne
          const lanGlow = ctx.createRadialGradient(ptL.x + pillarW * 0.5, lanY, 1, ptL.x + pillarW * 0.5, lanY, lanSize * 3);
          lanGlow.addColorStop(0, "rgba(253, 224, 71, 0.8)");
          lanGlow.addColorStop(1, "rgba(253, 224, 71, 0)");
          ctx.fillStyle = lanGlow;
          ctx.beginPath();
          ctx.arc(ptL.x + pillarW * 0.5, lanY, lanSize * 3, 0, Math.PI * 2);
          ctx.fill();

          // BATTANTS DE PORTE EN BOIS MASSIF (OUVERTURE 3D EN PERSPECTIVE)
          const doorW = (ptR.x - ptL.x - pillarW * 2) * 0.5;
          const doorH = archH * 0.82;
          const doorY = ptC.y - doorH;

          if (isOpening) {
            // Battant gauche ouvert vers la gauche
            const openScale = Math.max(0.12, Math.cos(gateDoorAngle));
            ctx.fillStyle = "#78350f";
            ctx.beginPath();
            ctx.moveTo(ptL.x + pillarW, ptL.y);
            ctx.lineTo(ptL.x + pillarW, doorY);
            ctx.lineTo(ptL.x + pillarW + doorW * openScale, doorY + 6 * ptC.p);
            ctx.lineTo(ptL.x + pillarW + doorW * openScale, ptL.y);
            ctx.closePath();
            ctx.fill();

            // Battant droit ouvert vers la droite
            ctx.fillStyle = "#92400e";
            ctx.beginPath();
            ctx.moveTo(ptR.x - pillarW, ptR.y);
            ctx.lineTo(ptR.x - pillarW, doorY);
            ctx.lineTo(ptR.x - pillarW - doorW * openScale, doorY + 6 * ptC.p);
            ctx.lineTo(ptR.x - pillarW - doorW * openScale, ptR.y);
            ctx.closePath();
            ctx.fill();

            // Soleil resplendissant traversant la porte ouverte
            const passageGlow = ctx.createRadialGradient(ptC.x, ptC.y - doorH * 0.5, 5, ptC.x, ptC.y - doorH * 0.5, doorW * 1.5);
            passageGlow.addColorStop(0, "rgba(254, 240, 138, 0.7)");
            passageGlow.addColorStop(1, "rgba(254, 240, 138, 0)");
            ctx.fillStyle = passageGlow;
            ctx.beginPath();
            ctx.ellipse(ptC.x, ptC.y - doorH * 0.5, doorW * 1.2, doorH * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Portes fermées en chêne sculpté avec ferrures
            // Battant gauche
            ctx.fillStyle = "#92400e";
            ctx.fillRect(ptL.x + pillarW, doorY, doorW - 1, doorH);
            // Battant droit
            ctx.fillStyle = "#78350f";
            ctx.fillRect(ptC.x, doorY, doorW - 1, doorH);

            // Barres de fer forgé horizontales
            ctx.fillStyle = "#334155";
            const barH = 3 + 4 * ptC.p;
            ctx.fillRect(ptL.x + pillarW + 2, doorY + doorH * 0.25, (ptR.x - ptL.x - pillarW * 2) - 4, barH);
            ctx.fillRect(ptL.x + pillarW + 2, doorY + doorH * 0.72, (ptR.x - ptL.x - pillarW * 2) - 4, barH);

            // Anneau de heurtoir
            ctx.fillStyle = "#f59e0b";
            ctx.beginPath();
            ctx.arc(ptC.x, doorY + doorH * 0.5, 3 + 5 * ptC.p, 0, Math.PI * 2);
            ctx.fill();
          }

          // ÉCUSSON ROYAL / BLASON DE LA LETTRE SUSPENDU À L'ARCHE
          const bob = isOpening ? -12 : Math.sin(animTick * 3 + i * 1.4) * (3 + ptC.p * 3);
          const signW = Math.min(108, ptC.laneW * 0.65);
          const signH = signW * 0.78;
          const signX = ptC.x - signW / 2;
          const signY = ptL.y - archH - lintelH * 0.8 + bob;

          // Chaînettes dorées de suspension
          ctx.strokeStyle = "#d97706";
          ctx.lineWidth = 1.5 + ptC.p * 1.5;
          ctx.beginPath();
          ctx.moveTo(signX + signW * 0.22, signY + 6);
          ctx.lineTo(signX + signW * 0.22, ptL.y - archH - lintelH * 0.5);
          ctx.moveTo(signX + signW * 0.78, signY + 6);
          ctx.lineTo(signX + signW * 0.78, ptL.y - archH - lintelH * 0.5);
          ctx.stroke();

          // Lueur si la porte est la bonne ou survolée
          if (isOpening) {
            ctx.shadowColor = "#22c55e";
            ctx.shadowBlur = 18;
          } else if (mouseHoverLane === i) {
            ctx.shadowColor = "#f59e0b";
            ctx.shadowBlur = 14;
          }

          // Écusson 3D (forme d'écu royal avec bordure dorée)
          ctx.fillStyle = isOpening ? "#dcfce7" : "#fffbeb";
          ctx.strokeStyle = isOpening ? "#16a34a" : (mouseHoverLane === i ? "#f59e0b" : "#d97706");
          ctx.lineWidth = 3.5 + ptC.p * 2.5;

          ctx.beginPath();
          ctx.roundRect(signX, signY, signW, signH, 14);
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Lettre capitale imposante et nette
          ctx.fillStyle = isOpening ? "#15803d" : "#0f172a";
          const fontSize = Math.max(18, Math.round(signH * 0.62));
          ctx.font = `900 ${fontSize}px Cairo, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const letterChar = (choices && choices[i]) || (isCurrentGate ? (gateChoices[i] || "") : "");
          ctx.fillText(letterChar, ptC.x, signY + signH * 0.52);

          ctx.restore();
        }
      }

      // Dessin des portes actuelles (avec lettres bien visibles)
      drawGateSet(currentGateZ, true, gateChoices);

      // Si transition en cours, dessin de la prochaine porte avec ses lettres déjà prêtes
      if (transitioning) {
        const nextGateZ = 0.12 + gateTransitionProg * 0.46;
        drawGateSet(nextGateZ, false, nextGateChoices);
      }

      // ---------------------------------------------------------
      // 5. POUSSIN MASCOTTE 3D (ANIMATION DE MARCHE PERMANENTE & SAUT DE GLOIRE)
      // ---------------------------------------------------------
      const chickPt = proj(chickZ, chickLaneSmooth - 1);
      const hopSpeed = transitioning ? 8.8 : 6.8;
      const hopMax = transitioning ? 22 : 14;
      const hop = -Math.abs(Math.sin(animTick * hopSpeed)) * hopMax;
      const walkWaddle = Math.sin(animTick * hopSpeed) * 0.07;

      // Émission de poussière régulière lors de la marche et boost lors de la traversée
      if ((transitioning && Math.random() < 0.45) || (!transitioning && Math.random() < 0.22)) {
        spawnDust(chickPt.x + (Math.random() - 0.5) * 18, chickPt.y + 10, transitioning ? 2 : 1);
      }
      if (transitioning && gateTransitionProg > 0.45 && gateTransitionProg < 0.8 && Math.random() < 0.35) {
        spawnVictorySparkles(chickPt.x, chickPt.y - 20, 3);
      }

      ctx.save();
      ctx.translate(chickPt.x, chickPt.y + hop);
      ctx.rotate(chickLean + walkWaddle);

      // Ombre portée au sol en 3D (s'écrase et grandit au sol)
      const shadowScale = Math.max(0.05, (1 - Math.abs(hop) / (hopMax * 2.2)) * (0.6 + chickPt.p * 0.55));
      ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
      ctx.beginPath();
      ctx.ellipse(0, 34 - hop, Math.max(1, 30 * shadowScale), Math.max(1, 10 * shadowScale), 0, 0, Math.PI * 2);
      ctx.fill();

      // Dessin du Sprite 3D Pixar mignon
      const chickW = Math.round(84 * (0.65 + chickPt.p * 0.55));
      const chickH = chickW;

      if (SPRITES.chick && SPRITES.chick.complete && SPRITES.chick.naturalWidth > 0) {
        ctx.drawImage(SPRITES.chick, -chickW * 0.5, -chickH * 0.55, chickW, chickH);
      } else {
        // Fallback vectoriel dynamique si le sprite charge
        ctx.fillStyle = "#facc15";
        ctx.beginPath();
        ctx.arc(0, 0, 28 * (0.65 + chickPt.p * 0.55), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // ---------------------------------------------------------
      // 6. PARTICULES FLOTTANTES & FEUILLES DE LABYRINTHE
      // ---------------------------------------------------------
      // Particules dynamiques (étincelles, poussière, étoiles)
      particles = particles.filter((p) => p.life > 0.01);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) return;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.fillStyle = p.color;
        const rawR = p.isStar ? (p.radius * p.life) : (p.radius * (1 - p.life * 0.3));
        const r = Math.max(0.5, rawR);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Feuilles de jardin flottantes dans la brise
      ambientLeaves.forEach((leaf) => {
        leaf.y += leaf.speedY;
        leaf.x += leaf.speedX;
        leaf.rot += leaf.rotSpeed;
        if (leaf.y > 1) { leaf.y = 0.2; leaf.x = Math.random(); }
        if (leaf.x < 0) leaf.x = 1;
        if (leaf.x > 1) leaf.x = 0;

        const lx = leaf.x * W;
        const ly = horizonY + leaf.y * (H - horizonY);

        ctx.save();
        ctx.translate(lx, ly);
        ctx.rotate(leaf.rot);
        ctx.fillStyle = leaf.color;
        ctx.globalAlpha = 0.45;
        ctx.beginPath();
        const leafW = Math.max(0.5, leaf.size);
        const leafH = Math.max(0.5, leaf.size * 0.5);
        ctx.ellipse(0, 0, leafW, leafH, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      } catch (err) {
        console.error("renderMaze error:", err);
      }

      if (running) {
        rafId = requestAnimationFrame(renderMaze);
      }
    }

    rafId = requestAnimationFrame(renderMaze);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      canvas.removeEventListener("click", onCanvasClick);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }

  /* =========================================================
     JEU 3 : LE NINJA DES FRUITS (DOJO JAPONAIS & FRUITS JUTEUX)
     ========================================================= */
  function startNinjaGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let choiceSet = null;
    let fruits = [];
    let splashes = [];
    let bladeTrail = [];
    let isPointerDown = false;
    let lastNinjaWinnerIdx = -1;
    let lastNinjaTarget = "";

    overlayUI.innerHTML = `<div class="word-maze-banner" id="ninjaBanner" dir="${db.dir}"></div><div></div>`;
    const ninjaBanner = document.getElementById("ninjaBanner");

    function pickTargetAndLaunchWave() {
      choiceSet = pickThreeLetterChoices(db, lastNinjaWinnerIdx, lastNinjaTarget);
      lastNinjaWinnerIdx = choiceSet.winnerIdx;
      lastNinjaTarget = choiceSet.target.label;
      ninjaBanner.innerHTML = `<span style="font-size:20px;font-weight:900;color:#7c2d12;">${db.ui.slicePrompt}</span> <div class="word-letter-box current-target">${choiceSet.target.label}</div>`;
      speakPrompt(choiceSet.target.speech, choiceSet.target.label);
      launchFruitsWave();
    }

    function launchFruitsWave() {
      if (!running || !choiceSet) return;
      const W = canvas.width;
      const H = canvas.height;
      const fruitStyles = [
        { body: "#ef4444", rind: "#16a34a" }, // Pastèque
        { body: "#f97316", rind: "#ea580c" }, // Orange
        { body: "#dc2626", rind: "#991b1b" }  // Pomme rouge
      ];

      // Décalage aléatoire des points de projection des fruits
      fruits = choiceSet.options.map((opt, idx) => {
        const jitter = (Math.random() - 0.5) * (W * 0.05);
        const startX = W * (0.22 + idx * 0.28) + jitter;
        const st = fruitStyles[idx % fruitStyles.length];
        return {
          x: startX,
          y: H + 40,
          vx: (W / 2 - startX) * 0.008 + (Math.random() - 0.5) * 2.2,
          vy: -(Math.sqrt(H) * 0.56 + Math.random() * 2.2),
          r: Math.min(56, Math.max(42, W * 0.056)),
          label: opt.label,
          isCorrect: idx === choiceSet.winnerIdx,
          color: st.body,
          rind: st.rind,
          sliced: false
        };
      });
    }

    function checkSliceAt(px, py) {
      bladeTrail.push({ x: px, y: py, life: 14 });
      fruits.forEach((f) => {
        if (f.sliced) return;
        const dist = Math.hypot(px - f.x, py - f.y);
        if (dist <= f.r + 14) {
          f.sliced = true;
          if (f.isCorrect) {
            SFX.success();
            splashes.push({ x: f.x, y: f.y, color: f.color, life: 42 });
            const won = advanceProgress();
            if (!won) setTimeout(pickTargetAndLaunchWave, 750);
          } else {
            SFX.error();
            splashes.push({ x: f.x, y: f.y, color: "#94a3b8", life: 25 });
          }
        }
      });
    }

    function onPointerDown(e) {
      isPointerDown = true;
      const rect = canvas.getBoundingClientRect();
      checkSliceAt(e.clientX - rect.left, e.clientY - rect.top);
    }
    function onPointerMove(e) {
      if (!isPointerDown) return;
      const rect = canvas.getBoundingClientRect();
      checkSliceAt(e.clientX - rect.left, e.clientY - rect.top);
    }
    function onPointerUp() {
      isPointerDown = false;
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    pickTargetAndLaunchWave();

    function renderNinja() {
      if (!running) return;
      const W = canvas.width;
      const H = canvas.height;

      // Mur en bois chaud du Dojo
      const woodGrad = ctx.createLinearGradient(0, 0, 0, H);
      woodGrad.addColorStop(0, "#78350f");
      woodGrad.addColorStop(1, "#451a03");
      ctx.fillStyle = woodGrad;
      ctx.fillRect(0, 0, W, H);

      for (let x = 0; x < W; x += 90) {
        ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      // Fenêtre circulaire centrale donnant sur le Mont Fuji
      const winR = Math.min(W, H) * 0.29;
      ctx.save();
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.52, winR, 0, Math.PI * 2);
      ctx.clip();
      const sky = ctx.createLinearGradient(0, H * 0.52 - winR, 0, H * 0.52 + winR);
      sky.addColorStop(0, "#7dd3fc");
      sky.addColorStop(1, "#fde68a");
      ctx.fillStyle = sky;
      ctx.fillRect(W / 2 - winR, H * 0.52 - winR, winR * 2, winR * 2);

      // Montagne enneigée
      ctx.fillStyle = "#475569";
      ctx.beginPath();
      ctx.moveTo(W / 2 - winR, H * 0.52 + winR);
      ctx.lineTo(W / 2, H * 0.52 - winR * 0.35);
      ctx.lineTo(W / 2 + winR, H * 0.52 + winR);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(W / 2 - winR * 0.28, H * 0.52 + winR * 0.02);
      ctx.lineTo(W / 2, H * 0.52 - winR * 0.35);
      ctx.lineTo(W / 2 + winR * 0.28, H * 0.52 + winR * 0.02);
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "#290f02";
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.52, winR, 0, Math.PI * 2);
      ctx.stroke();

      // Deux lanternes rouges suspendues
      [W * 0.15, W * 0.85].forEach((lx) => {
        ctx.strokeStyle = "#facc15";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx, 42);
        ctx.stroke();
        ctx.fillStyle = "#ef4444";
        ctx.strokeStyle = "#fde047";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(lx, 70, 26, 32, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });

      // Éclaboussures de jus coloré
      splashes.forEach((sp) => {
        sp.life -= 1;
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.life / 42;
        for (let i = 0; i < 7; i++) {
          ctx.beginPath();
          ctx.arc(sp.x + Math.cos(i * 0.9) * (44 - sp.life), sp.y + Math.sin(i * 0.9) * (44 - sp.life), 11, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      });
      splashes = splashes.filter((s) => s.life > 0);

      let activeCount = 0;
      fruits.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        f.vy += 0.22;

        if (f.y < H + 90 && !f.sliced) activeCount++;

        if (!f.sliced) {
          ctx.save();
          ctx.translate(f.x, f.y);
          // Fruit avec écorce + feuille verte
          ctx.fillStyle = f.color;
          ctx.strokeStyle = f.rind;
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.arc(0, 0, f.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#22c55e";
          ctx.beginPath();
          ctx.ellipse(6, -f.r - 6, 10, 5, -0.4, 0, Math.PI * 2);
          ctx.fill();

          // Pastille blanche centrale
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(0, 0, f.r * 0.62, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#0f172a";
          ctx.font = `900 ${Math.round(f.r * 0.68)}px Cairo, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(f.label, 0, 2);
          ctx.restore();
        }
      });

      if (activeCount === 0 && fruits.length > 0 && !fruits.some((f) => f.sliced && f.isCorrect)) {
        launchFruitsWave();
      }

      if (bladeTrail.length > 1) {
        ctx.strokeStyle = "#fde047";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.beginPath();
        bladeTrail.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
      }
      bladeTrail.forEach((pt) => (pt.life -= 1));
      bladeTrail = bladeTrail.filter((pt) => pt.life > 0);

      rafId = requestAnimationFrame(renderNinja);
    }

    rafId = requestAnimationFrame(renderNinja);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }

  /* =========================================================
     JEU 4 : LE BASKET-BALL DES CHIFFRES (ARÈNE SPORTIVE)
     ========================================================= */
  function startBasketballGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let targetNumObj = null;
    let lastNumber = -1;
    let lastHoopIdx = -1;
    let currentSpriteKey = "apple";
    let hoopOptions = [];
    let ball = { x: 0, y: 0, startX: 0, startY: 0, targetX: 0, targetY: 0, t: 0, state: "idle", hoopIdx: -1 };
    let celebrationJump = 0;

    const countSpriteKeys = ["apple", "star", "lemon", "duck", "fish", "flower"];

    function setupRound() {
      const candidates = db.numbers.filter(n => n.value !== lastNumber);
      targetNumObj = (candidates.length > 0 ? candidates : db.numbers)[Math.floor(Math.random() * (candidates.length || db.numbers.length))];
      lastNumber = targetNumObj.value;
      currentSpriteKey = countSpriteKeys[Math.floor(Math.random() * countSpriteKeys.length)];

      const distractors = shuffle(db.numbers.filter((n) => n.value !== targetNumObj.value)).slice(0, 2);

      // Panier gagnant garanti à une position différente de la manche précédente
      const allowedHoops = [0, 1, 2].filter(idx => idx !== lastHoopIdx);
      const targetHoop = allowedHoops[Math.floor(Math.random() * allowedHoops.length)];
      lastHoopIdx = targetHoop;

      hoopOptions = [null, null, null];
      hoopOptions[targetHoop] = targetNumObj;
      let dIdx = 0;
      for (let i = 0; i < 3; i++) {
        if (hoopOptions[i] === null) {
          hoopOptions[i] = distractors[dIdx++];
        }
      }

      ball.state = "idle";
      ball.t = 0;

      speakPrompt(db.ui.howMany, db.ui.howMany);
    }

    function getHoopPositions(W, H) {
      return [0, 1, 2].map((idx) => ({
        x: W * (0.22 + idx * 0.28),
        y: H * 0.55
      }));
    }

    function shootAtHoop(idx) {
      if (ball.state !== "idle") return;
      const W = canvas.width;
      const H = canvas.height;
      const hoops = getHoopPositions(W, H);
      SFX.shoot();
      ball.startX = W / 2;
      ball.startY = H * 0.86;
      ball.targetX = hoops[idx].x;
      ball.targetY = hoops[idx].y;
      ball.hoopIdx = idx;
      ball.t = 0;
      ball.state = "flying";
    }

    function onCanvasClick(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const idx = Math.floor((x / canvas.width) * 3);
      if (idx >= 0 && idx <= 2) shootAtHoop(idx);
    }
    canvas.addEventListener("click", onCanvasClick);

    setupRound();

    function renderBasketball() {
      if (!running) return;
      const W = canvas.width;
      const H = canvas.height;

      // Gradins du stade
      const stadiumGrad = ctx.createLinearGradient(0, 0, 0, H * 0.45);
      stadiumGrad.addColorStop(0, "#1e1b4b");
      stadiumGrad.addColorStop(1, "#1d4ed8");
      ctx.fillStyle = stadiumGrad;
      ctx.fillRect(0, 0, W, H * 0.45);

      // Fanions multicolores suspendus
      const pennantColors = ["#ef4444", "#facc15", "#22c55e", "#ec4899", "#38bdf8"];
      for (let x = 0; x < W; x += 44) {
        ctx.fillStyle = pennantColors[(x / 44) % pennantColors.length];
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 36, 0);
        ctx.lineTo(x + 18, 22);
        ctx.closePath();
        ctx.fill();
      }

      // Animaux spectateurs 3D
      const spectatorKeys = ["lion", "bear", "rabbit", "cat", "duck", "chick"];
      const jumpY = celebrationJump > 0 ? Math.abs(Math.sin(celebrationJump * 0.35)) * 18 : 0;
      if (celebrationJump > 0) celebrationJump--;
      const specSize = Math.max(36, Math.round(W * 0.045));
      spectatorKeys.forEach((spKey, i) => {
        const spImg = SPRITES[spKey];
        const sx = W * (0.1 + i * 0.16);
        const sy = H * 0.38 - jumpY;
        if (spImg && spImg.complete && spImg.naturalWidth > 0) {
          ctx.drawImage(spImg, sx - specSize / 2, sy - specSize / 2, specSize, specSize);
        }
      });

      // Parquet de basket brillant + lignes blanches du terrain
      const courtGrad = ctx.createLinearGradient(0, H * 0.45, 0, H);
      courtGrad.addColorStop(0, "#fbbf24");
      courtGrad.addColorStop(1, "#d97706");
      ctx.fillStyle = courtGrad;
      ctx.fillRect(0, H * 0.45, W, H * 0.55);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.95, W * 0.34, Math.PI, 0);
      ctx.stroke();

      // Grand panneau blanc au fond au centre
      const boardW = Math.min(480, W * 0.64);
      const boardH = H * 0.28;
      const boardX = (W - boardW) / 2;
      const boardY = H * 0.04;

      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.roundRect(boardX, boardY, boardW, boardH, 22);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#1e3a8a";
      ctx.font = `900 ${Math.max(16, Math.round(boardH * 0.22))}px Cairo, sans-serif`;
      ctx.fillText(db.ui.howMany, W / 2, boardY + boardH * 0.22);

      const count = targetNumObj.value;
      const itemSize = Math.min(42, Math.round(boardH * 0.32));
      const countImg = SPRITES[currentSpriteKey];
      for (let i = 0; i < count; i++) {
        const r = Math.floor(i / 5);
        const c = i % 5;
        const rowCols = r === 1 ? count - 5 : Math.min(5, count);
        const ox = W / 2 + (c - (rowCols - 1) / 2) * (itemSize * 1.25);
        const oy = boardY + boardH * (count > 5 ? (r === 0 ? 0.52 : 0.8) : 0.64);
        if (countImg && countImg.complete && countImg.naturalWidth > 0) {
          ctx.drawImage(countImg, ox - itemSize / 2, oy - itemSize / 2, itemSize, itemSize);
        }
      }

      // 3 Paniers de basket
      const hoops = getHoopPositions(W, H);
      hoops.forEach((hp, idx) => {
        const opt = hoopOptions[idx];
        const bw = Math.min(134, W * 0.22);
        const bh = bw * 0.72;

        // Poteau de soutien
        ctx.fillStyle = "#475569";
        ctx.fillRect(hp.x - 6, hp.y, 12, H * 0.16);

        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.roundRect(hp.x - bw / 2, hp.y - bh, bw, bh, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#0f172a";
        ctx.font = `900 ${Math.round(bh * 0.62)}px Cairo, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(opt.display, hp.x, hp.y - bh * 0.5);

        ctx.strokeStyle = "#ea580c";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(hp.x - bw * 0.32, hp.y);
        ctx.lineTo(hp.x + bw * 0.32, hp.y);
        ctx.stroke();

        ctx.strokeStyle = "#f8fafc";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(hp.x - bw * 0.28, hp.y + 3);
        ctx.lineTo(hp.x - bw * 0.18, hp.y + 36);
        ctx.lineTo(hp.x + bw * 0.18, hp.y + 36);
        ctx.lineTo(hp.x + bw * 0.28, hp.y + 3);
        ctx.stroke();
      });

      if (ball.state === "idle") {
        ball.x = W / 2;
        ball.y = H * 0.86;
      } else if (ball.state === "flying") {
        ball.t += 0.04;
        const t = Math.min(1, ball.t);
        ball.x = ball.startX + (ball.targetX - ball.startX) * t;
        const arc = Math.sin(t * Math.PI) * (H * 0.26);
        ball.y = ball.startY + (ball.targetY - ball.startY) * t - arc;

        if (t >= 1) {
          const chosen = hoopOptions[ball.hoopIdx];
          if (chosen.value === targetNumObj.value) {
            ball.state = "swish";
            celebrationJump = 45;
            SFX.success();
            speakPrompt(targetNumObj.word, targetNumObj.display);
            spawnConfetti(35);
            const won = advanceProgress();
            if (!won) setTimeout(setupRound, 1100);
          } else {
            ball.state = "rebound";
            ball.t = 0;
            SFX.error();
          }
        }
      } else if (ball.state === "rebound") {
        ball.t += 0.06;
        const t = Math.min(1, ball.t);
        ball.x = ball.targetX + (ball.startX - ball.targetX) * t;
        ball.y = ball.targetY + (ball.startY - ball.targetY) * t - Math.sin(t * Math.PI) * 60;
        if (t >= 1) ball.state = "idle";
      }

      const ballR = Math.min(35, W * 0.046);
      ctx.save();
      ctx.translate(ball.x, ball.y);
      ctx.fillStyle = "#f97316";
      ctx.strokeStyle = "#7c2d12";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, ballR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-ballR, 0);
      ctx.lineTo(ballR, 0);
      ctx.moveTo(0, -ballR);
      ctx.lineTo(0, ballR);
      ctx.stroke();
      ctx.restore();

      rafId = requestAnimationFrame(renderBasketball);
    }

    rafId = requestAnimationFrame(renderBasketball);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }

  /* =========================================================
     JEU 5 : LE TAPE-TAUPE DES LETTRES (PRAIRIE FLEURIE 3D)
     ========================================================= */
  function startWhackGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let targetLetterObj = null;
    let lastWhackLetter = "";
    let lastTargetHole = -1;
    let activeMoles = [];
    let waveTimer = null;

    function spawnMoleWave() {
      if (!running) return;
      if (!targetLetterObj) {
        const candidates = db.letters.filter(l => l.base !== lastWhackLetter);
        targetLetterObj = (candidates.length > 0 ? candidates : db.letters)[Math.floor(Math.random() * (candidates.length || db.letters.length))];
        lastWhackLetter = targetLetterObj.base;
        speakPrompt(targetLetterObj.name, targetLetterObj.base);
      }

      // La taupe cible change obligatoirement de trou à chaque vague
      const allHoles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      const allowedTargetHoles = allHoles.filter(h => h !== lastTargetHole);
      const targetHole = allowedTargetHoles[Math.floor(Math.random() * allowedTargetHoles.length)];
      lastTargetHole = targetHole;

      const otherHoles = shuffle(allHoles.filter(h => h !== targetHole)).slice(0, 3);
      const chosenHoles = [targetHole, ...otherHoles];

      const distractors = shuffle(db.letters.filter((l) => l.base !== targetLetterObj.base)).slice(0, 3);
      const waveLetters = [
        { letter: targetLetterObj.base, isTarget: true },
        ...distractors.map((d) => ({ letter: d.base, isTarget: false }))
      ];

      activeMoles = chosenHoles.map((hIdx, i) => ({
        holeIdx: hIdx,
        letter: waveLetters[i].letter,
        isTarget: waveLetters[i].isTarget,
        pop: 0,
        hit: false
      }));

      SFX.pop();
      clearTimeout(waveTimer);
      waveTimer = setTimeout(() => {
        if (running) spawnMoleWave();
      }, 3200);
    }

    function getHoleCoords(W, H) {
      const gridW = Math.min(W * 0.82, 680);
      const gridH = H * 0.68;
      const startX = (W - gridW) / 2;
      const startY = H * 0.24;
      const holes = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          holes.push({
            x: startX + (c + 0.5) * (gridW / 3),
            y: startY + (r + 0.6) * (gridH / 3)
          });
        }
      }
      return holes;
    }

    function onCanvasClick(e) {
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const holes = getHoleCoords(canvas.width, canvas.height);

      activeMoles.forEach((m) => {
        if (m.hit) return;
        const h = holes[m.holeIdx];
        if (Math.hypot(px - h.x, py - (h.y - 28)) < 58) {
          m.hit = true;
          if (m.isTarget) {
            clearTimeout(waveTimer);
            SFX.success();
            spawnConfetti(35);
            floatParticles.push({
              x: h.x,
              y: h.y - 40,
              vy: 1.8,
              alpha: 1.0,
              scale: 1.0,
              text: "+10 ⭐",
              color: "#f59e0b"
            });
            const won = advanceProgress();
            if (!won) {
              targetLetterObj = null;
              setTimeout(spawnMoleWave, 800);
            }
          } else {
            SFX.error();
          }
        }
      });
    }
    canvas.addEventListener("click", onCanvasClick);

    spawnMoleWave();

    let floatParticles = [];
    let whackPhase = 0;

    function renderWhack() {
      if (!running) return;
      whackPhase += 0.05;
      const W = canvas.width;
      const H = canvas.height;

      // 1. Ciel dégradé avec soleil radieux et nuages
      const skyGrad = ctx.createLinearGradient(0, 0, 0, H * 0.22);
      skyGrad.addColorStop(0, "#38bdf8");
      skyGrad.addColorStop(1, "#bae6fd");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, H * 0.22);

      // Soleil doux en haut à droite
      ctx.fillStyle = "rgba(254, 240, 138, 0.45)";
      ctx.beginPath();
      ctx.arc(W * 0.88, H * 0.08, 48 + Math.sin(whackPhase * 1.5) * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fef08a";
      ctx.beginPath();
      ctx.arc(W * 0.88, H * 0.08, 28, 0, Math.PI * 2);
      ctx.fill();

      // 2. Collines verdoyantes & prairie 3D
      const hillGrad = ctx.createLinearGradient(0, H * 0.15, 0, H);
      hillGrad.addColorStop(0, "#4ade80");
      hillGrad.addColorStop(0.3, "#22c55e");
      hillGrad.addColorStop(1, "#15803d");
      ctx.fillStyle = hillGrad;
      ctx.fillRect(0, H * 0.20, W, H * 0.80);

      // Clôture champêtre en bois
      ctx.fillStyle = "#d97706";
      ctx.strokeStyle = "#92400e";
      ctx.lineWidth = 2.5;
      for (let x = 12; x < W; x += 52) {
        ctx.beginPath();
        ctx.roundRect(x, H * 0.08, 24, H * 0.14, [6, 6, 0, 0]);
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = "#b45309";
      ctx.fillRect(0, H * 0.12, W, 8);
      ctx.fillRect(0, H * 0.17, W, 8);

      const holes = getHoleCoords(W, H);
      holes.forEach((h, idx) => {
        // Ombre portée sous le terrier
        ctx.fillStyle = "rgba(15, 23, 42, 0.28)";
        ctx.beginPath();
        ctx.ellipse(h.x, h.y + 12, 64, 24, 0, 0, Math.PI * 2);
        ctx.fill();

        // Intérieur sombre 3D du terrier
        const holeInnerGrad = ctx.createRadialGradient(h.x, h.y, 4, h.x, h.y, 56);
        holeInnerGrad.addColorStop(0, "#1c0a00");
        holeInnerGrad.addColorStop(0.8, "#381504");
        holeInnerGrad.addColorStop(1, "#542308");
        ctx.fillStyle = holeInnerGrad;
        ctx.beginPath();
        ctx.ellipse(h.x, h.y, 58, 22, 0, 0, Math.PI * 2);
        ctx.fill();

        const mole = activeMoles.find((m) => m.holeIdx === idx);
        if (mole) {
          if (!mole.hit) {
            mole.pop = Math.min(1, mole.pop + 0.12);
          } else {
            mole.pop = Math.max(0, mole.pop - 0.1);
          }

          if (mole.pop > 0.05) {
            const wobble = Math.sin(whackPhase * 4 + idx) * 2;
            const my = h.y - 46 * mole.pop + (mole.hit ? 8 : wobble);

            // --- TAUPE CUTE 3D ENRICHIE ---
            ctx.save();
            ctx.translate(h.x, my);

            // 1. Petites oreilles rondes
            ctx.fillStyle = "#78350f";
            ctx.strokeStyle = "#451a03";
            ctx.lineWidth = 2.5;
            // Oreille gauche
            ctx.beginPath();
            ctx.arc(-26, -32, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "#f472b6";
            ctx.beginPath();
            ctx.arc(-26, -32, 6, 0, Math.PI * 2);
            ctx.fill();
            // Oreille droite
            ctx.fillStyle = "#78350f";
            ctx.beginPath();
            ctx.arc(26, -32, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "#f472b6";
            ctx.beginPath();
            ctx.arc(26, -32, 6, 0, Math.PI * 2);
            ctx.fill();

            // 2. Corps / Tête pelucheuse avec dégradé doux
            const furGrad = ctx.createRadialGradient(0, -18, 6, 0, -12, 42);
            furGrad.addColorStop(0, "#b45309");
            furGrad.addColorStop(0.65, "#92400e");
            furGrad.addColorStop(1, "#712708");
            ctx.fillStyle = furGrad;
            ctx.strokeStyle = "#fef3c7";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.roundRect(-34, -40, 68, 66, [34, 34, 14, 14]);
            ctx.fill();
            ctx.stroke();

            // 3. Joues roses toutes mignonnes (blush kawaii)
            ctx.fillStyle = "rgba(251, 113, 133, 0.65)";
            ctx.beginPath();
            ctx.ellipse(-20, -12, 7, 5, 0, 0, Math.PI * 2);
            ctx.ellipse(20, -12, 7, 5, 0, 0, Math.PI * 2);
            ctx.fill();

            if (mole.hit) {
              // Yeux étourdis / winking
              ctx.strokeStyle = "#451a03";
              ctx.lineWidth = 3.5;
              ctx.beginPath();
              // Oeil gauche en étoile/croix
              ctx.moveTo(-16, -24); ctx.lineTo(-8, -16);
              ctx.moveTo(-8, -24); ctx.lineTo(-16, -16);
              // Oeil droit
              ctx.moveTo(8, -24); ctx.lineTo(16, -16);
              ctx.moveTo(16, -24); ctx.lineTo(8, -16);
              ctx.stroke();
            } else {
              // Grands yeux kawaii brillants
              ctx.fillStyle = "#0f172a";
              ctx.beginPath();
              ctx.arc(-13, -20, 6, 0, Math.PI * 2);
              ctx.arc(13, -20, 6, 0, Math.PI * 2);
              ctx.fill();

              // Reflets lumineux dans les yeux
              ctx.fillStyle = "#ffffff";
              ctx.beginPath();
              ctx.arc(-15, -22, 2.2, 0, Math.PI * 2);
              ctx.arc(11, -22, 2.2, 0, Math.PI * 2);
              ctx.arc(-11, -18, 1.2, 0, Math.PI * 2);
              ctx.arc(15, -18, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }

            // 4. Museau & Truffe rose en forme de cœur
            ctx.fillStyle = "#fbcfe8";
            ctx.beginPath();
            ctx.ellipse(0, -9, 13, 9, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#ec4899";
            ctx.beginPath();
            ctx.ellipse(0, -12, 6, 4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Sourire amical avec 2 petites quenottes blanches
            ctx.strokeStyle = "#831843";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, -7, 6, 0.15 * Math.PI, 0.85 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(-3, -5, 2.5, 3.5);
            ctx.fillRect(0.5, -5, 2.5, 3.5);

            // 5. Pancarte / Panneau 3D en bois doré tenant la lettre
            const signGrad = ctx.createLinearGradient(0, 0, 0, 38);
            signGrad.addColorStop(0, "#fffbeb");
            signGrad.addColorStop(1, "#fef3c7");
            ctx.fillStyle = signGrad;
            ctx.strokeStyle = "#d97706";
            ctx.lineWidth = 3.5;
            ctx.beginPath();
            ctx.roundRect(-30, 2, 60, 38, 12);
            ctx.fill();
            ctx.stroke();

            // Clous dorés aux 4 coins de la pancarte
            ctx.fillStyle = "#b45309";
            [[-24, 7], [24, 7], [-24, 34], [24, 34]].forEach(([cx, cy]) => {
              ctx.beginPath();
              ctx.arc(cx, cy, 1.8, 0, Math.PI * 2);
              ctx.fill();
            });

            // Lettre cible vibrante et lisible avec ombre 3D
            ctx.fillStyle = "rgba(79, 70, 229, 0.22)";
            ctx.font = "900 27px Cairo, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(mole.letter, 1, 23);

            ctx.fillStyle = "#4338ca";
            ctx.fillText(mole.letter, 0, 21);

            // 6. Petites pattes pelucheuses tenant le bord de la pancarte
            ctx.fillStyle = "#92400e";
            ctx.strokeStyle = "#451a03";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(-26, 0, 12, 10, 5);
            ctx.roundRect(14, 0, 12, 10, 5);
            ctx.fill();
            ctx.stroke();

            ctx.restore();
          }
        }

        // Rebord de terre 3D devant le terrier
        ctx.strokeStyle = "#78350f";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.arc(h.x, h.y + 3, 55, 0.14 * Math.PI, 0.86 * Math.PI);
        ctx.stroke();

        ctx.strokeStyle = "#92400e";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(h.x, h.y + 1, 55, 0.16 * Math.PI, 0.84 * Math.PI);
        ctx.stroke();

        // Petits brins d'herbe frais autour du trou
        ctx.strokeStyle = "#16a34a";
        ctx.lineWidth = 2.5;
        [[-42, 1], [-35, 6], [36, 5], [44, 0]].forEach(([gx, gy]) => {
          ctx.beginPath();
          ctx.moveTo(h.x + gx, h.y + gy);
          ctx.lineTo(h.x + gx + 3, h.y + gy - 10);
          ctx.stroke();
        });
      });

      // Particules flottantes lors des réussites
      for (let i = floatParticles.length - 1; i >= 0; i--) {
        const p = floatParticles[i];
        p.y -= p.vy;
        p.alpha -= 0.025;
        p.scale += 0.02;
        if (p.alpha <= 0) {
          floatParticles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.font = "900 24px Cairo, sans-serif";
        ctx.fillStyle = p.color;
        ctx.textAlign = "center";
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();
      }

      rafId = requestAnimationFrame(renderWhack);
    }

    rafId = requestAnimationFrame(renderWhack);

    return () => {
      running = false;
      clearTimeout(waveTimer);
      if (rafId) cancelAnimationFrame(rafId);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }

  /* =========================================================
     JEU 6 : LA TOUR DES NOMBRES 1 -> 10 (ARCHITECTURE 3D)
     ========================================================= */
  function startTowerGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let currentTop = 1;
    let lastCorrectSide = -1;
    let balloons = [];
    let droppingBlock = null;
    let floatTick = 0;

    function spawnBalloons() {
      const nextVal = currentTop + 1;
      const nextObj = db.numbers[nextVal - 1];
      const pool = db.numbers.filter((n) => n.value !== nextVal);
      const distractor = pool[Math.floor(Math.random() * pool.length)];

      // Alterner le côté (gauche / droite) à chaque nouvel étage
      const correctSide = lastCorrectSide === 0 ? 1 : (lastCorrectSide === 1 ? 0 : Math.floor(Math.random() * 2));
      lastCorrectSide = correctSide;

      const pair = [null, null];
      pair[correctSide] = { numObj: nextObj, isCorrect: true };
      pair[1 - correctSide] = { numObj: distractor, isCorrect: false };

      balloons = pair.map((item, idx) => ({
        side: idx,
        numObj: item.numObj,
        isCorrect: item.isCorrect,
        shake: 0
      }));

      speakPrompt(nextObj.word, nextObj.display);
    }

    function onCanvasClick(e) {
      if (droppingBlock) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const W = canvas.width;
      const H = canvas.height;

      balloons.forEach((b) => {
        const bx = W / 2 + (b.side === 0 ? -120 : 120);
        const by = H * 0.26 + Math.sin(floatTick + b.side * 2) * 8;
        if (Math.hypot(px - bx, py - by) < 78) {
          if (b.isCorrect) {
            SFX.pop();
            droppingBlock = {
              x: bx,
              y: by,
              targetX: W / 2,
              targetY: H * 0.66,
              numObj: b.numObj
            };
          } else {
            SFX.error();
            b.shake = 16;
          }
        }
      });
    }
    canvas.addEventListener("click", onCanvasClick);

    spawnBalloons();

    function renderTower() {
      if (!running) return;
      const W = canvas.width;
      const H = canvas.height;
      floatTick += 0.05;

      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#0284c7");
      sky.addColorStop(0.7, "#7dd3fc");
      sky.addColorStop(1, "#e0f2fe");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      drawCloud(ctx, W * 0.15, H * 0.18, 1);
      drawCloud(ctx, W * 0.78, H * 0.22, 0.85);

      ctx.fillStyle = "#22c55e";
      ctx.fillRect(0, H * 0.88, W, H * 0.12);

      const floorW = Math.min(196, W * 0.36);
      const floorH = 48;
      const visibleFloors = Math.min(currentTop, 4);
      const floorColors = ["#2563eb", "#d97706", "#db2777", "#7c3aed", "#059669"];

      for (let i = 0; i < visibleFloors; i++) {
        const floorNum = currentTop - (visibleFloors - 1 - i);
        const fy = H * 0.88 - (i + 1) * floorH;
        const col = floorColors[(floorNum - 1) % floorColors.length];

        ctx.fillStyle = col;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.roundRect(W / 2 - floorW / 2, fy, floorW, floorH, 8);
        ctx.fill();
        ctx.stroke();

        // Fenêtres éclairées sur les côtés de l'étage
        ctx.fillStyle = "#fef08a";
        ctx.fillRect(W / 2 - floorW * 0.38, fy + 12, 20, 22);
        ctx.fillRect(W / 2 + floorW * 0.38 - 20, fy + 12, 20, 22);

        ctx.fillStyle = "#ffffff";
        ctx.font = "900 28px Cairo, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(db.numbers[floorNum - 1].display, W / 2, fy + floorH / 2);
      }

      if (!droppingBlock) {
        balloons.forEach((b) => {
          const shakeX = b.shake > 0 ? Math.sin(b.shake * 1.5) * 8 : 0;
          if (b.shake > 0) b.shake--;
          const bx = W / 2 + (b.side === 0 ? -120 : 120) + shakeX;
          const by = H * 0.27 + Math.sin(floatTick + b.side * 2) * 8;

          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(bx, by - 55);
          ctx.lineTo(bx, by - 24);
          ctx.stroke();

          ctx.fillStyle = b.side === 0 ? "#ef4444" : "#a855f7";
          ctx.beginPath();
          ctx.arc(bx, by - 78, 28, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#facc15";
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.roundRect(bx - 68, by - 24, 136, 54, 14);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#0f172a";
          ctx.font = "900 32px Cairo, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(b.numObj.display, bx, by + 3);
        });
      } else {
        droppingBlock.x += (droppingBlock.targetX - droppingBlock.x) * 0.2;
        droppingBlock.y += 12;
        const targetTopY = H * 0.88 - (Math.min(currentTop, 4) + 1) * floorH;

        ctx.fillStyle = "#22c55e";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(droppingBlock.x - floorW / 2, droppingBlock.y, floorW, floorH, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "900 28px Cairo, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(droppingBlock.numObj.display, droppingBlock.x, droppingBlock.y + floorH / 2);

        if (droppingBlock.y >= targetTopY) {
          SFX.success();
          currentTop++;
          droppingBlock = null;
          const won = advanceProgress();
          if (!won && currentTop < 10) {
            spawnBalloons();
          }
        }
      }

      rafId = requestAnimationFrame(renderTower);
    }

    rafId = requestAnimationFrame(renderTower);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }

  /* =========================================================
     JEU 7 : LA DÉFENSE DU CHÂTEAU (OASIS DU DÉSERT & CANON)
     ========================================================= */
  function startCastleGame() {
    const db = getDB();
    let running = true;
    let rafId = null;
    let targetNumObj = null;
    let lastCastleVal = -1;
    let lastCorrectCardIdx = -1;
    let monsterY = 0.2;
    let projectile = null;
    let explosionStars = [];
    let walkTick = 0;

    overlayUI.innerHTML = `
      <div></div>
      <div class="bottom-cards-bar interactive-el" id="castleCardsBar" dir="ltr"></div>
    `;
    const cardsBar = document.getElementById("castleCardsBar");

    function spawnMonster() {
      const candidates = db.numbers.filter(n => n.value !== lastCastleVal);
      targetNumObj = (candidates.length > 0 ? candidates : db.numbers)[Math.floor(Math.random() * (candidates.length || db.numbers.length))];
      lastCastleVal = targetNumObj.value;
      monsterY = 0.22;
      projectile = null;

      const distractors = shuffle(db.numbers.filter((n) => n.value !== targetNumObj.value)).slice(0, 3);

      // La bonne carte change obligatoirement de position à chaque monstre
      const allowedCardIndices = [0, 1, 2, 3].filter(idx => idx !== lastCorrectCardIdx);
      const targetCardIdx = allowedCardIndices[Math.floor(Math.random() * allowedCardIndices.length)];
      lastCorrectCardIdx = targetCardIdx;

      const choices = [null, null, null, null];
      choices[targetCardIdx] = targetNumObj;
      let dIdx = 0;
      for (let i = 0; i < 4; i++) {
        if (choices[i] === null) {
          choices[i] = distractors[dIdx++];
        }
      }

      speakPrompt(db.ui.countRedDots, targetNumObj.display);

      cardsBar.innerHTML = "";
      choices.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-card-btn";
        btn.textContent = opt.display;
        btn.addEventListener("click", () => handleCardChoice(opt, btn));
        cardsBar.appendChild(btn);
      });
    }

    function handleCardChoice(opt, btnEl) {
      if (projectile) return;
      if (opt.value === targetNumObj.value) {
        SFX.shoot();
        btnEl.classList.add("correct-flash");
        projectile = { y: 0.75 };
      } else {
        SFX.error();
        btnEl.classList.add("shake-error");
        setTimeout(() => btnEl.classList.remove("shake-error"), 450);
      }
    }

    spawnMonster();

    function renderCastle() {
      if (!running) return;
      walkTick += 0.1;
      const W = canvas.width;
      const H = canvas.height;

      // Désert doré
      const desertGrad = ctx.createLinearGradient(0, 0, 0, H);
      desertGrad.addColorStop(0, "#fef08a");
      desertGrad.addColorStop(1, "#f59e0b");
      ctx.fillStyle = desertGrad;
      ctx.fillRect(0, 0, W, H);

      // Sentier sablonneux bordé de pierres
      ctx.fillStyle = "#fde68a";
      ctx.beginPath();
      ctx.moveTo(W * 0.41, H * 0.16);
      ctx.lineTo(W * 0.59, H * 0.16);
      ctx.lineTo(W * 0.72, H);
      ctx.lineTo(W * 0.28, H);
      ctx.closePath();
      ctx.fill();

      // Palmiers du désert
      [W * 0.16, W * 0.84].forEach((px) => {
        ctx.fillStyle = "#92400e";
        ctx.fillRect(px - 7, H * 0.36, 14, 70);
        ctx.fillStyle = "#16a34a";
        for (let a = 0; a < 5; a++) {
          ctx.beginPath();
          ctx.ellipse(px + (a - 2) * 14, H * 0.35, 22, 8, (a - 2) * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Château oriental au fond
      ctx.fillStyle = "#d97706";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 85, H * 0.03, 170, H * 0.13, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.03, 30, Math.PI, 0);
      ctx.fill();

      if (!projectile && monsterY < 0.58) {
        monsterY += 0.0009;
      }

      const mx = W / 2 + Math.sin(walkTick) * 6;
      const my = H * monsterY;

      if (!projectile || projectile.y > monsterY) {
        // Pancarte blanche avec 1 à 10 pois rouges
        const signW = 154;
        const signH = 68;
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.roundRect(mx - signW / 2, my - 106, signW, signH, 16);
        ctx.fill();
        ctx.stroke();

        const dots = targetNumObj.value;
        ctx.fillStyle = "#ef4444";
        for (let i = 0; i < dots; i++) {
          const r = Math.floor(i / 5);
          const c = i % 5;
          const rowCols = r === 1 ? dots - 5 : Math.min(5, dots);
          const dx = mx + (c - (rowCols - 1) / 2) * 25;
          const dy = my - 106 + (dots > 5 ? (r === 0 ? 22 : 46) : 34);
          ctx.beginPath();
          ctx.arc(dx, dy, 8.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Petit monstre vert rigolo avec cornes
        ctx.fillStyle = "#22c55e";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(mx, my, 32, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(mx, my - 5, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(mx, my - 5, 5.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (projectile) {
        projectile.y -= 0.025;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(W / 2, H * projectile.y, 15, 0, Math.PI * 2);
        ctx.fill();

        if (projectile.y <= monsterY) {
          SFX.success();
          speakPrompt(targetNumObj.word);
          for (let s = 0; s < 16; s++) {
            explosionStars.push({
              x: mx,
              y: my,
              vx: (Math.random() - 0.5) * 10,
              vy: (Math.random() - 0.5) * 10,
              life: 30
            });
          }
          projectile = null;
          const won = advanceProgress();
          if (!won) setTimeout(spawnMonster, 750);
        }
      }

      explosionStars.forEach((st) => {
        st.x += st.vx;
        st.y += st.vy;
        st.life--;
        ctx.font = "24px sans-serif";
        ctx.fillText("⭐", st.x, st.y);
      });
      explosionStars = explosionStars.filter((s) => s.life > 0);

      const cy = H * 0.77;
      ctx.fillStyle = "#1e293b";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 22, cy - 40, 44, 48, 12);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#b45309";
      ctx.beginPath();
      ctx.arc(W / 2 - 26, cy + 4, 15, 0, Math.PI * 2);
      ctx.arc(W / 2 + 26, cy + 4, 15, 0, Math.PI * 2);
      ctx.fill();

      rafId = requestAnimationFrame(renderCastle);
    }

    rafId = requestAnimationFrame(renderCastle);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }

  /* =========================================================
     INITIALISATION DES ÉVÉNEMENTS GLOBAUX
     ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    updateCurrencyUI();
    renderHub();

    document.getElementById("exitGameBtn").addEventListener("click", returnToHub);
    document.getElementById("backToHubBtn").addEventListener("click", returnToHub);
    document.getElementById("playAgainBtn").addEventListener("click", () => {
      if (activeGameId) launchGame(activeGameId);
    });
    document.getElementById("replaySoundBtn").addEventListener("click", () => {
      if (currentPromptSpeech) speakPrompt(currentPromptSpeech, currentPromptDisplay);
    });
  });

  window.addEventListener("appLanguageChanged", () => {
    returnToHub();
    renderHub();
  });
})();
