import fs from 'fs';
import path from 'path';
import { pathFromRoot } from '../rootDir.mjs';
import { CardType } from './cardType.mjs';
import { parseFile } from './extractImages.mjs';
import { Sprite } from './sprite.mjs';

const overrides = {
	"AprilFools_003Collection.png": CardType.Commander
};

export async function extractImagesFromAssets() {
	const folder = pathFromRoot("Downloads");
	const dirs = fs.readdirSync(folder, { withFileTypes: true }).filter(child => child.isDirectory());
	for (const dir of dirs) {
		const assetName = dir.name;
		let type = CardType.Assault;
		if (assetName.startsWith("cardpack")) {
			type = CardType.Assault;
		} else if (assetName.startsWith("portraitpack")) {
			type = CardType.Commander;
		} else {
			continue;
		}
		console.log(`Extracting images from ${dir.name}`)

		let assetFolder = path.join(folder, assetName);
		const files = fs.readdirSync(assetFolder, { withFileTypes: true })
			.filter(child => child.isFile() && path.extname(child.name) === '.json');
		for (const file of files) {
			const jsonStr = fs.readFileSync(path.join(assetFolder, file.name), 'utf8');
			const json = JSON.parse(jsonStr);
			let imageName = "";
			if (json.hasOwnProperty("spriteCollectionName")) {
				imageName = (json["spriteCollectionName"] + ".png");
			}
			if (imageName.toLowerCase().includes("portrait")) {
				type = CardType.Commander;
			}
			type = overrides[imageName] ?? type;

			if (!imageName.trim() || shouldSkip(imageName, type)) {
				console.log(`Skipping ${file.name}`);
				fs.unlinkSync(path.join(assetFolder, file.name));
			} else {
				const imageFile = path.join(assetFolder, imageName);
				const sprites = json.spriteDefinitions
					.filter(spriteDefinition => spriteDefinition.name.trim())
					.map(spriteDefinition => new Sprite(spriteDefinition, type));
				await parseFile(imageFile, sprites);
			}
		}
	}
}

function shouldSkip(imageName, type) {
	return (type == CardType.Assault &&
		!imageName.includes("Set") &&
		!imageName.includes("@1x"));
}
