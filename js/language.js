"use strict";

const languages = [
    {
        id: "English",
        name: "English",
        nativeName: "English",
        speechText: "English! Let's learn English!",
        speechLang: "en-US",
        flag: "assets/images/flags/usa.png",
        animal: {
            name: "Bear",
            image: "assets/images/language-images/teddy.png",
        },
        bubble: "Let's Learn English!",
        lionBubble: "Great Choice!"
    },
    {
        id: "French",
        name: "Français",
        nativeName: "Français",
        speechText: "Français ! Apprenons le français !",
        speechLang: "fr-FR",
        flag: "assets/images/flags/france.png",
        animal: {
            name: "Elephant",
            image: "assets/images/language-images/elephant.png",
        },
        bubble: "Apprenons le Français !",
        lionBubble: "Super Choix !"
    },
    {
        id: "Arabic",
        name: "العربية",
        nativeName: "العربية",
        speechText: "العربية! هيا نتعلم اللغة العربية!",
        speechLang: "ar-SA",
        flag: "assets/images/flags/saudi-arabia.png",
        animal: {
            name: "Rabbit",
            image: "assets/images/language-images/rabbit.png",
        },
        bubble: "!هيا نتعلم العربية",
        lionBubble: "!اختيار رائع"
    }
];

let selectedLanguage = null;
let navigating = false;

const cardsWrapper = document.getElementById("cardsWrapper");

const lionBox = document.getElementById("lionBox");
const lionImg = document.getElementById("lionImg");
const lionBubble = document.getElementById("lionBubble");
const lionImages = {
    cute: "assets/images/language-images/cute-line.png",
    happy: "assets/images/language-images/happy-line.png",
};

const selectedAnimalBox = document.getElementById("selectedAnimalBox");
const selectedAnimalImg = document.getElementById("selectedAnimalImg");
const animalBubble = document.getElementById("animalBubble");

function getViewportSize() {
    const viewport = window.visualViewport;
    const fallbackWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        viewport?.width;

    const fallbackHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        viewport?.height;

    return {
        width: fallbackWidth,
        height: fallbackHeight,
    };
}

function updateMobileLayout() {
    const { width, height } = getViewportSize();
    const shortSide = Math.min(width, height);
    const longSide = Math.max(width, height);
    const isMobileLandscapeLayout = shortSide <= 767 && longSide <= 1024;
    const visibleWidth = isMobileLandscapeLayout ? shortSide : width;
    const visibleHeight = isMobileLandscapeLayout ? longSide : height;

    document.documentElement.style.setProperty("--visible-width", `${visibleWidth}px`);
    document.documentElement.style.setProperty("--visible-height", `${visibleHeight}px`);

    document.body.classList.toggle(
        "mobile-landscape-layout",
        isMobileLandscapeLayout
    );

    document.body.classList.toggle(
        "mobile-portrait-rotate",
        isMobileLandscapeLayout && height > width
    );
}

function renderCards() {
    cardsWrapper.innerHTML = "";

    const savedLang = localStorage.getItem("selectedLanguage") || "French";

    languages.forEach((language) => {
        const animal = language.animal;
        const card = document.createElement("div");
        card.className = "language-card";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `Select ${language.name}`);

        if (savedLang === language.id) {
            selectedLanguage = language;
            card.classList.add("selected");
        }

        card.innerHTML = `
            <div class="tick">&check;</div>
            <div class="flag">
                <img src="${language.flag}" alt="${language.name}">
            </div>
            <img class="card-animal" src="${animal.image}" alt="${animal.name}">
            <div class="language-name">${language.name}</div>
        `;

        card.addEventListener("click", () => {
            selectLanguage(language, card);
        });

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectLanguage(language, card);
            }
        });

        cardsWrapper.appendChild(card);
    });

    if (selectedLanguage) {
        applySelectionUI(selectedLanguage);
    }
}

function goToActivities() {
    if (navigating) return;
    navigating = true;
    window.location.href = "category.html";
}

function selectLanguage(language, card) {
    selectedLanguage = language;

    document.querySelectorAll(".language-card").forEach((item) => {
        item.classList.remove("selected");
    });

    card.classList.add("selected");
    applySelectionUI(language);
    playSelectionAnimations(card);

    // Save selected language immediately
    if (window.AppLang) {
        window.AppLang.setLang(language.id, false);
    } else {
        localStorage.setItem("selectedLanguage", language.id);
    }

    // Play cheerful phrase and then navigate directly to activities
    const fallbackTimer = setTimeout(goToActivities, 1600);
    if (window.AppLang) {
        window.AppLang.speak(language.speechText, language.speechLang, 0.85, 1.1, () => {
            clearTimeout(fallbackTimer);
            goToActivities();
        });
    }
}

function applySelectionUI(language) {
    if (animalBubble) animalBubble.textContent = language.bubble;
    if (lionBubble) lionBubble.textContent = language.lionBubble;
    if (selectedAnimalImg) selectedAnimalImg.src = language.animal.image;
}

function setLionMood(isHappy) {
    lionImg.src = isHappy ? lionImages.happy : lionImages.cute;
    lionImg.alt = isHappy ? "Happy Lion" : "Cute Lion";
}

function playSelectionAnimations(card) {
    lionBox.classList.remove("show");
    selectedAnimalBox.classList.remove("show");

    void lionBox.offsetWidth;
    void selectedAnimalBox.offsetWidth;

    setLionMood(true);

    lionBox.classList.add("show");
    selectedAnimalBox.classList.add("show");

    createSparkles(card);
}

function createSparkles(card) {
    const rect = card.getBoundingClientRect();

    for (let i = 0; i < 16; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        sparkle.style.left = rect.left + Math.random() * rect.width + "px";
        sparkle.style.top = rect.top + Math.random() * rect.height + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 900);
    }
}

window.addEventListener("resize", updateMobileLayout);
window.addEventListener("orientationchange", updateMobileLayout);
window.visualViewport?.addEventListener("resize", updateMobileLayout);

updateMobileLayout();
setLionMood(false);
renderCards();
