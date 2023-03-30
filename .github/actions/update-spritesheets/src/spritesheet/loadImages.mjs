import { readdirSync, statSync } from 'fs';
import { join, parse, basename } from 'path';

export async function loadImages(cardImagesPath, spriteLookup) {
    const files = readdirSync(cardImagesPath)
        .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
        .map(file => join(cardImagesPath, file))
        .sort((fileA, fileB) => {
            const nameA = parse(fileA).name;
            const nameB = parse(fileB).name;
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
        const filename = basename(file)
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
