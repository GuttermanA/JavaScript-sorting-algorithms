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

      while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
          result.push(left[indexLeft])
          indexLeft++
        } else {
          result.push(right[indexRight])
          indexRight++
        }
      }
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
      mergeSort(left),
      mergeSort(right)
    )
  }

}
