const ndarray = require('ndarray')
const localMean = require('../lib/helpers/local_mean')
const assert = require('assert')

describe('localMean', () => {
  it('3 * 3, size 2', () => {
    let array = (new Array(9)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [3, 3])
    let mean = localMean(pixels, 2)
    assert.deepEqual(mean, ndarray([3, 4, 6, 7], [2, 2]))
  })

  it('4 * 4, size 2', () => {
    let array = (new Array(16)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [4, 4])
    let mean = localMean(pixels, 2)
    assert.deepEqual(mean, ndarray([3.5, 4.5, 5.5, 7.5, 8.5, 9.5, 11.5, 12.5, 13.5], [3, 3]))
  })

  it('4 * 4, size 3', () => {
    let array = (new Array(16)).fill(1).map((v, i) => v + i)
    let pixels = ndarray(array, [4, 4])
    let mean = localMean(pixels, 3)
    assert.deepEqual(mean, ndarray([6, 7, 10, 11], [2, 2]))
  })
})

/* global describe it */
