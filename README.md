# png-to-ico

[![Build Status](https://github.com/steambap/png-to-ico/workflows/CI/badge.svg)](https://github.com/steambap/png-to-ico/actions?workflow=CI)

> convert png to windows ico format

## Translations
[中文](README_CN.md)

## intro
![image](assets/png-to-ico.gif)

## install
> npm install --save-dev png-to-ico

## usage
npm script:
```
png-to-ico electron.png > app.ico
```

npx script:
```
npx png-to-ico -- electron.png > app.ico
```
This way you can run the script without installing the package into your project

programming usage:
```JavaScript
import fs from 'fs';
import pngToIco from 'png-to-ico';

try {
  const buf = await pngToIco('electron.png');
  fs.writeFileSync('app.ico', buf);
} catch (error) {
  console.error(error);
}
```

If you want to control what sizes should be in the icon file, pass an array of files:
```JavaScript
const buf = await pngToIco(['electron16x16.png', 'electron32x32.png']);
fs.writeFileSync('app.ico', buf);
```

## Why use png-to-ico?
When I work on an electron project, it's always a nightmare to create ico for windows.  
There're so many options out there like apps that make icon for you, photoshop plugin. But none of them satisfy me.  
I want a JavaScript module that works like the .NET ico tool, which automatically generate different sizes for ico file.  

Based on [pngjs](https://github.com/lukeapage/pngjs):
Simple PNG encoder/decoder library written entirely in JavaScript for Node, with zero external or native dependencies.  
In other words, png-to-ico is written purely in JavaScript, which is great for windows user.  

## license
[MIT](LICENSE)
