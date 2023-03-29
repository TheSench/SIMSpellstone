import core from '@actions/core';
import { setRootDir } from '../../common/rootDir.mjs';
import { extractAssetsFromDownloads } from './extractAssets/index.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await extractAssetsFromDownloads();
} catch (error) {
  core.setFailed(error.message);
}