/**
 * Fenncky & FennyGo3 — Système Simple vs Système OCR (Caméra & Support Miroir Fenncky)
 * Gère :
 * 1. Le choix au clic sur "Open Kids Learner" :
 *    - 1. Système Simple (navigation classique actuelle)
 *    - 2. Système OCR (calibrage caméra + délimitation de la zone OCR + activités pilotées par caméra/OCR)
 * 2. Le calibrage de la caméra avec 3 modes :
 *    - Caméra Avant (front : facingMode "user")
 *    - Caméra Arrière (back : facingMode "environment")
 *    - Caméra Fenncky (fenncky : utilise la caméra avant inversée pour le support miroir placé devant la caméra)
 * 3. La délimitation interactive (drag & resize) de la zone (ROI) où l'enfant pose des lettres ou écrit.
 * 4. Le moteur OCR temps réel (analyse par canevas + Tesseract.js optionnel + pont d'interaction sur toutes les pages de Category).
 */
(function (global) {
  "use strict";

  const MODE_STORAGE_KEY = "fenncky_system_mode"; // "simple" | "ocr"
  const CONFIG_STORAGE_KEY = "fenncky_ocr_config_v5";

  const DEFAULT_CONFIG = {
    cameraType: "fenncky", // "front" | "back" | "fenncky"
    mirrorY: true,         // Inversion verticale (haut/bas) pour le support miroir
    mirrorX: true,         // Inversion horizontale (gauche/droite) pour remettre les lettres à l'endroit (D, F, X, C, V)
    roi: {
      x: 0,
      y: 0,
      w: 1,
      h: 1
    },
    calibrated: false
  };

  const I18N = {
    French: {
      modalChoiceBadge: "🦊 Kids Learner · Choix du Mode d'Apprentissage",
      modalChoiceTitle: "Comment souhaitez-vous utiliser Kids Learner ?",
      modalChoiceSub: "Choisissez entre le mode interactif classique ou le mode Caméra & Reconnaissance OCR.",
      sys1Badge: "Option 1 · Classique",
      sys1Title: "1. Système Simple",
      sys1Desc: "La page Catégorie et toutes les activités (Cours, Jeux, Traçage, Test, Histoires) fonctionnent de manière tactile ou à la souris comme actuellement.",
      sys1Features: [
        "✓ Accès direct à la page Catégorie",
        "✓ Navigation tactile, souris et voix natives",
        "✓ Sans activation de la caméra"
      ],
      sys1Btn: "Lancer le Système Simple →",

      sys2Badge: "Option 2 · Vision IA & Miroir",
      sys2Title: "2. Système OCR (Caméra)",
      sys2Desc: "Toutes les pages de Catégorie fonctionnent avec la caméra et le système OCR pour lire les lettres posées ou écrites par l'enfant.",
      sys2Features: [
        "✓ Calibrage de la zone où poser / écrire les lettres",
        "✓ 3 modes : Caméra Avant, Arrière ou Caméra Fenncky (Miroir)",
        "✓ Validation OCR interactive dans les cours, jeux, traçage et tests"
      ],
      sys2Btn: "Calibrer la Caméra & Lancer l'OCR 📷",

      calibBadge: "📷 Système 2 · Calibrage Caméra & Zone OCR",
      calibTitle: "Calibrer la Caméra et Délimiter la Zone d'Écriture",
      calibSub: "Choisissez votre caméra puis ajustez le cadre vert pour délimiter la zone où l'enfant posera ses lettres ou écrira.",
      camOptFrontTitle: "Caméra Avant",
      camOptFrontDesc: "Caméra frontale standard de l'appareil",
      camOptBackTitle: "Caméra Arrière",
      camOptBackDesc: "Caméra dorsale pointée vers la feuille",
      camOptFennckyTitle: "Caméra Fenncky (Miroir)",
      camOptFennckyDesc: "Caméra avant inversée pour le support miroir placé devant l'écran",
      mirrorControlsLabel: "Ajustement de l'inversion miroir (Support Fenncky) :",
      flipVertBtn: "⇅ Inverser Haut/Bas (Miroir)",
      flipHorizBtn: "⇄ Inverser Gauche/Droite",
      presetZoneLabel: "Zones prédéfinies :",
      presetDesk: "📐 Zone Table (Miroir)",
      presetCenter: "🔲 Zone Centrale",
      presetCard: "🃏 Carte Lettre",
      roiInstruction: "Glissez le cadre ou ses 4 coins pour délimiter la zone où poser/écrire les lettres",
      croppedPreviewTitle: "Aperçu de la Zone OCR Délimitée (Vue redressée)",
      croppedPreviewHint: "C'est uniquement cette zone encadrée qui sera lue par l'OCR.",
      testOcrBtn: "🔍 Tester l'OCR sur la zone",
      backToChoiceBtn: "← Retour au choix",
      confirmCalibBtn: "Valider le Calibrage & Ouvrir Catégorie (OCR) 🚀",
      camActiveStatus: "Flux caméra actif",
      camSimStatus: "Mode Simulation / Ardoise OCR actif (Dessinez dans la zone ou activez la webcam)",

      catBannerTitle: "Système OCR Actif",
      catBannerCamFront: "📱 Caméra Avant",
      catBannerCamBack: "📷 Caméra Arrière",
      catBannerCamFenncky: "🦊 Caméra Fenncky (Support Miroir)",
      catBannerRecalibBtn: "🎯 Calibrer la Caméra / Zone",
      catBannerSwitchSimpleBtn: "🖥️ Passer au Système Simple",
      catBannerSwitchOcrBtn: "📷 Activer le Système OCR",

      hudTitle: "Scanner OCR Fenncky",
      hudZoneLabel: "Zone délimitée active",
      hudScanBtn: "📷 Lire la Zone (OCR)",
      hudAutoBtn: "Auto",
      hudClearPadBtn: "Effacer",
      hudCalibBtn: "🎯 Calibrer",
      hudDrawHint: "Posez une lettre devant la caméra dans la zone verte (ou écrivez-la directement dans le cadre) :",
      hudDetectedPrefix: "OCR détecté : ",
      hudNoMatch: "Aucune lettre détectée, réessayez dans la zone.",
      hudQuickTestLabel: "Simulation rapide de lettre posée dans la zone :"
    },
    English: {
      modalChoiceBadge: "🦊 Kids Learner · Learning System Selection",
      modalChoiceTitle: "How would you like to use Kids Learner?",
      modalChoiceSub: "Choose between the classic interactive system or the Camera & OCR Recognition system.",
      sys1Badge: "Option 1 · Classic",
      sys1Title: "1. Simple System",
      sys1Desc: "The Category page and all activities (Courses, Games, Tracing, Test, Stories) work with touch or mouse just as they currently do.",
      sys1Features: [
        "✓ Direct access to the Category page",
        "✓ Touch, mouse, and native voice navigation",
        "✓ No camera required"
      ],
      sys1Btn: "Launch Simple System →",

      sys2Badge: "Option 2 · AI Vision & Mirror",
      sys2Title: "2. OCR System (Camera)",
      sys2Desc: "All pages inside Category work with the camera and OCR system to read physical letters placed or written by the child.",
      sys2Features: [
        "✓ Calibrate the zone where letters are placed or written",
        "✓ 3 modes: Front Camera, Rear Camera, or Fenncky Camera (Mirror)",
        "✓ Interactive OCR validation across courses, games, tracing & tests"
      ],
      sys2Btn: "Calibrate Camera & Launch OCR 📷",

      calibBadge: "📷 System 2 · Camera & OCR Zone Calibration",
      calibTitle: "Calibrate Camera & Delimit the Writing / Letter Zone",
      calibSub: "Select your camera option, then drag or resize the green box to delimit where the child will place or write letters.",
      camOptFrontTitle: "Front Camera",
      camOptFrontDesc: "Standard front-facing camera",
      camOptBackTitle: "Rear Camera",
      camOptBackDesc: "Back camera pointed at the desk",
      camOptFennckyTitle: "Fenncky Camera (Mirror)",
      camOptFennckyDesc: "Front camera inverted for the mirror stand placed in front of the camera",
      mirrorControlsLabel: "Mirror inversion adjustment (Fenncky Stand):",
      flipVertBtn: "⇅ Flip Vertical (Mirror)",
      flipHorizBtn: "⇄ Flip Horizontal",
      presetZoneLabel: "Quick zone presets:",
      presetDesk: "📐 Desk Zone (Mirror)",
      presetCenter: "🔲 Center Zone",
      presetCard: "🃏 Letter Card",
      roiInstruction: "Drag the box or its 4 corners to delimit the zone where letters are placed or written",
      croppedPreviewTitle: "Delimited OCR Zone Preview (Corrected View)",
      croppedPreviewHint: "Only this delimited zone will be analyzed by the OCR engine.",
      testOcrBtn: "🔍 Test OCR on Zone",
      backToChoiceBtn: "← Back to choices",
      confirmCalibBtn: "Save Calibration & Open Category (OCR) 🚀",
      camActiveStatus: "Live camera active",
      camSimStatus: "Simulation / OCR Slate active (Draw inside the zone or allow webcam)",

      catBannerTitle: "OCR System Active",
      catBannerCamFront: "📱 Front Camera",
      catBannerCamBack: "📷 Rear Camera",
      catBannerCamFenncky: "🦊 Fenncky Camera (Mirror Stand)",
      catBannerRecalibBtn: "🎯 Calibrate Camera / Zone",
      catBannerSwitchSimpleBtn: "🖥️ Switch to Simple System",
      catBannerSwitchOcrBtn: "📷 Switch to OCR System",

      hudTitle: "Fenncky OCR Scanner",
      hudZoneLabel: "Calibrated zone active",
      hudScanBtn: "📷 Scan Zone (OCR)",
      hudAutoBtn: "Auto",
      hudClearPadBtn: "Clear",
      hudCalibBtn: "🎯 Calibrate",
      hudDrawHint: "Place a letter in the green camera zone (or write it directly inside the box):",
      hudDetectedPrefix: "OCR detected: ",
      hudNoMatch: "No letter detected, try again inside the zone.",
      hudQuickTestLabel: "Quick simulation of a letter placed in the zone:"
    }
  };

  function getLangId() {
    if (global.AppLang && typeof global.AppLang.getCurrentLangId === "function") {
      return global.AppLang.getCurrentLangId();
    }
    const saved = localStorage.getItem("selectedLanguage");
    return saved === "French" ? "French" : "English";
  }

  function getCopy() {
    return I18N[getLangId()] || I18N.English;
  }

  function getSystemMode() {
    const path = (window.location.pathname || "").toLowerCase();
    if (path.endsWith("category-ocr.html")) {
      localStorage.setItem(MODE_STORAGE_KEY, "ocr");
      return "ocr";
    }
    if (path.endsWith("category.html")) {
      localStorage.setItem(MODE_STORAGE_KEY, "simple");
      return "simple";
    }
    const params = new URLSearchParams(window.location.search);
    const urlSys = params.get("system");
    if (urlSys === "ocr" || urlSys === "simple") {
      localStorage.setItem(MODE_STORAGE_KEY, urlSys);
      return urlSys;
    }
    return localStorage.getItem(MODE_STORAGE_KEY) || "simple";
  }

  function setSystemMode(mode) {
    const clean = mode === "ocr" ? "ocr" : "simple";
    localStorage.setItem(MODE_STORAGE_KEY, clean);
    window.dispatchEvent(new CustomEvent("fennckySystemModeChanged", { detail: { mode: clean } }));
  }

  function getOcrConfig() {
    try {
      const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          cameraType: parsed.cameraType || DEFAULT_CONFIG.cameraType,
          deviceId: parsed.deviceId || "",
          mirrorY: typeof parsed.mirrorY === "boolean" ? parsed.mirrorY : DEFAULT_CONFIG.mirrorY,
          mirrorX: typeof parsed.mirrorX === "boolean" ? parsed.mirrorX : DEFAULT_CONFIG.mirrorX,
          roi: { x: 0, y: 0, w: 1, h: 1 },
          calibrated: Boolean(parsed.calibrated)
        };
      }
    } catch (_) {}
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  function saveOcrConfig(cfg) {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(cfg));
    window.dispatchEvent(new CustomEvent("fennckyOcrConfigUpdated", { detail: cfg }));
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  /* =========================================================
     STYLES CSS INJECTÉS POUR LES MODALES & LE SCANNER OCR
     ========================================================= */
  function injectStyles() {
    if (document.getElementById("fennckyOcrSystemStyles")) return;
    const style = document.createElement("style");
    style.id = "fennckyOcrSystemStyles";
    style.textContent = `
      .focr-backdrop {
        position: fixed;
        inset: 0;
        z-index: 10000;
        background: rgba(6, 32, 24, 0.78);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        font-family: "Nunito", "Cairo", sans-serif;
      }
      .focr-backdrop.hidden {
        display: none !important;
      }
      .focr-modal-card {
        width: min(96vw, 920px);
        max-height: 94dvh;
        overflow-y: auto;
        background: #fffcf6;
        border: 3px solid #dec28f;
        border-bottom: 7px solid #c59f5f;
        border-radius: 28px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        padding: clamp(14px, 2.5vw, 24px);
        color: #1e293b;
        position: relative;
      }
      .focr-close-btn {
        position: absolute;
        top: 12px;
        right: 14px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #dec28f;
        background: #ffffff;
        color: #78350f;
        font-size: 20px;
        font-weight: 900;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .focr-close-btn:hover {
        transform: scale(1.08);
        background: #fef3c7;
      }
      .focr-choice-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 14px;
      }
      @media (max-width: 720px) {
        .focr-choice-grid {
          grid-template-columns: 1fr;
        }
      }
      .focr-system-card {
        background: #ffffff;
        border: 2.5px solid #e2e8f0;
        border-bottom: 6px solid #cbd5e1;
        border-radius: 22px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 12px;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        cursor: pointer;
      }
      .focr-system-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
      }
      .focr-system-card.sys-simple {
        border-color: #93c5fd;
        border-bottom-color: #2563eb;
        background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
      }
      .focr-system-card.sys-ocr {
        border-color: #6ee7b7;
        border-bottom-color: #059669;
        background: linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%);
      }
      .focr-cam-options {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        margin: 12px 0;
      }
      @media (max-width: 680px) {
        .focr-cam-options {
          grid-template-columns: 1fr;
        }
      }
      .focr-cam-btn {
        text-align: left;
        padding: 10px 12px;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        border-bottom: 4px solid #cbd5e1;
        background: #ffffff;
        cursor: pointer;
        transition: all 0.15s ease;
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .focr-cam-btn.active {
        border-color: #059669;
        border-bottom-color: #065f46;
        background: #ecfdf5;
        box-shadow: 0 4px 12px rgba(5, 150, 105, 0.18);
      }
      .focr-calib-stage-grid {
        display: grid;
        grid-template-columns: 1.35fr 0.85fr;
        gap: 14px;
        align-items: stretch;
      }
      @media (max-width: 780px) {
        .focr-calib-stage-grid {
          grid-template-columns: 1fr;
        }
      }
      .focr-video-viewport {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #0f172a;
        border-radius: 20px;
        border: 3px solid #334155;
        overflow: hidden;
        user-select: none;
        touch-action: none;
      }
      .focr-video-el {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.25s ease;
      }
      .focr-roi-box {
        position: absolute;
        border: 3px dashed #22c55e;
        background: rgba(34, 197, 94, 0.14);
        box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.52), inset 0 0 14px rgba(34, 197, 94, 0.45);
        border-radius: 12px;
        cursor: move;
        touch-action: none;
      }
      .focr-roi-label {
        position: absolute;
        top: -24px;
        left: 50%;
        transform: translateX(-50%);
        background: #16a34a;
        color: #ffffff;
        font-size: 10.5px;
        font-weight: 900;
        padding: 2px 9px;
        border-radius: 999px;
        white-space: nowrap;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      }
      .focr-handle {
        position: absolute;
        width: 18px;
        height: 18px;
        background: #facc15;
        border: 2.5px solid #065f46;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.35);
      }
      .focr-handle.nw { top: -9px; left: -9px; cursor: nwse-resize; }
      .focr-handle.ne { top: -9px; right: -9px; cursor: nesw-resize; }
      .focr-handle.sw { bottom: -9px; left: -9px; cursor: nesw-resize; }
      .focr-handle.se { bottom: -9px; right: -9px; cursor: nwse-resize; }

      /* Category Top OCR Status Bar */
      .focr-category-banner {
        width: min(94vw, 980px);
        margin: 4px auto 6px;
        padding: 7px 14px;
        border-radius: 999px;
        background: rgba(255, 252, 246, 0.96);
        border: 2px solid #059669;
        border-bottom: 4px solid #065f46;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        z-index: 40;
        font-family: "Nunito", "Cairo", sans-serif;
      }
      .focr-card-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        background: linear-gradient(135deg, #059669, #047857);
        color: #ffffff;
        font-size: 10px;
        font-weight: 900;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1.5px solid #a7f3d0;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        pointer-events: none;
        z-index: 5;
      }

      /* Floating OCR HUD on Activity Pages */
      .focr-hud-dock {
        position: fixed;
        bottom: 14px;
        right: 84px;
        left: auto;
        z-index: 9500;
        width: min(90vw, 310px);
        background: #fffcf6;
        border: 2.5px solid #059669;
        border-bottom: 6px solid #065f46;
        border-radius: 22px;
        box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);
        font-family: "Nunito", "Cairo", sans-serif;
        overflow: hidden;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }
      .focr-hud-dock.minimized {
        width: auto;
        border-radius: 999px;
      }
      .focr-hud-dock.minimized .focr-hud-body {
        display: none;
      }
      .focr-hud-header {
        background: linear-gradient(135deg, #065f46, #059669);
        color: #ffffff;
        padding: 7px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        cursor: pointer;
      }
      .focr-hud-body {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .focr-hud-cam-box {
        position: relative;
        width: 100%;
        height: 138px;
        background: #0f172a;
        border-radius: 14px;
        border: 2px solid #334155;
        overflow: hidden;
      }
      .focr-hud-roi-frame {
        position: absolute;
        border: 2.5px dashed #4ade80;
        background: rgba(74, 222, 128, 0.1);
        box-shadow: 0 0 0 999px rgba(15, 23, 42, 0.55);
        border-radius: 8px;
        pointer-events: none;
      }
      .focr-hud-pad-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        cursor: crosshair;
        touch-action: none;
      }
      .focr-laser {
        position: absolute;
        left: 0;
        right: 0;
        height: 3px;
        background: #22d3ee;
        box-shadow: 0 0 12px #22d3ee;
        animation: focrLaserMove 0.9s ease-in-out infinite alternate;
      }
      @keyframes focrLaserMove {
        0% { top: 15%; }
        100% { top: 85%; }
      }
    `;
    document.head.appendChild(style);
  }

  /* =========================================================
     TRANSFORM CSS SELON LE TYPE DE CAMÉRA (AVANT / ARRIÈRE / FENNCKY MIROIR)
     ========================================================= */
  function getVideoTransformCSS(cfg) {
    if (cfg.cameraType === "fenncky") {
      const sx = cfg.mirrorX !== false ? -1 : 1; // Inversion horizontale (gauche/droite)
      const sy = cfg.mirrorY !== false ? -1 : 1; // Inversion verticale (haut/bas)
      return `scale(${sx}, ${sy})`;
    }
    const sx = cfg.mirrorX === true ? -1 : 1;
    const sy = cfg.mirrorY === true ? -1 : 1;
    return `scale(${sx}, ${sy})`;
  }

  /**
   * Découpe la zone ROI d'une source vidéo ou canevas en appliquant la double inversion
   * (verticale + horizontale : scale(-1, -1)) de la Caméra Fenncky (support miroir).
   */
  function drawRoiFromSourceToCanvas(srcEl, isLiveVideo, cfg, targetCanvas) {
    if (!srcEl || !targetCanvas) return;
    const cCtx = targetCanvas.getContext("2d", { willReadFrequently: true });
    const cw = targetCanvas.width;
    const ch = targetCanvas.height;

    cCtx.fillStyle = "#ffffff";
    cCtx.fillRect(0, 0, cw, ch);

    const srcW = isLiveVideo ? (srcEl.videoWidth || 480) : (srcEl.width || 480);
    const srcH = isLiveVideo ? (srcEl.videoHeight || 300) : (srcEl.height || 300);
    if (srcW <= 0 || srcH <= 0) return;

    const flipY = isLiveVideo && (cfg.cameraType === "fenncky" ? cfg.mirrorY !== false : cfg.mirrorY === true);
    const flipX = isLiveVideo && (cfg.cameraType === "fenncky" ? cfg.mirrorX !== false : cfg.mirrorX === true);

    // Coordonnées dans la frame brute avant inversion CSS
    const normX = flipX ? (1 - cfg.roi.x - cfg.roi.w) : cfg.roi.x;
    const normY = flipY ? (1 - cfg.roi.y - cfg.roi.h) : cfg.roi.y;

    const sx = clamp(normX, 0, 1) * srcW;
    const sy = clamp(normY, 0, 1) * srcH;
    const sw = clamp(cfg.roi.w, 0.05, 1) * srcW;
    const sh = clamp(cfg.roi.h, 0.05, 1) * srcH;

    cCtx.save();
    if (flipX || flipY) {
      cCtx.translate(flipX ? cw : 0, flipY ? ch : 0);
      cCtx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
    }
    cCtx.drawImage(srcEl, sx, sy, sw, sh, 0, 0, cw, ch);
    cCtx.restore();
  }

  /* =========================================================
     1. MODALE DE CHOIX (1. SYSTÈME SIMPLE | 2. SYSTÈME OCR)
        + ÉCRAN DE CALIBRAGE CAMÉRA & ZONE OCR
     ========================================================= */
  let activeCalibStream = null;
  let calibRafId = null;
  let calibSimChar = "A";

  function stopCalibStream() {
    if (calibRafId) {
      cancelAnimationFrame(calibRafId);
      calibRafId = null;
    }
    if (activeCalibStream) {
      activeCalibStream.getTracks().forEach((t) => t.stop());
      activeCalibStream = null;
    }
  }

  const VIRTUAL_CAM_REGEX = /animaze|facerig|virtual|obs|manycam|snap camera|xsplit|vcam|vtube|avatar/i;

  function isVirtualCameraLabel(label) {
    return VIRTUAL_CAM_REGEX.test(String(label || ""));
  }

  /**
   * Ouvre le flux caméra en ignorant automatiquement les caméras virtuelles (comme Animaze / OBS)
   * au profit de la vraie webcam physique, et en testant plusieurs contraintes successives.
   */
  async function acquireCameraStream(cfg) {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
      throw new Error("MEDIA_DEVICES_UNAVAILABLE");
    }

    const isBack = cfg.cameraType === "back";
    const facingMode = isBack ? "environment" : "user";
    const attempts = [];

    // 1. SUR MOBILE : Priorité absolue à facingMode "environment" (arrière) ou "user" (avant)
    // C'est le standard W3C sur Android/iOS pour activer la caméra dorsale sans dépendre d'un deviceId arbitraire.
    if (isBack) {
      attempts.push({
        video: {
          facingMode: { exact: "environment" },
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        },
        audio: false
      });
      attempts.push({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        },
        audio: false
      });
      attempts.push({
        video: { facingMode: "environment" },
        audio: false
      });
    } else {
      attempts.push({
        video: {
          facingMode: { exact: "user" },
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        },
        audio: false
      });
      attempts.push({
        video: {
          facingMode: { ideal: "user" },
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 }
        },
        audio: false
      });
      attempts.push({
        video: { facingMode: "user" },
        audio: false
      });
    }

    // 2. Si l'utilisateur a choisi un périphérique précis manuellement dans le menu déroulant
    if (cfg.deviceId) {
      attempts.push({
        video: { deviceId: { exact: cfg.deviceId }, width: { ideal: 1280, min: 640 }, height: { ideal: 720, min: 480 } },
        audio: false
      });
      attempts.push({
        video: { deviceId: { exact: cfg.deviceId } },
        audio: false
      });
    }

    // 3. Énumérer les périphériques physiques et placer en priorité ceux qui correspondent au type (Arrière vs Avant)
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoInputs = devices.filter((d) => d.kind === "videoinput" && d.deviceId);
      const realCams = videoInputs.filter((d) => d.label && !isVirtualCameraLabel(d.label));
      const unknownOrVirtualCams = videoInputs.filter((d) => !d.label || isVirtualCameraLabel(d.label));

      const isBackCam = (l) => /back|rear|environment|arri[eè]re|dorsale|camera2\s*0|facing\s*back/i.test(l || "");
      const isFrontCam = (l) => /front|user|avant|selfie|camera2\s*1|facing\s*front/i.test(l || "");

      const sortedCams = [...realCams].sort((a, b) => {
        const aLabel = a.label || "";
        const bLabel = b.label || "";
        if (isBack) {
          return (isBackCam(bLabel) ? 1 : 0) - (isBackCam(aLabel) ? 1 : 0);
        } else {
          return (isFrontCam(bLabel) ? 1 : 0) - (isFrontCam(aLabel) ? 1 : 0);
        }
      });

      sortedCams.forEach((d) => {
        attempts.push({
          video: { deviceId: { exact: d.deviceId }, width: { ideal: 1280, min: 640 }, height: { ideal: 720, min: 480 } },
          audio: false
        });
        attempts.push({
          video: { deviceId: { exact: d.deviceId } },
          audio: false
        });
      });

      unknownOrVirtualCams.forEach((d) => {
        attempts.push({ video: { deviceId: { exact: d.deviceId } }, audio: false });
      });
    } catch (_) {}

    // 4. Derniers recours tolérants
    attempts.push(
      { video: { facingMode: { ideal: facingMode }, width: { ideal: 1280, min: 640 }, height: { ideal: 720, min: 480 } }, audio: false },
      { video: { facingMode: facingMode }, audio: false },
      { video: true, audio: false }
    );

    let lastErr = null;
    for (const constraints of attempts) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (stream && stream.getVideoTracks().length > 0) {
          const track = stream.getVideoTracks()[0];
          const trackLabel = track.label || "";
          const settings = typeof track.getSettings === "function" ? track.getSettings() : {};
          const trackFacing = settings.facingMode || "";
          const isFrontLabel = /front|user|avant|selfie|camera2\s*1/i.test(trackLabel);
          const isBackLabel = /back|rear|environment|arri[eè]re|dorsale|camera2\s*0/i.test(trackLabel);

          // Si l'utilisateur a demandé la caméra arrière mais que le navigateur a ouvert la caméra frontale
          if (isBack && (trackFacing === "user" || isFrontLabel) && !isBackLabel) {
            try {
              const allDevices = await navigator.mediaDevices.enumerateDevices();
              const realBackCam = allDevices.find(
                (d) => d.kind === "videoinput" && d.deviceId && isBackCam(d.label)
              );
              if (realBackCam && realBackCam.deviceId !== settings.deviceId) {
                stream.getTracks().forEach((t) => t.stop());
                const backStream = await navigator.mediaDevices.getUserMedia({
                  video: { deviceId: { exact: realBackCam.deviceId }, width: { ideal: 1280, min: 640 }, height: { ideal: 720, min: 480 } },
                  audio: false
                });
                if (backStream && backStream.getVideoTracks().length > 0) {
                  cfg.deviceId = realBackCam.deviceId;
                  return backStream;
                }
              }
            } catch (_) {}
          }

          // Si le navigateur a sélectionné par défaut une caméra virtuelle (ex: Animaze Virtual Camera),
          // basculer immédiatement vers la vraie caméra physique maintenant que les permissions sont débloquées !
          if (!cfg.deviceId && isVirtualCameraLabel(trackLabel)) {
            try {
              const unlockedDevices = await navigator.mediaDevices.enumerateDevices();
              const realPhysicalCam = unlockedDevices.find(
                (d) => d.kind === "videoinput" && d.deviceId && d.label && !isVirtualCameraLabel(d.label)
              );
              if (realPhysicalCam) {
                stream.getTracks().forEach((t) => t.stop());
                const realStream = await navigator.mediaDevices.getUserMedia({
                  video: { deviceId: { exact: realPhysicalCam.deviceId }, width: { ideal: 640 }, height: { ideal: 480 } },
                  audio: false
                });
                if (realStream && realStream.getVideoTracks().length > 0) {
                  cfg.deviceId = realPhysicalCam.deviceId;
                  return realStream;
                }
              }
            } catch (_) {}
          }

          return stream;
        }
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error("CAMERA_START_FAILED");
  }

  function ensureChoiceAndCalibModal() {
    injectStyles();
    let backdrop = document.getElementById("fennckySystemModal");
    if (backdrop) return backdrop;

    backdrop = document.createElement("div");
    backdrop.id = "fennckySystemModal";
    backdrop.className = "fenncky-ocr-modal focr-backdrop hidden";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    document.body.appendChild(backdrop);
    return backdrop;
  }

  /**
   * Affiche la modale proposant les 2 choix :
   * 1. Système Simple
   * 2. Système OCR
   */
  function openSystemChoiceModal(targetUrl = "category.html") {
    stopCalibStream();
    const backdrop = ensureChoiceAndCalibModal();
    const copy = getCopy();

    backdrop.innerHTML = `
      <div class="focr-modal-card">
        <button type="button" class="focr-close-btn" id="focrCloseModalBtn" aria-label="Fermer">&times;</button>

        <div style="text-align:center;max-width:660px;margin:0 auto;">
          <span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#fef3c7;border:1.5px solid #f59e0b;color:#92400e;font-size:11.5px;font-weight:900;">
            ${copy.modalChoiceBadge}
          </span>
          <h2 style="margin:8px 0 4px;font-size:clamp(20px,2.8vw,27px);font-weight:900;color:#0f172a;">
            ${copy.modalChoiceTitle}
          </h2>
          <p style="margin:0;font-size:13px;font-weight:700;color:#475569;">
            ${copy.modalChoiceSub}
          </p>
        </div>

        <div class="focr-choice-grid">
          <!-- CHOIX 1 : SYSTÈME SIMPLE -->
          <div class="focr-system-card sys-simple" id="focrSelectSimpleCard">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <span style="padding:3px 10px;border-radius:999px;background:#dbeafe;color:#1e40af;font-size:11px;font-weight:900;">
                  ${copy.sys1Badge}
                </span>
                <span style="font-size:28px;">🖥️🎮</span>
              </div>
              <h3 style="margin:0 0 6px;font-size:20px;font-weight:900;color:#1e3a8a;">
                ${copy.sys1Title}
              </h3>
              <p style="margin:0 0 12px;font-size:12.5px;font-weight:700;color:#334155;line-height:1.45;">
                ${copy.sys1Desc}
              </p>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:5px;font-size:12px;font-weight:800;color:#1e40af;">
                ${copy.sys1Features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>

            <button type="button" id="focrLaunchSimpleBtn" style="width:100%;padding:11px 16px;border-radius:14px;border:2px solid #1d4ed8;border-bottom:4px solid #1e3a8a;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#ffffff;font-weight:900;font-size:13.5px;cursor:pointer;">
              ${copy.sys1Btn}
            </button>
          </div>

          <!-- CHOIX 2 : SYSTÈME OCR (CAMÉRA & CALIBRAGE) -->
          <div class="focr-system-card sys-ocr" id="focrSelectOcrCard">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <span style="padding:3px 10px;border-radius:999px;background:#d1fae5;color:#065f46;font-size:11px;font-weight:900;">
                  ${copy.sys2Badge}
                </span>
                <span style="font-size:28px;">📷🪞</span>
              </div>
              <h3 style="margin:0 0 6px;font-size:20px;font-weight:900;color:#064e3b;">
                ${copy.sys2Title}
              </h3>
              <p style="margin:0 0 12px;font-size:12.5px;font-weight:700;color:#334155;line-height:1.45;">
                ${copy.sys2Desc}
              </p>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:5px;font-size:12px;font-weight:800;color:#065f46;">
                ${copy.sys2Features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>

            <button type="button" id="focrLaunchOcrCalibBtn" style="width:100%;padding:11px 16px;border-radius:14px;border:2px solid #047857;border-bottom:4px solid #064e3b;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;font-weight:900;font-size:13.5px;cursor:pointer;">
              ${copy.sys2Btn}
            </button>
          </div>
        </div>
      </div>
    `;

    backdrop.classList.remove("hidden");

    document.getElementById("focrCloseModalBtn")?.addEventListener("click", () => {
      backdrop.classList.add("hidden");
    });

    backdrop.onclick = (e) => {
      if (e.target === backdrop) {
        stopCalibStream();
        backdrop.classList.add("hidden");
      }
    };

    const launchSimple = () => {
      setSystemMode("simple");
      backdrop.classList.add("hidden");
      window.location.href = "category.html";
    };

    document.getElementById("focrLaunchSimpleBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      launchSimple();
    });
    document.getElementById("focrSelectSimpleCard")?.addEventListener("click", launchSimple);

    const openCalib = (e) => {
      e?.stopPropagation?.();
      openCameraCalibrationModal("category-ocr.html", true);
    };
    document.getElementById("focrLaunchOcrCalibBtn")?.addEventListener("click", openCalib);
    document.getElementById("focrSelectOcrCard")?.addEventListener("click", openCalib);
  }

  /**
   * Écran de calibrage de la caméra :
   * - 3 options : Caméra Avant, Caméra Arrière, Caméra Fenncky (caméra avant inversée pour support miroir)
   * - Toute la zone de la caméra est viable : l'utilisateur pose librement ses cubes ou sa feuille devant la caméra.
   */
  function openCameraCalibrationModal(targetUrl = "category-ocr.html", showBackToChoice = false) {
    stopCalibStream();
    // Libérer le flux caméra d'arrière-plan pendant l'ouverture de l'aperçu de calibrage
    removeActivityOcrHud();
    const backdrop = ensureChoiceAndCalibModal();
    const copy = getCopy();
    const cfg = getOcrConfig();
    cfg.roi = { x: 0, y: 0, w: 1, h: 1 };

    const isFr = getLangId() === "French";

    backdrop.innerHTML = `
      <div class="focr-modal-card" style="max-width:740px;padding:14px 18px;">
        <button type="button" class="focr-close-btn" id="focrCloseCalibBtn" aria-label="Fermer">&times;</button>

        <!-- En-tête compact avec bouton de confirmation immédiat en haut -->
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding-right:36px;">
          <div>
            <span style="display:inline-block;padding:2px 10px;border-radius:999px;background:#d1fae5;border:1.5px solid #10b981;color:#065f46;font-size:10.5px;font-weight:900;">
              📷 ${isFr ? "Système 2 · Configuration de la Caméra OCR" : "System 2 · OCR Camera Setup"}
            </span>
            <h2 style="margin:3px 0 0;font-size:clamp(16px,2.1vw,21px);font-weight:900;color:#0f172a;">
              ${isFr ? "Choisir et Calibrer la Caméra" : "Select & Calibrate Camera"}
            </h2>
          </div>

          <button type="button" id="focrConfirmCalibTopBtn" style="padding:8px 16px;border-radius:12px;border:2px solid #047857;border-bottom:4px solid #064e3b;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;font-weight:900;font-size:12.5px;cursor:pointer;box-shadow:0 4px 12px rgba(5,150,105,0.28);">
            ✅ ${isFr ? "Confirmer & Lancer l'OCR 🚀" : "Confirm & Launch OCR 🚀"}
          </button>
        </div>

        <!-- 3 OPTIONS DE CAMÉRA : AVANT | ARRIÈRE | FENNCKY (SUPPORT MIROIR) -->
        <div class="focr-cam-options" role="radiogroup" aria-label="Options de caméra" style="margin:8px 0;gap:8px;">
          <button type="button" class="focr-cam-btn ${cfg.cameraType === "front" ? "active" : ""}" data-cam-type="front" style="padding:8px 10px;">
            <span style="font-size:19px;line-height:1;">📱</span>
            <div>
              <div style="font-size:12.5px;font-weight:900;color:#0f172a;">${copy.camOptFrontTitle}</div>
              <div style="font-size:10.5px;font-weight:700;color:#64748b;line-height:1.25;">${copy.camOptFrontDesc}</div>
            </div>
          </button>

          <button type="button" class="focr-cam-btn ${cfg.cameraType === "back" ? "active" : ""}" data-cam-type="back" style="padding:8px 10px;">
            <span style="font-size:19px;line-height:1;">📷</span>
            <div>
              <div style="font-size:12.5px;font-weight:900;color:#0f172a;">${copy.camOptBackTitle}</div>
              <div style="font-size:10.5px;font-weight:700;color:#64748b;line-height:1.25;">${copy.camOptBackDesc}</div>
            </div>
          </button>

          <button type="button" class="focr-cam-btn ${cfg.cameraType === "fenncky" ? "active" : ""}" data-cam-type="fenncky" style="padding:8px 10px;">
            <span style="font-size:19px;line-height:1;">🦊🪞</span>
            <div>
              <div style="font-size:12.5px;font-weight:900;color:#065f46;">${copy.camOptFennckyTitle}</div>
              <div style="font-size:10.5px;font-weight:700;color:#047857;line-height:1.25;">${copy.camOptFennckyDesc}</div>
            </div>
          </button>
        </div>

        <!-- Barre d'ajustement Miroir + Sélecteur de périphérique Caméra physique -->
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px;padding:6px 10px;border-radius:12px;background:#f8fafc;border:1.5px solid #e2e8f0;margin-bottom:8px;">
          <div id="focrMirrorAdjustRow" style="display:flex;flex-wrap:wrap;align-items:center;gap:5px;">
            <span style="font-size:10.5px;font-weight:900;color:#065f46;">🪞 ${copy.mirrorControlsLabel}</span>
            <button type="button" id="focrToggleMirrorYBtn" style="padding:3px 9px;border-radius:999px;font-size:10.5px;font-weight:900;border:1.5px solid #059669;background:${cfg.mirrorY ? "#059669" : "#ffffff"};color:${cfg.mirrorY ? "#ffffff" : "#065f46"};cursor:pointer;">
              ${copy.flipVertBtn}
            </button>
            <button type="button" id="focrToggleMirrorXBtn" style="padding:3px 9px;border-radius:999px;font-size:10.5px;font-weight:900;border:1.5px solid #059669;background:${cfg.mirrorX ? "#059669" : "#ffffff"};color:${cfg.mirrorX ? "#ffffff" : "#065f46"};cursor:pointer;">
              ${copy.flipHorizBtn}
            </button>
          </div>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">
            <select id="focrDeviceSelect" style="padding:2px 8px;border-radius:8px;border:1.5px solid #cbd5e1;background:#ffffff;color:#0f172a;font-size:10.5px;font-weight:800;max-width:210px;" title="Sélectionner la webcam">
              <option value="">📷 Webcam principale</option>
            </select>
            <span id="focrCamStatusBadge" style="font-size:10.5px;color:#059669;font-weight:900;">${copy.camActiveStatus}</span>
          </div>
        </div>

        <!-- APERÇU PLEIN CADRE DE LA CAMÉRA (Compact pour que le bouton Confirmer soit toujours visible) -->
        <div>
          <div class="focr-video-viewport" id="focrCalibViewport" style="max-height:215px;margin:0 auto;">
            <video id="focrCalibVideo" class="focr-video-el hidden" autoplay playsinline muted></video>
            <canvas id="focrCalibSimCanvas" class="focr-video-el"></canvas>
          </div>
        </div>

        <!-- Barre d'action fixe en bas de modale (toujours visible même sur petit écran) -->
        <div style="position:sticky;bottom:-14px;z-index:10;background:#ffffff;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-top:10px;padding:10px 4px 4px;border-top:2px solid #f1f5f9;">
          ${showBackToChoice ? `
            <button type="button" id="focrBackToChoiceBtn" style="padding:8px 14px;border-radius:12px;border:2px solid #cbd5e1;background:#ffffff;color:#334155;font-weight:900;font-size:12px;cursor:pointer;">
              ${copy.backToChoiceBtn}
            </button>
          ` : `<div></div>`}

          <button type="button" id="focrConfirmCalibBtn" style="padding:10px 20px;border-radius:12px;border:2px solid #047857;border-bottom:4px solid #064e3b;background:linear-gradient(135deg,#10b981,#059669);color:#ffffff;font-weight:900;font-size:13.5px;cursor:pointer;box-shadow:0 6px 16px rgba(5,150,105,0.28);">
            ${copy.confirmCalibBtn}
          </button>
        </div>
      </div>
    `;

    backdrop.classList.remove("hidden");

    const videoEl = document.getElementById("focrCalibVideo");
    const simCanvas = document.getElementById("focrCalibSimCanvas");
    const statusBadge = document.getElementById("focrCamStatusBadge");

    function applyCameraTransforms() {
      const transform = getVideoTransformCSS(cfg);
      if (videoEl) videoEl.style.transform = transform;
      const mirrorYBtn = document.getElementById("focrToggleMirrorYBtn");
      const mirrorXBtn = document.getElementById("focrToggleMirrorXBtn");
      if (mirrorYBtn) {
        mirrorYBtn.style.background = cfg.mirrorY ? "#059669" : "#ffffff";
        mirrorYBtn.style.color = cfg.mirrorY ? "#ffffff" : "#065f46";
      }
      if (mirrorXBtn) {
        mirrorXBtn.style.background = cfg.mirrorX ? "#059669" : "#ffffff";
        mirrorXBtn.style.color = cfg.mirrorX ? "#ffffff" : "#065f46";
      }
    }

    const deviceSelect = document.getElementById("focrDeviceSelect");

    async function populateCameraDeviceDropdown(activeStream) {
      if (!deviceSelect || !navigator.mediaDevices?.enumerateDevices) return;
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter((d) => d.kind === "videoinput" && d.deviceId);
        if (videoInputs.length === 0) return;

        const currentTrackId = activeStream?.getVideoTracks()?.[0]?.getSettings?.()?.deviceId || cfg.deviceId || "";
        deviceSelect.innerHTML = "";

        videoInputs.forEach((d, idx) => {
          const opt = document.createElement("option");
          opt.value = d.deviceId;
          const isVirt = isVirtualCameraLabel(d.label);
          const cleanLabel = d.label || `Caméra ${idx + 1}`;
          opt.textContent = isVirt ? `⚠️ ${cleanLabel} (Virtuelle)` : `📷 ${cleanLabel}`;
          if (d.deviceId === currentTrackId) {
            opt.selected = true;
            cfg.deviceId = d.deviceId;
          }
          deviceSelect.appendChild(opt);
        });
      } catch (_) {}
    }

    deviceSelect?.addEventListener("change", () => {
      cfg.deviceId = deviceSelect.value || "";
      startSelectedCamera();
    });

    let lastCameraErrorName = "";

    async function startSelectedCamera() {
      stopCalibStream();
      removeActivityOcrHud();
      applyCameraTransforms();
      lastCameraErrorName = "";

      try {
        activeCalibStream = await acquireCameraStream(cfg);
        await populateCameraDeviceDropdown(activeCalibStream);
        if (videoEl) {
          videoEl.srcObject = activeCalibStream;
          videoEl.classList.remove("hidden");
          const playPromise = videoEl.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        }
        if (simCanvas) simCanvas.classList.add("hidden");
        const activeLabel = activeCalibStream.getVideoTracks()[0]?.label || cfg.cameraType.toUpperCase();
        if (statusBadge) statusBadge.textContent = `🟢 ${copy.camActiveStatus}`;
      } catch (err) {
        lastCameraErrorName = err?.name || err?.message || "UNKNOWN";
        if (videoEl) videoEl.classList.add("hidden");
        if (simCanvas) simCanvas.classList.remove("hidden");
        if (statusBadge) {
          if (lastCameraErrorName === "NotReadableError" || lastCameraErrorName === "TrackStartError") {
            statusBadge.textContent = "⚠️ Caméra utilisée par un autre navigateur/onglet (cliquez pour réessayer)";
          } else if (lastCameraErrorName === "NotAllowedError" || lastCameraErrorName === "PermissionDeniedError") {
            statusBadge.textContent = "⚠️ Accès caméra refusé dans cet aperçu (autorisez la caméra)";
          } else {
            statusBadge.textContent = copy.camSimStatus;
          }
          statusBadge.style.cursor = "pointer";
          statusBadge.onclick = () => startSelectedCamera();
        }
      }

      startCalibPreviewLoop();
    }

    function drawSimulationDesk(ctx, W, H) {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(148, 163, 184, 0.16)";
      ctx.lineWidth = 1;
      for (let gx = 0; gx < W; gx += 32) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
      }
      for (let gy = 0; gy < H; gy += 32) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
      }

      ctx.fillStyle = "rgba(15, 23, 42, 0.78)";
      ctx.fillRect(10, 10, 250, 26);
      ctx.fillStyle = "#38bdf8";
      ctx.font = "800 12px Nunito, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const modeName =
        cfg.cameraType === "fenncky"
          ? "🦊 Caméra Fenncky (Miroir Avant)"
          : cfg.cameraType === "back"
          ? "📷 Caméra Arrière"
          : "📱 Caméra Avant";
      ctx.fillText(modeName, 18, 23);
    }

    function startCalibPreviewLoop() {
      if (calibRafId) cancelAnimationFrame(calibRafId);

      const renderFrame = () => {
        if (backdrop.classList.contains("hidden")) return;

        const W = 480;
        const H = 300;
        if (simCanvas && simCanvas.width !== W) {
          simCanvas.width = W;
          simCanvas.height = H;
        }

        const hasLiveVideo = activeCalibStream && videoEl && !videoEl.classList.contains("hidden") && videoEl.readyState >= 2;
        if (!hasLiveVideo && simCanvas) {
          const sCtx = simCanvas.getContext("2d");
          drawSimulationDesk(sCtx, W, H);
        }

        calibRafId = requestAnimationFrame(renderFrame);
      };

      calibRafId = requestAnimationFrame(renderFrame);
    }

    startSelectedCamera();

    // Sélection de l'une des 3 caméras
    backdrop.querySelectorAll(".focr-cam-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        backdrop.querySelectorAll(".focr-cam-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        cfg.cameraType = btn.getAttribute("data-cam-type") || "fenncky";
        cfg.deviceId = "";
        if (cfg.cameraType === "fenncky") {
          cfg.mirrorY = true;
          cfg.mirrorX = true;
        } else {
          cfg.mirrorY = false;
          cfg.mirrorX = false;
        }
        saveOcrConfig(cfg);
        startSelectedCamera();
      });
    });

    // Boutons d'inversion Miroir (Verticale / Horizontale)
    document.getElementById("focrToggleMirrorYBtn")?.addEventListener("click", () => {
      cfg.mirrorY = !cfg.mirrorY;
      applyCameraTransforms();
    });
    document.getElementById("focrToggleMirrorXBtn")?.addEventListener("click", () => {
      cfg.mirrorX = !cfg.mirrorX;
      applyCameraTransforms();
    });

    // Retour au choix 1 / 2
    document.getElementById("focrBackToChoiceBtn")?.addEventListener("click", () => {
      stopCalibStream();
      openSystemChoiceModal(targetUrl);
    });

    // Fermeture
    document.getElementById("focrCloseCalibBtn")?.addEventListener("click", () => {
      stopCalibStream();
      backdrop.classList.add("hidden");
      initActivityOcrHud();
    });

    // Validation du calibrage -> Passage à Category OCR (category-ocr.html) ou reprise sur la page actuelle
    const confirmCalibrationAndProceed = () => {
      cfg.roi = { x: 0, y: 0, w: 1, h: 1 };
      cfg.calibrated = true;
      saveOcrConfig(cfg);
      setSystemMode("ocr");
      stopCalibStream();
      backdrop.classList.add("hidden");

      const path = (window.location.pathname || "").toLowerCase();
      const currentFile = path.split("/").pop() || "";
      const targetFile = (targetUrl || "").split("?")[0].split("/").pop().toLowerCase();

      if (path.endsWith("category-ocr.html")) {
        renderCategoryOcrBanner();
      } else if (currentFile && targetFile && currentFile === targetFile && !currentFile.endsWith("index.html")) {
        renderCategoryOcrBanner();
        initActivityOcrHud();
      } else {
        const dest = (!targetUrl || targetUrl.includes("category.html")) ? "category-ocr.html" : targetUrl;
        window.location.href = dest;
      }
    };

    document.getElementById("focrConfirmCalibBtn")?.addEventListener("click", confirmCalibrationAndProceed);
    document.getElementById("focrConfirmCalibTopBtn")?.addEventListener("click", confirmCalibrationAndProceed);
  }

  /* =========================================================
     2. MOTEUR DE RECONNAISSANCE OCR SUR LA ZONE DÉLIMITÉE
        (Analyse par templates de glyphes sur Canvas + Tesseract.js si chargé)
     ========================================================= */
  const GLYPH_TEMPLATES = {};
  const TEMPLATE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function buildGlyphTemplates() {
    if (Object.keys(GLYPH_TEMPLATES).length > 0) return;
    const c = document.createElement("canvas");
    c.width = 24;
    c.height = 24;
    const ctx = c.getContext("2d", { willReadFrequently: true });

    for (let i = 0; i < TEMPLATE_CHARS.length; i++) {
      const ch = TEMPLATE_CHARS[i];
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 24, 24);
      ctx.fillStyle = "#000000";
      ctx.font = "900 20px Nunito, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(ch, 12, 13);
      const data = ctx.getImageData(0, 0, 24, 24).data;
      const vec = new Uint8Array(24 * 24);
      for (let p = 0; p < 24 * 24; p++) {
        vec[p] = data[p * 4] < 140 ? 1 : 0;
      }
      GLYPH_TEMPLATES[ch] = vec;
    }
  }

  async function recognizeCanvasText(sourceCanvas, fallbackHint = "", skipTesseract = false) {
    if (!sourceCanvas) return fallbackHint || "A";

    // Si Tesseract est disponible globalement et qu'on ne souhaite pas l'ignorer
    if (!skipTesseract && global.Tesseract && typeof global.Tesseract.recognize === "function") {
      try {
        const { data } = await global.Tesseract.recognize(sourceCanvas, "eng");
        const clean = (data?.text || "").replace(/[^a-zA-Z0-9À-ÿ]/g, "").trim();
        if (clean) return clean.toUpperCase();
      } catch (_) {}
    }

    // Reconnaissance par extraction de boîte englobante des pixels sombres + corrélation de templates 24x24
    buildGlyphTemplates();
    const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
    const W = sourceCanvas.width;
    const H = sourceCanvas.height;
    const img = ctx.getImageData(0, 0, W, H).data;

    let minX = W, minY = H, maxX = 0, maxY = 0, darkCount = 0;
    const marginX = Math.round(W * 0.06);
    const marginY = Math.round(H * 0.06);

    for (let y = marginY; y < H - marginY; y++) {
      for (let x = marginX; x < W - marginX; x++) {
        const idx = (y * W + x) * 4;
        const r = img[idx], g = img[idx + 1], b = img[idx + 2], a = img[idx + 3];
        const lum = (r + g + b) / 3;
        if (a > 80 && lum < 175) {
          darkCount++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (darkCount < 18 || maxX <= minX || maxY <= minY) {
      return fallbackHint || "";
    }

    if (fallbackHint && fallbackHint.length > 0) {
      return fallbackHint.toUpperCase();
    }

    const norm = document.createElement("canvas");
    norm.width = 24;
    norm.height = 24;
    const nCtx = norm.getContext("2d", { willReadFrequently: true });
    nCtx.fillStyle = "#ffffff";
    nCtx.fillRect(0, 0, 24, 24);

    const bw = maxX - minX + 1;
    const bh = maxY - minY + 1;
    nCtx.drawImage(sourceCanvas, minX, minY, bw, bh, 2, 2, 20, 20);

    const nData = nCtx.getImageData(0, 0, 24, 24).data;
    let bestChar = "A";
    let bestScore = -Infinity;

    for (const ch of Object.keys(GLYPH_TEMPLATES)) {
      const tpl = GLYPH_TEMPLATES[ch];
      let score = 0;
      for (let p = 0; p < 24 * 24; p++) {
        const isDark = nData[p * 4] < 165 ? 1 : 0;
        score += isDark === tpl[p] ? 1 : -1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestChar = ch;
      }
    }

    return bestChar;
  }

  /* =========================================================
     3. BANNIÈRE SYSTÈME OCR SUR CATEGORY-OCR.HTML & COURS.HTML (MODE OCR)
        (category.html reste 100% Option Simple sans aucun ajout OCR)
     ========================================================= */
  function syncOcrNavigationLinks() {
    const mode = getSystemMode();
    const path = (window.location.pathname || "").toLowerCase();
    if (path.endsWith("index.html") || path === "/" || path === "") return;

    document.querySelectorAll('a[href="category.html"], a[href="category-ocr.html"]').forEach((link) => {
      if (link.closest("#focrCategoryBanner")) return;
      link.setAttribute("href", mode === "ocr" ? "category-ocr.html" : "category.html");
    });
  }

  function renderCategoryOcrBanner() {
    injectStyles();
    syncOcrNavigationLinks();
    const path = (window.location.pathname || "").toLowerCase();

    // category.html et cours.html sont des options simples pures : aucun bandeau ni badge OCR
    if (path.endsWith("category.html") || path.endsWith("cours.html")) {
      document.getElementById("focrCategoryBanner")?.remove();
      document.querySelectorAll(".focr-card-badge").forEach((b) => b.remove());
      return;
    }

    if (!path.endsWith("category-ocr.html")) return;

    const mainEl = document.querySelector(".category-main");
    if (!mainEl) return;

    let banner = document.getElementById("focrCategoryBanner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "focrCategoryBanner";
      banner.className = "focr-category-banner";
      const gridEl = mainEl.querySelector(".category-grid");
      if (gridEl) {
        mainEl.insertBefore(banner, gridEl);
      } else {
        mainEl.prepend(banner);
      }
    }

    const copy = getCopy();
    const cfg = getOcrConfig();

    const camLabel =
      cfg.cameraType === "fenncky"
        ? copy.catBannerCamFenncky
        : cfg.cameraType === "back"
        ? copy.catBannerCamBack
        : copy.catBannerCamFront;

    banner.style.borderColor = "#059669";
    banner.style.borderBottomColor = "#065f46";
    banner.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;">
        <span style="display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:999px;background:#059669;color:#ffffff;font-size:11.5px;font-weight:900;">
          <span style="width:7px;height:7px;border-radius:50%;background:#fde047;display:inline-block;"></span>
          📷 ${copy.catBannerTitle}
        </span>
        <span style="padding:3px 10px;border-radius:999px;background:#ecfdf5;border:1.5px solid #6ee7b7;color:#065f46;font-size:11px;font-weight:900;">
          ${camLabel}
        </span>
      </div>

      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">
        <button type="button" id="focrBannerRecalibBtn" style="padding:4px 11px;border-radius:999px;border:1.5px solid #059669;background:#ffffff;color:#065f46;font-size:11px;font-weight:900;cursor:pointer;">
          ${copy.catBannerRecalibBtn}
        </button>
        <a href="category.html" id="focrBannerToggleModeBtn" style="padding:4px 11px;border-radius:999px;border:1.5px solid #2563eb;background:#eff6ff;color:#1e40af;font-size:11px;font-weight:900;cursor:pointer;text-decoration:none;">
          ${copy.catBannerSwitchSimpleBtn}
        </a>
      </div>
    `;

    // Ajouter le badge "📷 OCR" UNIQUEMENT sur les activités interactives OCR (Entraînement, Jeux, Test)
    // Toutes les autres activités (Cours, Vocabulaire, Traçage, Progression, Histoires) n'ont PAS de badge OCR
    const OCR_WHITELIST_KEYS = ["practice", "games", "test"];
    document.querySelectorAll(".category-card").forEach((card) => {
      card.style.position = "relative";
      const key = (card.getAttribute("data-cat-key") || "").toLowerCase();
      const href = (card.getAttribute("href") || "").toLowerCase();
      const isOcr =
        OCR_WHITELIST_KEYS.includes(key) ||
        href.includes("practice.html") ||
        href.includes("games.html") ||
        href.includes("test.html") ||
        card.classList.contains("card-practice") ||
        card.classList.contains("card-games") ||
        card.classList.contains("card-test");

      if (!isOcr) {
        card.querySelectorAll(".focr-card-badge").forEach((el) => el.remove());
        return;
      }

      if (!card.querySelector(".focr-card-badge")) {
        const b = document.createElement("span");
        b.className = "focr-card-badge";
        b.textContent = "📷 OCR";
        card.appendChild(b);
      }
    });

    document.getElementById("focrBannerRecalibBtn")?.addEventListener("click", () => {
      openCameraCalibrationModal(window.location.pathname.split("/").pop() || "category-ocr.html", false);
    });

    document.getElementById("focrBannerToggleModeBtn")?.addEventListener("click", () => {
      setSystemMode("simple");
      removeActivityOcrHud();
    });
  }

  /* =========================================================
     4. PONT D'ACTION OCR SUR TOUTES LES PAGES DE CATEGORY
        (Cours, Alphabet, Nombres, Couleurs, Famille, Traçage, Jeux, Test, Vocabulaire, Histoires...)
     ========================================================= */
  function collectPageSuggestions() {
    const path = (window.location.pathname || "").toLowerCase();
    const suggestions = [];

    if (path.endsWith("alphabet.html")) {
      return ["A", "B", "C", "D", "E", "F", "G", "H", "L", "M", "S", "Z"];
    }
    if (path.endsWith("numbers.html")) {
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    }
    if (path.endsWith("tracing.html")) {
      const activePill = document.querySelector(".trace-item-pill.active");
      const activeTxt = activePill ? activePill.textContent.replace(/[^\wÀ-ÿ]/g, "").trim() : "A";
      const list = [activeTxt || "A", "A", "B", "C", "CHAT", "LION", "b", "h", "k", "m"];
      return Array.from(new Set(list)).slice(0, 8);
    }
    if (path.endsWith("test.html")) {
      const cards = Array.from(document.querySelectorAll(".test-choice-card .test-choice-title"));
      if (cards.length > 0) {
        return cards.map((el) => el.textContent.trim());
      }
      return ["CHAT", "LION", "POMME", "LIVRE"];
    }
    if (path.endsWith("practice.html")) {
      const bubbles = Array.from(document.querySelectorAll(".letter-bubble:not(.used)"));
      if (bubbles.length > 0) {
        return Array.from(new Set(bubbles.map((b) => b.textContent.trim())));
      }
      const choices = Array.from(document.querySelectorAll(".sound-choice-2col span"));
      if (choices.length > 0) {
        return choices.map((c) => c.textContent.trim()).filter(Boolean).slice(0, 6);
      }
      return ["A", "B", "C", "1", "2", "3"];
    }
    if (path.endsWith("games.html")) {
      const badge = document.getElementById("targetPromptBadge");
      const t = badge ? badge.textContent.trim() : "";
      return Array.from(new Set([t, "A", "B", "C", "1", "2", "3", "4", "5"].filter(Boolean))).slice(0, 8);
    }

    // Autres pages de cours (colors, geometry, family, stationery, body-parts, daily-routine, common-orders, stories)
    document.querySelectorAll("[data-word], .topic-card h3, .color-card h3, .geom-card h3, .family-card h3, .nk-card-title").forEach((el) => {
      const txt = (el.getAttribute("data-word") || el.textContent || "").trim();
      if (txt && suggestions.length < 8) suggestions.push(txt);
    });

    return suggestions.length > 0 ? suggestions : ["A", "B", "C", "1", "2", "3"];
  }

  function dispatchOcrResultToPage(detectedRaw) {
    const detected = String(detectedRaw || "").trim();
    if (!detected) return false;
    const upper = detected.toUpperCase();
    const path = (window.location.pathname || "").toLowerCase();

    // 1. Page Alphabet (alphabet.html)
    if (path.endsWith("alphabet.html")) {
      const cards = Array.from(document.querySelectorAll("#alphabetGrid > div, .alphabet-card, [data-letter]"));
      const letterChar = upper.charAt(0);
      const idx = letterChar.charCodeAt(0) - 65;
      if (idx >= 0 && idx < cards.length) {
        cards[idx].click();
        return `Lettre « ${letterChar} » ouverte !`;
      }
    }

    // 2. Page Traçage & Écriture (tracing.html)
    if (path.endsWith("tracing.html")) {
      const visionWs = document.getElementById("visionWorkspace");
      if (visionWs && !visionWs.classList.contains("hidden")) {
        const matchBtn = Array.from(document.querySelectorAll(".tactile-letter-btn")).find(
          (b) => (b.getAttribute("data-tletter") || "").toUpperCase() === upper
        );
        if (matchBtn) {
          matchBtn.click();
          document.getElementById("triggerAiScanBtn")?.click();
          return `Lettre « ${detected} » scannée dans l'atelier Vision IA !`;
        }
        return false;
      }

      const activePill = document.querySelector(".trace-item-pill.active");
      const activeTarget = activePill ? activePill.textContent.replace(/[^\wÀ-ÿ]/g, "").trim().toUpperCase() : "";

      if (activeTarget && upper === activeTarget) {
        const fill = document.getElementById("traceProgressFill");
        const pct = document.getElementById("tracePercentBadge");
        const badge = document.getElementById("traceInstructionBadge");
        if (fill) fill.style.width = "100%";
        if (pct) pct.textContent = "100%";
        if (badge) badge.textContent = "🎉 Validé par Caméra OCR ! +1 ⭐";
        document.getElementById("speakTargetBtn")?.click();
        if (global.FennyGo) global.FennyGo.addStars(1);
        return `Écriture de « ${activeTarget} » validée à 100% par l'OCR !`;
      }
      return false;
    }

    // 3. Page Test (test.html)
    if (path.endsWith("test.html")) {
      if (upper.length < 2) return false;
      const choiceCards = Array.from(document.querySelectorAll(".test-choice-card"));
      const match = choiceCards.find((card) => {
        const title = (card.querySelector(".test-choice-title")?.textContent || "").toUpperCase().trim();
        const cleanTitle = title.replace(/^(LE |LA |L'|THE )/, "").trim();
        return cleanTitle === upper || title === upper;
      });
      if (match) {
        match.click();
        return `Réponse « ${match.querySelector(".test-choice-title")?.textContent} » choisie par l'OCR !`;
      }
      return false;
    }

    // 4. Page Practice (practice.html) : uniquement quand une arène de jeu est ouverte
    if (path.endsWith("practice.html")) {
      const arena = document.getElementById("arenaView");
      if (!arena || arena.classList.contains("hidden")) return false;

      const bubble = Array.from(document.querySelectorAll(".letter-bubble:not(.used)")).find(
        (b) => b.textContent.trim().toUpperCase() === upper
      );
      if (bubble) {
        bubble.click();
        return `Lettre « ${upper} » validée par l'OCR !`;
      }
      const soundChoice = Array.from(document.querySelectorAll(".sound-choice-2col")).find((c) => {
        const tokens = c.textContent.trim().toUpperCase().split(/\s+/);
        return tokens.includes(upper) || c.textContent.trim().toUpperCase() === upper;
      });
      if (soundChoice) {
        soundChoice.click();
        return `Carte « ${upper} » sélectionnée par l'OCR !`;
      }
      return false;
    }

    // 6. Page Mini-Jeux (games.html) : uniquement quand un jeu est actif (#gameScreen visible)
    if (path.endsWith("games.html")) {
      const gameScreen = document.getElementById("gameScreen");
      if (!gameScreen || gameScreen.classList.contains("hidden")) return false;
      const overlayBtns = Array.from(document.querySelectorAll("#gameOverlayUI button"));
      const matchBtn = overlayBtns.find((b) => b.textContent.trim().toUpperCase() === upper);
      if (matchBtn) {
        matchBtn.click();
        return `Action « ${upper} » déclenchée dans le jeu !`;
      }
      return false;
    }

    // 7. Pages de cours spécifiques (numbers, colors, geometry, family, stationery, body-parts, daily-routine, common-orders)
    if (upper.length >= 2) {
      const courseCards = Array.from(
        document.querySelectorAll(".number-card, .color-card, .geom-card, .family-card, .topic-card")
      );
      const matchedCard = courseCards.find((el) => {
        const text = (el.getAttribute("data-word") || el.getAttribute("aria-label") || el.textContent || "").trim().toUpperCase();
        return text === upper || text.split(/\s+/).includes(upper);
      });
      if (matchedCard) {
        matchedCard.scrollIntoView({ behavior: "smooth", block: "center" });
        matchedCard.click();
        return `Élément « ${detected} » activé par l'OCR !`;
      }
    }

    return false;
  }

  /* =========================================================
     5. SERVICE CAMÉRA & OCR SILENCIEUX EN ARRIÈRE-PLAN
        (Après le calibrage, la fenêtre de la caméra disparaît mais la caméra
        continue à fonctionner en arrière-plan avec les différentes pages)
     ========================================================= */
  let bgStream = null;
  let bgScanTimer = null;
  let bgIsScanning = false;
  let lastDetectedToken = "";
  let lastDetectedTime = 0;
  let prevCandidateChar = "";
  let stableCharStreak = 0;
  let emptyCardStreak = 0;
  let prevMotionGrid = null;
  let tesseractLoading = false;
  let persistentOcrWorker = null;
  let persistentOcrWorkerPromise = null;

  function ensureTesseractLoaded() {
    if (global.Tesseract || tesseractLoading) return;
    tesseractLoading = true;
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    s.async = true;
    document.head.appendChild(s);
  }

  async function getOrCreateOcrWorker() {
    if (persistentOcrWorker) return persistentOcrWorker;
    if (persistentOcrWorkerPromise) return persistentOcrWorkerPromise;
    if (!global.Tesseract || typeof global.Tesseract.createWorker !== "function") return null;

    persistentOcrWorkerPromise = (async () => {
      try {
        const w = await global.Tesseract.createWorker("eng");
        await w.setParameters({
          tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        });
        persistentOcrWorker = w;
        return w;
      } catch (_) {
        persistentOcrWorkerPromise = null;
        return null;
      }
    })();
    return persistentOcrWorkerPromise;
  }

  /**
   * Prétraite l'image 640x480 de la caméra :
   * - Détecte l'encre noire ET les lettres colorées (rouge, bleu, vert, orange...) sur fond blanc/clair
   * - Ignore automatiquement les bords sombres (comme la base noire du support/clavier en bas de l'image)
   * - Isole et zoome la lettre au centre d'un canevas 160x160 haute définition pour Tesseract.
   */
  function prepareSalientLetterCanvases(rawCanvas) {
    const W = rawCanvas.width;
    const H = rawCanvas.height;
    const ctx = rawCanvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, W, H).data;

    // Grille haute précision 320x240
    const GW = 320;
    const GH = 240;
    const gray = new Float32Array(GW * GH);
    const inkSignal = new Float32Array(GW * GH);
    const skinMask = new Uint8Array(GW * GH);
    const whitePaperMask = new Uint8Array(GW * GH);
    let whitePaperPixels = 0;

    // Grille 64x48 pour mesurer si l'image est immobile ou en mouvement (main qui pose/retire une carte)
    const MW = 64;
    const MH = 48;
    const currMotionGrid = new Float32Array(MW * MH);

    for (let gy = 0; gy < GH; gy++) {
      const sy = Math.min(H - 1, Math.floor((gy / GH) * H));
      for (let gx = 0; gx < GW; gx++) {
        const sx = Math.min(W - 1, Math.floor((gx / GW) * W));
        const idx = (sy * W + sx) * 4;
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const sat = maxC - minC;
        const i = gy * GW + gx;

        // Détecter la peau / main pour ne jamais confondre les doigts avec une lettre
        if (r > 85 && g > 40 && b > 20 && r > g && g >= b - 8 && r - g > 14 && r - b > 24 && sat < 130) {
          skinMask[i] = 1;
        } else if (lum >= 85 && sat <= 55) {
          // Pixel de carte/feuille blanche ou claire (adapté à l'éclairage intérieur de téléphone)
          whitePaperMask[i] = 1;
          whitePaperPixels++;
        }

        // Une lettre colorée (rouge, bleue, verte) ou noire a un minC bas et/ou une forte saturation
        const effectiveDark = Math.max(0, minC - sat * 0.45);
        gray[i] = lum;
        inkSignal[i] = effectiveDark;
      }
    }

    for (let my = 0; my < MH; my++) {
      const gy = Math.min(GH - 1, Math.floor((my / MH) * GH));
      for (let mx = 0; mx < MW; mx++) {
        const gx = Math.min(GW - 1, Math.floor((mx / MW) * GW));
        currMotionGrid[my * MW + mx] = gray[gy * GW + gx];
      }
    }

    let motionDiff = 0;
    if (prevMotionGrid && prevMotionGrid.length === currMotionGrid.length) {
      let diffSum = 0;
      for (let m = 0; m < currMotionGrid.length; m++) {
        diffSum += Math.abs(currMotionGrid[m] - prevMotionGrid[m]);
      }
      motionDiff = diffSum / currMotionGrid.length;
    }
    prevMotionGrid = currMotionGrid;

    const whiteCardRatio = whitePaperPixels / (GW * GH);
    // S'il n'y a aucune carte/feuille blanche posée devant la caméra (seulement le clavier ou bureau vide)
    if (whiteCardRatio < 0.025) {
      return {
        hasSalientContent: false,
        hasWhiteCard: false,
        motionDiff,
        charCanvas: null,
        normCanvas: null,
        invCanvas: null
      };
    }

    // Image intégrale pour le fond local (rayon R = 18 sur grille 320x240)
    const integralGray = new Float64Array((GW + 1) * (GH + 1));
    const integralInk = new Float64Array((GW + 1) * (GH + 1));
    for (let gy = 0; gy < GH; gy++) {
      let rowG = 0;
      let rowI = 0;
      for (let gx = 0; gx < GW; gx++) {
        const i = gy * GW + gx;
        rowG += gray[i];
        rowI += inkSignal[i];
        integralGray[(gy + 1) * (GW + 1) + (gx + 1)] = integralGray[gy * (GW + 1) + (gx + 1)] + rowG;
        integralInk[(gy + 1) * (GW + 1) + (gx + 1)] = integralInk[gy * (GW + 1) + (gx + 1)] + rowI;
      }
    }

    const R = 18;
    const localBg = new Float32Array(GW * GH);
    const strokeMask = new Uint8Array(GW * GH);
    const strokeStrength = new Float32Array(GW * GH);

    for (let gy = 6; gy < GH - 6; gy++) {
      const yA = Math.max(0, gy - R);
      const yB = Math.min(GH - 1, gy + R);
      for (let gx = 6; gx < GW - 6; gx++) {
        const xA = Math.max(0, gx - R);
        const xB = Math.min(GW - 1, gx + R);
        const count = (xB - xA + 1) * (yB - yA + 1);
        const bgG =
          (integralGray[(yB + 1) * (GW + 1) + (xB + 1)] -
            integralGray[yA * (GW + 1) + (xB + 1)] -
            integralGray[(yB + 1) * (GW + 1) + xA] +
            integralGray[yA * (GW + 1) + xA]) /
          count;
        const bgI =
          (integralInk[(yB + 1) * (GW + 1) + (xB + 1)] -
            integralInk[yA * (GW + 1) + (xB + 1)] -
            integralInk[(yB + 1) * (GW + 1) + xA] +
            integralInk[yA * (GW + 1) + xA]) /
          count;

        const idx = gy * GW + gx;
        localBg[idx] = bgG;

        // Ignorer la main/peau ainsi que toute zone qui n'est pas sur une carte blanche claire (bgG >= 75)
        if (skinMask[idx] || bgG < 75) continue;

        const diffInk = bgI - inkSignal[idx];
        const diffLum = bgG - gray[idx];
        const strength = Math.max(diffInk, diffLum);
        if (strength > 16) {
          strokeMask[idx] = 1;
          strokeStrength[idx] = strength;
        }
      }
    }

    // Recherche des composantes connexes (blobs) sur la zone feuille claire
    const visited = new Uint8Array(GW * GH);
    const q = new Int32Array(GW * GH);
    const candidateBlobs = [];

    for (let sy = 10; sy < GH - 10; sy++) {
      for (let sx = 10; sx < GW - 10; sx++) {
        const startIdx = sy * GW + sx;
        if (!strokeMask[startIdx] || visited[startIdx]) continue;

        let head = 0;
        let tail = 0;
        q[tail++] = startIdx;
        visited[startIdx] = 1;

        let bx0 = sx, bx1 = sx, by0 = sy, by1 = sy;
        let area = 0;
        let strengthSum = 0;
        let touchesEdge = false;

        while (head < tail) {
          const curr = q[head++];
          const cy = Math.floor(curr / GW);
          const cx = curr - cy * GW;
          area++;
          strengthSum += strokeStrength[curr];

          if (cx < bx0) bx0 = cx;
          if (cx > bx1) bx1 = cx;
          if (cy < by0) by0 = cy;
          if (cy > by1) by1 = cy;
          if (cx <= 7 || cx >= GW - 8 || cy <= 7 || cy >= GH - 8) {
            touchesEdge = true;
          }

          // Voisinage 5x5 pour relier les barres proches d'une même lettre (ex: E, F, I, =)
          for (let dy = -2; dy <= 2; dy++) {
            const ny = cy + dy;
            if (ny < 6 || ny >= GH - 6) continue;
            for (let dx = -2; dx <= 2; dx++) {
              const nx = cx + dx;
              if (nx < 6 || nx >= GW - 6) continue;
              const nIdx = ny * GW + nx;
              if (strokeMask[nIdx] && !visited[nIdx]) {
                visited[nIdx] = 1;
                q[tail++] = nIdx;
              }
            }
          }
        }

        if (touchesEdge) continue;
        const bw = bx1 - bx0 + 1;
        const bh = by1 - by0 + 1;
        // Ignorer les poussières ou lignes parasites trop fines
        if (bw < 4 || bh < 7 || bw > GW * 0.55 || bh > GH * 0.68) continue;
        if (area < 14) continue;

        const aspect = bw / bh;
        if (aspect < 0.22 || aspect > 1.85) continue;

        const fill = area / (bw * bh);
        if (fill < 0.1 || fill > 0.82) continue;

        const avgStrength = strengthSum / area;
        if (avgStrength < 16) continue;

        const cxMid = (bx0 + bx1) / 2;
        const cyMid = (by0 + by1) / 2;
        const distCenter = Math.hypot((cxMid - GW / 2) / (GW / 2), (cyMid - GH * 0.42) / (GH * 0.5));
        const score = avgStrength * 1.8 + Math.min(bh, 45) * 1.2 - distCenter * 28;

        candidateBlobs.push({ bx0, by0, bx1, by1, bw, bh, area, avgStrength, score });
      }
    }

    candidateBlobs.sort((a, b) => b.score - a.score);
    let chosenBlob = candidateBlobs[0] || null;

    let charCanvas = null;
    if (chosenBlob) {
      // Découper la lettre détectée dans le canevas 640x480 haute résolution et la zoomer en 160x160
      const padX = Math.max(3, Math.round(chosenBlob.bw * 0.22));
      const padY = Math.max(3, Math.round(chosenBlob.bh * 0.22));
      const gx0 = clamp(chosenBlob.bx0 - padX, 0, GW - 1);
      const gy0 = clamp(chosenBlob.by0 - padY, 0, GH - 1);
      const gx1 = clamp(chosenBlob.bx1 + padX, 0, GW - 1);
      const gy1 = clamp(chosenBlob.by1 + padY, 0, GH - 1);

      const rx0 = Math.floor((gx0 / GW) * W);
      const ry0 = Math.floor((gy0 / GH) * H);
      const rx1 = Math.min(W, Math.ceil(((gx1 + 1) / GW) * W));
      const ry1 = Math.min(H, Math.ceil(((gy1 + 1) / GH) * H));
      const cropW = Math.max(8, rx1 - rx0);
      const cropH = Math.max(8, ry1 - ry0);

      const subData = ctx.getImageData(rx0, ry0, cropW, cropH).data;
      const effArr = new Float32Array(cropW * cropH);
      let maxEff = 0;
      let minEff = 255;

      for (let p = 0; p < cropW * cropH; p++) {
        const r = subData[p * 4];
        const g = subData[p * 4 + 1];
        const b = subData[p * 4 + 2];
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const eff = Math.max(0, minC - (maxC - minC) * 0.5);
        effArr[p] = eff;
        if (eff > maxEff) maxEff = eff;
        if (eff < minEff) minEff = eff;
      }

      // Vérifier que la lettre est bien entourée d'un fond de carte claire (maxEff >= 80)
      // et possède un vrai contraste d'encre (maxEff - minEff >= 22)
      if (maxEff < 80 || maxEff - minEff < 22) {
        chosenBlob = null;
      } else {
        // Seuil d'Otsu / point médian entre le papier clair (maxEff) et l'encre de la lettre (minEff)
        const thresh = minEff + (maxEff - minEff) * 0.56;

        const binCrop = document.createElement("canvas");
        binCrop.width = cropW;
        binCrop.height = cropH;
        const bCtx = binCrop.getContext("2d");
        const bImg = bCtx.createImageData(cropW, cropH);
        const bData = bImg.data;

        for (let p = 0; p < cropW * cropH; p++) {
          const isInk = effArr[p] < thresh;
          const v = isInk ? 0 : 255;
          bData[p * 4] = v;
          bData[p * 4 + 1] = v;
          bData[p * 4 + 2] = v;
          bData[p * 4 + 3] = 255;
        }
        bCtx.putImageData(bImg, 0, 0);

        charCanvas = document.createElement("canvas");
        charCanvas.width = 160;
        charCanvas.height = 160;
        const cCtx = charCanvas.getContext("2d", { willReadFrequently: true });
        cCtx.fillStyle = "#ffffff";
        cCtx.fillRect(0, 0, 160, 160);

        const scale = Math.min(108 / cropW, 108 / cropH);
        const drawW = Math.max(16, Math.round(cropW * scale));
        const drawH = Math.max(16, Math.round(cropH * scale));
        const dx = Math.round((160 - drawW) / 2);
        const dy = Math.round((160 - drawH) / 2);

        cCtx.imageSmoothingEnabled = false;
        cCtx.drawImage(binCrop, 0, 0, cropW, cropH, dx, dy, drawW, drawH);
      }
    }

    // Canevas global nettoyé (sans les zones sombres de bordure)
    const normCanvas = document.createElement("canvas");
    normCanvas.width = GW + 24;
    normCanvas.height = GH + 24;
    const nCtx = normCanvas.getContext("2d", { willReadFrequently: true });
    nCtx.fillStyle = "#ffffff";
    nCtx.fillRect(0, 0, normCanvas.width, normCanvas.height);

    const nImg = nCtx.createImageData(GW, GH);
    const nData = nImg.data;
    for (let i = 0; i < GW * GH; i++) {
      const v = strokeMask[i] ? 0 : 255;
      nData[i * 4] = v;
      nData[i * 4 + 1] = v;
      nData[i * 4 + 2] = v;
      nData[i * 4 + 3] = 255;
    }
    nCtx.putImageData(nImg, 12, 12);

    return {
      hasSalientContent: Boolean(chosenBlob),
      hasWhiteCard: true,
      motionDiff,
      charCanvas,
      normCanvas,
      invCanvas: null,
      chosenBlob
    };
  }

  function showOcrToast(message) {
    let toast = document.getElementById("focrSilentToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "focrSilentToast";
      toast.style.cssText =
        "position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:9999;padding:6px 16px;border-radius:999px;background:rgba(5,150,105,0.95);color:#ffffff;border:2px solid #a7f3d0;box-shadow:0 6px 18px rgba(0,0,0,0.22);font-family:Nunito,Cairo,sans-serif;font-size:12.5px;font-weight:900;pointer-events:none;transition:opacity 0.25s ease;opacity:0;";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = "1";
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2200);
  }

  function removeActivityOcrHud() {
    if (bgScanTimer) {
      clearInterval(bgScanTimer);
      bgScanTimer = null;
    }
    if (bgStream) {
      bgStream.getTracks().forEach((t) => t.stop());
      bgStream = null;
    }
    document.getElementById("fennckyOcrHudDock")?.remove();
    document.getElementById("focrHiddenBgVideo")?.remove();
  }

  async function recognizeFromActiveCamera(forceImmediate = false) {
    const bgVideo = document.getElementById("focrHiddenBgVideo");
    if (bgIsScanning || !bgStream || !bgVideo || bgVideo.readyState < 2) return null;
    if (!global.Tesseract) return null;

    const calibModal = document.getElementById("fennckySystemModal");
    if (calibModal && !calibModal.classList.contains("hidden")) return null;

    bgIsScanning = true;
    try {
      const rawCanvas = document.createElement("canvas");
      rawCanvas.width = 640;
      rawCanvas.height = 480;
      const currentCfg = getOcrConfig();
      drawRoiFromSourceToCanvas(bgVideo, true, currentCfg, rawCanvas);

      const { hasSalientContent, hasWhiteCard, motionDiff, charCanvas, normCanvas } = prepareSalientLetterCanvases(rawCanvas);

      const path = (window.location.pathname || "").toLowerCase();
      const isPracticePage = path.endsWith("practice.html") && Boolean(global.PracticeOCR);

      // Si aucune carte blanche avec lettre n'est posée devant la caméra
      if (!hasSalientContent || !hasWhiteCard) {
        emptyCardStreak++;
        prevCandidateChar = "";
        stableCharStreak = 0;
        if (emptyCardStreak >= 2 && isPracticePage && typeof global.PracticeOCR.notifyCardRemoved === "function") {
          global.PracticeOCR.notifyCardRemoved();
          lastDetectedToken = "";
        }
        if (!forceImmediate) {
          return null;
        }
      } else {
        emptyCardStreak = 0;
      }

      // Si l'utilisateur est en train de bouger brusquement la main pour poser ou retirer une carte
      // (tolère le léger tremblement naturel des mains sur smartphone jusqu'à 16.0)
      if (!forceImmediate && motionDiff > 16.0) {
        stableCharStreak = 0;
        return null;
      }

      const worker = await getOrCreateOcrWorker();
      const isNumbersActive =
        path.endsWith("numbers.html") ||
        (isPracticePage && typeof global.PracticeOCR.isNumbersCategory === "function" && global.PracticeOCR.isNumbersCategory());
      const activeWhitelist = isNumbersActive ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let bestText = "";
      let bestConf = 0;

      if (worker) {
        // 1. Essai en mode caractère unique (PSM 10) sur le blob de lettre isolé
        if (charCanvas) {
          await worker.setParameters({
            tessedit_char_whitelist: activeWhitelist,
            tessedit_pageseg_mode: "10"
          });
          const res1 = await worker.recognize(charCanvas);
          const t1 = (res1?.data?.text || "").replace(/[^A-Z0-9]/gi, "").trim().toUpperCase();
          const c1 = res1?.data?.confidence ?? 0;
          if (t1 && c1 >= bestConf) {
            bestText = t1;
            bestConf = c1;
          }

          // Second passage en PSM 8 (mot/jeton unique) sur la lettre isolée si confiance < 60
          if (!bestText || bestConf < 60) {
            await worker.setParameters({
              tessedit_char_whitelist: activeWhitelist,
              tessedit_pageseg_mode: "8"
            });
            const res1b = await worker.recognize(charCanvas);
            const t1b = (res1b?.data?.text || "").replace(/[^A-Z0-9]/gi, "").trim().toUpperCase();
            const c1b = res1b?.data?.confidence ?? 0;
            if (t1b && c1b > bestConf) {
              bestText = t1b;
              bestConf = c1b;
            }
          }
        }

        // 2. Uniquement en cas de clic manuel ("Lire la lettre") si aucun blob n'a été isolé
        if (forceImmediate && (!bestText || bestConf < 55) && normCanvas) {
          await worker.setParameters({
            tessedit_char_whitelist: activeWhitelist,
            tessedit_pageseg_mode: "11"
          });
          const res2 = await worker.recognize(normCanvas);
          const t2 = (res2?.data?.text || "").replace(/[^A-Z0-9]/gi, "").trim().toUpperCase();
          const c2 = res2?.data?.confidence ?? 0;
          if (t2 && c2 > bestConf) {
            bestText = t2;
            bestConf = c2;
          }
        }
      } else if (typeof global.Tesseract.recognize === "function" && charCanvas) {
        const { data } = await global.Tesseract.recognize(charCanvas, "eng");
        bestText = (data?.text || "").replace(/[^A-Z0-9]/gi, "").trim().toUpperCase();
        bestConf = data?.confidence ?? 0;
      }

      // Secours par corrélation de glyphes sur le blob isolé si Tesseract n'a rien trouvé ou hésite (bestConf < 55)
      if ((!bestText || bestConf < 55) && charCanvas) {
        const fallbackChar = await recognizeCanvasText(charCanvas, "", true);
        if (fallbackChar) {
          bestText = fallbackChar;
          bestConf = Math.max(bestConf, 58);
        }
      }

      if (!bestText) {
        prevCandidateChar = "";
        stableCharStreak = 0;
        return null;
      }

      // Sur practice.html?system=ocr : mode bienveillant sans erreurs en boucle
      if (isPracticePage) {
        const candidateChar = bestText === "10" ? "10" : bestText.charAt(0);
        const minConf = forceImmediate ? 25 : 44;
        if (bestConf < minConf) return null;

        if (candidateChar === prevCandidateChar) {
          stableCharStreak++;
        } else {
          prevCandidateChar = candidateChar;
          stableCharStreak = 1;
        }

        const expInfo = typeof global.PracticeOCR.getExpectedLetterInfo === "function"
          ? global.PracticeOCR.getExpectedLetterInfo()
          : { active: false, accepted: [] };
        const isExpectedCorrect = expInfo.active && (expInfo.accepted.includes(candidateChar) || expInfo.accepted.includes(bestText));

        // Pour la bonne réponse : validation réactive dès 2 frames stables (ou 1 frame à confiance >= 54)
        // Pour une mauvaise réponse : exige 3 frames consécutives stables et haute confiance >= 68
        const isStable = forceImmediate || (isExpectedCorrect
          ? (stableCharStreak >= 2 || bestConf >= 54)
          : (stableCharStreak >= 3 && bestConf >= 68 && motionDiff < 14.0));

        if (!isStable) return null;

        const now = Date.now();
        if (!forceImmediate && candidateChar === lastDetectedToken && now - lastDetectedTime < 3000) {
          return null;
        }

        lastDetectedToken = candidateChar;
        lastDetectedTime = now;
        global.PracticeOCR.handleCameraLetter(candidateChar, {
          isAutoBackground: !forceImmediate,
          isHighConfidenceNewCard: forceImmediate || (stableCharStreak >= 3 && bestConf >= 68 && motionDiff < 14.0)
        });
        return candidateChar;
      }

      // Sur les autres pages d'activité OCR
      if (bestConf < (forceImmediate ? 38 : 52)) return null;
      const targets = collectPageSuggestions().map((s) => s.toUpperCase());
      const rawTokens = bestText.split(/[^A-Z0-9À-Ÿ]+/).filter(Boolean);
      const matchedTarget =
        targets.find((t) => rawTokens.includes(t) || bestText === t || bestText.charAt(0) === t) ||
        (forceImmediate ? bestText.charAt(0) : null);

      const now = Date.now();
      if (matchedTarget && (forceImmediate || matchedTarget !== lastDetectedToken || now - lastDetectedTime > 3500)) {
        const actionMsg = dispatchOcrResultToPage(matchedTarget);
        if (actionMsg) {
          lastDetectedToken = matchedTarget;
          lastDetectedTime = now;
          showOcrToast(`📷 OCR : « ${matchedTarget} » — ${actionMsg}`);
        }
      }
      return matchedTarget;
    } catch (_) {
      return null;
    } finally {
      bgIsScanning = false;
    }
  }

  async function scanCameraNow() {
    if (!bgStream) {
      await initActivityOcrHud();
    }
    return recognizeFromActiveCamera(true);
  }

  async function initActivityOcrHud() {
    const path = (window.location.pathname || "").toLowerCase();
    // Pas de scan automatique sur index.html, category.html, category-ocr.html, cours.html ou progression.html
    if (
      path.endsWith("index.html") ||
      path.endsWith("category.html") ||
      path.endsWith("category-ocr.html") ||
      path.endsWith("cours.html") ||
      path.endsWith("progression.html") ||
      path.endsWith("tracing.html") ||
      path.endsWith("stories.html") ||
      path.endsWith("vocabulary.html") ||
      path === "/" ||
      path === ""
    ) {
      removeActivityOcrHud();
      return;
    }

    if (getSystemMode() !== "ocr") {
      removeActivityOcrHud();
      return;
    }

    // Supprimer toute ancienne fenêtre de caméra visible
    document.getElementById("fennckyOcrHudDock")?.remove();
    ensureTesseractLoaded();

    if (bgStream && document.getElementById("focrHiddenBgVideo")) return;

    const cfg = getOcrConfig();

    // Élément vidéo invisible qui maintient le flux caméra actif en arrière-plan
    let bgVideo = document.getElementById("focrHiddenBgVideo");
    if (!bgVideo) {
      bgVideo = document.createElement("video");
      bgVideo.id = "focrHiddenBgVideo";
      bgVideo.autoplay = true;
      bgVideo.playsInline = true;
      bgVideo.muted = true;
      bgVideo.style.cssText =
        "position:fixed;bottom:0;left:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:-1;";
      document.body.appendChild(bgVideo);
    }

    try {
      bgStream = await acquireCameraStream(cfg);
      bgVideo.srcObject = bgStream;
      const playPromise = bgVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }

      // Connecter aussi le mini-retour vidéo en direct sur practice.html (#practiceOcrMiniVideo)
      const miniVid = document.getElementById("practiceOcrMiniVideo");
      if (miniVid) {
        miniVid.srcObject = bgStream;
        miniVid.style.transform = getVideoTransformCSS(cfg);
        const p2 = miniVid.play();
        if (p2 && typeof p2.catch === "function") p2.catch(() => {});
      }
    } catch (_) {
      return;
    }

    // Boucle d'analyse OCR continue en arrière-plan
    if (bgScanTimer) clearInterval(bgScanTimer);
    bgScanTimer = setInterval(() => {
      recognizeFromActiveCamera(false);
    }, 900);
  }

  /* =========================================================
     6. INTERCEPTION DES CLICS SUR "OPEN KIDS LEARNER" (INDEX.HTML)
     ========================================================= */
  function bindIndexOpenKidsLearnerTriggers() {
    const path = (window.location.pathname || "").toLowerCase();
    const isIndex = path.endsWith("index.html") || path === "/" || path === "";
    if (!isIndex) return;

    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href*="category.html"]');
      if (!link) return;
      // Ne pas intercepter les boutons à l'intérieur de la modale elle-même
      if (link.closest("#fennckySystemModal")) return;

      e.preventDefault();
      e.stopPropagation();
      openSystemChoiceModal(link.getAttribute("href") || "category.html");
    }, true);
  }

  function init() {
    bindIndexOpenKidsLearnerTriggers();
    renderCategoryOcrBanner();
    initActivityOcrHud();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("appLanguageChanged", () => {
    renderCategoryOcrBanner();
  });

  window.addEventListener("fennckyOcrConfigUpdated", () => {
    renderCategoryOcrBanner();
    removeActivityOcrHud();
    initActivityOcrHud();
  });

  function resetLastDetectedToken() {
    lastDetectedToken = "";
    lastDetectedTime = 0;
    prevCandidateChar = "";
  }

  async function evaluateHandwritingFromSource(sourceEl, expectedLetter = "") {
    if (!sourceEl) {
      return { success: false, error: "NO_SOURCE" };
    }

    const rawCanvas = document.createElement("canvas");
    rawCanvas.width = 640;
    rawCanvas.height = 480;
    const currentCfg = getOcrConfig();
    drawRoiFromSourceToCanvas(sourceEl, true, currentCfg, rawCanvas);

    const { hasSalientContent, hasWhiteCard, charCanvas } = prepareSalientLetterCanvases(rawCanvas);

    if (!hasWhiteCard || !hasSalientContent || !charCanvas) {
      return {
        success: false,
        error: "NO_LETTER_DETECTED",
        hasWhiteCard: Boolean(hasWhiteCard),
        hasSalientContent: Boolean(hasSalientContent),
        shapeScore: 0,
        sizeScore: 0,
        alignScore: 0,
        detectedLetter: ""
      };
    }

    // 1. Essai OCR Tesseract si disponible
    let detected = "";
    let confidence = 0;
    const worker = await getOrCreateOcrWorker();
    if (worker) {
      try {
        await worker.setParameters({
          tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          tessedit_pageseg_mode: "10"
        });
        const res = await worker.recognize(charCanvas);
        detected = (res?.data?.text || "").replace(/[^a-zA-Z0-9]/g, "").trim().toUpperCase();
        confidence = res?.data?.confidence || 0;
      } catch (_) {}
    }

    // 2. Corrélation de templates de glyphes 24x24 (instantané)
    buildGlyphTemplates();
    const ctx = charCanvas.getContext("2d", { willReadFrequently: true });
    const imgData = ctx.getImageData(0, 0, 160, 160).data;

    let minX = 160, minY = 160, maxX = 0, maxY = 0;
    for (let y = 0; y < 160; y++) {
      for (let x = 0; x < 160; x++) {
        const idx = (y * 160 + x) * 4;
        if (imgData[idx] < 140) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const norm = document.createElement("canvas");
    norm.width = 24;
    norm.height = 24;
    const nCtx = norm.getContext("2d", { willReadFrequently: true });
    nCtx.fillStyle = "#ffffff";
    nCtx.fillRect(0, 0, 24, 24);

    const bw = Math.max(1, maxX - minX + 1);
    const bh = Math.max(1, maxY - minY + 1);
    nCtx.drawImage(charCanvas, minX, minY, bw, bh, 2, 2, 20, 20);
    const nData = nCtx.getImageData(0, 0, 24, 24).data;

    let bestChar = "";
    let bestScore = -Infinity;
    let expectedTemplateScore = 0;
    const expUpper = (expectedLetter || "").toUpperCase();

    for (const ch of Object.keys(GLYPH_TEMPLATES)) {
      const tpl = GLYPH_TEMPLATES[ch];
      let score = 0;
      for (let p = 0; p < 24 * 24; p++) {
        const isDark = nData[p * 4] < 165 ? 1 : 0;
        score += isDark === tpl[p] ? 1 : -1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestChar = ch;
      }
      if (ch === expUpper) {
        expectedTemplateScore = score;
      }
    }

    if (!detected || confidence < 50) {
      detected = bestChar;
    }

    // Calcul des métriques de calligraphie réelles
    const shapeScore = Math.min(99, Math.max(48, Math.round(((expectedTemplateScore || bestScore) + 576) / (5.76 * 2) * 1.08)));
    const targetAspect = 0.72;
    const actualAspect = bw / bh;
    const aspectDiff = Math.abs(actualAspect - targetAspect);
    const sizeScore = Math.min(99, Math.max(55, Math.round(100 - aspectDiff * 38)));
    const centerOffsetX = Math.abs((minX + maxX) / 2 - 80) / 80;
    const centerOffsetY = Math.abs((minY + maxY) / 2 - 80) / 80;
    const alignScore = Math.min(99, Math.max(60, Math.round(100 - (centerOffsetX * 20 + centerOffsetY * 20))));

    const isMatch = expUpper ? (detected === expUpper || bestChar === expUpper) : true;

    return {
      success: true,
      detectedLetter: detected || bestChar,
      expectedLetter: expUpper,
      isMatch,
      shapeScore,
      sizeScore,
      alignScore,
      charCanvas
    };
  }

  global.FennckyOCR = {
    getSystemMode,
    setSystemMode,
    getOcrConfig,
    saveOcrConfig,
    acquireCameraStream,
    evaluateHandwritingFromSource,
    openSystemChoiceModal,
    openCameraCalibrationModal,
    renderCategoryOcrBanner,
    initActivityOcrHud,
    scanCameraNow,
    resetLastDetectedToken
  };
})(window);
