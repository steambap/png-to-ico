#!/usr/bin/env node
import minimist from "minimist";
import pkg from "../package.json" with { type: 'json' };
import pngToIco from "../index.js";

const argv = minimist(process.argv.slice(2));

process.title = pkg.name;

if (argv.version || argv.v) {
	showVersion();
}

if (argv.help || argv.h) {
	showHelp();
}

if (argv._.length === 0 && process.stdin.isTTY) {
	console.error("Please give me an png image of 256x256 pixels.");
	process.exit(1);
}

pngToIco(argv._[0]).then(buf => process.stdout.write(buf));

function showHelp() {
	console.log(`
  Usage:
    $ png-to-ico input > output

  Example:
    $ png-to-ico electron.png > electron.ico
`);
	process.exit(0);
}

function showVersion() {
	console.log("v" + pkg.version);
	process.exit(0);
}
