import { readFileSync } from 'fs';

export function buildSpriteLookup(cssFilePath) {
    const existingSprites = readFileSync(cssFilePath, 'utf-8')
        .split('\n')
        .filter(line => line.startsWith('.sprite-') || line.startsWith('.portrait-'))
        .map(line => line.substring(0, line.indexOf('{')).replace('.sprite-', '').replace('.portrait-', '').trim());

    const spriteLookup = {};
    for (let i = 0; i < existingSprites.length; i++) {
        spriteLookup[existingSprites[i]] = i;
    }
    return spriteLookup;
}
