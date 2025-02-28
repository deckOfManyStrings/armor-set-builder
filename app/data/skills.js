export const skills = [
  {
    id: "attack_boost",
    name: "Attack Boost",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Increases attack",
    effects: [
      { level: 1, effect: "Attack +5" },
      { level: 2, effect: "Attack +10" },
      { level: 3, effect: "Attack +15" },
      { level: 4, effect: "Attack +20" },
      { level: 5, effect: "Attack +25" },
    ],
  },
  {
    id: "resentment",
    name: "Resentment",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Increases attack when you have recoverable damage (the red portion of your Health Gauge).",
    effects: [
      { level: 1, effect: "Attack +5 while active." },
      { level: 2, effect: "Attack +10 while active." },
      { level: 3, effect: "Attack +15 while active." },
      { level: 4, effect: "Attack +20 while active." },
      { level: 5, effect: "Attack +25 while active." },
    ],
  },
  {
    id: "adrenaline_rush",
    name: "Adrenaline Rush",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Temporarily increases attack power after executing a perfectly-timed evade just as a monster attacks.",
    effects: [
      { level: 1, effect: "Attack +10 while active." },
      { level: 2, effect: "Attack +15 while active." },
      { level: 3, effect: "Attack +20 while active." },
      { level: 4, effect: "Attack +25 while active." },
      { level: 5, effect: "Attack +30 while active." },
    ],
  },
  {
    id: "offensive_guard",
    name: "Offensive Guard",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Temporarily increases attack power after executing a perfectly-timed guard.",
    effects: [
      { level: 1, effect: "Attack +5% while active." },
      { level: 2, effect: "Attack +10% while active." },
      { level: 3, effect: "Attack +15% while active." },
    ],
  },
  {
    id: "peak_performance",
    name: "Peak Performance",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Increases attack when your health is full.",
    effects: [
      { level: 1, effect: "Attack +3 while active." },
      { level: 2, effect: "Attack +6 while active." },
      { level: 3, effect: "Attack +10 while active." },
      { level: 4, effect: "Attack +15 while active." },
      { level: 5, effect: "Attack +20 while active." },
    ],
  },
  {
    id: "counterstrike",
    name: "Counterstrike",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Temporarily increases attack power after being knocked back.",
    effects: [
      { level: 1, effect: "Attack +10 while active." },
      {
        level: 2,
        effect: "Attack +15 while active. Moderately extends effect time.",
      },
      { level: 3, effect: "Attack +25 while active. Extends effect time." },
    ],
  },
  {
    id: "critical_boost",
    name: "Critical Boost",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Increases the damage of critical hits.",
    effects: [
      { level: 1, effect: "Increases damage dealt by critical hits to 28%." },
      { level: 2, effect: "Increases damage dealt by critical hits to 31%." },
      { level: 3, effect: "Increases damage dealt by critical hits to 34%." },
      { level: 4, effect: "Increases damage dealt by critical hits to 37%." },
      { level: 5, effect: "Increases damage dealt by critical hits to 40%." },
    ],
  },
  {
    id: "critical_eye",
    name: "Critical Eye",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Increases affinity.",
    effects: [
      { level: 1, effect: "Affinity +4%" },
      { level: 2, effect: "Affinity +8%" },
      { level: 3, effect: "Affinity +12%" },
      { level: 4, effect: "Affinity +16%" },
      { level: 5, effect: "Affinity +20%" },
    ],
  },
  {
    id: "critical_draw",
    name: "Critical Draw",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases affinity when performing draw attacks. (Not effective while riding.)",
    effects: [
      { level: 1, effect: "Affinity +50%" },
      { level: 2, effect: "Affinity +75%" },
      { level: 3, effect: "Affinity +100%" },
    ],
  },
  {
    id: "weakness_exploit",
    name: "Weakness Exploit",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Increases the affinity of attacks that exploit a monster's weak points and wounds.",
    effects: [
      {
        level: 1,
        effect:
          "Attacks that hit weak points gain affinity +5%, with an extra 3% on wounds.",
      },
      {
        level: 2,
        effect:
          "Attacks that hit weak points gain affinity +10%, with an extra 5% on wounds.",
      },
      {
        level: 3,
        effect:
          "Attacks that hit weak points gain affinity +15%, with an extra 10% on wounds.",
      },
      {
        level: 4,
        effect:
          "Attacks that hit weak points have 20% increased affinity, with an extra 15% on wounds.",
      },
      {
        level: 5,
        effect:
          "Attacks that hit weak points have 30% increased affinity, with an extra 20% on wounds.",
      },
    ],
  },
  {
    id: "maximum_might",
    name: "Maximum Might",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases affinity if stamina is kept full for a period of time.",
    effects: [
      { level: 1, effect: "Affinity +10% while active" },
      { level: 2, effect: "Affinity +20% while active" },
      { level: 3, effect: "Affinity +30% while active" },
    ],
  },
  {
    id: "fire_attack",
    name: "Fire Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases fire element attack power. (Elemental attack power has a maximum limit.)",
    effects: [
      { level: 1, effect: "Fire attack +40" },
      { level: 2, effect: "Fire attack +10% Bonus: +50" },
      { level: 3, effect: "Fire attack +20% Bonus: +60" },
    ],
  },
  {
    id: "water_attack",
    name: "Water Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases water element attack power. (Elemental attack power has a maximum limit.)",
    effects: [
      { level: 1, effect: "Water attack +40" },
      { level: 2, effect: "Water attack +10% Bonus: +50" },
      { level: 3, effect: "Water attack +20% Bonus: +60" },
    ],
  },
  {
    id: "thunder_attack",
    name: "Thunder Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases thunder element attack power. (Elemental attack power has a maximum limit.)",
    effects: [
      { level: 1, effect: "Thunder attack +40" },
      { level: 2, effect: "Thunder attack +10% Bonus: +50" },
      { level: 3, effect: "Thunder attack +20% Bonus: +60" },
    ],
  },
  {
    id: "ice_attack",
    name: "Ice Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases ice element attack power. (Elemental attack power has a maximum limit.)",
    effects: [
      { level: 1, effect: "Ice attack +40" },
      { level: 2, effect: "Ice attack +10% Bonus: +50" },
      { level: 3, effect: "Ice attack +20% Bonus: +60" },
    ],
  },
  {
    id: "dragon_attack",
    name: "Dragon Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases dragon element attack power. (Elemental attack power has a maximum limit.)",
    effects: [
      { level: 1, effect: "Dragon attack +40" },
      { level: 2, effect: "Dragon attack +10% Bonus: +50" },
      { level: 3, effect: "Dragon attack +20% Bonus: +60" },
    ],
  },
  {
    id: "poison_attack",
    name: "Poison Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the rate of poison buildup. (Poison buildup has a maximum limit.)",
    effects: [
      { level: 1, effect: "Poison buildup +5% Bonus: +10" },
      { level: 2, effect: "Poison buildup +10% Bonus: +20" },
      { level: 3, effect: "Poison buildup +20% Bonus: +50" },
    ],
  },
  {
    id: "paralysis_attack",
    name: "Paralysis Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the rate of paralysis buildup. (Paralysis buildup has a maximum limit.)",
    effects: [
      { level: 1, effect: "Paralysis buildup +5% Bonus: +10" },
      { level: 2, effect: "Paralysis buildup +10% Bonus: +20" },
      { level: 3, effect: "Paralysis buildup +20% Bonus: +50" },
    ],
  },
  {
    id: "sleep_attack",
    name: "Sleep Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the rate of sleep buildup. (Sleep buildup has a maximum limit.)",
    effects: [
      { level: 1, effect: "Sleep buildup +5% Bonus: +10" },
      { level: 2, effect: "Sleep buildup +10% Bonus: +20" },
      { level: 3, effect: "Sleep buildup +20% Bonus: +50" },
    ],
  },
  {
    id: "blast_attack",
    name: "Blast Attack",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the rate of blast buildup. (Blast buildup has a maximum limit.)",
    effects: [
      { level: 1, effect: "Blast buildup +5% Bonus: +10" },
      { level: 2, effect: "Blast buildup +10% Bonus: +20" },
      { level: 3, effect: "Blast buildup +20% Bonus: +50" },
    ],
  },
  {
    id: "critical_element",
    name: "Critical Element",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.",
    effects: [
      { level: 1, effect: "Slightly increases elemental damage while active." },
      { level: 2, effect: "Increases elemental damage while active." },
      { level: 3, effect: "Greatly increases elemental damage while active." },
    ],
  },
  {
    id: "critical_status",
    name: "Critical Status",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases abnormal status effects (paralysis, poison, sleep, blast) when landing critical hits.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly increases abnormal status effects when landing critical hits.",
      },
      {
        level: 2,
        effect: "Increases abnormal status effects when landing critical hits.",
      },
      {
        level: 3,
        effect:
          "Greatly increases abnormal status effects when landing critical hits.",
      },
    ],
  },
  {
    id: "charge_master",
    name: "Charge Master",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases element power and status buildup for charged attacks.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly increases elemental damage and status buildup for charged attacks.",
      },
      {
        level: 2,
        effect:
          "Increases elemental damage and status buildup for charged attacks.",
      },
      {
        level: 3,
        effect:
          "Greatly increases elemental damage and status buildup for charged attacks.",
      },
    ],
  },
  {
    id: "convert_element",
    name: "Convert Element",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "After taking elemental damage, temporarily grants you dragon element effects. (Cooldown after effect ends.)",
    effects: [
      {
        level: 1,
        effect:
          "While active, deals extra dragon damage after dealing enough elemental damage. Slightly increases dragon attack.",
      },
      {
        level: 2,
        effect:
          "Increases additional dragon damage and increases dragon attack.",
      },
      {
        level: 3,
        effect:
          "Further increases additional dragon damage and greatly increases dragon attack",
      },
    ],
  },
  {
    id: "handicraft",
    name: "Handicraft",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Extends the weapon sharpness gauge. However, it will not increase the gauge past its maximum.",
    effects: [
      { level: 1, effect: "Weapon sharpness +10" },
      { level: 2, effect: "Weapon sharpness +20" },
      { level: 3, effect: "Weapon sharpness +30" },
      { level: 4, effect: "Weapon sharpness +40" },
      { level: 5, effect: "Weapon sharpness +50" },
    ],
  },
  {
    id: "razor_sharp",
    name: "Razor Sharp",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Prevents your weapon from losing sharpness.",
    effects: [
      { level: 1, effect: "Grants a 10% chance of no sharpness loss." },
      { level: 2, effect: "Grants a 25% chance of no sharpness loss." },
      { level: 3, effect: "Grants a 50% chance of no sharpness loss." },
    ],
  },
  {
    id: "protective_polish",
    name: "Protective Polish",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Weapon sharpness does not decrease for a set time after sharpening.",
    effects: [
      {
        level: 1,
        effect: "Grants no sharpness loss for 30 seconds after activation.",
      },
      {
        level: 2,
        effect: "Grants no sharpness loss for 60 seconds after activation.",
      },
      {
        level: 3,
        effect: "Grants no sharpness loss for 90 seconds after activation.",
      },
    ],
  },
  {
    id: "minds_eye",
    name: "Mind's Eye",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Your attacks are deflected less and deal more damage to hard targets.",
    effects: [
      {
        level: 1,
        effect:
          "50% chance of your attacks not being deflected, +10% damage to hard targets.",
      },
      {
        level: 2,
        effect:
          "100% chance of your attacks not being deflected, +15% damage to hard targets.",
      },
      {
        level: 3,
        effect:
          "100% chance of your attacks not being deflected, +30% damage to hard targets.",
      },
    ],
  },
  {
    id: "masters_touch",
    name: "Master's Touch",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Prevents your weapon from losing sharpness during critical hits.",
    effects: [
      {
        level: 1,
        effect: "Grants an 80% chance of no sharpness loss while active.",
      },
    ],
  },
  {
    id: "bludgeoner",
    name: "Bludgeoner",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases attack power when your weapon sharpness is low.",
    effects: [
      {
        level: 1,
        effect: "5% attack power when your sharpness gauge is yellow or lower.",
      },
      {
        level: 2,
        effect:
          "10% attack power when your sharpness gauge is yellow or lower.",
      },
      {
        level: 3,
        effect: "10% attack power when your sharpness gauge is green or lower.",
      },
    ],
  },
  {
    id: "normal_shots",
    name: "Normal Shots",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases the attack power of Normal Ammo, normal arrows, and Flying Swallow Shot.",
    effects: [
      {
        level: 1,
        effect: "Slightly increases the power of specified ammo and arrows.",
      },
    ],
  },
  {
    id: "piercing_shots",
    name: "Piercing Shots",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases the attack of the bowgun's Pierce Ammo, and the bow's Dragon Piercer and Thousand Dragons.",
    effects: [
      {
        level: 1,
        effect: "Slightly increases the power of specified ammo and arrows.",
      },
    ],
  },
  {
    id: "spread_power_shots",
    name: "Spread-Power Shots",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases the attack of the bowgun's Spread Ammo and the bow's Power Shots and Quick Shots.",
    effects: [
      {
        level: 1,
        effect: "Slightly increases the power of specified ammo and arrows.",
      },
    ],
  },
  {
    id: "ballistics",
    name: "Ballistics",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Extends the range in which ammo and arrows have maximum power.",
    effects: [
      { level: 1, effect: "Slightly extends range." },
      { level: 2, effect: "Extends range." },
      { level: 3, effect: "Greatly extends range." },
    ],
  },
  {
    id: "rapid_fire_up",
    name: "Rapid Fire Up",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Improves light bowgun rapid fire.",
    effects: [{ level: 1, effect: "Rapid fire damage +5%" }],
  },
  {
    id: "special_ammo_boost",
    name: "Special Ammo Boost",
    type: "Equipment Skill",
    maxLevel: 2,
    description:
      "Increases the power of the bowgun's special ammo, and the bow's Dragon Piercer, Thousand Dragons, and Tracer.",
    effects: [
      {
        level: 1,
        effect: "Moderately increases the power of specified ammo and arrows.",
      },
      { level: 2, effect: "Increases the power of specified ammo and arrows." },
    ],
  },
  {
    id: "poison_functionality",
    name: "Poison Functionality",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Allows you to apply poison coatings.",
    effects: [{ level: 1, effect: "Lets you use poison coatings." }],
  },
  {
    id: "para_functionality",
    name: "Para Functionality",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Allows you to apply paralysis coatings.",
    effects: [{ level: 1, effect: "Lets you use paralysis coatings." }],
  },
  {
    id: "sleep_functionality",
    name: "Sleep Functionality",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Allows you to apply sleep coatings.",
    effects: [{ level: 1, effect: "Lets you use sleep coatings." }],
  },
  {
    id: "blast_functionality",
    name: "Blast Functionality",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Allows you to apply blast coatings.",
    effects: [{ level: 1, effect: "Lets you use blast coatings." }],
  },
  {
    id: "opening_shot",
    name: "Opening Shot",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the bowgun's reload speed and increases the power of bullets when fully loaded.",
    effects: [
      {
        level: 1,
        effect:
          "Moderately increases bowgun reload speed and attack power of ammo when certain conditions are met.",
      },
      {
        level: 2,
        effect:
          "Increases bowgun reload speed and attack power of ammo when certain conditions are met.",
      },
      {
        level: 3,
        effect:
          "Greatly increases bowgun reload speed and attack power of ammo when certain conditions are met.",
      },
    ],
  },
  {
    id: "tetrad_shot",
    name: "Tetrad Shot",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases affinity of bowgun ammo/ coatings from the fourth shot and attack of the fourth and sixth shots.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly increases the attack power and affinity of ammo after certain conditions are met.",
      },
      {
        level: 2,
        effect:
          "Moderately increases attack power and affinity of ammo after certain conditions are met.",
      },
      {
        level: 3,
        effect:
          "Increases the attack power and affinity of ammo after certain conditions are met.",
      },
    ],
  },
  {
    id: "defense_boost",
    name: "Defense Boost",
    type: "Equipment Skill",
    maxLevel: 7,
    description:
      "Increases defense. Also improves resistances at higher levels.",
    effects: [
      { level: 1, effect: "Defense +5" },
      { level: 2, effect: "Defense +10" },
      { level: 3, effect: "Defense +5% Bonus: +10" },
      {
        level: 4,
        effect: "Defense +5% Bonus: +20 All elemental resistances +3",
      },
      {
        level: 5,
        effect: "Defense +8% Bonus: +20 All elemental resistances +3",
      },
      {
        level: 6,
        effect: "Defense +8% Bonus: +35 All elemental resistances +5",
      },
      {
        level: 7,
        effect: "Defense +10% Bonus: +35 All elemental resistances +5",
      },
    ],
  },
  {
    id: "divine_blessing",
    name: "Divine Blessing",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Has a predetermined chance of reducing the damage you take.",
    effects: [
      { level: 1, effect: "While active, reduces damage taken by 15%." },
      { level: 2, effect: "While active, reduces damage taken by 30%." },
      { level: 3, effect: "While active, reduces damage taken by 50%." },
    ],
  },
  {
    id: "fire_resistance",
    name: "Fire Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases fire resistance. Also improves defense at higher levels.",
    effects: [
      { level: 1, effect: "Fire resistance +6" },
      { level: 2, effect: "Fire resistance +12" },
      { level: 3, effect: "Fire resistance +20 Defense +10" },
    ],
  },
  {
    id: "water_resistance",
    name: "Water Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases water resistance. Also improves defense at higher levels.",
    effects: [
      { level: 1, effect: "Water resistance +6" },
      { level: 2, effect: "Water resistance +12" },
      { level: 3, effect: "Water resistance +20 Defense +10" },
    ],
  },
  {
    id: "thunder_resistance",
    name: "Thunder Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases thunder resistance. Also improves defense at higher levels.",
    effects: [
      { level: 1, effect: "Thunder resistance +6" },
      { level: 2, effect: "Thunder resistance +12" },
      { level: 3, effect: "Thunder resistance +20 Defense +10" },
    ],
  },
  {
    id: "ice_resistance",
    name: "Ice Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases ice resistance. Also improves defense at higher levels.",
    effects: [
      { level: 1, effect: "Ice resistance +6" },
      { level: 2, effect: "Ice resistance +12" },
      { level: 3, effect: "Ice resistance +20 Defense +10" },
    ],
  },
  {
    id: "dragon_resistance",
    name: "Dragon Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases dragon resistance. Also improves defense at higher levels.",
    effects: [
      { level: 1, effect: "Dragon resistance +6" },
      { level: 2, effect: "Dragon resistance +12" },
      { level: 3, effect: "Dragon resistance +20 Defense +10" },
    ],
  },
  {
    id: "poison_resistance",
    name: "Poison Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces damage while poisoned.",
    effects: [
      {
        level: 1,
        effect: "Reduces the number of times you take poison damage.",
      },
      {
        level: 2,
        effect: "Greatly reduces the number of times you take poison damage.",
      },
      { level: 3, effect: "Prevents poison." },
    ],
  },
  {
    id: "paralysis_resistance",
    name: "Paralysis Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces the duration of paralysis.",
    effects: [
      { level: 1, effect: "Reduces the duration of paralysis by 30%." },
      { level: 2, effect: "Reduces the duration of paralysis by 60%." },
      { level: 3, effect: "Prevents paralysis." },
    ],
  },
  {
    id: "sleep_resistance",
    name: "Sleep Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces the duration of sleep.",
    effects: [
      { level: 1, effect: "Reduces the duration of sleep by 30%." },
      { level: 2, effect: "Reduces the duration of sleep by 60%." },
      { level: 3, effect: "Prevents sleep." },
    ],
  },
  {
    id: "iron_skin",
    name: "Iron Skin",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against defense down.",
    effects: [
      { level: 1, effect: "Reduces the duration of defense down by 50%." },
      { level: 2, effect: "Reduces the duration of defense down by 75%." },
      { level: 3, effect: "Prevents defense down." },
    ],
  },
  {
    id: "blight_resistance",
    name: "Blight Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against all elemental blights.",
    effects: [
      {
        level: 1,
        effect: "Reduces the duration of all elemental blights by 50%.",
      },
      {
        level: 2,
        effect: "Reduces the duration of all elemental blights by 75%.",
      },
      { level: 3, effect: "Nullifies all elemental blights." },
    ],
  },
  {
    id: "stun_resistance",
    name: "Stun Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces the duration of stun.",
    effects: [
      { level: 1, effect: "Reduces the duration of stun by 30%." },
      { level: 2, effect: "Reduces the duration of stun by 60%." },
      { level: 3, effect: "Prevents stun." },
    ],
  },
  {
    id: "bleeding_resistance",
    name: "Bleeding Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against bleeding.",
    effects: [
      { level: 1, effect: "Reduces damage while bleeding." },
      { level: 2, effect: "Greatly reduces damage while bleeding." },
      { level: 3, effect: "Prevents bleeding." },
    ],
  },
  {
    id: "bind_resistance",
    name: "Bind Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against webbed status and frostblight.",
    effects: [
      {
        level: 1,
        effect:
          "Allows you to quickly recover from webbed status or frostblight.",
      },
      {
        level: 2,
        effect:
          "Allows you to very quickly recover from webbed status or frostblight.",
      },
      { level: 3, effect: "Prevents webbed status and frostblight." },
    ],
  },
  {
    id: "blast_resistance",
    name: "Blast Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against blastblight.",
    effects: [
      { level: 1, effect: "Delays blastblight and reduces blast damage." },
      {
        level: 2,
        effect: "Greatly delays blastblight and greatly reduces blast damage.",
      },
      { level: 3, effect: "Prevents blastblight." },
    ],
  },
  {
    id: "adaptability",
    name: "Adaptability",
    type: "Equipment Skill",
    maxLevel: 2,
    description:
      "Grants protection against environmental damage, such as from heat or cold.",
    effects: [
      { level: 1, effect: "Negates the effects of heat and cold." },
      { level: 2, effect: "Negates environmental damage." },
    ],
  },
  {
    id: "recovery_up",
    name: "Recovery Up",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases the amount recovered when restoring health.",
    effects: [
      { level: 1, effect: "Slightly increases recovery." },
      { level: 2, effect: "Moderately increases recovery." },
      { level: 3, effect: "Greatly increases recovery." },
    ],
  },
  {
    id: "recovery_speed",
    name: "Recovery Speed",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Speeds healing of recoverable damage (the red portion of the Health Gauge).",
    effects: [
      {
        level: 1,
        effect: "Doubles the speed at which you heal recoverable damage.",
      },
      {
        level: 2,
        effect: "Triples the speed at which you heal recoverable damage.",
      },
      {
        level: 3,
        effect: "Quadruples the speed at which you heal recoverable damage.",
      },
    ],
  },
  {
    id: "survival_expert",
    name: "Survival Expert",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Extra health is recovered from environmental interactables.",
    effects: [
      { level: 1, effect: "Restores 50 health." },
      { level: 2, effect: "Restores 80 health." },
      { level: 3, effect: "Restores 100 health." },
    ],
  },
  {
    id: "constitution",
    name: "Constitution",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Reduces stamina depletion when evading, blocking, or doing certain other actions.",
    effects: [
      { level: 1, effect: "Reduces fixed stamina depletion by 10%." },
      { level: 2, effect: "Reduces fixed stamina depletion by 20%." },
      { level: 3, effect: "Reduces fixed stamina depletion by 30%." },
      { level: 4, effect: "Reduces fixed stamina depletion by 40%." },
      { level: 5, effect: "Reduces fixed stamina depletion by 50%." },
    ],
  },
  {
    id: "stamina_surge",
    name: "Stamina Surge",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Speeds up stamina recovery.",
    effects: [
      { level: 1, effect: "Stamina recovery speed +10%" },
      { level: 2, effect: "Stamina recovery speed +30%" },
      { level: 3, effect: "Stamina recovery speed +50%" },
    ],
  },
  {
    id: "marathon_runner",
    name: "Marathon Runner",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Slows down stamina depletion for actions that continuously drain stamina (such as dashing).",
    effects: [
      { level: 1, effect: "Reduces continuous stamina depletion by 15%." },
      { level: 2, effect: "Reduces continuous stamina depletion by 30%." },
      { level: 3, effect: "Reduces continuous stamina depletion by 50%." },
    ],
  },
  {
    id: "hunger_resistance",
    name: "Hunger Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces maximum stamina depletion over time.",
    effects: [
      {
        level: 1,
        effect: "Extends the time until your stamina cap reduces by 50%.",
      },
      {
        level: 2,
        effect: "Extends the time until your stamina cap reduces by 100%.",
      },
      { level: 3, effect: "Prevents your stamina cap from decreasing." },
    ],
  },
  {
    id: "agitator",
    name: "Agitator",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Increases attack power and affinity when large monsters become enraged.",
    effects: [
      { level: 1, effect: "Attack +4 and affinity +3% while active." },
      { level: 2, effect: "Attack +8 and affinity +5% while active." },
      { level: 3, effect: "Attack +12 and affinity +7% while active." },
      { level: 4, effect: "Attack +16 and affinity +10% while active." },
      { level: 5, effect: "Attack +20 and affinity +15% while active." },
    ],
  },
  {
    id: "latent_power",
    name: "Latent Power",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Temporarily increases affinity and reduces stamina depletion when certain conditions are met.",
    effects: [
      {
        level: 1,
        effect:
          "While active, affinity +10% and reduces stamina depletion by 30%.",
      },
      {
        level: 2,
        effect:
          "While active, affinity +20% and reduces stamina depletion by 30%.",
      },
      {
        level: 3,
        effect:
          "While active, affinity +30% and reduces stamina depletion by 50%.",
      },
      {
        level: 4,
        effect:
          "While active, affinity +40% and reduces stamina depletion by 50%.",
      },
      {
        level: 5,
        effect:
          "While active, affinity +50% and reduces stamina depletion by 50%.",
      },
    ],
  },
  {
    id: "burst",
    name: "Burst",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Continuously landing hits gradually increases attack and elemental attack. (Amount increased depends on weapon.)",
    effects: [
      {
        level: 1,
        effect:
          "On first hit, gain a small temporary attack and element boost, replaced by a larger boost after the fifth hit.",
      },
      { level: 2, effect: "Hit 5 successive times for a moderate stat boost." },
      { level: 3, effect: "Hit 5 successive times for a bigger stat boost." },
      {
        level: 4,
        effect: "Hit 5 successive times for an even bigger stat boost.",
      },
      { level: 5, effect: "Hit 5 successive times for a huge stat boost." },
    ],
  },
  {
    id: "flayer",
    name: "Flayer",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Makes it easier to inflict wounds. Upon inflicting enough damage, also deals additional non-elemental damage.",
    effects: [
      {
        level: 1,
        effect:
          "Makes it ever so slightly easier to inflict wounds. Also deals additional non-elemental damage.",
      },
      {
        level: 2,
        effect:
          "Makes it moderately easier to inflict wounds. Also deals slightly more additional non-elemental damage.",
      },
      {
        level: 3,
        effect:
          "Makes it easier to inflict wounds. Also deals moderately more additional non-elemental damage.",
      },
      {
        level: 4,
        effect:
          "Makes it much easier to inflict wounds. Also deals more additional non-elemental damage.",
      },
      {
        level: 5,
        effect:
          "Makes it significantly easier to inflict wounds. Also deals much more additional non-elemental damage.",
      },
    ],
  },
  {
    id: "heroics",
    name: "Heroics",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Increases attack power and defense when health drops to 35% or lower.",
    effects: [
      { level: 1, effect: "Defense +50 while active." },
      { level: 2, effect: "Attack +5% and defense +50 while active." },
      { level: 3, effect: "Attack +5% and defense +100 while active." },
      { level: 4, effect: "Attack +10% and defense +100 while active." },
      {
        level: 5,
        effect:
          "Attack +30% and defense-increasing effects are negated while active.",
      },
    ],
  },
  {
    id: "palico_rally",
    name: "Palico Rally",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Powers up Palicoes.",
    effects: [
      { level: 1, effect: "Increases Palico attack power and defense by 5%." },
      { level: 2, effect: "Increases Palico attack power and defense by 10%." },
      { level: 3, effect: "Increases Palico attack power and defense by 15%." },
      { level: 4, effect: "Increases Palico attack power and defense by 20%." },
      { level: 5, effect: "Increases Palico attack power and defense by 25%." },
    ],
  },
  {
    id: "focus",
    name: "Focus",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases the fill rate for weapons with gauges and the charge rate for weapons with charge attacks.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly increases gauge fill rate and reduces charge times by 5%.",
      },
      {
        level: 2,
        effect:
          "Moderately increases gauge fill rate and reduces charge times by 10%.",
      },
      {
        level: 3,
        effect: "Increases gauge fill rate and reduces charge times by 15%.",
      },
    ],
  },
  {
    id: "power_prolonger",
    name: "Power Prolonger",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Allows long swords, dual blades, insect glaives, switch axes, and charge blades to stay powered up longer.",
    effects: [
      {
        level: 1,
        effect: "Moderately boosts the duration weapons are powered up.",
      },
      { level: 2, effect: "Boosts the duration weapons are powered up." },
      {
        level: 3,
        effect: "Greatly boosts the duration weapons are powered up.",
      },
    ],
  },
  {
    id: "punishing_draw",
    name: "Punishing Draw",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Adds a stun effect to draw attacks and slightly increases attack power. (Not effective while riding.)",
    effects: [
      {
        level: 1,
        effect:
          "Draw attacks deal a small amount of stun damage and gain attack +3.",
      },
      {
        level: 2,
        effect:
          "Draw attacks deal a medium amount of stun damage and gain attack +5.",
      },
      {
        level: 3,
        effect:
          "Draw attacks deal a large amount of stun damage and gain attack +7.",
      },
    ],
  },
  {
    id: "slugger",
    name: "Slugger",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Makes it easier to stun monsters.",
    effects: [
      { level: 1, effect: "Stun power +20%" },
      { level: 2, effect: "Stun power +30%" },
      { level: 3, effect: "Stun power +40%" },
    ],
  },
  {
    id: "stamina_thief",
    name: "Stamina Thief",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases certain attacks' ability to exhaust monsters.",
    effects: [
      { level: 1, effect: "Exhaust power +20%" },
      { level: 2, effect: "Exhaust power +30%" },
      { level: 3, effect: "Exhaust power +40%" },
    ],
  },
  {
    id: "artillery",
    name: "Artillery",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Strengthens explosive attacks like shells, Wyvern's Fire, charge blade phial attacks, and Sticky Ammo.",
    effects: [
      {
        level: 1,
        effect:
          "Moderately increases each attack and Wyvern's Fire firing speed. Shelling fire attack +30.",
      },
      {
        level: 2,
        effect:
          "Increases each attack and Wyvern's Fire firing speed. Shelling fire attack +60.",
      },
      {
        level: 3,
        effect:
          "Greatly increases each attack and Wyvern's Fire firing speed. Shelling fire attack +90.",
      },
    ],
  },
  {
    id: "rapid_morph",
    name: "Rapid Morph",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Increases switch speed and power for switch axes and charge blades.",
    effects: [
      { level: 1, effect: "Speed +10%" },
      { level: 2, effect: "Speed +20% Morph attack damage +10%" },
      { level: 3, effect: "Speed +30% Morph attack damage +20%" },
    ],
  },
  {
    id: "partbreaker",
    name: "Partbreaker",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Makes it easier to break large monster parts, and increases damage dealt when destroying a wound with a Focus Strike.",
    effects: [
      {
        level: 1,
        effect:
          "Increases part damage and damage dealt when conditions are met by 10%.",
      },
      {
        level: 2,
        effect:
          "Increases part damage and damage dealt when conditions are met by 20%.",
      },
      {
        level: 3,
        effect:
          "Increases part damage and damage dealt when conditions are met by 30%.",
      },
    ],
  },
  {
    id: "foray",
    name: "Foray",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Increases attack power and affinity against large monsters affected by poison or paralysis.",
    effects: [
      {
        level: 1,
        effect:
          "Attack +6 against large monsters affected by poison or paralysis.",
      },
      {
        level: 2,
        effect:
          "Attack +8 and affinity +5% against large monsters affected by poison or paralysis.",
      },
      {
        level: 3,
        effect:
          "Attack +10 and affinity +10% against large monsters affected by poison or paralysis.",
      },
      {
        level: 4,
        effect:
          "Attack +12 and affinity +15% against large monsters affected by poison or paralysis.",
      },
      {
        level: 5,
        effect:
          "Attack +15 and affinity +20% against large monsters affected by poison or paralysis.",
      },
    ],
  },
  {
    id: "coalescence",
    name: "Coalescence",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Temporarily increases elemental attack power and status effects after recovering from blights or abnormal status.",
    effects: [
      {
        level: 1,
        effect:
          "When active, grants a slight increase to elemental damage and status buildup.",
      },
      {
        level: 2,
        effect:
          "When active, grants an increase to elemental damage and status buildup.",
      },
      {
        level: 3,
        effect:
          "When active, grants a large increase to elemental damage and status buildup.",
      },
    ],
  },
  {
    id: "ambush",
    name: "Ambush",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Temporarily increases damage to large monsters with a successful Sneak Attack.",
    effects: [
      { level: 1, effect: "Attack +5% while active." },
      { level: 2, effect: "Attack +10% while active." },
      { level: 3, effect: "Attack +15% while active." },
    ],
  },
  {
    id: "antivirus",
    name: "Antivirus",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Once infected, makes it easier to overcome the Frenzy and increases affinity if cured.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly increases recovery rate after contracting the Frenzy. Affinity +3% if cured.",
      },
      {
        level: 2,
        effect:
          "Increases recovery rate after contracting the Frenzy. Affinity +6% if cured.",
      },
      {
        level: 3,
        effect:
          "Greatly increases recovery rate after contracting the Frenzy. Affinity +15% if cured.",
      },
    ],
  },
  {
    id: "elemental_absorption",
    name: "Elemental Absorption",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "After taking elemental damage, temporarily grants you element effects. (Cooldown after effect ends)",
    effects: [
      {
        level: 1,
        effect:
          "While active, slightly increases elemental attack, and resistance to element taken at activation by 4.",
      },
      {
        level: 2,
        effect:
          "While active, moderately increases elemental attack, and resistance to element taken at activation by 6.",
      },
      {
        level: 3,
        effect:
          "While active, increases elemental attack, and resistance to element taken at activation by 8.",
      },
    ],
  },
  {
    id: "horn_maestro",
    name: "Horn Maestro",
    type: "Equipment Skill",
    maxLevel: 2,
    description:
      "Increases the effect duration of hunting horn melodies. (Effect lost when you change weapons.)",
    effects: [
      {
        level: 1,
        effect:
          "Extends Melody Effect duration and increases the chance of larger heals from healing melodies.",
      },
      {
        level: 2,
        effect:
          "Greatly increases the effect duration of hunting horn melodies.",
      },
    ],
  },
  {
    id: "charge_up",
    name: "Charge Up",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases your power to induce stun when you hit a monster with a hammer's charged attack.",
    effects: [{ level: 1, effect: "Activates skill effect." }],
  },
  {
    id: "airborne",
    name: "Airborne",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases the damage caused by jumping attacks.",
    effects: [{ level: 1, effect: "Jumping attack power +10%" }],
  },
  {
    id: "self_improvement",
    name: "Self-Improvement",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Attack and defense increase as time passes while on a quest. (The maximum is reached after 30 minutes.)",
    effects: [{ level: 1, effect: "Activates skill effect." }],
  },
  {
    id: "poison_duration_up",
    name: "Poison Duration Up",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Extends the duration of your poison's effect on monsters.",
    effects: [
      {
        level: 1,
        effect: "Extends the duration of your poison's effect by 20%.",
      },
    ],
  },
  {
    id: "guard",
    name: "Guard",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Reduces knockbacks and stamina depletion when guarding.",
    effects: [
      {
        level: 1,
        effect:
          "Slightly decreases the impact of attacks and reduces stamina depletion by 15%.",
      },
      {
        level: 2,
        effect:
          "Decreases the impact of attacks and reduces stamina depletion by 30%.",
      },
      {
        level: 3,
        effect:
          "Greatly decreases the impact of attacks and reduces stamina depletion by 50%.",
      },
    ],
  },
  {
    id: "evade_window",
    name: "Evade Window",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Extends the invulnerability period when evading.",
    effects: [
      { level: 1, effect: "Very slightly increases invulnerability window." },
      { level: 2, effect: "Slightly increases invulnerability window." },
      { level: 3, effect: "Increases invulnerability window." },
      { level: 4, effect: "Greatly increases invulnerability window." },
      { level: 5, effect: "Massively increases invulnerability window." },
    ],
  },
  {
    id: "evade_extender",
    name: "Evade Extender",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases evade distance.",
    effects: [
      { level: 1, effect: "Slightly extends evasion distance." },
      { level: 2, effect: "Extends evasion distance." },
      { level: 3, effect: "Greatly extends evasion distance." },
    ],
  },
  {
    id: "earplugs",
    name: "Earplugs",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection from large monsters' roars.",
    effects: [
      { level: 1, effect: "Reduces the effects of weak monster roars." },
      {
        level: 2,
        effect:
          "Nullifies weak monster roars and reduces the effects of strong monster roars.",
      },
      { level: 3, effect: "Nullifies weak and strong monster roars." },
    ],
  },
  {
    id: "guard_up",
    name: "Guard Up",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Allows you to guard against ordinarily unblockable attacks.",
    effects: [
      { level: 1, effect: "Reduces damage taken by 30%." },
      { level: 2, effect: "Reduces damage taken by 50%." },
      { level: 3, effect: "Reduces damage taken by 80%." },
    ],
  },
  {
    id: "quick_sheathe",
    name: "Quick Sheathe",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Speeds up weapon sheathing.",
    effects: [
      { level: 1, effect: "Slightly increases sheathing speed." },
      { level: 2, effect: "Increases sheathing speed." },
      { level: 3, effect: "Greatly increases sheathing speed." },
    ],
  },
  {
    id: "windproof",
    name: "Windproof",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against wind pressure.",
    effects: [
      {
        level: 1,
        effect:
          "Negates minor wind pressure and halves the effects of major wind pressure.",
      },
      {
        level: 2,
        effect:
          "Negates minor and major wind pressure and halves the effects of dragon wind pressure.",
      },
      { level: 3, effect: "Negates all kinds of wind pressure." },
    ],
  },
  {
    id: "tremor_resistance",
    name: "Tremor Resistance",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Grants protection against ground tremors.",
    effects: [
      {
        level: 1,
        effect:
          "Nullifies very minor ground tremors and halves effects of minor ground tremors.",
      },
      {
        level: 2,
        effect:
          "Nullifies up to minor ground tremors and greatly reduces the effects of major ground tremors.",
      },
      { level: 3, effect: "Nullifies all ground tremors." },
    ],
  },
  {
    id: "flinch_free",
    name: "Flinch Free",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Prevents knockbacks and other reactions to small damage.",
    effects: [
      { level: 1, effect: "Prevents knockbacks." },
      {
        level: 2,
        effect:
          "Prevents knockbacks. Tripping is reduced to a knockback instead.",
      },
      { level: 3, effect: "Prevents knockbacks and tripping." },
    ],
  },
  {
    id: "intimidator",
    name: "Intimidator",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Reduces the chance small monsters will attack after spotting you. (Has no effect on certain monsters.)",
    effects: [
      {
        level: 1,
        effect:
          "Discourages monsters from engaging you even if you've been spotted.",
      },
      {
        level: 2,
        effect:
          "Highly discourages monsters from engaging you even if you've been spotted.",
      },
      {
        level: 3,
        effect:
          "Prevents monsters from engaging you even if you've been spotted.",
      },
    ],
  },
  {
    id: "speed_eating",
    name: "Speed Eating",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases meat-eating and item-consumption speed.",
    effects: [
      { level: 1, effect: "Moderately increases eating speed." },
      { level: 2, effect: "Increases eating speed." },
      { level: 3, effect: "Greatly increases eating speed." },
    ],
  },
  {
    id: "load_shells",
    name: "Load Shells",
    type: "Equipment Skill",
    maxLevel: 2,
    description:
      "Improves reloading, and increases the gunlance's shell capacity and charge blade's phial capacity.",
    effects: [
      { level: 1, effect: "Increases shell and phial reloading speed." },
      {
        level: 2,
        effect:
          "Increases shell/phial reloading speed. Gunlance loading capacity +1. Charge blade charges 5 phials on yellow gauge.",
      },
    ],
  },
  {
    id: "aquatic_oilsilt_mobility",
    name: "Aquatic-Oilsilt Mobility",
    type: "Equipment Skill",
    maxLevel: 2,
    description:
      "Grants resistance against impairments to mobility while in water, oilsilt, or streams.",
    effects: [
      {
        level: 1,
        effect:
          "Negates the effects of muddy streams, and prevents you from being slowed down in water or oilsilt.",
      },
      { level: 2, effect: "Also negates the effects of waves." },
    ],
  },
  {
    id: "shock_absorber",
    name: "Shock Absorber",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Disables damage reactions when you hit a friend or when a friend hits you.",
    effects: [{ level: 1, effect: "Activates skill effect." }],
  },
  {
    id: "leap_of_faith",
    name: "Leap of Faith",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Allows you to do a dive-evade when facing towards large monsters and extends the dive-evade distance.",
    effects: [{ level: 1, effect: "Enables skill use." }],
  },
  {
    id: "jump_master",
    name: "Jump Master",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Prevents attacks from knocking you back during a jump.",
    effects: [{ level: 1, effect: "Negates knockback during jumps." }],
  },
  {
    id: "cliffhanger",
    name: "Cliffhanger",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Decreases stamina depletion when climbing on vines.",
    effects: [
      { level: 1, effect: "Reduces stamina depletion while climbing by 50%." },
    ],
  },
  {
    id: "wide_range",
    name: "Wide-Range",
    type: "Equipment Skill",
    maxLevel: 5,
    description:
      "Allows the effects of certain items to also affect nearby allies.",
    effects: [
      {
        level: 1,
        effect: "Items affect nearby allies with 33% of their efficacy.",
      },
      {
        level: 2,
        effect:
          "Items affect nearby allies in a wider radius with 33% of their efficacy.",
      },
      {
        level: 3,
        effect:
          "Items affect nearby allies in a wider radius with 66% of their efficacy.",
      },
      {
        level: 4,
        effect:
          "Items affect nearby allies in a much wider radius with 66% of their efficacy.",
      },
      {
        level: 5,
        effect:
          "Items affect nearby allies in a much wider radius with full efficacy.",
      },
    ],
  },
  {
    id: "tool_specialist",
    name: "Tool Specialist",
    type: "Equipment Skill",
    maxLevel: 5,
    description: "Reduces the recharge time for specialized tools.",
    effects: [
      { level: 1, effect: "Shortens recharge time by 10%." },
      { level: 2, effect: "Shortens recharge time by 20%." },
      { level: 3, effect: "Shortens recharge time by 30%." },
      { level: 4, effect: "Shortens recharge time by 40%." },
      { level: 5, effect: "Shortens recharge time by 50%." },
    ],
  },
  {
    id: "bombardier",
    name: "Bombardier",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases the damage of explosive items.",
    effects: [
      { level: 1, effect: "Explosive power +10%" },
      { level: 2, effect: "Explosive power +20%" },
      { level: 3, effect: "Explosive power +30%" },
    ],
  },
  {
    id: "mushroomancer",
    name: "Mushroomancer",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Lets you digest mushrooms that would otherwise be inedible and gain their advantageous effects.",
    effects: [
      { level: 1, effect: "Lets you digest blue mushrooms and toadstools." },
      {
        level: 2,
        effect: "Additionally lets you digest nitroshrooms and parashrooms.",
      },
      {
        level: 3,
        effect:
          "Additionally lets you digest mandragoras, devil's blight, and exciteshrooms.",
      },
    ],
  },
  {
    id: "item_prolonger",
    name: "Item Prolonger",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Extends the duration of some item effects.",
    effects: [
      { level: 1, effect: "Item effect duration +10%" },
      { level: 2, effect: "Item effect duration +25%" },
      { level: 3, effect: "Item effect duration +50%" },
    ],
  },
  {
    id: "free_meal",
    name: "Free Meal",
    type: "Equipment Skill",
    maxLevel: 3,
    description:
      "Gives you a predetermined chance of consuming a food or drink item for free.",
    effects: [
      { level: 1, effect: "Activates 10% of the time." },
      { level: 2, effect: "Activates 25% of the time." },
      { level: 3, effect: "Activates 45% of the time." },
    ],
  },
  {
    id: "speed_sharpening",
    name: "Speed Sharpening",
    type: "Equipment Skill",
    maxLevel: 2,
    description: "Speeds up weapon sharpening when using a whetstone.",
    effects: [
      { level: 1, effect: "Removes one cycle from the sharpening process." },
      { level: 2, effect: "Removes two cycles from the sharpening process." },
    ],
  },
  {
    id: "stench_resistance",
    name: "Stench Resistance",
    type: "Equipment Skill",
    maxLevel: 2,
    description: "Grants protection against stench.",
    effects: [
      { level: 1, effect: "Reduces stench duration by 50%." },
      { level: 2, effect: "Prevents stench." },
    ],
  },
  {
    id: "blindsider",
    name: "Blindsider",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Improves the effectiveness of flash attacks and items.",
    effects: [
      {
        level: 1,
        effect: "Improves the effectiveness of flash attacks and items.",
      },
    ],
  },
  {
    id: "botanist",
    name: "Botanist",
    type: "Equipment Skill",
    maxLevel: 4,
    description:
      "Increases the quantity of herbs and other consumable items you gather.",
    effects: [
      { level: 1, effect: "One extra consumable herb item per gather." },
      {
        level: 2,
        effect:
          "Additionally adds one extra consumable fruit, nut, or seed item per gather.",
      },
      {
        level: 3,
        effect:
          "Additionally adds one extra consumable insect item per gather.",
      },
      {
        level: 4,
        effect:
          "Additionally adds one extra consumable mushroom item per gather.",
      },
    ],
  },
  {
    id: "geologist",
    name: "Geologist",
    type: "Equipment Skill",
    maxLevel: 3,
    description: "Increases the number of items you gain at gathering points.",
    effects: [
      { level: 1, effect: "One extra item when gathering from bonepiles." },
      {
        level: 2,
        effect:
          "Additionally adds one extra item when gathering special items.",
      },
      {
        level: 3,
        effect:
          "Additionally adds one extra item when gathering from mining outcrops.",
      },
    ],
  },
  {
    id: "entomologist",
    name: "Entomologist",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "The bodies of small insect monsters won't be destroyed, allowing them to be carved.",
    effects: [{ level: 1, effect: "Activates skill effect." }],
  },
  {
    id: "outdoorsman",
    name: "Outdoorsman",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Improves fishing, grilling, and transporting abilities.",
    effects: [
      {
        level: 1,
        effect: "Improves fishing, grilling, and transporting abilities.",
      },
    ],
  },
  {
    id: "honey_hunter",
    name: "Honey Hunter",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases the amount of honey you gain from gathering points.",
    effects: [
      {
        level: 1,
        effect: "Increases the amount of honey you gain from gathering points.",
      },
    ],
  },
  {
    id: "fleetfoot",
    name: "Fleetfoot",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases movement speed while crouching, and makes it easier to escape large monsters' detection.",
    effects: [
      {
        level: 1,
        effect:
          "Increases movement speed while crouching, and makes it easier to escape large monsters' detection.",
      },
    ],
  },
  {
    id: "master_mounter",
    name: "Master Mounter",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Makes it easier to mount monsters and to wound them once mounted.",
    effects: [
      {
        level: 1,
        effect:
          "Makes it easier to mount monsters and to wound them once mounted.",
      },
    ],
  },
  {
    id: "adrenaline",
    name: "Adrenaline",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily reduces stamina depletion when health is at 40% or lower.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily reduces stamina depletion when health is at 40% or lower.",
      },
    ],
  },
  {
    id: "hunter_gatherer",
    name: "Hunter Gatherer",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases gathering speed, and prevents knock back when gathering or carving.",
    effects: [
      {
        level: 1,
        effect:
          "Increases gathering speed, and prevents knock back when gathering or carving.",
      },
    ],
  },
  {
    id: "affinity_sliding",
    name: "Affinity Sliding",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases your affinity temporarily when sliding on terrain.",
    effects: [
      {
        level: 1,
        effect: "Increases your affinity temporarily when sliding on terrain.",
      },
    ],
  },
  {
    id: "fortify",
    name: "Fortify",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases attack and defense after fainting during a quest. (Can be used twice.)",
    effects: [
      {
        level: 1,
        effect:
          "Increases attack and defense after fainting during a quest. (Can be used twice.)",
      },
    ],
  },
  {
    id: "diversion",
    name: "Diversion",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases the attention drawn to you when attacking a monster.",
    effects: [
      {
        level: 1,
        effect:
          "Increases the attention drawn to you when attacking a monster.",
      },
    ],
  },
  {
    id: "inspiration",
    name: "Inspiration",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily increases attack power when using effects like Melody Effects that affect companions in range.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily increases attack power when using effects like Melody Effects that affect companions in range.",
      },
    ],
  },
  {
    id: "resuscitate",
    name: "Resuscitate",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases attack when inflicted with ailments.",
    effects: [
      { level: 1, effect: "Increases attack when inflicted with ailments." },
    ],
  },
  {
    id: "wylk_burst",
    name: "Wylk Burst",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases recovery speed of stamina and red gauge when near Wylkrystals.",
    effects: [
      {
        level: 1,
        effect:
          "Increases recovery speed of stamina and red gauge when near Wylkrystals.",
      },
    ],
  },
  {
    id: "ward_of_wyveria",
    name: "Ward of Wyveria",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Reduces elemental and unique damage while in the Ruins of Wyveria.",
    effects: [
      {
        level: 1,
        effect:
          "Reduces elemental and unique damage while in the Ruins of Wyveria.",
      },
    ],
  },
  {
    id: "foragers_luck",
    name: "Forager's Luck",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases the chance of finding rare gathering points.",
    effects: [
      {
        level: 1,
        effect: "Increases the chance of finding rare gathering points.",
      },
    ],
  },
  {
    id: "powerhouse_i",
    name: "Powerhouse I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily grants attack +10 after a successful Power Clash or Offset attack.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily grants attack +10 after a successful Power Clash or Offset attack.",
      },
    ],
  },
  {
    id: "scorcher_i",
    name: "Scorcher I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Chance to deal additional fire damage after landing an attack.",
    effects: [
      {
        level: 1,
        effect:
          "Chance to deal additional fire damage after landing an attack.",
      },
    ],
  },
  {
    id: "second_wind_i",
    name: "Second Wind I",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Grants an additional Stamina Gauge.",
    effects: [{ level: 1, effect: "Grants an additional Stamina Gauge." }],
  },
  {
    id: "flawless_armor_i",
    name: "Flawless Armor I",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Reduces the damage you take by 5% when your health is full.",
    effects: [
      {
        level: 1,
        effect: "Reduces the damage you take by 5% when your health is full.",
      },
    ],
  },
  {
    id: "war_cry_i",
    name: "War Cry I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Using the To Victory! gesture moderately increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
    effects: [
      {
        level: 1,
        effect:
          "Using the To Victory! gesture moderately increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
      },
    ],
  },
  {
    id: "burst_boost_i",
    name: "Burst Boost I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Extends the duration of the Burst skill and grants attack +3 while Burst is active.",
    effects: [
      {
        level: 1,
        effect:
          "Extends the duration of the Burst skill and grants attack +3 while Burst is active.",
      },
    ],
  },
  {
    id: "protein_fiend_i",
    name: "Protein Fiend I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily grants attack +15 after eating items such as well-done steak.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily grants attack +15 after eating items such as well-done steak.",
      },
    ],
  },
  {
    id: "protective_veil_i",
    name: "Protective Veil I",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases defense temporarily when using a specialized tool.",
    effects: [
      {
        level: 1,
        effect: "Increases defense temporarily when using a specialized tool.",
      },
    ],
  },
  {
    id: "thunderous_roar_i",
    name: "Thunderous Roar I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Moderately extends the activation time of the Latent Power skill.",
    effects: [
      {
        level: 1,
        effect:
          "Moderately extends the activation time of the Latent Power skill.",
      },
    ],
  },
  {
    id: "bad_blood_i",
    name: "Bad Blood I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Deals moderate additional damage while the Resentment skill is active.",
    effects: [
      {
        level: 1,
        effect:
          "Deals moderate additional damage while the Resentment skill is active.",
      },
    ],
  },
  {
    id: "binding_counter_i",
    name: "Binding Counter I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
    effects: [
      {
        level: 1,
        effect:
          "Increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
      },
    ],
  },
  {
    id: "black_eclipse_i",
    name: "Black Eclipse I",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Infects you with Frenzy when against large monsters.",
    effects: [
      {
        level: 1,
        effect: "Infects you with Frenzy when against large monsters.",
      },
    ],
  },
  {
    id: "decimator_i",
    name: "Decimator I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Restores a moderate amount of health when destroying a wound on a large monster.",
    effects: [
      {
        level: 1,
        effect:
          "Restores a moderate amount of health when destroying a wound on a large monster.",
      },
    ],
  },
  {
    id: "hasten_recovery_i",
    name: "Hasten Recovery I",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Regenerates a small amount of your health as you continually attack a monster. Recovery varies by weapon.",
    effects: [
      {
        level: 1,
        effect:
          "Regenerates a small amount of your health as you continually attack a monster. Recovery varies by weapon.",
      },
    ],
  },
  {
    id: "powerhouse_ii",
    name: "Powerhouse II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily grants attack +25 after a successful Power Clash or Offset attack.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily grants attack +25 after a successful Power Clash or Offset attack.",
      },
    ],
  },
  {
    id: "scorcher_ii",
    name: "Scorcher II",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Increases additional fire damage after landing an attack.",
    effects: [
      {
        level: 1,
        effect: "Increases additional fire damage after landing an attack.",
      },
    ],
  },
  {
    id: "second_wind_ii",
    name: "Second Wind II",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Grants an additional long Stamina Gauge.",
    effects: [{ level: 1, effect: "Grants an additional long Stamina Gauge." }],
  },
  {
    id: "flawless_armor_ii",
    name: "Flawless Armor II",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Reduces the damage you take by 10% when your health is full.",
    effects: [
      {
        level: 1,
        effect: "Reduces the damage you take by 10% when your health is full.",
      },
    ],
  },
  {
    id: "war_cry_ii",
    name: "War Cry II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Using the To Victory! gesture increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
    effects: [
      {
        level: 1,
        effect:
          "Using the To Victory! gesture increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
      },
    ],
  },
  {
    id: "burst_boost_ii",
    name: "Burst Boost II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Further extends the duration of the Burst skill and grants attack +10 while Burst is active.",
    effects: [
      {
        level: 1,
        effect:
          "Further extends the duration of the Burst skill and grants attack +10 while Burst is active.",
      },
    ],
  },
  {
    id: "protein_fiend_ii",
    name: "Protein Fiend II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Temporarily grants attack +25 after eating items such as well-done steak.",
    effects: [
      {
        level: 1,
        effect:
          "Temporarily grants attack +25 after eating items such as well-done steak.",
      },
    ],
  },
  {
    id: "protective_veil_ii",
    name: "Protective Veil II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Greatly increases defense and resistance temporarily when using a specialized tool.",
    effects: [
      {
        level: 1,
        effect:
          "Greatly increases defense and resistance temporarily when using a specialized tool.",
      },
    ],
  },
  {
    id: "thunderous_roar_ii",
    name: "Thunderous Roar II",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Extends the activation time of the Latent Power skill.",
    effects: [
      {
        level: 1,
        effect: "Extends the activation time of the Latent Power skill.",
      },
    ],
  },
  {
    id: "bad_blood_ii",
    name: "Bad Blood II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Deals additional damage while the Resentment skill is active.",
    effects: [
      {
        level: 1,
        effect: "Deals additional damage while the Resentment skill is active.",
      },
    ],
  },
  {
    id: "binding_counter_ii",
    name: "Binding Counter II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Greatly increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
    effects: [
      {
        level: 1,
        effect:
          "Greatly increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
      },
    ],
  },
  {
    id: "black_eclipse_ii",
    name: "Black Eclipse II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Infects you with Frenzy and raises attack when against large monsters. Attack power increases upon recovery.",
    effects: [
      {
        level: 1,
        effect:
          "Infects you with Frenzy and raises attack when against large monsters. Attack power increases upon recovery.",
      },
    ],
  },
  {
    id: "decimator_ii",
    name: "Decimator II",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Restores health when destroying a wound on a large monster.",
    effects: [
      {
        level: 1,
        effect: "Restores health when destroying a wound on a large monster.",
      },
    ],
  },
  {
    id: "hasten_recovery_ii",
    name: "Hasten Recovery II",
    type: "Equipment Skill",
    maxLevel: 1,
    description:
      "Regenerates your health as you continually attack a monster. Recovery varies by weapon.",
    effects: [
      {
        level: 1,
        effect:
          "Regenerates your health as you continually attack a monster. Recovery varies by weapon.",
      },
    ],
  },
  {
    id: "exhaust_functionality",
    name: "Exhaust Functionality",
    type: "Equipment Skill",
    maxLevel: 1,
    description: "Allows you to apply exhaust coatings.",
    effects: [{ level: 1, effect: "Lets you use exhaust coatings." }],
  },
  {
    id: "neopteron_alert",
    name: "Neopteron Alert",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases the amount of honey you gain from gathering points.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Honey Hunter" }],
  },
  {
    id: "neopteron_camouflage",
    name: "Neopteron Camouflage",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases movement speed while crouching, and makes it easier to escape large monsters' detection.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Fleetfoot" }],
  },
  {
    id: "scaling_prowess",
    name: "Scaling Prowess",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Makes it easier to mount monsters and to wound them once mounted.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Master Mounter" }],
  },
  {
    id: "scale_layering",
    name: "Scale Layering",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Temporarily reduces stamina depletion when health is at 40% or lower.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Adrenaline" }],
  },
  {
    id: "flexible_leathercraft",
    name: "Flexible Leathercraft",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases gathering speed, and prevents knock back when gathering or carving.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Hunter Gatherer" }],
  },
  {
    id: "buttery_leathercraft",
    name: "Buttery Leathercraft",
    type: "Group Skill",
    maxLevel: 1,
    description: "Increases your affinity temporarily when sliding on terrain.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Affinity Sliding" }],
  },
  {
    id: "fortifying_pelt",
    name: "Fortifying Pelt",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases attack and defense after fainting during a quest. (Can be used twice.)",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Fortify" }],
  },
  {
    id: "alluring_pelt",
    name: "Alluring Pelt",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases the attention drawn to you when attacking a monster.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Diversion" }],
  },
  {
    id: "lords_favor",
    name: "Lord's Favor",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Temporarily increases attack power when using effects like Melody Effects that affect companions in range.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Inspiration" }],
  },
  {
    id: "lords_fury",
    name: "Lord's Fury",
    type: "Group Skill",
    maxLevel: 1,
    description: "Increases attack when inflicted with ailments.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Resuscitate" }],
  },
  {
    id: "guardians_pulse",
    name: "Guardian's Pulse",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Increases recovery speed of stamina and red gauge when near Wylkrystals.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Wylk Burst" }],
  },
  {
    id: "guardians_protection",
    name: "Guardian's Protection",
    type: "Group Skill",
    maxLevel: 1,
    description:
      "Reduces elemental and unique damage while in the Ruins of Wyveria.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Ward of Wyveria" }],
  },
  {
    id: "imparted_wisdom",
    name: "Imparted Wisdom",
    type: "Group Skill",
    maxLevel: 1,
    description: "Increases the chance of finding rare gathering points.",
    effects: [{ level: 1, effect: "3 Pieces Unlock: Forager's Luck" }],
  },
  {
    id: "doshagumas_might",
    name: "Doshaguma's Might",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description:
      "Temporarily increases attack after a successful Power Clash or Offset attack.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Temporarily grants attack +10 after a successful Power Clash or Offset attack",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Temporarily grants attack +25 after a successful Power Clash or Offset attack",
      },
    ],
  },
  {
    id: "rathalos_flare",
    name: "Rathalos's Flare",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description:
      "Chance to deal additional Fire Damage after landing an attack.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Chance to deal additional fire damage after landing an attack.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Increases additional fire damage after landing an attack.",
      },
    ],
  },
  {
    id: "fulgur_anjanaths_will",
    name: "Fulgur Anjanath's Will",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Grants an additional Stamina Gauge.",
    effects: [
      { level: 1, effect: "2 Pieces: Grants an additional Stamina Gauge." },
      {
        level: 2,
        effect: "4 Pieces: Grants an additional long Stamina Gauge.",
      },
    ],
  },
  {
    id: "gravioss_protection",
    name: "Gravios's Protection",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Reduces damage taken when health is full.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Reduces the damage you take by 5% when your health is full.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Reduces the damage you take by 10% when your health is full.",
      },
    ],
  },
  {
    id: "blangongas_spirit",
    name: "Blangonga's Spirit",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases attack by using the To Victory! gesture.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Using the To Victory! gesture moderately increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Using the To Victory! gesture increases attack temporarily to nearby allies. Greatly effects Palicoes and Support Hunters.",
      },
    ],
  },
  {
    id: "ebony_odogarons_power",
    name: "Ebony Odogaron's Power",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases the duration of the Burst skill.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Extends the duration of the Burst skill and grants attack +3 while Burst is active.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Further extends the duration of the Burst skill and grants attack +10 while Burst is active.",
      },
    ],
  },
  {
    id: "xu_wus_vigor",
    name: "Xu Wu's Vigor",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases attack after eating certain items.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Temporarily grants attack +15 after eating items such as well-done steak.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Temporarily grants attack +25 after eating items such as well-done steak.",
      },
    ],
  },
  {
    id: "uth_dunas_cover",
    name: "Uth Duna's Cover",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases defense when using a specialized tool.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Increases defense temporarily when using a specialized tool.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Greatly increases defense and resistance temporarily when using a specialized tool.",
      },
    ],
  },
  {
    id: "rey_daus_voltage",
    name: "Rey Dau's Voltage",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases the activation time of the Latent Power skill.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Moderately extends the activation time of the Latent Power skill.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Extends the activation time of the Latent Power skill.",
      },
    ],
  },
  {
    id: "nu_udras_mutiny",
    name: "Nu Udra's Mutiny",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Increases the damage output while Resentment is active.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Deals moderate additional damage while the Resentment skill is active.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Deals additional damage while the Resentment skill is active.",
      },
    ],
  },
  {
    id: "jin_dahaads_revolt",
    name: "Jin Dahaad's Revolt",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description:
      "Increases attack after recovering from certain status effects.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Greatly increases attack after recovering from webbed status, frostblight, being pinned, or a Power Clash.",
      },
    ],
  },
  {
    id: "gore_magalas_tyranny",
    name: "Gore Magala's Tyranny",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Infects you with Frenzy when against Large Monsters.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Infects you with Frenzy when against large monsters.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Infects you with Frenzy and raises attack when against large monsters. Attack power increases upon recovery.",
      },
    ],
  },
  {
    id: "guardian_arkvelds_vitality",
    name: "Guardian Arkveld's Vitality",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Restores health when destroying a wound on a Large Monster.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Restores a moderate amount of health when destroying a wound on a large monster.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Restores health when destroying a wound on a large monster.",
      },
    ],
  },
  {
    id: "arkvelds_hunger",
    name: "Arkveld's Hunger",
    type: "Set Bonus Skill",
    maxLevel: 2,
    description: "Regenerates health as you continually attack a monster.",
    effects: [
      {
        level: 1,
        effect:
          "2 Pieces: Regenerates a small amount of your health as you continually attack a monster. Recovery varies by weapon.",
      },
      {
        level: 2,
        effect:
          "4 Pieces: Regenerates your health as you continually attack a monster. Recovery varies by weapon.",
      },
    ],
  },
];
