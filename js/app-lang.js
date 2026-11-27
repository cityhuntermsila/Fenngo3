/**
 * AppLang - Central Language Manager for Fenncky
 * Supports: English (Main) and French (Français)
 */
(function (global) {
  "use strict";

  const LANGUAGES = {
    English: {
      id: "English",
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "assets/images/flags/usa.png",
      speechLang: "en-US",
      dir: "ltr",
      nav: {
        apps: "Apps",
        store: "Store",
        parents: "Parents & Teachers",
        join: "How to Join",
        signIn: "Sign In",
        back: "Back",
        home: "Home",
        changeLanguage: "Change Language"
      },
      categoryPage: {
        title: "Kids Learner",
        alphabet: "Alphabet",
        numbers: "Numbers",
        colors: "Colors",
        geometry: "Geometry"
      },
      kindergartenPage: {
        exploreAlt: "Explore",
        cardAria: "Open Kindergarten learning categories"
      }
    },
    French: {
      id: "French",
      code: "fr",
      name: "Français",
      nativeName: "Français",
      flag: "assets/images/flags/france.png",
      speechLang: "fr-FR",
      dir: "ltr",
      nav: {
        apps: "Applications",
        store: "Boutique",
        parents: "Parents & Enseignants",
        join: "Comment rejoindre",
        signIn: "Connexion",
        back: "Retour",
        home: "Accueil",
        changeLanguage: "Changer de langue"
      },
      categoryPage: {
        title: "Apprenant Junior",
        alphabet: "Alphabet",
        numbers: "Nombres",
        colors: "Couleurs",
        geometry: "Géométrie"
      },
      kindergartenPage: {
        exploreAlt: "Explorer",
        cardAria: "Ouvrir les catégories d'apprentissage"
      }
    }
  };

  const STORAGE_KEY = "selectedLanguage";
  const DEFAULT_EN_MIGRATION_KEY = "fenncky_default_en_v1";

  // Assurer que le site démarre par défaut en Anglais
  try {
    if (!localStorage.getItem(DEFAULT_EN_MIGRATION_KEY)) {
      localStorage.setItem(DEFAULT_EN_MIGRATION_KEY, "1");
      localStorage.setItem(STORAGE_KEY, "English");
    }
  } catch (_) {}

  function getCurrentLangId() {
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (saved === "french" || saved === "fr") {
      return "French";
    }
    if (!localStorage.getItem(STORAGE_KEY)) {
      try { localStorage.setItem(STORAGE_KEY, "English"); } catch (_) {}
    }
    return "English";
  }

  function getCurrentLang() {
    return LANGUAGES[getCurrentLangId()] || LANGUAGES.English;
  }

  function setLang(langId, reload = false) {
    if (!LANGUAGES[langId]) langId = "English";
    localStorage.setItem(STORAGE_KEY, langId);
    applyPageDirection();
    updateBackButtonLabel();
    if (reload) {
      window.location.reload();
    } else {
      window.dispatchEvent(new CustomEvent("appLanguageChanged", { detail: LANGUAGES[langId] }));
    }
  }

  function applyPageDirection() {
    const lang = getCurrentLang();
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang.code;
    document.body.classList.remove("lang-arabic");
  }

  // Shared audio element for local MP3 / TTS playback
  let _ttsAudio = null;

  /**
   * Same deterministic FNV-1a 32-bit hash used in download-sounds.js
   */
  function hashText(str) {
    const normalized = String(str).trim();
    let h = 2166136261;
    for (let i = 0; i < normalized.length; i++) {
      h ^= normalized.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16).padStart(8, "0");
  }

  function getLocalAudioPath(text, langPrefix) {
    const hash = hashText(text);
    return `assets/audio/${langPrefix}/${hash}.mp3`;
  }

  /**
   * Detect whether the browser has a voice installed for a given language prefix (e.g. "ar", "fr", "en").
   */
  function _hasVoiceForLang(prefix) {
    if (!("speechSynthesis" in window)) return false;
    const voices = window.speechSynthesis.getVoices();
    return voices.some(v => v.lang.toLowerCase().startsWith(prefix.toLowerCase()));
  }

  /**
   * Native Web Speech API helper with fallback to default system voice if specific locale voice isn't installed.
   */
  function _speakWithWebSpeech(text, targetLangCode, rate = 0.85, pitch = 1.1, onEnded = null) {
    if (!("speechSynthesis" in window)) {
      if (typeof onEnded === "function") onEnded();
      return false;
    }

    const langPrefix = (targetLangCode || "en-US").slice(0, 2).toLowerCase();
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLangCode;
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voices = window.speechSynthesis.getVoices();
    const match =
      voices.find((v) => v.lang.toLowerCase() === targetLangCode.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix)) ||
      voices[0];
    if (match) utterance.voice = match;

    let ended = false;
    const finish = () => {
      if (ended) return;
      ended = true;
      if (typeof onEnded === "function") onEnded();
    };

    utterance.onend = finish;
    utterance.onerror = finish;

    window.speechSynthesis.speak(utterance);
    return true;
  }

  /**
   * Play local pre-downloaded MP3 file in assets/audio/<langPrefix>/<hash>.mp3,
   * with immediate fallback to Web Speech API (SpeechSynthesis) if the local file is not found.
   */
  function _playLocalOrRemoteTTS(text, langPrefix, targetLangCode, rate, pitch, onEnded) {
    const localUrl = getLocalAudioPath(text, langPrefix);

    if (!_ttsAudio) {
      _ttsAudio = new Audio();
    }
    _ttsAudio.pause();

    let handledFallback = false;
    const fallbackToSpeech = () => {
      if (handledFallback) return;
      handledFallback = true;
      _speakWithWebSpeech(text, targetLangCode || (langPrefix === "fr" ? "fr-FR" : "en-US"), rate, pitch, onEnded);
    };

    _ttsAudio.onended = () => {
      if (handledFallback) return;
      handledFallback = true;
      if (typeof onEnded === "function") onEnded();
    };

    _ttsAudio.onerror = fallbackToSpeech;

    _ttsAudio.src = localUrl;
    const playPromise = _ttsAudio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(fallbackToSpeech);
    }
  }

  /**
   * Voice speech synthesis helper.
   * Tries pre-downloaded local MP3 first for French ("fr"), then falls back seamlessly to Web Speech API.
   */
  function speak(text, langCode = null, rate = 0.85, pitch = 1.1, onEnded = null) {
    if (!text) {
      if (typeof onEnded === "function") onEnded();
      return;
    }

    const targetLangCode = langCode || getCurrentLang().speechLang;
    const langPrefix = targetLangCode.slice(0, 2).toLowerCase();

    if (langPrefix === "fr" || !_hasVoiceForLang(langPrefix)) {
      window.speechSynthesis?.cancel?.();
      _playLocalOrRemoteTTS(text, langPrefix, targetLangCode, rate, pitch, onEnded);
      return;
    }

    if (_ttsAudio) {
      _ttsAudio.pause();
    }
    _speakWithWebSpeech(text, targetLangCode, rate, pitch, onEnded);
  }

  function stopSpeech() {
    if (_ttsAudio) {
      _ttsAudio.pause();
      _ttsAudio.currentTime = 0;
    }
    window.speechSynthesis?.cancel?.();
  }

  /**
   * Determine the back navigation target based on current page and active system mode (category.html vs category-ocr.html).
   */
  function getBackTargetUrl() {
    const path = (window.location.pathname || "").toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const urlSys = params.get("system");
    if (urlSys === "ocr" || urlSys === "simple") {
      localStorage.setItem("fenncky_system_mode", urlSys);
    }
    if (path.endsWith("category.html")) {
      localStorage.setItem("fenncky_system_mode", "simple");
      return "index.html";
    }
    if (path.endsWith("category-ocr.html") || path.endsWith("kindergarten.html")) {
      if (path.endsWith("category-ocr.html")) {
        localStorage.setItem("fenncky_system_mode", "ocr");
      }
      return "index.html";
    }

    const isOcrMode = localStorage.getItem("fenncky_system_mode") === "ocr";
    const categoryTarget = isOcrMode ? "category-ocr.html" : "category.html";

    if (
      path.endsWith("alphabet.html") ||
      path.endsWith("numbers.html") ||
      path.endsWith("colors.html") ||
      path.endsWith("geometry.html") ||
      path.endsWith("geometric.html") ||
      path.endsWith("family.html") ||
      path.endsWith("stationery.html") ||
      path.endsWith("body-parts.html") ||
      path.endsWith("daily-routine.html") ||
      path.endsWith("common-orders.html")
    ) {
      return isOcrMode ? "cours.html?system=ocr" : "cours.html";
    }
    if (
      path.endsWith("cours.html") ||
      path.endsWith("practice.html") ||
      path.endsWith("vocabulary.html") ||
      path.endsWith("games.html") ||
      path.endsWith("tracing.html") ||
      path.endsWith("test.html") ||
      path.endsWith("stories.html") ||
      path.endsWith("progression.html")
    ) {
      return categoryTarget;
    }
    return categoryTarget;
  }

  /**
   * Creates and injects the universal Back button on all pages except index.html.
   */
  function setupBackButton() {
    const path = (window.location.pathname || "").toLowerCase();
    if (path.endsWith("index.html") || path.endsWith("progression.html") || path.endsWith("practice.html") || path === "/" || path === "") {
      const existing = document.getElementById("globalBackBtn");
      if (existing) existing.remove();
      return;
    }

    if (document.getElementById("globalBackBtn")) {
      updateBackButtonLabel();
      return;
    }

    const current = getCurrentLang();
    const targetUrl = getBackTargetUrl();

    const backBtn = document.createElement("a");
    backBtn.id = "globalBackBtn";
    backBtn.href = targetUrl;
    backBtn.className = "global-back-btn";
    backBtn.setAttribute("aria-label", current.nav.back);

    backBtn.innerHTML = `
      <i class="fa-solid fa-arrow-left back-btn-icon" aria-hidden="true"></i>
      <span id="globalBackBtnText">${current.nav.back}</span>
    `;

    const appContainer =
      document.querySelector(".alphabet-app, .numbers-app, .colors-app, .geometry-app, .family-app, .topic-app, .games-app, .category-app, .kindergarten-app, .vocab-app") ||
      document.body;

    appContainer.appendChild(backBtn);
  }

  function updateBackButtonLabel() {
    const textEl = document.getElementById("globalBackBtnText");
    const btnEl = document.getElementById("globalBackBtn");
    if (!textEl || !btnEl) return;
    const current = getCurrentLang();
    textEl.textContent = current.nav.back;
    btnEl.setAttribute("aria-label", current.nav.back);
  }

  function setupHeaderLanguageWidget() {
    setupBackButton();
  }
  function updateHeaderNav() {
    updateBackButtonLabel();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyPageDirection();
    setupBackButton();

    // Auto-load Fenny Virtual Companion on all pages
    if (!window.FennyGo && !document.querySelector('script[src*="fenny-companion.js"]')) {
      const s = document.createElement("script");
      s.src = "js/fenny-companion.js?v=92";
      document.body.appendChild(s);
    }

    // Auto-load Fenncky OCR & System Selector (1. Système Simple | 2. Système OCR) on all pages
    if (!window.FennckyOCR && !document.querySelector('script[src*="ocr-system.js"]')) {
      const ocrScript = document.createElement("script");
      ocrScript.src = "js/ocr-system.js?v=92";
      document.body.appendChild(ocrScript);
    }
  });

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      window.speechSynthesis.getVoices();
    });
  }

    // Stop all audio on page unload or visibility change
  window.addEventListener("pagehide", stopSpeech);
  window.addEventListener("beforeunload", stopSpeech);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopSpeech();
  });
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a && (a.id === "globalBackBtn" || a.classList.contains("global-back-btn") || (a.href && (a.href.includes("category.html") || a.href.includes("cours.html") || a.href.includes("index.html"))))) {
      stopSpeech();
    }
  });

  global.AppLang = {
    LANGUAGES,
    getCurrentLangId,
    getCurrentLang,
    setLang,
    applyPageDirection,
    speak,
    stopSpeech,
    hashText,
    getLocalAudioPath,
    setupBackButton,
    setupHeaderLanguageWidget,
    updateHeaderNav
  };
})(window);
