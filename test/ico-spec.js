const fs = require("fs");
const pngToIco = require("../");

describe("should generate image", () => {
	it("should work with transparency", () => {
		return pngToIco("test/electron.png");
	});

	it("should throw when the input image is not square", done => {
		pngToIco("test/150x50.png").catch(() => done());
	});

	it("should work with sizes other than 256x256", () => {
		return pngToIco("test/512x512.png");
	});

	it("should have the same buffer", done => {
		pngToIco("test/512x512.png").then(buf => {
			const icoBuf = fs.readFileSync("test/test.ico");
			if (icoBuf.equals(buf)) {
				done();
			} else {
				done(new Error("buffs are not equal"));
			}
		});
	});

	it("should throw with jpeg image", done => {
		pngToIco("test/jpeg.jpg").catch(() => done());
	});

	it("should work with list of images", () => {
		return pngToIco(["test/electron.png"]);
	});
});
