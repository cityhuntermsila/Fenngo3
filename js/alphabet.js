"use strict";

const alphabetDataEnglish = {
    A: { word: "Apple", phrase: "A for Apple", capital: "A", small: "a", frontImage: "assets/images/alphabet/A/apple.png" },
    B: { word: "Ball", phrase: "B for Ball", capital: "B", small: "b", frontImage: "assets/images/alphabet/B/ball.png" },
    C: { word: "Cat", phrase: "C for Cat", capital: "C", small: "c", frontImage: "assets/images/alphabet/C/cat.png" },
    D: { word: "Dog", phrase: "D for Dog", capital: "D", small: "d", frontImage: "assets/images/alphabet/D/Dog.png" },
    E: { word: "Elephant", phrase: "E for Elephant", capital: "E", small: "e", frontImage: "assets/images/alphabet/E/elephant.png" },
    F: { word: "Fish", phrase: "F for Fish", capital: "F", small: "f", frontImage: "assets/images/alphabet/F/fish.png" },
    G: { word: "Grapes", phrase: "G for Grapes", capital: "G", small: "g", frontImage: "assets/images/color/green/grapes.png" },
    H: { word: "House", phrase: "H for House", capital: "H", small: "h", frontImage: "assets/images/alphabet/H/house.png" },
    I: { word: "Ice Cube", phrase: "I for Ice Cube", capital: "I", small: "i", frontImage: "assets/images/geometry/cube/ice-cube.png" },
    J: { word: "Jellyfish", phrase: "J for Jellyfish", capital: "J", small: "j", frontImage: "assets/images/alphabet/J/jellyfish.png" },
    K: { word: "Kite", phrase: "K for Kite", capital: "K", small: "k", frontImage: "assets/images/geometry/diamond/kite.png" },
    L: { word: "Lion", phrase: "L for Lion", capital: "L", small: "l", frontImage: "assets/images/language-images/lion.png" },
    M: { word: "Mango", phrase: "M for Mango", capital: "M", small: "m", frontImage: "assets/images/alphabet/M/mango.png" },
    N: { word: "Nest", phrase: "N for Nest", capital: "N", small: "n", frontImage: "assets/images/alphabet/N/nest.png" },
    O: { word: "Orange", phrase: "O for Orange", capital: "O", small: "o", frontImage: "assets/images/color/orange/orange.png" },
    P: { word: "Pencil", phrase: "P for Pencil", capital: "P", small: "p", frontImage: "assets/images/number/pencil.png" },
    Q: { word: "Queen", phrase: "Q for Queen", capital: "Q", small: "q", frontImage: "assets/images/alphabet/Q/queen.png" },
    R: { word: "Rainbow", phrase: "R for Rainbow", capital: "R", small: "r", frontImage: "assets/images/alphabet/R/rainbow.png" },
    S: { word: "Sun", phrase: "S for Sun", capital: "S", small: "s", frontImage: "assets/images/color/yellow/sun.png" },
    T: { word: "Tree", phrase: "T for Tree", capital: "T", small: "t", frontImage: "assets/images/alphabet/T/tree.png" },
    U: { word: "Umbrella", phrase: "U for Umbrella", capital: "U", small: "u", frontImage: "assets/images/alphabet/U/umbrella.png" },
    V: { word: "Volcano", phrase: "V for Volcano", capital: "V", small: "v", frontImage: "assets/images/alphabet/V/volcano.png" },
    W: { word: "Watermelon", phrase: "W for Watermelon", capital: "W", small: "w", frontImage: "assets/images/geometry/oval/watermelon.png" },
    X: { word: "Xylophone", phrase: "X for Xylophone", capital: "X", small: "x", frontImage: "assets/images/alphabet/X/xylophone.png" },
    Y: { word: "Yo-Yo", phrase: "Y for Yo-Yo", capital: "Y", small: "y", frontImage: "assets/images/alphabet/Y/yo-yo.png" },
    Z: { word: "Zebra", phrase: "Z for Zebra", capital: "Z", small: "z", frontImage: "assets/images/alphabet/Z/zebra.png" }
};

const alphabetDataFrench = {
    A: { word: "Avion", phrase: "A comme Avion", capital: "A", small: "a", frontImage: "assets/images/alphabet/A/astronaut.png" },
    B: { word: "Ballon", phrase: "B comme Ballon", capital: "B", small: "b", frontImage: "assets/images/alphabet/B/ball.png" },
    C: { word: "Chat", phrase: "C comme Chat", capital: "C", small: "c", frontImage: "assets/images/alphabet/C/cat.png" },
    D: { word: "Dauphin", phrase: "D comme Dauphin", capital: "D", small: "d", frontImage: "assets/images/alphabet/D/Dolphin.png" },
    E: { word: "Éléphant", phrase: "E comme Éléphant", capital: "E", small: "e", frontImage: "assets/images/alphabet/E/elephant.png" },
    F: { word: "Poisson", phrase: "F comme Poisson", capital: "F", small: "f", frontImage: "assets/images/alphabet/F/fish.png" },
    G: { word: "Gâteau", phrase: "G comme Gâteau", capital: "G", small: "g", frontImage: "assets/images/alphabet/C/Cake.png" },
    H: { word: "Maison", phrase: "H comme Maison", capital: "H", small: "h", frontImage: "assets/images/alphabet/H/house.png" },
    I: { word: "Glaçon", phrase: "I comme Glaçon", capital: "I", small: "i", frontImage: "assets/images/geometry/cube/ice-cube.png" },
    J: { word: "Méduse", phrase: "J comme Méduse", capital: "J", small: "j", frontImage: "assets/images/alphabet/J/jellyfish.png" },
    K: { word: "Cerf-volant", phrase: "K comme Cerf-volant", capital: "K", small: "k", frontImage: "assets/images/geometry/diamond/kite.png" },
    L: { word: "Lion", phrase: "L comme Lion", capital: "L", small: "l", frontImage: "assets/images/language-images/lion.png" },
    M: { word: "Mangue", phrase: "M comme Mangue", capital: "M", small: "m", frontImage: "assets/images/alphabet/M/mango.png" },
    N: { word: "Nid", phrase: "N comme Nid", capital: "N", small: "n", frontImage: "assets/images/alphabet/N/nest.png" },
    O: { word: "Orange", phrase: "O comme Orange", capital: "O", small: "o", frontImage: "assets/images/color/orange/orange.png" },
    P: { word: "Papillon", phrase: "P comme Papillon", capital: "P", small: "p", frontImage: "assets/images/number/butterflies.png" },
    Q: { word: "Reine", phrase: "Q comme Reine", capital: "Q", small: "q", frontImage: "assets/images/alphabet/Q/queen.png" },
    R: { word: "Arc-en-ciel", phrase: "R comme Arc-en-ciel", capital: "R", small: "r", frontImage: "assets/images/alphabet/R/rainbow.png" },
    S: { word: "Soleil", phrase: "S comme Soleil", capital: "S", small: "s", frontImage: "assets/images/color/yellow/sun.png" },
    T: { word: "Arbre", phrase: "T comme Arbre", capital: "T", small: "t", frontImage: "assets/images/alphabet/T/tree.png" },
    U: { word: "Parapluie", phrase: "U comme Parapluie", capital: "U", small: "u", frontImage: "assets/images/alphabet/U/umbrella.png" },
    V: { word: "Volcan", phrase: "V comme Volcan", capital: "V", small: "v", frontImage: "assets/images/alphabet/V/volcano.png" },
    W: { word: "Pastèque", phrase: "W comme Pastèque", capital: "W", small: "w", frontImage: "assets/images/geometry/oval/watermelon.png" },
    X: { word: "Xylophone", phrase: "X comme Xylophone", capital: "X", small: "x", frontImage: "assets/images/alphabet/X/xylophone.png" },
    Y: { word: "Yo-Yo", phrase: "Y comme Yo-Yo", capital: "Y", small: "y", frontImage: "assets/images/alphabet/Y/yo-yo.png" },
    Z: { word: "Zèbre", phrase: "Z comme Zèbre", capital: "Z", small: "z", frontImage: "assets/images/alphabet/Z/zebra.png" }
};

const alphabetGrid = document.getElementById("alphabetGrid");
const cubeModal = document.getElementById("cubeModal");
const closeBtn = document.getElementById("closeBtn");
const root = document.documentElement;
const body = document.body;

const cubeHeading = document.getElementById("cubeHeading");
const frontImage = document.getElementById("frontImage");
const imageFallback = document.createElement("div");
imageFallback.className = "alphabet-image-fallback";
imageFallback.hidden = true;
frontImage.insertAdjacentElement("afterend", imageFallback);

const frontLetter = document.getElementById("frontLetter");
const backLetter = document.getElementById("backLetter");
const soundBtn = document.getElementById("soundBtn");
const prevLetterBtn = document.getElementById("prevLetterBtn");
const nextLetterBtn = document.getElementById("nextLetterBtn");

let currentLetter = null;
let currentDataset = alphabetDataEnglish;
let letters = Object.keys(currentDataset);
let currentLangId = "English";

function getActiveDataset() {
    const langId = window.AppLang ? window.AppLang.getCurrentLangId() : (localStorage.getItem("selectedLanguage") || "English");
    currentLangId = langId;

    if (langId === "French") {
        return alphabetDataFrench;
    }
    return alphabetDataEnglish;
}

function updateNavLabels() {
    if (prevLetterBtn) {
        prevLetterBtn.innerHTML = "&#10094;";
        prevLetterBtn.setAttribute("aria-label", currentLangId === "French" ? "Précédent" : "Previous");
    }
    if (nextLetterBtn) {
        nextLetterBtn.innerHTML = "&#10095;";
        nextLetterBtn.setAttribute("aria-label", currentLangId === "French" ? "Suivant" : "Next");
    }
}

function renderAlphabet() {
    currentDataset = getActiveDataset();
    letters = Object.keys(currentDataset);
    alphabetGrid.innerHTML = "";

    letters.forEach((letter) => {
        const card = document.createElement("div");
        card.className = "letter-card";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.innerHTML = `<span>${letter}</span>`;

        card.addEventListener("click", () => {
            openCube(letter);
        });

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openCube(letter);
            }
        });

        alphabetGrid.appendChild(card);
    });

    updateNavLabels();
}

function openCube(letter) {
    currentLetter = letter;
    const data = currentDataset[letter];
    if (!data) return;

    cubeHeading.innerText = data.phrase || `${data.capital} for ${data.word}`;

    imageFallback.hidden = true;
    frontImage.style.display = "none";
    frontImage.src = data.frontImage;
    frontImage.alt = data.word;
    frontImage.onerror = () => {
        showImageFallback(data);
    };
    frontImage.onload = () => {
        imageFallback.hidden = true;
        frontImage.style.display = "block";
    };

    frontLetter.innerText = data.capital;
    backLetter.innerText = data.small;

    soundBtn.onclick = function () {
        speakCurrentLetter(data);
    };

    cubeModal.classList.add("show");
    speakCurrentLetter(data);
}

function showImageFallback(data) {
    frontImage.style.display = "none";
    imageFallback.innerHTML = `
        <div class="fallback-letter">${data.capital}</div>
        <div class="fallback-word">${data.word}</div>
    `;
    imageFallback.hidden = false;
}

function navigateLetter(direction) {
    const currentIndex = letters.indexOf(currentLetter);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === "next") {
        newIndex = (currentIndex + 1) % letters.length;
    } else {
        newIndex = (currentIndex - 1 + letters.length) % letters.length;
    }

    openCube(letters[newIndex]);
}

prevLetterBtn.addEventListener("click", () => {
    navigateLetter("prev");
});

nextLetterBtn.addEventListener("click", () => {
    navigateLetter("next");
});

function closeCube() {
    cubeModal.classList.remove("show");
    window.speechSynthesis?.cancel?.();
}

closeBtn.addEventListener("click", closeCube);

cubeModal.addEventListener("click", function (e) {
    if (e.target === cubeModal) {
        closeCube();
    }
});

function speakCurrentLetter(data) {
    const text = data.phrase || `${data.capital} for ${data.word}`;
    const langCode = currentLangId === "French" ? "fr-FR" : "en-US";

    if (window.AppLang) {
        window.AppLang.speak(text, langCode);
    } else if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = langCode;
        speech.pitch = 1.2;
        speech.rate = 0.85;
        window.speechSynthesis.speak(speech);
    }
}

function viewportSize() {
    const viewport = window.visualViewport;
    return {
        width: Math.round(viewport ? viewport.width : window.innerWidth),
        height: Math.round(viewport ? viewport.height : window.innerHeight)
    };
}

function updateMobileLayout() {
    const { width, height } = viewportSize();
    root.style.setProperty("--visible-width", `${width}px`);
    root.style.setProperty("--visible-height", `${height}px`);
    body.classList.remove("mobile-portrait-rotate");
}

window.addEventListener("appLanguageChanged", () => {
    renderAlphabet();
    if (cubeModal.classList.contains("show") && currentLetter) {
        if (letters.includes(currentLetter)) {
            openCube(currentLetter);
        } else {
            openCube(letters[0]);
        }
    }
});

updateMobileLayout();
renderAlphabet();

window.addEventListener("resize", updateMobileLayout, { passive: true });
window.addEventListener("orientationchange", updateMobileLayout, { passive: true });
window.visualViewport?.addEventListener("resize", updateMobileLayout, { passive: true });
