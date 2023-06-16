import core from '@actions/core';
import { setRootDir } from '../../common/rootDir.mjs';
import { updateData } from './data/updateData.mjs';

// try {
  setRootDir(core.getInput('working-directory'));
  await updateData();
// } catch (error) {
//   console.error(error.message);
//   core.setFailed(error.message);
// }