const zeros = require('zeros')

/**
 * Grayscale
 */
function grayscale (pixels) {
  let [width, height] = pixels.shape
  let res = zeros([width, height])
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let gray = 0.2126 * pixels.get(x, y, 0) + 0.7152 * pixels.get(x, y, 1) + 0.0722 * pixels.get(x, y, 2)
      res.set(x, y, gray)
    }
  }

  return res
}

module.exports = grayscale
