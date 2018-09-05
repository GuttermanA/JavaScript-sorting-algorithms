const helpers = require('./helperFunctions')
class BinarySearch {
  constructor() {

  }

  execute(array, value) {

    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)

    while(array[middle] !== value && start < end) {
      if (value > array[middle]) {
        start = middle + 1
      } else {
        end = middle - 1
      }

      middle = Math.floor((start + end) / 2)
    }



    if()
  }




}
