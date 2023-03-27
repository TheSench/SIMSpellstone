import { join } from 'path';
import { getRootDir } from '../rootDir.mjs';
import { createPortraitSheets, createSpriteSheets } from './createSheet.mjs';
import { loadImages } from './loadImages.mjs';
import { buildSpriteLookup } from './spriteLookup.mjs';
import { writeSpritesheetHeader } from './writeSpritesheetHeader.mjs';

export async function createSpritesheets() {
  const cardImagesPath = join(getRootDir(), './res/cardImages/');
  const spritePath = join(getRootDir(), './res/sprites/');

  const cssFilePath = join(getRootDir(), './styles/spritesheet.css');
  const spriteLookup = buildSpriteLookup(cssFilePath);

  const { imageFileNames, portraitFileNames } = await loadImages(cardImagesPath, spriteLookup);

  writeSpritesheetHeader(cssFilePath);
  await createSpriteSheets(imageFileNames, spritePath, cssFilePath);
  await createPortraitSheets(portraitFileNames, spritePath, cssFilePath);
}

await createSpritesheets();
