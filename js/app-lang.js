/**
 * AppLang - Central Language Manager for Fenncky
 * Supports: English, French (Français), Arabic (العربية)
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
    },
    Arabic: {
      id: "Arabic",
      code: "ar",
      name: "العربية",
      nativeName: "العربية",
      flag: "assets/images/flags/saudi-arabia.png",
      speechLang: "ar-SA",
      dir: "rtl",
      nav: {
        apps: "التطبيقات",
        store: "المتجر",
        parents: "الآباء والمعلمون",
        join: "كيفية الانضمام",
        signIn: "تسجيل الدخول",
        back: "رجوع",
        home: "الرئيسية",
        changeLanguage: "تغيير اللغة"
      },
      categoryPage: {
        title: "تعليم الأطفال",
        alphabet: "الحروف الأبجدية",
        numbers: "الأرقام",
        colors: "الألوان",
        geometry: "الأشكال الهندسية"
      },
      kindergartenPage: {
        exploreAlt: "استكشف",
        cardAria: "فتح أقسام تعليم الروضة"
      }
    }
  };

  const STORAGE_KEY = "selectedLanguage";

  function getCurrentLangId() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES[saved]) {
      return saved;
    }
    // Normalize aliases
    if (saved === "fr" || saved === "francais" || saved === "français") return "French";
    if (saved === "ar" || saved === "arabic" || saved === "arabe") return "Arabic";
    if (saved === "en" || saved === "english" || saved === "anglais") return "English";
    return "English";
  }

  function getCurrentLang() {
    return LANGUAGES[getCurrentLangId()];
  }

  function setLang(langId, reload = false) {
    if (!LANGUAGES[langId]) return;
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
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
    if (lang.dir === "rtl") {
      document.body.classList.add("lang-arabic");
    } else {
      document.body.classList.remove("lang-arabic");
    }
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
   * Play local pre-downloaded MP3 file in assets/audio/<langPrefix>/<hash>.mp3,
   * with fallback to Google TTS or SpeechSynthesis if the local file is not found.
   */
  function _playLocalOrRemoteTTS(text, langPrefix, onEnded) {
    const localUrl = getLocalAudioPath(text, langPrefix);
    const encoded = encodeURIComponent(text.trim());
    const remoteUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langPrefix}&client=tw-ob&q=${encoded}`;

    if (!_ttsAudio) {
      _ttsAudio = new Audio();
    }
    _ttsAudio.pause();

    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      if (typeof onEnded === "function") onEnded();
    };

    _ttsAudio.onended = done;
    _ttsAudio.onerror = () => {
      // If local file failed, try remote URL once
      if (_ttsAudio.src && !_ttsAudio.src.includes("translate.google.com")) {
        _ttsAudio.onerror = done;
        _ttsAudio.src = remoteUrl;
        _ttsAudio.play().catch(done);
      } else {
        done();
      }
    };

    _ttsAudio.src = localUrl;
    _ttsAudio.play().catch(() => {
      done();
    });
  }

  /**
   * Voice speech synthesis helper.
   * For Arabic ("ar") and French ("fr"), plays pre-downloaded local MP3 files first
   * so that voice works reliably offline and without browser certificate blocks.
   */
  function speak(text, langCode = null, rate = 0.85, pitch = 1.1, onEnded = null) {
    if (!text) {
      if (typeof onEnded === "function") onEnded();
      return;
    }

    const targetLangCode = langCode || getCurrentLang().speechLang;
    const langPrefix = targetLangCode.slice(0, 2).toLowerCase();

    // Always prefer pre-downloaded local MP3s for Arabic and French
    if (langPrefix === "ar" || langPrefix === "fr" || !_hasVoiceForLang(langPrefix)) {
      window.speechSynthesis?.cancel?.();
      _playLocalOrRemoteTTS(text, langPrefix, onEnded);
      return;
    }

    // Native SpeechSynthesis path (English)
    if (!("speechSynthesis" in window)) {
      if (typeof onEnded === "function") onEnded();
      return;
    }

    if (_ttsAudio) {
      _ttsAudio.pause();
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLangCode;
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.toLowerCase() === targetLangCode.toLowerCase())
      || voices.find(v => v.lang.toLowerCase().startsWith(langPrefix));
    if (match) utterance.voice = match;

    if (typeof onEnded === "function") {
      utterance.onend = onEnded;
      utterance.onerror = onEnded;
    }

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if (_ttsAudio) {
      _ttsAudio.pause();
      _ttsAudio.currentTime = 0;
    }
    window.speechSynthesis?.cancel?.();
  }

  /**
   * Determine the back navigation target based on current page.
   */
  function getBackTargetUrl() {
    const path = (window.location.pathname || "").toLowerCase();
    if (path.endsWith("category.html") || path.endsWith("kindergarten.html")) {
      return "index.html";
    }
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
      return "cours.html";
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
      return "category.html";
    }
    return "category.html";
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
      s.src = "js/fenny-companion.js?v=3";
      document.body.appendChild(s);
    }
  });

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      window.speechSynthesis.getVoices();
    });
  }

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
