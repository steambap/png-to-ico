import fs from "fs";
import { test } from "node:test";
import assert from "node:assert";
import pngToIco from "../index.js";

test("should work with transparency", async () => {
	await pngToIco("test/electron.png");
});

test("should throw when the input image is not square", async () => {
	await assert.rejects(pngToIco("test/150x50.png"));
});

test("should work with sizes other than 256x256", async () => {
	await pngToIco("test/512x512.png");
});

test("should work with buffer", async () => {
	const buf = fs.readFileSync("test/512x512.png");
	await pngToIco(buf);
});

test("should have the same buffer", async () => {
	const buf = await pngToIco("test/512x512.png");
	const icoBuf = fs.readFileSync("test/test.ico");
	assert.ok(icoBuf.equals(buf), "buffs are not equal");
});

test("should throw with jpeg image", async () => {
	await assert.rejects(pngToIco("test/jpeg.jpg"));
});

test("should work with list of images", async () => {
	await pngToIco(["test/electron.png"]);
});

test("should work with interpolation", async () => {
	await pngToIco("test/512x512.png", { interpolation: "nearestNeighbor" });
});
