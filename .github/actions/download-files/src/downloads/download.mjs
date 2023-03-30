import fs from 'fs';
import https from 'https';
import { pathFromRoot } from '../../../common/rootDir.mjs';

export async function downloadFile(filename, url) {
    const downloadLocation = pathFromRoot('Downloads', `${filename}.unity3d`);
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
