+++
title = "How to make a desktop app with html/css/js"
date = 2021-08-16

[taxonomies]
tags = []
categories = ["Programming"]
+++

> Requirements:
> - [NodeJS](https://nodejs.org/en/).

First, init a node project: `npm init -y` on the folder you want the project to be in.

Then, install electronjs (recomended use of yarn):

```powershell
yarn add -D electron@latest
```

We'll also add scripts in `package.json`;

```json
"scripts": {
	"start": "electron ."
}
```

And some sample code:

`src/main.js`
```js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	
	mainWindow.loadFile(path.join(__dirname, 'index.html'));
}
	
app.whenReady().then(createWindow);

app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
```

`src/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Notes app</title>
</head>
<body>
	Hello world!
</body>
</html>
```

Now, we'll run the app with `yarn start`

It would open a new window with "Hello world" on it.

For more info see [electron webpage](https://www.electronjs.org/)
