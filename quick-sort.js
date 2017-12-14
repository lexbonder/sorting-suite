function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let lessThan = [];
  let greaterThan = [];

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] <= pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
}

module.exports = quickSort;