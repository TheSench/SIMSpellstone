import { makeAPICall } from "./spellstoneAPI.mjs";
import { stableStringify } from "./stableStringify.mjs";

export async function getAssets() {
    var asset_bundles = await makeAPICall("getMapExpansionData").asset_bundles;
    var assetBundles = {};
    for (var key in asset_bundles) {
      var fileName = key.replace("_Unity4_6_3_Android", "")
      assetBundles[fileName] = {
        version: assetBundles.version,
        fileName: fileName
      };
    }
    var jsFile = stableStringify(assetBundles, null, '\t')
    return jsFile;
  }
  