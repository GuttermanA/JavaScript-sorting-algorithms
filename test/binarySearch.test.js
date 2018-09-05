import { describe, before, it } from 'mocha';
import assert from 'assert'
import BinarySearch from '../src/binarySearch'

describe('binarySearch', function() {
  describe('#execute', function() {
    const binarySearch = new BinarySearch()

    const sortedArray = [1,5,10,33,600,721,776,777]
    it('finds the index of the given value', function () {
      const value = 776
      const answer = 6
      const result = binarySearch.execute(sortedArray, value)
      assert.equal(result, answer)
    })
  })
})
