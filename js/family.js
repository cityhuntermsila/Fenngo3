(() => {
  "use strict";

  // Kid-friendly cartoon SVG avatars for each member and relation
  const AVATARS = {
    grandfather: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#e0e7ff"/>
        <path d="M32 145 Q80 105 128 145 Z" fill="#4f46e5" stroke="#fff" stroke-width="4"/>
        <!-- White hair sides -->
        <circle cx="42" cy="68" r="14" fill="#f1f5f9"/>
        <circle cx="118" cy="68" r="14" fill="#f1f5f9"/>
        <circle cx="80" cy="74" r="40" fill="#fbd3b6" stroke="#fff" stroke-width="3"/>
        <!-- Top white hair -->
        <path d="M44 54 Q80 30 116 54 Q96 42 80 44 Q64 42 44 54 Z" fill="#f8fafc"/>
        <!-- Glasses -->
        <circle cx="65" cy="72" r="11" fill="none" stroke="#334155" stroke-width="3.5"/>
        <circle cx="95" cy="72" r="11" fill="none" stroke="#334155" stroke-width="3.5"/>
        <line x1="76" y1="72" x2="84" y2="72" stroke="#334155" stroke-width="3.5"/>
        <circle cx="65" cy="72" r="4" fill="#1e293b"/>
        <circle cx="95" cy="72" r="4" fill="#1e293b"/>
        <!-- Mustache & smile -->
        <path d="M58 90 Q80 82 102 90 Q90 98 80 92 Q70 98 58 90 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M68 96 Q80 105 92 96" fill="none" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    grandmother: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#fce7f3"/>
        <!-- Bun -->
        <circle cx="80" cy="28" r="20" fill="#e2e8f0" stroke="#fff" stroke-width="3"/>
        <path d="M32 145 Q80 105 128 145 Z" fill="#db2777" stroke="#fff" stroke-width="4"/>
        <!-- Pearl necklace -->
        <circle cx="66" cy="118" r="4" fill="#fff"/>
        <circle cx="75" cy="121" r="4" fill="#fff"/>
        <circle cx="85" cy="121" r="4" fill="#fff"/>
        <circle cx="94" cy="118" r="4" fill="#fff"/>
        <circle cx="80" cy="76" r="39" fill="#fde2cc" stroke="#fff" stroke-width="3"/>
        <!-- Silver hair -->
        <path d="M40 68 Q50 32 80 35 Q110 32 120 68 Q100 50 80 54 Q60 50 40 68 Z" fill="#e2e8f0"/>
        <!-- Glasses -->
        <circle cx="65" cy="74" r="10.5" fill="none" stroke="#9333ea" stroke-width="3"/>
        <circle cx="95" cy="74" r="10.5" fill="none" stroke="#9333ea" stroke-width="3"/>
        <line x1="75.5" y1="74" x2="84.5" y2="74" stroke="#9333ea" stroke-width="3"/>
        <circle cx="65" cy="74" r="4" fill="#1e293b"/>
        <circle cx="95" cy="74" r="4" fill="#1e293b"/>
        <path d="M67 92 Q80 102 93 92" fill="none" stroke="#be123c" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="54" cy="85" r="5" fill="#f43f5e" opacity="0.35"/>
        <circle cx="106" cy="85" r="5" fill="#f43f5e" opacity="0.35"/>
      </svg>`,
    father: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#dbeafe"/>
        <path d="M30 145 Q80 102 130 145 Z" fill="#2563eb" stroke="#fff" stroke-width="4"/>
        <!-- Tie -->
        <polygon points="80,112 74,136 80,144 86,136" fill="#ef4444"/>
        <circle cx="80" cy="74" r="40" fill="#fcd3b6" stroke="#fff" stroke-width="3"/>
        <!-- Brown hair -->
        <path d="M40 64 Q44 26 80 28 Q116 26 120 64 Q100 44 80 48 Q60 44 40 64 Z" fill="#451a03"/>
        <circle cx="65" cy="72" r="5" fill="#1e293b"/>
        <circle cx="95" cy="72" r="5" fill="#1e293b"/>
        <circle cx="66.5" cy="70.5" r="1.8" fill="#fff"/>
        <circle cx="96.5" cy="70.5" r="1.8" fill="#fff"/>
        <path d="M66 89 Q80 101 94 89" fill="none" stroke="#9a3412" stroke-width="3.8" stroke-linecap="round"/>
      </svg>`,
    mother: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#ffe4e6"/>
        <!-- Long hair back -->
        <ellipse cx="80" cy="84" rx="48" ry="50" fill="#7c2d12" stroke="#fff" stroke-width="3"/>
        <path d="M32 145 Q80 104 128 145 Z" fill="#e11d48" stroke="#fff" stroke-width="4"/>
        <circle cx="80" cy="74" r="38" fill="#fde2cc" stroke="#fff" stroke-width="3"/>
        <!-- Hair bangs -->
        <path d="M42 64 Q52 28 80 30 Q108 28 118 64 Q98 46 80 51 Q62 46 42 64 Z" fill="#7c2d12"/>
        <circle cx="66" cy="73" r="5" fill="#1e293b"/>
        <circle cx="94" cy="73" r="5" fill="#1e293b"/>
        <circle cx="67.5" cy="71.5" r="1.8" fill="#fff"/>
        <circle cx="95.5" cy="71.5" r="1.8" fill="#fff"/>
        <path d="M67 89 Q80 100 93 89" fill="none" stroke="#be123c" stroke-width="3.6" stroke-linecap="round"/>
        <circle cx="55" cy="83" r="5.5" fill="#f43f5e" opacity="0.4"/>
        <circle cx="105" cy="83" r="5.5" fill="#f43f5e" opacity="0.4"/>
      </svg>`,
    son: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#dcfce7"/>
        <path d="M36 145 Q80 108 124 145 Z" fill="#16a34a" stroke="#fff" stroke-width="4"/>
        <circle cx="80" cy="78" r="35" fill="#fcd3b6" stroke="#fff" stroke-width="3"/>
        <!-- Cap / Hair -->
        <path d="M44 66 Q52 34 80 36 Q108 34 116 66 Q96 52 80 54 Q64 52 44 66 Z" fill="#78350f"/>
        <circle cx="67" cy="77" r="4.8" fill="#1e293b"/>
        <circle cx="93" cy="77" r="4.8" fill="#1e293b"/>
        <circle cx="68.5" cy="75.5" r="1.6" fill="#fff"/>
        <circle cx="94.5" cy="75.5" r="1.6" fill="#fff"/>
        <path d="M68 91 Q80 102 92 91" fill="none" stroke="#9a3412" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="57" cy="85" r="5" fill="#f43f5e" opacity="0.35"/>
        <circle cx="103" cy="85" r="5" fill="#f43f5e" opacity="0.35"/>
      </svg>`,
    daughter: `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="72" fill="#fef9c3"/>
        <!-- Pigtails -->
        <circle cx="40" cy="62" r="14" fill="#9a3412" stroke="#fff" stroke-width="3"/>
        <circle cx="120" cy="62" r="14" fill="#9a3412" stroke="#fff" stroke-width="3"/>
        <circle cx="48" cy="62" r="5" fill="#ec4899"/>
        <circle cx="112" cy="62" r="5" fill="#ec4899"/>
        <path d="M36 145 Q80 108 124 145 Z" fill="#eab308" stroke="#fff" stroke-width="4"/>
        <circle cx="80" cy="78" r="34" fill="#fde2cc" stroke="#fff" stroke-width="3"/>
        <path d="M46 68 Q56 38 80 40 Q104 38 114 68 Q96 54 80 56 Q64 54 46 68 Z" fill="#9a3412"/>
        <circle cx="67" cy="77" r="4.8" fill="#1e293b"/>
        <circle cx="93" cy="77" r="4.8" fill="#1e293b"/>
        <circle cx="68.5" cy="75.5" r="1.6" fill="#fff"/>
        <circle cx="94.5" cy="75.5" r="1.6" fill="#fff"/>
        <path d="M68 91 Q80 101 92 91" fill="none" stroke="#be123c" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="57" cy="85" r="5" fill="#f43f5e" opacity="0.4"/>
        <circle cx="103" cy="85" r="5" fill="#f43f5e" opacity="0.4"/>
      </svg>`,
    myMother: `
      <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="164" height="144" rx="36" fill="#fce7f3"/>
        <!-- Heart above -->
        <path d="M90 26 C86 18, 74 19, 74 28 C74 36, 90 43, 90 48 C90 43, 106 36, 106 28 C106 19, 94 18, 90 26 Z" fill="#e11d48"/>
        <!-- Mother (Left) -->
        <g transform="translate(22, 34)">
          <ellipse cx="40" cy="54" rx="32" ry="34" fill="#7c2d12"/>
          <path d="M10 112 Q40 78 70 112 Z" fill="#e11d48" stroke="#fff" stroke-width="3"/>
          <circle cx="40" cy="48" r="26" fill="#fde2cc" stroke="#fff" stroke-width="2.5"/>
          <path d="M14 42 Q22 18 40 20 Q58 18 66 42 Q52 30 40 33 Q28 30 14 42 Z" fill="#7c2d12"/>
          <circle cx="31" cy="48" r="3.5" fill="#1e293b"/>
          <circle cx="49" cy="48" r="3.5" fill="#1e293b"/>
          <path d="M31 59 Q40 67 49 59" fill="none" stroke="#be123c" stroke-width="2.8" stroke-linecap="round"/>
        </g>
        <!-- Child (Right) -->
        <g transform="translate(92, 54)">
          <path d="M10 92 Q34 64 58 92 Z" fill="#f59e0b" stroke="#fff" stroke-width="3"/>
          <circle cx="34" cy="40" r="21" fill="#fcd3b6" stroke="#fff" stroke-width="2.5"/>
          <path d="M13 35 Q20 15 34 17 Q48 15 55 35 Q42 26 34 28 Q26 26 13 35 Z" fill="#78350f"/>
          <circle cx="27" cy="40" r="3" fill="#1e293b"/>
          <circle cx="41" cy="40" r="3" fill="#1e293b"/>
          <path d="M27 49 Q34 55 41 49" fill="none" stroke="#9a3412" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </svg>`,
    myFather: `
      <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="164" height="144" rx="36" fill="#dbeafe"/>
        <path d="M90 26 C86 18, 74 19, 74 28 C74 36, 90 43, 90 48 C90 43, 106 36, 106 28 C106 19, 94 18, 90 26 Z" fill="#2563eb"/>
        <!-- Father (Left) -->
        <g transform="translate(22, 34)">
          <path d="M10 112 Q40 78 70 112 Z" fill="#2563eb" stroke="#fff" stroke-width="3"/>
          <circle cx="40" cy="48" r="27" fill="#fcd3b6" stroke="#fff" stroke-width="2.5"/>
          <path d="M13 42 Q20 16 40 18 Q60 16 67 42 Q52 29 40 32 Q28 29 13 42 Z" fill="#451a03"/>
          <circle cx="31" cy="48" r="3.5" fill="#1e293b"/>
          <circle cx="49" cy="48" r="3.5" fill="#1e293b"/>
          <path d="M31 59 Q40 67 49 59" fill="none" stroke="#9a3412" stroke-width="2.8" stroke-linecap="round"/>
        </g>
        <!-- Child (Right) -->
        <g transform="translate(92, 54)">
          <path d="M10 92 Q34 64 58 92 Z" fill="#10b981" stroke="#fff" stroke-width="3"/>
          <circle cx="34" cy="40" r="21" fill="#fcd3b6" stroke="#fff" stroke-width="2.5"/>
          <path d="M13 35 Q20 15 34 17 Q48 15 55 35 Q42 26 34 28 Q26 26 13 35 Z" fill="#78350f"/>
          <circle cx="27" cy="40" r="3" fill="#1e293b"/>
          <circle cx="41" cy="40" r="3" fill="#1e293b"/>
          <path d="M27 49 Q34 55 41 49" fill="none" stroke="#9a3412" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </svg>`,
    myBrother: `
      <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="164" height="144" rx="36" fill="#d1fae5"/>
        <path d="M90 26 C86 18, 74 19, 74 28 C74 36, 90 43, 90 48 C90 43, 106 36, 106 28 C106 19, 94 18, 90 26 Z" fill="#059669"/>
        <!-- Brother (Left) -->
        <g transform="translate(24, 42)">
          <path d="M10 104 Q38 72 66 104 Z" fill="#059669" stroke="#fff" stroke-width="3"/>
          <circle cx="38" cy="44" r="24" fill="#fcd3b6" stroke="#fff" stroke-width="2.5"/>
          <path d="M14 38 Q22 16 38 18 Q54 16 62 38 Q48 28 38 30 Q28 28 14 38 Z" fill="#451a03"/>
          <circle cx="30" cy="44" r="3.4" fill="#1e293b"/>
          <circle cx="46" cy="44" r="3.4" fill="#1e293b"/>
          <path d="M30 54 Q38 62 46 54" fill="none" stroke="#9a3412" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <!-- Sibling (Right) -->
        <g transform="translate(92, 48)">
          <path d="M10 98 Q34 68 58 98 Z" fill="#3b82f6" stroke="#fff" stroke-width="3"/>
          <circle cx="34" cy="42" r="22" fill="#fde2cc" stroke="#fff" stroke-width="2.5"/>
          <path d="M13 36 Q20 16 34 18 Q48 16 55 36 Q42 27 34 29 Q26 27 13 36 Z" fill="#78350f"/>
          <circle cx="27" cy="42" r="3.2" fill="#1e293b"/>
          <circle cx="41" cy="42" r="3.2" fill="#1e293b"/>
          <path d="M27 51 Q34 58 41 51" fill="none" stroke="#9a3412" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </svg>`,
    mySister: `
      <svg viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="164" height="144" rx="36" fill="#fef3c7"/>
        <path d="M90 26 C86 18, 74 19, 74 28 C74 36, 90 43, 90 48 C90 43, 106 36, 106 28 C106 19, 94 18, 90 26 Z" fill="#d97706"/>
        <!-- Sister (Left) -->
        <g transform="translate(22, 42)">
          <circle cx="14" cy="34" r="9" fill="#9a3412" stroke="#fff" stroke-width="2"/>
          <circle cx="62" cy="34" r="9" fill="#9a3412" stroke="#fff" stroke-width="2"/>
          <path d="M10 104 Q38 72 66 104 Z" fill="#ec4899" stroke="#fff" stroke-width="3"/>
          <circle cx="38" cy="44" r="24" fill="#fde2cc" stroke="#fff" stroke-width="2.5"/>
          <path d="M15 38 Q22 17 38 19 Q54 17 61 38 Q48 28 38 30 Q28 28 15 38 Z" fill="#9a3412"/>
          <circle cx="30" cy="44" r="3.4" fill="#1e293b"/>
          <circle cx="46" cy="44" r="3.4" fill="#1e293b"/>
          <path d="M30 54 Q38 62 46 54" fill="none" stroke="#be123c" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <!-- Sibling (Right) -->
        <g transform="translate(92, 48)">
          <path d="M10 98 Q34 68 58 98 Z" fill="#8b5cf6" stroke="#fff" stroke-width="3"/>
          <circle cx="34" cy="42" r="22" fill="#fcd3b6" stroke="#fff" stroke-width="2.5"/>
          <path d="M13 36 Q20 16 34 18 Q48 16 55 36 Q42 27 34 29 Q26 27 13 36 Z" fill="#78350f"/>
          <circle cx="27" cy="42" r="3.2" fill="#1e293b"/>
          <circle cx="41" cy="42" r="3.2" fill="#1e293b"/>
          <path d="M27 51 Q34 58 41 51" fill="none" stroke="#9a3412" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      </svg>`
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
