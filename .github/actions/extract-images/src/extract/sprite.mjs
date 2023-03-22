export class Sprite {
	constructor(spriteDefinition, type) {
		this.name = spriteDefinition.name;
		this.points = getVectors(spriteDefinition);
		this.isFlipped = spriteDefinition.flipped;
		this.type = type;
	}
}

function getVectors(sprite) {
	return sprite["uvs"].map(uv => new Point(
		uv["x"],
		uv["y"]
	))
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
}

function roundAwayFromZero(num) {
	return num < 0 ? Math.ceil(num - .5) : Math.floor(num + .5);
}