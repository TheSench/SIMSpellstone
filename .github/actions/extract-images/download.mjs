import https from 'https';
import fs from 'fs';

export async function downloadFile(filename, url) {
    const downloadLocation = `Downloads\${filename}`;
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
