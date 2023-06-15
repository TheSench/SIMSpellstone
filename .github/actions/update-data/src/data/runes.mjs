import { stableStringify } from "./stableStringify.mjs";
import { makeAPICall } from "./spellstoneAPI.mjs";
import { convertedValue } from "./xmlToJson.mjs";

var runesJson;

export async function getRunesJs() {
  runesJson = await getRunesJson();
  var jsFile = '"use strict"\n\n' +
    'var RUNES = ' + stableStringify(runesJson, null, '\t') + ';';
  return jsFile;
}

async function getRunesJson() {
  var items = await makeAPICall("init");
  items = items.item_data;

  var runes = {};
  for (var key in items) {
    var item = items[key];
    if (item.category != 3) continue; // Filter non-runes
    item = convertRuneObject(item);
    runes[item.id] = item;
  }

  return runes;
}

var filteredProps = {
  bundle: true,
  usable: true
};
function convertRuneObject(object) {
  Object.keys(object).forEach(function convertProp(key) {
    if (filteredProps[key]) {
      delete object[key];
    } else {
      var value = object[key];
      if (typeof value === "object") {
        object[key] = convertRuneObject(value);
      } else {
        object[key] = convertedValue(key, value, {
          conversions: {
            attack: parseFloat,
            health: parseFloat,
            cost: parseFloat,
            rarity: parseFloat,
            x: parseFloat,
            c: parseFloat,
            mult: parseFloat,
            min_bonus: parseFloat
          }
        });
      }
    }
  });

  return object;
}
