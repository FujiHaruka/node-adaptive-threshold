const adaptiveThreshold = require('../lib/adaptive-threshold')
const getPixels = require('get-pixels')
const savePixels = require('save-pixels')
const IMG_URL = 'sample.jpg'

function drawThresholdToCanvas (options) {
  getPixels(IMG_URL, (err, pixels) => {
    if (err) {
      window.alert('Error.')
      throw err
    }
    let thresholded = adaptiveThreshold(pixels, options)
    let canvas = savePixels(thresholded, 'canvas') // returns canvas element
    let canvasWrap = document.querySelector('#canvas-wrap')
    canvasWrap.removeChild(canvasWrap.firstChild)
    canvasWrap.appendChild(canvas)
  })
}

window.addEventListener('load', () => {
  // Initial image
  let canvasWrap = document.querySelector('#canvas-wrap')
  let img = new Image()
  img.src = IMG_URL
  canvasWrap.appendChild(img)

  // Add click event
  let button = document.querySelector('#threshold-button')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    let compensationInput = document.querySelector('#option-compensation')
    let sizeInput = document.querySelector('#option-size')
    let compensation = Number(compensationInput.value)
    let size = Number(sizeInput.value)
    drawThresholdToCanvas({compensation, size})
  })
})

/* global Image */
