import fs from 'fs';
import https from 'https';
import { pathFromRoot } from '../../../common/rootDir.mjs';
import path from 'path';

export async function downloadFile(assetName, url) {
    const filename = path.basename(assetName);
    const downloadLocation = pathFromRoot('Downloads', filename);
    const file = fs.createWriteStream(downloadLocation);
    return new Promise((resolve, reject) => {
        https.get(url, function (response) {
            response.pipe(file);
            file.on("finish", () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(downloadLocation, () => {
                reject(err);
            });
        });
    });
}
