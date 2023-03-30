import { execFileSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { pathFromRoot } from '../../../common/rootDir.mjs';

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
        execFileSync(
            'python',
            [pathFromRoot('.github', 'actions', 'extract-assets', 'disunity.py'), filePath],
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
