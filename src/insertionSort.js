class InsertionSort {
  constructor() {
    this.gif = 'src/css/resources/Insertion-sort-example-300px.gif'
    this.description = 'At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.'
    this.goodFor = 'Mostly sorted lists.'
    this.adaptive = true
    this.stable = true
    this.inPlace = true
    this.online = true
    this.bigO = `O(n${'2'.sup()})`
  }

  sort(array) {
    //start at the second element of the array, because we will be comparing each element backwards
    for(let i = 1; i < array.length; i++) {
      //Store the value to check against the rest of the array
      let value = array[i]
      let insert = null
      //Start second loop at one space behind checked value/
      //Continue loop as long as j > -1 and the comparison value (array[j]) is greater than the checked element (value)
      for(let j = i - 1; j > -1 && array[j] > value; j--) {
        //While loop runs, copy current value (array[j]) to next value (array[j + 1])
        array[j + 1] = items[j]
        insert = j + 1
      }

      //When loop terminates, array[j] < then value (array[i]), so we insert the value at array[j + 1] (insert)
      items[insert] = value
    }

    console.log(array)
    return array
  }

}
