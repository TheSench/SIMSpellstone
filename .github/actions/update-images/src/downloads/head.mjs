'use strict';

import https from 'https';

export async function getModifiedDate(url = '') {
    return new Promise((resolve, reject) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            if (res.statusCode === 200) {
                resolve(new Date(res.headers['last-modified']));
            } else {
                reject(res.statusMessage);
            }
        }).on('error', (err) => {
            reject(err);
        }).end();
    });
}
