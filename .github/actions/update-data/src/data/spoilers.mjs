import { stableStringify } from "./stableStringify.mjs";

var spoilersJson;

export async function getSpoilersJs(scriptChanges) {
  var oldCards = getCardsFromScript(scriptChanges.oldScript);
  var newCards = getCardsFromScript(scriptChanges.newScript);
  spoilersJson = {};
  for(var id in newCards) {
    if(!oldCards[id] 
    || stableStringify(oldCards[id]) !== stableStringify(newCards[id])) {
      spoilersJson[id] = true;
    }
  }
  return '"use strict"\n\n' +
    'var spoilers = ' + stableStringify(spoilersJson, null, '\t') + ';';
}

function getCardsFromScript(script) {
  var json = script.replace('"use strict"', '').replace('var CARDS =', '');
  json = json.substring(0, json.length - 1);
  return JSON.parse(json);
}