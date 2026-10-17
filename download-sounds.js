#!/usr/bin/env node
"use strict";

/**
 * Automated Audio Downloader for Fenncky (Arabic & French)
 * Checks if each required MP3 file exists in assets/audio/<lang>/<hash>.mp3
 * If missing, downloads it from Google Translate TTS.
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT_DIR = __dirname;
const AUDIO_BASE_DIR = path.join(ROOT_DIR, "assets", "audio");

// Same deterministic FNV-1a 32-bit hash used in js/app-lang.js
function hashText(str) {
  const normalized = str.trim();
  let h = 2166136261;
  for (let i = 0; i < normalized.length; i++) {
    h ^= normalized.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

function collectPhrases() {
  const ar = new Set();
  const fr = new Set();

  // 1. Language Selection
  ar.add("العربية! هيا نتعلم اللغة العربية!");
  fr.add("Français ! Apprenons le français !");

  // 2. Alphabet - Arabic (28 letters)
  const alphabetArabicPhrases = [
    "أ - أَسَد",
    "ب - بَطَّة",
    "ت - تُفَّاحَة",
    "ث - ثَلْج",
    "ج - جَزَر",
    "ح - حُوت",
    "خ - خَرُوف",
    "د - دُلْفِين",
    "ذ - ذُرَة",
    "ر - قَوْسُ قُزَح",
    "ز - زَهْرَة",
    "س - سَمَكَة",
    "ش - شَمْس",
    "ص - صُنْدُوق",
    "ض - ضَوْء",
    "ط - طَائِر",
    "ظ - ظَرْف",
    "ع - عِنَب",
    "غ - غَزَال",
    "ف - فِيل",
    "ق - قِطَّة",
    "ك - كُرَة",
    "ل - لُعْبَة",
    "م - مَانْجُو",
    "ن - نَجْمَة",
    "هـ - هَدِيَّة",
    "و - وَرْدَة",
    "ي - يُويُو"
  ];
  alphabetArabicPhrases.forEach((p) => ar.add(p));

  // Alphabet - French (26 letters)
  const alphabetFrenchPhrases = [
    "A comme Avion",
    "B comme Ballon",
    "C comme Chat",
    "D comme Dauphin",
    "E comme Éléphant",
    "F comme Poisson",
    "G comme Gâteau",
    "H comme Maison",
    "I comme Glaçon",
    "J comme Méduse",
    "K comme Cerf-volant",
    "L comme Lion",
    "M comme Mangue",
    "N comme Nid",
    "O comme Orange",
    "P comme Papillon",
    "Q comme Reine",
    "R comme Arc-en-ciel",
    "S comme Soleil",
    "T comme Arbre",
    "U comme Parapluie",
    "V comme Volcan",
    "W comme Pastèque",
    "X comme Xylophone",
    "Y comme Yo-Yo",
    "Z comme Zèbre"
  ];
  alphabetFrenchPhrases.forEach((p) => fr.add(p));

  // 3. Numbers (1 to 10)
  const numbersData = [
    { count: 1, arWord: "وَاحِد", frWord: "Un", arPhrase: "تُفَّاحَة وَاحِدَة", frLabel: "pomme" },
    { count: 2, arWord: "اِثْنَان", frWord: "Deux", arPhrase: "عُصْفُورَان", frLabel: "oiseaux" },
    { count: 3, arWord: "ثَلَاثَة", frWord: "Trois", arPhrase: "ثَلَاث نُجُوم", frLabel: "étoiles" },
    { count: 4, arWord: "أَرْبَعَة", frWord: "Quatre", arPhrase: "أَرْبَع سَيَّارَات", frLabel: "voitures" },
    { count: 5, arWord: "خَمْسَة", frWord: "Cinq", arPhrase: "خَمْس فَرَاشَات", frLabel: "papillons" },
    { count: 6, arWord: "سِتَّة", frWord: "Six", arPhrase: "سِتّ زُهُور عَبَّاد شَمْس", frLabel: "tournesols" },
    { count: 7, arWord: "سَبْعَة", frWord: "Sept", arPhrase: "سَبْع بَالُونَات", frLabel: "ballons" },
    { count: 8, arWord: "ثَمَانِيَة", frWord: "Huit", arPhrase: "ثَمَانِي كَعْكَات", frLabel: "gâteaux" },
    { count: 9, arWord: "تِسْعَة", frWord: "Neuf", arPhrase: "تِسْع كُرَات", frLabel: "balles" },
    { count: 10, arWord: "عَشَرَة", frWord: "Dix", arPhrase: "عَشَرَة أَقْلَام", frLabel: "crayons" }
  ];

  numbersData.forEach((item) => {
    // Counting words
    ar.add(item.arWord);
    fr.add(item.frWord);
    // Praise at end of counting
    ar.add(`أحسنت ممتاز! لقد عددت ${item.arPhrase}.`);
    fr.add(`Bravo ! Tu as compté ${item.frWord} ${item.frLabel}.`);
    // Sound button lesson
    ar.add(`${item.arWord}. ${item.arPhrase}.`);
    fr.add(`${item.frWord}. ${item.frWord} ${item.frLabel}.`);
  });

  // 4. Colors
  const colorsConfig = [
    {
      arCol: "أحمر",
      frCol: "Rouge",
      examples: [
        { ar: "تفاحة", fr: "Pomme" },
        { ar: "فراولة", fr: "Fraise" },
        { ar: "وردة", fr: "Rose" }
      ],
      correctQuiz: { ar: "تفاحة", fr: "Pomme" }
    },
    {
      arCol: "أزرق",
      frCol: "Bleu",
      examples: [
        { ar: "حوت", fr: "Baleine" },
        { ar: "قطرة ماء", fr: "Goutte d'eau" },
        { ar: "توت", fr: "Myrtille" }
      ],
      correctQuiz: { ar: "توت", fr: "Myrtille" }
    },
    {
      arCol: "أخضر",
      frCol: "Vert",
      examples: [
        { ar: "ورقة شجر", fr: "Feuille" },
        { ar: "ضفدع", fr: "Grenouille" },
        { ar: "بروكلي", fr: "Brocoli" }
      ],
      correctQuiz: { ar: "ورقة شجر", fr: "Feuille" }
    },
    {
      arCol: "أصفر",
      frCol: "Jaune",
      examples: [
        { ar: "شمس", fr: "Soleil" },
        { ar: "موز", fr: "Banane" },
        { ar: "نجمة", fr: "Étoile" }
      ],
      correctQuiz: { ar: "موز", fr: "Banane" }
    },
    {
      arCol: "برتقالي",
      frCol: "Orange",
      examples: [
        { ar: "برتقال", fr: "Orange" },
        { ar: "جزر", fr: "Carotte" },
        { ar: "قرع", fr: "Citrouille" }
      ],
      correctQuiz: { ar: "قرع", fr: "Citrouille" }
    },
    {
      arCol: "بنفسجي",
      frCol: "Violet",
      examples: [
        { ar: "باذنجان", fr: "Aubergine" },
        { ar: "زهرة", fr: "Fleur" },
        { ar: "صندوق هدية", fr: "Cadeau" }
      ],
      correctQuiz: { ar: "عنب", fr: "Raisin" }
    },
    {
      arCol: "وردي",
      frCol: "Rose",
      examples: [
        { ar: "بالون", fr: "Ballon" },
        { ar: "فلامنغو", fr: "Flamant rose" },
        { ar: "غزل البنات", fr: "Barbe à papa" }
      ],
      correctQuiz: { ar: "فلامنغو", fr: "Flamant rose" }
    },
    {
      arCol: "أسود",
      frCol: "Noir",
      examples: [
        { ar: "سيارة", fr: "Voiture" },
        { ar: "قطة", fr: "Chat" },
        { ar: "قبعة", fr: "Chapeau" }
      ],
      correctQuiz: { ar: "سيارة", fr: "Voiture" }
    },
    {
      arCol: "أبيض",
      frCol: "Blanc",
      examples: [
        { ar: "سحابة", fr: "Nuage" },
        { ar: "أرنب", fr: "Lapin" },
        { ar: "فطر", fr: "Champignon" }
      ],
      correctQuiz: { ar: "سحابة", fr: "Nuage" }
    },
    {
      arCol: "بني",
      frCol: "Marron",
      examples: [
        { ar: "دبدوب", fr: "Ours en peluche" },
        { ar: "بومة", fr: "Chouette" },
        { ar: "قرد", fr: "Singe" }
      ],
      correctQuiz: { ar: "حصان", fr: "Cheval" }
    }
  ];

  colorsConfig.forEach((c) => {
    // Open color & soundBtn
    ar.add(`اللون ${c.arCol}`);
    fr.add(c.frCol);
    fr.add(`Couleur ${c.frCol}`);

    // Examples
    c.examples.forEach((ex) => {
      ar.add(`${ex.ar} باللون ${c.arCol}`);
      fr.add(`${ex.fr} est ${c.frCol}`);
    });

    // Quiz correct & wrong
    ar.add(`أحسنت ممتاز! ${c.correctQuiz.ar} باللون ${c.arCol}!`);
    ar.add(`حاول مرة أخرى. ابحث عن الشيء باللون ${c.arCol}.`);
    fr.add(`Bravo ! ${c.correctQuiz.fr} est ${c.frCol} !`);
    fr.add(`Réessaie. Trouve l'objet ${c.frCol}.`);
  });

  // 5. Geometry
  ar.add("اختر شكلاً. اضغط على شكل لاكتشافه.");
  fr.add("Choisis une forme. Touche pour découvrir.");

  const geoArabic = [
    { name: "دائرة", speech: "الدائرة ليس لها أضلاع مستقيمة ولا زوايا.", examples: ["ساعة", "كرة", "صحن"] },
    { name: "مربع", speech: "المربع له أربعة أضلاع متساوية وأربع زوايا.", examples: ["نافذة", "صندوق هدية", "بلاطة"] },
    { name: "مثلث", speech: "المثلث له ثلاثة أضلاع وثلاث زوايا.", examples: ["مثلث", "زوايا", "شكل مثلث"] },
    { name: "مستطيل", speech: "المستطيل له أربعة أضلاع وأربع زوايا.", examples: ["باب", "كتاب", "تلفاز"] },
    { name: "خماسي الأضلاع", speech: "الشكل الخماسي له خمسة أضلاع وخمس زوايا.", examples: ["لوحة", "شارة", "لافتة خماسية"] },
    { name: "سداسي الأضلاع", speech: "الشكل السداسي له ستة أضلاع وست زوايا.", examples: ["خلية عسل", "صامولة", "بلاطة سداسية"] },
    { name: "بيضاوي", speech: "الشكل البيضاوي ليس له أضلاع مستقيمة ولا زوايا.", examples: ["بيضة", "بطيخ", "بالون"] },
    { name: "نجمة", speech: "النجمة لها عشرة أضلاع وعشرة رؤوس.", examples: ["بسكويت", "عصا نجمية", "نجم البحر"] },
    { name: "معين", speech: "المعين له أربعة أضلاع وأربع زوايا.", examples: ["طائرة ورقية", "جوهرة", "لافتة طريق"] },
    { name: "مكعب", speech: "المكعب له ستة أوجه واثنا عشر ضلعاً وثماني زوايا.", examples: ["نرد", "مكعب ثلج", "مكعب ألعاب"] }
  ];

  geoArabic.forEach((s) => {
    ar.add(s.speech);
    s.examples.forEach((ex) => {
      ar.add(`${ex} على شكل ${s.name}.`);
    });
  });

  const geoFrench = [
    { name: "Cercle", speech: "Un cercle n'a aucun côté droit et aucun coin.", examples: ["Horloge", "Ballon", "Assiette"] },
    { name: "Carré", speech: "Un carré a quatre côtés égaux et quatre coins.", examples: ["Fenêtre", "Cadeau", "Carrelage"] },
    { name: "Triangle", speech: "Un triangle a trois côtés et trois coins.", examples: ["Triangle", "Coins", "Forme Triangle"] },
    { name: "Rectangle", speech: "Un rectangle a quatre côtés et quatre coins.", examples: ["Porte", "Livre", "Télévision"] },
    { name: "Pentagone", speech: "Un pentagone a cinq côtés et cinq coins.", examples: ["Plaque", "Badge", "Panneau"] },
    { name: "Hexagone", speech: "Un hexagone a six côtés et six coins.", examples: ["Nid d'abeille", "Écrou", "Carreau"] },
    { name: "Ovale", speech: "Un ovale n'a aucun côté droit et aucun coin.", examples: ["Œuf", "Pastèque", "Ballon"] },
    { name: "Étoile", speech: "Une étoile a dix côtés et dix pointes.", examples: ["Biscuit", "Baguette", "Étoile de mer"] },
    { name: "Losange", speech: "Un losange a quatre côtés et quatre coins.", examples: ["Cerf-volant", "Pierre précieuse", "Panneau"] },
    { name: "Cube", speech: "Un cube a six faces, douze arêtes et huit coins.", examples: ["Dé", "Glaçon", "Bloc de jeu"] }
  ];

  geoFrench.forEach((s) => {
    fr.add(s.speech);
    s.examples.forEach((ex) => {
      fr.add(`${ex} a la forme d'un ${s.name}.`);
    });
  });

  // 6. Family (Members + Relations)
  const familyArabic = [
    "الجَدّ. هَذَا هُوَ الجَدّ.",
    "الجَدَّة. هَذِهِ هِيَ الجَدَّة.",
    "الأَب. هَذَا هُوَ الأَب.",
    "الأُمّ. هَذِهِ هِيَ الأُمّ.",
    "الاِبْن. هَذَا هُوَ الاِبْن.",
    "الاِبْنَة. هَذِهِ هِيَ الاِبْنَة.",
    "أُمِّي! هَذِهِ أُمِّي.",
    "أَبِي! هَذَا أَبِي.",
    "أَخِي! هَذَا أَخِي.",
    "أُخْتِي! هَذِهِ أُخْتِي."
  ];
  familyArabic.forEach((p) => ar.add(p));

  const familyFrench = [
    "Le grand-père. Voici le grand-père.",
    "La grand-mère. Voici la grand-mère.",
    "Le père. Voici le père.",
    "La mère. Voici la mère.",
    "Le fils. Voici le fils.",
    "La fille. Voici la fille.",
    "Ma mère ! C'est ma mère.",
    "Mon père ! C'est mon père.",
    "Mon frère ! C'est mon frère.",
    "Ma sœur ! C'est ma sœur."
  ];
  familyFrench.forEach((p) => fr.add(p));

  // 7. School Stationery
  [
    "قَلَمُ رَصَاص. هَذَا قَلَمُ رَصَاص.",
    "قَلَمُ حِبْر. هَذَا قَلَمُ حِبْر.",
    "كِتَاب. هَذَا كِتَاب.",
    "كُرَّاس. هَذَا كُرَّاس.",
    "مِمْحَاة. هَذِهِ مِمْحَاة.",
    "مِسْطَرَة. هَذِهِ مِسْطَرَة.",
    "مِحْفَظَة. هَذِهِ مِحْفَظَة.",
    "مِقَصّ. هَذَا مِقَصّ.",
    "مِبْرَاة. هَذِهِ مِبْرَاة.",
    "مِقْلَمَة. هَذِهِ مِقْلَمَة."
  ].forEach((p) => ar.add(p));

  [
    "Le crayon. C'est un crayon.",
    "Le stylo. C'est un stylo.",
    "Le livre. C'est un livre.",
    "Le cahier. C'est un cahier.",
    "La gomme. C'est une gomme.",
    "La règle. C'est une règle.",
    "Le cartable. C'est un cartable.",
    "Les ciseaux. Ce sont des ciseaux.",
    "Le taille-crayon. C'est un taille-crayon.",
    "La trousse. C'est une trousse."
  ].forEach((p) => fr.add(p));

  // 8. Body Parts
  [
    "الرَّأْس. هَذَا هُوَ الرَّأْس.",
    "الشَّعْر. هَذَا هُوَ الشَّعْر.",
    "العَيْن. هَذِهِ هِيَ العَيْن.",
    "الأُذُن. هَذِهِ هِيَ الأُذُن.",
    "الأَنْف. هَذَا هُوَ الأَنْف.",
    "الفَم. هَذَا هُوَ الفَم.",
    "اليَد. هَذِهِ هِيَ اليَد.",
    "الذِّرَاع. هَذَا هُوَ الذِّرَاع.",
    "السَّاق. هَذِهِ هِيَ السَّاق.",
    "القَدَم. هَذِهِ هِيَ القَدَم."
  ].forEach((p) => ar.add(p));

  [
    "La tête. Voici la tête.",
    "Les cheveux. Voici les cheveux.",
    "L'œil. Voici l'œil.",
    "L'oreille. Voici l'oreille.",
    "Le nez. Voici le nez.",
    "La bouche. Voici la bouche.",
    "La main. Voici la main.",
    "Le bras. Voici le bras.",
    "La jambe. Voici la jambe.",
    "Le pied. Voici le pied."
  ].forEach((p) => fr.add(p));

  // 9. Daily Routine Activities
  [
    "أَسْتَيْقِظُ. أَسْتَيْقِظُ فِي الصَّبَاح.",
    "أَغْسِلُ وَجْهِي. أَغْسِلُ وَجْهِي بِالمَاء.",
    "أُنَظِّفُ أَسْنَانِي. أُنَظِّفُ أَسْنَانِي بِالفُرْشَاة.",
    "أَرْتَدِي مَلَابِسِي.",
    "أَتَنَاوَلُ الفَطُور. أَتَنَاوَلُ وَجْبَةَ الفَطُور.",
    "أَذْهَبُ إِلَى المَدْرَسَة.",
    "أَدْرُسُ. أَدْرُسُ فِي القِسْم.",
    "أَلْعَبُ. أَلْعَبُ مَعَ أَصْدِقَائِي.",
    "أُنْجِزُ وَاجِبَاتِي. أُنْجِزُ وَاجِبَاتِي المَدْرَسِيَّة.",
    "أَنَامُ. أَنَامُ فِي اللَّيْل."
  ].forEach((p) => ar.add(p));

  [
    "Se réveiller. Je me réveille le matin.",
    "Se laver le visage. Je me lave le visage.",
    "Se brosser les dents. Je me brosse les dents.",
    "S'habiller. Je m'habille.",
    "Prendre le petit-déjeuner. Je prends mon petit-déjeuner.",
    "Aller à l'école. Je vais à l'école.",
    "Étudier. J'étudie en classe.",
    "Jouer. Je joue avec mes amis.",
    "Faire ses devoirs. Je fais mes devoirs.",
    "Dormir. Je vais dormir la nuit."
  ].forEach((p) => fr.add(p));

  // 10. Common Classroom Orders
  [
    "قِفْ.",
    "اِجْلِسْ.",
    "اِرْفَعْ يَدَكَ.",
    "اِمْسَحْ.",
    "أَرِنِي. أَشِرْ.",
    "اِسْتَمِعْ.",
    "اُنْظُرْ.",
    "اِقْرَأْ.",
    "اُرْسُمْ.",
    "لَوِّنْ.",
    "اُكْتُبْ.",
    "أَعِدْ. قُلْ.",
    "ضَعْ عَلَامَةَ صَحّ.",
    "ضَعْ عَلَامَةَ خَطَأ.",
    "حَوِّطْ.",
    "اِرْبِطْ.",
    "أَعِدْ بَعْدِي مِنْ فَضْلِكَ.",
    "اُنْظُرْ إِلَى الصُّورَةِ مِنْ فَضْلِكَ.",
    "اِسْتَمِعْ إِلَى القُرْصِ مِنْ فَضْلِكَ.",
    "اِفْتَحْ كِتَابَكَ مِنْ فَضْلِكَ."
  ].forEach((p) => ar.add(p));

  [
    "Debout. Lève-toi.",
    "Assis. Assieds-toi.",
    "Lève ta main.",
    "Efface.",
    "Montre. Pointe.",
    "Écoute.",
    "Regarde.",
    "Lis.",
    "Dessine.",
    "Colorie.",
    "Écris.",
    "Répète. Dis.",
    "Coche.",
    "Mets une croix.",
    "Entoure.",
    "Relie.",
    "Répète après moi, s'il te plaît.",
    "Regarde l'image, s'il te plaît.",
    "Écoute le CD, s'il te plaît.",
    "Ouvre ton livre, s'il te plaît."
  ].forEach((p) => fr.add(p));

  return {
    ar: Array.from(ar),
    fr: Array.from(fr)
  };
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        rejectUnauthorized: false,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close(resolve);
        });
        fileStream.on("error", (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      }
    );
    req.on("error", reject);
  });
}

async function processLanguage(langCode, phrases) {
  const langDir = path.join(AUDIO_BASE_DIR, langCode);
  fs.mkdirSync(langDir, { recursive: true });

  const manifest = {};
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < phrases.length; i++) {
    const text = phrases[i].trim();
    const hash = hashText(text);
    const filename = `${hash}.mp3`;
    const filePath = path.join(langDir, filename);
    manifest[hash] = { text, file: `assets/audio/${langCode}/${filename}` };

    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 200) {
      skipped++;
      continue;
    }

    const encoded = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langCode}&client=tw-ob&q=${encoded}`;

    try {
      await downloadFile(url, filePath);
      downloaded++;
      process.stdout.write(`\r[${langCode}] Downloaded ${downloaded}, Skipped ${skipped} (${i + 1}/${phrases.length})`);
      // Small delay to avoid rate-limiting
      await new Promise((r) => setTimeout(r, 80));
    } catch (err) {
      failed++;
      console.error(`\n[${langCode}] Failed for "${text}": ${err.message}`);
    }
  }

  console.log(`\n[${langCode}] Done! Total: ${phrases.length} | Downloaded: ${downloaded} | Already existed: ${skipped} | Failed: ${failed}`);
  return manifest;
}

async function main() {
  console.log("Checking & downloading required audio files (if missing)...");
  const { ar, fr } = collectPhrases();

  const arManifest = await processLanguage("ar", ar);
  const frManifest = await processLanguage("fr", fr);

  const manifestPath = path.join(AUDIO_BASE_DIR, "manifest.json");
  fs.writeFileSync(
    manifestPath,
    JSON.stringify({ ar: arManifest, fr: frManifest }, null, 2),
    "utf8"
  );
  console.log(`Manifest saved to ${manifestPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
