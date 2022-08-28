const { promises: pfs } = require("fs");
const { PNG } = require("pngjs");
const Resize = require("./resize");

function readPNG(filepath) {
	return pfs
		.readFile(filepath)
		.then(data => {
			return PNG.sync.read(data);
		})
		.catch(err => {
			throw new Error(`${filepath} is not or a valid PNG file.`);
		})
}

function resize(src, width, height, interpolation = "bicubicInterpolation") {
	const result = createPNG(width, height);
	Resize[interpolation](src, result);
	return result;
}

function createPNG(width = 256, height = 256) {
	return new PNG({ width, height });
}

module.exports = {
	readPNG,
	resize
}
