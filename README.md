# node-adaptive-threshold

Adaptive Threshold in JavaScript. Both in Node.js and browser.

+ [Demo](https://fujiharuka.github.io/node-adaptive-threshold/demo.html)

## Install

```
$ npm install adaptive-threshold
```

## Usage

I made it as an [ndarray](https://github.com/scijs/ndarray) module. So, the simplest usage is with [get-pixels](https://github.com/scijs/get-pixels) and [save-pixels](https://github.com/scijs/save-pixels) as below.

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

## API

### `adaptiveThreshold(pixels[, options])`

Returns a thresholded ndarray.

* `pixels` - an ndarray whose shape is [width, height, channels].
* `options.size` - the size of neighbourhood area.
* `options.compensation` - a constant which is subtracted from the mean.
