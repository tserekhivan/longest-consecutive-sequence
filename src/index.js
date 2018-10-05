module.exports = function longestConsecutiveLength(array) {
  let countMax = 0;

  array.reduce((current, item, index, arr) => {
    countMax = Math.max(countMax, current);
    const conditionOne = arr[index+1] - item === 1;
    const conditionTwo = arr[index+1] - item === -1;
    return (conditionOne || conditionTwo) ? ++current : 1;
  }, 1);

  return countMax;
}