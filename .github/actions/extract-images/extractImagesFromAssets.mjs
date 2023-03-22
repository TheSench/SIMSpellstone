import path from 'path';
import fs from 'fs';
import Jimp from 'jimp';

const root = path.resolve("../../..")

const folder = path.join(root, "Downloads");
const cardImagePath = path.join(root, "res/cardImagesLarge/");
const overwrite = true;


const CardType = {
	Commander: "Commander",
	Assault: "Assault",
	Item: "Item",
	Store: "Store",
};
const Corner = {
	TopRight: 0,
	TopLeft: 1,
	BottomRight: 2,
	BottomLeft: 3
}
const formats = {
	Commander: "png",
	Assault: "jpg",
};
const overrides = {
	"AprilFools_003Collection.png": CardType.Commander
};

async function main() {
	const dirs = fs.readdirSync(folder, { withFileTypes: true });
	for (const dir of dirs) {
		if (!dir.isDirectory()) continue;
		const assetName = dir.name;
		let type = CardType.Assault;
		if (assetName.startsWith("cardpack")) {
			type = CardType.Assault;
		} else if (assetName.startsWith("portraitpack")) {
			type = CardType.Commander;
		} else {
			continue;
		}

		let assetFolder = path.join(folder, assetName);
		const files = fs.readdirSync(assetFolder, { withFileTypes: true });
		for (const file of files) {
			if (!file.isFile() || path.extname(file.name) !== '.json') continue;
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
					.filter(sprite => sprite.name.trim())
					.map(sprite => new Sprite(sprite.name, getVectors(sprite), sprite.flipped, type));
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

// Define other methods and classes here

class Sprite {
	constructor(name, points, isFlipped, type) {
		this.Name = name;
		this.Points = points;
		this.IsFlipped = isFlipped;
		this.Type = type;
	}

	toString() {
		const pointOutput = this.Points.map(p => p.toString()).join('\n');
		return `${this.Name}:\n${pointOutput}`;
	}
}

class Point {
	constructor(x, y) {
		this.X = x;
		this.Y = y;
	}

	getX(size) {
		return roundAwayFromZero(this.X * size);
	}

	getY(size) {
		return size - roundAwayFromZero(this.Y * size);
	}

	toString() {
		return `(${this.X}, ${this.Y})`;
	}
}

function roundAwayFromZero(num) {
	return num < 0 ? Math.ceil(num - .5) : Math.floor(num + .5);
}

/**
 * @param {*} file 
 * @param {Sprite[]} sprites 
 */
async function parseFile(file, sprites) {
	if (fs.existsSync(file)) {
		const srcImage = await Jimp.read(file);
		await extractImages(srcImage, sprites);
	} else {
		console.log(`${sprites.map(s => s.Name).join('\n')} is missing`);
	}
}

/**
 * 
 * @param {String} assetName 
 * @param {String} filename 
 * @param {*} srcImage 
 * @param {Sprite[]} sprites 
 */
async function extractImages(srcImage, sprites) {
	let imageWidth = srcImage.bitmap.width;
	let imageHeight = srcImage.bitmap.height;
	for(let sprite of sprites) {
		let spriteName = sprite.Name;
		if (sprite.Type == CardType.Commander) {
			spriteName = "portrait_" + spriteName.toLowerCase().replace("portrait_", "").replace("portraits_", "");
		}
		let imageFormat = formats[sprite.Type];
        let newFileName = `${spriteName}.${imageFormat}`;
		let saveLocation = path.join(cardImagePath, newFileName);

		if (overwrite || !fs.existsSync(saveLocation)) {
			try {
				let points = sprite.Points;
				let xMin = Math.min(...points.map(p => p.getX(imageWidth)));
				let xMax = Math.max(...points.map(p => p.getX(imageWidth)));
				let yMin = Math.min(...points.map(p => p.getY(imageHeight)));
				let yMax = Math.max(...points.map(p => p.getY(imageHeight)));

				let width = xMax - xMin;
				let height = yMax - yMin;
				let newImage = srcImage.clone();
				newImage.crop(xMin, yMin, width, height);
				if (sprite.IsFlipped) {
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
	console.log(saveLocation);
	const buffer = canvas.toBuffer(format);
	fs.writeFileSync(saveLocation, buffer);
}

function getVectors(sprite) {
	return sprite["uvs"].map(uv => new Point(
		uv["x"],
		uv["y"]
	))
}

await main();
