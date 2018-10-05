module.exports = function longestConsecutiveLength(array) {
  let countMax = 0;
  const set = new Set();
  const len= array.length;

  for (let i = 0; i < len; i++) {
    set.add(array[i]);
  }

  for (let i = 0; i < len; i++) {
    let j = array[i];
    if (set.has((array[i] - 1))) {
      while (set.has(j)) {
        j++;
      } 
    }
    countMax = Math.max(countMax, j - (array[i]-1));
  }

  return countMax;
}