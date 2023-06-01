"use strict"

var SKILL_DATA = {
	"absorb": {
		"desc": "Prevents this much damage taken from Skills or Statuses each round.",
		"icon": "absorb",
		"name": "Ward",
		"type": "turnStart"
	},
	"armored": {
		"desc": "Reduces damage taken from each Attack.",
		"icon": "shield",
		"name": "Armor",
		"type": "passive"
	},
	"backlash": {
		"desc": "After being targeted by an enemy creature's Skill, deals damage back.",
		"icon": "payback",
		"name": "Backlash",
		"type": "passive"
	},
	"barrage": {
		"desc": "Deal damage to random enemy creatures one damage at a time. Does not gain bonus damage from Hex or Venom.",
		"icon": "barrage",
		"name": "barrage",
		"type": "earlyActivation"
	},
	"bash": {
		"desc": "Increases damage dealt by the first attack each turn.",
		"icon": "empower",
		"name": "Bash",
		"type": "passive"
	},
	"berserk": {
		"desc": "After dealing Attack damage, permanently increases Attack.",
		"icon": "berserk",
		"name": "Berserk",
		"type": "onAttack"
	},
	"burn": {
		"desc": "Inflicts Scorch on the opposing creature. Scorch deals damage at end of turn until Scorch is not inflicted for a turn.",
		"icon": "burn",
		"name": "Scorch",
		"type": "activation"
	},
	"burn2": {
		"desc": "Inflicts Scorch on the opposing creature. Scorch deals damage at end of turn until Scorch is not inflicted for a turn.",
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
	"cleanse": {
		"desc": "Every {c} turns, remove the negative states of itself or an ally.",
		"icon": "cleanse",
		"name": "Cleanse",
		"type": "earlyActivation"
	},
	"confuse": {
		"desc": "Every {c} turns, inflicts Confuse on a random enemy creature, forcing it to Attack an adjacent ally.",
		"icon": "confuse",
		"name": "Confusion",
		"type": "activation"
	},
	"corrosive": {
		"desc": "After taking Attack damage, inflicts Corrosive back, reducing Attack until Corrosive is not inflicted for two turns.",
		"icon": "corrosive",
		"name": "Corrosive",
		"type": "onDamaged"
	},
	"counter": {
		"desc": "After taking Attack damage, deals damage back.",
		"icon": "vengeance",
		"name": "Vengeance",
		"type": "onDamaged"
	},
	"counterburn": {
		"desc": "After taking Attack damage, inflicts Scorch back.",
		"icon": "counterburn",
		"name": "Emberhide",
		"type": "onDamaged"
	},
	"counterpoison": {
		"desc": "When damaged by an attack, Poison the attacker.",
		"icon": "poisonhide",
		"name": "Poisonhide",
		"type": "onDamaged"
	},
	"daze": {
		"desc": "After dealing Attack damage, inflicts Daze, reducing Attack.",
		"icon": "daze",
		"name": "Daze",
		"type": "onAttack"
	},
	"devour": {
		"desc": "After dealing Attack damage, permanently increases Attack and heals self.",
		"icon": "devour",
		"name": "devour",
		"type": "onAttack"
	},
	"enfeeble": {
		"desc": "Inflicts Hex on a random enemy creature, causing it to take extra damage each time it is damaged.",
		"icon": "hex",
		"name": "Hex",
		"type": "activation"
	},
	"enfeeblebge": {
		"desc": "Inflicts Hex on a random enemy creature, causing it to take extra damage each time it is damaged.",
		"icon": "hex",
		"name": "Hex",
		"type": "activation"
	},
	"enhance": {
		"desc": "Increases the effect of this Skill for a random ally creature.",
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
		"desc": "Grants Enrage to a random ally creature, causing it to permanently increase Attack after taking Attack damage.",
		"icon": "enrage",
		"name": "Enrage",
		"type": "activation"
	},
	"evade": {
		"desc": "Avoids this many targeted enemy Skills each round.",
		"icon": "invisibility",
		"name": "Invisibility",
		"type": "turnStart"
	},
	"evadebarrier": {
		"desc": "Grants Barrier and half as much Invisibility to self and leftmost ally creature.",
		"icon": "mystic_barrier",
		"name": "Mystic Barrier",
		"type": "activation"
	},
	"fervor": {
		"desc": "At start of turn, grants self Fervor for each adjacent creature, increasing Attack.",
		"icon": "fervor",
		"name": "Fervor",
		"type": "earlyActivation"
	},
	"flurry": {
		"desc": "Every {c} turns, Attacks twice and uses other Skills twice.",
		"icon": "swiftness",
		"name": "Dualstrike",
		"type": "turnStart"
	},
	"frost": {
		"desc": "Deals damage to the opposing creature and its adjacent creatures.",
		"icon": "frostbreath",
		"name": "Frostbreath",
		"type": "activation"
	},
	"fury": {
		"desc": "After taking Attack damage, deals damage back and permanently increases Attack.",
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
		"desc": "Heals a random ally creature.",
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
		"desc": "Adds this Skill to a random ally creature.",
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
	"invigorate": {
		"desc": "Heals a random ally creature and grants Invigorate, permanently increasing max health. Invigorate does not stack.",
		"icon": "invigorate",
		"name": "invigorate",
		"type": "activation"
	},
	"jam": {
		"desc": "Every {c} turns, inflicts Freeze on a random enemy creature, disabling its Attack and activation Skills.",
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
		"desc": "After dealing Attack damage, heals self.",
		"icon": "siphon",
		"name": "Siphon",
		"type": "onAttack"
	},
	"legion": {
		"desc": "At start of turn, grants adjacent allies Legion, increasing Attack.",
		"icon": "legion",
		"name": "Legion",
		"type": "earlyActivation"
	},
	"magicfield": {
		"desc": "Grants Ward to self and half as much to adjacent ally creatures.",
		"icon": "antimagicfield",
		"name": "Anti-Magic Field",
		"type": "activation"
	},
	"mark": {
		"desc": "Marks a random target upon first activation, Hexing them for 30% of their base Attack. The creature chooses a new mark when their current mark dies. Ignores Invisibility.",
		"icon": "eagle_eye",
		"name": "Mark",
		"type": "earlyActivation"
	},
	"nullify": {
		"desc": "After dealing Attack damage, inflicts Nullify, causing the creature to avoid this many targeted ally Skills.",
		"icon": "nullify",
		"name": "Nullify",
		"type": "onAttack"
	},
	"pierce": {
		"desc": "Reduces the effect of damage reduction and prevention on Attack damage.",
		"icon": "puncture",
		"name": "Pierce",
		"type": "passive"
	},
	"poison": {
		"desc": "After dealing Attack damage, permanently inflicts Poison, dealing damage at end of turn. Poison does not stack.",
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
		"desc": "Grants Barrier to a random ally creature, preventing this much damage taken.",
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
	"radiance": {
		"desc": "At start of turn, grant adjacent allies Legion and half as much Barrier.",
		"icon": "radiance",
		"name": "radiance",
		"type": "earlyActivation"
	},
	"rally": {
		"desc": "At start of turn, grants Empower to a random ally creature, increasing Attack.",
		"icon": "empower",
		"name": "Empower",
		"type": "earlyActivation"
	},
	"reanimate": {
		"desc": "After dying the first time, revives self, healing and removing all effects.",
		"icon": "reanimate",
		"name": "Reanimate",
		"type": "onDeath"
	},
	"regenerate": {
		"desc": "At end of turn, heals self, even while on delay.",
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
		"desc": "Inflicts Scorch to the opposing creature and its adjacent creatures.",
		"icon": "scorchbreath",
		"name": "Scorchbreath",
		"type": "activation"
	},
	"silence": {
		"desc": "After dealing Attack damage, inflicts Silence, disabling all Skills.",
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
		"type": "passive"
	},
	"strike": {
		"desc": "Deals damage to a random enemy creature.",
		"icon": "arcane_shot",
		"name": "Bolt",
		"type": "activation"
	},
	"swarm": {
		"desc": "After dealing Attack damage, permanently increases Attack of the lowest Attack active ally creature",
		"icon": "berserk",
		"name": "Swarm",
		"type": "onAttack"
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
		"desc": "At start of turn, permanently increases Attack if opposing creature has more Attack, even while on delay.",
		"icon": "valor",
		"name": "Valor",
		"type": "turnStart"
	},
	"vampirism": {
		"desc": "Deals damage to opposing creature, even while on delay. This damage cannot be increased. After dealing damage, heals self.",
		"icon": "vampirism",
		"name": "Vampirism",
		"type": "passive"
	},
	"venom": {
		"desc": "Creatures damaged by this card are afflicted with Venom, increasing damage dealt to it and dealing additional damage at the end of each turn",
		"icon": "venom",
		"name": "Venom",
		"type": "onAttack"
	},
	"weaken": {
		"desc": "Inflicts Weaken on a random enemy creature, reducing Attack and preventing Attack increases.",
		"icon": "hinder",
		"name": "Weaken",
		"type": "activation"
	},
	"weakenbge": {
		"desc": "Inflicts Weaken on a random enemy creature, reducing Attack.",
		"icon": "hinder",
		"name": "Weaken",
		"type": "activation"
	},
	"weakenself": {
		"desc": "Reduces Attack of a random allied creature",
		"icon": "hinder",
		"name": "Weaken Ally",
		"type": "activation"
	},
	"wingward": {
		"desc": "Grants Barrier and half as much Invisibility to self and leftmost ally creature.",
		"icon": "avian_barrier",
		"name": "Wing Guard",
		"type": "activation"
	}
};