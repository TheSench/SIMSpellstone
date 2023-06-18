import { makeAPICall } from "./spellstoneAPI.mjs";
import { stableStringify } from "./stableStringify.mjs";

var bgesJson;

export async function getBgesJs() {
  bgesJson = await getBgeJson();
  var jsFile = '"use strict"\n\n' +
    'var BATTLEGROUNDS = ' + stableStringify(bgesJson, null, '\t') + ';';
  return jsFile;
}

async function getBgeJson() {
  var bges = (await makeAPICall('init')).battleground_effect_data;
  return Object.values(bges).reduce((bges, bge) => {
    var { icon, web_picture, icon_bundle, ...bge } = bge;
    let effect;
    let additionalFields = {};
    if (bge.effect.starting_card) {
      effect = Object.values(bge.effect.starting_card).reduce((effect, card) => {
        effect[card.pvp_rank] = convertStartingCards(card);
        return effect;
      }, {});
      additionalFields.isTower = true;
    } else {
      effect = Object.entries(bge.effect)
        .filter(([name]) => name !== 'card_type')
        .flatMap(([effect_type, value]) => {
          switch (effect_type) {
            case 'rune_mult':
              return [{
                "effect_type": "runeMultiplier",
                "mult": parseFloat(value)
              }];
            default:
              return (Array.isArray(value) ? value : [value])
                .filter(effect => effect.id !== 'displayEffect')
                .map(effect => ({
                  ...withConvertedFields(effect, effect_type),
                  effect_type: (effect_type === 'stat' ? 'statChange' : effect_type),
                }));
          }
        })
    }
    if (bge.enemy_only) {
      additionalFields.enemy_only = true;
      additionalFields.hidden = true;
    }
    if (parseFloat(bge.id) > 1000) {
      additionalFields.hidden = true;
    }
    convertField(bge, 'starting_level', parseInt);
    convertField(bge, 'max_level', parseInt);
    convertField(bge, 'scale_with_level', parseBool);
    bges[bge.id] = {
      ...bge,
      effect,
      ...additionalFields
    };
    return bges;
  }, {});
}

function withConvertedFields(effect, effect_type) {
  convertField(effect, 'x', parseFloat);
  convertField(effect, 'card', parseInt);
  convertField(effect, 'level', parseInt);
  convertField(effect, 'rarity', parseInt);
  convertField(effect, 'first_play', parseInt);
  convertField(effect, 'attacker', parseInt);
  convertField(effect, 'defender', parseInt);
  convertField(effect, 'mult', parseFloat);
  convertField(effect, 'base_mult', parseFloat);
  convertField(effect, 'delay', parseArrayOfInt);
  if (effect_type === 'trap_card') {
    convertField(effect, 'id', parseInt);
  }
  convertSubEffects(effect);
  mapFieldName(effect, "yy", "y");
  mapValues(effect, 'id', {
    'absorb_mecha': 'absorb',
  })
  ignoreFields(effect, ['index']);
  return effect
}

function ignoreFields(effect, fields) {
  fields.forEach(field => {
    if (effect.hasOwnProperty(field)) delete effect[field];
  });
}

function convertSubEffects(effect) {
  const subEffects = {
    add_skill: effect.add_skill,
  }
  Object.entries(subEffects).forEach(([effect_type, subEffect]) => {
    if (subEffect === undefined) return;
    effect.effect = {
      ...withConvertedFields(subEffect[0], effect_type),
      effect_type
    }
    delete effect[effect_type];
  });
}

function convertField(effect, field, mapper) {
  if (effect.hasOwnProperty(field)) effect[field] = mapper(effect[field]);
}

function mapFieldName(effect, from, to) {
  if (effect.hasOwnProperty(from)) {
    effect[to] = effect[from];
    delete effect[from];
  }
}

function mapValues(effect, field, values) {
  if (effect.hasOwnProperty(field) && values.hasOwnProperty(effect[field])) {
    effect[field] = values[effect[field]];
  }
}

function convertTowerEffect(towerEffect) {
  var newEffects = {};
  effects.forEach(function (effect) {
    newEffects[effect.pvp_rank] = convertStartingCards(effect);
  });
  newEffects.isTower = true;
  return newEffects;
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
  if (addSkill.id === 'absorb_mecha') {
    addSkill.id = 'absorb';
  }
  return addSkill;
}

function convertEffects(effects) {
  if (effects[0] && effects[0].effect_type === "starting_card") {
    var newEffects = {};
    effects.forEach(function (effect) {
      newEffects[effect.pvp_rank] = convertStartingCards(effect);
    });
    newEffects.isTower = true;
    return newEffects;
  } else if (Array.isArray(effects)) {
    return effects
      .filter(function (effect) { return effect.id !== 'displayEffect'; })
      .map(function (effect) {
        if (effect.effect_type === "stat") {
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
  if (bge.effect && bge.effect.isTower) {
    bge.isTower = true;
    delete bge.effect.isTower;
  }

  if (bge.enemy_only || parseFloat(bge.id) > 1000) {
    bge.hidden = true;
  }

  return bge;
}

function makeOnPlayEffects(onPlayBGE) {
  onPlayBGE.effect = { effect_type: 'add_skill' };
  Object.keys(onPlayBGE.add_skill).forEach(function (key) {
    onPlayBGE.effect[key] = onPlayBGE.add_skill[key];
  });
  delete onPlayBGE.add_skill;
  return onPlayBGE;
}

function parseArrayOfInt(values) {
  return values.split(',').map(function (value) { return parseInt(value, 10) });
}

function parseBool(value) {
  return value === '1';
}