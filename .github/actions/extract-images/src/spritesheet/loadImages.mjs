import { readdirSync, statSync } from 'fs';
import path from 'path';

export async function loadImages(cardImagesPath, spriteLookup) {
    const files = readdirSync(cardImagesPath)
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
                return statSync(fileA).ctimeMs - statSync(fileB).ctimeMs;
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

    return {
        imageFileNames,
        portraitFileNames,
    };
}
