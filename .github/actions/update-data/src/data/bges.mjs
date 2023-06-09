import { stableStringify } from "./stableStringify.mjs";
import { getJsonFromSynapse } from "./getXmlFromSynapse.mjs";

var bgesJson;

export async function getBgesJs() {
  bgesJson = await getBgeJson();
  var jsFile = '"use strict"\n\n' + 
    'var BATTLEGROUNDS = ' + stableStringify(bgesJson, null, '\t') + ';';
  return jsFile;
}

async function getBgeJson() {
    var bges = (await getJsonFromSynapse('battleground_effects.xml', {
    arrayRoots: {
      'effect': 'effect_type'
    },
    conversions: {
      x: parseFloat,
      delay: parseArrayOfInt,
      base_mult: parseFloat,
      mult: parseFloat,
      enemy_only: Boolean,
      first_play: parseFloat,
      attacker: parseFloat,
      defender: parseFloat,
      effect: convertEffects,
      pvp_rank: parseFloat,
      on_play: makeOnPlayEffects,
      rarity: parseFloat,
      card: parseFloat,
      level: parseFloat,
      battleground: checkIsTower,
      trap_card: convertId,
      rune_mult: makeRuneMult,
      add_skill: fixSkillIds_
    },
    renames: {
      'yy': 'y',
      'stat': 'statChange'
    },
    filteredProps: ['web_picture', 'icon', 'max_level', 'icon_bundle', 'index', 'card_type'],
    rootNotes: ['battleground']
  }));
  var json = {};
  bges.forEach(function(bge) {
    if(!Array.isArray(bge.effect) || bge.effect.length) {
      json[bge.id] = bge;
    }
  });
  return json;
}

function convertStartingCards(startingCard) {
  return {
    id: parseFloat(startingCard.id),
    level: parseFloat(startingCard.level)
  };
}

function makeRuneMult(runMult) {
  return {
    "effect_type": "runeMultiplier",
    "mult": parseFloat(runMult)
  };
}

function fixSkillIds_(addSkill) {
  if(addSkill.id === 'absorb_mecha') {
    addSkill.id = 'absorb';
  }
  return addSkill;
}

function convertEffects(effects) {
  if(effects[0] && effects[0].effect_type === "starting_card") {
    var newEffects = {};
    effects.forEach(function(effect) {
      newEffects[effect.pvp_rank] = convertStartingCards(effect);
    });
    newEffects.isTower = true;
    return newEffects;
  } else if (Array.isArray(effects)) {
    return effects
      .filter(function(effect) { return effect.id !== 'displayEffect'; })
      .map(function(effect) {
        if(effect.effect_type === "stat") {
          effect.effect_type = "statChange";
        }
        return effect;
      });
  } else {
    return effects;
  }
}

function convertId(bge) {
  bge.id = parseFloat(bge.id);
  return bge;
}

function checkIsTower(bge, options) {
  if(bge.effect && bge.effect.isTower) {
    bge.isTower = true;
    delete bge.effect.isTower;
  }
  
  if(bge.enemy_only || parseFloat(bge.id) > 1000) {
    bge.hidden = true;
  }
  
  return bge;
}

function makeOnPlayEffects(onPlayBGE) {
  onPlayBGE.effect = { effect_type: 'add_skill' };
  Object.keys(onPlayBGE.add_skill).forEach(function(key) {
    onPlayBGE.effect[key] = onPlayBGE.add_skill[key];
  });
  delete onPlayBGE.add_skill;
  return onPlayBGE;
}

function parseArrayOfInt(values) {
  return values.split(',').map(function (value) { return parseInt(value, 10) });
}