import { determineChanges } from './determineChanges.mjs';
import { downloadFile } from './download.mjs';
import { fileTypes } from './fileTypes.mjs';
import { getUrl } from './getUrl.mjs';

export async function downloadFiles(user, password) {
    const changes = await determineChanges(user, password);
    const filesToDownload = fileTypes.flatMap(fileType =>
        changes.filter(fileName => fileName.startsWith(fileType))
    );
    return await downloadUpdatedFiles(filesToDownload);
}

async function downloadUpdatedFiles(filesToDownload) {
    let i = 0;
    function downloadNextFile() {
        if (i >= filesToDownload.length) {
            return;
        }
        const fileName = filesToDownload[i];
        console.log(`Downloading ${fileName}...`);
        return tryDownloadFile(fileName).then(
            () => {
                i++;
                downloadNextFile();
            },
            error => {
                console.log(`Failed to download ${fileName}: ${error}`);
            },
        );
    }
    const workers = Math.max(4, filesToDownload.length);
    await Promise.all(Array(workers).fill(0).map(downloadNextFile));
}

async function tryDownloadFile(fileName) {
    const url = getUrl(fileName);
    return await downloadFile(fileName, url).then(
        () => true,
        () => false,
    );
}
