const assert = require('assert')
// const chai = require('chai')
const path = require('path')
const BubbleSort = require(path.join(__dirname, '../src', 'bubbleSort'))

describe('Bubble Sort', function () {
  describe('#execute', function () {
    it('should sort the given array into ascending order', function () {
      const insertionSort = new BubbleSort()
      const unsorted = [1, 3, 2, 5, 4]
      const sorted = [1, 2, 3, 4, 5]
      assert.equal(JSON.stringify(insertionSort.execute(unsorted).result), JSON.stringify(sorted))
    })
  })

})
