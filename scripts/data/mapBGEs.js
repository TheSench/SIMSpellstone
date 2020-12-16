"use strict"

var MAP_BATTLEGROUNDS = {
	"3001": {
		"desc": "It's a fellowship! Gather your allies and level them up to help you in battles on the Duskwillow map!",
		"effects": [
			{
				"id": "1",
				"name": "The Ranger",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Pierce 2.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 2
							}
						],
						"name": "The Ranger"
					},
					{
						"desc": "All of your creatures gain Pierce 4.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 4
							}
						],
						"name": "The Ranger"
					},
					{
						"desc": "All of your creatures gain Pierce 6.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 6
							}
						],
						"name": "The Ranger"
					},
					{
						"desc": "All of your creatures gain Pierce 8.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 8
							}
						],
						"name": "The Ranger"
					},
					{
						"desc": "All of your creatures gain Pierce 10.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 10
							}
						],
						"name": "The Ranger"
					}
				]
			},
			{
				"id": "2",
				"name": "The Guardian",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are protected by Barrier 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 1
							}
						],
						"name": "The Guardian"
					},
					{
						"desc": "All of your creatures are protected by Barrier 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 2
							}
						],
						"name": "The Guardian"
					},
					{
						"desc": "All of your creatures are protected by Barrier 3 each turn.",
						"effect": [
							{
								"all": "3",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 3
							}
						],
						"name": "The Guardian"
					},
					{
						"desc": "All of your creatures are protected by Barrier 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 4
							}
						],
						"name": "The Guardian"
					},
					{
						"desc": "All of your creatures are protected by Barrier 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 5
							}
						],
						"name": "The Guardian"
					}
				]
			},
			{
				"id": "3",
				"name": "The Healer",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "The Healer"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "The Healer"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "The Healer"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "The Healer"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "The Healer"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "The Healer"
					}
				]
			},
			{
				"id": "4",
				"name": "The Assassin",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 10% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.1
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 15% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.15
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 20% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.2
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 25% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.25
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 35% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.35
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					},
					{
						"desc": "Whenever the enemy plays a creature, The Assassin deals 50% of their health to them as damage.",
						"effect": [
							{
								"defender": "1",
								"effect": {
									"base": "health",
									"effect_type": "skill",
									"id": "ambush",
									"mult": 0.5
								},
								"effect_type": "on_play"
							}
						],
						"name": "The Assassin"
					}
				]
			}
		],
		"id": "3001",
		"location_id": "7",
		"name": "Duskwillow Fellowship"
	},
	"3002": {
		"desc": "It's a quest for arcane treasure! Gather magical items and level them up to help you in battles on the Frigore map!",
		"effects": [
			{
				"id": "5",
				"name": "Duskwillow Aegis",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Duskwillow Aegis"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Duskwillow Aegis"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Duskwillow Aegis"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Duskwillow Aegis"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Duskwillow Aegis"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Duskwillow Aegis"
					}
				]
			},
			{
				"id": "6",
				"name": "Blazing Dyrnwyn",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Blazing Dyrnwyn"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Blazing Dyrnwyn"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Blazing Dyrnwyn"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Blazing Dyrnwyn"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Blazing Dyrnwyn"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Blazing Dyrnwyn"
					}
				]
			},
			{
				"id": "7",
				"name": "Life Water",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Life Water"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Life Water"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Life Water"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Life Water"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Life Water"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Life Water"
					}
				]
			}
		],
		"id": "3002",
		"location_id": "8",
		"name": "Frigore Relic Hunt"
	},
	"3003": {
		"desc": "The developers have lost their tools! Quick, use your hero coins to power them up and crush the developers!",
		"effects": [
			{
				"id": "8",
				"name": "Buff Wand",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Empowered 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 1
							}
						],
						"name": "Buff Wand"
					},
					{
						"desc": "All of your creatures are Empowered 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 2
							}
						],
						"name": "Buff Wand"
					},
					{
						"desc": "All of your creatures are Empowered 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 3
							}
						],
						"name": "Buff Wand"
					},
					{
						"desc": "All of your creatures are Empowered 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 4
							}
						],
						"name": "Buff Wand"
					},
					{
						"desc": "All of your creatures are Empowered 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 6
							}
						],
						"name": "Buff Wand"
					},
					{
						"desc": "All of your creatures are Empowered 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "rally",
								"x": 10
							}
						],
						"name": "Buff Wand"
					}
				]
			},
			{
				"id": "9",
				"name": "Nerf Stick",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "Weaken one enemy creature by 2.",
						"effect": [
							{
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "weaken",
								"x": 2
							}
						],
						"name": "Nerf Stick"
					},
					{
						"desc": "Weaken one enemy creature by 3.",
						"effect": [
							{
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "weaken",
								"x": 3
							}
						],
						"name": "Nerf Stick"
					},
					{
						"desc": "Weaken all enemy creatures by 2.",
						"effect": [
							{
								"all": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "weaken",
								"x": 2
							}
						],
						"name": "Nerf Stick"
					},
					{
						"desc": "Weaken all enemy creatures by 3.",
						"effect": [
							{
								"all": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "weaken",
								"x": 3
							}
						],
						"name": "Nerf Stick"
					},
					{
						"desc": "One of your creatures gains Silence every turn.",
						"effect": [
							{
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "silence"
							}
						],
						"name": "Nerf Stick"
					},
					{
						"desc": "All of your creatures gains Silence every turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "silence"
							}
						],
						"name": "Nerf Stick"
					}
				]
			},
			{
				"id": "10",
				"name": "Ban Hammer",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "One of your creatures gains Nullify 1 every turn.",
						"effect": [
							{
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 1
							}
						],
						"name": "Ban Hammer"
					},
					{
						"desc": "One of your creatures gains Nullify 2 every turn.",
						"effect": [
							{
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 2
							}
						],
						"name": "Ban Hammer"
					},
					{
						"desc": "One of your creatures gains Nullify 3 every turn.",
						"effect": [
							{
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 3
							}
						],
						"name": "Ban Hammer"
					},
					{
						"desc": "One of your creatures gains Nullify 4 every turn.",
						"effect": [
							{
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 4
							}
						],
						"name": "Ban Hammer"
					},
					{
						"desc": "Freeze a random enemy creature every turn.",
						"effect": [
							{
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "jam"
							}
						],
						"name": "Ban Hammer"
					},
					{
						"desc": "Freeze all enemy creatures every turn.",
						"effect": [
							{
								"all": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "jam"
							}
						],
						"name": "Ban Hammer"
					}
				]
			}
		],
		"id": "3003",
		"location_id": "108",
		"name": "Legendary Dev Tools"
	},
	"3004": {
		"desc": "Arriving in The Void Plane has sparked new potential within your relics. Upgrade them with Purple Fire Souls to unlock greater powers!",
		"effects": [
			{
				"id": "11",
				"name": "Dyrnwyn Reborn",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Emberhide 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 1
							}
						],
						"name": "Dyrnwyn Reborn"
					},
					{
						"desc": "All of your creatures gain Emberhide 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 2
							}
						],
						"name": "Dyrnwyn Reborn"
					},
					{
						"desc": "All of your creatures gain Emberhide 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 3
							}
						],
						"name": "Dyrnwyn Reborn"
					},
					{
						"desc": "All of your creatures gain Emberhide 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 4
							}
						],
						"name": "Dyrnwyn Reborn"
					},
					{
						"desc": "All of your creatures gain Emberhide 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 6
							}
						],
						"name": "Dyrnwyn Reborn"
					},
					{
						"desc": "All of your creatures gain Emberhide 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 8
							}
						],
						"name": "Dyrnwyn Reborn"
					}
				]
			},
			{
				"id": "12",
				"name": "Seastone Staff",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Seastone Staff"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Seastone Staff"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Seastone Staff"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Seastone Staff"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Seastone Staff"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Seastone Staff"
					}
				]
			},
			{
				"id": "13",
				"name": "Heart of Blue Fire",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Berserk 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 1
							}
						],
						"name": "Heart of Blue Fire"
					},
					{
						"desc": "All of your creatures gain Berserk 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 2
							}
						],
						"name": "Heart of Blue Fire"
					},
					{
						"desc": "All of your creatures gain Berserk 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 3
							}
						],
						"name": "Heart of Blue Fire"
					},
					{
						"desc": "All of your creatures gain Berserk 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 4
							}
						],
						"name": "Heart of Blue Fire"
					},
					{
						"desc": "All of your creatures gain Berserk 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 5
							}
						],
						"name": "Heart of Blue Fire"
					},
					{
						"desc": "All of your creatures gain Berserk 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 6
							}
						],
						"name": "Heart of Blue Fire"
					}
				]
			}
		],
		"id": "3004",
		"location_id": "9",
		"name": "Reborn Relics"
	},
	"3005": {
		"desc": "Rayne has rescued a few elemental spirits in Beetleton Bunker, and left you to care for them. Feeding them Honeycombs unlocks their powers for you to use!",
		"effects": [
			{
				"id": "14",
				"name": "Earth Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Earth Spiritling"
					}
				]
			},
			{
				"id": "15",
				"name": "Wind Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Siphon 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 1
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 2
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 3
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 4
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 5
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 6
							}
						],
						"name": "Wind Spiritling"
					}
				]
			},
			{
				"id": "16",
				"name": "Fire Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Berserk 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 1
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 2
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 3
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 4
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 5
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 6
							}
						],
						"name": "Fire Spiritling"
					}
				]
			}
		],
		"id": "3005",
		"location_id": "10",
		"name": "Elemental Spiritlings"
	},
	"3006": {
		"desc": "Pharos Temple's power has decayed without an energy supply. Revive the ancient technology using Mini Jellyfish!",
		"effects": [
			{
				"id": "17",
				"name": "Hermit Cannon",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Hermit Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Hermit Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Hermit Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Hermit Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Hermit Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Hermit Cannon"
					}
				]
			},
			{
				"id": "18",
				"name": "Edgemaker Forge",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Pierce 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 2
							}
						],
						"name": "Edgemaker Forge"
					},
					{
						"desc": "All of your creatures gain Pierce 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 4
							}
						],
						"name": "Edgemaker Forge"
					},
					{
						"desc": "All of your creatures gain Pierce 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 6
							}
						],
						"name": "Edgemaker Forge"
					},
					{
						"desc": "All of your creatures gain Pierce 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 8
							}
						],
						"name": "Edgemaker Forge"
					},
					{
						"desc": "All of your creatures gain Pierce 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 10
							}
						],
						"name": "Edgemaker Forge"
					},
					{
						"desc": "All of your creatures gain Pierce 15 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 15
							}
						],
						"name": "Edgemaker Forge"
					}
				]
			},
			{
				"id": "19",
				"name": "Sea Urchin Wall",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Vengeance 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 1
							}
						],
						"name": "Sea Urchin Wall"
					},
					{
						"desc": "All of your creatures gain Vengeance 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 2
							}
						],
						"name": "Sea Urchin Wall"
					},
					{
						"desc": "All of your creatures gain Vengeance 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 4
							}
						],
						"name": "Sea Urchin Wall"
					},
					{
						"desc": "All of your creatures gain Vengeance 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 6
							}
						],
						"name": "Sea Urchin Wall"
					},
					{
						"desc": "All of your creatures gain Vengeance 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 8
							}
						],
						"name": "Sea Urchin Wall"
					},
					{
						"desc": "All of your creatures gain Vengeance 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 10
							}
						],
						"name": "Sea Urchin Wall"
					}
				]
			}
		],
		"id": "3006",
		"location_id": "11",
		"name": "Temple's Defenses"
	},
	"3007": {
		"desc": "Powerful gemstones have been discovered in the mine. Restore their energy using Fireshards!",
		"effects": [
			{
				"id": "20",
				"name": "Aether Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are protected by Barrier 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 1
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 2
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 3 each turn.",
						"effect": [
							{
								"all": "3",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 3
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 4
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 5
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 6
							}
						],
						"name": "Aether Gemstone"
					}
				]
			},
			{
				"id": "21",
				"name": "Wyld Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Wyld Gemstone"
					}
				]
			},
			{
				"id": "22",
				"name": "Chaos Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Chaos Gemstone"
					}
				]
			}
		],
		"id": "3007",
		"location_id": "12",
		"name": "Power Gemstones"
	},
	"3008": {
		"desc": "The Orbs in the Celestial Vault keep the islands afloat. Power them up and gain their strength with Breezy Wind!",
		"effects": [
			{
				"id": "23",
				"name": "Petal Orb",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Petal Orb"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Petal Orb"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Petal Orb"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Petal Orb"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Petal Orb"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Petal Orb"
					}
				]
			},
			{
				"id": "24",
				"name": "Lava Orb",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Enrage 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 1
							}
						],
						"name": "Lava Orb"
					},
					{
						"desc": "All of your creatures gain Enrage 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 2
							}
						],
						"name": "Lava Orb"
					},
					{
						"desc": "All of your creatures gain Enrage 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 3
							}
						],
						"name": "Lava Orb"
					},
					{
						"desc": "All of your creatures gain Enrage 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 4
							}
						],
						"name": "Lava Orb"
					},
					{
						"desc": "All of your creatures gain Enrage 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 6
							}
						],
						"name": "Lava Orb"
					},
					{
						"desc": "All of your creatures gain Enrage 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 8
							}
						],
						"name": "Lava Orb"
					}
				]
			},
			{
				"id": "25",
				"name": "Basin Orb",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are protected by Barrier 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 1
							}
						],
						"name": "Basin Orb"
					},
					{
						"desc": "All of your creatures are protected by Barrier 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 2
							}
						],
						"name": "Basin Orb"
					},
					{
						"desc": "All of your creatures are protected by Barrier 3 each turn.",
						"effect": [
							{
								"all": "3",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 3
							}
						],
						"name": "Basin Orb"
					},
					{
						"desc": "All of your creatures are protected by Barrier 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 4
							}
						],
						"name": "Basin Orb"
					},
					{
						"desc": "All of your creatures are protected by Barrier 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 5
							}
						],
						"name": "Basin Orb"
					},
					{
						"desc": "All of your creatures are protected by Barrier 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 6
							}
						],
						"name": "Basin Orb"
					}
				]
			}
		],
		"id": "3008",
		"location_id": "13",
		"name": "Celestial Orbs"
	},
	"3009": {
		"desc": "Yuriel's lent out his magical tomes, which can imbue great powers. Collect Word Eaters to strengthen his Mystic Tomes!",
		"effects": [
			{
				"id": "26",
				"name": "Tome of Firebolt",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Tome of Firebolt"
					}
				]
			},
			{
				"id": "27",
				"name": "Tome of Shielding",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Tome of Shielding"
					}
				]
			},
			{
				"id": "28",
				"name": "Tome of Darkness",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Nullify 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 1
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 2
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 3
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 4
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 6
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 8
							}
						],
						"name": "Tome of Darkness"
					}
				]
			}
		],
		"id": "3009",
		"location_id": "14",
		"name": "Yuriel's Mystic Tomes"
	},
	"3010": {
		"desc": "Fiona's dragonlings boast different combat specialties, and they might help you if you can become friends! Feed them Bonbon Sparklers to increase their power!",
		"effects": [
			{
				"id": "29",
				"name": "Overprotective Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Overprotective Dragonling"
					}
				]
			},
			{
				"id": "30",
				"name": "Hotblooded Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Emberhide 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 1
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 2
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 3
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 4
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 6
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 8
							}
						],
						"name": "Hotblooded Dragonling"
					}
				]
			},
			{
				"id": "31",
				"name": "Gusty Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Siphon 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 1
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 2
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 3
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 4
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 5
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 6
							}
						],
						"name": "Gusty Dragonling"
					}
				]
			}
		],
		"id": "3010",
		"location_id": "15",
		"name": "Fiona's Dragonlings"
	},
	"3011": {
		"desc": "Strange Seers on the island have forgotten their own powers. Gift them Tropical Coconuts to awaken their abilities!",
		"effects": [
			{
				"id": "32",
				"name": "Crab Seer",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Pierce 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 2
							}
						],
						"name": "Crab Seer"
					},
					{
						"desc": "All of your creatures gain Pierce 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 4
							}
						],
						"name": "Crab Seer"
					},
					{
						"desc": "All of your creatures gain Pierce 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 6
							}
						],
						"name": "Crab Seer"
					},
					{
						"desc": "All of your creatures gain Pierce 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 8
							}
						],
						"name": "Crab Seer"
					},
					{
						"desc": "All of your creatures gain Pierce 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 10
							}
						],
						"name": "Crab Seer"
					},
					{
						"desc": "All of your creatures gain Pierce 15 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 15
							}
						],
						"name": "Crab Seer"
					}
				]
			},
			{
				"id": "33",
				"name": "Spriggan Seer",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Spriggan Seer"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Spriggan Seer"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Spriggan Seer"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Spriggan Seer"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Spriggan Seer"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Spriggan Seer"
					}
				]
			},
			{
				"id": "34",
				"name": "Insect Seer",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Emberhide 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 1
							}
						],
						"name": "Insect Seer"
					},
					{
						"desc": "All of your creatures gain Emberhide 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 2
							}
						],
						"name": "Insect Seer"
					},
					{
						"desc": "All of your creatures gain Emberhide 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 3
							}
						],
						"name": "Insect Seer"
					},
					{
						"desc": "All of your creatures gain Emberhide 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 4
							}
						],
						"name": "Insect Seer"
					},
					{
						"desc": "All of your creatures gain Emberhide 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 6
							}
						],
						"name": "Insect Seer"
					},
					{
						"desc": "All of your creatures gain Emberhide 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 8
							}
						],
						"name": "Insect Seer"
					}
				]
			}
		],
		"id": "3011",
		"location_id": "16",
		"name": "Island Seers"
	},
	"3012": {
		"desc": "Repair your airship and get its defense functions back online. Use Golden Leaves as a catalyst!",
		"effects": [
			{
				"id": "35",
				"name": "Airship Support",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Airship Support"
					}
				]
			},
			{
				"id": "36",
				"name": "Airship Countermeasures",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Vengeance 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 1
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 2
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 4
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 6
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 8
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 10
							}
						],
						"name": "Airship Countermeasures"
					}
				]
			},
			{
				"id": "37",
				"name": "Airship Cannon",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Airship Cannon"
					}
				]
			}
		],
		"id": "3012",
		"location_id": "17",
		"name": "Airship Upgrades"
	},
	"3013": {
		"desc": "Ancient rocks with symbols of runes carved upon them once served as Redfeather Valley's defense system. Power them up with Black Blossoms!",
		"effects": [
			{
				"id": "38",
				"name": "Healing Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Healing Glyph"
					}
				]
			},
			{
				"id": "39",
				"name": "Shielding Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Shielding Glyph"
					}
				]
			},
			{
				"id": "40",
				"name": "Scorching Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Scorching Glyph"
					}
				]
			}
		],
		"id": "3013",
		"location_id": "18",
		"name": "Ancient Glyphs"
	},
	"3014": {
		"desc": "The spirits of dragon legends who died protecting Tarragon Peak. Receive their blessing by offering Dragon Claws!",
		"effects": [
			{
				"id": "41",
				"name": "Ward Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Ward Fossil"
					}
				]
			},
			{
				"id": "42",
				"name": "Vengeful Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Vengeance 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 1
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 2
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 4
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 6
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 8
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 10
							}
						],
						"name": "Vengeful Fossil"
					}
				]
			},
			{
				"id": "43",
				"name": "Spitfire Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Spitfire Fossil"
					}
				]
			}
		],
		"id": "3014",
		"location_id": "19",
		"name": "Ancestor Dragons"
	},
	"3015": {
		"desc": "Your friends are giving you their strength to fight in the arena. Purchase upgrades with Gladius Coins!",
		"effects": [
			{
				"id": "44",
				"name": "Samael",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Samael"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Samael"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Samael"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Samael"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Samael"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Samael"
					}
				]
			},
			{
				"id": "45",
				"name": "Yuriel",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are protected by Barrier 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 1
							}
						],
						"name": "Yuriel"
					},
					{
						"desc": "All of your creatures are protected by Barrier 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 2
							}
						],
						"name": "Yuriel"
					},
					{
						"desc": "All of your creatures are protected by Barrier 3 each turn.",
						"effect": [
							{
								"all": "3",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 3
							}
						],
						"name": "Yuriel"
					},
					{
						"desc": "All of your creatures are protected by Barrier 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 4
							}
						],
						"name": "Yuriel"
					},
					{
						"desc": "All of your creatures are protected by Barrier 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 5
							}
						],
						"name": "Yuriel"
					},
					{
						"desc": "All of your creatures are protected by Barrier 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 6
							}
						],
						"name": "Yuriel"
					}
				]
			},
			{
				"id": "46",
				"name": "Arena Equipment",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Arena Equipment"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Arena Equipment"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Arena Equipment"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Arena Equipment"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Arena Equipment"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Arena Equipment"
					}
				]
			}
		],
		"id": "3015",
		"location_id": "20",
		"name": "Fighting Spirits"
	},
	"3016": {
		"desc": "Fiona's dragonlings are back and as hungry as ever! Feed them Corroded Mist Pearls to increase their power!",
		"effects": [
			{
				"id": "29",
				"name": "Overprotective Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Overprotective Dragonling"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Overprotective Dragonling"
					}
				]
			},
			{
				"id": "30",
				"name": "Hotblooded Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Emberhide 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 1
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 2
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 3
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 4
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 6
							}
						],
						"name": "Hotblooded Dragonling"
					},
					{
						"desc": "All of your creatures gain Emberhide 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counterburn",
								"x": 8
							}
						],
						"name": "Hotblooded Dragonling"
					}
				]
			},
			{
				"id": "31",
				"name": "Gusty Dragonling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Siphon 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 1
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 2
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 3
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 4
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 5
							}
						],
						"name": "Gusty Dragonling"
					},
					{
						"desc": "All of your creatures gain Siphon 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 6
							}
						],
						"name": "Gusty Dragonling"
					}
				]
			}
		],
		"id": "3016",
		"location_id": "21",
		"name": "Fiona's Dragonlings"
	},
	"3017": {
		"desc": "Rayne's spiritlings have grown since you last saw them, but are still in need of care. Feed them Dark Honey to unlock their powers!",
		"effects": [
			{
				"id": "14",
				"name": "Earth Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Earth Spiritling"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Earth Spiritling"
					}
				]
			},
			{
				"id": "15",
				"name": "Wind Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Siphon 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 1
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 2
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 3
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 4
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 5
							}
						],
						"name": "Wind Spiritling"
					},
					{
						"desc": "All of your creatures gain Siphon 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "leech",
								"x": 6
							}
						],
						"name": "Wind Spiritling"
					}
				]
			},
			{
				"id": "16",
				"name": "Fire Spiritling",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Berserk 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 1
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 2
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 3
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 4
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 5
							}
						],
						"name": "Fire Spiritling"
					},
					{
						"desc": "All of your creatures gain Berserk 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 6
							}
						],
						"name": "Fire Spiritling"
					}
				]
			}
		],
		"id": "3017",
		"location_id": "22",
		"name": "Elemental Spiritlings"
	},
	"3018": {
		"desc": "Ancient rocks with symbols of runes carved upon them serve as defenses in the Salt Wastes. Power them up with Enchanted Iron!",
		"effects": [
			{
				"id": "38",
				"name": "Healing Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Healing Glyph"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Healing Glyph"
					}
				]
			},
			{
				"id": "39",
				"name": "Shielding Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Shielding Glyph"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Shielding Glyph"
					}
				]
			},
			{
				"id": "40",
				"name": "Scorching Glyph",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Scorching Glyph"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Scorching Glyph"
					}
				]
			}
		],
		"id": "3018",
		"location_id": "23",
		"name": "Temple Glyphs"
	},
	"3019": {
		"desc": "The true power of Wyld, Chaos, and Aether. Return Pillar Souls to them so they can remember their true strength.",
		"effects": [
			{
				"id": "47",
				"name": "Memory of Wyld",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Memory of Wyld"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Memory of Wyld"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Memory of Wyld"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Memory of Wyld"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Memory of Wyld"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Memory of Wyld"
					}
				]
			},
			{
				"id": "48",
				"name": "Memory of Chaos",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Enrage 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 1
							}
						],
						"name": "Memory of Chaos"
					},
					{
						"desc": "All of your creatures gain Enrage 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 2
							}
						],
						"name": "Memory of Chaos"
					},
					{
						"desc": "All of your creatures gain Enrage 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 3
							}
						],
						"name": "Memory of Chaos"
					},
					{
						"desc": "All of your creatures gain Enrage 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 4
							}
						],
						"name": "Memory of Chaos"
					},
					{
						"desc": "All of your creatures gain Enrage 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 6
							}
						],
						"name": "Memory of Chaos"
					},
					{
						"desc": "All of your creatures gain Enrage 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "enrage",
								"x": 8
							}
						],
						"name": "Memory of Chaos"
					}
				]
			},
			{
				"id": "49",
				"name": "Memory of Aether",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Memory of Aether"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Memory of Aether"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Memory of Aether"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Memory of Aether"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Memory of Aether"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Memory of Aether"
					}
				]
			}
		],
		"id": "3019",
		"location_id": "24",
		"name": "Three Titans"
	},
	"3020": {
		"desc": "Defenses set up by the First Order monks, they are powered by small Elemental creatures.",
		"effects": [
			{
				"id": "50",
				"name": "Sea Guardian Bones",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Sea Guardian Bones"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Sea Guardian Bones"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Sea Guardian Bones"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Sea Guardian Bones"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Sea Guardian Bones"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Sea Guardian Bones"
					}
				]
			},
			{
				"id": "51",
				"name": "Land Guardian Bones",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Land Guardian Bones"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Land Guardian Bones"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Land Guardian Bones"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Land Guardian Bones"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Land Guardian Bones"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Land Guardian Bones"
					}
				]
			},
			{
				"id": "52",
				"name": "Sky Guardian Bones",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Sky Guardian Bones"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Sky Guardian Bones"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Sky Guardian Bones"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Sky Guardian Bones"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Sky Guardian Bones"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Sky Guardian Bones"
					}
				]
			}
		],
		"id": "3020",
		"location_id": "25",
		"name": "First Order Defense"
	},
	"3021": {
		"desc": "Use Malchior's expertise against the Undead! Trade him Void Essence to unlock new powers!",
		"effects": [
			{
				"id": "53",
				"name": "Flame Maker",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Flame Maker"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Flame Maker"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Flame Maker"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Flame Maker"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Flame Maker"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Flame Maker"
					}
				]
			},
			{
				"id": "54",
				"name": "Holy Water",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Holy Water"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Holy Water"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Holy Water"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Holy Water"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Holy Water"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Holy Water"
					}
				]
			},
			{
				"id": "55",
				"name": "Treebark Shield",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Treebark Shield"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Treebark Shield"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Treebark Shield"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Treebark Shield"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Treebark Shield"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Treebark Shield"
					}
				]
			}
		],
		"id": "3021",
		"location_id": "26",
		"name": "Malchior's Defense"
	},
	"3022": {
		"desc": "Use Wyld Leaves as fuel to power your Airship defenses!",
		"effects": [
			{
				"id": "35",
				"name": "Airship Support",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Airship Support"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Airship Support"
					}
				]
			},
			{
				"id": "36",
				"name": "Airship Countermeasures",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Vengeance 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 1
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 2
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 4
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 6
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 8
							}
						],
						"name": "Airship Countermeasures"
					},
					{
						"desc": "All of your creatures gain Vengeance 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 10
							}
						],
						"name": "Airship Countermeasures"
					}
				]
			},
			{
				"id": "37",
				"name": "Airship Cannon",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Airship Cannon"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Airship Cannon"
					}
				]
			}
		],
		"id": "3022",
		"location_id": "27",
		"name": "Airship Defenses"
	},
	"3023": {
		"desc": "Purify Void Remnants to revitalize the Dawnglow security!",
		"effects": [
			{
				"id": "56",
				"name": "Healing Turret",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Healing Turret"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Healing Turret"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Healing Turret"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Healing Turret"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Healing Turret"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Healing Turret"
					}
				]
			},
			{
				"id": "57",
				"name": "Automaton Driller",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Pierce 2.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 2
							}
						],
						"name": "Automaton Driller"
					},
					{
						"desc": "All of your creatures gain Pierce 4.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 4
							}
						],
						"name": "Automaton Driller"
					},
					{
						"desc": "All of your creatures gain Pierce 6.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 6
							}
						],
						"name": "Automaton Driller"
					},
					{
						"desc": "All of your creatures gain Pierce 8.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 8
							}
						],
						"name": "Automaton Driller"
					},
					{
						"desc": "All of your creatures gain Pierce 10.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 10
							}
						],
						"name": "Automaton Driller"
					},
					{
						"desc": "All of your creatures gain Pierce 15.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "pierce",
								"x": 15
							}
						],
						"name": "Automaton Driller"
					}
				]
			},
			{
				"id": "58",
				"name": "Dawnglow Guardian",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Berserk 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 1
							}
						],
						"name": "Dawnglow Guardian"
					},
					{
						"desc": "All of your creatures gain Berserk 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 2
							}
						],
						"name": "Dawnglow Guardian"
					},
					{
						"desc": "All of your creatures gain Berserk 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 3
							}
						],
						"name": "Dawnglow Guardian"
					},
					{
						"desc": "All of your creatures gain Berserk 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 4
							}
						],
						"name": "Dawnglow Guardian"
					},
					{
						"desc": "All of your creatures gain Berserk 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 5
							}
						],
						"name": "Dawnglow Guardian"
					},
					{
						"desc": "All of your creatures gain Berserk 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "berserk",
								"x": 6
							}
						],
						"name": "Dawnglow Guardian"
					}
				]
			}
		],
		"id": "3023",
		"location_id": "28",
		"name": "Dawnglow Defenses"
	},
	"3024": {
		"desc": "Power Yuriel's Tomes with Wisp Fragments!",
		"effects": [
			{
				"id": "26",
				"name": "Tome of Firebolt",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Tome of Firebolt"
					}
				]
			},
			{
				"id": "27",
				"name": "Tome of Shielding",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Tome of Shielding"
					}
				]
			},
			{
				"id": "28",
				"name": "Tome of Darkness",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Nullify 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 1
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 2
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 3
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 4
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 6
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 8
							}
						],
						"name": "Tome of Darkness"
					}
				]
			}
		],
		"id": "3024",
		"location_id": "29",
		"name": "Yuriel's Mystic Tomes"
	},
	"3025": {
		"desc": "Powerful gems serve as defense around Karthos's borders. Power them up with Karthos Embers!",
		"effects": [
			{
				"id": "20",
				"name": "Aether Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are protected by Barrier 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 1
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 2
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 3 each turn.",
						"effect": [
							{
								"all": "3",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 3
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 4
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 5
							}
						],
						"name": "Aether Gemstone"
					},
					{
						"desc": "All of your creatures are protected by Barrier 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "protect",
								"x": 6
							}
						],
						"name": "Aether Gemstone"
					}
				]
			},
			{
				"id": "21",
				"name": "Wyld Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Wyld Gemstone"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Wyld Gemstone"
					}
				]
			},
			{
				"id": "22",
				"name": "Chaos Gemstone",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Scorch 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 1
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 2
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 3
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 4
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 6
							}
						],
						"name": "Chaos Gemstone"
					},
					{
						"desc": "All of your creatures gain Scorch 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "burn",
								"x": 8
							}
						],
						"name": "Chaos Gemstone"
					}
				]
			}
		],
		"id": "3025",
		"location_id": "30",
		"name": "Karthos Crystals"
	},
	"3026": {
		"desc": "The spirits of dragon legends who died protecting Tarragon Peak. Receive their blessing by offering Dragon Talons!",
		"effects": [
			{
				"id": "41",
				"name": "Ward Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Ward Fossil"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Ward Fossil"
					}
				]
			},
			{
				"id": "42",
				"name": "Vengeful Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Vengeance 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 1
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 2
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 4
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 6
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 8
							}
						],
						"name": "Vengeful Fossil"
					},
					{
						"desc": "All of your creatures gain Vengeance 10 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "counter",
								"x": 10
							}
						],
						"name": "Vengeful Fossil"
					}
				]
			},
			{
				"id": "43",
				"name": "Spitfire Fossil",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Spitfire Fossil"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Spitfire Fossil"
					}
				]
			}
		],
		"id": "3026",
		"location_id": "31",
		"name": "Dragon Spirits"
	},
	"3027": {
		"desc": "The spirits of the Crimsonwings are lending you their strength, now that their minds have been restored. Buy their services with Gladius Currency!",
		"effects": [
			{
				"id": "59",
				"name": "Batara, Commander",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Ward 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 1
							}
						],
						"name": "Batara, Commander"
					},
					{
						"desc": "All of your creatures gain Ward 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 2
							}
						],
						"name": "Batara, Commander"
					},
					{
						"desc": "All of your creatures gain Ward 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 3
							}
						],
						"name": "Batara, Commander"
					},
					{
						"desc": "All of your creatures gain Ward 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 4
							}
						],
						"name": "Batara, Commander"
					},
					{
						"desc": "All of your creatures gain Ward 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 6
							}
						],
						"name": "Batara, Commander"
					},
					{
						"desc": "All of your creatures gain Ward 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "absorb",
								"x": 8
							}
						],
						"name": "Batara, Commander"
					}
				]
			},
			{
				"id": "60",
				"name": "Razi, Historian",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Razi, Historian"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Razi, Historian"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Razi, Historian"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Razi, Historian"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Razi, Historian"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Razi, Historian"
					}
				]
			},
			{
				"id": "61",
				"name": "Kachina, Reincarnation",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures are Healed for 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 1
							}
						],
						"name": "Kachina, Reincarnation"
					},
					{
						"desc": "All of your creatures are Healed for 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 2
							}
						],
						"name": "Kachina, Reincarnation"
					},
					{
						"desc": "All of your creatures are Healed for 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 3
							}
						],
						"name": "Kachina, Reincarnation"
					},
					{
						"desc": "All of your creatures are Healed for 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 4
							}
						],
						"name": "Kachina, Reincarnation"
					},
					{
						"desc": "All of your creatures are Healed for 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 5
							}
						],
						"name": "Kachina, Reincarnation"
					},
					{
						"desc": "All of your creatures are Healed for 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "heal",
								"x": 6
							}
						],
						"name": "Kachina, Reincarnation"
					}
				]
			}
		],
		"id": "3027",
		"location_id": "32",
		"name": "Crimsonwing Spirits"
	},
	"3028": {
		"desc": "Yuriel has left behind his magical tomes to help Skyhaven. Power them up with Angel Plume!",
		"effects": [
			{
				"id": "26",
				"name": "Tome of Firebolt",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All enemy creatures are hit with Bolt 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 1
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 2
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 3
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 4
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 5 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 5
							}
						],
						"name": "Tome of Firebolt"
					},
					{
						"desc": "All enemy creatures are hit with Bolt 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_turn": "1",
								"effect_type": "skill",
								"enemy_only": "1",
								"id": "strike",
								"x": 6
							}
						],
						"name": "Tome of Firebolt"
					}
				]
			},
			{
				"id": "27",
				"name": "Tome of Shielding",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Armor 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 1
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 2
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 3
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 4
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 6
							}
						],
						"name": "Tome of Shielding"
					},
					{
						"desc": "All of your creatures gain Armor 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "armored",
								"x": 8
							}
						],
						"name": "Tome of Shielding"
					}
				]
			},
			{
				"id": "28",
				"name": "Tome of Darkness",
				"upgrades": [
					{
						"desc": "",
						"effect": []
					},
					{
						"desc": "All of your creatures gain Nullify 1 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 1
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 2 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 2
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 3 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 3
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 4 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 4
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 6 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 6
							}
						],
						"name": "Tome of Darkness"
					},
					{
						"desc": "All of your creatures gain Nullify 8 each turn.",
						"effect": [
							{
								"all": "1",
								"ally_only": "1",
								"effect_type": "skill",
								"id": "imbue",
								"s": "nullify",
								"x": 8
							}
						],
						"name": "Tome of Darkness"
					}
				]
			}
		],
		"id": "3028",
		"location_id": "33",
		"name": "Tome Defense System"
	}
};