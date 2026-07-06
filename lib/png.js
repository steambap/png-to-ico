import { promises as pfs } from "node:fs";
import { PNG } from "pngjs";
import Resize from "./resize.js";

const interpolationList = [
	"nearestNeighbor",
	"bilinearInterpolation",
	"bicubicInterpolation",
	"hermiteInterpolation",
	"bezierInterpolation"
];

async function readPNG(filepath) {
	let inputLabel = "Buffer input";

	try {
		let data;
		if (Buffer.isBuffer(filepath)) {
			data = filepath;
		} else {
			inputLabel = String(filepath);
			data = await pfs.readFile(filepath);
		}

		return PNG.sync.read(data);
	} catch (err) {
		throw new Error(`${inputLabel} is not a valid PNG file.`, { cause: err });
	}
}

function resize(src, width, height, interpolation = "bicubicInterpolation") {
	if (!interpolationList.includes(interpolation)) {
		throw new Error(
			`Unsupported interpolation "${String(interpolation)}". ` +
			`Expected one of: ${interpolationList.join(", ")}.`
		);
	}

	const result = createPNG(width, height);
	Resize[interpolation](src, result);
	return result;
}

function createPNG(width = 256, height = 256) {
	return new PNG({ width, height });
}

export { readPNG, resize };
