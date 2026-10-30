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
    const isAr = false;
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

    const isRTL = false;
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
