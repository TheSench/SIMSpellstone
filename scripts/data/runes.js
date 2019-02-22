"use strict"

var RUNES = {
	"5011": {
		"category": "3",
		"desc": "Health +3",
		"icon": "rune_health_rare",
		"id": "5011",
		"name": "Rune of Minor Health",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"health": 3
		},
		"type": "3"
	},
	"5012": {
		"category": "3",
		"desc": "Health +5",
		"icon": "rune_health_epic",
		"id": "5012",
		"name": "Rune of Health",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"health": 5
		},
		"type": "3"
	},
	"5013": {
		"category": "3",
		"desc": "Health +30%, rounded up. Minimum +6.",
		"icon": "rune_health_legendary",
		"id": "5013",
		"name": "Rune of Greater Health",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"health": {
				"min_bonus": 6,
				"mult": 0.3
			}
		},
		"type": "3"
	},
	"5021": {
		"category": "3",
		"desc": "Invisibility +50%, rounded up.",
		"icon": "rune_invisibility_legendary",
		"id": "5021",
		"name": "Rune of Invisibility",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "evade",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5031": {
		"category": "3",
		"desc": "Barrier +2",
		"icon": "rune_barrier_rare",
		"id": "5031",
		"name": "Rune of Minor Barrier",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"x": 2
			}
		},
		"type": "3"
	},
	"5032": {
		"category": "3",
		"desc": "Barrier +3",
		"icon": "rune_barrier_epic",
		"id": "5032",
		"name": "Rune of Barrier",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"x": 3
			}
		},
		"type": "3"
	},
	"5033": {
		"category": "3",
		"desc": "Barrier +75%, rounded up. Minimum +4.",
		"icon": "rune_barrier_legendary",
		"id": "5033",
		"name": "Rune of Greater Barrier",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "protect",
				"min_bonus": 4,
				"mult": 0.75
			}
		},
		"type": "3"
	},
	"5034": {
		"category": "3",
		"desc": "Barrier All +50%, rounded up.",
		"icon": "rune_barrier_all_legendary",
		"id": "5034",
		"name": "Rune of Mass Barrier",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "protect",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5041": {
		"category": "3",
		"desc": "Healing +2",
		"icon": "rune_heal_rare",
		"id": "5041",
		"name": "Rune of Minor Healing",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"x": 2
			}
		},
		"type": "3"
	},
	"5042": {
		"category": "3",
		"desc": "Healing +3",
		"icon": "rune_heal_epic",
		"id": "5042",
		"name": "Rune of Healing",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"x": 3
			}
		},
		"type": "3"
	},
	"5043": {
		"category": "3",
		"desc": "Healing +75%, rounded up. Minimum +4.",
		"icon": "rune_heal_legendary",
		"id": "5043",
		"name": "Rune of Greater Healing",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "heal",
				"min_bonus": 4,
				"mult": 0.75
			}
		},
		"type": "3"
	},
	"5044": {
		"category": "3",
		"desc": "Heal All +1",
		"icon": "rune_heal_all_epic",
		"id": "5044",
		"name": "Rune of Mass Healing",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "heal",
				"x": 1
			}
		},
		"type": "3"
	},
	"5045": {
		"category": "3",
		"desc": "Heal All +50%, rounded up. Minimum +2.",
		"icon": "rune_heal_all_legendary",
		"id": "5045",
		"name": "Rune of Greater Mass Healing",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "heal",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5051": {
		"category": "3",
		"desc": "Vengeance +1",
		"icon": "rune_vengeance_rare",
		"id": "5051",
		"name": "Rune of Minor Vengeance",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"x": 1
			}
		},
		"type": "3"
	},
	"5052": {
		"category": "3",
		"desc": "Vengeance +2",
		"icon": "rune_vengeance_epic",
		"id": "5052",
		"name": "Rune of Vengeance",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"x": 2
			}
		},
		"type": "3"
	},
	"5053": {
		"category": "3",
		"desc": "Vengeance +50%, rounded up. Minimum +3.",
		"icon": "rune_vengeance_legendary",
		"id": "5053",
		"name": "Rune of Greater Vengeance",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counter",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5061": {
		"category": "3",
		"desc": "Armored +1",
		"icon": "rune_shield_rare",
		"id": "5061",
		"name": "Rune of Minor Armor",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"x": 1
			}
		},
		"type": "3"
	},
	"5062": {
		"category": "3",
		"desc": "Armored +2",
		"icon": "rune_shield_epic",
		"id": "5062",
		"name": "Rune of Armor",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"x": 2
			}
		},
		"type": "3"
	},
	"5063": {
		"category": "3",
		"desc": "Armored +50%, rounded up. Minimum +3.",
		"icon": "rune_shield_legendary",
		"id": "5063",
		"name": "Rune of Greater Armor",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "armored",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5071": {
		"category": "3",
		"desc": "Empower +1",
		"icon": "rune_empower_rare",
		"id": "5071",
		"name": "Rune of Minor Empower",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"x": 1
			}
		},
		"type": "3"
	},
	"5072": {
		"category": "3",
		"desc": "Empower +2",
		"icon": "rune_empower_epic",
		"id": "5072",
		"name": "Rune of Empower",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"x": 2
			}
		},
		"type": "3"
	},
	"5073": {
		"category": "3",
		"desc": "Empower +50%, rounded up. Minimum +3.",
		"icon": "rune_empower_legendary",
		"id": "5073",
		"name": "Rune of Greater Empower",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "rally",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5074": {
		"category": "3",
		"desc": "Empower All +50%, rounded up.",
		"icon": "rune_empower_all_legendary",
		"id": "5074",
		"name": "Rune of Boundless Empower",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "rally",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5081": {
		"category": "3",
		"desc": "Legion +1",
		"icon": "rune_legion_epic",
		"id": "5081",
		"name": "Rune of Legion",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "legion",
				"x": 1
			}
		},
		"type": "3"
	},
	"5082": {
		"category": "3",
		"desc": "Legion +50%, rounded up. Minimum +2.",
		"icon": "rune_legion_legendary",
		"id": "5082",
		"name": "Rune of Greater Legion",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "legion",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5091": {
		"category": "3",
		"desc": "Fervor +1",
		"icon": "rune_fervor_epic",
		"id": "5091",
		"name": "Rune of Fervor",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "fervor",
				"x": 1
			}
		},
		"type": "3"
	},
	"5092": {
		"category": "3",
		"desc": "Fervor +50%, rounded up. Minimum +2.",
		"icon": "rune_fervor_legendary",
		"id": "5092",
		"name": "Rune of Greater Fervor",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "fervor",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5101": {
		"category": "3",
		"desc": "Hex +1",
		"icon": "rune_hex_rare",
		"id": "5101",
		"name": "Rune of Minor Hex",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"x": 1
			}
		},
		"type": "3"
	},
	"5102": {
		"category": "3",
		"desc": "Hex +2",
		"icon": "rune_hex_epic",
		"id": "5102",
		"name": "Rune of Hex",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"x": 2
			}
		},
		"type": "3"
	},
	"5103": {
		"category": "3",
		"desc": "Hex +50%, rounded up. Minimum +3.",
		"icon": "rune_hex_legendary",
		"id": "5103",
		"name": "Rune of Greater Hex",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enfeeble",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5104": {
		"category": "3",
		"desc": "Hex All +50%, rounded up.",
		"icon": "rune_hex_all_legendary",
		"id": "5104",
		"name": "Rune of Sweeping Hex",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "enfeeble",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5111": {
		"category": "3",
		"desc": "Bolt +1",
		"icon": "rune_bolt_rare",
		"id": "5111",
		"name": "Rune of Minor Bolt",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"x": 1
			}
		},
		"type": "3"
	},
	"5112": {
		"category": "3",
		"desc": "Bolt +2",
		"icon": "rune_bolt_epic",
		"id": "5112",
		"name": "Rune of Bolt",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"x": 2
			}
		},
		"type": "3"
	},
	"5113": {
		"category": "3",
		"desc": "Bolt +50%, rounded up. Minimum +3.",
		"icon": "rune_bolt_legendary",
		"id": "5113",
		"name": "Rune of Greater Bolt",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "strike",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5114": {
		"category": "3",
		"desc": "Bolt All +50%, rounded up.",
		"icon": "rune_bolt_all_legendary",
		"id": "5114",
		"name": "Rune of Storming Bolt",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "strike",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5121": {
		"category": "3",
		"desc": "Scorch +1",
		"icon": "rune_scorch_epic",
		"id": "5121",
		"name": "Rune of Scorch",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "burn",
				"x": 1
			}
		},
		"type": "3"
	},
	"5122": {
		"category": "3",
		"desc": "Scorch +50%, rounded up. Minimum +2.",
		"icon": "rune_scorch_legendary",
		"id": "5122",
		"name": "Rune of Greater Scorch",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "burn",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5151": {
		"category": "3",
		"desc": "Weaken +1",
		"icon": "rune_weaken_rare",
		"id": "5151",
		"name": "Rune of Minor Weakening",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"x": 1
			}
		},
		"type": "3"
	},
	"5152": {
		"category": "3",
		"desc": "Weaken +2",
		"icon": "rune_weaken_epic",
		"id": "5152",
		"name": "Rune of Weakening",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"x": 2
			}
		},
		"type": "3"
	},
	"5153": {
		"category": "3",
		"desc": "Weaken +75%, rounded up. Minimum +3.",
		"icon": "rune_weaken_legendary",
		"id": "5153",
		"name": "Rune of Greater Weakening",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "weaken",
				"min_bonus": 3,
				"mult": 0.75
			}
		},
		"type": "3"
	},
	"5154": {
		"category": "3",
		"desc": "Weaken All +50%, rounded up.",
		"icon": "rune_weaken_all_legendary",
		"id": "5154",
		"name": "Rune of Infectious Weakening",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "weaken",
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5161": {
		"category": "3",
		"desc": "Pierce +1, Health +1",
		"icon": "rune_pierce_rare",
		"id": "5161",
		"name": "Rune of Minor Piercing",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"health": 1,
			"skill": {
				"id": "pierce",
				"x": 1
			}
		},
		"type": "3"
	},
	"5162": {
		"category": "3",
		"desc": "Pierce +2, Health +2",
		"icon": "rune_pierce_epic",
		"id": "5162",
		"name": "Rune of Piercing",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"health": 2,
			"skill": {
				"id": "pierce",
				"x": 2
			}
		},
		"type": "3"
	},
	"5171": {
		"category": "3",
		"desc": "Poison +1",
		"icon": "rune_poison_rare",
		"id": "5171",
		"name": "Rune of Poison",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "poison",
				"x": 1
			}
		},
		"type": "3"
	},
	"5172": {
		"category": "3",
		"desc": "Poison +50%, rounded up. Minimum +2.",
		"icon": "rune_poison_legendary",
		"id": "5172",
		"name": "Rune of Greater Poison",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "poison",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5181": {
		"category": "3",
		"desc": "Siphon +2",
		"icon": "rune_siphon_rare",
		"id": "5181",
		"name": "Rune of Minor Siphoning",
		"rarity": 2,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"x": 2
			}
		},
		"type": "3"
	},
	"5182": {
		"category": "3",
		"desc": "Siphon +3",
		"icon": "rune_siphon_epic",
		"id": "5182",
		"name": "Rune of Siphoning",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"x": 3
			}
		},
		"type": "3"
	},
	"5183": {
		"category": "3",
		"desc": "Siphon +75%, rounded up. Minimum +4.",
		"icon": "rune_siphon_legendary",
		"id": "5183",
		"name": "Rune of Greater Siphoning",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "leech",
				"min_bonus": 4,
				"mult": 0.75
			}
		},
		"type": "3"
	},
	"5184": {
		"category": "3",
		"desc": "Berserk +1",
		"icon": "rune_berserk_epic",
		"id": "5184",
		"name": "Rune of Berserk",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "berserk",
				"x": 1
			}
		},
		"type": "3"
	},
	"5185": {
		"category": "3",
		"desc": "Berserk +50%, rounded up. Minimum +2.",
		"icon": "rune_berserk_legendary",
		"id": "5185",
		"name": "Rune of Greater Berserk",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "berserk",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5186": {
		"category": "3",
		"desc": "Frostbreath +1",
		"icon": "rune_frostbreath_epic",
		"id": "5186",
		"name": "Rune of Frostbreath",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "frost",
				"x": 1
			}
		},
		"type": "3"
	},
	"5187": {
		"category": "3",
		"desc": "Frostbreath +50%, rounded up. Minimum +2.",
		"icon": "rune_frostbreath_legendary",
		"id": "5187",
		"name": "Rune of Greater Frostbreath",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "frost",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5191": {
		"category": "3",
		"desc": "Valor +2",
		"icon": "rune_valor_epic",
		"id": "5191",
		"name": "Rune of Valor",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "valor",
				"x": 2
			}
		},
		"type": "3"
	},
	"5192": {
		"category": "3",
		"desc": "Valor +50%, rounded up. Minimum +3.",
		"icon": "rune_valor_legendary",
		"id": "5192",
		"name": "Rune of Greater Valor",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "valor",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5201": {
		"category": "3",
		"desc": "Nullify +1",
		"icon": "rune_nullify_epic",
		"id": "5201",
		"name": "Rune of Nullification",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "nullify",
				"x": 1
			}
		},
		"type": "3"
	},
	"5202": {
		"category": "3",
		"desc": "Nullify +50%, rounded up. Minimum +2.",
		"icon": "rune_nullify_legendary",
		"id": "5202",
		"name": "Rune of Greater Nullification",
		"rarity": 4,
		"set": "3",
		"stat_boost": {
			"skill": {
				"id": "nullify",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5211": {
		"category": "3",
		"desc": "Corrosive +1",
		"icon": "rune_corrosive_epic",
		"id": "5211",
		"name": "Rune of Corrosion",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "corrosive",
				"x": 1
			}
		},
		"type": "3"
	},
	"5212": {
		"category": "3",
		"desc": "Corrosive +50%, rounded up. Minimum +2.",
		"icon": "rune_corrosive_legendary",
		"id": "5212",
		"name": "Rune of Greater Corrosion",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "corrosive",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5221": {
		"category": "3",
		"desc": "Ward +2",
		"icon": "rune_ward_epic",
		"id": "5221",
		"name": "Rune of Warding",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "absorb",
				"x": 2
			}
		},
		"type": "3"
	},
	"5222": {
		"category": "3",
		"desc": "Ward +30%, rounded up. Minimum +3.",
		"icon": "rune_ward_legendary",
		"id": "5222",
		"name": "Rune of Greater Warding",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "absorb",
				"min_bonus": 3,
				"mult": 0.3
			}
		},
		"type": "3"
	},
	"5231": {
		"category": "3",
		"desc": "Shroud +1",
		"icon": "rune_shroud_epic",
		"id": "5231",
		"name": "Rune of Shroud",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "stasis",
				"x": 1
			}
		},
		"type": "3"
	},
	"5241": {
		"category": "3",
		"desc": "Backlash +1",
		"icon": "rune_backlash_epic",
		"id": "5241",
		"name": "Rune of Backlash",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "backlash",
				"x": 1
			}
		},
		"type": "3"
	},
	"5251": {
		"category": "3",
		"desc": "Emberhide +1",
		"icon": "rune_emberhide_epic",
		"id": "5251",
		"name": "Rune of Emberhide",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "counterburn",
				"x": 1
			}
		},
		"type": "3"
	},
	"5261": {
		"category": "3",
		"desc": "Enrage +2",
		"icon": "rune_enrage_epic",
		"id": "5261",
		"name": "Rune of Enrage",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "enrage",
				"x": 2
			}
		},
		"type": "3"
	},
	"5262": {
		"category": "3",
		"desc": "Enrage All +1",
		"icon": "rune_enrage all_epic",
		"id": "5262",
		"name": "Rune of Mass Enrage",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "enrage",
				"x": 1
			}
		},
		"type": "3"
	},
	"5263": {
		"category": "3",
		"desc": "Enrage All +50%, rounded up. Minimum +2.",
		"icon": "rune_enrage_all_legendary",
		"id": "5263",
		"name": "Rune of Greater Mass Enrage",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"all": "1",
				"id": "enrage",
				"min_bonus": 2,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5271": {
		"category": "3",
		"desc": "Daze +2",
		"icon": "rune_daze_epic",
		"id": "5271",
		"name": "Rune of Dazing",
		"rarity": 3,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "daze",
				"x": 2
			}
		},
		"type": "3"
	},
	"5272": {
		"category": "3",
		"desc": "Daze +50%, rounded up. Minimum +3.",
		"icon": "rune_daze_legendary",
		"id": "5272",
		"name": "Rune of Greater Dazing",
		"rarity": 4,
		"set": "1",
		"stat_boost": {
			"skill": {
				"id": "daze",
				"min_bonus": 3,
				"mult": 0.5
			}
		},
		"type": "3"
	},
	"5501": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Angels. May not be crafted.",
		"faction_req": "6",
		"icon": "rune_health_epic",
		"id": "5501",
		"name": "Angelic Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5502": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Elementals. May not be crafted.",
		"faction_req": "5",
		"icon": "rune_health_epic",
		"id": "5502",
		"name": "Elemental Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5503": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Undead. May not be crafted.",
		"faction_req": "7",
		"icon": "rune_health_epic",
		"id": "5503",
		"name": "Undead Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5504": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Goblins. May not be crafted.",
		"faction_req": "11",
		"icon": "rune_health_epic",
		"id": "5504",
		"name": "Goblin Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5505": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Dragons. May not be crafted.",
		"faction_req": "9",
		"icon": "rune_health_epic",
		"id": "5505",
		"name": "Dragon Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5506": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Seafolk. May not be crafted.",
		"faction_req": "12",
		"icon": "rune_health_epic",
		"id": "5506",
		"name": "Seafolk Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5507": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Avian. May not be crafted.",
		"faction_req": "10",
		"icon": "rune_health_epic",
		"id": "5507",
		"name": "Avian Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5508": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Frogs. May not be crafted.",
		"faction_req": "4",
		"icon": "rune_health_epic",
		"id": "5508",
		"name": "Frog Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5509": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Mecha. May not be crafted.",
		"faction_req": "16",
		"icon": "rune_health_epic",
		"id": "5509",
		"name": "Mecha Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	},
	"5510": {
		"category": "3",
		"desc": "Health +8. May only be embedded on Insect. May not be crafted.",
		"faction_req": "13",
		"icon": "rune_health_epic",
		"id": "5510",
		"name": "Insect Rune of Health",
		"rarity": 3,
		"set": "2",
		"stat_boost": {
			"health": 8
		},
		"type": "3"
	}
};