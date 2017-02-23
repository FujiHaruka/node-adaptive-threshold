const zeros = require('zeros')
const grayscale = require('./helpers/grayscale')
const localMean = require('./helpers/local_mean')

function adaptiveThreshold (pixels, options = {}) {
  let {
    size = 7,
    compensation = 7,
    singleChannel = false
  } = options
  let midSize = Math.floor(size / 2)
  let [width, height] = pixels.shape
  let res = zeros([width, height])

  let grayscaled = singleChannel ? pixels : grayscale(pixels)
  let meanMatrix = localMean(grayscaled, size)
  let [mWidth, mHeight] = meanMatrix.shape

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pixel = grayscaled.get(x, y)

      let mX = x - midSize
      let mY = y - midSize
      if (x - midSize < 0) {
        mX = 0
      } else if (x - midSize >= mWidth) {
        mX = mWidth - 1
      } else if (y - midSize < 0) {
        mY = 0
      } else if (y - midSize > mHeight) {
        mY = mHeight - 1
      }
      let mean = meanMatrix.get(mX, mY)

      let threshold = mean - compensation
      if (pixel < threshold) {
        res.set(x, y, 0)
      } else {
        res.set(x, y, 255)
      }
    }
  }
  return res
}

module.exports = adaptiveThreshold
