const assert = require('assert')
const grayscale = require('../lib/helpers/grayscale')
const ndarray = require('ndarray')

describe('grayscale', () => {
  it('Red', () => {
    let pixels = ndarray([100, 0, 0], [1, 1, 3])
    let grayed = grayscale(pixels)
    assert.deepEqual(grayed, ndarray([21.26], [1, 1]))
  })

  it('Green', () => {
    let pixels = ndarray([0, 100, 0], [1, 1, 3])
    let grayed = grayscale(pixels)
    assert.deepEqual(grayed, ndarray([71.52], [1, 1]))
  })

  it('Blue', () => {
    let pixels = ndarray([0, 0, 100], [1, 1, 3])
    let grayed = grayscale(pixels)
    assert.deepEqual(grayed, ndarray([7.22], [1, 1]))
  })
})

/* global describe it */
