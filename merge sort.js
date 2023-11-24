// Build a function which sorts a given array, but uses a “merge sort” function
// split array in 2 subarrays

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  console.log(`left array: ${leftArray}`);
  console.log(`right array:${rightArray}`);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
// merge left and right elements

function merge(leftArray, rightArray) {
  const result = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }

  return [...result, ...leftArray, ...rightArray];
}
const array = [5, 1, 7, 3, 2, 8, 6, 4];
console.log(mergeSort(array));
