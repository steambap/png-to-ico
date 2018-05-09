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

  it("should throw with jpeg image", done => {
    pngToIco("test/jpeg.jpg").catch(() => done());
  });

  it("should throw with invalid buffer", done => {
    pngToIco(Buffer.from([0x62, 0x75])).catch(() => done());
  });
});
