var SKILL_DATA = {
	armored : {
		name: 'Armor',
		type: 'passive',
		icon: 'shield',
		desc: 'Prevents damage taken by attacks'
	},
	barrage : {
		name: 'barrage',
		type: 'earlyActivation',
		icon: 'barrage',
		desc: 'Deal damage to random enemy creatures one damage at a time. Does not gain bonus damage from Hex or Venom.'
	},
	berserk : {
		name: 'Berserk',
		type: 'passive',
		icon: 'berserk',
		desc: 'When this creature deals attack damage, Attack is permanently increased'
	},
	burn : {
		name: 'Scorch',
		type: 'activation',
		icon: 'burn',
		desc: 'Deals stacking damage to the enemy across from this creature at end of turn. Wears off if not reapplied for a turn.'
	},
	burn2 : {
		name: 'Scorch 2',
		type: 'activation',
		icon: 'burn',
		desc: 'Deals stacking damage to the enemy across from this creature at end of turn. Wears off if not reapplied for a turn.'
	},
	corrosive : {
		name: 'Corrosive',
		type: 'passive',
		icon: 'corrosive',
		desc: 'Creatures attacking this gain Corrosion, lowering Attack. This effect stacks. Wears off if not reapplied for a turn.'
	},
	counter : {
		name: 'Vengeance',
		type: 'passive',
		icon: 'vengeance',
		desc: 'When damaged by an attack, deal damage to attacker'
	},
	counterburn : {
		name: 'Counterburn',
		type: 'passive',
		icon: 'counterburn',
		desc: 'Deals stacking damage to the enemy across from this creature at end of turn. Wears off if not reapplied for a turn'
	},
	enfeeble : {
		name: 'Hex',
		type: 'activation',
		icon: 'hex',
		desc: 'Increase Damage dealt to a random enemy creature'
	},
	enhance : {
		name: 'Enhance',
		type: 'earlyActivation',
		icon: 'enhance',
		desc: 'Increase effect of skill on a random allied creature'
	},
	enlarge : {
		name: 'Enlarge',
		type: 'earlyActivation',
		icon: 'empower',
		desc: 'Permanently increases the Attack of a creature when played, while this creature is active'
	},
	enrage : {
		name: 'Enrage',
		type: 'earlyActivation',
		icon: 'enrage',
		desc: 'Enrage a random ally creature. Until your next turn, every time the creature takes damage from an Attack, it gains Attack permanently.'
	},
	evade : {
		name: 'Invisibility',
		type: 'passive',
		icon: 'invisibility',
		desc: 'Avoids enemy skills'
	},
	evadebarrier : {
		name: 'Wing Ward',
		type: 'activation',
		icon: 'avian_barrier',
		desc: 'Applies Barrier and Invisibility to a random target allied creature'
	},
	fervor : {
		name: 'Fervor',
		type: 'earlyActivation',
		icon: 'fervor',
		desc: 'Empowers this creature for each adjacent allied creature.'
	},
	flurry : {
		name: 'Dualstrike',
		type: 'flurry',
		icon: 'swiftness',
		desc: 'Activates twice in one turn. Activates every {c} turns.'
	},
	frost : {
		name: 'Frostbreath',
		type: 'activation',
		icon: 'frostbreath',
		desc: 'Deals damage in a cone to up to three creatures in front of it.'
	},
	fury : {
		name: 'Maelstrom\'s Fury',
		type: 'passive',
		icon: 'fury',
		desc: 'When damaged by an attack, deal damage to attacker and increase Attack permanently'
	},
	haste : {
		name: 'Haste',
		type: 'activation',
		icon: 'fury',
		desc: 'Decreases the creature\'s delay.'
	},
	heal : {
		name: 'Heal',
		type: 'activation',
		icon: 'heal',
		desc: 'Heals a random allied creature'
	},
	ignite : {
		name: 'Ignite',
		type: 'activation',
		icon: 'ignite',
		desc: 'Increases the Scorch value on a Scorched enemy creature, or deal Scorch damage to a random enemy creature'
	},
	imbue : {
		name: 'Imbue',
		type: 'earlyActivation',
		icon: 'imbue',
		desc: 'Grants a random allied creature a skill until the start of your next turn'
	},
	intensify : {
		name: 'Intensify',
		type: 'activation',
		icon: 'intensify',
		desc: 'Increases the value of Scorch or Poison on an enemy creature'
	},
	jam : {
		name: 'Freeze',
		type: 'activation',
		icon: 'freeze',
		desc: 'Random enemy creature doesn\'t attack or activate abilities on its next turn. Activates every {c} turns.'
	},
	leech : {
		name: 'Siphon',
		type: 'passive',
		icon: 'siphon',
		desc: 'Heals this card as it deals Attack damage'
	},
	legion : {
		name: 'Legion',
		type: 'earlyActivation',
		icon: 'legion',
		desc: 'Empowers allied creatures adjacent to this creature.'
	},
	mark : {
		name: 'Mark',
		type: 'earlyActivation',
		icon: 'eagle_eye',
		desc: 'Marks a random target upon first activation, Hexing them for 30% of their base Attack. The creature chooses a new mark when their current mark dies. Ignores Invisibility.'
	},
	nullify : {
		name: 'Nullify',
		type: 'passive',
		icon: 'nullify',
		desc: 'Nullifies enemy creatures damaged by this card. Nullified units avoid their own friendly skills.'
	},
	pierce : {
		name: 'Pierce',
		type: 'passive',
		icon: 'puncture',
		desc: 'Reduces the effect of enemy Armor and Barriers'
	},
	poison : {
		name: 'Poison',
		type: 'passive',
		icon: 'corrupt',
		desc: 'Poisons creatures damaged by this card, dealing additional damage at the end of turn'
	},
	poisonstrike : {
		name: 'Poisonbolt',
		type: 'activation',
		icon: 'poison_bolt',
		desc: 'Deals bolt damage to a random enemy creature and leaves poison'
	},
	protect : {
		name: 'Barrier',
		type: 'activation',
		icon: 'mystic_barrier',
		desc: 'Reduces the next Damage dealt to a random allied creature'
	},
	protect_ice : {
		name: 'Iceshatter Barrier',
		type: 'activation',
		icon: 'iceshatter',
		desc: 'Reduces the next Damage dealt to a random allied creature'
	},
	protect_seafolk : {
		name: 'Barrier',
		type: 'activation',
		icon: 'mystic_barrier',
		desc: 'Reduces the next Damage dealt to a random allied creature'
	},
	rally : {
		name: 'Empower',
		type: 'earlyActivation',
		icon: 'empower',
		desc: 'Boosts Attack of a random allied creature'
	},
	reanimate : {
		name: 'Reanimate',
		type: 'activation',
		icon: 'reanimate',
		desc: 'Revives on first death'
	},
	reinforce : {
		name: 'Energy Shield',
		type: 'passive',
		icon: 'mystic_barrier',
		desc: 'When this creature deals Attack damage they gain a Barrier'
	},
	resurrect : {
		name: 'Resurrect',
		type: 'activation',
		icon: 'frostbreath',
		desc: 'Resurrects creatures when they die.'
	},
	scorchbreath : {
		name: 'Scorchbreath',
		type: 'activation',
		icon: 'scorchbreath',
		desc: 'Deals scorch in a cone to up to three creatures in front of it'
	},
	silence : {
		name: 'Silence',
		type: 'toggle',
		icon: 'silence',
		desc: 'Removes all skills from damaged enemy creature for one turn.'
	},
	slow : {
		name: 'Slow',
		type: 'activation',
		icon: 'bind',
		desc: 'Increases the creature\'s delay.'
	},
	strike : {
		name: 'Bolt',
		type: 'activation',
		icon: 'arcane_shot',
		desc: 'Deals damage to a random enemy creature'
	},
	taunt : {
		name: 'Taunt',
		type: 'toggle',
		icon: 'taunt',
		desc: 'Attack damage dealt to adjacent creatures is dealt to this creature instead.'
	},
	valor : {
		name: 'Valor',
		type: 'passive',
		icon: 'valor',
		desc: 'First time this activates, gains Attack permanently if opposing creature has more Attack.'
	},
	venom : {
		name: 'Venom',
		type: 'passive',
		icon: 'venom',
		desc: 'Creatures damaged by this card are afflicted with Venom, increasing damage dealt to it and dealing additional damage at the end of each turn'
	},
	weaken : {
		name: 'Weaken',
		type: 'activation',
		icon: 'hinder',
		desc: 'Reduces Attack of a random enemy creature'
	},
	weakenself : {
		name: 'Weaken Ally',
		type: 'activation',
		icon: 'hinder',
		desc: 'Reduces Attack of a random allied creature'
	}
}