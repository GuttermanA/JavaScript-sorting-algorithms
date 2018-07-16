export const generateArray = (n) => {
  return Array.from({length: n}, () => Math.floor(Math.random() * 40));
}
