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
    updateHeaderNav();
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

  // Shared audio element for Google TTS fallback (reused across calls)
  let _ttsAudio = null;

  /**
   * Detect whether the browser has a voice installed for a given language prefix (e.g. "ar", "fr", "en").
   * Returns true only when at least one matching voice is loaded.
   */
  function _hasVoiceForLang(prefix) {
    if (!("speechSynthesis" in window)) return false;
    const voices = window.speechSynthesis.getVoices();
    return voices.some(v => v.lang.toLowerCase().startsWith(prefix.toLowerCase()));
  }

  /**
   * Play audio via Google Translate TTS (used as fallback when no OS voice matches).
   * `onEnded` callback is called when playback ends (or fails).
   */
  function _playGoogleTTS(text, langPrefix, onEnded) {
    const encoded = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langPrefix}&client=tw-ob&q=${encoded}`;
    if (!_ttsAudio) {
      _ttsAudio = new Audio();
    }
    _ttsAudio.pause();
    _ttsAudio.src = url;
    if (typeof onEnded === "function") {
      _ttsAudio.onended = onEnded;
      _ttsAudio.onerror = onEnded;
    } else {
      _ttsAudio.onended = null;
      _ttsAudio.onerror = null;
    }
    _ttsAudio.play().catch(() => {
      if (typeof onEnded === "function") onEnded();
    });
  }

  /**
   * Voice speech synthesis helper.
   * Tries SpeechSynthesis first; if no matching OS voice exists for the language,
   * falls back to Google Translate TTS played via an <audio> element.
   *
   * @param {string}   text      - Text to speak
   * @param {string}   langCode  - BCP-47 language tag (e.g. "ar-SA", "fr-FR"). Defaults to current language.
   * @param {number}   rate      - Speech rate (SpeechSynthesis only)
   * @param {number}   pitch     - Speech pitch (SpeechSynthesis only)
   * @param {Function} onEnded   - Optional callback fired when speech ends (Google TTS path only)
   */
  function speak(text, langCode = null, rate = 0.85, pitch = 1.1, onEnded = null) {
    if (!text) return;

    const targetLangCode = langCode || getCurrentLang().speechLang;
    const langPrefix = targetLangCode.slice(0, 2).toLowerCase();

    // If no matching OS voice, use Google TTS fallback
    if (!_hasVoiceForLang(langPrefix)) {
      _playGoogleTTS(text, langPrefix, onEnded);
      return;
    }

    // Native SpeechSynthesis path
    if (!("speechSynthesis" in window)) return;

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

  // Header language switcher widget
  function setupHeaderLanguageWidget() {
    const nav = document.querySelector("#header nav");
    const mobileMenu = document.getElementById("mobileMenu");
    const headerContainer = document.querySelector("#header header");
    if (!headerContainer) return;

    // Check if widget already exists
    if (document.getElementById("headerLangWidget")) return;

    const current = getCurrentLang();

    const widget = document.createElement("div");
    widget.id = "headerLangWidget";
    widget.className = "header-lang-widget";
    widget.setAttribute("role", "button");
    widget.setAttribute("tabindex", "0");
    widget.setAttribute("aria-label", "Switch language");

    widget.innerHTML = `
      <img src="${current.flag}" alt="${current.name}" class="header-lang-flag">
      <span>${current.nativeName}</span>
      <i class="fa-solid fa-chevron-down text-xs ml-1 opacity-80" aria-hidden="true"></i>
      <div class="header-lang-dropdown" id="headerLangDropdown">
        <div class="header-lang-option ${current.id === 'English' ? 'active' : ''}" data-lang="English">
          <img src="${LANGUAGES.English.flag}" class="header-lang-flag" alt="">
          <span>English</span>
        </div>
        <div class="header-lang-option ${current.id === 'French' ? 'active' : ''}" data-lang="French">
          <img src="${LANGUAGES.French.flag}" class="header-lang-flag" alt="">
          <span>Français</span>
        </div>
        <div class="header-lang-option ${current.id === 'Arabic' ? 'active' : ''}" data-lang="Arabic">
          <img src="${LANGUAGES.Arabic.flag}" class="header-lang-flag" alt="">
          <span>العربية</span>
        </div>
      </div>
    `;

    // Insert before menuBtn or at end of header
    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
      headerContainer.insertBefore(widget, menuBtn);
    } else {
      headerContainer.appendChild(widget);
    }

    const dropdown = widget.querySelector("#headerLangDropdown");

    widget.addEventListener("click", (e) => {
      const option = e.target.closest(".header-lang-option");
      if (option) {
        const selectedId = option.getAttribute("data-lang");
        dropdown.classList.remove("open");
        setLang(selectedId, true);
        return;
      }
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!widget.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });

    updateHeaderNav();
  }

  function updateHeaderNav() {
    const lang = getCurrentLang();
    const navLinks = document.querySelectorAll("#header nav a, #mobileMenu a");
    if (navLinks.length >= 1) {
      navLinks[0].textContent = lang.nav.apps;
      if (navLinks.length >= 2) navLinks[1].textContent = lang.nav.store;
      if (navLinks.length >= 3) navLinks[2].textContent = lang.nav.parents;
      if (navLinks.length >= 4) navLinks[3].textContent = lang.nav.join;
      if (navLinks.length >= 5) navLinks[4].textContent = lang.nav.signIn;
    }
  }

  // Auto initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    applyPageDirection();
  });

  // Pre-load speech voices
  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      window.speechSynthesis.getVoices();
    });
  }

  // Export to global scope
  global.AppLang = {
    LANGUAGES,
    getCurrentLangId,
    getCurrentLang,
    setLang,
    applyPageDirection,
    speak,
    setupHeaderLanguageWidget,
    updateHeaderNav
  };
})(window);
