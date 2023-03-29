import core from '@actions/core';
import { resizeImages } from './resizeImages/index.mjs';
import { setRootDir } from './../../common/rootDir.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await resizeImages();
} catch (error) {
  core.setFailed(error.message);
}