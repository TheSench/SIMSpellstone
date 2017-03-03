var BATTLEGROUNDS = {
  "101": {
    "name": "Age of Dragons",
    "id": "101",
    "desc": "All Dragons are bestowed with extraordinary vitality, causing them to be Healed each turn by 25%.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "mult": .25,
        "y": "9",
        "all": "1",
      },
    ]
  },
  "102": {
    "name": "World Awakening",
    "id": "102",
    "desc": "All Elementals are Empowered from the mana rich land, raising their Attack by 2 each turn.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "rally",
        "x": 2,
        "y": "5",
        "all": "1",
      },
    ]
  },
  "103": {
    "name": "Rise of the Frogs",
    "id": "103",
    "desc": "All Frogs gain the Protection of the Guardian Stone, reducing damage taken by 2.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "protect",
        "x": 2,
        "y": "4",
        "all": "1",
      },
    ]
  },
  "104": {
    "name": "Iceshatter Barrier",
    "id": "104",
    "desc": "When Barrier is broken, deals damage to the creature across from it or the enemy Hero equal to the Barrier value.",
    "effect": [
      {
        "effect_type": "evolve_skill",
        "id": "protect",
        "s": "protect_ice",
      },
      {
        "effect_type": "evolve_skill",
        "id": "protect",
        "s": "protect_ice",
        "all": "1",
      },
    ]
  },
  "105": {
    "name": "Devouring Hunger",
    "id": "105",
    "desc": "The Undead are invigorated with an unquenchable hunger, giving them Berserk which increases their base attack by 30% after dealing damage.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "berserk",
        "mult": .3,
        "base": "attack",
        "y": "7",
      },
    ]
  },
  "106": {
    "name": "Angelic Legion",
    "id": "106",
    "desc": "Angels have risen to fight, gaining Legion equal to 50% of the their base Attack.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "legion",
        "mult": 0.5,
        "base": "attack",
        "y": "6",
      },
    ]
  },
  "107": {
    "name": "Elemental Surge",
    "id": "107",
    "desc": "Seismic shifts have given Elementals incredible power! Elementals have their Attack increased by 50% of their base, rounded up!",
    "effect": [
      {
        "effect_type": "skill",
        "id": "rally",
        "mult": .5,
        "y": "5",
        "all": "1",
      },
    ]
  },
  "108": {
    "name": "Poisonbolt Evolution",
    "id": "108",
    "desc": "Frogs have evolved to have Poisonbolt! They deal bolt damage and leave poison with their tongue, equal to 50% of their base attack!",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "poisonstrike",
        "mult": .5,
        "base": "attack",
        "y": "4",
      },
    ]
  },
  "109": {
    "name": "Airborne Mastery",
    "id": "109",
    "desc": "The first time Avians activate, they permanently double their base Attack if the opposing card has more Attack.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "valor",
        "mult": 1,
        "base": "attack",
        "y": "10",
      },
    ]
  },
  "110": {
    "name": "Hardened Carapace",
    "id": "110",
    "desc": "Insects gain a hardened carapace, gaining Armored value equal to 10% of their base Health, rounded up.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "armored",
        "mult": 0.1,
        "base": "health",
        "y": "13",
      },
    ]
  },
  "111": {
    "name": "Searing Essence",
    "id": "111",
    "desc": "When an Elemental is damaged by an attack, it deals Scorch damage to the attacker equal to 10% of the Elemental's base Health.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "counterburn",
        "mult": 0.1,
        "base": "health",
        "y": "5",
      },
    ]
  },
  "112": {
    "name": "Goblin Barrage",
    "id": "112",
    "desc": "Each active Goblin throws a number of bombs equal to their base Attack at the start of each turn before other skills. Each bomb deals 1 damage.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "barrage",
        "mult": 1,
        "base": "attack",
        "y": "11",
      },
    ]
  },
  "113": {
    "name": "Underwater Shelter",
    "id": "113",
    "desc": "All Seafolk dive beneath the waves, gaining a Barrier equal to 20% of their base Health. This bonus is doubled if the Seafolk is on delay.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "protect_seafolk",
        "mult": .2,
        "on_delay_mult": .2,
        "y": "12",
        "all": "1",
      },
    ]
  },
  "114": {
    "name": "Eagle Eye",
    "id": "114",
    "desc": "Each Avian marks a random target upon first activation, Hexing them for 30% of their base Attack. The Avian chooses a new mark when their current mark dies. Ignores Invisibility.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "mark",
        "mult": 0.3,
        "base": "attack",
        "y": "10",
      },
    ]
  },
  "501": {
    "name": "Castle Siege",
    "id": "501",
    "desc": "All enemies start with a Castle Tower card.",
    "isTower": true,
    "effect": {
        "2": {
        	"id": 601,
        	"level": 1,
        },
        "3": {
        	"id": 601,
        	"level": 2,
        },
        "4": {
        	"id": 601,
        	"level": 3,
        },
        "5": {
        	"id": 601,
        	"level": 4,
        },
        "6": {
        	"id": 601,
        	"level": 5,
        },
        "7": {
        	"id": 601,
        	"level": 6,
        },
        "8": {
        	"id": 601,
        	"level": 7,
        },
        "9": {
        	"id": 601,
        	"level": 8,
        },
        "10": {
        	"id": 601,
        	"level": 9,
        },
        "11": {
        	"id": 601,
        	"level": 10,
        },
        "12": {
        	"id": 601,
        	"level": 11,
        },
        "13": {
        	"id": 601,
        	"level": 12,
        },
        "14": {
        	"id": 601,
        	"level": 13,
        },
        "15": {
        	"id": 601,
        	"level": 14,
        },
        "16": {
        	"id": 601,
        	"level": 15,
        },
        "17": {
        	"id": 601,
        	"level": 16,
        },
        "18": {
        	"id": 601,
        	"level": 17,
        },
    }
  },
  "502": {
    "name": "Cannon Siege",
    "id": "502",
    "desc": "All enemies start with a Cannon Tower card.",
    "isTower": true,
    "effect": {
        "2": {
        	"id": 602,
        	"level": 1,
        },
        "3": {
        	"id": 602,
        	"level": 2,
        },
        "4": {
        	"id": 602,
        	"level": 3,
        },
        "5": {
        	"id": 602,
        	"level": 4,
        },
        "6": {
        	"id": 602,
        	"level": 5,
        },
        "7": {
        	"id": 602,
        	"level": 6,
        },
        "8": {
        	"id": 602,
        	"level": 7,
        },
        "9": {
        	"id": 602,
        	"level": 8,
        },
        "10": {
        	"id": 602,
        	"level": 9,
        },
        "11": {
        	"id": 602,
        	"level": 10,
        },
        "12": {
        	"id": 602,
        	"level": 11,
        },
        "13": {
        	"id": 602,
        	"level": 12,
        },
        "14": {
        	"id": 602,
        	"level": 13,
        },
        "15": {
        	"id": 602,
        	"level": 14,
        },
        "16": {
        	"id": 602,
        	"level": 15,
        },
        "17": {
        	"id": 602,
        	"level": 16,
        },
        "18": {
        	"id": 602,
        	"level": 17,
        },
    }
  },
  "503": {
    "name": "Frostbite's Aura",
    "id": "503",
    "desc": "Frostbite Heals and Empowers all of his allies, increasing in strength as he levels up.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "26",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "x": 1.1,
        "all": "1",
      },
      {
        "effect_type": "skill",
        "id": "rally",
        "x": .6,
        "all": "1",
      },
    ]
  },
  "504": {
    "name": "Nethergore's Reckoning",
    "id": "504",
    "desc": "Nethergore Heals and Empowers all of his allies, increasing in strength as he levels up.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "26",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "x": 1.2,
        "all": "1",
      },
      {
        "effect_type": "skill",
        "id": "rally",
        "x": .7,
        "all": "1",
      },
    ]
  },
  "505": {
    "name": "Fortune's Favoring",
    "id": "505",
    "desc": "Fortune's Favor Heals and Empowers all of its allies, increasing in strength as it levels up.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "26",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "x": 1.1,
        "all": "1",
      },
      {
        "effect_type": "skill",
        "id": "rally",
        "x": .6,
        "all": "1",
      },
    ]
  },
  "506": {
    "name": "Tree of Life",
    "id": "506",
    "desc": "All enemies start with a Tree of Life card.",
    "isTower": true,
    "effect": {
        "2": {
        	"id": 603,
        	"level": 1,
        },
        "3": {
        	"id": 603,
        	"level": 2,
        },
        "4": {
        	"id": 603,
        	"level": 3,
        },
        "5": {
        	"id": 603,
        	"level": 4,
        },
        "6": {
        	"id": 603,
        	"level": 5,
        },
        "7": {
        	"id": 603,
        	"level": 6,
        },
        "8": {
        	"id": 603,
        	"level": 7,
        },
        "9": {
        	"id": 603,
        	"level": 8,
        },
        "10": {
        	"id": 603,
        	"level": 9,
        },
        "11": {
        	"id": 603,
        	"level": 10,
        },
        "12": {
        	"id": 603,
        	"level": 11,
        },
        "13": {
        	"id": 603,
        	"level": 12,
        },
        "14": {
        	"id": 603,
        	"level": 13,
        },
        "15": {
        	"id": 603,
        	"level": 14,
        },
        "16": {
        	"id": 603,
        	"level": 15,
        },
        "17": {
        	"id": 603,
        	"level": 16,
        },
        "18": {
        	"id": 603,
        	"level": 17,
        },
    }
  },
  "507": {
    "name": "Flash Storms",
    "id": "507",
    "desc": "When an Elemental card is played, a Storm card is shuffled into the opponent's deck. When a Storm card is drawn, all their creatures are weakened for that turn!",
    "effect": [
      {
        "effect_type": "trap_card",
        "id": 604,
        "base": "attack",
        "mult": 0.5,
        "target_deck": "opponent",
        "y": "5",
      },
    ]
  },
  "508": {
    "name": "The Thunderdome",
    "id": "508",
    "desc": "Bolt and Bolt All skills deal 50% more damage.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "strike",
        "all": "1",
      },
    ]
  },
  "509": {
    "name": "Fortified Tower",
    "id": "509",
    "desc": "All enemies start with a Fortified Tower card. The tower evolves with the strongest opponents!",
    "isTower": true,
    "effect": {
        "2": {
        	"id": 605,
        	"level": 1,
        },
        "3": {
        	"id": 605,
        	"level": 2,
        },
        "4": {
        	"id": 605,
        	"level": 3,
        },
        "5": {
        	"id": 605,
        	"level": 4,
        },
        "6": {
        	"id": 605,
        	"level": 5,
        },
        "7": {
        	"id": 605,
        	"level": 6,
        },
        "8": {
        	"id": 605,
        	"level": 7,
        },
        "9": {
        	"id": 605,
        	"level": 8,
        },
        "10": {
        	"id": 605,
        	"level": 9,
        },
        "11": {
        	"id": 605,
        	"level": 10,
        },
        "12": {
        	"id": 605,
        	"level": 11,
        },
        "13": {
        	"id": 605,
        	"level": 12,
        },
        "14": {
        	"id": 605,
        	"level": 13,
        },
        "15": {
        	"id": 606,
        	"level": 1,
        },
        "16": {
        	"id": 606,
        	"level": 2,
        },
        "17": {
        	"id": 606,
        	"level": 3,
        },
        "18": {
        	"id": 606,
        	"level": 4,
        },
    }
  },
  "510": {
    "name": "Dungeon's Despair",
    "id": "510",
    "desc": "Dungeon's Despair Heals and Empowers all the enemy creatures, increasing in strength as the dungeon level increases.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "130",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "x": .2,
        "all": "1",
      },
      {
        "effect_type": "skill",
        "id": "rally",
        "x": .2,
        "all": "1",
      },
    ]
  },
  "511": {
    "name": "Runic Sanctuary",
    "id": "511",
    "desc": "Barrier and Barrier All skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "protect",
        "all": "1",
      },
    ]
  },
  "512": {
    "name": "Defender's Castle",
    "id": "512",
    "desc": "Players who go second start with a Castle Tower card.",
    "isTower": true,
    "effect": {
        "2": {
        	"id": 601,
        	"level": 1,
        },
        "3": {
        	"id": 601,
        	"level": 2,
        },
        "4": {
        	"id": 601,
        	"level": 3,
        },
        "5": {
        	"id": 601,
        	"level": 4,
        },
        "6": {
        	"id": 601,
        	"level": 5,
        },
        "7": {
        	"id": 601,
        	"level": 6,
        },
        "8": {
        	"id": 601,
        	"level": 7,
        },
        "9": {
        	"id": 601,
        	"level": 8,
        },
        "10": {
        	"id": 601,
        	"level": 9,
        },
        "11": {
        	"id": 601,
        	"level": 10,
        },
        "12": {
        	"id": 601,
        	"level": 11,
        },
        "13": {
        	"id": 601,
        	"level": 12,
        },
        "14": {
        	"id": 601,
        	"level": 13,
        },
        "15": {
        	"id": 601,
        	"level": 14,
        },
        "16": {
        	"id": 601,
        	"level": 15,
        },
        "17": {
        	"id": 601,
        	"level": 16,
        },
        "18": {
        	"id": 601,
        	"level": 17,
        },
    }
  },
  "513": {
    "name": "Firestarter",
    "id": "513",
    "desc": "Scorch skills deal 50% more damage.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "burn",
        "all": "1",
      },
    ]
  },
  "514": {
    "name": "The Arena",
    "id": "514",
    "desc": "In Arena Battles, the player who goes first has one additional Delay added to the first card they play in a battle.",
    "effect": [
      {
        "effect_type": "on_play",
        "attacker": 1,
        "first_play": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "slow",
        	"x": 1,
        }
      },
    ]
  },
  "515": {
    "name": "Golden Leaf Shelter",
    "id": "515",
    "desc": "All Frogs gain Barrier each turn equal to 20% of their base Health.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "protect",
        "mult": .20,
        "y": "4",
        "all": "1",
      },
    ]
  },
  "516": {
    "name": "Cursed Land",
    "id": "516",
    "desc": "Hex skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "enfeeble",
        "all": "1",
      },
    ]
  },
  "1001": {
    "name": "Primal Mending",
    "id": "1001",
    "desc": "Your creatures get healed for 2 every turn in battle.",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ]
  },
  "1002": {
    "name": "Personal Frog Buff",
    "id": "1002",
    "desc": "All ally Frogs gain the Protection of the Watcher, reducing damage taken by 2.",
    "hidden": true,
    "effect": [
      {
        "effect_type": "skill",
        "id": "protect",
        "x": 2,
        "y": "4",
        "all": "1",
      },
    ]
  },
  "2001": {
    "name": "Scylla's Presence",
    "id": "2001",
    "desc": "Scylla empowers her minions, increasing their stats with each Mastery level!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .05,
      },
    ]
  },
  "2002": {
    "name": "Riptide Nightsong",
    "id": "2002",
    "desc": "Enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .0025,
      },
    ]
  },
  "2003": {
    "name": "Riptide Nightsong",
    "id": "2003",
    "desc": "Enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .15,
        "mult": .0025,
      },
    ]
  },
  "2004": {
    "name": "Riptide Nightsong",
    "id": "2004",
    "desc": "Enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .05,
      },
    ]
  },
  "2005": {
    "name": "Litany of the Tenacious",
    "id": "2005",
    "desc": "Enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .0025,
      },
    ]
  },
};
