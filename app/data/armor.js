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
        setGroupSkills: [{ id: "alluring_pelt" }]
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
        setGroupSkills: [{ id: "fortifying_pelt" }]
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
        setGroupSkills: [{ id: "alluring_pelt" }]
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
        setGroupSkills: [{ id: "fortifying_pelt" }]
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
        setGroupSkills: [{ id: "alluring_pelt" }]
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
        setGroupSkills: [{ id: "fortifying_pelt" }]
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
        setGroupSkills: [{ id: "alluring_pelt" }]
      },
    ],
    setSkills: [{}],
    groupSkills: [{id: "fortifying_pelt"}, {id: "alluring_pelt"}],
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
