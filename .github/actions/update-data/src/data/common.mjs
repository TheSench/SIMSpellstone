import { getScriptFromGithub } from './getScriptFromGithub.mjs';
import { makeAPICall } from './spellstoneAPI.mjs';

var newCommonJs;

export async function getCommonJs(otherChanges) {
  var oldJsFile = getOldCommonJs();
  
  var currentBGEs = await getCurrentBges();
  if(currentBGEs.length) {
    newCommonJs = '"use strict"\n\n' + 
                'var text_version = \'v2.0\';\n' +
                'var battle_sim = false;\n' +
                'var current_bges = ' + JSON.stringify(currentBGEs) + ';\n';
  } else {
    newCommonJs = oldJsFile;
  }
  
  if(otherChanges || newCommonJs !== oldJsFile) {
    newCommonJs += dataUpdatedLine();
  } else {
    newCommonJs = null;
  }
  return newCommonJs;
}

function dataUpdatedLine() {
  return `var DataUpdated = ${Date.now()};`;
}

async function getCurrentBges() {
  var currentBges = [];
  
  var events = (await makeAPICall("updateEvents")).active_events;
  for(var id in events) {
    var effect = events[id].effect;
    if(effect && !effect.clash_only && !effect.guildwar_only) {
      var bges = effect.bg_effect;
      if(bges) {
        if(!Array.isArray(bges)) {
          bges = [bges];
        }
        bges.forEach(function(bgeID) {
          currentBges.push(parseInt(bgeID));
        });
      }
    }
  }
  
  return currentBges;
}

function getOldCommonJs() {
  var oldCommonJs = getScriptFromGithub('common.js')
  .replace(/var DataUpdated = (\d|\.)+;/, '');
  
  return oldCommonJs;
}