const assert = require('assert')
// const chai = require('chai')
const path = require('path')
const InsertionSort = require(path.join(__dirname, '../src', 'insertionSort'))

describe('Insertion Sort', function () {
  describe('#execute', function () {
    it('should sort the given array into ascending order', function () {
      const insertionSort = new InsertionSort()
      const unsorted = ['1', '3', '2', '5', '4']
      const sorted = ['1', '2', '3', '4', '5']
      assert.equal(insertionSort.execute(unsorted), sorted)
    })

  })

})
