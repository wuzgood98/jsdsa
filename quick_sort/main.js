// Quick sort
/*
Problem - Given an array of integers, sort the array.
Sorting can either be ascending or descending.
const arr = [-6, 20, 8, -2, 4]
insertionSort(arr) => Should return [-6, -2, 4, 8, 20]
*/

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  //chosen pivot from the array
  let pivot = array[0];
  //left pointer pointing to the beginning of the array
  let left = [];
  //right pointer pointing to the end of the array
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  //return quickSort(left).concat([pivot]).concat(quickSort(right))
}
console.log(quickSort([-6, 20, 8, -2, 4]));
//Worst case - O(n^2)
// Average case Big-O => O(nlogn)
