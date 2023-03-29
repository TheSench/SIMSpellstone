import core from '@actions/core';
import { setRootDir } from './../../common/rootDir.mjs';
import { updateSpritesheets } from './spritesheet/index.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await updateSpritesheets();
} catch (error) {
  core.setFailed(error.message);
}