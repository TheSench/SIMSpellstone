"use strict"

var BATTLEGROUNDS = {
	"101": {
		"desc": "All Dragons are bestowed with extraordinary vitality, causing them to be Healed each turn by 25%.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"mult": 0.25,
				"y": "9"
			}
		],
		"id": "101",
		"name": "Age of Dragons"
	},
	"102": {
		"desc": "All Elementals are Empowered from the mana rich land, raising their Attack by 2 each turn.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 2,
				"y": "5"
			}
		],
		"id": "102",
		"name": "World Awakening"
	},
	"103": {
		"desc": "All Frogs gain the Protection of the Guardian Stone, reducing damage taken by 2.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "protect",
				"x": 2,
				"y": "4"
			}
		],
		"id": "103",
		"name": "Rise of the Frogs"
	},
	"104": {
		"desc": "When Barrier is broken, deals damage to the creature across from it or the enemy Hero equal to the Barrier value.",
		"effect": [
			{
				"effect_type": "evolve_skill",
				"id": "protect",
				"s": "protect_ice"
			},
			{
				"all": "1",
				"effect_type": "evolve_skill",
				"id": "protect",
				"s": "protect_ice"
			}
		],
		"id": "104",
		"name": "Iceshatter Barrier"
	},
	"105": {
		"desc": "The Undead are invigorated with an unquenchable hunger, giving them Berserk equal to 15% of their base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "berserk",
				"mult": 0.15,
				"y": "7"
			}
		],
		"id": "105",
		"name": "Relentless Hunger"
	},
	"106": {
		"desc": "Angels have risen to fight, gaining Legion equal to 50% of their base Attack.",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "legion",
				"mult": 0.5,
				"y": "6"
			}
		],
		"id": "106",
		"name": "Angelic Legion"
	},
	"107": {
		"desc": "Seismic shifts have given Elementals incredible power! Elementals have their Attack increased by 75% of their base, rounded up!",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.75,
				"y": "5"
			}
		],
		"id": "107",
		"name": "Elemental Surge"
	},
	"108": {
		"desc": "Frogs have evolved to have Poisonbolt! They deal bolt damage and leave poison with their tongue, equal to 50% of their base attack!",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "poisonstrike",
				"mult": 0.5,
				"y": "4"
			}
		],
		"id": "108",
		"name": "Poisonbolt Evolution"
	},
	"109": {
		"desc": "The first time Avians activate, they permanently double their base Attack if the opposing card has more Attack.",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "valor",
				"mult": 1,
				"y": "10"
			}
		],
		"id": "109",
		"name": "Airborne Mastery"
	},
	"110": {
		"desc": "Insects gain a hardened carapace, gaining Armored value equal to 10% of their base Health, rounded up.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "armored",
				"mult": 0.1,
				"y": "13"
			}
		],
		"id": "110",
		"name": "Hardened Carapace"
	},
	"111": {
		"desc": "When an Elemental is damaged by an attack, it deals Scorch damage to the attacker equal to 10% of the Elemental's base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "counterburn",
				"mult": 0.1,
				"y": "5"
			}
		],
		"id": "111",
		"name": "Searing Essence"
	},
	"112": {
		"desc": "Each active Goblin throws a number of bombs equal to their base Attack at the start of each turn before other skills. Each bomb deals 1 damage and does not benefit from Hex or Venom.",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "barrage",
				"mult": 1,
				"y": "11"
			}
		],
		"id": "112",
		"name": "Goblin Barrage"
	},
	"113": {
		"desc": "All Seafolk dive beneath the waves, gaining a Barrier each turn equal to 30% of their base Health while on delay.",
		"effect": [
			{
				"all": "1",
				"base": "health",
				"effect_type": "skill",
				"id": "protect_seafolk",
				"mult": 0.3,
				"y": "12"
			}
		],
		"id": "113",
		"name": "Underwater Shelter"
	},
	"114": {
		"desc": "Each Avian marks a random target upon first activation, Hexing them for 15% of their base Health. The Avian chooses a new mark when their current mark dies. Ignores Invisibility.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "mark",
				"mult": 0.15,
				"y": "10"
			}
		],
		"id": "114",
		"name": "Eyes in the Sky"
	},
	"115": {
		"desc": "When an Undead dies it creates an Unearthed Skeleton token creature with 50% Attack and Health of the Undead that died. The token has Invisibility and Berserk values based on its rarity.",
		"effect": [
			{
				"card": 607,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 3,
				"mult": 0.5,
				"rarity": 1,
				"y": "7"
			},
			{
				"card": 608,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 4,
				"mult": 0.5,
				"rarity": 2,
				"y": "7"
			},
			{
				"card": 609,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 5,
				"mult": 0.5,
				"rarity": 3,
				"y": "7"
			},
			{
				"card": 610,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 6,
				"mult": 0.5,
				"rarity": 4,
				"y": "7"
			},
			{
				"card": 611,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 7,
				"mult": 0.5,
				"rarity": 5,
				"y": "7"
			}
		],
		"id": "115",
		"name": "Undead Unearthed"
	},
	"116": {
		"desc": "Seismic shifts have given Elementals incredible power! Elementals have their Attack increased by 75% of their base, rounded up!",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "enlarge",
				"mult": 0.75,
				"y": "5"
			}
		],
		"id": "116",
		"name": "Elemental Surge"
	},
	"117": {
		"desc": "Insects gain Venom equal to 10% of their Health. Creatures damaged by Insects are inflicted with Venom, taking damage at the end of their turn and taking additional damage from attacks and skills.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "venom",
				"mult": 0.1,
				"y": "13"
			}
		],
		"id": "117",
		"name": "Venom"
	},
	"118": {
		"desc": "All Mechas have upgraded their protective protocols, gaining a Barrier equal to their base Attack each time they deal Attack damage.",
		"effect": [
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "reinforce",
				"mult": 1,
				"y": "16"
			}
		],
		"id": "118",
		"name": "Energy Shield"
	},
	"119": {
		"desc": "Elementals gain abilities based on faction! Aether have their Attack increased by 50% of the base, Chaos gain Vengeance equal to 50% of base Attack, and Wyld gain an additional 25% base Health.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.5,
				"y": "1,5"
			},
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "counter",
				"mult": 0.5,
				"y": "2,5"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.25,
				"y": "3,5"
			}
		],
		"id": "119",
		"name": "Elemental Conflux"
	},
	"120": {
		"desc": "Dragons gain Scorch equal to 20% of their base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.2,
				"y": "9"
			}
		],
		"id": "120",
		"name": "Dragonfire"
	},
	"121": {
		"desc": "Angels have transcended, gaining Legion equal to 15% of their base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "legion",
				"mult": 0.15,
				"y": "6"
			}
		],
		"id": "121",
		"name": "Angelic Assault"
	},
	"122": {
		"desc": "All Mechas have upgraded their protective protocols, gaining Ward equal to 3 plus 10% of their base Health.",
		"effect": [
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "absorb",
				"mult": 0.1,
				"x": 3,
				"y": "16"
			}
		],
		"id": "122",
		"name": "Energy Warding"
	},
	"123": {
		"desc": "Aether have their Attack and Health increased by 25% of the base.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.25,
				"y": "1"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.25,
				"y": "1"
			}
		],
		"id": "123",
		"name": "Aether Triumph"
	},
	"124": {
		"desc": "Chaos have their Attack and Health increased by 25% of the base.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.25,
				"y": "2"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.25,
				"y": "2"
			}
		],
		"id": "124",
		"name": "Chaos Triumph"
	},
	"125": {
		"desc": "Wyld have their Attack and Health increased by 25% of the base.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.25,
				"y": "3"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.25,
				"y": "3"
			}
		],
		"id": "125",
		"name": "Wyld Triumph"
	},
	"126": {
		"desc": "Seafolk harness the power of the ocean, increasing their Attack by 15% of their base Health!",
		"effect": [
			{
				"base": "health",
				"effect_type": "scale_attack",
				"mult": 0.15,
				"y": "12"
			}
		],
		"id": "126",
		"name": "Brine Edge"
	},
	"127": {
		"desc": "Insects gain Venom equal to 1 plus 15% of their base Health. Creatures affected by Venom take damage at the end of the turn, and take additional damage from attacks and skills.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "venom",
				"mult": 0.15,
				"x": 1,
				"y": "13"
			}
		],
		"id": "127",
		"name": "Insectile Venom"
	},
	"128": {
		"desc": "When a Frog is damaged by an attack, it deals Poison damage to the attacker equal to 5 plus 10% of the Frog's base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "counterpoison",
				"mult": 0.1,
				"x": 5,
				"y": "4"
			}
		],
		"id": "128",
		"name": "Poisonhide"
	},
	"129": {
		"desc": "After dealing Attack damage, permanently increases Attack of the lowest Attack active non-tower ally creature by 20% of the Attacker's base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "swarm",
				"mult": 0.2,
				"y": "13"
			}
		],
		"id": "129",
		"name": "Insect Swarm"
	},
	"130": {
		"desc": "Deals damage to opposing creature and then heals self, even while on delay. Damage and heal are equal to 5% plus 3 of the card’s base Health. This damage cannot be increased.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "vampirism",
				"mult": 0.05,
				"x": 3,
				"y": "7"
			}
		],
		"id": "130",
		"name": "Undead Vampirism"
	},
	"131": {
		"desc": "Frogs deal extra damage on their first attack each turn equal to 25% of their base Health and gain Pierce equal to their base Attack.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.25,
				"y": "4"
			},
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "pierce",
				"mult": 1,
				"y": "4"
			}
		],
		"id": "131",
		"name": "Lily & Spear Formation"
	},
	"132": {
		"desc": "Dragons of 0-2 Delay gain Scorch equal to 20% of their base Health. Dragons of 3-4 Delay gain Regenerate equal to 10% of their base Health plus 4.",
		"effect": [
			{
				"base": "health",
				"delay": [
					0,
					1,
					2
				],
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.2,
				"y": "9"
			},
			{
				"base": "health",
				"delay": [
					3,
					4
				],
				"effect_type": "add_skill",
				"id": "regenerate",
				"mult": 0.1,
				"x": 4,
				"y": "9"
			}
		],
		"id": "132",
		"name": "Day of Dragons"
	},
	"133": {
		"desc": "Aether Elementals gain Barrier 4 + 10% of their Health. Chaos gain Scorch equal to 75% of their Attack. Wyld deal more damage on their first attack each turn equal to 25% of their Health.",
		"effect": [
			{
				"all": "1",
				"base": "health",
				"effect_type": "skill",
				"id": "protect",
				"ignore_nullify": "1",
				"mult": 0.1,
				"x": 4,
				"y": "1,5"
			},
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.75,
				"y": "2,5"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.25,
				"y": "3,5"
			}
		],
		"id": "133",
		"name": "Elemental Discordance"
	},
	"134": {
		"desc": "Insects gain Armor equal to 10% of their base Health, and Regenerate equal to 10% of their base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "regenerate",
				"mult": 0.1,
				"y": "13"
			},
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "armored",
				"mult": 0.1,
				"y": "13"
			}
		],
		"id": "134",
		"name": "Regenerating Carapace"
	},
	"135": {
		"desc": "A bunch of BGEs are active.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "legion",
				"mult": 0.15,
				"y": "6"
			},
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "mark",
				"mult": 0.15,
				"y": "10"
			},
			{
				"base": "health",
				"delay": [
					0,
					1,
					2
				],
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.2,
				"y": "9"
			},
			{
				"base": "health",
				"delay": [
					3,
					4
				],
				"effect_type": "add_skill",
				"id": "regenerate",
				"mult": 0.1,
				"x": 4,
				"y": "9"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "skill",
				"id": "protect",
				"ignore_nullify": "1",
				"mult": 0.1,
				"x": 4,
				"y": "1,5"
			},
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.75,
				"y": "2,5"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.25,
				"y": "3,5"
			},
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "poisonstrike",
				"mult": 0.5,
				"y": "4"
			},
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "vampirism",
				"mult": 0.05,
				"x": 3,
				"y": "7"
			},
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "barrage",
				"mult": 1,
				"y": "11"
			},
			{
				"base": "health",
				"effect_type": "scale_attack",
				"mult": 0.15,
				"y": "12"
			},
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "armored",
				"mult": 0.1,
				"y": "13"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "absorb",
				"mult": 0.1,
				"x": 3,
				"y": "16"
			}
		],
		"id": "135",
		"name": "All For One"
	},
	"136": {
		"desc": "Avian of 0-2 delay deal extra damage on their first attack each turn equal to 40% of their base Attack. Avians of 3-4 delay gain Shroud equal to 10% +2 of their base Health.",
		"effect": [
			{
				"base": "attack",
				"delay": [
					0,
					1,
					2
				],
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.4,
				"y": "10"
			},
			{
				"base": "health",
				"delay": [
					3,
					4
				],
				"effect_type": "add_skill",
				"id": "stasis",
				"mult": 0.1,
				"x": 2,
				"y": "10"
			}
		],
		"id": "136",
		"name": "Skydiving Assault"
	},
	"137": {
		"desc": "All Mechas have modified their weaponry, increasing their Attack by 15% of their base Health!",
		"effect": [
			{
				"base": "health",
				"effect_type": "scale_attack",
				"mult": 0.15,
				"y": "16"
			}
		],
		"id": "137",
		"name": "Steel's Edge"
	},
	"138": {
		"desc": "Dragons of 0-2 delay gain Hex equal to 20% of their base Health. Dragons of 3-4 delay gain Weaken equal to 30% of their base Health, and gain Vengeance 8.",
		"effect": [
			{
				"base": "health",
				"delay": [
					0,
					1,
					2
				],
				"effect_type": "add_skill",
				"id": "enfeeblebge",
				"mult": 0.2,
				"y": "9"
			},
			{
				"base": "health",
				"delay": [
					3,
					4
				],
				"effect_type": "add_skill",
				"id": "weakenbge",
				"mult": 0.3,
				"y": "9"
			},
			{
				"delay": [
					3,
					4
				],
				"effect_type": "add_skill",
				"id": "counter",
				"x": 8,
				"y": "9"
			}
		],
		"id": "138",
		"name": "Fear Aura"
	},
	"501": {
		"desc": "All enemies start with a Castle Tower card.",
		"effect": {
			"2": {
				"id": 601,
				"level": 1
			},
			"3": {
				"id": 601,
				"level": 2
			},
			"4": {
				"id": 601,
				"level": 3
			},
			"5": {
				"id": 601,
				"level": 4
			},
			"6": {
				"id": 601,
				"level": 5
			},
			"7": {
				"id": 601,
				"level": 6
			},
			"8": {
				"id": 601,
				"level": 7
			},
			"9": {
				"id": 601,
				"level": 8
			},
			"10": {
				"id": 601,
				"level": 9
			},
			"11": {
				"id": 601,
				"level": 10
			},
			"12": {
				"id": 601,
				"level": 11
			},
			"13": {
				"id": 601,
				"level": 12
			},
			"14": {
				"id": 601,
				"level": 13
			},
			"15": {
				"id": 601,
				"level": 14
			},
			"16": {
				"id": 601,
				"level": 15
			},
			"17": {
				"id": 601,
				"level": 16
			},
			"18": {
				"id": 601,
				"level": 17
			}
		},
		"id": "501",
		"isTower": true,
		"name": "Castle Siege"
	},
	"502": {
		"desc": "All enemies start with a Cannon Tower card.",
		"effect": {
			"2": {
				"id": 602,
				"level": 1
			},
			"3": {
				"id": 602,
				"level": 2
			},
			"4": {
				"id": 602,
				"level": 3
			},
			"5": {
				"id": 602,
				"level": 4
			},
			"6": {
				"id": 602,
				"level": 5
			},
			"7": {
				"id": 602,
				"level": 6
			},
			"8": {
				"id": 602,
				"level": 7
			},
			"9": {
				"id": 602,
				"level": 8
			},
			"10": {
				"id": 602,
				"level": 9
			},
			"11": {
				"id": 602,
				"level": 10
			},
			"12": {
				"id": 602,
				"level": 11
			},
			"13": {
				"id": 602,
				"level": 12
			},
			"14": {
				"id": 602,
				"level": 13
			},
			"15": {
				"id": 602,
				"level": 14
			},
			"16": {
				"id": 602,
				"level": 15
			},
			"17": {
				"id": 602,
				"level": 16
			},
			"18": {
				"id": 602,
				"level": 17
			}
		},
		"id": "502",
		"isTower": true,
		"name": "Cannon Siege"
	},
	"503": {
		"desc": "Frostbite Heals and Empowers all of his allies, increasing in strength as he levels up.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 1.1
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 0.6
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "503",
		"name": "Frostbite's Aura",
		"scale_with_level": "1",
		"starting_level": "26"
	},
	"504": {
		"desc": "Nethergore Heals and Empowers all of his allies, increasing in strength as he levels up.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 1.2
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 0.7
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "504",
		"name": "Nethergore's Reckoning",
		"scale_with_level": "1",
		"starting_level": "26"
	},
	"505": {
		"desc": "Fortune's Favor Heals and Empowers all of its allies, increasing in strength as it levels up.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 1.1
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 0.6
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "505",
		"name": "Fortune's Favoring",
		"scale_with_level": "1",
		"starting_level": "26"
	},
	"506": {
		"desc": "All enemies start with a Tree of Life card.",
		"effect": {
			"2": {
				"id": 603,
				"level": 2
			},
			"3": {
				"id": 603,
				"level": 3
			},
			"4": {
				"id": 603,
				"level": 4
			},
			"5": {
				"id": 603,
				"level": 5
			},
			"6": {
				"id": 603,
				"level": 6
			},
			"7": {
				"id": 603,
				"level": 7
			},
			"8": {
				"id": 603,
				"level": 8
			},
			"9": {
				"id": 603,
				"level": 9
			},
			"10": {
				"id": 603,
				"level": 10
			},
			"11": {
				"id": 603,
				"level": 11
			},
			"12": {
				"id": 603,
				"level": 12
			},
			"13": {
				"id": 603,
				"level": 13
			},
			"14": {
				"id": 603,
				"level": 14
			},
			"15": {
				"id": 603,
				"level": 15
			},
			"16": {
				"id": 603,
				"level": 16
			},
			"17": {
				"id": 603,
				"level": 17
			},
			"18": {
				"id": 603,
				"level": 18
			}
		},
		"id": "506",
		"isTower": true,
		"name": "Tree of Life"
	},
	"507": {
		"desc": "When an Elemental card is played, a Storm card is shuffled into the opponent's deck. When a Storm card is drawn, all their creatures are weakened for that turn!",
		"effect": [
			{
				"base": "attack",
				"effect_type": "trap_card",
				"id": 604,
				"mult": 0.5,
				"target_deck": "opponent",
				"y": "5"
			}
		],
		"id": "507",
		"name": "Flash Storms"
	},
	"508": {
		"desc": "Bolt and Bolt All skills deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "strike"
			}
		],
		"id": "508",
		"name": "The Thunderdome"
	},
	"509": {
		"desc": "All enemies start with a Fortified Tower card. The tower evolves with the strongest opponents!",
		"effect": {
			"2": {
				"id": 605,
				"level": 1
			},
			"3": {
				"id": 605,
				"level": 2
			},
			"4": {
				"id": 605,
				"level": 3
			},
			"5": {
				"id": 605,
				"level": 4
			},
			"6": {
				"id": 605,
				"level": 5
			},
			"7": {
				"id": 605,
				"level": 6
			},
			"8": {
				"id": 605,
				"level": 7
			},
			"9": {
				"id": 605,
				"level": 8
			},
			"10": {
				"id": 605,
				"level": 9
			},
			"11": {
				"id": 605,
				"level": 10
			},
			"12": {
				"id": 605,
				"level": 11
			},
			"13": {
				"id": 605,
				"level": 12
			},
			"14": {
				"id": 605,
				"level": 13
			},
			"15": {
				"id": 606,
				"level": 1
			},
			"16": {
				"id": 606,
				"level": 2
			},
			"17": {
				"id": 606,
				"level": 3
			},
			"18": {
				"id": 606,
				"level": 4
			}
		},
		"id": "509",
		"isTower": true,
		"name": "Fortified Tower"
	},
	"510": {
		"desc": "Dungeon's Despair Heals and Empowers all the enemy creatures, increasing in strength as the dungeon level increases.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 0.2
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 0.2
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "510",
		"name": "Dungeon's Despair",
		"scale_with_level": "1",
		"starting_level": "130"
	},
	"511": {
		"desc": "Barrier and Barrier All skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "protect"
			}
		],
		"id": "511",
		"name": "Runic Sanctuary"
	},
	"512": {
		"desc": "Players who go second start with a Castle Tower card.",
		"effect": {
			"2": {
				"id": 601,
				"level": 1
			},
			"3": {
				"id": 601,
				"level": 2
			},
			"4": {
				"id": 601,
				"level": 3
			},
			"5": {
				"id": 601,
				"level": 4
			},
			"6": {
				"id": 601,
				"level": 5
			},
			"7": {
				"id": 601,
				"level": 6
			},
			"8": {
				"id": 601,
				"level": 7
			},
			"9": {
				"id": 601,
				"level": 8
			},
			"10": {
				"id": 601,
				"level": 9
			},
			"11": {
				"id": 601,
				"level": 10
			},
			"12": {
				"id": 601,
				"level": 11
			},
			"13": {
				"id": 601,
				"level": 12
			},
			"14": {
				"id": 601,
				"level": 13
			},
			"15": {
				"id": 601,
				"level": 14
			},
			"16": {
				"id": 601,
				"level": 15
			},
			"17": {
				"id": 601,
				"level": 16
			},
			"18": {
				"id": 601,
				"level": 17
			}
		},
		"id": "512",
		"isTower": true,
		"name": "Defender's Castle"
	},
	"513": {
		"desc": "Scorch skills deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "burn"
			}
		],
		"id": "513",
		"name": "Firestarter"
	},
	"514": {
		"desc": "In Arena Battles, the player who goes first has one additional Delay added to the first card they play in a battle.",
		"effect": [
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 1
				},
				"effect_type": "on_play",
				"first_play": 1
			}
		],
		"id": "514",
		"name": "The Arena"
	},
	"515": {
		"desc": "All Frogs gain Barrier each turn equal to 20% of their base Health.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "protect",
				"mult": 0.2,
				"y": "4"
			}
		],
		"id": "515",
		"name": "Golden Leaf Shelter"
	},
	"516": {
		"desc": "Hex and Hex All skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "enfeeble"
			}
		],
		"id": "516",
		"name": "Cursed Land"
	},
	"517": {
		"desc": "Armor skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "armored"
			}
		],
		"id": "517",
		"name": "Enchanted Armor"
	},
	"518": {
		"desc": "Goblin Heals and Empowers all of his allies, increasing in strength as he levels up.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 1.2
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "rally",
				"x": 0.7
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "518",
		"name": "Goblin's Treachery",
		"scale_with_level": "1",
		"starting_level": "26"
	},
	"519": {
		"desc": "Corrosive skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "corrosive"
			}
		],
		"id": "519",
		"name": "Corrosive Hide"
	},
	"520": {
		"desc": "Frostbreath skills deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "frost"
			}
		],
		"id": "520",
		"name": "Frozen Winds"
	},
	"521": {
		"desc": "In Arena Battles, the player who goes first has two additional Delay added to the first card they play in a battle.",
		"effect": [
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 2
				},
				"effect_type": "on_play",
				"first_play": 1
			}
		],
		"id": "521",
		"name": "The Arena"
	},
	"522": {
		"desc": "Empower and Empower All skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "rally"
			}
		],
		"id": "522",
		"name": "Empowered Spirits"
	},
	"523": {
		"desc": "Vengeance skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "counter"
			}
		],
		"id": "523",
		"name": "Vengeance War"
	},
	"524": {
		"desc": "Berserk skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "berserk"
			}
		],
		"id": "524",
		"name": "Berserker Rage"
	},
	"525": {
		"desc": "All cards gain Invisibility 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "evade",
				"x": 99
			}
		],
		"id": "525",
		"name": "Vanishing Enchantment"
	},
	"526": {
		"desc": "Dragons gain Bolt all Knight 5.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "strike",
				"x": 5,
				"y": "9"
			}
		],
		"id": "526",
		"name": "Dragons are the Worst"
	},
	"527": {
		"desc": "All cards gain Armor 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "armored",
				"x": 99
			}
		],
		"id": "527",
		"name": "Invincible Armor"
	},
	"528": {
		"desc": "All cards gain Scorch equal to 10% of their base Health.",
		"effect": [
			{
				"base": "health",
				"effect_type": "add_skill",
				"id": "burn",
				"mult": 0.1
			}
		],
		"id": "528",
		"name": "Forgeborn"
	},
	"529": {
		"desc": "All cards gain Nullify 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "nullify",
				"x": 99
			}
		],
		"id": "529",
		"name": "Null Enchantment"
	},
	"530": {
		"desc": "All cards gain Corrosive 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "corrosive",
				"x": 99
			}
		],
		"id": "530",
		"name": "Corrosive Husk"
	},
	"531": {
		"desc": "All cards gain Ward 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "absorb",
				"x": 99
			}
		],
		"id": "531",
		"name": "Master Warding Shield"
	},
	"532": {
		"desc": "All cards get Enraged equal to 20% of their base Health.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enrage",
				"mult": 0.2
			}
		],
		"id": "532",
		"name": "Furious Soul"
	},
	"533": {
		"desc": "All cards gain Barrage equal to their base Attack.",
		"effect": [
			{
				"base": "attack",
				"effect_type": "add_skill",
				"id": "barrage",
				"mult": 1
			}
		],
		"id": "533",
		"name": "Powderkeg"
	},
	"534": {
		"desc": "All bonuses from Runes are doubled.",
		"effect": [
			{
				"effect_type": "runeMultiplier",
				"mult": 2
			}
		],
		"id": "534",
		"name": "Runepocalypse"
	},
	"535": {
		"desc": "All cards are 1 Delay.",
		"effect": [
			{
				"cost": "1",
				"effect_type": "statChange"
			}
		],
		"id": "535",
		"name": "Celerity Crash"
	},
	"536": {
		"desc": "All creatures gain abilities based on faction! Aether have their Attack increased by 50% of the base, Chaos gain Vengeance equal to 50% of base Attack, and Wyld gain an additional 25% base Health.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 0.5,
				"y": "1"
			},
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "counter",
				"mult": 0.5,
				"y": "2"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.25,
				"y": "3"
			}
		],
		"id": "536",
		"name": "Conflux"
	},
	"537": {
		"desc": "Emberhide skills deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "counterburn"
			}
		],
		"id": "537",
		"name": "Molten Scales"
	},
	"538": {
		"desc": "Scorchbreath skill deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "scorchbreath"
			}
		],
		"id": "538",
		"name": "Vulcanos' Favor"
	},
	"539": {
		"desc": "Legion skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "legion"
			}
		],
		"id": "539",
		"name": "Legion's Call"
	},
	"540": {
		"desc": "Weaken and Weaken All skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "weaken"
			}
		],
		"id": "540",
		"name": "Crippling Blows"
	},
	"541": {
		"desc": "Poison skills deal 50% more damage.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "poison"
			}
		],
		"id": "541",
		"name": "Tainted Strike"
	},
	"542": {
		"desc": "Pierce skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "pierce"
			}
		],
		"id": "542",
		"name": "Sundering Blades"
	},
	"543": {
		"desc": "Heal and Heal All skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "heal"
			}
		],
		"id": "543",
		"name": "Mending Aura"
	},
	"544": {
		"desc": "Regenerate skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "regenerate"
			}
		],
		"id": "544",
		"name": "Regrowth Burst"
	},
	"545": {
		"desc": "Siphon skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "leech"
			}
		],
		"id": "545",
		"name": "Draining Soul"
	},
	"546": {
		"desc": "All Common cards have their Attack, Health, and all Skills multiplied by 5!",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enlarge",
				"mult": 4,
				"z": "1"
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 4,
				"rarity": 1
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "armored",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "counter",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "evade",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "leech",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "pierce",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "burn",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "poison",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "heal",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "strike",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "weaken",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "protect",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "rally",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "berserk",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "absorb",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "counterburn",
				"z": "1"
			}
		],
		"id": "546",
		"name": "Common Revenge"
	},
	"547": {
		"desc": "All Common cards have their Health and all Skills multiplied by 5! In addition, they gain Barrage equal to 5 times their base Attack!",
		"effect": [
			{
				"all": "1",
				"base": "attack",
				"effect_type": "add_skill",
				"id": "barrage",
				"mult": 4,
				"rarity": 1
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 4,
				"rarity": 1
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "armored",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "counter",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "evade",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "leech",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "pierce",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "burn",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "poison",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "heal",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "strike",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "weaken",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "protect",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "rally",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "berserk",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "absorb",
				"z": "1"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 4,
				"s": "counterburn",
				"z": "1"
			}
		],
		"id": "547",
		"name": "Common Fireworks"
	},
	"548": {
		"desc": "All cards have their base Attack and base Health doubled.",
		"effect": [
			{
				"all": "1",
				"base": "attack",
				"effect_type": "scale_attack",
				"mult": 1
			},
			{
				"base": "health",
				"effect_type": "scale_health",
				"mult": 1
			}
		],
		"id": "548",
		"name": "Gigantic Clash"
	},
	"549": {
		"desc": "When a card dies it creates an Unearthed Skeleton token creature with 50% Attack and Health of the unit that died. The token has Invisibility and Berserk values based on its rarity.",
		"effect": [
			{
				"card": 607,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 3,
				"mult": 0.5,
				"rarity": 1
			},
			{
				"card": 608,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 4,
				"mult": 0.5,
				"rarity": 2
			},
			{
				"card": 609,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 5,
				"mult": 0.5,
				"rarity": 3
			},
			{
				"card": 610,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 6,
				"mult": 0.5,
				"rarity": 4
			},
			{
				"card": 611,
				"effect_type": "add_skill",
				"id": "unearth",
				"level": 7,
				"mult": 0.5,
				"rarity": 5
			}
		],
		"id": "549",
		"name": "Unlife Clash"
	},
	"550": {
		"desc": "All cards gain Shroud 99.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "stasis",
				"x": 99
			}
		],
		"id": "550",
		"name": "Sanctuary Clash"
	},
	"551": {
		"desc": "Vengeance, Emberhide and Backlash skills are 50% more effective.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "backlash"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "counterburn"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 0.5,
				"s": "counter"
			}
		],
		"id": "551",
		"name": "Revenge Clash"
	},
	"552": {
		"desc": "Frogs and Seafolk deal extra damage on their first attack each turn equal to 25% of their base Health.",
		"effect": [
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.25,
				"y": "4"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "bash",
				"mult": 0.25,
				"y": "12"
			}
		],
		"id": "552",
		"name": "Crushing Wave Clash"
	},
	"553": {
		"desc": "All cards gain Dualstrike every 1.",
		"effect": [
			{
				"all": "1",
				"effect_type": "add_skill",
				"id": "flurry",
				"x": 1
			}
		],
		"id": "553",
		"name": "Doubling Clash"
	},
	"554": {
		"desc": "Bolt, Frostbreath and Hex skills are doubled. Health is also doubled.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "strike"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "frost"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "enfeeble"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "scale_health",
				"mult": 0.5
			}
		],
		"id": "554",
		"name": "Firepower Clash"
	},
	"555": {
		"desc": "Scorch, Poison, Emberhide and Scorchbreath skills are doubled. Health is also doubled.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "burn"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "scorchbreath"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "poison"
			},
			{
				"all": "1",
				"effect_type": "skill",
				"id": "enhance",
				"mult": 1,
				"s": "counterburn"
			},
			{
				"all": "1",
				"base": "health",
				"effect_type": "scale_health",
				"mult": 1
			}
		],
		"id": "555",
		"name": "Decay Clash"
	},
	"556": {
		"desc": "When a card dies, it throws a number of bombs equal to 50% of its base Health. Each bomb deals 1 damage and does not benefit from Hex or Poison.",
		"effect": [
			{
				"all": "1",
				"base": "health",
				"effect_type": "add_skill",
				"id": "barrage",
				"mult": 0.5
			}
		],
		"id": "556",
		"name": "Detonation Clash"
	},
	"1001": {
		"desc": "Your creatures get healed for 2 every turn in battle.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "heal",
				"x": 2
			}
		],
		"hidden": true,
		"id": "1001",
		"name": "Primal Mending"
	},
	"1002": {
		"desc": "All ally Frogs gain the Protection of the Watcher, reducing damage taken by 2.",
		"effect": [
			{
				"all": "1",
				"effect_type": "skill",
				"id": "protect",
				"x": 2,
				"y": "4"
			}
		],
		"hidden": true,
		"id": "1002",
		"name": "Personal Frog Buff"
	},
	"2001": {
		"desc": "Scylla empowers her minions, increasing their stats with each Mastery level!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2001",
		"name": "Scylla's Presence",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2002": {
		"desc": "Enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2002",
		"name": "Riptide Nightsong",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2003": {
		"desc": "Enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.15,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2003",
		"name": "Riptide Nightsong",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2004": {
		"desc": "Enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2004",
		"name": "Riptide Nightsong",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2005": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2005",
		"name": "Anthem of the Tenacious",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2006": {
		"desc": "Dyrnwyn's Spirit fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.4,
				"effect_type": "scale_attributes",
				"mult": 0.016
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2006",
		"name": "Elegy of a Hero",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2007": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.13,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2007",
		"name": "Requiem of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2008": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.04
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2008",
		"name": "Requiem of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2009": {
		"desc": "Gets stronger every level. Yeah it's not fair. Not sorry.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2009",
		"name": "Developer Hacks",
		"scale_with_level": "1",
		"starting_level": "6"
	},
	"2010": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2010",
		"name": "Harmonious Sphere Chorus",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2011": {
		"desc": "Bluefire, Void Master fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2011",
		"name": "Harmonious World Refrain",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2012": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.13,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2012",
		"name": "Harmonious Sphere Chorus",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2013": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.04
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2013",
		"name": "Harmonious Sphere Chorus",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2014": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2014",
		"name": "Six-Stanza Sonata",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2015": {
		"desc": "Bluefire, Mythic Master fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2015",
		"name": "Dirge of the World",
		"scale_with_level": "1",
		"starting_level": "7"
	},
	"2016": {
		"desc": "The Enraged Assassin fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2016",
		"name": "Buzzsaw Aphidsong",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2017": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2017",
		"name": "Six-Stanza Sonata",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2018": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2018",
		"name": "Firecracker Tango",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2019": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2019",
		"name": "Coralflow Ballad",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2020": {
		"desc": "Xerkahn, the Avenger fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2020",
		"name": "Blazing Tidal Etude",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2021": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2021",
		"name": "Coralflow Ballad",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2022": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2022",
		"name": "Coralflow Ballad",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2023": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2023",
		"name": "Ion-pitched Chiptune",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2024": {
		"desc": "Fireshard's Giant fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.25,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2024",
		"name": "Gearweight Metal",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2025": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2025",
		"name": "Ion-pitched Chiptune",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2026": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2026",
		"name": "Ion-pitched Chiptune",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2027": {
		"desc": "Viracocha, Titan Aspirer fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2027",
		"name": "Rhythm of the Soul",
		"scale_with_level": "1",
		"starting_level": "7"
	},
	"2028": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2028",
		"name": "Crimsonwing Anthem",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2029": {
		"desc": "Hero's Blessed, Yakov fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2029",
		"name": "Crimsondrip Lullaby",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2030": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2030",
		"name": "Crimsonwing Anthem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2031": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2031",
		"name": "Crimsonwing Anthem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2032": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2032",
		"name": "Crystalsky Hymn",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2033": {
		"desc": "Razi, Whisper Worshipper fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.03
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2033",
		"name": "Crimsondrop Lullaby",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2034": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2034",
		"name": "Crystalsky Hymn",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2035": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2035",
		"name": "Crystalsky Hymn",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2036": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2036",
		"name": "Metalschema Samba",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2037": {
		"desc": "Boldur, the Bravest fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2037",
		"name": "Arbitrator Sing-Along",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2038": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2038",
		"name": "Metalschema Samba",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2039": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2039",
		"name": "Metalschema Samba",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2040": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2040",
		"name": "Streaming Amnesic Hula",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2041": {
		"desc": "Typheous, Ship Devourer fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.25,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2041",
		"name": "Tumultuous Rain Dance",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2042": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2042",
		"name": "Streaming Amnesic Hula",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2043": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2043",
		"name": "Streaming Amnesic Hula",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2044": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2044",
		"name": "Sunrisen Divertimento",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2045": {
		"desc": "Kachina, Transcended fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.25,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2045",
		"name": "Prelude of Light",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2046": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2046",
		"name": "Sunrisen Divertimento",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2047": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2047",
		"name": "Sunrisen Divertimento",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2048": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2048",
		"name": "Shattered Rifthowl",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2049": {
		"desc": "Tanit, First Dreamer fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2049",
		"name": "Harmonious Crimson Litany",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2050": {
		"desc": "Agonized Amarok fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2050",
		"name": "Fracturing Dirge",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2051": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2051",
		"name": "Shattered Rifthowl",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2052": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2052",
		"name": "Shattered Rifthowl",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2053": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2053",
		"name": "Burning Bolero",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2054": {
		"desc": "Teroxis the Steadfast fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2054",
		"name": "Searing Memoria",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2055": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2055",
		"name": "Burning Bolero",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2056": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2056",
		"name": "Burning Bolero",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2057": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2057",
		"name": "Celestial Duet",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2058": {
		"desc": "Fallen Gladiator fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2058",
		"name": "Empty Etude",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2059": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2059",
		"name": "Celestial Duet",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2060": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2060",
		"name": "Celestial Duet",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2061": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2061",
		"name": "Melancholy Melody",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2062": {
		"desc": "Corrupted Merman fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2062",
		"name": "Sea's Serenade",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2063": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2063",
		"name": "Melancholy Melody",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2064": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2064",
		"name": "Melancholy Melody",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2065": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2065",
		"name": "Rift's Chorus",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2066": {
		"desc": "Agatha, Forgettable Elder fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2066",
		"name": "Rift's Choir",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2067": {
		"desc": "Batara, Blood Reprisal fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2067",
		"name": "Harmonious Crimson Litany",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2068": {
		"desc": "Ebonclaw, Silencer fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2068",
		"name": "Harmonious Crimson Litany",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2069": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2069",
		"name": "Rift's Chorus",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2070": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2070",
		"name": "Rift's Chorus",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2071": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2071",
		"name": "Dawntouched Divertimento",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2072": {
		"desc": "Frog Defense fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2072",
		"name": "Dawn Ascension",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2073": {
		"desc": "Frog Defense fights harder with each passing Mastery level, increasing cards' stats!",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2073",
		"name": "Dawntouched Divertimento",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2074": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2074",
		"name": "Dawntouched Divertimento",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2075": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2075",
		"name": "Enemy Anthem",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2076": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.2,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2076",
		"name": "Powerful Foe Anthem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2077": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2077",
		"name": "Enemy Anthem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2078": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2078",
		"name": "Enemy Anthem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2079": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2079",
		"name": "Chorus of Thunder",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2080": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2080",
		"name": "Thunderstorm March",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2081": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2081",
		"name": "Chorus of Thunder",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2082": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2082",
		"name": "Chorus of Thunder",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2083": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2083",
		"name": "Requiem of the Relentless",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2084": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2084",
		"name": "March of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2085": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2085",
		"name": "Requiem of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2086": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2086",
		"name": "Requiem of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2087": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2087",
		"name": "Celestial Duet",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2088": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2088",
		"name": "Harmonious Hymn",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2089": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2089",
		"name": "Enemy Requiem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2090": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2090",
		"name": "Enemy Requiem",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2091": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2091",
		"name": "Chorus of Fire",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2092": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2092",
		"name": "Firestorm Hymn",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2093": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2093",
		"name": "Requiem of the Poisonous",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2094": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2094",
		"name": "Requiem of the Poisonous",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2095": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2095",
		"name": "Enemy Anthem",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2096": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2096",
		"name": "Powerful Foe Hymn",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2097": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2097",
		"name": "Chorus of Thunder",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2098": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2098",
		"name": "Chorus of Thunder",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2099": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2099",
		"name": "Undead Anthem",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2100": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2100",
		"name": "March of the Relentless",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2101": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2101",
		"name": "Chorus of Metal",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2102": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2102",
		"name": "Chorus of Metal",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2103": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2103",
		"name": "Enemy Anthem",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2104": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2104",
		"name": "Firecracker Shuffle",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2105": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2105",
		"name": "Chorus of Fire",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2106": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2106",
		"name": "Chorus of Fire",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2107": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2107",
		"name": "Melancholy Symphony",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2108": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2108",
		"name": "Ocean Shuffle",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2109": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2109",
		"name": "Chorus of Air",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2110": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2110",
		"name": "Chorus of Air",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2111": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.008,
				"effect_type": "scale_attributes",
				"mult": 0.0025
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2111",
		"name": "Celestial Duet",
		"scale_with_level": "1",
		"starting_level": "5"
	},
	"2112": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.3,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2112",
		"name": "Heavenly Dance",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2113": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.01
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2113",
		"name": "Sticky Steps",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"2114": {
		"desc": "Non-token enemies become stronger with each passing Mastery level.",
		"effect": [
			{
				"base_mult": 0.1,
				"effect_type": "scale_attributes",
				"mult": 0.05
			}
		],
		"enemy_only": true,
		"hidden": true,
		"id": "2114",
		"name": "Tongue Tango",
		"scale_with_level": "1",
		"starting_level": "0"
	},
	"5001": {
		"desc": "In Arena Battles, the player who goes first has two additional Delay added to the first card they play in a battle.",
		"effect": [
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 2
				},
				"effect_type": "on_play",
				"first_play": 1
			}
		],
		"hidden": true,
		"id": "5001",
		"name": "The Arena"
	},
	"5002": {
		"desc": "In Arena Battles, the player who goes first has one additional Delay added to the first two cards they play in a battle.",
		"effect": [
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 1
				},
				"effect_type": "on_play"
			},
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 1
				},
				"effect_type": "on_play"
			}
		],
		"hidden": true,
		"id": "5002",
		"name": "The Arena"
	},
	"5003": {
		"desc": "In Arena Battles, the player who goes first has one Delay added to the first card they play and the player who goes second has one Delay removed from the first card they play.",
		"effect": [
			{
				"attacker": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "slow",
					"x": 1
				},
				"effect_type": "on_play",
				"first_play": 1
			},
			{
				"defender": 1,
				"effect": {
					"effect_type": "add_skill",
					"id": "haste",
					"x": 1
				},
				"effect_type": "on_play",
				"first_play": 1
			}
		],
		"hidden": true,
		"id": "5003",
		"name": "The Arena"
	}
};