import { promises as pfs } from "node:fs";
import { PNG } from "pngjs";
import Resize from "./resize.js";

async function readPNG(filepath) {
	try {
		let data;
		if (Buffer.isBuffer(filepath)) {
			data = filepath;
		} else {
			data = await pfs.readFile(filepath);
		}

		return PNG.sync.read(data);
	} catch (err) {
		throw new Error(`${filepath} is not or a valid PNG file.`);
	}
}

function resize(src, width, height, interpolation = "bicubicInterpolation") {
	const result = createPNG(width, height);
	Resize[interpolation](src, result);
	return result;
}

function createPNG(width = 256, height = 256) {
	return new PNG({ width, height });
}

export { readPNG, resize };
