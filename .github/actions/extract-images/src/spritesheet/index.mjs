import path from 'path';
import fs from 'fs';
import Jimp from 'jimp';
import { getRootDir, setRootDir } from '../rootDir.mjs';

await main();

async function main() {
  const cardImagesPath = path.join(getRootDir(), './res/cardImages/');
  const spritePath = path.join(getRootDir(), './res/sprites/');

  const cssFilePath = path.join(getRootDir(), './styles/spritesheet.css');
  const existingSprites = fs.readFileSync(cssFilePath, 'utf-8')
    .split('\n')
    .filter(line => line.startsWith('.sprite-') || line.startsWith('.portrait-'))
    .map(line => line.substring(0, line.indexOf('{')).replace('.sprite-', '').replace('.portrait-', '').trim());

  const spriteLookup = {};
  for (let i = 0; i < existingSprites.length; i++) {
    spriteLookup[existingSprites[i]] = i;
  }

  const files = fs.readdirSync(cardImagesPath)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
    .map(file => path.join(cardImagesPath, file))
    .sort((fileA, fileB) => {
      const nameA = path.basename(fileA, path.extname(fileA));
      const nameB = path.basename(fileB, path.extname(fileB));
      const indexA = spriteLookup[nameA] ?? Number.MAX_SAFE_INTEGER;
      const indexB = spriteLookup[nameB] ?? Number.MAX_SAFE_INTEGER;
      if (indexA !== indexB) {
        return indexA - indexB;
      } else {
        return fs.statSync(fileA).ctimeMs - fs.statSync(fileB).ctimeMs;
      }
    });

  const imageFileNames = [];
  const portraitFileNames = [];
  for (const file of files) {
    const filename = path.basename(file)
    if (filename.startsWith("SpriteSheet") || filename.startsWith("PortraitSheet")) {
      continue;
    } else if (filename.startsWith("portrait_")) {
      portraitFileNames.push(file);
    } else {
      imageFileNames.push(file);
    }
  }
  writeSpritesheetHeader(cssFilePath);
  await createSpriteSheets(imageFileNames, spritePath, cssFilePath);
  await createPortraitSheets(portraitFileNames, spritePath, cssFilePath);
}

function writeSpritesheetHeader(cssFile) {
  fs.writeFileSync(
    cssFile,
`.sprite {
    position: absolute;
    background-repeat: no-repeat;
    display: block;
    width: 84px;
    height: 120px;
}
.portrait {
    position: absolute;
    background-repeat: no-repeat;
    background-color: white;
    display: block;
    width: 84px;
    height: 100px;
}\n`
  );
}

async function createSpriteSheets(imageFileNames, spritePath, cssFilePath) {
  await createSheet(imageFileNames, spritePath, cssFilePath, {
    sheetType: 'SpriteSheet',
    cssClassPrefix: 'sprite',
    addImage: addImage,
    width: 120,
    writeAsPng: false,
  });
}

async function createPortraitSheets(imageFileNames, spritePath, cssFilePath) {
  await createSheet(imageFileNames, spritePath, cssFilePath, {
    sheetType: 'PortraitSheet',
    cssClassPrefix: 'portrait',
    addImage: addPortrait,
    width: 100,
    writeAsPng: true,
  });
}

async function createSheet(imageFileNames, spritePath, cssFilePath, { sheetType, cssClassPrefix, addImage, width, writeAsPng }) {
  let offset = 0;
  let sheetIndex = 1;
  let images = imageFileNames.length;
  let dimensions = 10;
  while (offset < images) {
    let height = Math.ceil((images - offset) / dimensions);
    if (images % dimensions > 0) height++;
    if (height > dimensions) height = dimensions;
    const sheetName = `${sheetType}${sheetIndex}.jpg`;
    const backgroundImage = `background-image: url('../dist/sprites/${sheetName}');`;
    const spriteSheet = new Jimp(84 * dimensions, width * height, 0x0);

    const end = Math.min(dimensions * dimensions, images - offset);
    let i = 0;
    for (; i < end; i++) {
      let fileName = imageFileNames[i + offset];
      let x = 84 * (i % dimensions);
      let y = width * Math.floor(i / dimensions);
      let imageName = path.parse(fileName).name;
      const cssClass = `.${cssClassPrefix}-${imageName}`;
      const cssStyle = `background-position: -${x}px -${y}px; ${backgroundImage}`;
      fs.appendFileSync(cssFilePath, `${cssClass} { ${cssStyle} }\n`);
      await addImage(fileName, spriteSheet, x, y);
    }
    const sheetFile = path.join(spritePath, sheetName);
    if (writeAsPng) {
      // Write PNG, then rename to JPG to avoid Jimp bug and maintain backwards compatibility with existing spritesheets
      const tempFile = sheetFile.replace('.jpg', '.png');
      await spriteSheet.writeAsync(tempFile);
      fs.renameSync(tempFile, sheetFile);
    } else {
      await spriteSheet.writeAsync(sheetFile);
    }
    offset += i;
    sheetIndex++;
  }
}

async function addImage(inputFile, spriteSheet, x, y) {
  const srcImage = (await Jimp.read(inputFile)).clone();
  srcImage.quality(100);
  srcImage.resize(84, 120);
  spriteSheet.composite(srcImage, x, y);
}

async function addPortrait(inputFile, spriteSheet, x, y) {
  const srcImage = (await Jimp.read(inputFile)).clone();
  srcImage.quality(100);
  srcImage.resize(84, 100);
  spriteSheet.composite(srcImage, x, y);
}