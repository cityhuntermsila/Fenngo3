/**
 * FennyGo3 - Virtual Companion ("Meet Fenny!"), Daily Check-in,
 * Progression Tracker & Gamified Badges Manager
 */
(function (global) {
  "use strict";

  const I18N = {
    English: {
      hello: "Hello!",
      companionTitle: "Your Virtual Companion",
      companionDesc:
        "Fenny provides continuous auditory pronunciation modeling, emotional support, and celebrates every correct answer to eliminate the fear of making mistakes in a new language.",
      bubbleDefault: "Hi! I'm Fenny 🦊 Click me for your Daily Check-in or voice help!",
      bubbleGreet: "Hello friend! Ready for today's English adventure? Let's earn stars together!",
      btnCheckin: "✨ Daily Check-in",
      btnProgress: "📊 Progression",
      btnShowcase: "🌟 FennyGo3 Info",
      modalTitle: "Meet Fenny! — Daily Check-in",
      step1Title: "1. Login & Greet",
      step1Desc: "Fenny says hello using native English audio playback to immerse the child immediately.",
      step1Btn: "🔊 Hear Fenny Greet You",
      step2Title: "2. Daily Check-in",
      step2Desc: "Fenny asks a simple syllabus-aligned question (Algerian 3PS Program):",
      step3Title: "3. The Hub",
      step3Desc: "Enter the Main Menu to select your World, play mini-games, and begin interactive lessons.",
      step3Btn: "🚀 Go to The Hub",
      slidePreviewBtn: "🖼️ View Full 'Meet Fenny!' Visual",
      checkinSuccess: "Awesome job! +5 ⭐ Stars earned! You are ready for The Hub!",
      cheers: [
        "Fantastic job! You are a star! ⭐",
        "Bravo! Your pronunciation is getting so good!",
        "Yay! Keep going, World Explorer! 🌍",
        "Super! Fenny is proud of you! 🦊"
      ],
      questions: [
        {
          q: "How old are you?",
          speech: "Hello! How old are you?",
          options: ["I am 8 years old! 🎂", "I am 9 years old! 🌟", "I am 7 years old! 🎈"]
        },
        {
          q: "How are you today?",
          speech: "How are you feeling today?",
          options: ["I am fine, thank you! 😊", "I am super happy! 🤩", "Ready to learn! 🚀"]
        },
        {
          q: "Which letter completes: b _ a g (bag)?",
          speech: "Which letter starts the word bag?",
          options: ["Letter b (b_ag) 🎒", "Letter h (h_at) 🎩", "Letter m (m_ilk) 🥛"]
        }
      ]
    },
    French: {
      hello: "Hello !",
      companionTitle: "Ton Compagnon Virtuel",
      companionDesc:
        "Fenny offre un modèle de prononciation audio continu, un soutien bienveillant et célèbre chaque bonne réponse pour éliminer la peur de se tromper.",
      bubbleDefault: "Salut ! Je suis Fenny 🦊 Clique sur moi pour ton Check-in du jour !",
      bubbleGreet: "Hello ! Prêt pour l'aventure FennyGo3 aujourd'hui ? Gagnons des étoiles ensemble !",
      btnCheckin: "✨ Check-in du Jour",
      btnProgress: "📊 Progression",
      btnShowcase: "🌟 Vitrine FennyGo3",
      modalTitle: "Meet Fenny! — Rituel Quotidien",
      step1Title: "1. Login & Greet (Accueil Vocal)",
      step1Desc: "Fenny te salue avec une prononciation native pour t'immerger immédiatement.",
      step1Btn: "🔊 Écouter le 'Hello!' de Fenny",
      step2Title: "2. Daily Check-in (Question du Jour)",
      step2Desc: "Fenny pose une question simple alignée sur le programme 3AP :",
      step3Title: "3. The Hub (Menu Principal)",
      step3Desc: "Accède au Menu Principal pour choisir ton Monde, tes cours et tes mini-jeux.",
      step3Btn: "🚀 Ouvrir le Hub",
      slidePreviewBtn: "🖼️ Voir l'affiche 'Meet Fenny!'",
      checkinSuccess: "Bravo champion ! +5 ⭐ Étoiles gagnées ! Direction le Hub !",
      cheers: [
        "Fantastique ! Tu progresses super bien ! ⭐",
        "Bravo champion ! Fenny est très fier de toi ! 🦊",
        "Super réponse ! Continue comme ça ! 🏆",
        "Génial ! Tu maîtrises de mieux en mieux ! 🌟"
      ],
      questions: [
        {
          q: "How old are you? (Quel âge as-tu ?)",
          speech: "Hello! How old are you?",
          options: ["I am 8 years old! 🎂", "I am 9 years old! 🌟", "I am 7 years old! 🎈"]
        },
        {
          q: "How are you today? (Comment vas-tu ?)",
          speech: "How are you today?",
          options: ["I am fine, thank you! 😊", "I am happy! 🤩", "Ready to learn! 🚀"]
        },
        {
          q: "Quelle lettre complète le mot : b _ a g ?",
          speech: "bag. b, a, g, bag!",
          options: ["Lettre b (b_ag) 🎒", "Lettre h (h_at) 🎩", "Lettre k (k_ite) 🪁"]
        }
      ]
    },
    Arabic: {
      hello: "!Hello",
      companionTitle: "رَفِيقُكَ الِافْتِرَاضِيُّ فِينِي",
      companionDesc:
        "يُقَدِّمُ فِينِي نُطْقًا صَوْتِيًّا مُسْتَمِرًّا، وَدَعْمًا تَشْجِيعِيًّا، وَيَحْتَفِلُ بِكُلِّ إِجَابَةٍ صَحِيحَةٍ لِإِزَالَةِ الخَوْفِ مِنَ الخَطَأِ.",
      bubbleDefault: "مَرْحَبًا! أَنَا فِينِي 🦊 اضْغَطْ هُنَا لِسُؤَالِ اليَوْمِ وَالتَّحِيَّةِ الصَّوْتِيَّةِ!",
      bubbleGreet: "أَهْلًا بِكَ يَا بَطَل! هَلْ أَنْتَ مُسْتَعِدٌّ لِمُغَامَرَةِ اليَوْمِ مَعَ فِينِي؟",
      btnCheckin: "✨ سُؤَالُ اليَوْمِ",
      btnProgress: "📊 تَتَبُّعُ التَّقَدُّمِ",
      btnShowcase: "🌟 عَرْضُ FennyGo3",
      modalTitle: "تَعَرَّفْ عَلَى فِينِي! — النَّشَاطُ اليَوْمِيُّ",
      step1Title: "1. التَّحِيَّةُ الصَّوْتِيَّةُ (Login & Greet)",
      step1Desc: "يُرَحِّبُ بِكَ فِينِي بِصَوْتٍ وَاضِحٍ لِتَبْدَأَ التَّعَلُّمَ بِحَمَاسٍ.",
      step1Btn: "🔊 اسْتَمِعْ إِلَى تَحِيَّةِ فِينِي",
      step2Title: "2. سُؤَالُ اليَوْمِ (Daily Check-in)",
      step2Desc: "يَطْرَحُ فِينِي سُؤَالًا بَسِيطًا مُتَوَافِقًا مَعَ المِنْهَاجِ الدِّرَاسِيِّ:",
      step3Title: "3. المَرْكَزُ الرَّئِيسِيُّ (The Hub)",
      step3Desc: "انْطَلِقْ إِلَى القَائِمَةِ الرَّئِيسِيَّةِ لِاخْتِيَارِ الدُّرُوسِ وَالأَلْعَابِ التَّفَاعُلِيَّةِ.",
      step3Btn: "🚀 الذَّهَابُ إِلَى القَائِمَةِ الرَّئِيسِيَّةِ",
      slidePreviewBtn: "🖼️ عَرْضُ بِطَاقَةِ فِينِي الكَامِلَةِ",
      checkinSuccess: "أَحْسَنْتَ يَا بَطَل! رَبِحْتَ +5 ⭐ نُجُومٍ إِضَافِيَّةٍ!",
      cheers: [
        "رَائِعٌ جِدًّا! أَنْتَ نَجْمٌ مُتَأَلِّقٌ! ⭐",
        "أَحْسَنْتَ! فِينِي فَخُورٌ بِكَ! 🦊",
        "إِجَابَةٌ مُمْتَازَةٌ! وَاصِلِ التَّقَدُّمَ! 🏆"
      ],
      questions: [
        {
          q: "How old are you? (كَمْ عُمْرُكَ؟)",
          speech: "Hello! How old are you?",
          options: ["I am 8 years old! 🎂", "I am 9 years old! 🌟", "I am 7 years old! 🎈"]
        },
        {
          q: "How are you today? (كَيْفَ حَالُكَ اليَوْمَ؟)",
          speech: "How are you today?",
          options: ["I am fine, thank you! 😊", "I am happy! 🤩", "Ready to learn! 🚀"]
        }
      ]
    }
  };

  function getLangId() {
    if (global.AppLang && typeof global.AppLang.getCurrentLangId === "function") {
      return global.AppLang.getCurrentLangId();
    }
    return localStorage.getItem("selectedLanguage") || "English";
  }

  function getCopy() {
    return I18N[getLangId()] || I18N.English;
  }

  function ensureStylesheet() {
    if (!document.querySelector('link[href*="fennygo.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/fennygo.css?v=1";
      document.head.appendChild(link);
    }
  }

  // Stars & Badges persistence
  function getStars() {
    const base = parseInt(localStorage.getItem("nk_stars") || "12", 10);
    return isNaN(base) ? 12 : base;
  }

  function addStars(amount) {
    const next = getStars() + amount;
    localStorage.setItem("nk_stars", String(next));
    // Update any star counters on the page
    ["hubStarsCount", "gameStarsCount", "tracingStarsCount", "fennyStarsBadge"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(next);
    });
    window.dispatchEvent(new CustomEvent("fennyStarsUpdated", { detail: { stars: next } }));
    return next;
  }

  function getBadges() {
    try {
      const saved = JSON.parse(localStorage.getItem("fenny_badges") || "null");
      if (saved && typeof saved === "object") return saved;
    } catch (_) {}
    return {
      phonics: true,
      spelling: true,
      explorer: false
    };
  }

  function unlockBadge(badgeKey) {
    const b = getBadges();
    b[badgeKey] = true;
    localStorage.setItem("fenny_badges", JSON.stringify(b));
    window.dispatchEvent(new CustomEvent("fennyBadgeUnlocked", { detail: { badge: badgeKey, badges: b } }));
  }

  let currentQIndex = 0;

  function speakWithWave(text, langOverride) {
    const waves = document.querySelectorAll(".fenny-soundwave");
    waves.forEach((w) => w.classList.add("speaking"));
    const stopWave = () => waves.forEach((w) => w.classList.remove("speaking"));
    setTimeout(stopWave, 3800);

    if (global.AppLang && typeof global.AppLang.speak === "function") {
      global.AppLang.speak(text, langOverride || null, 0.9, 1.12, stopWave);
    }
  }

  let _celebrateHideTimer = null;

  function celebrate(customText) {
    const copy = getCopy();
    const msg = customText || copy.cheers[Math.floor(Math.random() * copy.cheers.length)];
    const bubble = document.getElementById("fennySpeechCard");
    const textEl = document.getElementById("fennySpeechText");
    if (bubble && textEl) {
      bubble.classList.remove("hidden-bubble");
      textEl.textContent = msg;
      clearTimeout(_celebrateHideTimer);
      _celebrateHideTimer = setTimeout(() => {
        bubble.classList.add("hidden-bubble");
      }, 4500);
    }
    speakWithWave(msg);
  }

  function buildCompanionDOM() {
    if (document.getElementById("fennyCompanionDock")) return;
    ensureStylesheet();

    const copy = getCopy();
    const isTodayCheckedIn = localStorage.getItem("fenny_checkin_done") === new Date().toDateString();

    // 1. Floating Dock (speech card hidden by default, shown when clicking the Fennec)
    const dock = document.createElement("div");
    dock.id = "fennyCompanionDock";
    dock.className = "fenny-companion-dock";
    dock.innerHTML = `
      <div id="fennySpeechCard" class="fenny-speech-card hidden-bubble">
        <div class="fenny-speech-header">
          <span class="fenny-hello-badge">
            <span id="fennyHelloLabel">${copy.hello}</span>
            <span class="fenny-soundwave" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
          </span>
          <span style="font-size:12px;font-weight:900;color:#d97706;">⭐ <span id="fennyStarsBadge">${getStars()}</span></span>
        </div>
        <p id="fennySpeechText" class="fenny-speech-text">${copy.bubbleDefault}</p>
        <div class="fenny-quick-actions">
          <button type="button" id="fennyOpenCheckinBtn" class="fenny-action-pill fenny-pill-checkin">
            ${copy.btnCheckin}
          </button>
          <a href="progression.html" id="fennyProgressLink" class="fenny-action-pill fenny-pill-progress">
            ${copy.btnProgress}
          </a>
          <a href="index.html#fennygo" id="fennyShowcaseLink" class="fenny-action-pill fenny-pill-showcase">
            ${copy.btnShowcase}
          </a>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:4px;margin-top:8px;padding-top:7px;border-top:1.5px dashed #fde68a;">
          <span style="font-size:10.5px;font-weight:900;color:#78350f;">🌐 Lang:</span>
          <div style="display:flex;gap:4px;">
            <button type="button" data-fenny-lang="English" style="padding:2px 8px;border-radius:99px;font-size:10.5px;font-weight:900;border:1.5px solid #cbd5e1;background:#fff;cursor:pointer;">🇬🇧 EN</button>
            <button type="button" data-fenny-lang="French" style="padding:2px 8px;border-radius:99px;font-size:10.5px;font-weight:900;border:1.5px solid #cbd5e1;background:#fff;cursor:pointer;">🇫🇷 FR</button>
          </div>
        </div>
      </div>

      <button type="button" id="fennyAvatarBtn" class="fenny-avatar-btn" aria-label="Meet Fenny Companion">
        <img src="assets/images/fennygo/fenny-mascot.png" alt="Fenny">
        ${!isTodayCheckedIn ? '<span id="fennyNotifDot" class="fenny-notif-dot">1</span>' : ""}
      </button>
    `;

    // 2. Daily Check-in Modal (Stepping Stones from "Meet Fenny!" image)
    const modal = document.createElement("div");
    modal.id = "fennyCheckinModal";
    modal.className = "fenny-modal-backdrop hidden";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="fenny-checkin-card">
        <button type="button" id="fennyCloseModalBtn" class="fenny-modal-close" aria-label="Close">&times;</button>
        <h2 id="fennyModalTitle" style="margin:0 0 12px;font-size:clamp(20px,3.2vh,28px);font-weight:900;color:#78350f;">
          🦊 ${copy.modalTitle}
        </h2>

        <div class="fenny-checkin-grid">
          <!-- Left: Fenny Mascot + "Hello!" Soundwave Cloud + Your Virtual Companion Card -->
          <div class="fenny-hero-column">
            <div class="fenny-hero-figure">
              <img src="assets/images/fennygo/fenny-mascot.png" alt="Fenny Virtual Companion">
              <button type="button" id="fennyCloudSpeakBtn" class="fenny-hello-cloud" title="Click to hear Fenny!">
                <strong>Hello!</strong>
                <span class="fenny-soundwave">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </span>
              </button>
            </div>
            <div class="fenny-companion-glass">
              <h3 id="fennyCompCardTitle" style="margin:0 0 4px;font-size:15px;font-weight:900;color:#1e3a8a;">
                ${copy.companionTitle}
              </h3>
              <p id="fennyCompCardDesc" style="margin:0;font-size:12.5px;font-weight:700;color:#334155;line-height:1.4;">
                ${copy.companionDesc}
              </p>
              <button type="button" id="fennyToggleRawSlideBtn" style="margin-top:8px;background:#e0f2fe;border:1.5px solid #38bdf8;color:#0369a1;font-weight:800;font-size:11.5px;padding:4px 10px;border-radius:99px;cursor:pointer;">
                ${copy.slidePreviewBtn}
              </button>
            </div>
            <div id="fennyRawSlideBox" class="hidden" style="margin-top:10px;width:100%;">
              <img src="assets/images/fennygo/meet-fenny.jpg" alt="Meet Fenny Slide" style="width:100%;border-radius:16px;border:3px solid #fff;box-shadow:0 6px 18px rgba(0,0,0,0.2);">
            </div>
          </div>

          <!-- Right: The 3 Stepping Stones (1. Login & Greet -> 2. Daily Check-in -> 3. The Hub) -->
          <div class="fenny-stones-path">
            <!-- Stone 1 -->
            <div id="fennyStone1" class="fenny-stone-step done-stone">
              <div class="stone-badge-num">1</div>
              <div style="flex:1;">
                <h4 id="fennyStone1Title" style="margin:0;font-size:15px;font-weight:900;color:#0f172a;">${copy.step1Title}</h4>
                <p id="fennyStone1Desc" style="margin:2px 0 6px;font-size:12.5px;font-weight:700;color:#475569;">${copy.step1Desc}</p>
                <button type="button" id="fennyStep1AudioBtn" class="checkin-opt-btn">
                  ${copy.step1Btn}
                </button>
              </div>
            </div>

            <!-- Stone 2 -->
            <div id="fennyStone2" class="fenny-stone-step active-stone">
              <div class="stone-badge-num">2</div>
              <div style="flex:1;">
                <h4 id="fennyStone2Title" style="margin:0;font-size:15px;font-weight:900;color:#0f172a;">${copy.step2Title}</h4>
                <p id="fennyStone2Desc" style="margin:2px 0 4px;font-size:12.5px;font-weight:700;color:#475569;">${copy.step2Desc}</p>
                <div id="fennyQuestionBox" style="background:#f8fafc;border:2px solid #bae6fd;border-radius:14px;padding:8px 10px;margin-top:4px;">
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                    <strong id="fennyDailyQText" style="font-size:14px;color:#0369a1;">How old are you?</strong>
                    <button type="button" id="fennySpeakQBtn" style="background:#0284c7;color:#fff;border:none;border-radius:99px;padding:3px 9px;font-size:11px;font-weight:800;cursor:pointer;">🔊 Listen</button>
                  </div>
                  <div id="fennyCheckinOptions" class="checkin-options-row"></div>
                  <div id="fennyCheckinFeedback" style="margin-top:6px;font-size:12.5px;font-weight:900;color:#15803d;display:none;"></div>
                </div>
              </div>
            </div>

            <!-- Stone 3 -->
            <div id="fennyStone3" class="fenny-stone-step">
              <div class="stone-badge-num">3</div>
              <div style="flex:1;">
                <h4 id="fennyStone3Title" style="margin:0;font-size:15px;font-weight:900;color:#0f172a;">${copy.step3Title}</h4>
                <p id="fennyStone3Desc" style="margin:2px 0 6px;font-size:12.5px;font-weight:700;color:#475569;">${copy.step3Desc}</p>
                <a href="category.html" id="fennyStep3HubBtn" class="fenny-action-pill fenny-pill-progress" style="padding:6px 14px;font-size:12.5px;">
                  ${copy.step3Btn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(dock);
    document.body.appendChild(modal);

    bindCompanionEvents();
    renderDailyQuestion();
  }

  function renderDailyQuestion() {
    const copy = getCopy();
    const qList = copy.questions;
    const qObj = qList[currentQIndex % qList.length];
    const qTextEl = document.getElementById("fennyDailyQText");
    const optsContainer = document.getElementById("fennyCheckinOptions");
    const feedbackEl = document.getElementById("fennyCheckinFeedback");
    if (!qTextEl || !optsContainer) return;

    qTextEl.textContent = qObj.q;
    optsContainer.innerHTML = "";
    if (feedbackEl) feedbackEl.style.display = "none";

    qObj.options.forEach((optText) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "checkin-opt-btn";
      btn.textContent = optText;
      btn.addEventListener("click", () => {
        optsContainer.querySelectorAll(".checkin-opt-btn").forEach((b) => b.classList.remove("correct"));
        btn.classList.add("correct");
        const cleanSpeech = optText.replace(/[^\w\s'!?,.-]/g, "").trim();
        speakWithWave(cleanSpeech + "! Great job!", "en-US");

        if (feedbackEl) {
          feedbackEl.textContent = copy.checkinSuccess;
          feedbackEl.style.display = "block";
        }
        document.getElementById("fennyStone2")?.classList.add("done-stone");
        document.getElementById("fennyStone3")?.classList.add("active-stone");

        if (localStorage.getItem("fenny_checkin_done") !== new Date().toDateString()) {
          localStorage.setItem("fenny_checkin_done", new Date().toDateString());
          addStars(5);
          unlockBadge("explorer");
          const dot = document.getElementById("fennyNotifDot");
          if (dot) dot.remove();
        }

        setTimeout(() => {
          currentQIndex = (currentQIndex + 1) % qList.length;
        }, 1200);
      });
      optsContainer.appendChild(btn);
    });
  }

  function updateLocalizedCompanion() {
    const copy = getCopy();
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setTxt("fennyHelloLabel", copy.hello);
    setTxt("fennySpeechText", copy.bubbleDefault);
    setTxt("fennyOpenCheckinBtn", copy.btnCheckin);
    setTxt("fennyProgressLink", copy.btnProgress);
    setTxt("fennyShowcaseLink", copy.btnShowcase);
    setTxt("fennyModalTitle", "🦊 " + copy.modalTitle);
    setTxt("fennyCompCardTitle", copy.companionTitle);
    setTxt("fennyCompCardDesc", copy.companionDesc);
    setTxt("fennyToggleRawSlideBtn", copy.slidePreviewBtn);
    setTxt("fennyStone1Title", copy.step1Title);
    setTxt("fennyStone1Desc", copy.step1Desc);
    setTxt("fennyStep1AudioBtn", copy.step1Btn);
    setTxt("fennyStone2Title", copy.step2Title);
    setTxt("fennyStone2Desc", copy.step2Desc);
    setTxt("fennyStone3Title", copy.step3Title);
    setTxt("fennyStone3Desc", copy.step3Desc);
    setTxt("fennyStep3HubBtn", copy.step3Btn);
    renderDailyQuestion();
  }

  function openCheckinModal() {
    const modal = document.getElementById("fennyCheckinModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    const copy = getCopy();
    const qObj = copy.questions[currentQIndex % copy.questions.length];
    speakWithWave("Hello! Welcome to FennyGo3! " + qObj.speech, "en-US");
  }

  function bindCompanionEvents() {
    const avatarBtn = document.getElementById("fennyAvatarBtn");
    const bubble = document.getElementById("fennySpeechCard");
    const openCheckinBtn = document.getElementById("fennyOpenCheckinBtn");
    const closeModalBtn = document.getElementById("fennyCloseModalBtn");
    const modal = document.getElementById("fennyCheckinModal");
    const cloudSpeakBtn = document.getElementById("fennyCloudSpeakBtn");
    const step1AudioBtn = document.getElementById("fennyStep1AudioBtn");
    const speakQBtn = document.getElementById("fennySpeakQBtn");
    const toggleSlideBtn = document.getElementById("fennyToggleRawSlideBtn");

    avatarBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const copy = getCopy();
      if (bubble?.classList.contains("hidden-bubble")) {
        bubble.classList.remove("hidden-bubble");
        document.getElementById("fennySpeechText").textContent = copy.bubbleDefault;
        speakWithWave("Hello! Let's learn together!", "en-US");
      } else {
        bubble?.classList.add("hidden-bubble");
      }
    });

    // Clicking the "Hello!" badge inside the card also speaks
    document.querySelector(".fenny-hello-badge")?.addEventListener("click", () => {
      speakWithWave("Hello! Let's learn together!", "en-US");
    });

    // Clicking outside closes the speech card
    document.addEventListener("click", (e) => {
      const dock = document.getElementById("fennyCompanionDock");
      if (dock && !dock.contains(e.target) && bubble && !bubble.classList.contains("hidden-bubble")) {
        bubble.classList.add("hidden-bubble");
      }
    });

    openCheckinBtn?.addEventListener("click", openCheckinModal);

    closeModalBtn?.addEventListener("click", () => {
      modal?.classList.add("hidden");
    });

    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });

    const playGreetEn = () => {
      speakWithWave("Hello! I am Fenny, your virtual companion! Let's play and learn English together!", "en-US");
    };
    cloudSpeakBtn?.addEventListener("click", playGreetEn);
    step1AudioBtn?.addEventListener("click", playGreetEn);

    speakQBtn?.addEventListener("click", () => {
      const copy = getCopy();
      const qObj = copy.questions[currentQIndex % copy.questions.length];
      speakWithWave(qObj.speech, "en-US");
    });

    toggleSlideBtn?.addEventListener("click", () => {
      const box = document.getElementById("fennyRawSlideBox");
      if (box) box.classList.toggle("hidden");
    });

    document.querySelectorAll("[data-fenny-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute("data-fenny-lang");
        if (global.AppLang && typeof global.AppLang.setLang === "function") {
          global.AppLang.setLang(lang, false);
        } else {
          localStorage.setItem("selectedLanguage", lang);
          window.dispatchEvent(new CustomEvent("appLanguageChanged"));
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildCompanionDOM);
  } else {
    buildCompanionDOM();
  }

  window.addEventListener("appLanguageChanged", () => {
    updateLocalizedCompanion();
  });

  global.FennyGo = {
    getStars,
    addStars,
    getBadges,
    unlockBadge,
    celebrate,
    openCheckinModal,
    speakWithWave
  };
})(window);
