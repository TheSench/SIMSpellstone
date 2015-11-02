var CARDS = {
"root": {
"unit": {
  "1000": {
    "id": "1000",
    "name": "Pegasus",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 3,
    "health": 7,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
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
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 12,
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
    }
  },
  "1027": {
    "id": "1027",
    "name": "Griffin Knight",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 1,
    "health": 10,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
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
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
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
            "y": "1",
            "z": 1,
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
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 2,
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
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "1040": {
    "id": "1040",
    "name": "Storm Dragon",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 14,
    "cost": 4,
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
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 16,
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
            "y": "1",
            "z": 1,
            "all": "1",
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
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "z": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "1041": {
    "id": "1041",
    "name": "Avenging Angel",
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
  "1300": {
    "id": "1300",
    "name": "Skeleton Warrior",
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
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 5,
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
      "3": {
        "health": 6,
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
            "x": 2,
          },
        ],
      },
    }
  },
  "1312": {
    "id": "1312",
    "name": "Scythe Demon",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 2,
    "health": 11,
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
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
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
        "health": 15,
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
        "attack": 3,
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
  "1340": {
    "id": "1340",
    "name": "Blazekin Dragon",
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
  "1600": {
    "id": "1600",
    "name": "Woodland Fairy",
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
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 5,
    "cost": 1,
    "skill": [
      {
        "id": "pierce",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
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
    }
  },
  "1613": {
    "id": "1613",
    "name": "Acidic Spider",
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
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 7,
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
        "health": 9,
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
            "x": 1,
            "y": "4",
            "z": 4,
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
            "y": "4",
            "z": 4,
          },
        ],
      },
    }
  },
  "1619": {
    "id": "1619",
    "name": "Earth Elemental",
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
  "1625": {
    "id": "1625",
    "name": "Ferocious Clawkin",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 9,
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
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
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
      "3": {
        "attack": 4,
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
            "x": 3,
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
            "x": 4,
          },
        ],
      },
    }
  },
  "1626": {
    "id": "1626",
    "name": "Tusker",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 14,
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
        "health": 16,
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
        "attack": 3,
        "skill": [],
      },
      "4": {
        "health": 18,
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
        "attack": 4,
        "skill": [
          {
            "id": "protect",
            "x": 2,
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 1,
    "health": 9,
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
        "health": 10,
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
        "health": 11,
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
        "health": 12,
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
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 1,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
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
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 2,
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
  "2000": {
    "id": "2000",
    "name": "Wasteland Nomad",
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
            "x": 1,
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
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
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
  "12007": {
    "id": "12007",
    "name": "Platinum Armorer",
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
  "22007": {
    "id": "22007",
    "name": "Platinum Champion",
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
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
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
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
            "z": 1,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "5",
            "z": 5,
          },
        ],
      },
    }
  },
  "2008": {
    "id": "2008",
    "name": "Shadow of Ash",
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
    "rarity": "4",
    "set": "2000",
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
    "rarity": "4",
    "set": "2000",
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
    "rarity": "4",
    "set": "2000",
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
  "5000": {
    "id": "5000",
    "name": "Azure Sphinx",
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
        ],
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
          },
          {
            "id": "protect",
            "x": 2,
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
        ],
      },
    }
  },
  "15000": {
    "id": "15000",
    "name": "Marble Sphinx",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 15,
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
        "health": 17,
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
        ],
      },
    }
  },
  "25000": {
    "id": "25000",
    "name": "Alabaster Sphinx",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 18,
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
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 4,
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
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "5001": {
    "id": "5001",
    "name": "Aven Skypiercer",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 2,
    "health": 10,
    "cost": 2,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
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
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
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
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 12,
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
  "15001": {
    "id": "15001",
    "name": "Feather Skypiercer",
    "rarity": "4",
    "set": "3000",
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
        "id": "strike",
        "x": 2,
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
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 15,
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
            "x": 3,
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
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 16,
    "cost": 2,
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
        "c": 5,
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
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 19,
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
  "5002": {
    "id": "5002",
    "name": "Twilight Mirror",
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 4,
    "health": 15,
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
        "health": 17,
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
        "attack": 5,
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
        "health": 19,
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 21,
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
        "health": 22,
        "skill": [],
      },
      "3": {
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
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "attack": 6,
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "attack": 6,
    "health": 25,
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
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
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
        "health": 29,
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
        "attack": 7,
        "health": 30,
        "skill": [],
      },
    }
  },
  "5006": {
    "id": "5006",
    "name": "Arms Enforcer",
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
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 16,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 6,
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
        "health": 17,
        "skill": [],
      },
      "3": {
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
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 5,
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
        "skill": [],
      },
    }
  },
  "15008": {
    "id": "15008",
    "name": "Blizzard Dragon",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 20,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 5,
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
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 24,
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
  "25008": {
    "id": "25008",
    "name": "Hailstone Dragon",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 7,
    "health": 24,
    "cost": 4,
    "skill": [
      {
        "id": "jam",
        "c": 3,
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
        "health": 26,
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
            "c": 3,
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
        "attack": 8,
        "health": 29,
        "skill": [],
      },
      "6": {
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 2,
    "health": 7,
    "cost": 2,
    "skill": [
      {
        "id": "heal",
        "x": 1,
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
        "health": 9,
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
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 10,
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
            "c": 4,
          },
        ],
      },
    }
  },
  "15010": {
    "id": "15010",
    "name": "Lurking Dragon",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 12,
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
            "id": "heal",
            "x": 4,
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
        "health": 14,
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 3,
    "health": 16,
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
        "health": 17,
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
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
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
  "6000": {
    "id": "6000",
    "name": "Furnace Mech",
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
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 3,
    "health": 11,
    "cost": 3,
    "skill": [
      {
        "id": "counter",
        "x": 2,
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
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
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
      },
    }
  },
  "16016": {
    "id": "16016",
    "name": "Tormented Giant",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 16,
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
        "attack": 5,
        "skill": [],
      },
      "3": {
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
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
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
  "26016": {
    "id": "26016",
    "name": "Boneclaw Giant",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 5,
    "health": 18,
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
        "attack": 6,
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
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
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
  "6017": {
    "id": "6017",
    "name": "Tar Pit Stalker",
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
  "7000": {
    "id": "7000",
    "name": "Treant King",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 2,
    "health": 14,
    "cost": 3,
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
            "x": 3,
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
            "x": 3,
          },
        ],
      },
    }
  },
  "17000": {
    "id": "17000",
    "name": "Treant Edict",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 16,
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
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 21,
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
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 22,
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
        "health": 23,
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
            "x": 5,
          },
        ],
      },
    }
  },
  "7001": {
    "id": "7001",
    "name": "Hekaton",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
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
        "health": 15,
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
            "x": 2,
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
            "id": "pierce",
            "x": 3,
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
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "17001": {
    "id": "17001",
    "name": "Hekaton, Son of Earth",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 15,
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
        "attack": 5,
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
            "x": 3,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 5,
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
            "x": 4,
            "y": "3",
            "z": 3,
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
            "id": "pierce",
            "x": 5,
          },
        ],
      },
    }
  },
  "27001": {
    "id": "27001",
    "name": "Hekaton, Sky Scraper",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
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
        "x": 5,
        "y": "3",
        "z": 3,
      },
      {
        "id": "pierce",
        "x": 5,
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
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 5,
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
            "id": "pierce",
            "x": 6,
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
            "id": "rally",
            "x": 6,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 6,
          },
        ],
      },
    }
  },
  "7002": {
    "id": "7002",
    "name": "Cerberus",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
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
        "all": "1",
      },
      {
        "id": "pierce",
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
            "x": 4,
          },
        ],
      },
      "6": {
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
            "x": 4,
          },
        ],
      },
    }
  },
  "17002": {
    "id": "17002",
    "name": "Cerberus, the Sentry",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 20,
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
    "upgrades": {
      "2": {
        "health": 22,
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
            "x": 2,
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
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
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
            "x": 2,
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
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 7,
    "health": 26,
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
        "x": 2,
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
        "health": 28,
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
            "x": 2,
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
        "attack": 8,
        "skill": [],
      },
      "5": {
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
            "x": 7,
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
            "x": 7,
          },
        ],
      },
    }
  },
  "7003": {
    "id": "7003",
    "name": "Kraken",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 12,
    "cost": 3,
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
      "6": {
        "attack": 6,
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
            "c": 4,
          },
        ],
      },
    }
  },
  "17003": {
    "id": "17003",
    "name": "Kraken of Depths",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 14,
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
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 17,
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
      "5": {
        "health": 19,
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
    }
  },
  "27003": {
    "id": "27003",
    "name": "Kraken of Fears",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 21,
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
            "c": 4,
          },
        ],
      },
      "4": {
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
  "11000": {
    "id": "11000",
    "name": "Stormcloud Pegasus",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 14,
    "cost": 3,
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
            "id": "protect",
            "x": 2,
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
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "21026": {
    "id": "21026",
    "name": "Glass Titan",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "attack": 5,
    "health": 17,
    "cost": 3,
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
        "x": 1,
        "all": "1",
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
        "attack": 6,
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
            "x": 4,
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
  "11027": {
    "id": "11027",
    "name": "Spearhunter Griffin",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 3,
    "health": 13,
    "cost": 3,
    "skill": [
      {
        "id": "armored",
        "x": 2,
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
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
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
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "21030": {
    "id": "21030",
    "name": "Radiant Paladin",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "6",
    "attack": 4,
    "health": 16,
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
        "x": 1,
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
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 21,
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
            "y": "1",
            "z": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "11040": {
    "id": "11040",
    "name": "Stormspawn Dragon",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 5,
    "health": 18,
    "cost": 4,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "z": 1,
        "all": "1",
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
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 22,
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
            "y": "1",
            "z": 1,
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
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "1",
    "sub_type": "9",
    "attack": 6,
    "health": 22,
    "cost": 4,
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
        "health": 25,
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
            "y": "1",
            "z": 1,
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
            "y": "1",
            "z": 1,
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
  "11041": {
    "id": "11041",
    "name": "Retribution Angel",
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
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "21311": {
    "id": "21311",
    "name": "Smelted Skeleton",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "sub_type": "7",
    "attack": 4,
    "health": 10,
    "cost": 1,
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
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
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
  "11312": {
    "id": "11312",
    "name": "Edge Demon",
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 3,
    "health": 16,
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
        "health": 17,
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "2",
    "attack": 5,
    "health": 17,
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
        "health": 18,
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
        "skill": [],
      },
    }
  },
  "11327": {
    "id": "11327",
    "name": "Discordant Angel",
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
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
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
        "x": 3,
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
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 3,
          },
        ],
      },
    }
  },
  "21610": {
    "id": "21610",
    "name": "Duoshot Ranger",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 9,
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
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "3",
            "z": 3,
          },
          {
            "id": "pierce",
            "x": 4,
          },
        ],
      },
    }
  },
  "11613": {
    "id": "11613",
    "name": "Corrosive Spider",
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
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 9,
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
    }
  },
  "21618": {
    "id": "21618",
    "name": "Frog Outrunner",
    "rarity": "2",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 12,
    "cost": 1,
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
            "x": 4,
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 12,
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
        "x": 4,
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
            "x": 5,
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
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "21625": {
    "id": "21625",
    "name": "Clawkin Elite",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 6,
    "health": 14,
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
        "x": 5,
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
            "x": 6,
          },
        ],
      },
      "4": {
        "health": 17,
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
    }
  },
  "11626": {
    "id": "11626",
    "name": "Olitusker",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 4,
    "health": 19,
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
        "health": 20,
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
  "21626": {
    "id": "21626",
    "name": "Wartusker",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 5,
    "health": 22,
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
        "health": 26,
        "skill": [
          {
            "id": "protect",
            "x": 4,
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
        ],
      },
    }
  },
  "11627": {
    "id": "11627",
    "name": "Wizen Sage of Croaks",
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 2,
    "health": 13,
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
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 3,
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
    "rarity": "3",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "sub_type": "4",
    "attack": 3,
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
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 18,
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
    }
  },
  "11628": {
    "id": "11628",
    "name": "Mega Garganotos",
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
  "11641": {
    "id": "11641",
    "name": "Beat of the Wyld",
    "rarity": "4",
    "set": "1000",
    "card_type": "2",
    "type": "3",
    "attack": 3,
    "health": 14,
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
        "all": "1",
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
        "attack": 4,
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
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 5,
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
      },
      "5": {
        "health": 18,
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
    }
  },
  "1": {
    "id": "1",
    "name": "Oda, Guardian",
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
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "counter",
        "x": 1,
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
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 2,
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
            "id": "counter",
            "x": 2,
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
            "id": "counter",
            "x": 2,
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
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "attack": 0,
    "health": 22,
    "skill": [
      {
        "id": "rally",
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
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 2,
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
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "rally",
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
      },
    }
  },
  "9": {
    "id": "9",
    "name": "Groc the Hammer",
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
  "500": {
    "id": "500",
    "name": "Arcane Dustling",
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
    "rarity": "3",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "502": {
    "id": "502",
    "name": "Arcane Pumpkin",
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
    "rarity": "2",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "511": {
    "id": "511",
    "name": "Arcane Ore",
    "rarity": "3",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "512": {
    "id": "512",
    "name": "Arcane Deposit",
    "rarity": "4",
    "set": "9999",
    "card_type": "2",
    "type": "3",
    "attack": 0,
    "health": 1,
    "cost": 0,
    "skill": [],
    "upgrades": {}
  },
  "601": {
    "id": "601",
    "name": "Castle Tower",
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
            "x": 2,
            "y": "9",
            "z": 9,
            "all": "1",
          },
        ]
      },
    ]
  }
};
