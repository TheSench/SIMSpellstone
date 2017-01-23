"use strict";

var RUNES = {
    "5011": {
        "id": "5011",
        "name": "Rune of Minor Health",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_health_rare",
        "bundle": "34",
        "desc": "Health +3",
        "usable": "0",
        "stat_boost": {
            "health": "3"
        }
    },
    "5012": {
        "id": "5012",
        "name": "Rune of Health",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +5",
        "usable": "0",
        "stat_boost": {
            "health": "5"
        }
    },
    "5013": {
        "id": "5013",
        "name": "Rune of Greater Health",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_health_legendary",
        "bundle": "34",
        "desc": "Health +30%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "health": {
                "mult": "0.3"
            }
        }
    },
    "5021": {
        "id": "5021",
        "name": "Rune of Invisibility",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_invisibility_legendary",
        "bundle": "34",
        "desc": "Invisibility +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "evade",
                "mult": "0.5"
            }
        }
    },
    "5031": {
        "id": "5031",
        "name": "Rune of Minor Barrier",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_barrier_rare",
        "bundle": "34",
        "desc": "Barrier +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "protect",
                "x": "2"
            }
        }
    },
    "5032": {
        "id": "5032",
        "name": "Rune of Barrier",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_barrier_epic",
        "bundle": "34",
        "desc": "Barrier +3",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "protect",
                "x": "3"
            }
        }
    },
    "5033": {
        "id": "5033",
        "name": "Rune of Greater Barrier",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_barrier_legendary",
        "bundle": "34",
        "desc": "Barrier +75%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "protect",
                "mult": "0.75"
            }
        }
    },
    "5034": {
        "id": "5034",
        "name": "Rune of Mass Barrier",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_barrier_all_legendary",
        "bundle": "34",
        "desc": "Barrier All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "protect",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5041": {
        "id": "5041",
        "name": "Rune of Minor Healing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_heal_rare",
        "bundle": "34",
        "desc": "Healing +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "heal",
                "x": "2"
            }
        }
    },
    "5042": {
        "id": "5042",
        "name": "Rune of Healing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_heal_epic",
        "bundle": "34",
        "desc": "Healing +3",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "heal",
                "x": "3"
            }
        }
    },
    "5043": {
        "id": "5043",
        "name": "Rune of Greater Healing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_heal_legendary",
        "bundle": "34",
        "desc": "Healing +75%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "heal",
                "mult": "0.75"
            }
        }
    },
    "5044": {
        "id": "5044",
        "name": "Rune of Mass Healing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_heal_all_epic",
        "bundle": "34",
        "desc": "Heal All +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "heal",
                "x": "1",
                "all": "1"
            }
        }
    },
    "5045": {
        "id": "5045",
        "name": "Rune of Greater Mass Healing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_heal_all_legendary",
        "bundle": "34",
        "desc": "Heal All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "heal",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5051": {
        "id": "5051",
        "name": "Rune of Minor Vengeance",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_vengeance_rare",
        "bundle": "34",
        "desc": "Vengeance +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "counter",
                "x": "1"
            }
        }
    },
    "5052": {
        "id": "5052",
        "name": "Rune of Vengeance",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_vengeance_epic",
        "bundle": "34",
        "desc": "Vengeance +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "counter",
                "x": "2"
            }
        }
    },
    "5053": {
        "id": "5053",
        "name": "Rune of Greater Vengeance",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_vengeance_legendary",
        "bundle": "34",
        "desc": "Vengeance +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "counter",
                "mult": "0.5"
            }
        }
    },
    "5061": {
        "id": "5061",
        "name": "Rune of Minor Armor",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_shield_rare",
        "bundle": "34",
        "desc": "Armored +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "armored",
                "x": "1"
            }
        }
    },
    "5062": {
        "id": "5062",
        "name": "Rune of Armor",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_shield_epic",
        "bundle": "34",
        "desc": "Armored +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "armored",
                "x": "2"
            }
        }
    },
    "5063": {
        "id": "5063",
        "name": "Rune of Greater Armor",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_shield_legendary",
        "bundle": "34",
        "desc": "Armored +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "armored",
                "mult": "0.5"
            }
        }
    },
    "5071": {
        "id": "5071",
        "name": "Rune of Minor Empower",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_empower_rare",
        "bundle": "34",
        "desc": "Empower +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "rally",
                "x": "1"
            }
        }
    },
    "5072": {
        "id": "5072",
        "name": "Rune of Empower",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_empower_epic",
        "bundle": "34",
        "desc": "Empower +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "rally",
                "x": "2"
            }
        }
    },
    "5073": {
        "id": "5073",
        "name": "Rune of Greater Empower",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_empower_legendary",
        "bundle": "34",
        "desc": "Empower +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "rally",
                "mult": "0.5"
            }
        }
    },
    "5074": {
        "id": "5074",
        "name": "Rune of Boundless Empower",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_empower_all_legendary",
        "bundle": "34",
        "desc": "Empower All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "rally",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5081": {
        "id": "5081",
        "name": "Rune of Legion",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_legion_epic",
        "bundle": "34",
        "desc": "Legion +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "legion",
                "x": "1"
            }
        }
    },
    "5082": {
        "id": "5082",
        "name": "Rune of Greater Legion",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_legion_legendary",
        "bundle": "34",
        "desc": "Legion +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "legion",
                "mult": "0.5"
            }
        }
    },
    "5091": {
        "id": "5091",
        "name": "Rune of Fervor",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_fervor_epic",
        "bundle": "34",
        "desc": "Fervor +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "fervor",
                "x": "1"
            }
        }
    },
    "5092": {
        "id": "5092",
        "name": "Rune of Greater Fervor",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_fervor_legendary",
        "bundle": "34",
        "desc": "Fervor +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "fervor",
                "mult": "0.5"
            }
        }
    },
    "5101": {
        "id": "5101",
        "name": "Rune of Minor Hex",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_hex_rare",
        "bundle": "34",
        "desc": "Hex +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "enfeeble",
                "x": "1"
            }
        }
    },
    "5102": {
        "id": "5102",
        "name": "Rune of Hex",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_hex_epic",
        "bundle": "34",
        "desc": "Hex +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "enfeeble",
                "x": "2"
            }
        }
    },
    "5103": {
        "id": "5103",
        "name": "Rune of Greater Hex",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_hex_legendary",
        "bundle": "34",
        "desc": "Hex +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "enfeeble",
                "mult": "0.5"
            }
        }
    },
    "5104": {
        "id": "5104",
        "name": "Rune of Sweeping Hex",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_hex_all_legendary",
        "bundle": "34",
        "desc": "Hex All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "enfeeble",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5111": {
        "id": "5111",
        "name": "Rune of Minor Bolt",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_bolt_rare",
        "bundle": "34",
        "desc": "Bolt +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "strike",
                "x": "1"
            }
        }
    },
    "5112": {
        "id": "5112",
        "name": "Rune of Bolt",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_bolt_epic",
        "bundle": "34",
        "desc": "Bolt +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "strike",
                "x": "2"
            }
        }
    },
    "5113": {
        "id": "5113",
        "name": "Rune of Greater Bolt",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_bolt_legendary",
        "bundle": "34",
        "desc": "Bolt +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "strike",
                "mult": "0.5"
            }
        }
    },
    "5114": {
        "id": "5114",
        "name": "Rune of Storming Bolt",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_bolt_all_legendary",
        "bundle": "34",
        "desc": "Bolt All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "strike",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5121": {
        "id": "5121",
        "name": "Rune of Scorch",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_scorch_epic",
        "bundle": "34",
        "desc": "Scorch +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "burn",
                "x": "1"
            }
        }
    },
    "5122": {
        "id": "5122",
        "name": "Rune of Greater Scorch",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_scorch_legendary",
        "bundle": "34",
        "desc": "Scorch +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "burn",
                "mult": "0.5"
            }
        }
    },
    "5151": {
        "id": "5151",
        "name": "Rune of Minor Weakening",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_weaken_rare",
        "bundle": "34",
        "desc": "Weaken +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "weaken",
                "x": "1"
            }
        }
    },
    "5152": {
        "id": "5152",
        "name": "Rune of Weakening",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_weaken_epic",
        "bundle": "34",
        "desc": "Weaken +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "weaken",
                "x": "2"
            }
        }
    },
    "5153": {
        "id": "5153",
        "name": "Rune of Greater Weakening",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_weaken_legendary",
        "bundle": "34",
        "desc": "Weaken +75%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "weaken",
                "mult": "0.75"
            }
        }
    },
    "5154": {
        "id": "5154",
        "name": "Rune of Infectious Weakening",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_weaken_all_legendary",
        "bundle": "34",
        "desc": "Weaken All +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "weaken",
                "mult": "0.5",
                "all": "1"
            }
        }
    },
    "5161": {
        "id": "5161",
        "name": "Rune of Minor Piercing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_pierce_rare",
        "bundle": "34",
        "desc": "Pierce +1, Health +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "pierce",
                "x": "1"
            },
            "health": "1"
        }
    },
    "5162": {
        "id": "5162",
        "name": "Rune of Piercing",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_pierce_epic",
        "bundle": "34",
        "desc": "Pierce +2, Health +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "pierce",
                "x": "2"
            },
            "health": "2"
        }
    },
    "5171": {
        "id": "5171",
        "name": "Rune of Poison",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_poison_rare",
        "bundle": "34",
        "desc": "Poison +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "poison",
                "x": "1"
            }
        }
    },
    "5172": {
        "id": "5172",
        "name": "Rune of Greater Poison",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_poison_legendary",
        "bundle": "34",
        "desc": "Poison +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "poison",
                "mult": "0.5"
            }
        }
    },
    "5181": {
        "id": "5181",
        "name": "Rune of Minor Siphoning",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "2",
        "icon": "rune_siphon_rare",
        "bundle": "34",
        "desc": "Siphon +2",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "leech",
                "x": "2"
            }
        }
    },
    "5182": {
        "id": "5182",
        "name": "Rune of Siphoning",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_siphon_epic",
        "bundle": "34",
        "desc": "Siphon +3",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "leech",
                "x": "3"
            }
        }
    },
    "5183": {
        "id": "5183",
        "name": "Rune of Greater Siphoning",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_siphon_legendary",
        "bundle": "34",
        "desc": "Siphon +75%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "leech",
                "mult": "0.75"
            }
        }
    },
    "5184": {
        "id": "5184",
        "name": "Rune of Berserk",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_berserk_epic",
        "bundle": "34",
        "desc": "Berserk +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "berserk",
                "x": "1"
            }
        }
    },
    "5185": {
        "id": "5185",
        "name": "Rune of Greater Berserk",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_berserk_legendary",
        "bundle": "34",
        "desc": "Berserk +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "berserk",
                "mult": "0.5"
            }
        }
    },
    "5186": {
        "id": "5186",
        "name": "Rune of Frostbreath",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "3",
        "icon": "rune_frostbreath_epic",
        "bundle": "34",
        "desc": "Frostbreath +1",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "frost",
                "x": "1"
            }
        }
    },
    "5187": {
        "id": "5187",
        "name": "Rune of Greater Frostbreath",
        "type": "3",
        "category": "3",
        "set": "1",
        "rarity": "4",
        "icon": "rune_frostbreath_legendary",
        "bundle": "34",
        "desc": "Frostbreath +50%, rounded up.",
        "usable": "0",
        "stat_boost": {
            "skill": {
                "id": "frost",
                "mult": "0.5"
            }
        }
    },
    "5501": {
        "id": "5501",
        "name": "Angelic Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "6",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Angels. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    },
    "5502": {
        "id": "5502",
        "name": "Elemental Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "5",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Elementals. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    },
    "5503": {
        "id": "5503",
        "name": "Undead Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "7",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Undead. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    },
    "5504": {
        "id": "5504",
        "name": "Goblin Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "11",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Goblins. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    },
    "5505": {
        "id": "5505",
        "name": "Dragon Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "9",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Dragons. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    },
    "5506": {
        "id": "5506",
        "name": "Seafolk Rune of Health",
        "type": "3",
        "category": "3",
        "set": "2",
        "rarity": "3",
        "faction_req": "12",
        "icon": "rune_health_epic",
        "bundle": "34",
        "desc": "Health +8. May only be embedded on Seafolk. May not be crafted.",
        "usable": "0",
        "stat_boost": {
            "health": "8"
        }
    }
};