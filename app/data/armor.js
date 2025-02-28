// data/armor.js
export const armorSets = [
  {
    id: "ajaraakan",
    name: "ajarakan Set",
    tier: "High Rank",
    pieces: [
      {
        id: "ajarakan_helm_alpha",
        name: "Ajarakan Helm Alpha",
        type: "head",
        rarity: 6,
        defense: 48,
        slots: [1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "resentment", level: 2 },
          { id: "bombardier", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "ajarakan_helm_beta",
        name: "Ajarakan Helm Beta",
        type: "head",
        rarity: 6,
        defense: 48,
        slots: [2, 1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "resentment", level: 1 },
          { id: "bombardier", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "ajarakan_mail_alpha",
        name: "Ajarakan Mail Alpha",
        type: "chest",
        rarity: 6,
        defense: 48,
        slots: [1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "resentment", level: 2 },
          { id: "bombardier", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "ajarakan_mail_beta",
        name: "Ajarakan Mail Beta",
        type: "chest",
        rarity: 6,
        defense: 48,
        slots: [2, 1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [{ id: "resentment", level: 2 }],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "ajarakan_vambraces_alpha",
        name: "Ajarakan Vambraces Alpha",
        type: "arms",
        rarity: 6,
        defense: 48,
        slots: [2],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "bombardier", level: 2 },
          { id: "partbreaker", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "ajarakan_vambraces_beta",
        name: "Ajarakan Vambraces Beta",
        type: "arms",
        rarity: 6,
        defense: 48,
        slots: [2, 1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "resentment", level: 1 },
          { id: "bombardier", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "ajarakan_coil_alpha",
        name: "Ajarakan Coil Alpha",
        type: "waist",
        rarity: 6,
        defense: 48,
        slots: [2],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "blast_resistance", level: 2 },
          { id: "partbreaker", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "ajarakan_coil_beta",
        name: "Ajarakan Coil Beta",
        type: "waist",
        rarity: 6,
        defense: 48,
        slots: [1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "blast_resistance", level: 2 },
          { id: "partbreaker", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "ajarakan_greaves_alpha",
        name: "Ajarakan Greaves Alpha",
        type: "legs",
        rarity: 6,
        defense: 48,
        slots: [1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [
          { id: "partbreaker", level: 2 },
          { id: "resentment", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "ajarakan_greves_beta",
        name: "Ajarakan Greaves Beta",
        type: "legs",
        rarity: 6,
        defense: 48,
        slots: [1, 1],
        resistances: {
          fire: 3,
          water: -3,
          thunder: 1,
          ice: -2,
          dragon: 0,
        },
        skills: [{ id: "partbreaker", level: 2 }],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
    ],
    setSkills: [{}],
    groupSkills: [{ id: "fortifying_pelt" }, { id: "alluring_pelt" }],
  },
  {
    id: "alloy",
    name: "Alloy Set",
    tier: "High Rank",
    pieces: [
      {
        id: "alloy_helm_alpha",
        name: "Alloy Helm Alpha",
        type: "head",
        rarity: 6,
        defense: 32,
        slots: [1],
        resistances: {
          fire: -2,
          water: 1,
          thunder: -2,
          ice: 2,
          dragon: 1,
        },
        skills: [{ id: "quick_sheathe", level: 1 }],
        setGroupSkills: [{}],
      },
      {
        id: "alloy_mail_alpha",
        name: "Alloy Mail Alpha",
        type: "chest",
        rarity: 6,
        defense: 32,
        slots: [1],
        resistances: {
          fire: -2,
          water: 1,
          thunder: -2,
          ice: 2,
          dragon: 1,
        },
        skills: [{ id: "flinch_free", level: 2 }],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "alloy_vambraces_alpha",
        name: "Alloy Vambraces Alpha",
        type: "arms",
        rarity: 6,
        defense: 32,
        slots: [2],
        resistances: {
          fire: -2,
          water: 1,
          thunder: -2,
          ice: 2,
          dragon: 1,
        },
        skills: [{ id: "tremor_resistance", level: 1 }],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "alloy_coil_alpha",
        name: "Alloy Coil Alpha",
        type: "waist",
        rarity: 6,
        defense: 32,
        slots: [2],
        resistances: {
          fire: -2,
          water: 1,
          thunder: -2,
          ice: 2,
          dragon: 1,
        },
        skills: [
          { id: "quick_sheathe", level: 1 },
          { id: "tremor_resistance", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "alloy_greaves_alpha",
        name: "Alloy Greaves Alpha",
        type: "legs",
        rarity: 6,
        defense: 32,
        slots: [1],
        resistances: {
          fire: -2,
          water: 1,
          thunder: -2,
          ice: 2,
          dragon: 1,
        },
        skills: [
          { id: "quick_sheathe", level: 1 },
          { id: "flinch_free", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
    ],
    setSkills: [{}],
    groupSkills: [{ id: "fortifying_pelt" }],
  },
  {
    id: "arkvulcan",
    name: "Arkvulcan Set",
    tier: "High Rank",
    pieces: [
      {
        id: "arkvulcan_helm_alpha",
        name: "Arkvulcan Helm Alpha",
        type: "head",
        rarity: 6,
        defense: 66,
        slots: [],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "elemental_absorption", level: 2 },
          { id: "convert_element", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "arkvulcan_helm_beta",
        name: "Arkvulcan Helm Beta",
        type: "head",
        rarity: 6,
        defense: 66,
        slots: [3, 2, 1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [{ id: "weakness_exploit", level: 1 }],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "arkvulcan_mail_alpha",
        name: "Arkvulcan Mail Alpha",
        type: "chest",
        rarity: 6,
        defense: 66,
        slots: [2],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "weakness_exploit", level: 1 },
          { id: "elemental_absorption", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "arkvulcan_mail_beta",
        name: "Arkvulcan Mail Beta",
        type: "chest",
        rarity: 6,
        defense: 66,
        slots: [3, 2],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [{ id: "weakness_exploit", level: 1 }],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "arkvulcan_vambraces_alpha",
        name: "Arkvulcan Vambraces Alpha",
        type: "arms",
        rarity: 6,
        defense: 66,
        slots: [2, 2],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "convert_element", level: 1 },
          { id: "recovery_speed", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "arkvulcan_vambraces_beta",
        name: "Arkvulcan Vambraces Beta",
        type: "arms",
        rarity: 6,
        defense: 66,
        slots: [2, 2, 1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [{ id: "convert_element", level: 1 }],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "arkvulcan_coil_alpha",
        name: "Arkvulcan Coil Alpha",
        type: "waist",
        rarity: 6,
        defense: 66,
        slots: [1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "weakness_exploit", level: 2 },
          { id: "recovery_speed", level: 1 },
        ],
        setGroupSkills: [{ id: "fortifying_pelt" }],
      },
      {
        id: "arkvulcan_coil_beta",
        name: "Arkvulcan Coil Beta",
        type: "waist",
        rarity: 6,
        defense: 66,
        slots: [1, 1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "weakness_exploit", level: 2 },
          { id: "recovery_speed", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "arkvulcan_greaves_alpha",
        name: "Arkvulcan Greaves Alpha",
        type: "legs",
        rarity: 6,
        defense: 66,
        slots: [2, 1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "quick_sheathe", level: 2 },
          { id: "convert_element", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
      {
        id: "arkvulcan_greaves_beta",
        name: "Arkvulcan Greaves Beta",
        type: "legs",
        rarity: 6,
        defense: 66,
        slots: [3, 1],
        resistances: {
          fire: 2,
          water: 0,
          thunder: -1,
          ice: 0,
          dragon: -3,
        },
        skills: [
          { id: "quick_sheathe", level: 1 },
          { id: "convert_element", level: 1 },
        ],
        setGroupSkills: [{ id: "alluring_pelt" }],
      },
    ],
    setSkills: [{ id: "arkvelds_hunger" }],
    groupSkills: [{ id: "alluring_pelt" }, { id: "fortifying_pelt" }],
  },
];

// Create a flattened array of all armor pieces for easier processing
export const allArmorPieces = armorSets.flatMap((set) =>
  set.pieces.map((piece) => ({
    ...piece,
    setId: set.id,
    setName: set.name,
    tier: set.tier,
  }))
);
