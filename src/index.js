module.exports = function longestConsecutiveLength(array) {

  if (array.length == 0) return 0;
  //BubbleSort(array);

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
 // return countMax;
 /* let countMax = 0;
  let countCurrent = 0;
  let set = new Set();
  for (i = 0; i < array.length - 1; i++) {
    if (array[i+1] - array[i] == 1) {
      countCurrent++;
    } else  if (countCurrent >= countMax) {
      countMax = countCurrent;
      countCurrent = 0;
    }
  }
  return countMax;*/
}

function BubbleSort(array)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
  let n = array.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-1-i; j++) {
      if (array[j+1] < array[j]) {
        var t = array[j+1];
        array[j+1] = array[j];
        array[j] = t;
      }
    }
  }
}

  

