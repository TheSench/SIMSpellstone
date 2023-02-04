'use strict';

import https from 'https';

async function head(url = '') {
    return new Promise((resolve, reject) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            resolve(new Date(res.headers['last-modified']));
        }).on('error', (err) => {
            reject(err);
        }).end();
    });
}

var url = 'https://d3splaxnu2bep2.cloudfront.net/spellstone/asset_bundles_live/2020_3_33f1/cardpack_002_unity2020_3_33_webgl.unity3d';

var resp = await head(url);

console.log(resp);