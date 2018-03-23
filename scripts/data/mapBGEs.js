"use strict";

var MAP_BATTLEGROUNDS = {
  "3001": {
    "id": "3001",
    "name": "Duskwillow Fellowship",
    "desc": "It's a fellowship! Gather your allies and level them up to help you in battles on the Duskwillow map!",
    "location_id": "7",
    "effects": [
      {
        "id": "1",
        "name": "The Ranger",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Pierce 2.",
          "name": "The Ranger",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 4.",
          "name": "The Ranger",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 6.",
          "name": "The Ranger",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 8.",
          "name": "The Ranger",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 10.",
          "name": "The Ranger",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 10,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "2",
        "name": "The Guardian",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 1 each turn.",
          "name": "The Guardian",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 2 each turn.",
          "name": "The Guardian",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 3 each turn.",
          "name": "The Guardian",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 3,
            "all": "3",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 4 each turn.",
          "name": "The Guardian",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 5 each turn.",
          "name": "The Guardian",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "3",
        "name": "The Healer",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Healed for 1 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 2 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 3 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 4 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 5 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 6 each turn.",
          "name": "The Healer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "4",
        "name": "The Assassin",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 10% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.1
            }
          }
          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 15% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.15
            }
          }
          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 20% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.2
            }
          }
          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 25% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.25
            }
          }
          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 35% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.35
            }
          }
          ]
        },
        {
          "desc": "Whenever the enemy plays a creature, The Assassin deals 50% of their health to them as damage.",
          "name": "The Assassin",
          "effect": [
          {
            "effect_type": "on_play",
            "defender": "1",
            "effect": {
              "effect_type": "skill",
              "id": "ambush",
              "base": "health",
              "mult": 0.5
            }
          }
          ]
        }
        ]
      }
    ]
  },
  "3002": {
    "id": "3002",
    "name": "Frigore Relic Hunt",
    "desc": "It's a quest for arcane treasure! Gather magical items and level them up to help you in battles on the Frigore map!",
    "location_id": "8",
    "effects": [
      {
        "id": "5",
        "name": "Duskwillow Aegis",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Armor 1 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 2 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 3 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 4 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 6 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 8 each turn.",
          "name": "Duskwillow Aegis",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "6",
        "name": "Blazing Dyrnwyn",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Scorch 1 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 2 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 3 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 4 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 6 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 8 each turn.",
          "name": "Blazing Dyrnwyn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "7",
        "name": "Life Water",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Healed for 1 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 2 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 3 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 4 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 5 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 6 each turn.",
          "name": "Life Water",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3003": {
    "id": "3003",
    "name": "Legendary Dev Tools",
    "desc": "The developers have lost their tools! Quick, use your hero coins to power them up and crush the developers!",
    "location_id": "108",
    "effects": [
      {
        "id": "8",
        "name": "Buff Wand",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Empowered 1 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Empowered 2 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Empowered 3 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Empowered 4 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Empowered 6 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Empowered 10 each turn.",
          "name": "Buff Wand",
          "effect": [
          {
            "effect_type": "skill",
            "id": "rally",
            "x": 10,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "9",
        "name": "Nerf Stick",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "Weaken one enemy creature by 2.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "weaken",
            "x": 2,
            "enemy_only": "1"
          }
          ]
        },
        {
          "desc": "Weaken one enemy creature by 3.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "weaken",
            "x": 3,
            "enemy_only": "1"
          }
          ]
        },
        {
          "desc": "Weaken all enemy creatures by 2.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "weaken",
            "all": "1",
            "x": 2,
            "enemy_only": "1"
          }
          ]
        },
        {
          "desc": "Weaken all enemy creatures by 3.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "weaken",
            "all": "1",
            "x": 3,
            "enemy_only": "1"
          }
          ]
        },
        {
          "desc": "One of your creatures gains Silence every turn.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "silence",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gains Silence every turn.",
          "name": "Nerf Stick",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "silence",
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "10",
        "name": "Ban Hammer",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "One of your creatures gains Nullify 1 every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 1,
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "One of your creatures gains Nullify 2 every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 2,
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "One of your creatures gains Nullify 3 every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 3,
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "One of your creatures gains Nullify 4 every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 4,
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "Freeze a random enemy creature every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "jam",
            "enemy_only": "1"
          }
          ]
        },
        {
          "desc": "Freeze all enemy creatures every turn.",
          "name": "Ban Hammer",
          "effect": [
          {
            "effect_type": "skill",
            "id": "jam",
            "all": "1",
            "enemy_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3004": {
    "id": "3004",
    "name": "Reborn Relics",
    "desc": "Arriving in The Void Plane has sparked new potential within your relics. Upgrade them with Purple Fire Souls to unlock greater powers!",
    "location_id": "9",
    "effects": [
      {
        "id": "11",
        "name": "Dyrnwyn Reborn",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 1 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 2 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 3 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 4 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 6 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Emberhide 8 each turn.",
          "name": "Dyrnwyn Reborn",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counterburn",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "12",
        "name": "Seastone Staff",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Healed for 1 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 2 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 3 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 4 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 5 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 6 each turn.",
          "name": "Seastone Staff",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "13",
        "name": "Heart of Blue Fire",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Berserk 1 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 2 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 3 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 4 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 5 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 6 each turn.",
          "name": "Heart of Blue Fire",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3005": {
    "id": "3005",
    "name": "Elemental Spiritlings",
    "desc": "Rayne has rescued a few elemental spirits in Beetleton Bunker, and left you to care for them. Feeding them Honeycombs unlocks their powers for you to use!",
    "location_id": "10",
    "effects": [
      {
        "id": "14",
        "name": "Earth Spiritling",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Armor 1 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 2 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 3 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 4 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 6 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 8 each turn.",
          "name": "Earth Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "15",
        "name": "Wind Spiritling",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Siphon 1 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Siphon 2 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Siphon 3 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Siphon 4 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Siphon 5 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Siphon 6 each turn.",
          "name": "Wind Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "leech",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "16",
        "name": "Fire Spiritling",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Berserk 1 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 2 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 3 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 4 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 5 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Berserk 6 each turn.",
          "name": "Fire Spiritling",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "berserk",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3006": {
    "id": "3006",
    "name": "Temple's Defenses",
    "desc": "Pharos Temple's power has decayed without an energy supply. Revive the ancient technology using Mini Jellyfish!",
    "location_id": "11",
    "effects": [
      {
        "id": "17",
        "name": "Hermit Cannon",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 1 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 1,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 2 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 2,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 3 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 3,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 4 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 4,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 5 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 5,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 6 each turn.",
          "name": "Hermit Cannon",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 6,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "18",
        "name": "Edgemaker Forge",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Pierce 2 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 4 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 6 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 8 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 10 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 10,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Pierce 15 each turn.",
          "name": "Edgemaker Forge",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "pierce",
            "x": 15,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "19",
        "name": "Sea Urchin Wall",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 1 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 2 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 4 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 6 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 8 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Vengeance 10 each turn.",
          "name": "Sea Urchin Wall",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "counter",
            "x": 10,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3007": {
    "id": "3007",
    "name": "Power Gemstones",
    "desc": "Powerful gemstones have been discovered in the mine. Restore their energy using Fireshards!",
    "location_id": "12",
    "effects": [
      {
        "id": "20",
        "name": "Aether Gemstone",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 1 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 2 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 3 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 3,
            "all": "3",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 4 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 5 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 6 each turn.",
          "name": "Aether Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "21",
        "name": "Wyld Gemstone",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Healed for 1 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 2 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 3 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 4 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 5 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 6 each turn.",
          "name": "Wyld Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "22",
        "name": "Chaos Gemstone",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Scorch 1 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 2 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 3 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 4 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 6 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Scorch 8 each turn.",
          "name": "Chaos Gemstone",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "burn",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3008": {
    "id": "3008",
    "name": "Celestial Orbs",
    "desc": "The Orbs in the Celestial Vault keep the islands afloat. Power them up and gain their strength with Breezy Wind!",
    "location_id": "13",
    "effects": [
      {
        "id": "23",
        "name": "Petal Orb",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are Healed for 1 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 2 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 3 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 4 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 5 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are Healed for 6 each turn.",
          "name": "Petal Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "heal",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "24",
        "name": "Lava Orb",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Enrage 1 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Enrage 2 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Enrage 3 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Enrage 4 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Enrage 6 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Enrage 8 each turn.",
          "name": "Lava Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "enrage",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "25",
        "name": "Basin Orb",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 1 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 2 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 3 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 3,
            "all": "3",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 4 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 5 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 5,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures are protected by Barrier 6 each turn.",
          "name": "Basin Orb",
          "effect": [
          {
            "effect_type": "skill",
            "id": "protect",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  },
  "3009": {
    "id": "3009",
    "name": "Yuriel's Mystic Tomes",
    "desc": "Yuriel's lent out his magical tomes, which can imbue great powers. Collect Word Eaters to strengthen his Mystic Tomes!",
    "location_id": "14",
    "effects": [
      {
        "id": "26",
        "name": "Tome of Firebolt",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 1 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 1,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 2 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 2,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 3 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 3,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 4 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 4,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 5 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 5,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        },
        {
          "desc": "All enemy creatures are hit with Bolt 6 each turn.",
          "name": "Tome of Firebolt",
          "effect": [
          {
            "effect_type": "skill",
            "id": "strike",
            "x": 6,
            "all": "1",
            "enemy_only": "1",
            "ally_turn": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "27",
        "name": "Tome of Shielding",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Armor 1 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 2 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 3 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 4 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 6 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Armor 8 each turn.",
          "name": "Tome of Shielding",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "armored",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      },
      {
        "id": "28",
        "name": "Tome of Darkness",
        "upgrades": [
        {
          "desc": "",
          "effect": [

          ]
        },
        {
          "desc": "All of your creatures gain Nullify 1 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 1,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Nullify 2 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 2,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Nullify 3 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 3,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Nullify 4 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 4,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Nullify 6 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 6,
            "all": "1",
            "ally_only": "1"
          }
          ]
        },
        {
          "desc": "All of your creatures gain Nullify 8 each turn.",
          "name": "Tome of Darkness",
          "effect": [
          {
            "effect_type": "skill",
            "id": "imbue",
            "s": "nullify",
            "x": 8,
            "all": "1",
            "ally_only": "1"
          }
          ]
        }
        ]
      }
    ]
  }
};