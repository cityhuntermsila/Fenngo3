(() => {
  "use strict";

  const avatarImg = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(0,0,0,0.2));">`;

  // 3D Pixar-style avatars for each member and relation
  const AVATARS = {
    grandfather: avatarImg("assets/images/family/grandfather.png", "Grandfather"),
    grandmother: avatarImg("assets/images/family/grandmother.png", "Grandmother"),
    father: avatarImg("assets/images/family/father.png", "Father"),
    mother: avatarImg("assets/images/family/mother.png", "Mother"),
    son: avatarImg("assets/images/family/son.png", "Son"),
    daughter: avatarImg("assets/images/family/daughter.png", "Daughter"),
    myMother: avatarImg("assets/images/family/myMother.png", "My Mother"),
    myFather: avatarImg("assets/images/family/myFather.png", "My Father"),
    myBrother: avatarImg("assets/images/family/myBrother.png", "My Brother"),
    mySister: avatarImg("assets/images/family/mySister.png", "My Sister")
  };

  // Trilingual UI text & items
  const FAMILY_DATA = {
    English: {
      ui: {
        title: "Meet the Family",
        subtitle: "Tap any card to hear and learn!",
        membersBadge: "Family Members",
        relationsBadge: "My Family Relations",
        memberModalBadge: "Family Member",
        relationModalBadge: "Family Relation",
        listen: "Listen"
      },
      members: [
        {
          id: "grandfather",
          title: "The Grandfather",
          sub: "Grandpa",
          speech: "The grandfather. This is the grandfather.",
          bg: "linear-gradient(145deg, #ffffff, #e0e7ff)",
          shadow: "#4338ca",
          accent: "#4f46e5"
        },
        {
          id: "grandmother",
          title: "The Grandmother",
          sub: "Grandma",
          speech: "The grandmother. This is the grandmother.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be185d",
          accent: "#db2777"
        },
        {
          id: "father",
          title: "The Father",
          sub: "Dad",
          speech: "The father. This is the father.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "mother",
          title: "The Mother",
          sub: "Mom",
          speech: "The mother. This is the mother.",
          bg: "linear-gradient(145deg, #ffffff, #ffe4e6)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "son",
          title: "The Son",
          sub: "Boy",
          speech: "The son. This is the son.",
          bg: "linear-gradient(145deg, #ffffff, #dcfce7)",
          shadow: "#15803d",
          accent: "#16a34a"
        },
        {
          id: "daughter",
          title: "The Daughter",
          sub: "Girl",
          speech: "The daughter. This is the daughter.",
          bg: "linear-gradient(145deg, #ffffff, #fef9c3)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ],
      relations: [
        {
          id: "myMother",
          title: "My Mother",
          sub: "I love my mom",
          speech: "My mother! She is my mother.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "myFather",
          title: "My Father",
          sub: "I love my dad",
          speech: "My father! He is my father.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "myBrother",
          title: "My Brother",
          sub: "My sibling",
          speech: "My brother! He is my brother.",
          bg: "linear-gradient(145deg, #ffffff, #d1fae5)",
          shadow: "#047857",
          accent: "#059669"
        },
        {
          id: "mySister",
          title: "My Sister",
          sub: "My sibling",
          speech: "My sister! She is my sister.",
          bg: "linear-gradient(145deg, #ffffff, #fef3c7)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ]
    },

    French: {
      ui: {
        title: "Découvre la Famille",
        subtitle: "Touche une carte pour écouter et apprendre !",
        membersBadge: "Les Membres de la Famille",
        relationsBadge: "Mes Relations Familiales",
        memberModalBadge: "Membre de la Famille",
        relationModalBadge: "Relation Familiale",
        listen: "Écouter"
      },
      members: [
        {
          id: "grandfather",
          title: "Le Grand-père",
          sub: "Papi",
          speech: "Le grand-père. Voici le grand-père.",
          bg: "linear-gradient(145deg, #ffffff, #e0e7ff)",
          shadow: "#4338ca",
          accent: "#4f46e5"
        },
        {
          id: "grandmother",
          title: "La Grand-mère",
          sub: "Mamie",
          speech: "La grand-mère. Voici la grand-mère.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be185d",
          accent: "#db2777"
        },
        {
          id: "father",
          title: "Le Père",
          sub: "Papa",
          speech: "Le père. Voici le père.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "mother",
          title: "La Mère",
          sub: "Maman",
          speech: "La mère. Voici la mère.",
          bg: "linear-gradient(145deg, #ffffff, #ffe4e6)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "son",
          title: "Le Fils",
          sub: "Garçon",
          speech: "Le fils. Voici le fils.",
          bg: "linear-gradient(145deg, #ffffff, #dcfce7)",
          shadow: "#15803d",
          accent: "#16a34a"
        },
        {
          id: "daughter",
          title: "La Fille",
          sub: "Fille",
          speech: "La fille. Voici la fille.",
          bg: "linear-gradient(145deg, #ffffff, #fef9c3)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ],
      relations: [
        {
          id: "myMother",
          title: "Ma Mère",
          sub: "J'aime ma mère",
          speech: "Ma mère ! C'est ma mère.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "myFather",
          title: "Mon Père",
          sub: "J'aime mon père",
          speech: "Mon père ! C'est mon père.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "myBrother",
          title: "Mon Frère",
          sub: "J'aime mon frère",
          speech: "Mon frère ! C'est mon frère.",
          bg: "linear-gradient(145deg, #ffffff, #d1fae5)",
          shadow: "#047857",
          accent: "#059669"
        },
        {
          id: "mySister",
          title: "Ma Sœur",
          sub: "J'aime ma sœur",
          speech: "Ma sœur ! C'est ma sœur.",
          bg: "linear-gradient(145deg, #ffffff, #fef3c7)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ]
    },

    Arabic: {
      ui: {
        title: "تعرف على العائلة",
        subtitle: "اضغط على أي بطاقة للاستماع والتعلم!",
        membersBadge: "أفراد العائلة",
        relationsBadge: "علاقاتي العائلية",
        memberModalBadge: "فرد من العائلة",
        relationModalBadge: "علاقة عائلية",
        listen: "استمع"
      },
      members: [
        {
          id: "grandfather",
          title: "الجَدّ",
          sub: "جَدِّي",
          speech: "الجَدّ. هَذَا هُوَ الجَدّ.",
          bg: "linear-gradient(145deg, #ffffff, #e0e7ff)",
          shadow: "#4338ca",
          accent: "#4f46e5"
        },
        {
          id: "grandmother",
          title: "الجَدَّة",
          sub: "جَدَّتِي",
          speech: "الجَدَّة. هَذِهِ هِيَ الجَدَّة.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be185d",
          accent: "#db2777"
        },
        {
          id: "father",
          title: "الأَب",
          sub: "بَابَا",
          speech: "الأَب. هَذَا هُوَ الأَب.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "mother",
          title: "الأُمّ",
          sub: "مَامَا",
          speech: "الأُمّ. هَذِهِ هِيَ الأُمّ.",
          bg: "linear-gradient(145deg, #ffffff, #ffe4e6)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "son",
          title: "الاِبْن",
          sub: "وَلَد",
          speech: "الاِبْن. هَذَا هُوَ الاِبْن.",
          bg: "linear-gradient(145deg, #ffffff, #dcfce7)",
          shadow: "#15803d",
          accent: "#16a34a"
        },
        {
          id: "daughter",
          title: "الاِبْنَة",
          sub: "بِنْت",
          speech: "الاِبْنَة. هَذِهِ هِيَ الاِبْنَة.",
          bg: "linear-gradient(145deg, #ffffff, #fef9c3)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ],
      relations: [
        {
          id: "myMother",
          title: "أُمِّي",
          sub: "أُحِبُّ أُمِّي",
          speech: "أُمِّي! هَذِهِ أُمِّي.",
          bg: "linear-gradient(145deg, #ffffff, #fce7f3)",
          shadow: "#be123c",
          accent: "#e11d48"
        },
        {
          id: "myFather",
          title: "أَبِي",
          sub: "أُحِبُّ أَبِي",
          speech: "أَبِي! هَذَا أَبِي.",
          bg: "linear-gradient(145deg, #ffffff, #dbeafe)",
          shadow: "#1d4ed8",
          accent: "#2563eb"
        },
        {
          id: "myBrother",
          title: "أَخِي",
          sub: "أُحِبُّ أَخِي",
          speech: "أَخِي! هَذَا أَخِي.",
          bg: "linear-gradient(145deg, #ffffff, #d1fae5)",
          shadow: "#047857",
          accent: "#059669"
        },
        {
          id: "mySister",
          title: "أُخْتِي",
          sub: "أُحِبُّ أُخْتِي",
          speech: "أُخْتِي! هَذِهِ أُخْتِي.",
          bg: "linear-gradient(145deg, #ffffff, #fef3c7)",
          shadow: "#b45309",
          accent: "#d97706"
        }
      ]
    }
  };

  const membersGrid = document.getElementById("membersGrid");
  const relationsGrid = document.getElementById("relationsGrid");
  const familyModal = document.getElementById("familyModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalPrevBtn = document.getElementById("modalPrevBtn");
  const modalNextBtn = document.getElementById("modalNextBtn");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalAvatarStage = document.getElementById("modalAvatarStage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPhrase = document.getElementById("modalPhrase");
  const modalSoundBtn = document.getElementById("modalSoundBtn");
  const modalListenText = document.getElementById("modalListenText");

  let activeList = [];
  let activeIndex = 0;
  let activeIsRelation = false;

  function getActiveLangId() {
    return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
  }

  function getActiveData() {
    const lang = getActiveLangId();
    return FAMILY_DATA[lang] || FAMILY_DATA.English;
  }

  function speakPhrase(text) {
    if (!text) return;
    const lang = getActiveLangId();
    const langCode = lang === "Arabic" ? "ar-SA" : (lang === "French" ? "fr-FR" : "en-US");
    if (window.AppLang) {
      window.AppLang.speak(text, langCode, 0.85, 1.15);
    }
  }

  function createCardElement(item, index, isRelation) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "family-card";
    btn.style.setProperty("--card-bg", item.bg);
    btn.style.setProperty("--card-shadow", item.shadow);
    btn.style.setProperty("--card-accent", item.accent);
    btn.setAttribute("aria-label", item.title);

    btn.innerHTML = `
      <span class="card-sound-mini" aria-hidden="true">
        <i class="fa-solid fa-volume-high"></i>
      </span>
      <div class="family-card-avatar">
        ${AVATARS[item.id] || ""}
      </div>
      <div class="family-card-label">${item.title}</div>
      <div class="family-card-sub">${item.sub}</div>
    `;

    btn.addEventListener("click", () => {
      openModal(index, isRelation);
    });

    return btn;
  }

  function renderAll() {
    const data = getActiveData();

    // Update headings
    const titleEl = document.getElementById("familyTitle");
    if (titleEl) titleEl.textContent = data.ui.title;

    const subEl = document.getElementById("familySubtitle");
    if (subEl) subEl.textContent = data.ui.subtitle;

    const membersBadgeText = document.getElementById("membersSectionText");
    if (membersBadgeText) membersBadgeText.textContent = data.ui.membersBadge;

    const relationsBadgeText = document.getElementById("relationsSectionText");
    if (relationsBadgeText) relationsBadgeText.textContent = data.ui.relationsBadge;

    if (modalListenText) modalListenText.textContent = data.ui.listen;

    // Render 6 Members
    membersGrid.innerHTML = "";
    data.members.forEach((item, idx) => {
      membersGrid.appendChild(createCardElement(item, idx, false));
    });

    // Render 4 Relations
    relationsGrid.innerHTML = "";
    data.relations.forEach((item, idx) => {
      relationsGrid.appendChild(createCardElement(item, idx, true));
    });
  }

  function openModal(index, isRelation) {
    const data = getActiveData();
    activeIsRelation = isRelation;
    activeList = isRelation ? data.relations : data.members;
    activeIndex = index;

    const item = activeList[activeIndex];
    if (!item) return;

    const modalCard = familyModal.querySelector(".family-modal-card");
    if (modalCard) {
      modalCard.style.setProperty("--modal-bg", item.bg);
      modalCard.style.setProperty("--modal-accent", item.accent);
    }

    modalCategoryBadge.textContent = isRelation ? data.ui.relationModalBadge : data.ui.memberModalBadge;
    modalAvatarStage.innerHTML = AVATARS[item.id] || "";
    modalTitle.textContent = item.title;
    modalPhrase.textContent = item.speech;

    familyModal.classList.add("show");
    familyModal.setAttribute("aria-hidden", "false");

    speakPhrase(item.speech);
  }

  function closeModal() {
    familyModal.classList.remove("show");
    familyModal.setAttribute("aria-hidden", "true");
    window.AppLang?.stopSpeech?.();
  }

  function navigateModal(dir) {
    if (!activeList.length) return;
    const lang = getActiveLangId();
    const step = lang === "Arabic" ? -dir : dir;
    activeIndex = (activeIndex + step + activeList.length) % activeList.length;
    openModal(activeIndex, activeIsRelation);
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalPrevBtn.addEventListener("click", () => navigateModal(-1));
  modalNextBtn.addEventListener("click", () => navigateModal(1));
  modalSoundBtn.addEventListener("click", () => {
    const item = activeList[activeIndex];
    if (item) speakPhrase(item.speech);
  });

  familyModal.addEventListener("click", (e) => {
    if (e.target === familyModal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!familyModal.classList.contains("show")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateModal(-1);
    if (e.key === "ArrowRight") navigateModal(1);
  });

  window.addEventListener("appLanguageChanged", () => {
    renderAll();
    if (familyModal.classList.contains("show")) {
      openModal(activeIndex, activeIsRelation);
    }
  });

  renderAll();
})();
