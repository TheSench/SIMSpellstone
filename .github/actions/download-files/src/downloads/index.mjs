import { determineChanges } from './determineChanges.mjs';
import { downloadFile } from './download.mjs';
import { fileTypes } from './fileTypes.mjs';
import { getUrl } from './getUrl.mjs';

export async function downloadFiles(user, password, salt) {
    const changes = await determineChanges(user, password, salt);
    const filesToDowassetsToDownloadload = fileTypes.flatMap(fileType =>
        changes.filter(assetName => assetName.includes(`/${fileType}`))
    );
    return await downloadUpdatedFiles(filesToDowassetsToDownloadload);
}

async function downloadUpdatedFiles(assetsToDownload) {
    let i = 0;
    function downloadNextFile() {
        if (i >= assetsToDownload.length) {
            return;
        }
        const assetName = assetsToDownload[i];
        console.log(`Downloading ${assetName}...`);
        return tryDownloadFile(assetName).then(
            () => {
                i++;
                downloadNextFile();
            },
            error => {
                console.log(`Failed to download ${assetName}: ${error}`);
            },
        );
    }
    const workers = Math.max(4, assetsToDownload.length);
    await Promise.all(Array(workers).fill(0).map(downloadNextFile));
}

async function tryDownloadFile(assetName) {
    const url = getUrl(assetName);
    return await downloadFile(assetName, url).then(
        () => true,
        () => false,
    );
}
