class MergeSort {
  constructor() {
    this.gif = 'src/css/resources/Merge-sort-example-300px.gif'
    this.description = 'Divide the unsorted list into smallest possible sub lists and then repeatedly merge lists until only 1 sorted sublist remains'
    this.goodFor = 'Everything. This is the implementation that most browsers use in the JS sort function.'
    this.adaptive = true
    this.stable = true
    this.inPlace = false
    this.online = null
    this.bigO = `O(n log(n))`
  }

  execute (arr) {

    const merge = (left, right) => {
      let result = []
      let indexLeft = 0
      let indexRight = 0
      //While both indices are less that or equal to the last element in the array
      while (indexLeft < left.length && indexRight < right.length) {
        //if the element in the current index of the right array is greater than the element in the current index of the left array
        if (left[indexLeft] < right[indexRight]) {
          //push the left element to the result and increment the left index
          result.push(left[indexLeft])
          indexLeft++
        } else {
          //other push the right element to the result and increment the right index
          result.push(right[indexRight])
          indexRight++
        }
      }
      //after the loop complete, take the result array and add what remains from the right and left arrays
      return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }

    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
      execute(left),
      execute(right)
    )
  }

}

export default MergeSort;
