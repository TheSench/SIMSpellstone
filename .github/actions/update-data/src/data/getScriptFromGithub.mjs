import { readFileSync } from 'fs';
import { join } from 'path';
import { getRootDir } from '../../../common/rootDir.mjs';

const scriptDir = join(getRootDir(), './scripts/data/');

export function getScriptFromGithub(scriptName) {
    const scriptPath = join(scriptDir, scriptName);
    return readFileSync(scriptPath);
}
