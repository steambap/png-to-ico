# png-to-ico
> convert png to windows ico format

Based on jimp: An image processing library written entirely in JavaScript for Node, with zero external or native dependencies.  
In other words, this library is written purely in JavaScript, which is great for windows user.

## usage
```Javascript
const fs = require('fs');
const pngToIco = require('./');

pngToIco('test/electron.png')
	.then(buf => {
		fs.writeFileSync('test.ico', buf);
	})
	.catch(console.error);
```

## license
MIT
