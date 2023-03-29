import core from '@actions/core';
import { mkdirSync } from 'fs';
import { downloadFiles } from './downloads/index.mjs';
import { extractAssetsFromDownloads } from './extractAssets/index.mjs';
import { extractImagesFromAssets } from './extractImages/index.mjs';
import { resizeImages } from './resizeImages/index.mjs';
import { pathFromRoot, setRootDir } from './rootDir.mjs';
import { updateSpritesheets } from './spritesheet/index.mjs';

try {
  const rootDir = core.getInput('working-directory');
  setRootDir(rootDir);
  mkdirSync(pathFromRoot('Downloads'), { recursive: true });
  await downloadFiles();
  await extractAssetsFromDownloads();
  await extractImagesFromAssets();
  await resizeImages();
  await updateSpritesheets();
} catch (error) {
  core.setFailed(error.message);
}