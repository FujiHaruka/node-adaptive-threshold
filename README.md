# node-adaptive-threshold

Adaptive Threshold in JavaScript.

+ [Demo](https://fujiharuka.github.io/node-adaptive-threshold/demo.html)

## Install

```
$ npm install adaptive-threshold
```

## Usage

I made this as an [ndarray](https://github.com/scijs/ndarray) module. So, the pimplest usage is to use this with [get-pixels](https://github.com/scijs/get-pixels) and [save-pixels](https://github.com/scijs/save-pixels).

```js
const fs = require('fs')
const savePixels = require('save-pixels')
const getPixels = require('get-pixels')
const adaptiveThreshold = require('adaptive-threshold')

getPixels('src.png', (err, pixels) => {
  if (err) {
    console.error(err)
    return
  }
  let thresholded = adaptiveThreshold(pixels)
  savePixels(thresholded, 'png').pipe(fs.createWriteStream('dist.png'))
})
```
