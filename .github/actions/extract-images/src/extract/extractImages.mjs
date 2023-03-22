import { pathFromRoot } from "../rootDir.mjs";
import fs from 'fs';
import Jimp from 'jimp';


const cardImagePath = "res/cardImagesLarge/";

 
/**
 * @param {*} file 
 * @param {Sprite[]} sprites 
 */
export async function parseFile(file, sprites) {
	if (fs.existsSync(file)) {
		const srcImage = await Jimp.read(file);
		await extractImages(srcImage, sprites);
	} else {
		console.log(`${sprites.map(s => s.name).join('\n')} is missing`);
	}
}

/**
 * 
 * @param {String} assetName 
 * @param {String} filename 
 * @param {Jimp} srcImage 
 * @param {Sprite[]} sprites 
 */
async function extractImages(srcImage, sprites, overwrite = false) {
    let imageWidth = srcImage.bitmap.width;
    let imageHeight = srcImage.bitmap.height;
    for (let sprite of sprites) {
        let spriteName = sprite.name;
        if (sprite.type == CardType.Commander) {
            spriteName = "portrait_" + spriteName.toLowerCase().replace("portrait_", "").replace("portraits_", "");
        }
        let imageFormat = formats[sprite.type];
        let newFileName = `${spriteName}.${imageFormat}`;
        let saveLocation = pathFromRoot(cardImagePath, newFileName);

        if (overwrite || !fs.existsSync(saveLocation)) {
            try {
                let points = sprite.points;
                let xMin = Math.min(...points.map(p => p.getX(imageWidth)));
                let xMax = Math.max(...points.map(p => p.getX(imageWidth)));
                let yMin = Math.min(...points.map(p => p.getY(imageHeight)));
                let yMax = Math.max(...points.map(p => p.getY(imageHeight)));

                let width = xMax - xMin;
                let height = yMax - yMin;
                let newImage = srcImage.clone();
                newImage.crop(xMin, yMin, width, height);
                if (sprite.isFlipped) {
                    newImage.rotate(270);
                    newImage.flip(false, true);
                }
                await newImage.writeAsync(saveLocation);
                console.log(`Saved ${saveLocation}`);
            } catch (e) {
                console.error(e);
            }
        }
    }
}

function saveImage(canvas, saveLocation, imageFormat) {
    let format = (imageFormat == "png" ? 'image/png' : 'image/jpeg');
    const buffer = canvas.toBuffer(format);
    fs.writeFileSync(saveLocation, buffer);
}
