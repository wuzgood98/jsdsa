// Insertion sort
/*
Insertion sort
Problem - Given an array of integers, sort the array.
Sorting can either be ascending or descending.
const arr = [-6, 20, 8, -2, 4]
insertionSort(arr) => Should return [-6, -2, 4, 8, 20]
*/
// Ascension order
function insertionSortA(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
//console.log(insertionSortA([-6, 20, 8, -2, 4]));
//Big-O => O(n^2)

// Descending order
function insertionSortD(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] < current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
console.log(insertionSortD([-6, 20, 8, -2, 4]));
//Big-O => O(n^2)
