'use strict';

const pngToIco = require('../');

describe('should generate image', function () {
	it('should work with transparency', function () {
		return pngToIco('test/electron.png');
	});

	it('should throw when the input image is not square', function (done) {
		pngToIco('test/150x50.png').catch(() => done());
	});

	it('should work with sizes other than 256x256', function () {
		return pngToIco('test/512x512.png');
	});
});
