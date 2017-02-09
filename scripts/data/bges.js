var BATTLEGROUNDS = {
  "101": {
    "name": "Age of Dragons",
    "id": "101",
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
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .005,
      },
    ]
  },
};
