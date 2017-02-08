const zeros = require('zeros')
/**
 * Calculate local mean
 */
function localMean (pixels, size) {
  // pixels is expected to be grayscaled
  let [width, height] = pixels.shape
  // I like Shakutori method!
  let rowSumsCol = new Array(height)
  for (let y = 0; y < height; y++) {
    let rowSums = new Array(width).fill(0)
    for (let x = 0; x < size; x++) {
      rowSums[0] += pixels.get(x, y)
    }
    for (let xEnd = size; xEnd < width; xEnd++) {
      let xStart = xEnd - size + 1
      rowSums[xStart] = rowSums[xStart - 1] + pixels.get(xEnd, y) - pixels.get(xStart - 1, y)
    }
    rowSumsCol[y] = rowSums
  }

  let mWidth = width - size + 1
  let mHeight = height - size + 1
  let mean = zeros([mWidth, mHeight])
  for (let x = 0; x < mWidth; x++) {
    // Set x, 0
    for (let y = 0; y < size; y++) {
      let prev = mean.get(x, 0)
      mean.set(x, 0, prev + rowSumsCol[y][x])
    }
  }
  for (let x = 0; x < mWidth; x++) {
    for (let y = 1; y < mHeight; y++) {
      mean.set(x, y, mean.get(x, y - 1) - rowSumsCol[y - 1][x] + rowSumsCol[y + size - 1][x])
    }
  }

  // Devide
  for (let x = 0; x < mWidth; x++) {
    for (let y = 0; y < mHeight; y++) {
      mean.set(x, y, mean.get(x, y) / (size * size))
    }
  }
  return mean
}

module.exports = localMean
