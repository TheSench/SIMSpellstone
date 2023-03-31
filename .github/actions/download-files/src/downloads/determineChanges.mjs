import fs from 'fs';
import https from 'https';
import querystring from 'querystring';
import { pathFromRoot } from '../../../common/rootDir.mjs';


export async function determineChanges(user_id, password) {
    const previousAssetBundles = loadOldAssetBundles();
    const assetBundlesPath = pathFromRoot('scripts', 'data', 'assetBundles.json');
    console.time('downloadFiles');
    const initData = await callApi({
        message: 'init',
        user_id,
        password,
    });
    const assetBundles = {};
    Object.values(initData.asset_bundles)
        .sort((a, b) => a.bundle_name.localeCompare(b.bundle_name))
        .forEach(({ bundle_name, version }) => {
            assetBundles[bundle_name] = version;
        });

    const data = JSON.stringify(assetBundles, null, '  ');
    fs.writeFileSync(assetBundlesPath, data, 'utf8');
    console.timeEnd('downloadFiles');
    return diffAssetBundles(previousAssetBundles, assetBundles);
}

function diffAssetBundles(previousAssetBundles, assetBundles) {
    const updates = [];
    Object.entries(assetBundles).forEach(([assetBundle, currentVersion]) => {
        const previousVersion = previousAssetBundles[assetBundle];
        if (previousVersion !== currentVersion) {
            updates.push(assetBundle);
        }
    });
    return updates;
}

function loadOldAssetBundles() {
    const assetBundlesPath = pathFromRoot('scripts', 'data', 'assetBundles.json');
    if (!fs.existsSync(assetBundlesPath)) {
        return {};
    }
    const assetBundlesJson = fs.readFileSync(assetBundlesPath, 'utf8');
    return JSON.parse(assetBundlesJson);
}

async function callApi(payload) {
    const postData = querystring.stringify(payload);

    const options = {
        hostname: 'spellstone.synapse-games.com',
        port: 443,
        path: `/api.php?${postData}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return new Promise((resolve, reject) => {
        const request = https.request(options, function (response) {
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', err => {
            reject(err);
        });
        request.on('error', error => {
            reject(error);
        });
        request.end();
    });
}
