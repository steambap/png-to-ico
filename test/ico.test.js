const fs = require("fs");
const pngToIco = require("../");

test("should work with transparency", () => {
	return pngToIco("test/electron.png");
});

test("should throw when the input image is not square", (done) => {
	pngToIco("test/150x50.png").catch(() => done());
});

test("should work with sizes other than 256x256", () => {
	return pngToIco("test/512x512.png");
});

test("should have the same buffer", (done) => {
	pngToIco("test/512x512.png").then((buf) => {
		const icoBuf = fs.readFileSync("test/test.ico");
		if (icoBuf.equals(buf)) {
			done();
		} else {
			done(new Error("buffs are not equal"));
		}
	});
});

test("should throw with jpeg image", (done) => {
	pngToIco("test/jpeg.jpg").catch(() => done());
});

test("should work with list of images", () => {
	return pngToIco(["test/electron.png"]);
});
