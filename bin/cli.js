#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pngToIco = require('../');

const cli = meow(`
	Usage:
		$ png-to-ico input > output

	Example:
		$ png-to-ico electron.png > electron.ico
`);

if (cli.input.length === 0 && process.stdin.isTTY) {
	console.error('Please give me an png image of 256x256 pixels.');
	process.exit(1);
}

pngToIco(cli.input[0]).then(buf => process.stdout.write(buf));
