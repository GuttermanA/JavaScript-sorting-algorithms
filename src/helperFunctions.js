const generateArray = (n) => {
  return Array.from({length: n}, () => Math.floor(Math.random() * 40));
}

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = {
  generateArray,
  swap
}
