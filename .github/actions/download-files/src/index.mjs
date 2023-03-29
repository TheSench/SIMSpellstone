import core from '@actions/core';
import { mkdirSync } from 'fs';
import { downloadFiles } from './downloads/index.mjs';
import { pathFromRoot, setRootDir } from '../../common/rootDir.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  mkdirSync(pathFromRoot('Downloads'), { recursive: true });
  await downloadFiles();
} catch (error) {
  core.setFailed(error.message);
}