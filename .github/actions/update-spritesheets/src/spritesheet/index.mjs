import { join } from 'path';
import { getRootDir } from '../../../common/rootDir.mjs';
import { createPortraitSheets, createSpriteSheets } from './createSheet.mjs';
import { loadImages } from './loadImages.mjs';
import { buildSpriteLookup } from './spriteLookup.mjs';

export async function updateSpritesheets() {
  const cardImagesPath = join(getRootDir(), './res/cardImages/');
  const spritePath = join(getRootDir(), './res/sprites/');

  const cssFilePath = join(getRootDir(), './styles/spritesheet.css');
  const spriteLookup = buildSpriteLookup(cssFilePath);

  const { imageFileNames, portraitFileNames } = await loadImages(cardImagesPath, spriteLookup);

  await createSpriteSheets(imageFileNames, spritePath, cssFilePath, spriteLookup);
  await createPortraitSheets(portraitFileNames, spritePath, cssFilePath, spriteLookup);
}

await updateSpritesheets();
