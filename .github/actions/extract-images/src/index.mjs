import core from '@actions/core';
import { downloadFiles } from './downloads/index.mjs';
import { extractImagesFromDownloads } from './extract/index.mjs';
import { setRootDir } from './rootDir.mjs';
import { createSpritesheets } from './spritesheet/index.mjs';

try {
  const rootDir = core.getInput('working-directory');
  setRootDir(rootDir);
  await downloadFiles();
  await extractImagesFromDownloads();
  await createSpritesheets();
} catch (error) {
  core.setFailed(error.message);
}