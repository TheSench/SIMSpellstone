"use strict"

var SKILL_DATA = {
	"absorb": {
		"desc": "Prevents X damage taken from skills each round.",
		"icon": "absorb",
		"name": "Ward",
		"type": "turnStart"
	},
	"armored": {
		"desc": "Prevents damage taken by attacks",
		"icon": "shield",
		"name": "Armor",
		"type": "passive"
	},
	"backlash": {
		"desc": "After being targeted by an enemy creature's skill, deals damage back.",
		"icon": "payback",
		"name": "Backlash",
		"type": "activation"
	},
	"barrage": {
		"desc": "Deal damage to random enemy creatures one damage at a time. Does not gain bonus damage from Hex or Venom.",
		"icon": "barrage",
		"name": "barrage",
		"type": "earlyActivation"
	},
	"berserk": {
		"desc": "When this creature deals attack damage, Attack is permanently increased",
		"icon": "berserk",
		"name": "Berserk",
		"type": "onAttack"
	},
	"burn": {
		"desc": "Deals stacking damage to the enemy across from this creature at end of turn. Wears off if not reapplied for a turn.",
		"icon": "burn",
		"name": "Scorch",
		"type": "activation"
	},
	"burn2": {
		"desc": "Deals stacking damage to the enemy across from this creature at end of turn. Wears off if not reapplied for a turn.",
		"icon": "burn",
		"name": "Scorch 2",
		"type": "activation"
	},
	"burnself": {
		"desc": "Deals stacking damage to this creature at end of turn. Wears off if not reapplied for a turn.",
		"icon": "burn",
		"name": "Scorch Self",
		"type": "activation"
	},
	"corrosive": {
		"desc": "Creatures attacking this gain Corrosion, lowering Attack. This effect stacks. Wears off if not reapplied for a turn.",
		"icon": "corrosive",
		"name": "Corrosive",
		"type": "onDamaged"
	},
	"counter": {
		"desc": "When damaged by an attack, deal damage to attacker",
		"icon": "vengeance",
		"name": "Vengeance",
		"type": "onDamaged"
	},
	"counterburn": {
		"desc": "When damaged by an attack, Scorch the attacker",
		"icon": "counterburn",
		"name": "Emberhide",
		"type": "onDamaged"
	},
	"counterpoison": {
		"desc": "When damaged by an attack, Poison the attacker",
		"icon": "counterburn",
		"name": "Poisonhide",
		"type": "onDamaged"
	},
	"daze": {
		"desc": "When this creature deals attack damage, reduce the Attack of the damaged creature.",
		"icon": "daze",
		"name": "Daze",
		"type": "onAttack"
	},
	"enfeeble": {
		"desc": "Increase damage dealt to a random enemy creature",
		"icon": "hex",
		"name": "Hex",
		"type": "activation"
	},
	"enhance": {
		"desc": "Increase effect of skill on a random allied creature",
		"icon": "enhance",
		"name": "Enhance",
		"type": "earlyActivation"
	},
	"enlarge": {
		"desc": "Permanently increases the Attack of a creature when played, while this creature is active",
		"icon": "empower",
		"name": "Enlarge",
		"type": "earlyActivation"
	},
	"enrage": {
		"desc": "Enrage a random ally creature. Until your next turn, every time the creature takes damage from an Attack, it gains Attack permanently.",
		"icon": "enrage",
		"name": "Enrage",
		"type": "earlyActivation"
	},
	"evade": {
		"desc": "Avoids enemy skills",
		"icon": "invisibility",
		"name": "Invisibility",
		"type": "turnStart"
	},
	"evadebarrier": {
		"desc": "Applies Barrier and Invisibility to a random target allied creature",
		"icon": "avian_barrier",
		"name": "Wing Ward",
		"type": "activation"
	},
	"fervor": {
		"desc": "Empowers this creature for each adjacent allied creature.",
		"icon": "fervor",
		"name": "Fervor",
		"type": "earlyActivation"
	},
	"flurry": {
		"desc": "Activates twice in one turn. Activates every {c} turns.",
		"icon": "swiftness",
		"name": "Dualstrike",
		"type": "turnStart"
	},
	"frost": {
		"desc": "Deals damage in a cone to up to three creatures in front of it.",
		"icon": "frostbreath",
		"name": "Frostbreath",
		"type": "activation"
	},
	"fury": {
		"desc": "When damaged by an attack, deal damage to attacker and increase Attack permanently",
		"icon": "fury",
		"name": "Maelstrom's Fury",
		"type": "onDamaged"
	},
	"haste": {
		"desc": "Decreases the creature's delay.",
		"icon": "fury",
		"name": "Haste",
		"type": "activation"
	},
	"heal": {
		"desc": "Heals a random allied creature",
		"icon": "heal",
		"name": "Heal",
		"type": "activation"
	},
	"heartseeker": {
		"desc": "Inflicts Heartseeker on the opposing creature, permanently increasing damage taken from Attacks.",
		"icon": "heartseeker",
		"name": "Heartseeker",
		"type": "activation"
	},
	"ignite": {
		"desc": "Increases the Scorch value on a Scorched enemy creature, or deal Scorch damage to a random enemy creature",
		"icon": "ignite",
		"name": "Ignite",
		"type": "activation"
	},
	"imbue": {
		"desc": "Grants a random allied creature a skill until the start of your next turn",
		"icon": "imbue",
		"name": "Imbue",
		"type": "earlyActivation"
	},
	"intensify": {
		"desc": "Increases the value of Scorch or Poison on an enemy creature",
		"icon": "intensify",
		"name": "Intensify",
		"type": "activation"
	},
	"jam": {
		"desc": "Random enemy creature doesn't attack or activate abilities on its next turn. Activates every {c} turns.",
		"icon": "freeze",
		"name": "Freeze",
		"type": "activation"
	},
	"jamself": {
		"desc": "This creature doesn't attack or activate abilities on its next turn. Activates every {c} turns.",
		"icon": "freeze",
		"name": "Freeze Self",
		"type": "activation"
	},
	"leech": {
		"desc": "Heals this card as it deals Attack damage",
		"icon": "siphon",
		"name": "Siphon",
		"type": "onAttack"
	},
	"legion": {
		"desc": "Empowers allied creatures adjacent to this creature.",
		"icon": "legion",
		"name": "Legion",
		"type": "earlyActivation"
	},
	"mark": {
		"desc": "Marks a random target upon first activation, Hexing them for 30% of their base Attack. The creature chooses a new mark when their current mark dies. Ignores Invisibility.",
		"icon": "eagle_eye",
		"name": "Mark",
		"type": "earlyActivation"
	},
	"nullify": {
		"desc": "Nullifies enemy creatures damaged by this card. Nullified units avoid their own friendly skills.",
		"icon": "nullify",
		"name": "Nullify",
		"type": "onAttack"
	},
	"pierce": {
		"desc": "Reduces the effect of enemy Armor and Barriers",
		"icon": "puncture",
		"name": "Pierce",
		"type": "passive"
	},
	"poison": {
		"desc": "Poisons creatures damaged by this card, dealing additional damage at the end of turn",
		"icon": "corrupt",
		"name": "Poison",
		"type": "onAttack"
	},
	"poisonstrike": {
		"desc": "Deals bolt damage to a random enemy creature and leaves poison",
		"icon": "poison_bolt",
		"name": "Poisonbolt",
		"type": "activation"
	},
	"protect": {
		"desc": "Reduces the next damage dealt to a random allied creature",
		"icon": "mystic_barrier",
		"name": "Barrier",
		"type": "activation"
	},
	"protect_ice": {
		"desc": "Reduces the next damage dealt to a random allied creature",
		"icon": "iceshatter",
		"name": "Iceshatter Barrier",
		"type": "activation"
	},
	"protect_seafolk": {
		"desc": "Reduces the next Damage dealt to a random allied creature",
		"icon": "mystic_barrier",
		"name": "Barrier",
		"type": "activation"
	},
	"rally": {
		"desc": "Boosts Attack of a random allied creature",
		"icon": "empower",
		"name": "Empower",
		"type": "earlyActivation"
	},
	"reanimate": {
		"desc": "On death, is subject to a cruel fate.",
		"icon": "reanimate",
		"name": "A Knight's Fate",
		"type": "onDeath"
	},
	"regenerate": {
		"desc": "Heals itself at the end of turn, even while on delay.",
		"icon": "regenerate",
		"name": "Regenerate",
		"type": "turnEnd"
	},
	"reinforce": {
		"desc": "When this creature deals Attack damage they gain a Barrier",
		"icon": "reinforce",
		"name": "Energy Shield",
		"type": "onAttack"
	},
	"resurrect": {
		"desc": "Resurrects creatures when they die.",
		"icon": "frostbreath",
		"name": "Resurrect",
		"type": "activation"
	},
	"scorchbreath": {
		"desc": "Deals scorch in a cone to up to three creatures in front of it",
		"icon": "scorchbreath",
		"name": "Scorchbreath",
		"type": "activation"
	},
	"silence": {
		"desc": "Removes all skills from damaged enemy creature for one turn.",
		"icon": "silence",
		"name": "Silence",
		"type": "toggle"
	},
	"slow": {
		"desc": "Increases the creature's delay.",
		"icon": "bind",
		"name": "Slow",
		"type": "activation"
	},
	"stasis": {
		"desc": "Reduces damage taken from each Attack and Skill while on delay or Frozen.",
		"icon": "shroud",
		"name": "Shroud",
		"type": "turnStart"
	},
	"strike": {
		"desc": "Deals damage to a random enemy creature",
		"icon": "arcane_shot",
		"name": "Bolt",
		"type": "activation"
	},
	"taunt": {
		"desc": "Attack damage dealt to adjacent creatures is dealt to this creature instead.",
		"icon": "taunt",
		"name": "Taunt",
		"type": "toggle"
	},
	"unearth": {
		"desc": "When a non token creature dies, it spawns a Token creature with stats based on its own stats",
		"icon": "reanimate",
		"name": "Unearth",
		"type": "onDeath"
	},
	"valor": {
		"desc": "First time this activates, gains Attack permanently if opposing creature has more Attack.",
		"icon": "valor",
		"name": "Valor",
		"type": "turnStart"
	},
	"venom": {
		"desc": "Creatures damaged by this card are afflicted with Venom, increasing damage dealt to it and dealing additional damage at the end of each turn",
		"icon": "venom",
		"name": "Venom",
		"type": "onAttack"
	},
	"weaken": {
		"desc": "Reduces Attack of a random enemy creature",
		"icon": "hinder",
		"name": "Weaken",
		"type": "activation"
	},
	"weakenself": {
		"desc": "Reduces Attack of a random allied creature",
		"icon": "hinder",
		"name": "Weaken Ally",
		"type": "activation"
	}
};

for(var skillID in SKILL_DATA) {
	var skillInfo = SKILL_DATA[skillID];
	if(skillID === 'flurry') {
		skillInfo.type = 'flurry';
	} else if(['turnStart', 'onAttack', 'onDamaged', 'turnEnd'].indexOf(skillInfo.type) >= 0) {
		skillInfo.type = 'passive';
	}
}