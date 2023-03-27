import fs from 'fs';
import { pathFromRoot } from '../rootDir.mjs';
import { downloadFile } from './download.mjs';
import { fileTypes } from './fileTypes.mjs';
import { getUrl } from './getUrl.mjs';
import { getModifiedDate } from './head.mjs';

export async function downloadFiles() {
    const fileTimesPath = pathFromRoot('.github/actions/extract-images/src/downloads/fileTimes.json');
    const fileTimesJson = fs.readFileSync(fileTimesPath, 'utf8');
    var filesChecked = JSON.parse(fileTimesJson);
    var pattern = /{(\d+)}/
    for (const fileType of fileTypes) {
        console.log(`Checking ${fileType}...`);
        var digitMatch = pattern.exec(fileType);
        if (digitMatch) {
            var numDigits = parseInt(digitMatch[1]);
            for (let i = 1; ; i++) {
                if (i >= Math.pow(10, numDigits)) break;
                var iPadded = i.toString().padStart(numDigits, '0');
                var fileName = fileType.replace(`{${numDigits}}`, iPadded);
                if (!await tryDownloadFile(filesChecked, fileName)) break;
            }
        } else {
            var fileName = fileType;
            if (!await tryDownloadFile(filesChecked, fileName)) break;
        }
    }

    const newData = JSON.stringify(filesChecked, null, '  ');
    fs.writeFileSync(fileTimesPath, newData, 'utf8');
}

async function tryDownloadFile(filesChecked, fileName) {
    const url = getUrl(fileName);
    const lastUpdated = await getLastUpdated(url);
    if (!lastUpdated) return false;
    const previousUpdate = filesChecked[fileName] && new Date(Date.parse(filesChecked[fileName]));
    if (previousUpdate && previousUpdate >= lastUpdated) return true;
    filesChecked[fileName] = lastUpdated;
    return downloadFile(fileName, url);
}

async function getLastUpdated(url) {
    try {
        return await getModifiedDate(url);
    } catch (error) {
        console.error(error, url);
        return null;
    }
}

await downloadFiles();
