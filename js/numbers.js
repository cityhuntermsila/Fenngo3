const numbersData = [
  {
    number: 1,
    arabicNum: "١",
    words: { English: "One", French: "Un", Arabic: "وَاحِد" },
    word: "One",
    color: "red",
    numberImg: "one.png",
    objectImg: "apple.png",
    objectName: "apple",
    objectPlural: "apples",
    objects: {
      English: { singular: "apple", plural: "apples", phrase: "apple" },
      French: { singular: "pomme", plural: "pommes", phrase: "une pomme" },
      Arabic: { singular: "تفاحة", plural: "تفاح", phrase: "تُفَّاحَة وَاحِدَة" }
    },
    count: 1
  },
  {
    number: 2,
    arabicNum: "٢",
    words: { English: "Two", French: "Deux", Arabic: "اِثْنَان" },
    word: "Two",
    color: "orange",
    numberImg: "two.png",
    objectImg: "bird.png",
    objectName: "bird",
    objectPlural: "birds",
    objects: {
      English: { singular: "bird", plural: "birds", phrase: "birds" },
      French: { singular: "oiseau", plural: "oiseaux", phrase: "deux oiseaux" },
      Arabic: { singular: "عصفور", plural: "عصافير", phrase: "عُصْفُورَان" }
    },
    count: 2
  },
  {
    number: 3,
    arabicNum: "٣",
    words: { English: "Three", French: "Trois", Arabic: "ثَلَاثَة" },
    word: "Three",
    color: "yellow",
    numberImg: "three.png",
    objectImg: "star-object.png",
    objectName: "star",
    objectPlural: "stars",
    objects: {
      English: { singular: "star", plural: "stars", phrase: "stars" },
      French: { singular: "étoile", plural: "étoiles", phrase: "trois étoiles" },
      Arabic: { singular: "نجمة", plural: "نجوم", phrase: "ثَلَاث نُجُوم" }
    },
    count: 3
  },
  {
    number: 4,
    arabicNum: "٤",
    words: { English: "Four", French: "Quatre", Arabic: "أَرْبَعَة" },
    word: "Four",
    color: "green",
    numberImg: "four.png",
    objectImg: "car.png",
    objectName: "car",
    objectPlural: "cars",
    objects: {
      English: { singular: "car", plural: "cars", phrase: "cars" },
      French: { singular: "voiture", plural: "voitures", phrase: "quatre voitures" },
      Arabic: { singular: "سيارة", plural: "سيارات", phrase: "أَرْبَع سَيَّارَات" }
    },
    count: 4
  },
  {
    number: 5,
    arabicNum: "٥",
    words: { English: "Five", French: "Cinq", Arabic: "خَمْسَة" },
    word: "Five",
    color: "blue",
    numberImg: "five.png",
    objectImg: "butterflies.png",
    objectName: "butterfly",
    objectPlural: "butterflies",
    objects: {
      English: { singular: "butterfly", plural: "butterflies", phrase: "butterflies" },
      French: { singular: "papillon", plural: "papillons", phrase: "cinq papillons" },
      Arabic: { singular: "فراشة", plural: "فراشات", phrase: "خَمْس فَرَاشَات" }
    },
    count: 5
  },
  {
    number: 6,
    arabicNum: "٦",
    words: { English: "Six", French: "Six", Arabic: "سِتَّة" },
    word: "Six",
    color: "purple",
    numberImg: "six.png",
    objectImg: "sunflowers.png",
    objectName: "sunflower",
    objectPlural: "sunflowers",
    objects: {
      English: { singular: "sunflower", plural: "sunflowers", phrase: "sunflowers" },
      French: { singular: "tournesol", plural: "tournesols", phrase: "six tournesols" },
      Arabic: { singular: "زهرة", plural: "زهور", phrase: "سِتّ زُهُور عَبَّاد شَمْس" }
    },
    count: 6
  },
  {
    number: 7,
    arabicNum: "٧",
    words: { English: "Seven", French: "Sept", Arabic: "سَبْعَة" },
    word: "Seven",
    color: "red",
    numberImg: "seven.png",
    objectImg: "balloon.png",
    objectName: "balloon",
    objectPlural: "balloons",
    objects: {
      English: { singular: "balloon", plural: "balloons", phrase: "balloons" },
      French: { singular: "ballon", plural: "ballons", phrase: "sept ballons" },
      Arabic: { singular: "بالون", plural: "بالونات", phrase: "سَبْع بَالُونَات" }
    },
    count: 7
  },
  {
    number: 8,
    arabicNum: "٨",
    words: { English: "Eight", French: "Huit", Arabic: "ثَمَانِيَة" },
    word: "Eight",
    color: "green",
    numberImg: "eight.png",
    objectImg: "cake.png",
    objectName: "cupcake",
    objectPlural: "cupcakes",
    objects: {
      English: { singular: "cupcake", plural: "cupcakes", phrase: "cupcakes" },
      French: { singular: "gâteau", plural: "gâteaux", phrase: "huit gâteaux" },
      Arabic: { singular: "كعكة", plural: "كعكات", phrase: "ثَمَانِي كَعْكَات" }
    },
    count: 8
  },
  {
    number: 9,
    arabicNum: "٩",
    words: { English: "Nine", French: "Neuf", Arabic: "تِسْعَة" },
    word: "Nine",
    color: "blue",
    numberImg: "nine.png",
    objectImg: "ball.png",
    objectName: "ball",
    objectPlural: "balls",
    objects: {
      English: { singular: "ball", plural: "balls", phrase: "balls" },
      French: { singular: "balle", plural: "balles", phrase: "neuf balles" },
      Arabic: { singular: "كرة", plural: "كرات", phrase: "تِسْع كُرَات" }
    },
    count: 9
  },
  {
    number: 10,
    arabicNum: "١٠",
    words: { English: "Ten", French: "Dix", Arabic: "عَشَرَة" },
    word: "Ten",
    color: "purple",
    numberImg: "ten.png",
    objectImg: "pencil.png",
    objectName: "pencil",
    objectPlural: "pencils",
    objects: {
      English: { singular: "pencil", plural: "pencils", phrase: "pencils" },
      French: { singular: "crayon", plural: "crayons", phrase: "dix crayons" },
      Arabic: { singular: "قلم", plural: "أقلام", phrase: "عَشَرَة أَقْلَام" }
    },
    count: 10
  }
];

const countingWordsByLang = {
  English: ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
  French: ["", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix"],
  Arabic: ["", "وَاحِد", "اِثْنَان", "ثَلَاثَة", "أَرْبَعَة", "خَمْسَة", "سِتَّة", "سَبْعَة", "ثَمَانِيَة", "تِسْعَة", "عَشَرَة"]
};

function getActiveLangId() {
  return window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
}

function getCountingWords() {
  return countingWordsByLang[getActiveLangId()] || countingWordsByLang.English;
}

const basePath = "assets/images/number/";

/* =========================================
   ELEMENTS
========================================= */

const grid = document.getElementById("numbersGrid");
const root = document.documentElement;
const numbersMain =
  document.querySelector(".numbers-main");

const modal = document.getElementById("numberModal");
const closeBtn = document.getElementById("numberClose");

const previousBtn = document.getElementById("numberPrev");
const nextBtn = document.getElementById("numberNext");

const modalProgress = document.getElementById("modalProgress");

const modalNumberImg = document.getElementById("modalNumberImg");
const numberWord = document.getElementById("numberWord");
const sayNumberWord = document.getElementById("sayNumberWord");

const animatedObjectStage =
  document.getElementById("animatedObjectStage");

const currentCount = document.getElementById("currentCount");
const targetCount = document.getElementById("targetCount");

const countWordDisplay =
  document.getElementById("countWordDisplay");

const activityInstruction =
  document.getElementById("activityInstruction");

const successMessage =
  document.getElementById("successMessage");

const successText =
  document.getElementById("successText");

const celebrationBurst =
  document.getElementById("celebrationBurst");

const replayCountBtn =
  document.getElementById("replayCountBtn");

const soundBtn =
  document.getElementById("numberSoundBtn");



const landscapeButton =
  document.getElementById("landscapeButton");

/* =========================================
   STATE
========================================= */

let currentNumberIndex = 0;
let sequenceId = 0;
let countingInProgress = false;
let celebrationTimer = null;
let selectedVoice = null;

function getViewportSize() {
  const viewport = window.visualViewport;

  return {
    width: Math.round(viewport ? viewport.width : window.innerWidth),
    height: Math.round(viewport ? viewport.height : window.innerHeight)
  };
}

function updateMobileLayout() {
  const { width, height } = getViewportSize();
  const shortSide = Math.min(width, height);
  const longSide = Math.max(width, height);
  const isMobileLandscapeLayout =
    shortSide <= 767 && longSide <= 1024;
  const visibleWidth =
    isMobileLandscapeLayout ? shortSide : width;
  const visibleHeight =
    isMobileLandscapeLayout ? longSide : height;

  root.style.setProperty("--visible-width", `${visibleWidth}px`);
  root.style.setProperty("--visible-height", `${visibleHeight}px`);

  document.body.classList.toggle(
    "mobile-landscape-layout",
    isMobileLandscapeLayout
  );

  document.body.classList.toggle(
    "mobile-portrait-rotate",
    isMobileLandscapeLayout && height > width
  );
}

function enableRotatedTouchScroll(element) {
  if (!element) return;

  let lastX = 0;
  let lastY = 0;

  element.addEventListener(
    "touchstart",
    (event) => {
      if (
        !document.body.classList.contains(
          "mobile-landscape-layout"
        ) ||
        event.touches.length !== 1
      ) {
        return;
      }

      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
    },
    { passive: true }
  );

  element.addEventListener(
    "touchmove",
    (event) => {
      if (
        !document.body.classList.contains(
          "mobile-landscape-layout"
        ) ||
        event.touches.length !== 1
      ) {
        return;
      }

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const deltaX = currentX - lastX;
      const deltaY = lastY - currentY;
      const scrollDelta =
        deltaY + deltaX;

      element.scrollTop += scrollDelta;
      lastX = currentX;
      lastY = currentY;

      event.preventDefault();
    },
    { passive: false }
  );
}

function getRotatedScrollTarget(event) {
  if (!document.body.classList.contains("mobile-landscape-layout")) {
    return null;
  }

  const modalIsOpen =
    modal.classList.contains("show");

  const target = event.target;

  if (
    modalIsOpen &&
    target.closest("#numberModal")
  ) {
    return modal;
  }

  return numbersMain;
}

function enableGlobalRotatedScroll() {
  let lastX = 0;
  let lastY = 0;

  document.addEventListener(
    "touchstart",
    (event) => {
      const scrollTarget =
        getRotatedScrollTarget(event);

      if (
        !scrollTarget ||
        event.touches.length !== 1
      ) {
        return;
      }

      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      const scrollTarget =
        getRotatedScrollTarget(event);

      if (
        !scrollTarget ||
        event.touches.length !== 1
      ) {
        return;
      }

      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const deltaX = currentX - lastX;
      const deltaY = lastY - currentY;
      const scrollDelta =
        deltaY + deltaX;

      scrollTarget.scrollTop += scrollDelta;
      lastX = currentX;
      lastY = currentY;

      event.preventDefault();
    },
    { passive: false, capture: true }
  );

  document.addEventListener(
    "wheel",
    (event) => {
      const scrollTarget =
        getRotatedScrollTarget(event);

      if (!scrollTarget) {
        return;
      }

      scrollTarget.scrollTop +=
        event.deltaY + event.deltaX;

      event.preventDefault();
    },
    { passive: false, capture: true }
  );
}

/* =========================================
   CREATE NUMBER CARDS
========================================= */

numbersData.forEach((item, index) => {
  const card = document.createElement("button");

  card.type = "button";
  card.className = `number-card ${item.color}`;

  card.setAttribute(
    "aria-label",
    `Open number ${item.number} lesson`
  );

  const objects = Array.from({ length: item.count })
    .map(() => {
      return `
        <img
          src="${basePath}${item.objectImg}"
          class="object-img"
          alt=""
        >
      `;
    })
    .join("");

  card.innerHTML = `
    <img
      src="${basePath}star.png"
      class="number-star"
      alt=""
    >

    <img
      src="${basePath}${item.numberImg}"
      class="number-img"
      alt="Number ${item.number}"
    >

    <div class="object-grid">
      ${objects}
    </div>
  `;

  card.addEventListener("click", () => {
    openNumber(index);
  });

  grid.appendChild(card);
});

/* =========================================
   OPEN NUMBER MODAL
========================================= */

function openNumber(index) {
  stopCurrentSequence();

  currentNumberIndex = index;

  const item = numbersData[currentNumberIndex];
  const lang = getActiveLangId();
  const word = item.words[lang] || item.words.English;

  modal.dataset.theme = item.color;

  modalProgress.textContent =
    `${currentNumberIndex + 1} / ${numbersData.length}`;

  modalNumberImg.src =
    `${basePath}${item.numberImg}`;

  modalNumberImg.alt =
    `Number ${item.number}`;

  if (lang === "Arabic") {
    numberWord.textContent = `${item.arabicNum} - ${word}`;
    sayNumberWord.textContent = `${word}!`;
    targetCount.textContent = `${item.arabicNum} (${item.number})`;
  } else {
    numberWord.textContent = word;
    sayNumberWord.textContent = `${word}!`;
    targetCount.textContent = item.number;
  }

  activityInstruction.textContent =
    createInstruction(item);

  successText.textContent =
    createSuccessSentence(item);

  resetActivityUI();

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const activeSequence = ++sequenceId;

  window.setTimeout(() => {
    if (activeSequence !== sequenceId) return;

    runCountingSequence(item, activeSequence);
  }, 450);
}

/* =========================================
   COUNTING SEQUENCE
========================================= */

async function runCountingSequence(item, activeSequence) {
  countingInProgress = true;

  replayCountBtn.disabled = false;
  soundBtn.disabled = true;

  setAnimatedObjectSize(item.count);

  cancelSpeech();

  const words = getCountingWords();

  for (
    let objectIndex = 0;
    objectIndex < item.count;
    objectIndex++
  ) {
    if (activeSequence !== sequenceId) {
      return;
    }

    const countValue = objectIndex + 1;

    addAnimatedObject(item, objectIndex);

    currentCount.textContent = countValue;

    countWordDisplay.textContent =
      words[countValue];

    animateCountWord();

    await speakText(
      words[countValue],
      {
        pitch: 1.32,
        rate: 0.72,
        cancelPrevious: false
      }
    );

    if (activeSequence !== sequenceId) {
      return;
    }

    await wait(220);
  }

  if (activeSequence !== sequenceId) {
    return;
  }

  await finishCounting(item, activeSequence);
}

/* =========================================
   ADD OBJECT
========================================= */

function addAnimatedObject(item, objectIndex) {
  const objectImage = document.createElement("img");

  objectImage.src =
    `${basePath}${item.objectImg}`;

  objectImage.alt =
    `${item.objectName} ${objectIndex + 1}`;

  objectImage.className =
    "animated-count-object";

  if (item.number === 5) {
    objectImage.classList.add(
      "butterfly-animation"
    );
  }

  objectImage.style.animationDelay = "0s";

  animatedObjectStage.appendChild(
    objectImage
  );
}

/* =========================================
   OBJECT SIZE
========================================= */

function setAnimatedObjectSize(count) {
  let objectSize = 82;

  if (count === 1) {
    objectSize = 145;
  } else if (count === 2) {
    objectSize = 110;
  } else if (count <= 4) {
    objectSize = 83;
  } else if (count <= 6) {
    objectSize = 67;
  } else if (count <= 8) {
    objectSize = 57;
  } else {
    objectSize = 49;
  }

  const isLandscapeMobile =
    (
      window.innerWidth <= 950 &&
      window.matchMedia(
        "(orientation: landscape)"
      ).matches
    ) ||
    document.body.classList.contains(
      "mobile-landscape-layout"
    );

  if (isLandscapeMobile) {
    if (count === 1) {
      objectSize = 85;
    } else if (count === 2) {
      objectSize = 68;
    } else if (count <= 4) {
      objectSize = 56;
    } else {
      objectSize = 42;
    }
  }

  animatedObjectStage.style.setProperty(
    "--animated-object-size",
    `${objectSize}px`
  );
}

/* =========================================
   COUNT WORD ANIMATION
========================================= */

function animateCountWord() {
  countWordDisplay.classList.remove(
    "count-pop"
  );

  void countWordDisplay.offsetWidth;

  countWordDisplay.classList.add(
    "count-pop"
  );

  window.setTimeout(() => {
    countWordDisplay.classList.remove(
      "count-pop"
    );
  }, 260);
}

/* =========================================
   COUNT COMPLETE
========================================= */

async function finishCounting(
  item,
  activeSequence
) {
  if (activeSequence !== sequenceId) {
    return;
  }

  countingInProgress = false;

  const lang = getActiveLangId();
  const word = item.words[lang] || item.words.English;

  countWordDisplay.textContent = `${word}!`;

  successMessage.classList.add("show");

  soundBtn.disabled = false;

  launchCelebrationBurst();

  await wait(320);

  if (activeSequence !== sequenceId) {
    return;
  }

  let praiseText = "";
  if (lang === "Arabic") {
    praiseText = `أحسنت ممتاز! لقد عددت ${item.objects.Arabic.phrase}.`;
  } else if (lang === "French") {
    const label = item.count === 1 ? item.objects.French.singular : item.objects.French.plural;
    praiseText = `Bravo ! Tu as compté ${word} ${label}.`;
  } else {
    const label = item.count === 1 ? item.objects.English.singular : item.objects.English.plural;
    praiseText = `Great job! You counted ${word} ${label}.`;
  }

  await speakText(
    praiseText,
    {
      pitch: 1.18,
      rate: 0.78,
      cancelPrevious: false
    }
  );
}

/* =========================================
   REPLAY COUNTING
========================================= */

function replayCounting() {
  const item =
    numbersData[currentNumberIndex];

  stopCurrentSequence(false);

  resetActivityUI();

  const activeSequence = ++sequenceId;

  window.setTimeout(() => {
    if (activeSequence !== sequenceId) return;

    runCountingSequence(
      item,
      activeSequence
    );
  }, 180);
}

/* =========================================
   RESET ACTIVITY UI
========================================= */

function resetActivityUI() {
  animatedObjectStage.innerHTML = "";
  celebrationBurst.innerHTML = "";

  currentCount.textContent = "0";
  countWordDisplay.textContent = "Ready?";

  countWordDisplay.classList.remove(
    "count-pop"
  );

  successMessage.classList.remove("show");
  // continueBtn.classList.remove("ready");

  soundBtn.disabled = true;
}

/* =========================================
   FIREWORK + CONFETTI CELEBRATION
========================================= */

function launchCelebrationBurst() {
  celebrationBurst.innerHTML = "";

  if (celebrationTimer) {
    window.clearTimeout(celebrationTimer);
  }

  const colors = [
    "#ff4d5a",
    "#ff8f1f",
    "#ffd92e",
    "#59d85d",
    "#35b9ff",
    "#6e5dff",
    "#d95cff",
    "#ff63b1"
  ];

  const isSmallLandscape =
    window.innerHeight <= 500 &&
    window.matchMedia(
      "(orientation: landscape)"
    ).matches;

  const fireworks = isSmallLandscape
    ? [
        {
          left: "25%",
          top: "26%",
          size: "78px",
          delay: 0
        },
        {
          left: "73%",
          top: "24%",
          size: "68px",
          delay: 0.16
        },
        {
          left: "50%",
          top: "42%",
          size: "88px",
          delay: 0.3
        }
      ]
    : [
        {
          left: "23%",
          top: "23%",
          size: "110px",
          delay: 0
        },
        {
          left: "75%",
          top: "22%",
          size: "95px",
          delay: 0.16
        },
        {
          left: "50%",
          top: "40%",
          size: "125px",
          delay: 0.3
        }
      ];

  createFireworks(
    fireworks,
    colors,
    isSmallLandscape
  );

  createConfetti(
    colors,
    isSmallLandscape
  );

  createGoldenStreamers(
    isSmallLandscape
  );

  celebrationTimer = window.setTimeout(() => {
    celebrationBurst.innerHTML = "";
  }, 2600);
}

/* =========================================
   CREATE FIREWORKS
========================================= */

function createFireworks(
  fireworks,
  colors,
  isSmallLandscape
) {
  fireworks.forEach(
    (firework, fireworkIndex) => {
      const flash =
        document.createElement("span");

      flash.className =
        "firework-flash";

      flash.style.setProperty(
        "--fw-left",
        firework.left
      );

      flash.style.setProperty(
        "--fw-top",
        firework.top
      );

      flash.style.setProperty(
        "--fw-size",
        firework.size
      );

      flash.style.setProperty(
        "--fw-delay",
        `${firework.delay}s`
      );

      celebrationBurst.appendChild(
        flash
      );

      const sparkCount =
        isSmallLandscape ? 18 : 26;

      for (
        let index = 0;
        index < sparkCount;
        index++
      ) {
        const spark =
          document.createElement("span");

        spark.className =
          "firework-spark";

        const angle =
          (
            Math.PI *
            2 *
            index /
            sparkCount
          ) +
          (
            Math.random() *
            0.18 -
            0.09
          );

        const minimumDistance =
          isSmallLandscape ? 46 : 68;

        const extraDistance =
          isSmallLandscape ? 28 : 48;

        const distance =
          minimumDistance +
          Math.random() *
          extraDistance;

        const x =
          Math.cos(angle) * distance;

        const y =
          Math.sin(angle) * distance;

        const color =
          colors[
            (
              index +
              fireworkIndex * 2
            ) %
            colors.length
          ];

        spark.style.setProperty(
          "--fw-left",
          firework.left
        );

        spark.style.setProperty(
          "--fw-top",
          firework.top
        );

        spark.style.setProperty(
          "--spark-x",
          `${x}px`
        );

        spark.style.setProperty(
          "--spark-y",
          `${y}px`
        );

        spark.style.setProperty(
          "--spark-size",
          `${4 + Math.random() * 4}px`
        );

        spark.style.setProperty(
          "--spark-color",
          color
        );

        spark.style.setProperty(
          "--spark-delay",
          `${
            firework.delay +
            Math.random() * 0.08
          }s`
        );

        spark.style.setProperty(
          "--spark-duration",
          `${0.9 + Math.random() * 0.45}s`
        );

        celebrationBurst.appendChild(
          spark
        );
      }
    }
  );
}

/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti(
  colors,
  isSmallLandscape
) {
  const confettiCount =
    isSmallLandscape ? 34 : 55;

  for (
    let index = 0;
    index < confettiCount;
    index++
  ) {
    const confetti =
      document.createElement("span");

    if (index % 9 === 0) {
      confetti.className =
        "confetti-piece star";

      confetti.textContent = "\u2605";

      confetti.style.setProperty(
        "--confetti-font-size",
        `${isSmallLandscape ? 15 : 21}px`
      );
    } else if (index % 4 === 0) {
      confetti.className =
        "confetti-piece circle";
    } else {
      confetti.className =
        "confetti-piece";
    }

    const distanceX =
      (
        Math.random() * 2 - 1
      ) *
      (
        isSmallLandscape ? 200 : 320
      );

    const distanceY =
      (
        Math.random() * 2 - 1
      ) *
      (
        isSmallLandscape ? 125 : 220
      );

    confetti.style.setProperty(
      "--confetti-x",
      `${distanceX}px`
    );

    confetti.style.setProperty(
      "--confetti-y",
      `${distanceY}px`
    );

    confetti.style.setProperty(
      "--confetti-width",
      `${5 + Math.random() * 7}px`
    );

    confetti.style.setProperty(
      "--confetti-height",
      `${8 + Math.random() * 11}px`
    );

    confetti.style.setProperty(
      "--confetti-rotate",
      `${-360 + Math.random() * 720}deg`
    );

    confetti.style.setProperty(
      "--confetti-duration",
      `${1.1 + Math.random() * 0.9}s`
    );

    confetti.style.setProperty(
      "--confetti-delay",
      `${Math.random() * 0.2}s`
    );

    confetti.style.setProperty(
      "--confetti-color",
      colors[index % colors.length]
    );

    celebrationBurst.appendChild(
      confetti
    );
  }
}

/* =========================================
   CREATE GOLDEN STREAMERS
========================================= */

function createGoldenStreamers(
  isSmallLandscape
) {
  const streamerCount =
    isSmallLandscape ? 6 : 10;

  for (
    let index = 0;
    index < streamerCount;
    index++
  ) {
    const streamer =
      document.createElement("span");

    streamer.className =
      "celebration-streamer";

    const x =
      (
        Math.random() * 2 - 1
      ) *
      (
        isSmallLandscape ? 190 : 290
      );

    const y =
      (
        Math.random() * 2 - 1
      ) *
      (
        isSmallLandscape ? 125 : 200
      );

    streamer.style.setProperty(
      "--streamer-x",
      `${x}px`
    );

    streamer.style.setProperty(
      "--streamer-y",
      `${y}px`
    );

    streamer.style.setProperty(
      "--streamer-width",
      `${7 + Math.random() * 5}px`
    );

    streamer.style.setProperty(
      "--streamer-height",
      `${42 + Math.random() * 38}px`
    );

    streamer.style.setProperty(
      "--streamer-rotate",
      `${-360 + Math.random() * 720}deg`
    );

    streamer.style.setProperty(
      "--streamer-duration",
      `${1.1 + Math.random() * 0.75}s`
    );

    streamer.style.setProperty(
      "--streamer-delay",
      `${Math.random() * 0.2}s`
    );

    celebrationBurst.appendChild(
      streamer
    );
  }
}

/* =========================================
   VOICE SYSTEM
========================================= */

function getPreferredVoice(voices) {
  const lang = getActiveLangId();
  const prefix = lang === "Arabic" ? "ar" : (lang === "French" ? "fr" : "en");
  return (
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) ||
    voices[0] ||
    null
  );
}

async function loadVoices() {
  if (
    !("speechSynthesis" in window)
  ) {
    return [];
  }

  let voices =
    window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    selectedVoice =
      getPreferredVoice(voices);

    return voices;
  }

  return new Promise((resolve) => {
    let completed = false;

    const finish = () => {
      if (completed) return;

      completed = true;

      voices =
        window.speechSynthesis.getVoices();

      selectedVoice =
        getPreferredVoice(voices);

      resolve(voices);
    };

    const timeout =
      window.setTimeout(
        finish,
        1400
      );

    const voiceHandler = () => {
      window.clearTimeout(timeout);

      finish();
    };

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      voiceHandler,
      { once: true }
    );
  });
}

async function speakText(
  text,
  options = {}
) {
  const {
    pitch = 1.2,
    rate = 0.8,
    cancelPrevious = false
  } = options;

  const lang = getActiveLangId();
  const langCode = lang === "Arabic" ? "ar-SA" : (lang === "French" ? "fr-FR" : "en-US");
  const langPrefix = langCode.slice(0, 2).toLowerCase();

  // For Arabic & French (or when no native voice exists), play pre-downloaded local MP3 via AppLang
  const hasNativeVoice = ("speechSynthesis" in window) &&
    window.speechSynthesis.getVoices().some(v => v.lang.toLowerCase().startsWith(langPrefix));

  if (langPrefix === "ar" || langPrefix === "fr" || !hasNativeVoice) {
    return new Promise((resolve) => {
      if (window.AppLang) {
        window.AppLang.speak(text, langCode, rate, pitch, resolve);
      } else {
        resolve();
      }
    });
  }

  // --- Native SpeechSynthesis path (English) ---
  if (!("speechSynthesis" in window)) {
    await wait(700);
    return;
  }

  const speechEngine = window.speechSynthesis;

  if (cancelPrevious) {
    speechEngine.cancel();
    await wait(80);
  }

  await loadVoices();

  return new Promise((resolve) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = langCode;
    speech.pitch = pitch;
    speech.rate = rate;
    speech.volume = 1;

    if (selectedVoice) {
      speech.voice = selectedVoice;
    }

    let completed = false;

    const finishSpeech = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(safetyTimer);
      resolve();
    };

    speech.onend = finishSpeech;
    speech.onerror = finishSpeech;

    const wordCount = text.trim().split(/\s+/).length;
    const safetyDuration = Math.max(2200, wordCount * 950);
    const safetyTimer = window.setTimeout(finishSpeech, safetyDuration);

    speechEngine.resume();
    speechEngine.speak(speech);
  });
}

function cancelSpeech() {
  if (window.AppLang && window.AppLang.stopSpeech) {
    window.AppLang.stopSpeech();
  } else if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

/* =========================================
   SOUND BUTTON
========================================= */

async function playNumberLesson() {
  if (countingInProgress) {
    return;
  }

  const item =
    numbersData[currentNumberIndex];
  const lang = getActiveLangId();
  const word = item.words[lang] || item.words.English;

  let phrase = "";
  if (lang === "Arabic") {
    phrase = `${word}. ${item.objects.Arabic.phrase}.`;
  } else if (lang === "French") {
    const label = item.count === 1 ? item.objects.French.singular : item.objects.French.plural;
    phrase = `${word}. ${word} ${label}.`;
  } else {
    const label = item.count === 1 ? item.objects.English.singular : item.objects.English.plural;
    phrase = `${word}. ${word} ${label}.`;
  }

  await speakText(
    phrase,
    {
      pitch: 1.25,
      rate: 0.76,
      cancelPrevious: true
    }
  );
}

/* =========================================
   HELPERS
========================================= */

function wait(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(
      resolve,
      milliseconds
    );
  });
}

function createInstruction(item) {
  const lang = getActiveLangId();
  if (lang === "Arabic") {
    return `شاهد ظهور ${item.objects.Arabic.phrase}!`;
  }
  if (lang === "French") {
    return `Regarde ${item.objects.French.phrase} apparaître !`;
  }
  const label = item.count === 1 ? item.objects.English.singular : item.objects.English.plural;
  return `Watch the ${label} appear one by one!`;
}

function createSuccessSentence(item) {
  const lang = getActiveLangId();
  if (lang === "Arabic") {
    return `لقد عددت ${item.arabicNum} (${item.objects.Arabic.phrase})!`;
  }
  if (lang === "French") {
    const label = item.count === 1 ? item.objects.French.singular : item.objects.French.plural;
    return `Tu as compté ${item.number} ${label} !`;
  }
  const label = item.count === 1 ? item.objects.English.singular : item.objects.English.plural;
  return `You counted ${item.number} ${label}!`;
}

function applyStaticLabels() {
  const lang = getActiveLangId();
  const titles = {
    English: {
      title: "Choose a Number",
      subtitle: "Let's learn numbers 1 to 10!",
      say: "Say it:",
      activity: "Watch & Count!",
      ready: "Ready?",
      greatJob: "Great Job!",
      replay: "Replay"
    },
    French: {
      title: "Choisis un nombre",
      subtitle: "Apprenons les nombres de 1 à 10 !",
      say: "Répète :",
      activity: "Regarde et compte !",
      ready: "Prêt ?",
      greatJob: "Bravo !",
      replay: "Rejouer"
    },
    Arabic: {
      title: "اختر رقماً",
      subtitle: "هيا نتعلم الأرقام من ١ إلى ١٠ !",
      say: "ردد معي:",
      activity: "شاهد وعُدّ!",
      ready: "مستعد؟",
      greatJob: "أحسنت!",
      replay: "إعادة"
    }
  };
  const t = titles[lang] || titles.English;

  const titleEl = document.getElementById("numbersTitle");
  if (titleEl) titleEl.textContent = t.title;

  const subtitleEl = document.getElementById("numbersSubtitle");
  if (subtitleEl) subtitleEl.textContent = t.subtitle;

  const sayLabel = document.getElementById("sayLabel");
  if (sayLabel) sayLabel.textContent = t.say;

  const activityTitle = document.getElementById("activityTitle");
  if (activityTitle) activityTitle.textContent = t.activity;

  const greatJobTitle = document.getElementById("greatJobTitle");
  if (greatJobTitle) greatJobTitle.textContent = t.greatJob;

  const replayBtnText = document.getElementById("replayBtnText");
  if (replayBtnText) replayBtnText.textContent = t.replay;

  document.querySelectorAll(".number-card").forEach((card, i) => {
    const itm = numbersData[i];
    if (!itm) return;
    const w = itm.words[lang] || itm.words.English;
    card.setAttribute("aria-label", `${itm.number} - ${w}`);

    let arabicBadge = card.querySelector(".arabic-badge");
    if (lang === "Arabic") {
      if (!arabicBadge) {
        arabicBadge = document.createElement("span");
        arabicBadge.className = "arabic-badge";
        arabicBadge.style.cssText = "position:absolute; top:8px; left:12px; font-size:22px; font-weight:900; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.5);";
        card.appendChild(arabicBadge);
      }
      arabicBadge.textContent = itm.arabicNum;
      arabicBadge.style.display = "block";
    } else if (arabicBadge) {
      arabicBadge.style.display = "none";
    }
  });
}

/* =========================================
   PREVIOUS / NEXT
========================================= */

function showPreviousNumber() {
  let newIndex =
    currentNumberIndex - 1;

  if (newIndex < 0) {
    newIndex =
      numbersData.length - 1;
  }

  openNumber(newIndex);
}

function showNextNumber() {
  let newIndex =
    currentNumberIndex + 1;

  if (
    newIndex >=
    numbersData.length
  ) {
    newIndex = 0;
  }

  openNumber(newIndex);
}

/* =========================================
   STOP SEQUENCE
========================================= */

function stopCurrentSequence(
  clearCelebration = true
) {
  sequenceId++;

  countingInProgress = false;

  cancelSpeech();

  if (celebrationTimer) {
    window.clearTimeout(
      celebrationTimer
    );

    celebrationTimer = null;
  }

  if (clearCelebration) {
    celebrationBurst.innerHTML = "";
  }
}

/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {
  stopCurrentSequence();

  resetActivityUI();

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}

/* =========================================
   LANDSCAPE MODE
========================================= */

async function requestLandscapeMode() {
  try {
    if (
      !document.fullscreenElement &&
      document.documentElement
        .requestFullscreen
    ) {
      await document.documentElement
        .requestFullscreen();
    }

    if (
      screen.orientation &&
      screen.orientation.lock
    ) {
      await screen.orientation.lock(
        "landscape"
      );
    }
  } catch (error) {
    console.info(
      "Please rotate the device manually."
    );
  }
}

/* =========================================
   EVENTS
========================================= */

closeBtn.addEventListener(
  "click",
  closeModal
);

previousBtn.addEventListener(
  "click",
  showPreviousNumber
);

nextBtn.addEventListener(
  "click",
  showNextNumber
);

// continueBtn.addEventListener(
//   "click",
//   showNextNumber
// );

replayCountBtn.addEventListener(
  "click",
  replayCounting
);

soundBtn.addEventListener(
  "click",
  playNumberLesson
);

landscapeButton.addEventListener(
  "click",
  requestLandscapeMode
);

modal.addEventListener(
  "click",
  (event) => {
    if (event.target === modal) {
      closeModal();
    }
  }
);

document.addEventListener(
  "keydown",
  (event) => {
    if (
      !modal.classList.contains("show")
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    }

    if (event.key === "ArrowLeft") {
      showPreviousNumber();
    }

    if (event.key === "ArrowRight") {
      showNextNumber();
    }
  }
);

window.addEventListener(
  "resize",
  () => {
    updateMobileLayout();

    if (
      modal.classList.contains("show")
    ) {
      const item =
        numbersData[
          currentNumberIndex
        ];

      setAnimatedObjectSize(
        item.count
      );
    }
  }
);

window.addEventListener(
  "orientationchange",
  updateMobileLayout,
  { passive: true }
);

if (window.visualViewport) {
  window.visualViewport.addEventListener(
    "resize",
    updateMobileLayout,
    { passive: true }
  );
}

enableRotatedTouchScroll(numbersMain);
enableRotatedTouchScroll(modal);
enableGlobalRotatedScroll();

window.addEventListener(
  "pagehide",
  () => {
    stopCurrentSequence();
  }
);

/* Voice list preload */

if (
  "speechSynthesis" in window
) {
  loadVoices();

  window.speechSynthesis.addEventListener(
    "voiceschanged",
    () => {
      const voices =
        window.speechSynthesis.getVoices();

      selectedVoice =
        getPreferredVoice(voices);
    }
  );
}

updateMobileLayout();
applyStaticLabels();

window.addEventListener("appLanguageChanged", () => {
  applyStaticLabels();
  if (modal.classList.contains("show")) {
    openNumber(currentNumberIndex);
  }
});
