import { join, basename } from 'path';
import { readdirSync, unlinkSync, existsSync } from 'fs';
import { pathFromRoot } from '../../../common/rootDir.mjs';
import Jimp from 'jimp';

export async function resizeImages() {
    const rawImagePath = pathFromRoot('res', 'cardImagesLarge');
    const resourcePath = pathFromRoot('res', 'cardImages');
    const files = readdirSync(rawImagePath);
    const assaultArt = [];
    const commanderArt = [];
    for (const file of files) {
        if (file.includes('portrait')) {
            commanderArt.push(join(rawImagePath, file));
        } else {
            assaultArt.push(join(rawImagePath, file));
        }
    }
    for (const fileName of commanderArt) {
        await resizePortrait(resourcePath, fileName, fileName, 84, 100);
    }
    for (const fileName of assaultArt) {
        const newFileName = fileName.replace('.png', '.jpg');
        if (newFileName !== fileName) {
            console.log('Changed format:', fileName);
            unlinkSync(fileName);
        } else {
            await resizeImage(resourcePath, fileName, fileName, 84, 120);
        }
    }
}

async function resizeImage(resourcePath, inputFile, outputFile, newWidth, newHeight) {
    const outputPath = join(resourcePath, basename(outputFile));
    if (!existsSync(outputPath)) {
        console.log('Sprite:', inputFile);
        const srcImage = await Jimp.read(inputFile);
        if (srcImage.bitmap.height !== newHeight || srcImage.bitmap.width !== newWidth) {
            await saveScaledImage(srcImage, outputPath, newWidth, newHeight, 0, 0, newWidth, newHeight);
        } else {
            await srcImage.writeAsync(outputPath);
        }
    }
}

async function resizePortrait(resourcePath, inputFile, outputFile, newWidth, newHeight) {
    const outputPath = join(resourcePath, basename(outputFile));
    const padding = 10;
    if (!existsSync(outputPath)) {
        console.log('Sprite:', inputFile);
        const srcImage = await Jimp.read(inputFile);
        if (srcImage.bitmap.height !== newHeight || srcImage.bitmap.width !== newWidth) {
            const paddedWidth = newWidth - 2 * padding;
            const paddedHeight = newHeight - 2 * padding;
            const srcWidth = srcImage.bitmap.width;
            const srcHeight = srcImage.bitmap.height;
            const scaleW = srcWidth / paddedWidth;
            const scaleH = srcHeight / paddedHeight;
            let scaledWidth = paddedWidth;
            let scaledHeight = paddedHeight;
            if (scaleW > scaleH) {
                scaledHeight = Math.round(srcHeight / scaleW);
            } else {
                scaledWidth = Math.round(srcWidth / scaleH);
            }
            const offsetX = (paddedWidth - scaledWidth) / 2 + padding;
            const offsetY = (paddedHeight - scaledHeight) / 2 + padding;
            await saveScaledImage(srcImage, outputPath, newWidth, newHeight, offsetX, offsetY, scaledWidth, scaledHeight);
        } else {
            await srcImage.writeAsync(outputPath);
        }
    }
}

async function saveScaledImage(srcImage, outputPath, newWidth, newHeight, offsetX, offsetY, scaledWidth, scaledHeight) {
    const newImage = new Jimp(newWidth, newHeight);
    newImage.composite(srcImage.clone().resize(scaledWidth, scaledHeight, Jimp.RESIZE_BICUBIC), offsetX, offsetY);
    await newImage.writeAsync(outputPath);
}
