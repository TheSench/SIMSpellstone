import { stableStringify } from "./stableStringify.mjs";
import { getJsonFromSynapse } from "./getXmlFromSynapse.mjs";

var fusionsJson;
export async function getFusionsJs() {
  fusionsJson = await getFusionsJson();
  var jsFile = '"use strict"\n\n' +
    'var FUSIONS = ' + stableStringify(fusionsJson, null, '\t') + ';';
  return jsFile;
}

async function getFusionsJson() {
  var fusions = {};

  var options = {
    rootNodes: ['fusion_recipe'],
    arrayRoots: { 'resource': 'resource' },
    rawRootMaps: {
      fusion_recipe: function ([name, element]) {
        var baseId = element.resource.map(it => it['@card_id']).find(it => it);
        fusions[baseId] = element.card_id.toString();
      }
    }
  };

  await getJsonFromSynapse('fusion_recipes_cj2.xml', options);

  return fusions;
}
