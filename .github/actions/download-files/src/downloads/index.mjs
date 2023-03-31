import { determineChanges } from './determineChanges.mjs';
import { downloadFile } from './download.mjs';
import { fileTypes } from './fileTypes.mjs';
import { getUrl } from './getUrl.mjs';

export async function downloadFiles(user, password) {
    const changes = await determineChanges(user, password);
    for (const fileType of fileTypes) {
        console.log(`Checking ${fileType}...`);
        for (const fileName of changes.filter(fileName => fileName.startsWith(fileType))) {
            console.log(`Downloading ${fileName}...`);
            if (!await tryDownloadFile(fileName)) break;
        };
    }
}

async function tryDownloadFile(fileName) {
    const url = getUrl(fileName);
    return await downloadFile(fileName, url).then(
        () => true,
        () => false,
    );
}
