function mergeSort(array) {
  if ( array.length <=1 ) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let mergedArray = []
  while (left.length || right.length) {
    if (left[0] <= right[0] || !right.length) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return mergedArray;
}

module.exports = mergeSort;