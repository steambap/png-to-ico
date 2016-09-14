'use strict';

const pngToIco = require('../');

describe('should generate image', function () {
	it('should work with transparency', function () {
		return pngToIco('test/electron.png');
	});
});
