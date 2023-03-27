import { appendFileSync, renameSync } from 'fs';
import Jimp from 'jimp';
import { parse, join } from 'path';

export async function createSpriteSheets(imageFileNames, spritePath, cssFilePath) {
    await createSheet(imageFileNames, spritePath, cssFilePath, {
        sheetType: 'SpriteSheet',
        cssClassPrefix: 'sprite',
        addImage: addImage,
        width: 120,
        writeAsPng: false,
    });
}

export async function createPortraitSheets(imageFileNames, spritePath, cssFilePath) {
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
            let imageName = parse(fileName).name;
            const cssClass = `.${cssClassPrefix}-${imageName}`;
            const cssStyle = `background-position: -${x}px -${y}px; ${backgroundImage}`;
            appendFileSync(cssFilePath, `${cssClass} { ${cssStyle} }\n`);
            await addImage(fileName, spriteSheet, x, y);
        }
        const sheetFile = join(spritePath, sheetName);
        if (writeAsPng) {
            // Write PNG, then rename to JPG to avoid Jimp bug and maintain backwards compatibility with existing spritesheets
            const tempFile = sheetFile.replace('.jpg', '.png');
            await spriteSheet.writeAsync(tempFile);
            renameSync(tempFile, sheetFile);
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
