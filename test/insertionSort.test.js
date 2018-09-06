import { describe, before, it } from 'mocha';
import assert from 'assert'
import InsertionSort from '../src/sort/insertionSort'

describe('Insertion Sort', function () {
  describe('#execute', function () {
    it('should sort the given array into ascending order', function () {
      const insertionSort = new InsertionSort()
      const unsorted = [1, 3, 2, 5, 4]
      const sorted = [1, 2, 3, 4, 5]
      assert.equal(JSON.stringify(insertionSort.execute(unsorted).result), JSON.stringify(sorted))
    })

    it('should swap 45 times for a 10 element array sorted in descending order', function () {
      //(n * n + 1) / 2 <- number of swaps for array in descending order
      const insertionSort = new InsertionSort()
      const unsorted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      assert.equal(insertionSort.execute(unsorted).swapCounter, 45)
    })

    it('should swap 0 times for an array sorted in ascending order', function () {
      const insertionSort = new InsertionSort()
      const sorted = [1, 2, 3, 4, 5]
      assert.equal(insertionSort.execute(sorted).swapCounter, 0)
    })
  })

})
