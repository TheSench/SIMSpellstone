import { makeAPICall } from "./spellstoneAPI.mjs";

var mapBgesJson;

export async function getMapBgesJs() {
  mapBgesJson = await getMapBgesJson();
  var jsFile = '"use strict"\n\n' + 
    'var MAP_BATTLEGROUNDS = ' + stableStringify(mapBgesJson, null, '\t') + ';';
  return jsFile;
}

async function getMapBgesJson() {
  var mapExpansions = await makeAPICall("init").map_expansion_data;
  
  var mapBges = {};
  for (var key in mapExpansions) {
    var mapExpansion = mapExpansions[key];
    var bgeInfo = mapExpansion.bge;
    if(!bgeInfo) continue;
    var expansionInfo = {
      id: bgeInfo.id,
      name: bgeInfo.name,
      desc: mapExpansion.desc,
      location_id: mapExpansion.location_id,
      effects: []
    };
    var effects = expansionInfo.effects;
    
    var upgrades = mapExpansion.map_upgrade;
    for(var u in upgrades) {
      var upgrade = upgrades[u];
      var effectInfo = {
        id: upgrade.id,
        name: upgrade.name,
        upgrades: [{
          desc: "",
          effect: []
        }]
      };
      var upgradeLevels = effectInfo.upgrades;
      for(var l in upgrade.upgrade) {
        var upgradeLevel = upgrade.upgrade[l];
        var upgradeEffect = upgradeLevel.effect;
        var effectType = Object.keys(upgradeEffect)[0];
        var upgradeLevelInfo = {
          desc: upgradeLevel.desc,
          name: upgrade.name,
          effect: [{
            effect_type: effectType
          }]
        };
        upgradeLevels.push(upgradeLevelInfo);
        upgradeLevelInfo = upgradeLevelInfo.effect[0];
        if(upgradeEffect.skill) {
          var skill = upgradeEffect.skill;
          Object.keys(skill).forEach(function(prop) {
            upgradeLevelInfo[prop] = skill[prop];
          });
          if(upgradeLevelInfo.x) {
            upgradeLevelInfo.x = Number(upgradeLevelInfo.x);
          }
          if(upgradeLevelInfo.mult) {
            upgradeLevelInfo.mult = Number(upgradeLevelInfo.mult);
          }
        } else if(upgradeEffect.on_play) {
          upgradeLevelInfo.defender = upgradeEffect.on_play.defender || 0;
          var on_playEffect = upgradeEffect.on_play.skill;
          if(on_playEffect) {
            upgradeLevelInfo.effect = {effect_type: "skill"};
            Object.keys(on_playEffect).forEach(function(prop) {
              upgradeLevelInfo.effect[prop] = on_playEffect[prop];
            });
            if(upgradeLevelInfo.effect.x) {
              upgradeLevelInfo.effect.x = Number(upgradeLevelInfo.effect.x);
            }
            if(upgradeLevelInfo.effect.mult) {
              upgradeLevelInfo.effect.mult = Number(upgradeLevelInfo.effect.mult);
            }
          }
        }
      }
      effects.push(effectInfo);
    }
    mapBges[expansionInfo.id] = expansionInfo;
  }
  return mapBges;
}