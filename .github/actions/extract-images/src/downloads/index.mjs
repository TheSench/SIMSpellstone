import fs from 'fs';
import { downloadFile } from './download.mjs';
import { fileTypes } from './fileTypes.mjs';
import { getUrl } from './getUrl.mjs';
import { getModifiedDate } from './head.mjs';
import { pathFromRoot } from './rootDir.mjs';

export async function downloadFiles() {
    var filesChecked = {};
    var pattern = /{(\d+)}/
    for (const fileType of fileTypes) {
        var digitMatch = pattern.exec(fileType);
        if (digitMatch) {
            var numDigits = parseInt(digitMatch[1]);
            for (let i = 1; ; i++) {
                if (i >= Math.pow(10, numDigits)) break;
                var iPadded = i.toString().padStart(numDigits, '0');
                var fileName = fileType.replace(`{${numDigits}}`, iPadded);
                const url = getUrl(fileName);
                if (filesChecked[fileName]) break;
                if (!await setFileDate(filesChecked, fileName, url)) {
                    break;
                }
                if (!downloadFile(fileName, url)) break;
            }
        } else {
            var fileName = fileType;
            if (filesChecked[fileName]) break;
            await setFileDate(filesChecked, fileName);
        }
    }

    const newData = JSON.stringify(filesChecked, null, '  ');
    fs.writeFileSync(pathFromRoot('.github/actions/extract-images/fileTimes.json'), newData, 'utf8');
}

async function setFileDate(filesChecked, fileName, url) {
    try {
        filesChecked[fileName] = await getModifiedDate(url);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}