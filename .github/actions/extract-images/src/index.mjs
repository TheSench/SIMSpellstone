import core from '@actions/core';
import { extractImagesFromAssets } from './extractImages/index.mjs';
import { setRootDir } from '../../common/rootDir.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await extractImagesFromAssets();
} catch (error) {
  core.setFailed(error.message);
}