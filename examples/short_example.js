const fs = require('fs')
const savePixels = require('save-pixels')
const getPixels = require('get-pixels')
const adaptiveThreshold = require('../lib/adaptive-threshold')

getPixels('sample.png', (err, pixels) => {
  if (err) {
    console.error(err)
    return
  }
  let thresholded = adaptiveThreshold(pixels)
  savePixels(thresholded, 'png').pipe(fs.createWriteStream('result.png'))
})
