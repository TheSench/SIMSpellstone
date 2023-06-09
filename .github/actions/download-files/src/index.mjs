import core from '@actions/core';
import { mkdirSync } from 'fs';
import { downloadFiles } from './downloads/index.mjs';
import { pathFromRoot, setRootDir } from '../../common/rootDir.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  const user = core.getInput('spellstone-user');
  const password = core.getInput('spellstone-password');
  const salt = core.getInput('spellstone-salt');
  mkdirSync(pathFromRoot('Downloads'), { recursive: true });
  await downloadFiles(user, password, salt);
} catch (error) {
  core.setFailed(error.message);
}