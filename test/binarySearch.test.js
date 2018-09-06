import { describe, before, it } from 'mocha';
import assert from 'assert'
import BinarySearch from '../src/search/binarySearch'

describe('binarySearch', function() {
  describe('#execute', function() {
    const binarySearch = new BinarySearch()

    const sortedArray = [1,5,10,33,600,721,776,777]
    it('finds the index of the given value', function () {
      const value = 721
      const answer = 5
      const result = binarySearch.execute(sortedArray, value)
      assert.equal(result, answer)
    })
    it('does not find the index for a value not in the array', function() {
      const value = 10034
      const answer = 'Value not found'
      const result = binarySearch.execute(sortedArray, value)
      assert.equal(result, answer)
    })
  })
})
