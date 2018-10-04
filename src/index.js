module.exports = function longestConsecutiveLength(array) {

  if (array.length == 0) return 0;
  let count = [];
  array.reduce(function(current, item, index, arr) {
    if (arr[index+1] - item == 1) {
      count.push((current+1));
      return ++current;
    } else {
      count.push(1);
      return 1;
    }
  }, 1);

  let countMax = 0;
  count.forEach(function(item) {
  if (item > countMax) {
    countMax = item;
  }
    
  });
  return countMax;
}