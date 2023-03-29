const baseURL = "https://d3splaxnu2bep2.cloudfront.net/spellstone/asset_bundles/2020_3_42f1/";

const fileVersion = "_unity2020_3_42_webgl.unity3d";

export function getUrl(fileName) {
    return (baseURL + fileName + fileVersion);
}