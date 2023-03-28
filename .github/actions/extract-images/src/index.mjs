import core from '@actions/core';
import { downloadFiles } from './downloads/index.mjs';
import { extractAssetsFromDownloads } from './extractAssets/index.mjs';
import { extractImagesFromAssets } from './extractImages/index.mjs';
import { setRootDir } from './rootDir.mjs';
import { updateSpritesheets } from './spritesheet/index.mjs';

try {
  const rootDir = core.getInput('working-directory');
  setRootDir(rootDir);
  await downloadFiles();
  await extractAssetsFromDownloads();
  await extractImagesFromAssets();
  await updateSpritesheets();
} catch (error) {
  core.setFailed(error.message);
}