import { getScriptFromGithub } from './getScriptFromGithub.mjs';
import { makeAPICall } from './spellstoneAPI.mjs';

var newCommonJs;

export async function getCommonJs() {
  var oldJsFile = getScriptFromGithub('common.js');
  
  var currentBGEs = await getCurrentBges();
  if(currentBGEs.length) {
    newCommonJs = '"use strict"\n\n' + 
                'var text_version = \'v2.0\';\n' +
                'var current_bges = ' + JSON.stringify(currentBGEs) + ';\n';
  } else {
    newCommonJs = oldJsFile;
  }
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
