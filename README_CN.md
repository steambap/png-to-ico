# png-to-ico

[![Build Status](https://github.com/steambap/png-to-ico/workflows/CI/badge.svg)](https://github.com/steambap/png-to-ico/actions?workflow=CI)

> png 转 ico 格式

## 简介
![image](assets/png-to-ico.gif)

## 安装
> npm install --save-dev png-to-ico

## 使用方法
在 npm script 脚本中使用:
```
png-to-ico electron.png > app.ico
```

在 node.js 程序中使用:
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

如果你想要自己定义icon文件中每个BMP文件的大小, 那么参数可以直接传数组:
```JavaScript
try {
  const buf = await pngToIco(['electron16x16.png', 'electron32x32.png']);
  fs.writeFileSync('app.ico', buf);
} catch (error) {
  console.error(error);
}
```

## 为什么使用 png-to-ico?
给基于 electron 的程序生成图标没有什么好用的工具，大多数工具只给你转一种大小的图标。  
这样就会经常出现大图标模糊或者 electron 程序运行时左上角的图标还是默认的无图标的情况。
我想拥有一个像 visual studio 里面给 .NET 程序打包工具那样会自动生成各种大小的图标工具，而且必须是 JS 的。  
所以就有了基于 [pngjs](https://github.com/lukeapage/pngjs) 这个没有 c++ 模块依赖的 JS 图形处理库编写的 png-to-ico，这样作为 windows 用户的我再也不用和 c++ 模块做斗争了。

## license
[MIT](LICENSE)
