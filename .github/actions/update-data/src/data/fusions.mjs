import { stableStringify } from "./stableStringify.mjs";
import { getJsonFromSynapse } from "./getXmlFromSynapse.mjs";

var fusionsJson;
export async function getFusionsJs() {
  fusionsJson = getFusionsJson();
  var jsFile = '"use strict"\n\n' + 
    'var FUSIONS = ' + stableStringify(fusionsJson, null, '\t') + ';';
  return jsFile;
}

async function getFusionsJson() {
  var fusions = {};
  
  var options = {
    rootNodes: ['fusion_recipe'],
    rawRootMaps: {
      fusion_recipe: function (element) {
        var baseId = element.getChildren("resource").map(function (res) {
          var identity = res.getAttribute("card_id");
          return identity && identity.getValue();
        }).find(identity_);
        fusions[baseId] = element.getChildText("card_id");
      }
    }
  };
  
  await getJsonFromSynapse('fusion_recipes_cj2.xml', options);

  return fusions;
}