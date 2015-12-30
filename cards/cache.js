var CARDS = {
"root": {
"unit": {
  "1000": {
    "id": "1000",
    "name": "Pegasus",
    "picture": "Pegasus_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1001": {
    "id": "1001",
    "name": "Angelic Knight",
    "picture": "Angel_Knight_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1002": {
    "id": "1002",
    "name": "Windstorm Elemental",
    "picture": "Cloud_Elemental_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 6,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
    }
  },
  "1003": {
    "id": "1003",
    "name": "Kestral",
    "picture": "Kestral_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1004": {
    "id": "1004",
    "name": "Wind Sprite",
    "picture": "Wind_Spirit_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 5,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1005": {
    "id": "1005",
    "name": "Angelic Brawler",
    "picture": "Warrior_Angel_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 7,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "1006": {
    "id": "1006",
    "name": "Soul Wisp",
    "picture": "Light_Wisp_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
    }
  },
  "1007": {
    "id": "1007",
    "name": "Fox Trickster",
    "picture": "Fox_Trickster_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "attack": 2,
        "health": 6,
        "skill": [],
      },
    }
  },
  "1010": {
    "id": "1010",
    "name": "Lightning Elemental",
    "picture": "Lightning_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 6,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "1011": {
    "id": "1011",
    "name": "Archive Keeper",
    "picture": "Living_Heiroglyphic_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 9,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "1012": {
    "id": "1012",
    "name": "Cloud Sylph",
    "picture": "Sylph_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1014": {
    "id": "1014",
    "name": "Cherub",
    "picture": "Cherub_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1015": {
    "id": "1015",
    "name": "Windfrog",
    "picture": "Wind_Frog_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "1017": {
    "id": "1017",
    "name": "Judgment",
    "picture": "Judgement_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1018": {
    "id": "1018",
    "name": "Armored Eagle",
    "picture": "Armored_Eagle_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 8,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "1019": {
    "id": "1019",
    "name": "Oracle",
    "picture": "Devote_Oracle_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "1025": {
    "id": "1025",
    "name": "Lightbound Archer",
    "picture": "Young_Angel_Archer_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "1026": {
    "id": "1026",
    "name": "Glass Colossus",
    "picture": "Glass_Colossuss_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1027": {
    "id": "1027",
    "name": "Griffin Knight",
    "picture": "Griffin_Knight_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1028": {
    "id": "1028",
    "name": "Heroic Frog",
    "picture": "Frog_Hero_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 8,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1029": {
    "id": "1029",
    "name": "Elementalist",
    "picture": "Master_Of_Elements_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1030": {
    "id": "1030",
    "name": "Paladin",
    "picture": "Paladin_Angel_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1031": {
    "id": "1031",
    "name": "Noble Champion",
    "picture": "Angel_Champion_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "11031": {
    "id": "11031",
    "name": "Righteous Champion",
    "picture": "Angel_Champion_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "21031": {
    "id": "21031",
    "name": "Light's Champion",
    "picture": "Angel_Champion_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "1032": {
    "id": "1032",
    "name": "Lunar Elemental",
    "picture": "Lunar_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "11032": {
    "id": "11032",
    "name": "Crescent Elemental",
    "picture": "Lunar_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "21032": {
    "id": "21032",
    "name": "Moonlight Elemental",
    "picture": "Lunar_Elemental_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "1040": {
    "id": "1040",
    "name": "Storm Dragon",
    "picture": "Storm_Dragon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 17,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "11040": {
    "id": "11040",
    "name": "Stormspawn Dragon",
    "picture": "Storm_Dragon_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 22,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "21040": {
    "id": "21040",
    "name": "Stormcleaver Dragon",
    "picture": "Storm_Dragon_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "1041": {
    "id": "1041",
    "name": "Avenging Angel",
    "picture": "Avenging_Angel_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1042": {
    "id": "1042",
    "name": "Archgeneral",
    "picture": "Grand_Archgeneral_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "11042": {
    "id": "11042",
    "name": "High Archgeneral",
    "picture": "Grand_Archgeneral_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21042": {
    "id": "21042",
    "name": "Grand Archgeneral",
    "picture": "Grand_Archgeneral_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "6",
        "z": 6,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "6",
            "z": 6,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1043": {
    "id": "1043",
    "name": "Lilypad Bard",
    "picture": "Frog_Bard_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "11043": {
    "id": "11043",
    "name": "Lilypad Minstrel",
    "picture": "Frog_Bard_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "21043": {
    "id": "21043",
    "name": "Lilypad Muse",
    "picture": "Frog_Bard_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "1300": {
    "id": "1300",
    "name": "Skeleton Warrior",
    "picture": "Skeleton_Warrior_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1301": {
    "id": "1301",
    "name": "Flame Spirit",
    "picture": "Flame_Spirit_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1302": {
    "id": "1302",
    "name": "Phase Imp",
    "picture": "Phase_Imp_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 3,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "1303": {
    "id": "1303",
    "name": "Undead Brute",
    "picture": "Undead_Brute_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 8,
    "cost": 3,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
    }
  },
  "1304": {
    "id": "1304",
    "name": "Goblin Rogue",
    "picture": "Goblin_Rogue_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 1,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1305": {
    "id": "1305",
    "name": "Smoldering Elemental",
    "picture": "Molten_Flame_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 6,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "1306": {
    "id": "1306",
    "name": "Lava Crab",
    "picture": "Lava_Crab_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "1307": {
    "id": "1307",
    "name": "Horned Rakken",
    "picture": "Horned_Lizard_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1311": {
    "id": "1311",
    "name": "Molten Skeleton",
    "picture": "Flaming_Skeleton_Warrior_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1312": {
    "id": "1312",
    "name": "Scythe Demon",
    "picture": "Scythe_Demon_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 6,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1313": {
    "id": "1313",
    "name": "Lavafrog",
    "picture": "Hellfrog_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 7,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "1314": {
    "id": "1314",
    "name": "Skeletal Hound",
    "picture": "Skeleton_Hound_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1315": {
    "id": "1315",
    "name": "Nix Elemental",
    "picture": "Void_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1317": {
    "id": "1317",
    "name": "Fire Imp",
    "picture": "Fire_Imp_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 1,
    "cost": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 2,
        "skill": [],
      },
    }
  },
  "1318": {
    "id": "1318",
    "name": "Smelted Lava Slug",
    "picture": "Lava_Slug_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1319": {
    "id": "1319",
    "name": "Wraith",
    "picture": "Wraith_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1325": {
    "id": "1325",
    "name": "Chaos Storm",
    "picture": "Storm_Elemental_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1326": {
    "id": "1326",
    "name": "Titan of Fire",
    "picture": "Fire_Titan_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "1327": {
    "id": "1327",
    "name": "Fallen Angel",
    "picture": "Fallen_Angel_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 4,
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "1328": {
    "id": "1328",
    "name": "Poison Bullfrog",
    "picture": "Poison_Frog_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1329": {
    "id": "1329",
    "name": "Shadow Assassin",
    "picture": "Invisible_Assassin_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 1,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "cost": 0,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1330": {
    "id": "1330",
    "name": "Devouring Locusts",
    "picture": "Plague_of_Fire_Locusts_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1331": {
    "id": "1331",
    "name": "Fallen Soldiers",
    "picture": "Undead_Soldiers_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "11331": {
    "id": "11331",
    "name": "Haunted Soldiers",
    "picture": "Undead_Soldiers_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "21331": {
    "id": "21331",
    "name": "Cursed Soldiers",
    "picture": "Undead_Soldiers_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "1332": {
    "id": "1332",
    "name": "Vampiric Emira",
    "picture": "Vampire_Lord_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "11332": {
    "id": "11332",
    "name": "Cloaked Emira",
    "picture": "Vampire_Lord_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21332": {
    "id": "21332",
    "name": "Nocturn Emira",
    "picture": "Vampire_Lord_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "1340": {
    "id": "1340",
    "name": "Blazekin Dragon",
    "picture": "Fire_Dragon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "1341": {
    "id": "1341",
    "name": "Blood Demon",
    "picture": "Blood_Demon_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1342": {
    "id": "1342",
    "name": "Ronin",
    "picture": "Undead_Samurai_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "11342": {
    "id": "11342",
    "name": "Risen Ronin",
    "picture": "Undead_Samurai_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "21342": {
    "id": "21342",
    "name": "Dai Ronin",
    "picture": "Undead_Samurai_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "1343": {
    "id": "1343",
    "name": "Firehorn",
    "picture": "Fire_Elemental_Bull_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "11343": {
    "id": "11343",
    "name": "Burnhorn",
    "picture": "Fire_Elemental_Bull_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "21343": {
    "id": "21343",
    "name": "Blazehorn",
    "picture": "Fire_Elemental_Bull_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 9,
    "health": 27,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 31,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1600": {
    "id": "1600",
    "name": "Woodland Fairy",
    "picture": "Fairy_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 2,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "1601": {
    "id": "1601",
    "name": "Moss Golem",
    "picture": "Moss_Golem_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 3,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
    }
  },
  "1602": {
    "id": "1602",
    "name": "Dire Wolf",
    "picture": "Dire_Wolf_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "1603": {
    "id": "1603",
    "name": "Mermaid Mage",
    "picture": "Mermaid_Mage_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "1604": {
    "id": "1604",
    "name": "Toad Warrior",
    "picture": "Frog_Warrior_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 1,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 2,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "1605": {
    "id": "1605",
    "name": "Flying Squirrel",
    "picture": "Air_Nymph_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1606": {
    "id": "1606",
    "name": "Angler Fish",
    "picture": "Angler_Fish_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1607": {
    "id": "1607",
    "name": "Turtle Tamer",
    "picture": "Turtle_Tamer_A",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "health": 13,
        "skill": [],
      },
    }
  },
  "1610": {
    "id": "1610",
    "name": "Ranger",
    "picture": "Ranger_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "1613": {
    "id": "1613",
    "name": "Acidic Spider",
    "picture": "Giant_Spider_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
    }
  },
  "1614": {
    "id": "1614",
    "name": "Druid",
    "picture": "Druid_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "1615": {
    "id": "1615",
    "name": "Rune Panther",
    "picture": "Rune_Panther_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "1616": {
    "id": "1616",
    "name": "Werewarg",
    "picture": "Werewarg_Alpha_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 9,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1617": {
    "id": "1617",
    "name": "Water Elemental",
    "picture": "Water_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "1618": {
    "id": "1618",
    "name": "Frog Scout",
    "picture": "Frog_Scout_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "1619": {
    "id": "1619",
    "name": "Earth Elemental",
    "picture": "Earth_Elemental_A",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
    }
  },
  "1631": {
    "id": "1631",
    "name": "Venom Dragon",
    "picture": "Poison_Dragon_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11631": {
    "id": "11631",
    "name": "Toxic Dragon",
    "picture": "Poison_Dragon_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21631": {
    "id": "21631",
    "name": "Tainted Dragon",
    "picture": "Poison_Dragon_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "1632": {
    "id": "1632",
    "name": "Shadow Rider",
    "picture": "Undead_Rider_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "11632": {
    "id": "11632",
    "name": "Dark Rider",
    "picture": "Undead_Rider_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21632": {
    "id": "21632",
    "name": "Shade Rider",
    "picture": "Undead_Rider_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "1625": {
    "id": "1625",
    "name": "Ferocious Clawkin",
    "picture": "Bear_Warrior_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "1626": {
    "id": "1626",
    "name": "Tusker",
    "picture": "Oliphant_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 19,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1627": {
    "id": "1627",
    "name": "Sage of Croaks",
    "picture": "Frog_Sage_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "1628": {
    "id": "1628",
    "name": "Garganotos",
    "picture": "Forest_Beast_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "1629": {
    "id": "1629",
    "name": "Rock Titan",
    "picture": "Rock_Titan_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "1630": {
    "id": "1630",
    "name": "Giant Squid",
    "picture": "Giant_Squid_A",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "1640": {
    "id": "1640",
    "name": "Life Dragon",
    "picture": "Dragon_Of_Life_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 3,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 18,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "1641": {
    "id": "1641",
    "name": "Rhythm of the Wyld",
    "picture": "Heart_Of_The_Woods_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "11641": {
    "id": "11641",
    "name": "Beat of the Wyld",
    "picture": "Heart_Of_The_Woods_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "21641": {
    "id": "21641",
    "name": "Heart of the Wyld",
    "picture": "Heart_Of_The_Woods_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "1642": {
    "id": "1642",
    "name": "Icestone Beast",
    "picture": "Ice_Elemental_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "11642": {
    "id": "11642",
    "name": "Icestone Brute",
    "picture": "Ice_Elemental_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "21642": {
    "id": "21642",
    "name": "Icestone Demon",
    "picture": "Ice_Elemental_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
    }
  },
  "1643": {
    "id": "1643",
    "name": "Nimble Leaper",
    "picture": "Swift_Frog_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "11643": {
    "id": "11643",
    "name": "Swift Leaper",
    "picture": "Swift_Frog_A",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "health": 13,
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "21643": {
    "id": "21643",
    "name": "Lightning Leaper ",
    "picture": "Swift_Frog_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 7,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "2000": {
    "id": "2000",
    "name": "Wasteland Nomad",
    "picture": "Wasteland_Nomad_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "12000": {
    "id": "12000",
    "name": "Wasteland Wanderer",
    "picture": "Wasteland_Nomad_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "22000": {
    "id": "22000",
    "name": "Wasteland Warrior",
    "picture": "Wasteland_Nomad_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "2001": {
    "id": "2001",
    "name": "Dunetooth Demon",
    "picture": "Desert_Lizard_Demon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "12001": {
    "id": "12001",
    "name": "Dunetooth Devil",
    "picture": "Desert_Lizard_Demon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 3,
        "health": 19,
        "skill": [],
      },
    }
  },
  "22001": {
    "id": "22001",
    "name": "Dunetooth Rex",
    "picture": "Desert_Lizard_Demon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "2002": {
    "id": "2002",
    "name": "Lantern Guardian",
    "picture": "Lantern_Guardian_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "12002": {
    "id": "12002",
    "name": "Beacon Guardian",
    "picture": "Lantern_Guardian_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "22002": {
    "id": "22002",
    "name": "Lumin Guardian",
    "picture": "Lantern_Guardian_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "2003": {
    "id": "2003",
    "name": "Dragon Tamer",
    "picture": "Dragon_Tamer_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "12003": {
    "id": "12003",
    "name": "Dragon Breeder",
    "picture": "Dragon_Tamer_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "22003": {
    "id": "22003",
    "name": "Dragon Master",
    "picture": "Dragon_Tamer_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "2004": {
    "id": "2004",
    "name": "Lavatail Dragon",
    "picture": "Molten_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "12004": {
    "id": "12004",
    "name": "Magmatail Dragon",
    "picture": "Molten_Dragon_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "22004": {
    "id": "22004",
    "name": "Obsidiantail Dragon",
    "picture": "Molten_Dragon_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "2005": {
    "id": "2005",
    "name": "Sailing Drake",
    "picture": "Windsear_Drake_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 1,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 2,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "12005": {
    "id": "12005",
    "name": "Windsear Drake",
    "picture": "Windsear_Drake_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "22005": {
    "id": "22005",
    "name": "Blazing Drake",
    "picture": "Windsear_Drake_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "2006": {
    "id": "2006",
    "name": "Zhulong",
    "picture": "Henry_Zhao_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "12006": {
    "id": "12006",
    "name": "Zhulong the Cunning",
    "picture": "Henry_Zhao_Dragon_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "22006": {
    "id": "22006",
    "name": "Zhulong the Wise",
    "picture": "Henry_Zhao_Dragon_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "2007": {
    "id": "2007",
    "name": "Platinum Golem",
    "picture": "Platinum_Elemental_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "12007": {
    "id": "12007",
    "name": "Platinum Armorer",
    "picture": "Platinum_Elemental_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 6,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "22007": {
    "id": "22007",
    "name": "Platinum Champion",
    "picture": "Platinum_Elemental_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 8,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "2008": {
    "id": "2008",
    "name": "Shadow of Ash",
    "picture": "Ash_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "12008": {
    "id": "12008",
    "name": "Soul of Ash",
    "picture": "Ash_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "22008": {
    "id": "22008",
    "name": "Ash Bringer",
    "picture": "Ash_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "2009": {
    "id": "2009",
    "name": "Sapling",
    "picture": "Sap_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "12009": {
    "id": "12009",
    "name": "Spirit of Sap",
    "picture": "Sap_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "22009": {
    "id": "22009",
    "name": "Specter of Sap",
    "picture": "Sap_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 6,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "2010": {
    "id": "2010",
    "name": "Silver Wind",
    "picture": "Silver_Wind_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "12010": {
    "id": "12010",
    "name": "Silver Wind Spirit",
    "picture": "Silver_Wind_Elemental_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "22010": {
    "id": "22010",
    "name": "Silver Wind Soul",
    "picture": "Silver_Wind_Elemental_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "2011": {
    "id": "2011",
    "name": "Poliworg",
    "picture": "Poliworg_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 12,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "12011": {
    "id": "12011",
    "name": "Poliworg Blitz",
    "picture": "Poliworg_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 17,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "22011": {
    "id": "22011",
    "name": "Poliworg Barrage",
    "picture": "Poliworg_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 4,
        "y": "4",
        "z": 4,
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "2012": {
    "id": "2012",
    "name": "Frogling Swarm",
    "picture": "Frogling_Swarm_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "12012": {
    "id": "12012",
    "name": "Frogling Mob",
    "picture": "Frogling_Swarm_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "22012": {
    "id": "22012",
    "name": "Frogling Army",
    "picture": "Frogling_Swarm_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "2013": {
    "id": "2013",
    "name": "Armored Toad",
    "picture": "Armored_Rock_Frog_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 7,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "12013": {
    "id": "12013",
    "name": "Ironclad Toad",
    "picture": "Armored_Rock_Frog_A",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 9,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 10,
        "skill": [],
      },
    }
  },
  "22013": {
    "id": "22013",
    "name": "Steelplated Toad",
    "picture": "Armored_Rock_Frog_B",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 10,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 11,
        "skill": [],
      },
    }
  },
  "2014": {
    "id": "2014",
    "name": "Tadpole Warmage",
    "picture": "Tadpole_Warmage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "12014": {
    "id": "12014",
    "name": "Froglet Warmage",
    "picture": "Tadpole_Warmage_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "22014": {
    "id": "22014",
    "name": "Frog Warmage",
    "picture": "Tadpole_Warmage_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "2015": {
    "id": "2015",
    "name": "Pumpking",
    "picture": "Arcane_Pumpkin_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "12015": {
    "id": "12015",
    "name": "Pumpkhan",
    "picture": "Arcane_Pumpkin_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "22015": {
    "id": "22015",
    "name": "Pumpking Kong",
    "picture": "Arcane_Pumpkin_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "2016": {
    "id": "2016",
    "name": "Atlas, the Ancient",
    "picture": "wyldBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 9,
    "health": 32,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 11,
        "health": 37,
        "skill": [],
      },
      "7": {
        "health": 38,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "2017": {
    "id": "2017",
    "name": "Solaron, the Origin",
    "picture": "aetherBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 29,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "attack": 9,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 10,
        "health": 34,
        "skill": [],
      },
      "7": {
        "health": 35,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "2018": {
    "id": "2018",
    "name": "Vulcanos, the Forge",
    "picture": "chaosBoss_A",
    "rarity": "5",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 8,
        "skill": [],
      },
      "7": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "2019": {
    "id": "2019",
    "name": "Chalistomper",
    "picture": "Chalicotherium_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "12019": {
    "id": "12019",
    "name": "Chalistamper",
    "picture": "Chalicotherium_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "22019": {
    "id": "22019",
    "name": "Chalirazer",
    "picture": "Chalicotherium_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "2020": {
    "id": "2020",
    "name": "Tidetaken Fighter",
    "picture": "Frozen_Skeleton_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "12020": {
    "id": "12020",
    "name": "Tidetaken Warrior",
    "picture": "Frozen_Skeleton_A",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "22020": {
    "id": "22020",
    "name": "Tidetaken Destroyer",
    "picture": "Frozen_Skeleton_B",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "2021": {
    "id": "2021",
    "name": "Snowstep Ranger",
    "picture": "NotFound",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "12021": {
    "id": "12021",
    "name": "Snowstep Scout",
    "picture": "NotFound",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "22021": {
    "id": "22021",
    "name": "Snowstep Strider",
    "picture": "NotFound",
    "rarity": "3",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "2022": {
    "id": "2022",
    "name": "Avalanche Equine",
    "picture": "NotFound",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "12022": {
    "id": "12022",
    "name": "Snowslide Equine",
    "picture": "NotFound",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "22022": {
    "id": "22022",
    "name": "Snowcrush Equine",
    "picture": "NotFound",
    "rarity": "4",
    "set": "2000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 8,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "5000": {
    "id": "5000",
    "name": "Azure Sphinx",
    "picture": "Marble_Sphinx_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15000": {
    "id": "15000",
    "name": "Marble Sphinx",
    "picture": "Marble_Sphinx_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25000": {
    "id": "25000",
    "name": "Alabaster Sphinx",
    "picture": "Marble_Sphinx_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
    }
  },
  "5001": {
    "id": "5001",
    "name": "Aven Skypiercer",
    "picture": "Eagle_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15001": {
    "id": "15001",
    "name": "Feather Skypiercer",
    "picture": "Eagle_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25001": {
    "id": "25001",
    "name": "Fierce Skypiercer",
    "picture": "Eagle_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5002": {
    "id": "5002",
    "name": "Twilight Mirror",
    "picture": "Twilight_Mirror_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 0,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 1,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 2,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15002": {
    "id": "15002",
    "name": "Twilight Reflector",
    "picture": "Twilight_Mirror_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25002": {
    "id": "25002",
    "name": "Twilight Specular",
    "picture": "Twilight_Mirror_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 7,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "5003": {
    "id": "5003",
    "name": "White Knight",
    "picture": "White_Knight_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15003": {
    "id": "15003",
    "name": "Ivory Knight",
    "picture": "White_Knight_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "25003": {
    "id": "25003",
    "name": "Opal Knight",
    "picture": "White_Knight_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 7,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5004": {
    "id": "5004",
    "name": "Lightning Lord",
    "picture": "Lighting_Lord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
    }
  },
  "15004": {
    "id": "15004",
    "name": "Lightning Baron",
    "picture": "Lighting_Lord_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "25004": {
    "id": "25004",
    "name": "Lightning Demigod",
    "picture": "Lighting_Lord_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5005": {
    "id": "5005",
    "name": "Storm Giant",
    "picture": "Storm_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15005": {
    "id": "15005",
    "name": "Thunderhead Giant",
    "picture": "Storm_Giant_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25005": {
    "id": "25005",
    "name": "Windtempest Giant",
    "picture": "Storm_Giant_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 30,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 9,
        "health": 34,
        "skill": [],
      },
    }
  },
  "5006": {
    "id": "5006",
    "name": "Arms Enforcer",
    "picture": "Chariot_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "15006": {
    "id": "15006",
    "name": "Arms Gladiator",
    "picture": "Chariot_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "25006": {
    "id": "25006",
    "name": "Arms Champion",
    "picture": "Chariot_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5007": {
    "id": "5007",
    "name": "Arcane Scroll",
    "picture": "Floating_Word_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 2,
    "cost": 1,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15007": {
    "id": "15007",
    "name": "Ancient Scroll",
    "picture": "Floating_Word_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "25007": {
    "id": "25007",
    "name": "Ancient Manuscript",
    "picture": "Floating_Word_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [],
      },
    }
  },
  "5008": {
    "id": "5008",
    "name": "Ice Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15008": {
    "id": "15008",
    "name": "Blizzard Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "25008": {
    "id": "25008",
    "name": "Hailstone Dragon",
    "picture": "Ice_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 30,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5009": {
    "id": "5009",
    "name": "Royal Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15009": {
    "id": "15009",
    "name": "Majestic Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
    }
  },
  "25009": {
    "id": "25009",
    "name": "High Guardian",
    "picture": "Royal_Guardian_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "5010": {
    "id": "5010",
    "name": "Concealed Dragon",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "15010": {
    "id": "15010",
    "name": "Lurking Dragon",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25010": {
    "id": "25010",
    "name": "Veiled Dragon",
    "picture": "Concealed_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5011": {
    "id": "5011",
    "name": "Sky Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15011": {
    "id": "15011",
    "name": "Soaring Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25011": {
    "id": "25011",
    "name": "Celestial Whale",
    "picture": "Sky_Whale_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5012": {
    "id": "5012",
    "name": "Static Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 9,
        "skill": [],
      },
    }
  },
  "15012": {
    "id": "15012",
    "name": "Lightning Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25012": {
    "id": "25012",
    "name": "Thunder Drake",
    "picture": "Static_Drake_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "5013": {
    "id": "5013",
    "name": "Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "15013": {
    "id": "15013",
    "name": "Shining Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "25013": {
    "id": "25013",
    "name": "Brilliant Radiance",
    "picture": "Light_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "5014": {
    "id": "5014",
    "name": "Winged Raptor",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15014": {
    "id": "15014",
    "name": "Charging Raptor",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "25014": {
    "id": "25014",
    "name": "Swift Raptor",
    "picture": "Raptor_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5015": {
    "id": "5015",
    "name": "Gravity Swell",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15015": {
    "id": "15015",
    "name": "Gravity Tide",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "25015": {
    "id": "25015",
    "name": "Gravity Bender",
    "picture": "Gravity_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5016": {
    "id": "5016",
    "name": "Fowl Swarm",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "15016": {
    "id": "15016",
    "name": "Fowl Drove",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25016": {
    "id": "25016",
    "name": "Fowl Horde",
    "picture": "Flock_of_Birds_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5017": {
    "id": "5017",
    "name": "Steam Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "15017": {
    "id": "15017",
    "name": "Piping Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25017": {
    "id": "25017",
    "name": "Scalding Tempest",
    "picture": "Steam_Elemental_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "5018": {
    "id": "5018",
    "name": "Grand Knight Frog",
    "picture": "High_Knight_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15018": {
    "id": "15018",
    "name": "High Knight Frog",
    "picture": "High_Knight_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25018": {
    "id": "25018",
    "name": "Supreme Knight Frog",
    "picture": "High_Knight_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 6,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "5019": {
    "id": "5019",
    "name": "Vivid Aurora",
    "picture": "Great_Aurora_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15019": {
    "id": "15019",
    "name": "Brilliant Aurora",
    "picture": "Great_Aurora_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25019": {
    "id": "25019",
    "name": "Blazing Aurora",
    "picture": "Great_Aurora_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5020": {
    "id": "5020",
    "name": "Frost Frog",
    "picture": "Frozen_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 5,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15020": {
    "id": "15020",
    "name": "Frozen Frog",
    "picture": "Frozen_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 7,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "25020": {
    "id": "25020",
    "name": "Arctic Frog",
    "picture": "Frozen_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 8,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "5021": {
    "id": "5021",
    "name": "Tower Spirit",
    "picture": "Tower_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15021": {
    "id": "15021",
    "name": "Spire Spirit",
    "picture": "Tower_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25021": {
    "id": "25021",
    "name": "Citadel Spirit",
    "picture": "Tower_Spirit_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5022": {
    "id": "5022",
    "name": "Webfoot Raider",
    "picture": "Bombardier_Frog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15022": {
    "id": "15022",
    "name": "Webfoot Bombardier",
    "picture": "Bombardier_Frog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "25022": {
    "id": "25022",
    "name": "Webfoot Marauder",
    "picture": "Bombardier_Frog_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "5023": {
    "id": "5023",
    "name": "Nightfall Dragon",
    "picture": "Night_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15023": {
    "id": "15023",
    "name": "Nighttide Dragon",
    "picture": "Night_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25023": {
    "id": "25023",
    "name": "Twilight Dragon",
    "picture": "Night_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5024": {
    "id": "5024",
    "name": "Cloudtop Dragon",
    "picture": "Sky_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15024": {
    "id": "15024",
    "name": "Billowtop Dragon",
    "picture": "Sky_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "25024": {
    "id": "25024",
    "name": "Skytop Dragon",
    "picture": "Sky_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "5025": {
    "id": "5025",
    "name": "Steelskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "15025": {
    "id": "15025",
    "name": "Plateskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "25025": {
    "id": "25025",
    "name": "Silverskin Dragon",
    "picture": "Steel_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 8,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "5026": {
    "id": "5026",
    "name": "Frostfire Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15026": {
    "id": "15026",
    "name": "Frostflame Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25026": {
    "id": "25026",
    "name": "Frostscour Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5027": {
    "id": "5027",
    "name": "Northern War-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15027": {
    "id": "15027",
    "name": "Northern Clash-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 23,
        "skill": [],
      },
    }
  },
  "25027": {
    "id": "25027",
    "name": "Northern Strife-kin",
    "picture": "Polar_Bear_Warrior_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5028": {
    "id": "5028",
    "name": "Winter Blacksmith",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15028": {
    "id": "15028",
    "name": "Winter Armorer",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "25028": {
    "id": "25028",
    "name": "Winter Bladesmith",
    "picture": "Winter_Blacksmith_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5029": {
    "id": "5029",
    "name": "Snowback Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15029": {
    "id": "15029",
    "name": "Snowmasked Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25029": {
    "id": "25029",
    "name": "Snowcloaked Dragon",
    "picture": "Snowhidden_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "5030": {
    "id": "5030",
    "name": "Loxphas Mage",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "15030": {
    "id": "15030",
    "name": "Loxphas Sorcerer",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "25030": {
    "id": "25030",
    "name": "Loxphas Wizard",
    "picture": "Mastodon_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "5031": {
    "id": "5031",
    "name": "Frostlance Valkyrie",
    "picture": "NotFound",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 8,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15031": {
    "id": "15031",
    "name": "Snowlance Valkyrie",
    "picture": "NotFound",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25031": {
    "id": "25031",
    "name": "Icelance Valkyrie",
    "picture": "NotFound",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 6,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5032": {
    "id": "5032",
    "name": "Hail Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15032": {
    "id": "15032",
    "name": "Iceblock Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25032": {
    "id": "25032",
    "name": "Frostshard Hurler",
    "picture": "Hail_Hurler_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 0,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "6000": {
    "id": "6000",
    "name": "Furnace Mech",
    "picture": "Fire_Furnace_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "16000": {
    "id": "16000",
    "name": "Furnace Smasher",
    "picture": "Fire_Furnace_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "26000": {
    "id": "26000",
    "name": "Furnace Breaker",
    "picture": "Fire_Furnace_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "6001": {
    "id": "6001",
    "name": "Orobas",
    "picture": "Balrog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16001": {
    "id": "16001",
    "name": "Orobas Ignited",
    "picture": "Balrog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26001": {
    "id": "26001",
    "name": "Orobas Unleashed",
    "picture": "Balrog_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "6002": {
    "id": "6002",
    "name": "Spirit of Madness",
    "picture": "Chaos_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "16002": {
    "id": "16002",
    "name": "Spirit of Dementia",
    "picture": "Chaos_Spirit_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26002": {
    "id": "26002",
    "name": "Spirit of Insanity",
    "picture": "Chaos_Spirit_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "6003": {
    "id": "6003",
    "name": "Black Knight",
    "picture": "Black_Knight_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "16003": {
    "id": "16003",
    "name": "Onyx Knight",
    "picture": "Black_Knight_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26003": {
    "id": "26003",
    "name": "Obsidian Knight",
    "picture": "Black_Knight_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "6004": {
    "id": "6004",
    "name": "Branding Construct",
    "picture": "Branding_Metal_Construct_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "16004": {
    "id": "16004",
    "name": "Branding Automaton",
    "picture": "Branding_Metal_Construct_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "26004": {
    "id": "26004",
    "name": "Branding Engine",
    "picture": "Branding_Metal_Construct_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "6005": {
    "id": "6005",
    "name": "Gloomkin",
    "picture": "Burning_Golem_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16005": {
    "id": "16005",
    "name": "Candle Gloomkin",
    "picture": "Burning_Golem_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "26005": {
    "id": "26005",
    "name": "Lantern Gloomkin",
    "picture": "Burning_Golem_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6006": {
    "id": "6006",
    "name": "Chaos Golem",
    "picture": "Chaos_Golem_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 8,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16006": {
    "id": "16006",
    "name": "Discord Golem",
    "picture": "Chaos_Golem_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "26006": {
    "id": "26006",
    "name": "Anarchy Golem",
    "picture": "Chaos_Golem_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "6007": {
    "id": "6007",
    "name": "Goblin Crew",
    "picture": "Goblin_Gang_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 5,
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "16007": {
    "id": "16007",
    "name": "Goblin Band",
    "picture": "Goblin_Gang_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "26007": {
    "id": "26007",
    "name": "Goblin Gang",
    "picture": "Goblin_Gang_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "6008": {
    "id": "6008",
    "name": "Thousand Arm Demon",
    "picture": "Thousand_Arm_Demon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "flurry",
        "c": 6,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 7,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 4,
        "health": 8,
        "skill": [],
      },
    }
  },
  "16008": {
    "id": "16008",
    "name": "Thousand Arm Fiend",
    "picture": "Thousand_Arm_Demon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "26008": {
    "id": "26008",
    "name": "Thousand Arm Hellion",
    "picture": "Thousand_Arm_Demon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "6009": {
    "id": "6009",
    "name": "Siphon Dragon",
    "picture": "Siphon_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "16009": {
    "id": "16009",
    "name": "Devouring Dragon",
    "picture": "Siphon_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 18,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "26009": {
    "id": "26009",
    "name": "Ravaging Dragon",
    "picture": "Siphon_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 5,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "6010": {
    "id": "6010",
    "name": "Cliffpass Defender",
    "picture": "Mountainpass_Defender_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16010": {
    "id": "16010",
    "name": "Cliffpass Apostle",
    "picture": "Mountainpass_Defender_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "26010": {
    "id": "26010",
    "name": "Cliffpass Champion",
    "picture": "Mountainpass_Defender_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6011": {
    "id": "6011",
    "name": "Bomb Spirit",
    "picture": "Bomb_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 0,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "16011": {
    "id": "16011",
    "name": "Flashbomb Spirit",
    "picture": "Bomb_Spirit_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 0,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "26011": {
    "id": "26011",
    "name": "Firebomb Spirit",
    "picture": "Bomb_Spirit_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 0,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "6012": {
    "id": "6012",
    "name": "Ember Drake",
    "picture": "Ember_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 3,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 4,
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "16012": {
    "id": "16012",
    "name": "Burning Drake",
    "picture": "Ember_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "26012": {
    "id": "26012",
    "name": "Scorching Drake",
    "picture": "Ember_Drake_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "6013": {
    "id": "6013",
    "name": "Rust Goliath",
    "picture": "Rust_Elemental_Ac",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16013": {
    "id": "16013",
    "name": "Rust Colossus",
    "picture": "Rust_Elemental_Ac",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 6,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26013": {
    "id": "26013",
    "name": "Rust Titan",
    "picture": "Rust_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "6014": {
    "id": "6014",
    "name": "Armored Ogre",
    "picture": "Armored_Ogre_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 17,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "16014": {
    "id": "16014",
    "name": "Hired Ogre",
    "picture": "Armored_Ogre_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 7,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "26014": {
    "id": "26014",
    "name": "Mercenary Ogre",
    "picture": "Armored_Ogre_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 8,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "attack": 9,
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "6015": {
    "id": "6015",
    "name": "Acidic Sludge",
    "picture": "Acid_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 1,
          },
        ],
      },
    }
  },
  "16015": {
    "id": "16015",
    "name": "Acidic Ooze",
    "picture": "Acid_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "26015": {
    "id": "26015",
    "name": "Acid Reaver",
    "picture": "Acid_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "6016": {
    "id": "6016",
    "name": "Skeletal Giant",
    "picture": "Skeleton_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16016": {
    "id": "16016",
    "name": "Tormented Giant",
    "picture": "Skeleton_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26016": {
    "id": "26016",
    "name": "Boneclaw Giant",
    "picture": "Skeleton_Giant_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 7,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "6017": {
    "id": "6017",
    "name": "Tar Pit Stalker",
    "picture": "Tar_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 1,
    "health": 4,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16017": {
    "id": "16017",
    "name": "Tar Pit Shambler",
    "picture": "Tar_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "26017": {
    "id": "26017",
    "name": "Tar Pit Swallower",
    "picture": "Tar_Elemental_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "6018": {
    "id": "6018",
    "name": "Underwater Lasher",
    "picture": "Legendary_Chaos_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "16018": {
    "id": "16018",
    "name": "Underwater Wallop",
    "picture": "Legendary_Chaos_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "26018": {
    "id": "26018",
    "name": "Underwater Clobberer",
    "picture": "Legendary_Chaos_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "6019": {
    "id": "6019",
    "name": "Canopy Horror",
    "picture": "Canopy_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16019": {
    "id": "16019",
    "name": "Canopy Chiller",
    "picture": "Canopy_Horror_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "26019": {
    "id": "26019",
    "name": "Canopy Terror",
    "picture": "Canopy_Horror_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "6020": {
    "id": "6020",
    "name": "Croak Piercer",
    "picture": "Spike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "16020": {
    "id": "16020",
    "name": "Croak Lancer",
    "picture": "Spike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 6,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "26020": {
    "id": "26020",
    "name": "Croak Impaler",
    "picture": "Spike_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 7,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "6021": {
    "id": "6021",
    "name": "Marsh Ogre",
    "picture": "Marsh_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 7,
    "health": 16,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 8,
        "health": 19,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "16021": {
    "id": "16021",
    "name": "Mire Ogre",
    "picture": "Marsh_Ogre_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 8,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "26021": {
    "id": "26021",
    "name": "Swamp Ogre",
    "picture": "Marsh_Ogre_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 8,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 28,
        "skill": [],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "6022": {
    "id": "6022",
    "name": "Illusion Caster",
    "picture": "Hypnofrog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 1,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "16022": {
    "id": "16022",
    "name": "Delusion Caster",
    "picture": "Hypnofrog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "26022": {
    "id": "26022",
    "name": "Hypno Caster",
    "picture": "Hypnofrog_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "6023": {
    "id": "6023",
    "name": "Broodmother",
    "picture": "Broodmother_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "16023": {
    "id": "16023",
    "name": "Fierce Broodmother",
    "picture": "Broodmother_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26023": {
    "id": "26023",
    "name": "Vicious Broodmother",
    "picture": "Broodmother_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
        "z": 9,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "9",
            "z": 9,
          },
        ],
      },
    }
  },
  "6024": {
    "id": "6024",
    "name": "Bane Dragon",
    "picture": "Ruination_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "16024": {
    "id": "16024",
    "name": "Blight Dragon",
    "picture": "Ruination_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "26024": {
    "id": "26024",
    "name": "Ruination Dragon",
    "picture": "Ruination_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6025": {
    "id": "6025",
    "name": "Dragon Keeper",
    "picture": "Dragon_Warlord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 10,
        "skill": [],
      },
    }
  },
  "16025": {
    "id": "16025",
    "name": "Dragon Commander",
    "picture": "Dragon_Warlord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26025": {
    "id": "26025",
    "name": "Dragon Warlord",
    "picture": "Dragon_Warlord_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6026": {
    "id": "6026",
    "name": "Smokefang",
    "picture": "Smoke_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "16026": {
    "id": "16026",
    "name": "Sootfang",
    "picture": "Smoke_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "26026": {
    "id": "26026",
    "name": "Crimsonfang",
    "picture": "Smoke_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "6027": {
    "id": "6027",
    "name": "Frigela, the Dread",
    "picture": "Ice_Witch_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "16027": {
    "id": "16027",
    "name": "Frigela, the Terror",
    "picture": "Ice_Witch_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "26027": {
    "id": "26027",
    "name": "Frigela, the Absolute",
    "picture": "Ice_Witch_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "6028": {
    "id": "6028",
    "name": "Brahmet",
    "picture": "Multi_Armed_Beast_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "16028": {
    "id": "16028",
    "name": "Great Brahmet",
    "picture": "Multi_Armed_Beast_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "26028": {
    "id": "26028",
    "name": "Vast Brahmet",
    "picture": "Multi_Armed_Beast_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "2",
    "attack": 7,
    "health": 24,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
        ],
      },
    }
  },
  "6029": {
    "id": "6029",
    "name": "Spinehead Stalker",
    "picture": "Spinehead_Undead_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "16029": {
    "id": "16029",
    "name": "Spinehead Trapper",
    "picture": "Spinehead_Undead_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "26029": {
    "id": "26029",
    "name": "Spinehead Huntress",
    "picture": "Spinehead_Undead_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "7",
        "z": 7,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "z": 7,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "6030": {
    "id": "6030",
    "name": "Noveria Yeti",
    "picture": "Ice_Yeti_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "16030": {
    "id": "16030",
    "name": "Noveria Hulk",
    "picture": "Ice_Yeti_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "26030": {
    "id": "26030",
    "name": "Noveria Abomination",
    "picture": "Ice_Yeti_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "6031": {
    "id": "6031",
    "name": "Iceblood Assassin",
    "picture": "Snow_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "16031": {
    "id": "16031",
    "name": "Iceblood Cutthroat",
    "picture": "Snow_Assassin_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "26031": {
    "id": "26031",
    "name": "Iceblood Rogue",
    "picture": "Snow_Assassin_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 7,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "7000": {
    "id": "7000",
    "name": "Treant King",
    "picture": "Treant_King_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "17000": {
    "id": "17000",
    "name": "Treant Edict",
    "picture": "Treant_King_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "27000": {
    "id": "27000",
    "name": "Treant Dictate",
    "picture": "Treant_King_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 29,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "7001": {
    "id": "7001",
    "name": "Hekaton",
    "picture": "Colossal_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "17001": {
    "id": "17001",
    "name": "Hekaton, Son of Earth",
    "picture": "Colossal_Beast_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "27001": {
    "id": "27001",
    "name": "Hekaton, Sky Scraper",
    "picture": "Colossal_Beast_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "7002": {
    "id": "7002",
    "name": "Cerberus",
    "picture": "Cerberus_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "17002": {
    "id": "17002",
    "name": "Cerberus, the Sentry",
    "picture": "Cerberus_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "27002": {
    "id": "27002",
    "name": "Cerberus, the Gate",
    "picture": "Cerberus_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
    }
  },
  "7003": {
    "id": "7003",
    "name": "Kraken",
    "picture": "Kraken_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "17003": {
    "id": "17003",
    "name": "Kraken of Depths",
    "picture": "Kraken_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "health": 25,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "27003": {
    "id": "27003",
    "name": "Kraken of Fears",
    "picture": "Kraken_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 26,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "7004": {
    "id": "7004",
    "name": "Ice Golem",
    "picture": "Ice_Golem_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17004": {
    "id": "17004",
    "name": "Frost Golem",
    "picture": "Ice_Golem_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "27004": {
    "id": "27004",
    "name": "Coldbite Golem",
    "picture": "Ice_Golem_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "7005": {
    "id": "7005",
    "name": "Tsunamari",
    "picture": "Water_Manipulator_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "17005": {
    "id": "17005",
    "name": "Mentor Tsunamari",
    "picture": "Water_Manipulator_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "27005": {
    "id": "27005",
    "name": "Sage Tsunamari",
    "picture": "Water_Manipulator_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "7006": {
    "id": "7006",
    "name": "Treant Sapling",
    "picture": "Treant_Sapling_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 2,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17006": {
    "id": "17006",
    "name": "Treepalm Sapling",
    "picture": "Treant_Sapling_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "27006": {
    "id": "27006",
    "name": "Treefist Sapling",
    "picture": "Treant_Sapling_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "7007": {
    "id": "7007",
    "name": "Water Serpent",
    "picture": "Water_Serpent_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17007": {
    "id": "17007",
    "name": "Lake Serpent",
    "picture": "Water_Serpent_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "27007": {
    "id": "27007",
    "name": "Sea Serpent",
    "picture": "Water_Serpent_C",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "7008": {
    "id": "7008",
    "name": "Rock Dragon",
    "picture": "Rock_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17008": {
    "id": "17008",
    "name": "Bedrock Dragon",
    "picture": "Rock_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "27008": {
    "id": "27008",
    "name": "Mountain Dragon",
    "picture": "Rock_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "9",
        "z": 9,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 5,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "6": {
        "health": 26,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 6,
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "7009": {
    "id": "7009",
    "name": "Rhino Beast",
    "picture": "Rhino_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 9,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "17009": {
    "id": "17009",
    "name": "Rhino Brute",
    "picture": "Rhino_Beast_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "27009": {
    "id": "27009",
    "name": "Rhino Savage",
    "picture": "Rhino_Beast_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "7010": {
    "id": "7010",
    "name": "Honeycomb Dragon",
    "picture": "Honeycomb_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "17010": {
    "id": "17010",
    "name": "Toxichive Dragon",
    "picture": "Honeycomb_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "27010": {
    "id": "27010",
    "name": "Deadlyhive Dragon",
    "picture": "Honeycomb_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "7011": {
    "id": "7011",
    "name": "Wolf Girl",
    "picture": "Wolf_Girl_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "17011": {
    "id": "17011",
    "name": "Wolf Matriarch",
    "picture": "Wolf_Girl_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "27011": {
    "id": "27011",
    "name": "Wolf Queen",
    "picture": "Wolf_Girl_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "7012": {
    "id": "7012",
    "name": "Life Drake",
    "picture": "Life_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 2,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 11,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "17012": {
    "id": "17012",
    "name": "LifeLink Drake",
    "picture": "Life_Drake_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "27012": {
    "id": "27012",
    "name": "LifeBlood Drake",
    "picture": "Life_Drake_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "7013": {
    "id": "7013",
    "name": "Gold Elemental",
    "picture": "Gold_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
    }
  },
  "17013": {
    "id": "17013",
    "name": "Gold Incarnate",
    "picture": "Gold_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 3,
          },
        ],
      },
    }
  },
  "27013": {
    "id": "27013",
    "name": "Avatar of Gold",
    "picture": "Gold_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 21,
    "cost": 3,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "armored",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "armored",
            "x": 4,
          },
        ],
      },
    }
  },
  "7014": {
    "id": "7014",
    "name": "Genbu",
    "picture": "Turtle_Island_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 18,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 1,
          },
        ],
      },
    }
  },
  "17014": {
    "id": "17014",
    "name": "Genbu, the Garrison",
    "picture": "Turtle_Island_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 23,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 2,
          },
        ],
      },
    }
  },
  "27014": {
    "id": "27014",
    "name": "Genbu, the Stronghold",
    "picture": "Turtle_Island_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "evade",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "attack": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "evade",
            "x": 3,
          },
        ],
      },
    }
  },
  "7015": {
    "id": "7015",
    "name": "Bog Aberration",
    "picture": "Swamp_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "17015": {
    "id": "17015",
    "name": "Marsh Aberration",
    "picture": "Swamp_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
    }
  },
  "27015": {
    "id": "27015",
    "name": "Swamp Aberration",
    "picture": "Swamp_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "enfeeble",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
        ],
      },
    }
  },
  "7016": {
    "id": "7016",
    "name": "Webfist Shaman",
    "picture": "Frog_Shaman_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "17016": {
    "id": "17016",
    "name": "Glowfist Shaman",
    "picture": "Frog_Shaman_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "27016": {
    "id": "27016",
    "name": "Pondfist Shaman",
    "picture": "Frog_Shaman_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "4",
        "z": 4,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "4",
            "z": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "7017": {
    "id": "7017",
    "name": "Coral Elemental",
    "picture": "Coral_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "17017": {
    "id": "17017",
    "name": "Coral Ambusher",
    "picture": "Coral_Elemental_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "27017": {
    "id": "27017",
    "name": "Coral Lurker",
    "picture": "Coral_Elemental_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "7018": {
    "id": "7018",
    "name": "Frog Emperor",
    "picture": "Emperor_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "17018": {
    "id": "17018",
    "name": "Grand Frog Emperor",
    "picture": "Emperor_Frog_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "27018": {
    "id": "27018",
    "name": "Supreme Frog Emperor",
    "picture": "Emperor_Frog_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 4,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "7019": {
    "id": "7019",
    "name": "Lady of the Swamp",
    "picture": "Lady_of_the_Swamp_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "17019": {
    "id": "17019",
    "name": "Duchess of the Swamp",
    "picture": "Lady_of_the_Swamp_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "27019": {
    "id": "27019",
    "name": "Queen of the Swamp",
    "picture": "Lady_of_the_Swamp_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 5,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 5,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 6,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "7020": {
    "id": "7020",
    "name": "Trapper Frog",
    "picture": "Huntress_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "17020": {
    "id": "17020",
    "name": "Stalker Frog",
    "picture": "Huntress_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "27020": {
    "id": "27020",
    "name": "Huntress Frog",
    "picture": "Huntress_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 6,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "7021": {
    "id": "7021",
    "name": "Shadow Elemental",
    "picture": "Shadow_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "17021": {
    "id": "17021",
    "name": "Gloom Elemental",
    "picture": "Shadow_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "27021": {
    "id": "27021",
    "name": "Darkness Elemental",
    "picture": "Shadow_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "5",
        "z": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "5",
            "z": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "7022": {
    "id": "7022",
    "name": "Beetle Tamer",
    "picture": "Beetle_Frog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "17022": {
    "id": "17022",
    "name": "Beetle Breaker",
    "picture": "Beetle_Frog_A",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "fervor",
            "x": 1,
            "y": "4",
            "z": 4,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "4",
            "z": 4,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
    }
  },
  "27022": {
    "id": "27022",
    "name": "Beetle Enchanter",
    "picture": "Beetle_Frog_B",
    "rarity": "2",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "4",
        "z": 4,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "4",
            "z": 4,
          },
          {
            "id": "leech",
            "x": 1,
          },
        ],
      },
    }
  },
  "7023": {
    "id": "7023",
    "name": "Zolmosh the Fist",
    "picture": "Earthquake_Hammer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "17023": {
    "id": "17023",
    "name": "Zolmosh the Mace",
    "picture": "Earthquake_Hammer_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "27023": {
    "id": "27023",
    "name": "Zolmosh the Sledge",
    "picture": "Earthquake_Hammer_C",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 21,
    "cost": 2,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "7024": {
    "id": "7024",
    "name": "Woolmane Dragon ",
    "picture": "Wooly_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 7,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "17024": {
    "id": "17024",
    "name": "Finemane Dragon",
    "picture": "Wooly_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 7,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "27024": {
    "id": "27024",
    "name": "Grandmane Dragon",
    "picture": "Wooly_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 8,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "7025": {
    "id": "7025",
    "name": "Webclaw Dragon",
    "picture": "Water_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "17025": {
    "id": "17025",
    "name": "Webfang Dragon",
    "picture": "Water_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "27025": {
    "id": "27025",
    "name": "Webtalon Dragon",
    "picture": "Water_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 7,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
        "z": 9,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "7026": {
    "id": "7026",
    "name": "Frostjaw",
    "picture": "Ice_Giant_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 14,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 18,
        "skill": [],
      },
    }
  },
  "17026": {
    "id": "17026",
    "name": "Frostjaw Giant",
    "picture": "Ice_Giant_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "27026": {
    "id": "27026",
    "name": "Hulking Frostjaw",
    "picture": "Ice_Giant_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 9,
    "health": 23,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 10,
        "skill": [],
      },
    }
  },
  "7027": {
    "id": "7027",
    "name": "Kitsune",
    "picture": "Mystical_Fox_Spirit_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
    }
  },
  "17027": {
    "id": "17027",
    "name": "Kitsune Yosei",
    "picture": "Mystical_Fox_Spirit_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "27027": {
    "id": "27027",
    "name": "Kitsune Seishin",
    "picture": "Mystical_Fox_Spirit_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
    }
  },
  "7028": {
    "id": "7028",
    "name": "Frozen Tide",
    "picture": "Frozen_Tide_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "health": 20,
        "skill": [],
      },
    }
  },
  "17028": {
    "id": "17028",
    "name": "Frozen Wave",
    "picture": "Frozen_Tide_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "27028": {
    "id": "27028",
    "name": "Frozen Torrent",
    "picture": "Frozen_Tide_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 25,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "7029": {
    "id": "7029",
    "name": "Owl Griffin",
    "picture": "Owl_Leopard_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "17029": {
    "id": "17029",
    "name": "Night Griffin",
    "picture": "Owl_Leopard_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "27029": {
    "id": "27029",
    "name": "Blutorch Griffin",
    "picture": "Owl_Leopard_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "7030": {
    "id": "7030",
    "name": "Arctic Ambusher",
    "picture": "Penguin_Warrior_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "17030": {
    "id": "17030",
    "name": "Arctic Trooper",
    "picture": "Penguin_Warrior_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "27030": {
    "id": "27030",
    "name": "Arctic Warrior",
    "picture": "Penguin_Warrior_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "7031": {
    "id": "7031",
    "name": "Saberjaw Elite",
    "picture": "Saber_Tooth_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 8,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [],
      },
    }
  },
  "17031": {
    "id": "17031",
    "name": "Saberjaw Veteran",
    "picture": "Saber_Tooth_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 9,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 10,
        "skill": [],
      },
      "6": {
        "health": 17,
        "skill": [],
      },
    }
  },
  "27031": {
    "id": "27031",
    "name": "Saberjaw Magus",
    "picture": "Saber_Tooth_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 10,
    "health": 17,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "7032": {
    "id": "7032",
    "name": "Nidhogg",
    "picture": "Elk_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 9,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "attack": 10,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "17032": {
    "id": "17032",
    "name": "Timber Nidhogg",
    "picture": "Elk_Dragon_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 10,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "attack": 11,
        "health": 28,
        "skill": [],
      },
      "4": {
        "health": 29,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 31,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "27032": {
    "id": "27032",
    "name": "Sylvan Nidhogg",
    "picture": "Elk_Dragon_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 11,
    "health": 32,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 12,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "8000": {
    "id": "8000",
    "name": "Frostbite Giant",
    "picture": "Ice_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 21,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "18000": {
    "id": "18000",
    "name": "Frostbite Giant",
    "picture": "Ice_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 34,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 35,
        "skill": [],
      },
    }
  },
  "28000": {
    "id": "28000",
    "name": "Frostbite Giant",
    "picture": "Ice_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 37,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 44,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "8001": {
    "id": "8001",
    "name": "Frostbite Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 9,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 8,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
      "6": {
        "health": 11,
        "skill": [
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "18001": {
    "id": "18001",
    "name": "Frostbite Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "28001": {
    "id": "28001",
    "name": "Frostbite Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 16,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "8002": {
    "id": "8002",
    "name": "Frostbite Skeleton",
    "picture": "Skeleton_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 4,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 5,
        "health": 11,
        "skill": [],
      },
    }
  },
  "18002": {
    "id": "18002",
    "name": "Frostbite Skeleton",
    "picture": "Skeleton_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 17,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "28002": {
    "id": "28002",
    "name": "Frostbite Skeleton",
    "picture": "Skeleton_Giant_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "7",
    "attack": 6,
    "health": 18,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "8003": {
    "id": "8003",
    "name": "Frostbite Dragon",
    "picture": "Frost_Bite_A",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 4,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "18003": {
    "id": "18003",
    "name": "Frostbite Dragon",
    "picture": "Frost_Bite_A",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 19,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "28003": {
    "id": "28003",
    "name": "Frostbite Dragon",
    "picture": "Frost_Bite_A",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 22,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "8004": {
    "id": "8004",
    "name": "Frostbite Serpent",
    "picture": "Water_Serpent_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "18004": {
    "id": "18004",
    "name": "Frostbite Serpent",
    "picture": "Water_Serpent_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "28004": {
    "id": "28004",
    "name": "Frostbite Serpent",
    "picture": "Water_Serpent_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 28,
    "cost": 3,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
        "z": 9,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "3": {
        "health": 31,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
            "z": 9,
          },
          {
            "id": "flurry",
            "c": 1,
          },
        ],
      },
    }
  },
  "8005": {
    "id": "8005",
    "name": "Atlas' Shaman",
    "picture": "Frog_Shaman_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "18005": {
    "id": "18005",
    "name": "Atlas' Shaman",
    "picture": "Frog_Shaman_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 7,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "28005": {
    "id": "28005",
    "name": "Atlas' Shaman",
    "picture": "Frog_Shaman_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 8,
    "health": 36,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 5,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 9,
        "health": 39,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 6,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 7,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 8,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "8006": {
    "id": "8006",
    "name": "Atlas' Dragon",
    "picture": "Dragon_Of_Life_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 6,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 26,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "18006": {
    "id": "18006",
    "name": "Atlas' Dragon",
    "picture": "Dragon_Of_Life_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 26,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "health": 27,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 29,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 10,
        "health": 31,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "28006": {
    "id": "28006",
    "name": "Atlas' Dragon",
    "picture": "Dragon_Of_Life_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 11,
    "health": 32,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 3,
      },
      {
        "id": "armored",
        "x": 5,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [
          {
            "id": "evade",
            "x": 3,
          },
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "evade",
            "x": 4,
          },
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 12,
        "health": 47,
        "skill": [
          {
            "id": "evade",
            "x": 4,
          },
          {
            "id": "armored",
            "x": 7,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "evade",
            "x": 5,
          },
          {
            "id": "armored",
            "x": 8,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 13,
        "skill": [
          {
            "id": "evade",
            "x": 5,
          },
          {
            "id": "armored",
            "x": 9,
          },
          {
            "id": "rally",
            "x": 9,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "8007": {
    "id": "8007",
    "name": "Solaron's Cyclone",
    "picture": "Cloud_Elemental_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
    }
  },
  "18007": {
    "id": "18007",
    "name": "Solaron's Cyclone",
    "picture": "Cloud_Elemental_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "28007": {
    "id": "28007",
    "name": "Solaron's Cyclone",
    "picture": "Cloud_Elemental_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 17,
    "cost": 1,
    "skill": [
      {
        "id": "protect",
        "x": 6,
        "y": "1",
        "z": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "protect",
            "x": 7,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 6,
        "health": 19,
        "skill": [
          {
            "id": "protect",
            "x": 7,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "protect",
            "x": 7,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "protect",
            "x": 7,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "protect",
            "x": 8,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "8008": {
    "id": "8008",
    "name": "Solaron's Sentinel",
    "picture": "Seraph_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "18008": {
    "id": "18008",
    "name": "Solaron's Sentinel",
    "picture": "Seraph_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 20,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "28008": {
    "id": "28008",
    "name": "Solaron's Sentinel",
    "picture": "Seraph_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "1",
    "attack": 7,
    "health": 29,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 4,
        "y": "1",
        "z": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 6,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "8009": {
    "id": "8009",
    "name": "Vulcanos' Obsidian",
    "picture": "Molten_Dragon_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 4,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 13,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 17,
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 7,
        "health": 18,
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "18009": {
    "id": "18009",
    "name": "Vulcanos' Obsidian",
    "picture": "Molten_Dragon_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 7,
    "health": 15,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 2,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "fervor",
            "x": 2,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "28009": {
    "id": "28009",
    "name": "Vulcanos' Obsidian",
    "picture": "Molten_Dragon_B",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 8,
    "health": 23,
    "cost": 1,
    "skill": [
      {
        "id": "fervor",
        "x": 3,
        "y": "2",
        "z": 2,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "fervor",
            "x": 3,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "fervor",
            "x": 4,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "fervor",
            "x": 5,
            "y": "2",
            "z": 2,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 7,
          },
        ],
      },
    }
  },
  "8010": {
    "id": "8010",
    "name": "Vulcanos' Skeleton",
    "picture": "Flaming_Skeleton_Warrior_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 8,
    "cost": 0,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 14,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 16,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "18010": {
    "id": "18010",
    "name": "Vulcanos' Skeleton",
    "picture": "Flaming_Skeleton_Warrior_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 11,
    "cost": 0,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "28010": {
    "id": "28010",
    "name": "Vulcanos' Skeleton",
    "picture": "Flaming_Skeleton_Warrior_C",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 6,
    "health": 17,
    "cost": 0,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 8,
          },
        ],
      },
    }
  },
  "11000": {
    "id": "11000",
    "name": "Stormcloud Pegasus",
    "picture": "Pegasus_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 7,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "21000": {
    "id": "21000",
    "name": "Astral Pegasus",
    "picture": "Pegasus_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 9,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "11001": {
    "id": "11001",
    "name": "Sky Knight",
    "picture": "Angel_Knight_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
    }
  },
  "21001": {
    "id": "21001",
    "name": "Luminous Knight",
    "picture": "Angel_Knight_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "11002": {
    "id": "11002",
    "name": "Tornado Elemental",
    "picture": "Cloud_Elemental_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "21002": {
    "id": "21002",
    "name": "Cyclone Elemental",
    "picture": "Cloud_Elemental_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "11003": {
    "id": "11003",
    "name": "Purified Kestral",
    "picture": "Kestral_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "21003": {
    "id": "21003",
    "name": "Spirit Kestral",
    "picture": "Kestral_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "11004": {
    "id": "11004",
    "name": "Wind Spirit",
    "picture": "Wind_Spirit_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
    }
  },
  "21004": {
    "id": "21004",
    "name": "Wind Soul",
    "picture": "Wind_Spirit_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
    }
  },
  "11005": {
    "id": "11005",
    "name": "Angelic Bruiser",
    "picture": "Warrior_Angel_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "21005": {
    "id": "21005",
    "name": "Angelic Warrior",
    "picture": "Warrior_Angel_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
    }
  },
  "11006": {
    "id": "11006",
    "name": "Irate Soul Wisp",
    "picture": "Light_Wisp_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
    }
  },
  "21006": {
    "id": "21006",
    "name": "Enraged Soul Wisp",
    "picture": "Light_Wisp_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 1,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "11007": {
    "id": "11007",
    "name": "Fox Charmer",
    "picture": "Fox_Trickster_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "21007": {
    "id": "21007",
    "name": "Fox Conjurer",
    "picture": "Fox_Trickster_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "11010": {
    "id": "11010",
    "name": "Thunder Elemental",
    "picture": "Lightning_Elemental_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 1,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "21010": {
    "id": "21010",
    "name": "Bolt Elemental",
    "picture": "Lightning_Elemental_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "11011": {
    "id": "11011",
    "name": "Archive Guardian",
    "picture": "Living_Heiroglyphic_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 12,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
    }
  },
  "21011": {
    "id": "21011",
    "name": "Archive Curator",
    "picture": "Living_Heiroglyphic_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11012": {
    "id": "11012",
    "name": "Form of Clouds",
    "picture": "Sylph_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "21012": {
    "id": "21012",
    "name": "Avatar of Clouds",
    "picture": "Sylph_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "5",
    "attack": 2,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "11014": {
    "id": "11014",
    "name": "Veteran Cherub",
    "picture": "Cherub_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "21014": {
    "id": "21014",
    "name": "Wartorn Cherub",
    "picture": "Cherub_C_02",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 2,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "11015": {
    "id": "11015",
    "name": "Windfrog Gale",
    "picture": "Wind_Frog_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "21015": {
    "id": "21015",
    "name": "Windfrog Aloft",
    "picture": "Wind_Frog_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "11017": {
    "id": "11017",
    "name": "High Judgment",
    "picture": "Judgement_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "21017": {
    "id": "21017",
    "name": "Final Judgment",
    "picture": "Judgement_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "11018": {
    "id": "11018",
    "name": "Iron Eagle",
    "picture": "Armored_Eagle_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 9,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "21018": {
    "id": "21018",
    "name": "Steel Eagle",
    "picture": "Armored_Eagle_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11019": {
    "id": "11019",
    "name": "Devote Oracle",
    "picture": "Devote_Oracle_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "21019": {
    "id": "21019",
    "name": "Ascended Oracle",
    "picture": "Devote_Oracle_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "11025": {
    "id": "11025",
    "name": "Lightsworn Archer",
    "picture": "Young_Angel_Archer_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "21025": {
    "id": "21025",
    "name": "Lightguard Archer",
    "picture": "Young_Angel_Archer_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "11026": {
    "id": "11026",
    "name": "Glass Goliath",
    "picture": "Glass_Colossuss_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "21026": {
    "id": "21026",
    "name": "Glass Titan",
    "picture": "Glass_Colossuss_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 8,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "11027": {
    "id": "11027",
    "name": "Spearhunter Griffin",
    "picture": "Griffin_Knight_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
    }
  },
  "21027": {
    "id": "21027",
    "name": "Castlerock Griffin",
    "picture": "Griffin_Knight_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "11028": {
    "id": "11028",
    "name": "Lilypad Leaper",
    "picture": "Frog_Hero_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 1,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "21028": {
    "id": "21028",
    "name": "Ribbit Wayfarer",
    "picture": "Frog_Hero_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "4",
    "attack": 2,
    "health": 13,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "11029": {
    "id": "11029",
    "name": "Elemental Seer",
    "picture": "Master_Of_Elements_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "21029": {
    "id": "21029",
    "name": "Master of Elements",
    "picture": "Master_Of_Elements_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "z": 5,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "z": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "11030": {
    "id": "11030",
    "name": "Ardent Paladin",
    "picture": "Paladin_Angel_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 18,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "21030": {
    "id": "21030",
    "name": "Radiant Paladin",
    "picture": "Paladin_Angel_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 5,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "1",
        "z": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "11041": {
    "id": "11041",
    "name": "Retribution Angel",
    "picture": "Avenging_Angel_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "21041": {
    "id": "21041",
    "name": "Vindication Angel",
    "picture": "Avenging_Angel_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "11300": {
    "id": "11300",
    "name": "Skeleton Swordsman",
    "picture": "Skeleton_Warrior_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 2,
    "health": 4,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "21300": {
    "id": "21300",
    "name": "Skeleton Warlord",
    "picture": "Skeleton_Warrior_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 6,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
    }
  },
  "11301": {
    "id": "11301",
    "name": "Fire Spirit",
    "picture": "Flame_Spirit_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "21301": {
    "id": "21301",
    "name": "Blazen Spirit",
    "picture": "Flame_Spirit_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "11302": {
    "id": "11302",
    "name": "Flicker Imp",
    "picture": "Phase_Imp_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 6,
    "cost": 2,
    "skill": [
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "21302": {
    "id": "21302",
    "name": "Dimension Imp",
    "picture": "Phase_Imp_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11303": {
    "id": "11303",
    "name": "Unearthed Brute",
    "picture": "Undead_Brute_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "21303": {
    "id": "21303",
    "name": "Risen Brute",
    "picture": "Undead_Brute_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "11304": {
    "id": "11304",
    "name": "Goblin Scoundrel",
    "picture": "Goblin_Rogue_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 2,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "21304": {
    "id": "21304",
    "name": "Goblin Charlatan",
    "picture": "Goblin_Rogue_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 3,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "11305": {
    "id": "11305",
    "name": "Lavamolten Elemental",
    "picture": "Molten_Flame_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 8,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "21305": {
    "id": "21305",
    "name": "Igneous Elemental",
    "picture": "Molten_Flame_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "11306": {
    "id": "11306",
    "name": "Lava Pincer",
    "picture": "Lava_Crab_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 5,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "21306": {
    "id": "21306",
    "name": "Lava Gripper",
    "picture": "Lava_Crab_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 6,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "11307": {
    "id": "11307",
    "name": "Spiked Rakken",
    "picture": "Horned_Lizard_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "21307": {
    "id": "21307",
    "name": "Thorned Rakken",
    "picture": "Horned_Lizard_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 2,
          },
        ],
      },
    }
  },
  "11311": {
    "id": "11311",
    "name": "Hotiron Skeleton",
    "picture": "Flaming_Skeleton_Warrior_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "21311": {
    "id": "21311",
    "name": "Smelted Skeleton",
    "picture": "Flaming_Skeleton_Warrior_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "11312": {
    "id": "11312",
    "name": "Edge Demon",
    "picture": "Scythe_Demon_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "21312": {
    "id": "21312",
    "name": "Cleaver Demon",
    "picture": "Scythe_Demon_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "11313": {
    "id": "11313",
    "name": "Ashfrog",
    "picture": "Hellfrog_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 2,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
    }
  },
  "21313": {
    "id": "21313",
    "name": "Hellfrog",
    "picture": "Hellfrog_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 3,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "11314": {
    "id": "11314",
    "name": "Demon Hound",
    "picture": "Skeleton_Hound_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "21314": {
    "id": "21314",
    "name": "Executioner Hound",
    "picture": "Skeleton_Hound_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11315": {
    "id": "11315",
    "name": "Nixfire Elemental",
    "picture": "Void_Elemental_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21315": {
    "id": "21315",
    "name": "Nixflame Elemental",
    "picture": "Void_Elemental_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 5,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "11317": {
    "id": "11317",
    "name": "Fire Fiend",
    "picture": "Fire_Imp_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 2,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "health": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "21317": {
    "id": "21317",
    "name": "Fire Devil",
    "picture": "Fire_Imp_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 4,
    "cost": 0,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "11318": {
    "id": "11318",
    "name": "Anvil Lava Slug",
    "picture": "Lava_Slug_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "21318": {
    "id": "21318",
    "name": "Forged Lava Slug",
    "picture": "Lava_Slug_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "11319": {
    "id": "11319",
    "name": "Redclaw Wraith",
    "picture": "Wraith_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "21319": {
    "id": "21319",
    "name": "Bloodclaw Wraith",
    "picture": "Wraith_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11325": {
    "id": "11325",
    "name": "Chaos Swell",
    "picture": "Storm_Elemental_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "21325": {
    "id": "21325",
    "name": "Chaos Tempest",
    "picture": "Storm_Elemental_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 1,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "11326": {
    "id": "11326",
    "name": "Titan of Scorch",
    "picture": "Fire_Titan_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 19,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "21326": {
    "id": "21326",
    "name": "Titan of Inferno",
    "picture": "Fire_Titan_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 22,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "11327": {
    "id": "11327",
    "name": "Discordant Angel",
    "picture": "Fallen_Angel_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 5,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "21327": {
    "id": "21327",
    "name": "Bedlam Angel",
    "picture": "Fallen_Angel_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "6",
    "attack": 6,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "11328": {
    "id": "11328",
    "name": "Toxin Bullfrog",
    "picture": "Poison_Frog_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 4,
    "health": 12,
    "cost": 2,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "21328": {
    "id": "21328",
    "name": "Noxious Bullfrog",
    "picture": "Poison_Frog_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "4",
    "attack": 5,
    "health": 14,
    "cost": 2,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "poison",
            "x": 4,
          },
        ],
      },
    }
  },
  "11329": {
    "id": "11329",
    "name": "Shade Assassin",
    "picture": "Invisible_Assassin_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 1,
    "cost": 0,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 2,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
    }
  },
  "21329": {
    "id": "21329",
    "name": "Invisible Assassin",
    "picture": "Invisible_Assassin_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 4,
    "health": 3,
    "cost": 0,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 5,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 6,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11330": {
    "id": "11330",
    "name": "Purging Locusts",
    "picture": "Plague_of_Fire_Locusts_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 11,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
    }
  },
  "21330": {
    "id": "21330",
    "name": "Plague Locusts",
    "picture": "Plague_of_Fire_Locusts_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 14,
    "cost": 1,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "11340": {
    "id": "11340",
    "name": "Blazen Dragon",
    "picture": "Fire_Dragon_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "21340": {
    "id": "21340",
    "name": "Blazerage Dragon",
    "picture": "Fire_Dragon_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "burn",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
        ],
      },
    }
  },
  "11341": {
    "id": "11341",
    "name": "Hemorrhage Demon",
    "picture": "Blood_Demon_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "21341": {
    "id": "21341",
    "name": "Sanguine Demon",
    "picture": "Blood_Demon_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 6,
    "health": 16,
    "cost": 2,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "11600": {
    "id": "11600",
    "name": "Leavefall Fairy",
    "picture": "Fairy_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 7,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "21600": {
    "id": "21600",
    "name": "Canopyrise Fairy",
    "picture": "Fairy_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 9,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "11601": {
    "id": "11601",
    "name": "Forest Golem",
    "picture": "Moss_Golem_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
    }
  },
  "21601": {
    "id": "21601",
    "name": "Ancient Golem",
    "picture": "Moss_Golem_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 9,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "11602": {
    "id": "11602",
    "name": "Frost Wolf",
    "picture": "Dire_Wolf_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "21602": {
    "id": "21602",
    "name": "Winter Wolf",
    "picture": "Dire_Wolf_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11603": {
    "id": "11603",
    "name": "Mermaid Sorceress",
    "picture": "Mermaid_Mage_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 8,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
    }
  },
  "21603": {
    "id": "21603",
    "name": "Mermaid Battlemage",
    "picture": "Mermaid_Mage_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 2,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
    }
  },
  "11604": {
    "id": "11604",
    "name": "Toad Metalwarrior",
    "picture": "Frog_Warrior_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 4,
    "health": 3,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
    }
  },
  "21604": {
    "id": "21604",
    "name": "Toad Steelwarrior",
    "picture": "Frog_Warrior_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 5,
    "health": 4,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
    }
  },
  "11605": {
    "id": "11605",
    "name": "Flightmage Squirrel",
    "picture": "Air_Nymph_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "21605": {
    "id": "21605",
    "name": "Flightwizard Squirrel",
    "picture": "Air_Nymph_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "11606": {
    "id": "11606",
    "name": "Angler Fiend",
    "picture": "Angler_Fish_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 9,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "21606": {
    "id": "21606",
    "name": "Angler Tyrant",
    "picture": "Angler_Fish_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11607": {
    "id": "11607",
    "name": "Mounted Turtle",
    "picture": "Turtle_Tamer_B",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 14,
    "cost": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
        ],
      },
    }
  },
  "21607": {
    "id": "21607",
    "name": "Battle Turtle",
    "picture": "Turtle_Tamer_C",
    "rarity": "1",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 2,
          },
        ],
      },
    }
  },
  "11610": {
    "id": "11610",
    "name": "Swiftfoot Ranger",
    "picture": "Ranger_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 6,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 2,
          },
        ],
      },
    }
  },
  "21610": {
    "id": "21610",
    "name": "Duoshot Ranger",
    "picture": "Ranger_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 8,
    "cost": 1,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "11613": {
    "id": "11613",
    "name": "Corrosive Spider",
    "picture": "Giant_Spider_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "poison",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
    }
  },
  "21613": {
    "id": "21613",
    "name": "Caustic Spider",
    "picture": "Giant_Spider_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "11614": {
    "id": "11614",
    "name": "Shieldstone Druid",
    "picture": "Druid_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "21614": {
    "id": "21614",
    "name": "Aegistone Druid",
    "picture": "Druid_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 12,
    "cost": 3,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "11615": {
    "id": "11615",
    "name": "Runeplate Panther",
    "picture": "Rune_Panther_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "21615": {
    "id": "21615",
    "name": "Runelock Panther",
    "picture": "Rune_Panther_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "11616": {
    "id": "11616",
    "name": "Werewarg Hunter",
    "picture": "Werewarg_Alpha_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 11,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "21616": {
    "id": "21616",
    "name": "Werewarg Alpha",
    "picture": "Werewarg_Alpha_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 14,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "11617": {
    "id": "11617",
    "name": "Wave Elemental",
    "picture": "Water_Elemental_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 3,
    "health": 12,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "21617": {
    "id": "21617",
    "name": "Tide Elemental",
    "picture": "Water_Elemental_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 4,
    "health": 14,
    "cost": 4,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "11618": {
    "id": "11618",
    "name": "Frog Patrol",
    "picture": "Frog_Scout_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 7,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "21618": {
    "id": "21618",
    "name": "Frog Outrunner",
    "picture": "Frog_Scout_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 10,
    "cost": 1,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "4",
        "z": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "4",
            "z": 4,
          },
        ],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "11619": {
    "id": "11619",
    "name": "Hill Elemental",
    "picture": "Earth_Elemental_B",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 13,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "poison",
            "x": 1,
          },
        ],
      },
    }
  },
  "21619": {
    "id": "21619",
    "name": "Crag Elemental",
    "picture": "Earth_Elemental_C",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 5,
    "health": 15,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "11625": {
    "id": "11625",
    "name": "Mighty Clawkin",
    "picture": "Bear_Warrior_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "21625": {
    "id": "21625",
    "name": "Clawkin Elite",
    "picture": "Bear_Warrior_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 15,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "pierce",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "11626": {
    "id": "11626",
    "name": "Olitusker",
    "picture": "Oliphant_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "21626": {
    "id": "21626",
    "name": "Wartusker",
    "picture": "Oliphant_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 29,
    "cost": 4,
    "skill": [
      {
        "id": "protect",
        "x": 4,
        "y": "3",
        "z": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "fervor",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 32,
        "skill": [],
      },
      "5": {
        "health": 33,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "fervor",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
    }
  },
  "11627": {
    "id": "11627",
    "name": "Wizen Sage of Croaks",
    "picture": "Frog_Sage_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 16,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21627": {
    "id": "21627",
    "name": "Great Sage of Croaks",
    "picture": "Frog_Sage_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
    "health": 20,
    "cost": 3,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "4",
        "z": 4,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "z": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "11628": {
    "id": "11628",
    "name": "Mega Garganotos",
    "picture": "Forest_Beast_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 11,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "poison",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
    }
  },
  "21628": {
    "id": "21628",
    "name": "King Garganotos",
    "picture": "Forest_Beast_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 13,
    "cost": 2,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 4,
      },
      {
        "id": "poison",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "poison",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "11629": {
    "id": "11629",
    "name": "Stone Titan",
    "picture": "Rock_Titan_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 7,
    "health": 16,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "21629": {
    "id": "21629",
    "name": "Mountain Titan",
    "picture": "Rock_Titan_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "5",
    "attack": 8,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "11630": {
    "id": "11630",
    "name": "Hulking Squid",
    "picture": "Giant_Squid_B",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 15,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "21630": {
    "id": "21630",
    "name": "Monstrous Squid",
    "picture": "Giant_Squid_C",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 17,
    "cost": 3,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
    }
  },
  "11640": {
    "id": "11640",
    "name": "Entity Dragon",
    "picture": "Dragon_Of_Life_B",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 5,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "21640": {
    "id": "21640",
    "name": "Essence Dragon",
    "picture": "Dragon_Of_Life_C",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "9",
    "attack": 7,
    "health": 25,
    "cost": 4,
    "skill": [
      {
        "id": "evade",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "leech",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "leech",
            "x": 6,
          },
        ],
      },
    }
  },
  "1": {
    "id": "1",
    "name": "Oda, Guardian",
    "picture": "templeguardian",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 8,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "2": {
    "id": "2",
    "name": "Yuriel, Owl Mystic",
    "picture": "owlmystic",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 15,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "3": {
    "id": "3",
    "name": "Samael",
    "picture": "seraph",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "4": {
    "id": "4",
    "name": "Aria, Necromancer",
    "picture": "necromancer",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 8,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "5": {
    "id": "5",
    "name": "Decim, the Firebringer",
    "picture": "flamebender",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 16,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "6": {
    "id": "6",
    "name": "Tarian, Lich Lord",
    "picture": "lichking",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "leech",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 43,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "7": {
    "id": "7",
    "name": "Elyse, Ranger",
    "picture": "elyse",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 8,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "8": {
    "id": "8",
    "name": "Commander Ursurio",
    "picture": "bearcommander",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
        "z": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
    }
  },
  "9": {
    "id": "9",
    "name": "Groc the Hammer",
    "picture": "groc",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 53,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "200": {
    "id": "200",
    "name": "Undead Horde",
    "picture": "skeletonwarrior",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "201": {
    "id": "201",
    "name": "Wyld Wolf",
    "picture": "wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 9,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "202": {
    "id": "202",
    "name": "Elaria Captain",
    "picture": "ranger",
    "rarity": "0",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 8,
    "skill": [],
    "upgrades": {}
  },
  "203": {
    "id": "203",
    "name": "Luminis Angel",
    "picture": "angelknight",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 11,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "204": {
    "id": "204",
    "name": "Will O' Wisp",
    "picture": "NotFound",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 8,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
    }
  },
  "205": {
    "id": "205",
    "name": "Mermaid Augurer",
    "picture": "NotFound",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 12,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [],
      },
    }
  },
  "206": {
    "id": "206",
    "name": "Grim Titan",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 17,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
    }
  },
  "207": {
    "id": "207",
    "name": "Void Assassin",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 16,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 40,
        "skill": [],
      },
    }
  },
  "208": {
    "id": "208",
    "name": "Void Minions",
    "picture": "voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 20,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 40,
        "skill": [],
      },
    }
  },
  "209": {
    "id": "209",
    "name": "Orobas of the Void",
    "picture": "balrog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "210": {
    "id": "210",
    "name": "Lava Crab Gang",
    "picture": "lavacrab",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 13,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
    }
  },
  "211": {
    "id": "211",
    "name": "Wraith Den",
    "picture": "wraithden",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 17,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "weaken",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
    }
  },
  "212": {
    "id": "212",
    "name": "Caverns of Crossing",
    "picture": "cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [],
      },
    }
  },
  "213": {
    "id": "213",
    "name": "Grand Hermit Malchior",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 23,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "rally",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "rally",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "rally",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "rally",
            "all": "1",
          },
        ],
      },
    }
  },
  "214": {
    "id": "214",
    "name": "Tremor Wurm",
    "picture": "tremorwurm",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 23,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 47,
        "skill": [],
      },
    }
  },
  "215": {
    "id": "215",
    "name": "Void Abomination",
    "picture": "void",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 40,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [],
      },
      "3": {
        "health": 50,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 55,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 65,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "216": {
    "id": "216",
    "name": "Trainee Elyse",
    "picture": "elyse",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 2,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "217": {
    "id": "217",
    "name": "Trainee Oda",
    "picture": "templeguardian",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
    }
  },
  "218": {
    "id": "218",
    "name": "Tainted Wolf",
    "picture": "wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 11,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "219": {
    "id": "219",
    "name": "Maniac General",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 11,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "strike",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 29,
        "skill": [],
      },
    }
  },
  "220": {
    "id": "220",
    "name": "Voidlings",
    "picture": "voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "221": {
    "id": "221",
    "name": "Alpha Wisp",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 29,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "z": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "z": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "z": 1,
          },
        ],
      },
    }
  },
  "222": {
    "id": "222",
    "name": "Titan Twins",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 20,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "223": {
    "id": "223",
    "name": "Escaped Angel",
    "picture": "angelknight",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
    }
  },
  "224": {
    "id": "224",
    "name": "Consumed Undead",
    "picture": "skeletonwarrior",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 7,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [],
      },
    }
  },
  "231": {
    "id": "231",
    "name": "Skeletal Army",
    "picture": "skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 17,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
    }
  },
  "225": {
    "id": "225",
    "name": "Wasteland Wolf Pack",
    "picture": "wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 12,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
        ],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
        ],
      },
    }
  },
  "226": {
    "id": "226",
    "name": "Lost Lava Crab",
    "picture": "lavacrab",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 12,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "227": {
    "id": "227",
    "name": "Wasteland Wraiths",
    "picture": "wraithden",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 14,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "leech",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "228": {
    "id": "228",
    "name": "Voidlings",
    "picture": "voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "229": {
    "id": "229",
    "name": "Skeleton Familiar",
    "picture": "skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "attack": 0,
    "health": 17,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "weaken",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "230": {
    "id": "230",
    "name": "Aria, Void Consumed",
    "picture": "necromancer",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "232": {
    "id": "232",
    "name": "Frenzied Dragon",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "burn",
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "233": {
    "id": "233",
    "name": "Orobas, Raging Beast",
    "picture": "balrog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "enfeeble",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "234": {
    "id": "234",
    "name": "Decim, Flame Incarnate",
    "picture": "flamebender",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 18,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "235": {
    "id": "235",
    "name": "Obsidian Claw",
    "picture": "lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 17,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "strike",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "236": {
    "id": "236",
    "name": "Aerie Guardian",
    "picture": "angelknight",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 19,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [],
      },
    }
  },
  "237": {
    "id": "237",
    "name": "Kerlor, Ice Dragon",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 24,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "z": 9,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 10,
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 8,
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "238": {
    "id": "238",
    "name": "Lantern Guardian",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 19,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "239": {
    "id": "239",
    "name": "Groc, Vault Ancient",
    "picture": "groc",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 24,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "240": {
    "id": "240",
    "name": "Molten Crab",
    "picture": "lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 19,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "counter",
          },
        ],
      },
    }
  },
  "241": {
    "id": "241",
    "name": "Gold Monstrosity",
    "picture": "goldelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "z": 5,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "z": 5,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "242": {
    "id": "242",
    "name": "Coral Hunter",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 23,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 56,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "243": {
    "id": "243",
    "name": "Windstorm Avatar",
    "picture": "windstormelemental",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 24,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "c": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 6,
            "c": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "244": {
    "id": "244",
    "name": "Celestial Grotto",
    "picture": "cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 28,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "245": {
    "id": "245",
    "name": "Vault Titan",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "c": 6,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "246": {
    "id": "246",
    "name": "Darkwater Mermaid",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 23,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 44,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
          },
        ],
      },
    }
  },
  "247": {
    "id": "247",
    "name": "Canopy Hunter",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 30,
    "skill": [
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "strike",
          },
        ],
      },
    }
  },
  "248": {
    "id": "248",
    "name": "Swamp Swarm",
    "picture": "cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 26,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
        ],
      },
    }
  },
  "249": {
    "id": "249",
    "name": "Lone Frog Scout",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 32,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
    }
  },
  "250": {
    "id": "250",
    "name": "Tainted Coral Elemental",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 27,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 39,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
      "6": {
        "health": 47,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "251": {
    "id": "251",
    "name": "Guardian  Wurm",
    "picture": "tremorwurm",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 32,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
    }
  },
  "252": {
    "id": "252",
    "name": "Berserk Emperor",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 35,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [],
      },
      "6": {
        "health": 59,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "253": {
    "id": "253",
    "name": "Frostbite",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 30,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 56,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 64,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "5": {
        "health": 72,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "health": 80,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "254": {
    "id": "254",
    "name": "Atlas",
    "picture": "wyldguardian",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 40,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "z": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "z": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 46,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 54,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 63,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 88,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "z": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "z": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "255": {
    "id": "255",
    "name": "Solaron",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 37,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "health": 48,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 59,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "health": 70,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 80,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 89,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "256": {
    "id": "256",
    "name": "Vulcanos",
    "picture": "chaosguardian",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 45,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 53,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 62,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 85,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "257": {
    "id": "257",
    "name": "Golden Lava Lord",
    "picture": "goldelemental",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 52,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "258": {
    "id": "258",
    "name": "Winterback Ape",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 26,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "259": {
    "id": "259",
    "name": "Iceback Dragon",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "attack": 0,
    "health": 43,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 47,
        "skill": [],
      },
      "3": {
        "health": 51,
        "skill": [],
      },
      "4": {
        "health": 57,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 64,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 69,
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "260": {
    "id": "260",
    "name": "Ice Abomination",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 40,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "z": 9,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 64,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 69,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "z": 9,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "261": {
    "id": "261",
    "name": "Coldspirit Wisp",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 25,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
        ],
      },
    }
  },
  "262": {
    "id": "262",
    "name": "Frostwhip Storm",
    "picture": "windstormelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 30,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "263": {
    "id": "263",
    "name": "Snow Assassin",
    "picture": "NotFound",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 27,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "264": {
    "id": "264",
    "name": "Vapor Hunters",
    "picture": "NotFound",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 40,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [],
      },
      "3": {
        "health": 48,
        "skill": [],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 59,
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 65,
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "500": {
    "id": "500",
    "name": "Arcane Dustling",
    "picture": "Dust_Mite",
    "rarity": "0",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 1,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "501": {
    "id": "501",
    "name": "Arcane Ore",
    "picture": "Arcane_Ore",
    "rarity": "3",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "502": {
    "id": "502",
    "name": "Arcane Pumpkin",
    "picture": "Arcane_Pumpkin_C",
    "rarity": "2",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 3,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "health": 5,
        "skill": [],
      },
      "4": {
        "health": 6,
        "skill": [],
      },
    }
  },
  "510": {
    "id": "510",
    "name": "Arcane Chunk",
    "picture": "Arcane_Ore",
    "rarity": "2",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "511": {
    "id": "511",
    "name": "Arcane Ore",
    "picture": "Arcane_Ore",
    "rarity": "3",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "512": {
    "id": "512",
    "name": "Arcane Deposit",
    "picture": "Arcane_Ore",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "601": {
    "id": "601",
    "name": "Castle Tower",
    "picture": "Enemy_Tower_A",
    "rarity": "0",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 2,
        "skill": [],
      },
      "3": {
        "health": 3,
        "skill": [],
      },
      "4": {
        "health": 4,
        "skill": [],
      },
      "5": {
        "health": 5,
        "skill": [],
      },
      "6": {
        "health": 6,
        "skill": [],
      },
      "7": {
        "health": 7,
        "skill": [],
      },
      "8": {
        "health": 8,
        "skill": [],
      },
      "9": {
        "health": 9,
        "skill": [],
      },
      "10": {
        "health": 10,
        "skill": [],
      },
      "11": {
        "health": 11,
        "skill": [],
      },
      "12": {
        "health": 12,
        "skill": [],
      },
      "13": {
        "health": 13,
        "skill": [],
      },
      "14": {
        "health": 14,
        "skill": [],
      },
      "15": {
        "health": 15,
        "skill": [],
      },
    }
  },
  "602": {
    "id": "602",
    "name": "Cannon Tower",
    "picture": "Enemy_Tower_A",
    "rarity": "0",
    "set": "9999",
    "card_type": "2",
    "type": "0",
    "attack": 0,
    "health": 1,
    "cost": 4,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 2,
        "skill": [],
      },
      "3": {
        "health": 3,
        "skill": [],
      },
      "4": {
        "health": 4,
        "skill": [],
      },
      "5": {
        "health": 5,
        "cost": 3,
        "skill": [],
      },
      "6": {
        "health": 6,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "7": {
        "health": 7,
        "skill": [],
      },
      "8": {
        "health": 8,
        "skill": [],
      },
      "9": {
        "health": 9,
        "skill": [],
      },
      "10": {
        "health": 10,
        "cost": 2,
        "skill": [],
      },
      "11": {
        "health": 11,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "12": {
        "health": 12,
        "skill": [],
      },
      "13": {
        "health": 13,
        "skill": [],
      },
      "14": {
        "health": 14,
        "cost": 1,
        "skill": [],
      },
      "15": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
}
}
};
var missions = {
  root: {
    mission: {
      "101": {
        "id": "101",
        "name": "City of Light",
        "commander": "2",
        "deck": [
          "1003",
          "1004",
          "1004",
          "1004",
          "1006",
          "1007",
          "1007",
          "1011",
          "1011",
          "1019",
        ]
      },
      "102": {
        "id": "102",
        "name": "Audience",
        "commander": "2",
        "deck": [
          "1002",
          "1004",
          "1004",
          "1005",
          "1006",
          "1007",
          "1007",
          "1018",
          "1017",
          "1017",
        ]
      },
      "103": {
        "id": "103",
        "name": "Blind Eye",
        "commander": "2",
        "deck": [
          "1002",
          "1004",
          "1004",
          "1005",
          "1005",
          "1006",
          "11006",
          "1018",
          "1017",
          "1017",
        ]
      },
      "104": {
        "id": "104",
        "name": "Rebuke",
        "commander": "3",
        "deck": [
          "1002",
          "1002",
          "1003",
          "1003",
          "1005",
          "11006",
          "1011",
          "1017",
          "1018",
          "1027",
        ]
      },
      "11": {
        "id": "11",
        "name": "One Small Step",
        "commander": "216",
        "deck": [
          "1600",
          "1600",
          "1600",
          "1601",
          "1601",
          "1601",
          "1603",
          "1603",
          "1606",
          "1601",
        ]
      },
      "111": {
        "id": "111",
        "name": "Exile",
        "commander": "2",
        "deck": [
          "1004",
          "1002",
          "1006",
          "1004",
          "1005",
          "1017",
          "1018",
          "1018",
          "1019",
          "1019",
        ]
      },
      "112": {
        "id": "112",
        "name": "Open Fields",
        "commander": "218",
        "deck": [
          "1602",
          "1602",
          "1605",
          "1003",
          "1004",
          "1613",
          "1015",
          "1613",
          "1010",
          "1018",
        ]
      },
      "113": {
        "id": "113",
        "name": "Sickness Spreading",
        "commander": "218",
        "deck": [
          "1602",
          "1602",
          "1605",
          "1003",
          "1004",
          "1015",
          "1613",
          "1613",
          "1010",
          "1018",
        ]
      },
      "114": {
        "id": "114",
        "name": "Border's Edge",
        "commander": "2",
        "deck": [
          "1602",
          "1605",
          "1003",
          "1004",
          "1010",
          "1015",
          "1017",
          "1017",
          "1613",
          "1625",
        ]
      },
      "12": {
        "id": "12",
        "name": "Guardian's Training",
        "commander": "217",
        "deck": [
          "1000",
          "1000",
          "1000",
          "1001",
          "1001",
          "1601",
          "1601",
          "1603",
          "1005",
          "1005",
        ]
      },
      "121": {
        "id": "121",
        "name": "Shelter",
        "commander": "203",
        "deck": [
          "1602",
          "1602",
          "1605",
          "1004",
          "1619",
          "1015",
          "1613",
          "1010",
          "1018",
          "1018",
        ]
      },
      "122": {
        "id": "122",
        "name": "In The Distance",
        "commander": "203",
        "deck": [
          "1602",
          "1602",
          "1304",
          "1004",
          "1313",
          "1314",
          "1314",
          "1613",
          "1010",
          "1018",
        ]
      },
      "123": {
        "id": "123",
        "name": "Something's Off...",
        "commander": "218",
        "deck": [
          "1602",
          "1602",
          "1304",
          "1304",
          "1313",
          "1314",
          "1613",
          "1010",
          "1018",
          "1629",
        ]
      },
      "124": {
        "id": "124",
        "name": "Lightning and Brimstone",
        "commander": "219",
        "deck": [
          "1303",
          "1303",
          "1304",
          "1306",
          "1311",
          "1311",
          "1317",
          "1314",
          "1329",
          "1326",
        ]
      },
      "13": {
        "id": "13",
        "name": "Undead Emerge",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1300",
          "1300",
          "1300",
          "1302",
          "1302",
          "1303",
          "1305",
          "1313",
        ]
      },
      "131": {
        "id": "131",
        "name": "Unfamiliar Lands",
        "commander": "210",
        "deck": [
          "1306",
          "1306",
          "1306",
          "1306",
          "1306",
          "1311",
          "1313",
          "1314",
          "1314",
          "1330",
        ]
      },
      "132": {
        "id": "132",
        "name": "Lava Crab Gang",
        "commander": "210",
        "deck": [
          "1306",
          "1306",
          "1306",
          "1306",
          "1306",
          "1311",
          "1311",
          "1313",
          "1314",
          "1328",
        ]
      },
      "133": {
        "id": "133",
        "name": "Rocks and Lava",
        "commander": "210",
        "deck": [
          "1306",
          "1306",
          "1306",
          "1306",
          "1306",
          "1311",
          "1311",
          "1314",
          "1317",
          "1330",
        ]
      },
      "134": {
        "id": "134",
        "name": "Titans of Fire",
        "commander": "206",
        "deck": [
          "1301",
          "1301",
          "1305",
          "1305",
          "1317",
          "1317",
          "1318",
          "1318",
          "1326",
          "1330",
        ]
      },
      "14": {
        "id": "14",
        "name": "Bury the Dead",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1300",
          "1302",
          "1301",
          "1302",
          "1302",
          "1303",
          "1305",
          "1313",
        ]
      },
      "141": {
        "id": "141",
        "name": "Chaotic... Evil?",
        "commander": "210",
        "deck": [
          "1302",
          "1303",
          "1306",
          "1305",
          "1317",
          "1318",
          "1319",
          "1319",
          "1327",
          "1328",
        ]
      },
      "142": {
        "id": "142",
        "name": "Trust",
        "commander": "210",
        "deck": [
          "1306",
          "1306",
          "1304",
          "1314",
          "1314",
          "1315",
          "1317",
          "1318",
          "1325",
          "1328",
        ]
      },
      "143": {
        "id": "143",
        "name": "Troubling Travels",
        "commander": "231",
        "deck": [
          "1306",
          "1306",
          "1304",
          "1314",
          "1314",
          "1315",
          "1317",
          "1318",
          "1325",
          "1328",
        ]
      },
      "144": {
        "id": "144",
        "name": "Pierce the Siege",
        "commander": "231",
        "deck": [
          "1302",
          "1301",
          "1303",
          "1313",
          "1313",
          "1315",
          "1318",
          "1330",
          "1325",
          "1326",
        ]
      },
      "1500": {
        "id": "1500",
        "name": "The Earth Trembles...",
        "commander": "254",
        "deck": [
          "8005",
          "8005",
          "8005",
          "8006",
          "8006",
          "8006",
          "7018",
          "7014",
          "7014",
          "7009",
          "7009",
          "7002",
          "7001",
          "7001",
          "7008",
        ]
      },
      "1501": {
        "id": "1501",
        "name": "The Land Shatters...",
        "commander": "254",
        "deck": [
          "8005",
          "8005",
          "8006",
          "8006",
          "7018",
          "7014",
          "7014",
          "7009",
          "7009",
          "7002",
          "7002",
          "7001",
          "7001",
          "2013",
          "7008",
        ]
      },
      "1502": {
        "id": "1502",
        "name": "Rising from the Depths...",
        "commander": "254",
        "deck": [
          "8005",
          "8005",
          "8006",
          "7018",
          "7014",
          "7014",
          "7009",
          "7009",
          "7002",
          "7002",
          "7001",
          "7001",
          "2013",
          "7008",
          "7008",
        ]
      },
      "1503": {
        "id": "1503",
        "name": "Atlas, the Ancient",
        "commander": "254",
        "deck": [
          "8005",
          "8006",
          "7018",
          "7018",
          "7014",
          "7014",
          "7009",
          "7009",
          "7002",
          "7002",
          "7001",
          "7001",
          "2013",
          "2013",
          "7008",
        ]
      },
      "1504": {
        "id": "1504",
        "name": "The Wind Stirs...",
        "commander": "255",
        "deck": [
          "8007",
          "8007",
          "8008",
          "8008",
          "5008",
          "5008",
          "2007",
          "2007",
          "5013",
          "5013",
          "5026",
          "5026",
          "5023",
          "5018",
          "1042",
        ]
      },
      "1505": {
        "id": "1505",
        "name": "The Clouds Part...",
        "commander": "255",
        "deck": [
          "8007",
          "8007",
          "8008",
          "8008",
          "8008",
          "5008",
          "5008",
          "2007",
          "2007",
          "5013",
          "5013",
          "5026",
          "5026",
          "5023",
          "5018",
          "1042",
        ]
      },
      "1506": {
        "id": "1506",
        "name": "The Air Chills...",
        "commander": "255",
        "deck": [
          "8007",
          "8008",
          "8008",
          "8008",
          "5008",
          "5008",
          "2007",
          "2007",
          "5013",
          "5026",
          "5026",
          "5023",
          "5018",
          "1042",
          "1042",
          "1042",
        ]
      },
      "1507": {
        "id": "1507",
        "name": "Solaron, The Origin",
        "commander": "255",
        "deck": [
          "8007",
          "8008",
          "5008",
          "5008",
          "2007",
          "2007",
          "5013",
          "5013",
          "5026",
          "5026",
          "5026",
          "5023",
          "5023",
          "5018",
          "1042",
        ]
      },
      "1508": {
        "id": "1508",
        "name": "The Heat Rises...",
        "commander": "256",
        "deck": [
          "8009",
          "8010",
          "1340",
          "1340",
          "2015",
          "6014",
          "6013",
          "6013",
          "6003",
          "6002",
          "2006",
          "6019",
          "6019",
          "6024",
        ]
      },
      "1509": {
        "id": "1509",
        "name": "The Lava Flows...",
        "commander": "256",
        "deck": [
          "8009",
          "8010",
          "8010",
          "8010",
          "1340",
          "1340",
          "2015",
          "6014",
          "6013",
          "6003",
          "6002",
          "2006",
          "6019",
          "6024",
          "6024",
        ]
      },
      "151": {
        "id": "151",
        "name": "Within the Walls",
        "commander": "5",
        "deck": [
          "1302",
          "1306",
          "1305",
          "1315",
          "1315",
          "1318",
          "1319",
          "1319",
          "1325",
          "1328",
        ]
      },
      "1510": {
        "id": "1510",
        "name": "The Volcano Erupts...",
        "commander": "256",
        "deck": [
          "8009",
          "8009",
          "8009",
          "8010",
          "1340",
          "1340",
          "2015",
          "2015",
          "6014",
          "6013",
          "6003",
          "6002",
          "2006",
          "6019",
          "6024",
        ]
      },
      "1511": {
        "id": "1511",
        "name": "Vulcanos",
        "commander": "256",
        "deck": [
          "8009",
          "8009",
          "8009",
          "8009",
          "8010",
          "8010",
          "8010",
          "1340",
          "2015",
          "6013",
          "6002",
          "2006",
          "6019",
          "6024",
        ]
      },
      "152": {
        "id": "152",
        "name": "Decim the Firebringer",
        "commander": "5",
        "deck": [
          "1302",
          "1306",
          "1305",
          "1315",
          "1315",
          "1318",
          "1319",
          "1319",
          "1325",
          "1328",
        ]
      },
      "153": {
        "id": "153",
        "name": "Contention",
        "commander": "206",
        "deck": [
          "1306",
          "1303",
          "1304",
          "1314",
          "1314",
          "1318",
          "1319",
          "1315",
          "1328",
          "1326",
        ]
      },
      "154": {
        "id": "154",
        "name": "Lord of the Undead",
        "commander": "207",
        "deck": [
          "1329",
          "1329",
          "1329",
          "1329",
          "1329",
        ]
      },
      "161": {
        "id": "161",
        "name": "Path to The Void",
        "commander": "231",
        "deck": [
          "1302",
          "1303",
          "1315",
          "1317",
          "1317",
          "1318",
          "1319",
          "1319",
          "1327",
          "1326",
        ]
      },
      "162": {
        "id": "162",
        "name": "River of Fire",
        "commander": "231",
        "deck": [
          "1307",
          "1307",
          "1314",
          "1314",
          "1318",
          "1318",
          "1314",
          "1314",
          "1325",
          "1327",
        ]
      },
      "163": {
        "id": "163",
        "name": "Crossings",
        "commander": "206",
        "deck": [
          "1305",
          "1307",
          "1312",
          "1312",
          "1314",
          "1315",
          "1319",
          "1319",
          "1325",
          "1328",
        ]
      },
      "164": {
        "id": "164",
        "name": "Fire Twins",
        "commander": "222",
        "deck": [
          "1302",
          "1314",
          "1314",
          "1315",
          "1318",
          "1318",
          "1319",
          "1327",
          "1326",
          "1326",
        ]
      },
      "171": {
        "id": "171",
        "name": "Exit Strategy",
        "commander": "206",
        "deck": [
          "1311",
          "1312",
          "1312",
          "1314",
          "1314",
          "1315",
          "1315",
          "1325",
          "1330",
          "1330",
        ]
      },
      "172": {
        "id": "172",
        "name": "Kicking the Nest",
        "commander": "211",
        "deck": [
          "1313",
          "1313",
          "1314",
          "1315",
          "1319",
          "1319",
          "1319",
          "1326",
          "1327",
          "1329",
        ]
      },
      "173": {
        "id": "173",
        "name": "Purging",
        "commander": "211",
        "deck": [
          "1311",
          "1311",
          "1313",
          "1313",
          "1317",
          "1319",
          "1319",
          "1326",
          "1325",
          "1326",
        ]
      },
      "174": {
        "id": "174",
        "name": "Wraith's Den",
        "commander": "211",
        "deck": [
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
          "1319",
        ]
      },
      "181": {
        "id": "181",
        "name": "Pre-emptive Strike",
        "commander": "208",
        "deck": [
          "1319",
          "1319",
          "1011",
          "1018",
          "1616",
          "1613",
          "1329",
          "1329",
          "1628",
          "5004",
        ]
      },
      "182": {
        "id": "182",
        "name": "The Second Wave",
        "commander": "208",
        "deck": [
          "1306",
          "1314",
          "1017",
          "1010",
          "1615",
          "1618",
          "6007",
          "1328",
          "1026",
          "1628",
        ]
      },
      "183": {
        "id": "183",
        "name": "Clash",
        "commander": "208",
        "deck": [
          "1010",
          "1314",
          "1318",
          "6006",
          "6006",
          "1327",
          "1629",
          "1628",
          "6005",
          "6005",
        ]
      },
      "184": {
        "id": "184",
        "name": "The Void's Champion",
        "commander": "209",
        "deck": [
          "1312",
          "1311",
          "1314",
          "1314",
          "1312",
          "1312",
          "1326",
          "1327",
          "1327",
          "1341",
        ]
      },
      "191": {
        "id": "191",
        "name": "Caverns of Crossing",
        "commander": "212",
        "deck": [
          "1011",
          "1011",
          "1313",
          "1314",
          "1314",
          "1329",
          "1628",
          "1330",
          "1328",
          "1328",
        ]
      },
      "192": {
        "id": "192",
        "name": "Depths of the World",
        "commander": "212",
        "deck": [
          "1311",
          "1011",
          "1613",
          "1613",
          "1017",
          "1026",
          "1328",
          "1328",
          "1629",
          "1629",
        ]
      },
      "193": {
        "id": "193",
        "name": "Deep Tremors",
        "commander": "212",
        "deck": [
          "1613",
          "1613",
          "1613",
          "1613",
          "1017",
          "1026",
          "1328",
          "1628",
          "1629",
          "1629",
        ]
      },
      "194": {
        "id": "194",
        "name": "Mr. Bear, Tear Down This Wall",
        "commander": "212",
        "deck": [
          "1313",
          "1015",
          "1015",
          "1619",
          "6004",
          "6005",
          "6005",
          "1629",
          "1627",
          "7004",
        ]
      },
      "201": {
        "id": "201",
        "name": "The Ridge",
        "commander": "220",
        "deck": [
          "1012",
          "1018",
          "1317",
          "1615",
          "1026",
          "1027",
          "1027",
          "1329",
          "1329",
          "5005",
        ]
      },
      "202": {
        "id": "202",
        "name": "From the Pits",
        "commander": "220",
        "deck": [
          "1610",
          "1610",
          "1616",
          "1614",
          "1625",
          "1625",
          "1626",
          "1626",
          "1626",
          "1628",
        ]
      },
      "203": {
        "id": "203",
        "name": "A Strange Man",
        "commander": "220",
        "deck": [
          "1610",
          "1610",
          "1617",
          "1617",
          "1327",
          "1629",
          "1628",
          "1628",
          "1626",
          "1330",
        ]
      },
      "204": {
        "id": "204",
        "name": "Malchior, Grand Excavator",
        "commander": "213",
        "deck": [
          "1010",
          "1012",
          "1617",
          "1619",
          "1619",
          "1029",
          "1029",
          "1629",
          "1629",
          "1629",
        ]
      },
      "21": {
        "id": "21",
        "name": "Armored Up!",
        "commander": "217",
        "deck": [
          "1001",
          "1001",
          "1000",
          "1000",
          "1001",
          "1601",
          "1006",
          "1615",
          "1014",
          "1011",
        ]
      },
      "211": {
        "id": "211",
        "name": "Misunderstanding",
        "commander": "220",
        "deck": [
          "1010",
          "1312",
          "1030",
          "1030",
          "1327",
          "1327",
          "1329",
          "1027",
          "1628",
          "1628",
        ]
      },
      "212": {
        "id": "212",
        "name": "Few Crystals Short of a Load",
        "commander": "220",
        "deck": [
          "1311",
          "1315",
          "1326",
          "1326",
          "1629",
          "1625",
          "1626",
          "1626",
          "1629",
          "1629",
        ]
      },
      "213": {
        "id": "213",
        "name": "Rumble Tumble",
        "commander": "220",
        "deck": [
          "1311",
          "1010",
          "1326",
          "1326",
          "1629",
          "1625",
          "1626",
          "1628",
          "6005",
          "6005",
        ]
      },
      "214": {
        "id": "214",
        "name": "Source of the Tremors",
        "commander": "214",
        "deck": [
          "1311",
          "1619",
          "1326",
          "1026",
          "1330",
          "1629",
          "1629",
          "1027",
          "6004",
          "1040",
        ]
      },
      "22": {
        "id": "22",
        "name": "The Buried Cache",
        "commander": "217",
        "deck": [
          "1001",
          "1001",
          "1001",
          "1000",
          "1600",
          "1001",
          "1006",
          "1014",
          "1619",
          "1011",
        ]
      },
      "221": {
        "id": "221",
        "name": "Gibberish",
        "commander": "210",
        "deck": [
          "1318",
          "1613",
          "1030",
          "1326",
          "1326",
          "1629",
          "1629",
          "7004",
          "6004",
          "6004",
        ]
      },
      "222": {
        "id": "222",
        "name": "Corrupted Lands",
        "commander": "210",
        "deck": [
          "1311",
          "1615",
          "1028",
          "1028",
          "1328",
          "1326",
          "1628",
          "6005",
          "7004",
          "7004",
        ]
      },
      "223": {
        "id": "223",
        "name": "Bo Turvar Axis",
        "commander": "210",
        "deck": [
          "1018",
          "1018",
          "1326",
          "1326",
          "1626",
          "1626",
          "1629",
          "6004",
          "5005",
          "5005",
        ]
      },
      "224": {
        "id": "224",
        "name": "Press On",
        "commander": "210",
        "deck": [
          "1311",
          "1311",
          "1327",
          "1326",
          "1326",
          "1026",
          "1330",
          "5004",
          "1328",
          "6003",
        ]
      },
      "23": {
        "id": "23",
        "name": "Scourge",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1300",
          "1300",
          "1300",
          "1302",
          "1302",
          "1303",
          "1305",
          "1315",
        ]
      },
      "231": {
        "id": "231",
        "name": "Aether Raid",
        "commander": "221",
        "deck": [
          "1014",
          "1019",
          "1026",
          "1026",
          "1027",
          "1028",
          "1028",
          "1030",
          "1030",
          "1041",
        ]
      },
      "232": {
        "id": "232",
        "name": "Falling Feathers",
        "commander": "221",
        "deck": [
          "1010",
          "1011",
          "1026",
          "1027",
          "1027",
          "1027",
          "1027",
          "1028",
          "1030",
          "5003",
        ]
      },
      "233": {
        "id": "233",
        "name": "Yuriel's Ambush",
        "commander": "2",
        "deck": [
          "1017",
          "1017",
          "1025",
          "1025",
          "1025",
          "1028",
          "1030",
          "1025",
          "1025",
          "5003",
        ]
      },
      "234": {
        "id": "234",
        "name": "Yuriel's Honor",
        "commander": "2",
        "deck": [
          "1019",
          "1019",
          "1030",
          "1025",
          "1025",
          "1025",
          "1027",
          "5001",
          "5000",
        ]
      },
      "24": {
        "id": "24",
        "name": "Savior",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1300",
          "1300",
          "1302",
          "1300",
          "1302",
          "1303",
          "1305",
          "1315",
        ]
      },
      "241": {
        "id": "241",
        "name": "Mystic's Disgrace",
        "commander": "3",
        "deck": [
          "1011",
          "1017",
          "1025",
          "1025",
          "1025",
          "1025",
          "1027",
          "1027",
          "1040",
          "1041",
        ]
      },
      "242": {
        "id": "242",
        "name": "Samael's Deceit",
        "commander": "3",
        "deck": [
          "1017",
          "1017",
          "1025",
          "1027",
          "1027",
          "1027",
          "1028",
          "1040",
          "1041",
        ]
      },
      "243": {
        "id": "243",
        "name": "Samael's Wrath",
        "commander": "3",
        "deck": [
          "1011",
          "1019",
          "1025",
          "1026",
          "1026",
          "1030",
          "5004",
          "5004",
          "1040",
          "1041",
        ]
      },
      "244": {
        "id": "244",
        "name": "The Void",
        "commander": "215",
        "deck": [
          "1315",
          "1012",
          "5005",
          "1628",
          "1629",
          "1327",
          "1327",
          "1040",
          "1340",
          "6001",
        ]
      },
      "31": {
        "id": "31",
        "name": "Protecting the Tools",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1301",
          "1301",
          "1301",
          "1302",
          "1303",
          "1305",
          "1314",
          "1314",
        ]
      },
      "32": {
        "id": "32",
        "name": "Collateral Damage",
        "commander": "200",
        "deck": [
          "1300",
          "1300",
          "1300",
          "1301",
          "1301",
          "1302",
          "1303",
          "1305",
          "1319",
          "1319",
        ]
      },
      "33": {
        "id": "33",
        "name": "Shattering",
        "commander": "223",
        "deck": [
          "1000",
          "1300",
          "1001",
          "1301",
          "1301",
          "1003",
          "1004",
          "1305",
          "1313",
          "1313",
        ]
      },
      "34": {
        "id": "34",
        "name": "Missing Cache?!",
        "commander": "223",
        "deck": [
          "1000",
          "1000",
          "1301",
          "1001",
          "1302",
          "1302",
          "1303",
          "1005",
          "1015",
          "1015",
        ]
      },
      "41": {
        "id": "41",
        "name": "Push Them Back",
        "commander": "224",
        "deck": [
          "1300",
          "1300",
          "1302",
          "1302",
          "1305",
          "1305",
          "1303",
          "1314",
          "1318",
        ]
      },
      "42": {
        "id": "42",
        "name": "Bottleneck",
        "commander": "224",
        "deck": [
          "1300",
          "1302",
          "1302",
          "1302",
          "1305",
          "1305",
          "1305",
          "1303",
          "1314",
          "1318",
        ]
      },
      "43": {
        "id": "43",
        "name": "The Bridge",
        "commander": "224",
        "deck": [
          "1300",
          "1301",
          "1302",
          "1302",
          "1305",
          "1305",
          "1305",
          "1303",
          "1317",
          "1318",
        ]
      },
      "44": {
        "id": "44",
        "name": "The Necromancer",
        "commander": "4",
        "deck": [
          "1300",
          "1300",
          "1301",
          "1302",
          "1302",
          "1305",
          "1303",
          "1317",
          "1311",
          "1311",
        ]
      },
      "51": {
        "id": "51",
        "name": "Into the Woods!",
        "commander": "201",
        "deck": [
          "1600",
          "1601",
          "1603",
          "1603",
          "1603",
          "1603",
          "1603",
          "1606",
          "1606",
          "1615",
        ]
      },
      "52": {
        "id": "52",
        "name": "The Wyldwood",
        "commander": "201",
        "deck": [
          "1601",
          "1603",
          "1603",
          "1603",
          "1603",
          "1603",
          "1606",
          "1607",
          "1607",
          "1012",
        ]
      },
      "53": {
        "id": "53",
        "name": "Thick Bramble",
        "commander": "201",
        "deck": [
          "1601",
          "1603",
          "1604",
          "1604",
          "1605",
          "1606",
          "1606",
          "1607",
          "1607",
          "1002",
        ]
      },
      "54": {
        "id": "54",
        "name": "Nature's Heart",
        "commander": "201",
        "deck": [
          "1601",
          "1601",
          "1601",
          "1603",
          "1603",
          "1604",
          "1604",
          "1607",
          "1607",
          "1607",
        ]
      },
      "61": {
        "id": "61",
        "name": "Wind in the Woods",
        "commander": "201",
        "deck": [
          "1000",
          "1600",
          "1601",
          "1601",
          "1601",
          "1002",
          "1002",
          "1002",
          "1302",
          "1311",
        ]
      },
      "62": {
        "id": "62",
        "name": "Branching Paths",
        "commander": "201",
        "deck": [
          "1000",
          "1600",
          "1601",
          "1001",
          "1002",
          "1002",
          "1002",
          "1002",
          "1302",
          "1311",
        ]
      },
      "63": {
        "id": "63",
        "name": "Renewed Trail",
        "commander": "200",
        "deck": [
          "1600",
          "1300",
          "1601",
          "1603",
          "1607",
          "1307",
          "1303",
          "1303",
          "1615",
          "1615",
        ]
      },
      "64": {
        "id": "64",
        "name": "The Hollow",
        "commander": "219",
        "deck": [
          "1300",
          "1300",
          "1301",
          "1301",
          "1303",
          "1303",
          "1305",
          "1305",
          "1311",
          "1314",
        ]
      },
      "71": {
        "id": "71",
        "name": "Woodland Departure",
        "commander": "203",
        "deck": [
          "1600",
          "1601",
          "1601",
          "1602",
          "1602",
          "1602",
          "1602",
          "1000",
          "1015",
          "1615",
        ]
      },
      "72": {
        "id": "72",
        "name": "Land of Light",
        "commander": "203",
        "deck": [
          "1602",
          "1602",
          "1602",
          "1304",
          "1304",
          "1601",
          "1601",
          "1604",
          "1618",
          "1613",
        ]
      },
      "73": {
        "id": "73",
        "name": "Hunted",
        "commander": "203",
        "deck": [
          "1607",
          "1602",
          "1602",
          "1304",
          "1304",
          "1601",
          "1601",
          "1604",
          "1618",
          "1613",
        ]
      },
      "74": {
        "id": "74",
        "name": "Prey Upon",
        "commander": "203",
        "deck": [
          "1602",
          "1602",
          "1602",
          "1602",
          "1602",
          "1602",
          "1001",
          "1601",
          "1615",
          "1615",
        ]
      },
      "81": {
        "id": "81",
        "name": "Ghosts...?",
        "commander": "204",
        "deck": [
          "1001",
          "1001",
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "1018",
        ]
      },
      "82": {
        "id": "82",
        "name": "Soul Wisp Swarm",
        "commander": "204",
        "deck": [
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "1006",
          "11006",
          "11006",
          "1018",
        ]
      },
      "83": {
        "id": "83",
        "name": "Fight or Flight",
        "commander": "204",
        "deck": [
          "1000",
          "1601",
          "1602",
          "1602",
          "1003",
          "1006",
          "1006",
          "11006",
          "1012",
          "1012",
        ]
      },
      "84": {
        "id": "84",
        "name": "Trespassing",
        "commander": "2",
        "deck": [
          "1001",
          "1001",
          "1002",
          "1002",
          "1003",
          "1006",
          "1006",
          "1011",
          "1018",
          "1014",
        ]
      },
      "91": {
        "id": "91",
        "name": "Finding a Crossing",
        "commander": "205",
        "deck": [
          "1601",
          "1605",
          "1605",
          "1605",
          "1605",
          "1605",
          "1607",
          "1607",
          "1613",
          "1613",
        ]
      },
      "92": {
        "id": "92",
        "name": "Mage's Decree",
        "commander": "205",
        "deck": [
          "1603",
          "1603",
          "1603",
          "1604",
          "1604",
          "1605",
          "1606",
          "1606",
          "1618",
          "1618",
        ]
      },
      "93": {
        "id": "93",
        "name": "Water Under the Bridge",
        "commander": "205",
        "deck": [
          "1603",
          "1603",
          "1603",
          "1604",
          "1604",
          "1606",
          "1606",
          "1606",
          "1617",
          "1617",
        ]
      },
      "94": {
        "id": "94",
        "name": "Wrath of the River",
        "commander": "205",
        "deck": [
          "1603",
          "1603",
          "1604",
          "1604",
          "1606",
          "1606",
          "1607",
          "1607",
          "1619",
          "1617",
        ]
      },
    }
  }
};
var achievements = [];
var raids = [];
var quests = {
  root: {
    battleground: [
      {
        "name": "Rise of the Frogs",
        "id": "0",
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "z": 4,
            "all": "1",
          },
        ]
      },
      {
        "name": "World Awakening",
        "id": "1",
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "z": 5,
            "all": "1",
          },
        ]
      },
      {
        "name": "Age of the Dragons",
        "id": "2",
        "skill": [
          {
            "id": "heal",
            "mult": 0.2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
        ]
      },
    ]
  }
};
