import core from '@actions/core';
import { setRootDir } from '../../common/rootDir.mjs';
import { updateData } from './data/updateData.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await updateData();
} catch (error) {
  core.setFailed(error.message);
}