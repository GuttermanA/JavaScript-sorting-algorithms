const helpers = require('./helperFunctions')

class BubbleSort {
  constructor() {
    this.gif = 'src/css/resources/Bubble-sort-example-300px.gif'
    this.description = 'At each iteration, bubble sort compares the current element and the next element, swapping them if the current element is bigger than the next element.'
    this.goodFor = 'Small mostly sorted lists.'
    this.adaptive = true
    this.stable = true
    this.inPlace = true
    this.online = true
    this.bigO = `O(n${'2'.sup()})`
  }

  execute (array) {
    const length = array.length;
    let swapCount = 0
    console.log(array)
    for (let i = 0; i < length; i++) { //Number of passes
      for (let j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if(array[j] > array[j + 1]) {
          //Swap the numbers
          let tmp = array[j];  //Temporary variable to hold the current number
          array[j] = array[j + 1]; //Replace current number with adjacent number
          array[j+1] = tmp; //Replace adjacent number with current number
          swapCount++
          console.log(array)
        }
      }
    }
    console.log(array, swapCount)
    return {
      result: array
    }
  }
}

module.exports = BubbleSort;
