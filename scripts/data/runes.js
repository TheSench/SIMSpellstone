"use strict"

var RUNES = {
	"5011": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +3",
		"icon": "rune_health_rare",
		"id": "5011",
		"name": "Rune of Minor Health",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"health": "3"
		},
		"type": "3",
		"usable": "0"
	},
	"5012": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +5",
		"icon": "rune_health_epic",
		"id": "5012",
		"name": "Rune of Health",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"health": "5"
		},
		"type": "3",
		"usable": "0"
	},
	"5013": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +30%, rounded up. Minimum +6.",
		"icon": "rune_health_legendary",
		"id": "5013",
		"name": "Rune of Greater Health",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"health": {
				"min_bonus": "6",
				"mult": "0.3"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5021": {
		"bundle": "34",
		"category": "3",
		"desc": "Invisibility +50%, rounded up.",
		"icon": "rune_invisibility_legendary",
		"id": "5021",
		"name": "Rune of Invisibility",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "evade",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5031": {
		"bundle": "34",
		"category": "3",
		"desc": "Barrier +2",
		"icon": "rune_barrier_rare",
		"id": "5031",
		"name": "Rune of Minor Barrier",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5032": {
		"bundle": "34",
		"category": "3",
		"desc": "Barrier +3",
		"icon": "rune_barrier_epic",
		"id": "5032",
		"name": "Rune of Barrier",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"x": "3"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5033": {
		"bundle": "34",
		"category": "3",
		"desc": "Barrier +75%, rounded up. Minimum +4.",
		"icon": "rune_barrier_legendary",
		"id": "5033",
		"name": "Rune of Greater Barrier",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"min_bonus": "4",
				"mult": "0.75"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5034": {
		"bundle": "34",
		"category": "3",
		"desc": "Barrier All +50%, rounded up.",
		"icon": "rune_barrier_all_legendary",
		"id": "5034",
		"name": "Rune of Mass Barrier",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "protect",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5041": {
		"bundle": "34",
		"category": "3",
		"desc": "Healing +2",
		"icon": "rune_heal_rare",
		"id": "5041",
		"name": "Rune of Minor Healing",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5042": {
		"bundle": "34",
		"category": "3",
		"desc": "Healing +3",
		"icon": "rune_heal_epic",
		"id": "5042",
		"name": "Rune of Healing",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"x": "3"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5043": {
		"bundle": "34",
		"category": "3",
		"desc": "Healing +75%, rounded up. Minimum +4.",
		"icon": "rune_heal_legendary",
		"id": "5043",
		"name": "Rune of Greater Healing",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"min_bonus": "4",
				"mult": "0.75"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5044": {
		"bundle": "34",
		"category": "3",
		"desc": "Heal All +1",
		"icon": "rune_heal_all_epic",
		"id": "5044",
		"name": "Rune of Mass Healing",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "heal",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5045": {
		"bundle": "34",
		"category": "3",
		"desc": "Heal All +50%, rounded up. Minimum +2.",
		"icon": "rune_heal_all_legendary",
		"id": "5045",
		"name": "Rune of Greater Mass Healing",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "heal",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5051": {
		"bundle": "34",
		"category": "3",
		"desc": "Vengeance +1",
		"icon": "rune_vengeance_rare",
		"id": "5051",
		"name": "Rune of Minor Vengeance",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5052": {
		"bundle": "34",
		"category": "3",
		"desc": "Vengeance +2",
		"icon": "rune_vengeance_epic",
		"id": "5052",
		"name": "Rune of Vengeance",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5053": {
		"bundle": "34",
		"category": "3",
		"desc": "Vengeance +50%, rounded up. Minimum +3.",
		"icon": "rune_vengeance_legendary",
		"id": "5053",
		"name": "Rune of Greater Vengeance",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5061": {
		"bundle": "34",
		"category": "3",
		"desc": "Armored +1",
		"icon": "rune_shield_rare",
		"id": "5061",
		"name": "Rune of Minor Armor",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5062": {
		"bundle": "34",
		"category": "3",
		"desc": "Armored +2",
		"icon": "rune_shield_epic",
		"id": "5062",
		"name": "Rune of Armor",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5063": {
		"bundle": "34",
		"category": "3",
		"desc": "Armored +50%, rounded up. Minimum +3.",
		"icon": "rune_shield_legendary",
		"id": "5063",
		"name": "Rune of Greater Armor",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5071": {
		"bundle": "34",
		"category": "3",
		"desc": "Empower +1",
		"icon": "rune_empower_rare",
		"id": "5071",
		"name": "Rune of Minor Empower",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5072": {
		"bundle": "34",
		"category": "3",
		"desc": "Empower +2",
		"icon": "rune_empower_epic",
		"id": "5072",
		"name": "Rune of Empower",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5073": {
		"bundle": "34",
		"category": "3",
		"desc": "Empower +50%, rounded up. Minimum +3.",
		"icon": "rune_empower_legendary",
		"id": "5073",
		"name": "Rune of Greater Empower",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5074": {
		"bundle": "34",
		"category": "3",
		"desc": "Empower All +50%, rounded up.",
		"icon": "rune_empower_all_legendary",
		"id": "5074",
		"name": "Rune of Boundless Empower",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "rally",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5081": {
		"bundle": "34",
		"category": "3",
		"desc": "Legion +1",
		"icon": "rune_legion_epic",
		"id": "5081",
		"name": "Rune of Legion",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "legion",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5082": {
		"bundle": "34",
		"category": "3",
		"desc": "Legion +50%, rounded up. Minimum +2.",
		"icon": "rune_legion_legendary",
		"id": "5082",
		"name": "Rune of Greater Legion",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "legion",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5091": {
		"bundle": "34",
		"category": "3",
		"desc": "Fervor +1",
		"icon": "rune_fervor_epic",
		"id": "5091",
		"name": "Rune of Fervor",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "fervor",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5092": {
		"bundle": "34",
		"category": "3",
		"desc": "Fervor +50%, rounded up. Minimum +2.",
		"icon": "rune_fervor_legendary",
		"id": "5092",
		"name": "Rune of Greater Fervor",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "fervor",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5101": {
		"bundle": "34",
		"category": "3",
		"desc": "Hex +1",
		"icon": "rune_hex_rare",
		"id": "5101",
		"name": "Rune of Minor Hex",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5102": {
		"bundle": "34",
		"category": "3",
		"desc": "Hex +2",
		"icon": "rune_hex_epic",
		"id": "5102",
		"name": "Rune of Hex",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5103": {
		"bundle": "34",
		"category": "3",
		"desc": "Hex +50%, rounded up. Minimum +3.",
		"icon": "rune_hex_legendary",
		"id": "5103",
		"name": "Rune of Greater Hex",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5104": {
		"bundle": "34",
		"category": "3",
		"desc": "Hex All +50%, rounded up.",
		"icon": "rune_hex_all_legendary",
		"id": "5104",
		"name": "Rune of Sweeping Hex",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "enfeeble",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5111": {
		"bundle": "34",
		"category": "3",
		"desc": "Bolt +1",
		"icon": "rune_bolt_rare",
		"id": "5111",
		"name": "Rune of Minor Bolt",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5112": {
		"bundle": "34",
		"category": "3",
		"desc": "Bolt +2",
		"icon": "rune_bolt_epic",
		"id": "5112",
		"name": "Rune of Bolt",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5113": {
		"bundle": "34",
		"category": "3",
		"desc": "Bolt +50%, rounded up. Minimum +3.",
		"icon": "rune_bolt_legendary",
		"id": "5113",
		"name": "Rune of Greater Bolt",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5114": {
		"bundle": "34",
		"category": "3",
		"desc": "Bolt All +50%, rounded up.",
		"icon": "rune_bolt_all_legendary",
		"id": "5114",
		"name": "Rune of Storming Bolt",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "strike",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5121": {
		"bundle": "34",
		"category": "3",
		"desc": "Scorch +1",
		"icon": "rune_scorch_epic",
		"id": "5121",
		"name": "Rune of Scorch",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "burn",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5122": {
		"bundle": "34",
		"category": "3",
		"desc": "Scorch +50%, rounded up. Minimum +2.",
		"icon": "rune_scorch_legendary",
		"id": "5122",
		"name": "Rune of Greater Scorch",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "burn",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5151": {
		"bundle": "34",
		"category": "3",
		"desc": "Weaken +1",
		"icon": "rune_weaken_rare",
		"id": "5151",
		"name": "Rune of Minor Weakening",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5152": {
		"bundle": "34",
		"category": "3",
		"desc": "Weaken +2",
		"icon": "rune_weaken_epic",
		"id": "5152",
		"name": "Rune of Weakening",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5153": {
		"bundle": "34",
		"category": "3",
		"desc": "Weaken +75%, rounded up. Minimum +3.",
		"icon": "rune_weaken_legendary",
		"id": "5153",
		"name": "Rune of Greater Weakening",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"min_bonus": "3",
				"mult": "0.75"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5154": {
		"bundle": "34",
		"category": "3",
		"desc": "Weaken All +50%, rounded up.",
		"icon": "rune_weaken_all_legendary",
		"id": "5154",
		"name": "Rune of Infectious Weakening",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "weaken",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5161": {
		"bundle": "34",
		"category": "3",
		"desc": "Pierce +1, Health +1",
		"icon": "rune_pierce_rare",
		"id": "5161",
		"name": "Rune of Minor Piercing",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"health": "1",
			"skill": {
				"id": "pierce",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5162": {
		"bundle": "34",
		"category": "3",
		"desc": "Pierce +2, Health +2",
		"icon": "rune_pierce_epic",
		"id": "5162",
		"name": "Rune of Piercing",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"health": "2",
			"skill": {
				"id": "pierce",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5171": {
		"bundle": "34",
		"category": "3",
		"desc": "Poison +1",
		"icon": "rune_poison_rare",
		"id": "5171",
		"name": "Rune of Poison",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "poison",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5172": {
		"bundle": "34",
		"category": "3",
		"desc": "Poison +50%, rounded up. Minimum +2.",
		"icon": "rune_poison_legendary",
		"id": "5172",
		"name": "Rune of Greater Poison",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "poison",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5181": {
		"bundle": "34",
		"category": "3",
		"desc": "Siphon +2",
		"icon": "rune_siphon_rare",
		"id": "5181",
		"name": "Rune of Minor Siphoning",
		"rarity": "2",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5182": {
		"bundle": "34",
		"category": "3",
		"desc": "Siphon +3",
		"icon": "rune_siphon_epic",
		"id": "5182",
		"name": "Rune of Siphoning",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"x": "3"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5183": {
		"bundle": "34",
		"category": "3",
		"desc": "Siphon +75%, rounded up. Minimum +4.",
		"icon": "rune_siphon_legendary",
		"id": "5183",
		"name": "Rune of Greater Siphoning",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"min_bonus": "4",
				"mult": "0.75"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5184": {
		"bundle": "34",
		"category": "3",
		"desc": "Berserk +1",
		"icon": "rune_berserk_epic",
		"id": "5184",
		"name": "Rune of Berserk",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "berserk",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5185": {
		"bundle": "34",
		"category": "3",
		"desc": "Berserk +50%, rounded up. Minimum +2.",
		"icon": "rune_berserk_legendary",
		"id": "5185",
		"name": "Rune of Greater Berserk",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "berserk",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5186": {
		"bundle": "34",
		"category": "3",
		"desc": "Frostbreath +1",
		"icon": "rune_frostbreath_epic",
		"id": "5186",
		"name": "Rune of Frostbreath",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "frost",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5187": {
		"bundle": "34",
		"category": "3",
		"desc": "Frostbreath +50%, rounded up. Minimum +2.",
		"icon": "rune_frostbreath_legendary",
		"id": "5187",
		"name": "Rune of Greater Frostbreath",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "frost",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5191": {
		"bundle": "34",
		"category": "3",
		"desc": "Valor +2",
		"icon": "rune_valor_epic",
		"id": "5191",
		"name": "Rune of Valor",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "valor",
				"x": "2"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5192": {
		"bundle": "34",
		"category": "3",
		"desc": "Valor +50%, rounded up. Minimum +3.",
		"icon": "rune_valor_legendary",
		"id": "5192",
		"name": "Rune of Greater Valor",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "valor",
				"min_bonus": "3",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5201": {
		"bundle": "34",
		"category": "3",
		"desc": "Nullify +1",
		"icon": "rune_nullify_epic",
		"id": "5201",
		"name": "Rune of Nullification",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "nullify",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5202": {
		"bundle": "34",
		"category": "3",
		"desc": "Nullify +50%, rounded up. Minimum +2.",
		"icon": "rune_nullify_legendary",
		"id": "5202",
		"name": "Rune of Greater Nullification",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "nullify",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5211": {
		"bundle": "34",
		"category": "3",
		"desc": "Corrosive +1",
		"icon": "rune_corrosive_epic",
		"id": "5211",
		"name": "Rune of Corrosion",
		"rarity": "3",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "corrosive",
				"x": "1"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5212": {
		"bundle": "34",
		"category": "3",
		"desc": "Corrosive +50%, rounded up. Minimum +2.",
		"icon": "rune_corrosive_legendary",
		"id": "5212",
		"name": "Rune of Greater Corrosion",
		"rarity": "4",
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "corrosive",
				"min_bonus": "2",
				"mult": "0.5"
			}
		},
		"type": "3",
		"usable": "0"
	},
	"5501": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Angels. May not be crafted.",
		"faction_req": "6",
		"icon": "rune_health_epic",
		"id": "5501",
		"name": "Angelic Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5502": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Elementals. May not be crafted.",
		"faction_req": "5",
		"icon": "rune_health_epic",
		"id": "5502",
		"name": "Elemental Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5503": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Undead. May not be crafted.",
		"faction_req": "7",
		"icon": "rune_health_epic",
		"id": "5503",
		"name": "Undead Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5504": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Goblins. May not be crafted.",
		"faction_req": "11",
		"icon": "rune_health_epic",
		"id": "5504",
		"name": "Goblin Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5505": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Dragons. May not be crafted.",
		"faction_req": "9",
		"icon": "rune_health_epic",
		"id": "5505",
		"name": "Dragon Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5506": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Seafolk. May not be crafted.",
		"faction_req": "12",
		"icon": "rune_health_epic",
		"id": "5506",
		"name": "Seafolk Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5507": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Avian. May not be crafted.",
		"faction_req": "10",
		"icon": "rune_health_epic",
		"id": "5507",
		"name": "Avian Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5508": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Frogs. May not be crafted.",
		"faction_req": "4",
		"icon": "rune_health_epic",
		"id": "5508",
		"name": "Frog Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5509": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Mecha. May not be crafted.",
		"faction_req": "16",
		"icon": "rune_health_epic",
		"id": "5509",
		"name": "Mecha Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	},
	"5510": {
		"bundle": "34",
		"category": "3",
		"desc": "Health +8. May only be embedded on Insect. May not be crafted.",
		"faction_req": "13",
		"icon": "rune_health_epic",
		"id": "5510",
		"name": "Insect Rune of Health",
		"rarity": "3",
		"set": "2",
		"stat_boost": {
			"health": "8"
		},
		"type": "3",
		"usable": "0"
	}
};