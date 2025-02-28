// data/armor.js
export const armorSets = [
    {
      id: 'xu_wu',
      name: 'Xu Wu Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'xu_wu_helm_beta',
          name: 'Xu Wu Helm Beta',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [2, 1],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1,
            ice: -3,
            dragon: 2
          },
          skills: [
            { id: 'adrenaline_rush', level: 2 }
          ]
        },
        {
          id: 'xu_wu_helm_alpha',
          name: 'Xu Wu Helm Alpha',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [1],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1,
            ice: -3,
            dragon: 2
          },
          skills: [
            { id: 'adrenaline_rush', level: 2 },
            { id: 'ambush', level: 1 }
          ]
        },
        {
          id: 'xu_wu_mail_beta',
          name: 'Xu Wu Mail Beta',
          type: 'chest',
          rarity: 6,
          defense: 48,
          slots: [1, 1],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1,
            ice: -3,
            dragon: 2
          },
          skills: [
            { id: 'heroics', level: 3 }
          ]
        },
        {
          id: 'xu_wu_mail_alpha',
          name: 'Xu Wu Mail Alpha',
          type: 'chest',
          rarity: 6,
          defense: 48,
          slots: [],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1,
            ice: -3,
            dragon: 2
          },
          skills: [
            { id: 'heroics', level: 3 },
            { id: 'ambush', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Xu Wu's Vigor", pieces: 2, description: "Temporarily grants attack +15 after eating items such as well-done steak" },
        { name: "Xu Wu's Vigor II", pieces: 4, description: "Temporarily grants attack +25 after eating items such as well-done steak" }
      ]
    },
    {
      id: 'vespoid',
      name: 'Vespoid Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'vespoid_helm_beta',
          name: 'Vespoid Helm Beta',
          type: 'head',
          rarity: 5,
          defense: 32,
          slots: [2],
          resistances: {
            fire: -2,
            water: 1,
            thunder: 1,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'survival_expert', level: 1 }
          ]
        },
        {
          id: 'vespoid_helm_alpha',
          name: 'Vespoid Helm Alpha',
          type: 'head',
          rarity: 5,
          defense: 32,
          slots: [0],
          resistances: {
            fire: -2,
            water: 1,
            thunder: 1,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'survival_expert', level: 1 },
            { id: 'ambush', level: 1 }
          ]
        },
        {
          id: 'vespoid_mail_beta',
          name: 'Vespoid Mail Beta',
          type: 'chest',
          rarity: 5,
          defense: 32,
          slots: [1, 1, 1],
          resistances: {
            fire: -2,
            water: 1,
            thunder: 1,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'survival_expert', level: 1 }
          ]
        },
        {
          id: 'vespoid_mail_alpha',
          name: 'Vespoid Mail Alpha',
          type: 'chest',
          rarity: 5,
          defense: 32,
          slots: [1],
          resistances: {
            fire: -2,
            water: 1,
            thunder: 1,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'evade_window', level: 1 },
            { id: 'survival_expert', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Neopteron Camouflage", pieces: 3, description: "Increases movement speed while crouching, and makes it easier to escape large monsters' detection" }
      ]
    },
    {
      id: 'udra',
      name: 'Udra Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'udra_mirehelm_beta',
          name: 'Udra Mirehelm Beta',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [2, 2],
          resistances: {
            fire: 5,
            water: -4,
            thunder: 0,
            ice: 1,
            dragon: 0
          },
          skills: [
            { id: 'resentment', level: 1 },
            { id: 'counterstrike', level: 1 }
          ]
        },
        {
          id: 'udra_mirehelm_alpha',
          name: 'Udra Mirehelm Alpha',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [1, 1],
          resistances: {
            fire: 5,
            water: -4,
            thunder: 0,
            ice: 1,
            dragon: 0
          },
          skills: [
            { id: 'resentment', level: 2 },
            { id: 'counterstrike', level: 1 }
          ]
        },
        {
          id: 'udra_miremail_beta',
          name: 'Udra Miremail Beta',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [3, 1, 1],
          resistances: {
            fire: 5,
            water: -4,
            thunder: 0,
            ice: 1,
            dragon: 0
          },
          skills: [
            { id: 'resentment', level: 1 }
          ]
        },
        {
          id: 'udra_miremail_alpha',
          name: 'Udra Miremail Alpha',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [1, 1],
          resistances: {
            fire: 5,
            water: -4,
            thunder: 0,
            ice: 1,
            dragon: 0
          },
          skills: [
            { id: 'resentment', level: 1 },
            { id: 'burst', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Nu Udra's Mutiny", pieces: 2, description: "Deals moderate additional damage while the Resentment skill is active" },
        { name: "Nu Udra's Mutiny II", pieces: 4, description: "Deals additional damage while the Resentment skill is active" }
      ]
    },
    {
      id: 'sild',
      name: 'Sild Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'sild_hood_alpha',
          name: 'Sild Hood Alpha',
          type: 'head',
          rarity: 6,
          defense: 44,
          slots: [2, 1, 1],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1, 
            ice: 1,
            dragon: 4
          },
          skills: [
            { id: 'botanist', level: 3 }
          ]
        },
        {
          id: 'sild_coat_alpha',
          name: 'Sild Coat Alpha',
          type: 'chest',
          rarity: 6,
          defense: 44,
          slots: [2],
          resistances: {
            fire: 1,
            water: 1,
            thunder: 1,
            ice: 1,
            dragon: 4
          },
          skills: [
            { id: 'wide_range', level: 4 }
          ]
        }
      ],
      setSkills: [
        { name: "Imparted Wisdom", pieces: 3, description: "Increases the chance of finding rare gathering points" }
      ]
    },
    {
      id: 'rompopolo',
      name: 'Rompopolo Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'rompopolo_helm_beta',
          name: 'Rompopolo Helm Beta',
          type: 'head',
          rarity: 5,
          defense: 36,
          slots: [2, 1],
          resistances: {
            fire: 0,
            water: -3,
            thunder: 0,
            ice: 0,
            dragon: 1
          },
          skills: [
            { id: 'wide_range', level: 1 }
          ]
        },
        {
          id: 'rompopolo_helm_alpha',
          name: 'Rompopolo Helm Alpha',
          type: 'head',
          rarity: 5,
          defense: 36,
          slots: [1, 1],
          resistances: {
            fire: 0,
            water: -3,
            thunder: 0,
            ice: 0,
            dragon: 1
          },
          skills: [
            { id: 'wide_range', level: 2 }
          ]
        },
        {
          id: 'rompopolo_mail_beta',
          name: 'Rompopolo Mail Beta',
          type: 'chest',
          rarity: 5,
          defense: 36,
          slots: [2],
          resistances: {
            fire: 0,
            water: -3,
            thunder: 0,
            ice: 0,
            dragon: 1
          },
          skills: [
            { id: 'poison_resistance', level: 2 }
          ]
        },
        {
          id: 'rompopolo_mail_alpha',
          name: 'Rompopolo Mail Alpha',
          type: 'chest',
          rarity: 5,
          defense: 36,
          slots: [1],
          resistances: {
            fire: 0,
            water: -3,
            thunder: 0,
            ice: 0,
            dragon: 1
          },
          skills: [
            { id: 'poison_resistance', level: 2 },
            { id: 'wide_range', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Flexible Leathercraft", pieces: 3, description: "Increases gathering speed, and prevents knock back when gathering or carving" }
      ]
    },
    {
      id: 'rey_dau',
      name: 'Rey Dau Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'rey_sandhelm_beta',
          name: 'Rey Sandhelm Beta',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [3],
          resistances: {
            fire: 0,
            water: -2,
            thunder: 4,
            ice: -3,
            dragon: 0
          },
          skills: [
            { id: 'latent_power', level: 1 },
            { id: 'evade_extender', level: 1 }
          ]
        },
        {
          id: 'rey_sandhelm_alpha',
          name: 'Rey Sandhelm Alpha',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [0],
          resistances: {
            fire: 0,
            water: -2,
            thunder: 4,
            ice: -3,
            dragon: 0
          },
          skills: [
            { id: 'maximum_might', level: 2 },
            { id: 'stamina_surge', level: 1 }
          ]
        },
        {
          id: 'rey_sandmail_beta',
          name: 'Rey Sandmail Beta',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [2, 1, 1],
          resistances: {
            fire: 0,
            water: -2,
            thunder: 4,
            ice: -3,
            dragon: 0
          },
          skills: [
            { id: 'maximum_might', level: 1 },
            { id: 'stamina_surge', level: 1 }
          ]
        },
        {
          id: 'rey_sandmail_alpha',
          name: 'Rey Sandmail Alpha',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [1, 1],
          resistances: {
            fire: 0,
            water: -2,
            thunder: 4,
            ice: -3,
            dragon: 0
          },
          skills: [
            { id: 'maximum_might', level: 2 },
            { id: 'stamina_surge', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Rey Dau's Voltage", pieces: 2, description: "Moderately extends the activation time of the Latent Power skill" },
        { name: "Rey Dau's Voltage II", pieces: 4, description: "Extends the activation time of the Latent Power skill" }
      ]
    },
    {
      id: 'rathian',
      name: 'Rathian Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'rathian_helm_beta',
          name: 'Rathian Helm Beta',
          type: 'head',
          rarity: 5,
          defense: 38,
          slots: [2, 1],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -2,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'divine_blessing', level: 1 }
          ]
        },
        {
          id: 'rathian_helm_alpha',
          name: 'Rathian Helm Alpha',
          type: 'head',
          rarity: 5,
          defense: 38,
          slots: [2],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -2,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'divine_blessing', level: 1 },
            { id: 'recovery_speed', level: 1 }
          ]
        },
        {
          id: 'rathian_mail_beta',
          name: 'Rathian Mail Beta',
          type: 'chest',
          rarity: 5,
          defense: 38,
          slots: [1, 1, 1],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -2,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'foray', level: 1 }
          ]
        },
        {
          id: 'rathian_mail_alpha',
          name: 'Rathian Mail Alpha',
          type: 'chest',
          rarity: 5,
          defense: 38,
          slots: [],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -2,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'foray', level: 2 }
          ]
        }
      ],
      setSkills: [
        { name: "Scaling Prowess", pieces: 3, description: "Makes it easier to mount monsters and to wound them once mounted" }
      ]
    },
    {
      id: 'rathalos',
      name: 'Rathalos Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'rathalos_helm_beta',
          name: 'Rathalos Helm Beta',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [2, 2],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -3
          },
          skills: [
            { id: 'constitution', level: 1 },
            { id: 'evade_window', level: 1 }
          ]
        },
        {
          id: 'rathalos_helm_alpha',
          name: 'Rathalos Helm Alpha',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [1, 1],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -3
          },
          skills: [
            { id: 'evade_window', level: 2 },
            { id: 'constitution', level: 1 }
          ]
        },
        {
          id: 'rathalos_mail_beta',
          name: 'Rathalos Mail Beta',
          type: 'chest',
          rarity: 6,
          defense: 48,
          slots: [1, 1],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -3
          },
          skills: [
            { id: 'adrenaline_rush', level: 2 }
          ]
        },
        {
          id: 'rathalos_mail_alpha',
          name: 'Rathalos Mail Alpha',
          type: 'chest',
          rarity: 6,
          defense: 48,
          slots: [1],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -3
          },
          skills: [
            { id: 'adrenaline_rush', level: 2 },
            { id: 'constitution', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Scale Layering", pieces: 3, description: "Temporarily reduces stamina depletion when health is at 40% or lower" }
      ]
    },
    {
      id: 'quematrice',
      name: 'Quematrice Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'quematrice_helm_beta',
          name: 'Quematrice Helm Beta',
          type: 'head',
          rarity: 5,
          defense: 36,
          slots: [2],
          resistances: {
            fire: 2,
            water: -3,
            thunder: 0,
            ice: -1,
            dragon: 0
          },
          skills: [
            { id: 'latent_power', level: 1 }
          ]
        },
        {
          id: 'quematrice_helm_alpha',
          name: 'Quematrice Helm Alpha',
          type: 'head',
          rarity: 5,
          defense: 36,
          slots: [1],
          resistances: {
            fire: 2,
            water: -3,
            thunder: 0,
            ice: -1,
            dragon: 0
          },
          skills: [
            { id: 'latent_power', level: 1 },
            { id: 'flinch_free', level: 1 }
          ]
        },
        {
          id: 'quematrice_mail_beta',
          name: 'Quematrice Mail Beta',
          type: 'chest',
          rarity: 5,
          defense: 36,
          slots: [1],
          resistances: {
            fire: 2,
            water: -3,
            thunder: 0,
            ice: -1,
            dragon: 0
          },
          skills: [
            { id: 'latent_power', level: 1 }
          ]
        },
        {
          id: 'quematrice_mail_alpha',
          name: 'Quematrice Mail Alpha',
          type: 'chest',
          rarity: 5,
          defense: 36,
          slots: [],
          resistances: {
            fire: 2,
            water: -3,
            thunder: 0,
            ice: -1,
            dragon: 0
          },
          skills: [
            { id: 'latent_power', level: 1 },
            { id: 'fire_resistance', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Scaling Prowess", pieces: 3, description: "Makes it easier to mount monsters and to wound them once mounted" }
      ]
    },
    {
      id: 'nerscylla',
      name: 'Nerscylla Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'nerscylla_helm_beta',
          name: 'Nerscylla Helm Beta',
          type: 'head',
          rarity: 5,
          defense: 38,
          slots: [2],
          resistances: {
            fire: -2,
            water: 2,
            thunder: -2,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'bind_resistance', level: 1 }
          ]
        },
        {
          id: 'nerscylla_helm_alpha',
          name: 'Nerscylla Helm Alpha',
          type: 'head',
          rarity: 5,
          defense: 38,
          slots: [0],
          resistances: {
            fire: -2,
            water: 2,
            thunder: -2,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'poison_resistance', level: 2 },
            { id: 'bind_resistance', level: 1 }
          ]
        },
        {
          id: 'nerscylla_mail_beta',
          name: 'Nerscylla Mail Beta',
          type: 'chest',
          rarity: 5,
          defense: 38,
          slots: [1, 1, 1],
          resistances: {
            fire: -2,
            water: 2,
            thunder: -2,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'ambush', level: 1 }
          ]
        },
        {
          id: 'nerscylla_mail_alpha',
          name: 'Nerscylla Mail Alpha',
          type: 'chest',
          rarity: 5,
          defense: 38,
          slots: [],
          resistances: {
            fire: -2,
            water: 2,
            thunder: -2,
            ice: 1,
            dragon: 2
          },
          skills: [
            { id: 'weakness_exploit', level: 1 },
            { id: 'ambush', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Neopteron Alert", pieces: 3, description: "Increases the amount of honey you gain from gathering points" }
      ]
    },
    {
      id: 'gore_magala',
      name: 'Gore Magala Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'gore_helm_beta',
          name: 'Gore Helm Beta',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [3, 1],
          resistances: {
            fire: -2,
            water: 3,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'evade_window', level: 1 },
            { id: 'coalescence', level: 1 }
          ]
        },
        {
          id: 'gore_helm_alpha',
          name: 'Gore Helm Alpha',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [2],
          resistances: {
            fire: -2,
            water: 3,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'evade_window', level: 2 },
            { id: 'coalescence', level: 1 }
          ]
        },
        {
          id: 'gore_mail_beta',
          name: 'Gore Mail Beta',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [3, 1],
          resistances: {
            fire: -2,
            water: 3,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'evade_window', level: 2 }
          ]
        },
        {
          id: 'gore_mail_alpha',
          name: 'Gore Mail Alpha',
          type: 'chest',
          rarity: 7,
          defense: 60,
          slots: [3],
          resistances: {
            fire: -2,
            water: 3,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'evade_window', level: 2 },
            { id: 'antivirus', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Gore Magala's Tyranny", pieces: 2, description: "Infects you with Frenzy when against large monsters" },
        { name: "Gore Magala's Tyranny II", pieces: 4, description: "Infects you with Frenzy and raises attack when against large monsters. Attack power increases upon recovery" }
      ]
    },
    {
      id: 'g_rathalos',
      name: 'Guardian Rathalos Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'g_rathalos_helm_beta',
          name: 'G Rathalos Helm Beta',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [2, 2],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -5
          },
          skills: [
            { id: 'weakness_exploit', level: 1 }
          ]
        },
        {
          id: 'g_rathalos_helm_alpha',
          name: 'G Rathalos Helm Alpha',
          type: 'head',
          rarity: 6,
          defense: 48,
          slots: [1, 1],
          resistances: {
            fire: 3,
            water: 1,
            thunder: -2,
            ice: 1,
            dragon: -5
          },
          skills: [
            { id: 'survival_expert', level: 2 },
            { id: 'weakness_exploit', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Guardian's Protection", pieces: 3, description: "Reduces elemental and unique damage while in the Ruins of Wyveria" }
      ]
    },
    {
      id: 'g_arkveld',
      name: 'Guardian Arkveld Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'g_arkveld_helm_beta',
          name: 'G Arkveld Helm Beta',
          type: 'head',
          rarity: 8,
          defense: 66,
          slots: [3, 1],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -1,
            ice: 0,
            dragon: -4
          },
          skills: [
            { id: 'flayer', level: 1 },
            { id: 'partbreaker', level: 1 }
          ]
        },
        {
          id: 'g_arkveld_helm_alpha',
          name: 'G Arkveld Helm Alpha',
          type: 'head',
          rarity: 8,
          defense: 66,
          slots: [1, 1],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -1,
            ice: 0,
            dragon: -4
          },
          skills: [
            { id: 'partbreaker', level: 2 },
            { id: 'flayer', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Guardian Arkveld's Vitality", pieces: 2, description: "Restores a moderate amount of health when destroying a wound on a large monster" },
        { name: "Guardian Arkveld's Vitality II", pieces: 4, description: "Restores health when destroying a wound on a large monster" }
      ]
    },
    {
      id: 'jin_dahaad',
      name: 'Jin Dahaad Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'dahaad_shardhelm_beta',
          name: 'Dahaad Shardhelm Beta',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [2, 2],
          resistances: {
            fire: -3,
            water: 2,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'agitator', level: 1 }
          ]
        },
        {
          id: 'dahaad_shardhelm_alpha',
          name: 'Dahaad Shardhelm Alpha',
          type: 'head',
          rarity: 7,
          defense: 60,
          slots: [1],
          resistances: {
            fire: -3,
            water: 2,
            thunder: -1,
            ice: 2,
            dragon: -1
          },
          skills: [
            { id: 'weakness_exploit', level: 1 },
            { id: 'agitator', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Jin Dahaad's Revolt", pieces: 2, description: "Increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash" },
        { name: "Jin Dahaad's Revolt II", pieces: 4, description: "Greatly increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash" }
      ]
    },
    {
      id: 'arkvulcan',
      name: 'Arkvulcan Set',
      tier: 'High Rank',
      pieces: [
        {
          id: 'arkvulcan_helm_beta',
          name: 'Arkvulcan Helm Beta',
          type: 'head',
          rarity: 8,
          defense: 66,
          slots: [3, 2, 1],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -1,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'convert_element', level: 1 }
          ]
        },
        {
          id: 'arkvulcan_helm_alpha',
          name: 'Arkvulcan Helm Alpha',
          type: 'head',
          rarity: 8,
          defense: 66,
          slots: [0],
          resistances: {
            fire: 2,
            water: 0,
            thunder: -1,
            ice: 0,
            dragon: -3
          },
          skills: [
            { id: 'elemental_absorption', level: 2 },
            { id: 'convert_element', level: 1 }
          ]
        }
      ],
      setSkills: [
        { name: "Arkveld's Hunger", pieces: 2, description: "Regenerates a small amount of your health as you continually attack a monster. Recovery varies by weapon" },
        { name: "Arkveld's Hunger II", pieces: 4, description: "Regenerates your health as you continually attack a monster. Recovery varies by weapon" }
      ]
    }
  ];
  
  // Create a flattened array of all armor pieces for easier processing
  export const allArmorPieces = armorSets.flatMap(set => 
    set.pieces.map(piece => ({
      ...piece,
      setId: set.id,
      setName: set.name,
      tier: set.tier
    }))
  );