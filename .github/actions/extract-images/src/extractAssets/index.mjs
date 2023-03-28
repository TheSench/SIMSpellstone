import { execFile } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';
import { pathFromRoot } from '../rootDir.mjs';
import { existsSync } from 'fs';

export function extractAssetsFromDownloads() {
    const downloadsDir = pathFromRoot('Downloads');
    readdirSync(downloadsDir)
        .filter(filename => filename.endsWith('.unity3d'))
        .forEach(fileName => extract(downloadsDir, fileName));
}

function extract(downloadsDir, fileName) {
    const filePath = join(downloadsDir, fileName);
    const extractedName = fileName.replace('.unity3d', '');

    if (!existsSync(join(downloadsDir, extractedName))) {
        console.log(`${fileName} -> ${extractedName}`);
        execFile(
            pathFromRoot('.venv', 'Scripts', 'python.exe'),
            [pathFromRoot('.github', 'actions', 'extract-images', 'disunity.py'), filePath],
            {
                cwd: downloadsDir,
            },
            (error, _stdout, stderr) => {
                if (error) {
                    throw new Error(stderr);
                }
            }
        );
    }
}
