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
    "name": "Relentless Hunger",
    "id": "105",
    "desc": "The Undead are invigorated with an unquenchable hunger, giving them Berserk equal to 30% of their base Attack.",
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
    "desc": "Seismic shifts have given Elementals incredible power! Elementals have their Attack increased by 75% of their base, rounded up!",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enlarge",
        "mult": .75,
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
    "desc": "Each active Goblin throws a number of bombs equal to their base Attack at the start of each turn before other skills. Each bomb deals 1 damage and does not benefit from Hex or Venom.",
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
    "desc": "All Seafolk dive beneath the waves, gaining a Barrier each turn equal to 30% of their base Health while on delay.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "protect_seafolk",
        "mult": .3,
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
  "115": {
    "name": "Undead Unearthed",
    "id": "115",
    "desc": "When an Undead dies it creates an Unearthed Skeleton token creature with 50% Attack and Health of the Undead that died. The token has Invisibility and Berserk values based on its rarity.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "unearth",
        "mult": 0.5,
        "y": "7",
        "rarity": 1,
        "card": 607,
        "level": 3,
      },
      {
        "effect_type": "add_skill",
        "id": "unearth",
        "mult": 0.5,
        "y": "7",
        "rarity": 2,
        "card": 608,
        "level": 4,
      },
      {
        "effect_type": "add_skill",
        "id": "unearth",
        "mult": 0.5,
        "y": "7",
        "rarity": 3,
        "card": 609,
        "level": 5,
      },
      {
        "effect_type": "add_skill",
        "id": "unearth",
        "mult": 0.5,
        "y": "7",
        "rarity": 4,
        "card": 610,
        "level": 6,
      },
      {
        "effect_type": "add_skill",
        "id": "unearth",
        "mult": 0.5,
        "y": "7",
        "rarity": 5,
        "card": 611,
        "level": 7,
      },
    ]
  },
  "116": {
    "name": "Elemental Surge",
    "id": "116",
    "desc": "Seismic shifts have given Elementals incredible power! Elementals have their Attack increased by 75% of their base, rounded up!",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "enlarge",
        "mult": 0.75,
        "base": "attack",
        "y": "5",
      },
    ]
  },
  "117": {
    "name": "Insectile Venom",
    "id": "117",
    "desc": "Insects gain Venom equal to 10% of their Health. Creatures damaged by Insects are inflicted with Venom, taking damage at the end of their turn and taking additional damage from attacks and skills.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "venom",
        "mult": 0.1,
        "base": "health",
        "y": "13",
      },
    ]
  },
  "118": {
    "name": "Energy Shield",
    "id": "118",
    "desc": "All Mechas have upgraded their protective protocols, gaining a Barrier equal to their base Attack each time they deal Attack damage.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "reinforce",
        "mult": 1,
        "base": "attack",
        "y": "16",
        "all": "1",
      },
    ]
  },
  "119": {
    "name": "Elemental Conflux",
    "id": "119",
    "desc": "Elementals gain abilities based on faction! Aether have their Attack increased by 50% of the base, Chaos gain Vengeance equal to 50% of base Attack, and Wyld gain an additional 25% base Health.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enlarge",
        "mult": .5,
        "y": "1,5",
        "all": "1",
      },
      {
        "effect_type": "add_skill",
        "id": "counter",
        "mult": .5,
        "base": "attack",
        "y": "2,5",
        "all": "1",
      },
      {
        "effect_type": "scale_health",
        "base": "health",
        "mult": 0.25,
        "y": "3,5",
      },
    ]
  },
  "120": {
    "name": "Dragonfire",
    "id": "120",
    "desc": "Dragons gain Scorch equal to 20% of their base Health.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "burn",
        "mult": 0.2,
        "base": "health",
        "y": "9",
      },
    ]
  },
  "121": {
    "name": "Angelic Assault",
    "id": "121",
    "desc": "Angels have transcended, gaining Legion equal to 15% of their base Health.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "legion",
        "mult": 0.15,
        "base": "health",
        "y": "6",
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
        	"level": 2,
        },
        "3": {
        	"id": 603,
        	"level": 3,
        },
        "4": {
        	"id": 603,
        	"level": 4,
        },
        "5": {
        	"id": 603,
        	"level": 5,
        },
        "6": {
        	"id": 603,
        	"level": 6,
        },
        "7": {
        	"id": 603,
        	"level": 7,
        },
        "8": {
        	"id": 603,
        	"level": 8,
        },
        "9": {
        	"id": 603,
        	"level": 9,
        },
        "10": {
        	"id": 603,
        	"level": 10,
        },
        "11": {
        	"id": 603,
        	"level": 11,
        },
        "12": {
        	"id": 603,
        	"level": 12,
        },
        "13": {
        	"id": 603,
        	"level": 13,
        },
        "14": {
        	"id": 603,
        	"level": 14,
        },
        "15": {
        	"id": 603,
        	"level": 15,
        },
        "16": {
        	"id": 603,
        	"level": 16,
        },
        "17": {
        	"id": 603,
        	"level": 17,
        },
        "18": {
        	"id": 603,
        	"level": 18,
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
    "desc": "Hex and Hex All skills are 50% more effective.",
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
  "517": {
    "name": "Enchanted Armor",
    "id": "517",
    "desc": "Armor skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "armored",
        "all": "1",
      },
    ]
  },
  "518": {
    "name": "Goblin's Treachery",
    "id": "518",
    "desc": "Goblin Heals and Empowers all of his allies, increasing in strength as he levels up.",
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
  "519": {
    "name": "Corrosive Hide",
    "id": "519",
    "desc": "Corrosive skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "corrosive",
        "all": "1",
      },
    ]
  },
  "520": {
    "name": "Frozen Winds",
    "id": "520",
    "desc": "Frostbreath skills deal 50% more damage.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "frost",
        "all": "1",
      },
    ]
  },
  "521": {
    "name": "The Arena",
    "id": "521",
    "desc": "In Arena Battles, the player who goes first has two additional Delay added to the first card they play in a battle.",
    "effect": [
      {
        "effect_type": "on_play",
        "attacker": 1,
        "first_play": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "slow",
        	"x": 2,
        }
      },
    ]
  },
  "522": {
    "name": "Empowered Spirits",
    "id": "522",
    "desc": "Empower and Empower All skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "rally",
        "all": "1",
      },
    ]
  },
  "523": {
    "name": "Vengeance War",
    "id": "523",
    "desc": "Vengeance skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "counter",
        "all": "1",
      },
    ]
  },
  "524": {
    "name": "Berserker Rage",
    "id": "524",
    "desc": "Berserk skills are 50% more effective.",
    "effect": [
      {
        "effect_type": "skill",
        "id": "enhance",
        "mult": 0.5,
        "s": "berserk",
        "all": "1",
      },
    ]
  },
  "525": {
    "name": "Vanishing Enchantment",
    "id": "525",
    "desc": "All cards gain Invisibility 99.",
    "effect": [
      {
        "effect_type": "add_skill",
        "id": "evade",
        "x": 99,
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
    "name": "Anthem of the Tenacious",
    "id": "2005",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
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
  "2006": {
    "name": "Elegy of a Hero",
    "id": "2006",
    "desc": "Dyrnwyn's Spirit fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .4,
        "mult": .016,
      },
    ]
  },
  "2007": {
    "name": "Requiem of the Relentless",
    "id": "2007",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .13,
        "mult": .0025,
      },
    ]
  },
  "2008": {
    "name": "Requiem of the Relentless",
    "id": "2008",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .04,
      },
    ]
  },
  "2009": {
    "name": "Developer Hacks",
    "id": "2009",
    "desc": "Gets stronger every level. Yeah it's not fair. Not sorry.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "6",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .05,
      },
    ]
  },
  "2010": {
    "name": "Harmonious Sphere Chorus",
    "id": "2010",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2011": {
    "name": "Harmonious World Refrain",
    "id": "2011",
    "desc": "Bluefire, Void Master fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .01,
      },
    ]
  },
  "2012": {
    "name": "Harmonious Sphere Chorus",
    "id": "2012",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .13,
        "mult": .0025,
      },
    ]
  },
  "2013": {
    "name": "Harmonious Sphere Chorus",
    "id": "2013",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .04,
      },
    ]
  },
  "2014": {
    "name": "Six-Stanza Sonata",
    "id": "2014",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2015": {
    "name": "Dirge of the World",
    "id": "2015",
    "desc": "Bluefire, Mythic Master fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "7",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .01,
      },
    ]
  },
  "2016": {
    "name": "Buzzsaw Aphidsong",
    "id": "2016",
    "desc": "The Enraged Assassin fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .01,
      },
    ]
  },
  "2017": {
    "name": "Six-Stanza Sonata",
    "id": "2017",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .01,
      },
    ]
  },
  "2018": {
    "name": "Firecracker Tango",
    "id": "2018",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .03,
      },
    ]
  },
  "2019": {
    "name": "Coralflow Ballad",
    "id": "2019",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2020": {
    "name": "Blazing Tidal Etude",
    "id": "2020",
    "desc": "Xerkahn, the Avenger fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .3,
        "mult": .01,
      },
    ]
  },
  "2021": {
    "name": "Coralflow Ballad",
    "id": "2021",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .01,
      },
    ]
  },
  "2022": {
    "name": "Coralflow Ballad",
    "id": "2022",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .03,
      },
    ]
  },
  "2023": {
    "name": "Ion-pitched Chiptune",
    "id": "2023",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2024": {
    "name": "Gearweight Metal",
    "id": "2024",
    "desc": "Fireshard's Giant fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .25,
        "mult": .03,
      },
    ]
  },
  "2025": {
    "name": "Ion-pitched Chiptune",
    "id": "2025",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .01,
      },
    ]
  },
  "2026": {
    "name": "Ion-pitched Chiptune",
    "id": "2026",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .03,
      },
    ]
  },
  "2027": {
    "name": "Rhythm of the Soul",
    "id": "2027",
    "desc": "Viracocha, Titan Aspirer fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "7",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .01,
      },
    ]
  },
  "2028": {
    "name": "Crimsonwing Anthem",
    "id": "2028",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2029": {
    "name": "Crimsondrip Lullaby",
    "id": "2029",
    "desc": "Hero's Blessed, Yakov fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .03,
      },
    ]
  },
  "2030": {
    "name": "Crimsonwing Anthem",
    "id": "2030",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .01,
      },
    ]
  },
  "2031": {
    "name": "Crimsonwing Anthem",
    "id": "2031",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
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
  "2032": {
    "name": "Crystalsky Hymn",
    "id": "2032",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "5",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .008,
        "mult": .0025,
      },
    ]
  },
  "2033": {
    "name": "Crimsondrop Lullaby",
    "id": "2033",
    "desc": "Razi, Whisper Worshipper fights harder with each passing Mastery level, increasing cards' stats!",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .03,
      },
    ]
  },
  "2034": {
    "name": "Crystalsky Hymn",
    "id": "2034",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .1,
        "mult": .01,
      },
    ]
  },
  "2035": {
    "name": "Crystalsky Hymn",
    "id": "2035",
    "desc": "Non-token enemies become stronger with each passing Mastery level.",
    "enemy_only": true,
    "scale_with_level": "1",
    "starting_level": "0",
    "hidden": true,
    "effect": [
      {
        "effect_type": "scale_attributes",
        "base_mult": .2,
        "mult": .01,
      },
    ]
  },
  "5001": {
    "name": "The Arena",
    "id": "5001",
    "desc": "In Arena Battles, the player who goes first has two additional Delay added to the first card they play in a battle.",
    "hidden": true,
    "effect": [
      {
        "effect_type": "on_play",
        "attacker": 1,
        "first_play": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "slow",
        	"x": 2,
        }
      },
    ]
  },
  "5002": {
    "name": "The Arena",
    "id": "5002",
    "desc": "In Arena Battles, the player who goes first has one additional Delay added to the first two cards they play in a battle.",
    "hidden": true,
    "effect": [
      {
        "effect_type": "on_play",
        "attacker": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "slow",
        	"x": 1,
        }
      },
      {
        "effect_type": "on_play",
        "attacker": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "slow",
        	"x": 1,
        }
      },
    ]
  },
  "5003": {
    "name": "The Arena",
    "id": "5003",
    "desc": "In Arena Battles, the player who goes first has one Delay added to the first card they play and the player who goes second has one Delay removed from the first card they play.",
    "hidden": true,
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
      {
        "effect_type": "on_play",
        "defender": 1,
        "first_play": 1,
        "effect": {
        	"effect_type": "add_skill",
        	"id": "haste",
        	"x": 1,
        }
      },
    ]
  },
  "6001": {
    "name": "Global VFX",
    "id": "6001",
    "desc": "",
    "hidden": true,
  },
};
