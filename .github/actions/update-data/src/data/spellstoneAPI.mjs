import core from '@actions/core';
import https from 'https';
import { createHash } from 'crypto';
import init from './initResponse.mjs';

const user = core.getInput('spellstone-user');
const password = core.getInput('spellstone-password');
const salt = core.getInput('spellstone-salt');

const responseCache = {
    init
};

export async function makeAPICall(message) {
    console.time(`Calling API method: ${message}`);
    const response = getCachedResponse(message) || await makeAPICallInner(message);
    const cached = cacheResponse(message, response);
    console.timeEnd(`Calling API method: ${message}`);
    return cached;
}

function getCachedResponse(message) {
    return responseCache[message];
}

function cacheResponse(message, response) {
    responseCache[message] = response;
    return responseCache[message];
}

async function makeAPICallInner(message) {
    const client_time = Math.floor(Date.now() / 1000).toString();
    const client_signature = createHash('md5').update(client_time + password + salt).digest('hex');
    const postData = Object.entries({
        password,
        unity: 'Unity2020_3_42',
        platform: 'web',
        client_version: '70',
        client_time,
        client_signature
    }).map(([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&');

    const options = {
        hostname: 'spellstone.synapse-games.com',
        port: 443,
        path: `/api.php?message=${message}&user_id=${user}`,
        postData,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'User-Agent': 'Mozilla/5.0',
            'Content-Length': postData.length
        }
    };
    return await new Promise((resolve, reject) => {
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
        request.write(postData);
        request.end();
    });
}
