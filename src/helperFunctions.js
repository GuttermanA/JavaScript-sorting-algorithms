export const generateArray = (n) => {
  return Array.from({length: n}, () => Math.floor(Math.random() * 40));
}

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const isSorted = (array) => {
  if(array.length === 0 || array.length === 1) {
    return true
  }

  for(let i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}
