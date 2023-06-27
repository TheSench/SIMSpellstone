import core from '@actions/core';
import { setRootDir } from '../../common/rootDir.mjs';
import { updateData, getXmlChanges } from './data/updateData.mjs';

try {
  setRootDir(core.getInput('working-directory'));
  await updateData();
  await getXmlChanges();
} catch (error) {
  console.error(error.message);
  core.setFailed(error.message);
}