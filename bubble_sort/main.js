// Bubble sort
/*
Problem - Given an array of integers, sort the array.
const arr = [-6,20,8,-2,4]
bubbleSort(arr) => Should return [-6,-2,4,8,20]
*/
//Ascending order
function bubbleSortA(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        //keep the state of the current value
        let current = array[i];
        //swap the current value with the next value
        array[i] = array[i + 1];
        //swap the next value with the current value that was kept in state
        array[i + 1] = current;
        // set swapped to true to indicate that a swap has occurred
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

//console.log(bubbleSortA([-6, 20, 8, -2, 4]));
// Big-O - O(n^2)

//Descending order
function bubbleSortD(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        //keep the state of the next value
        let next = array[i + 1];
        //swap the next value with the current value
        array[i + 1] = array[i];
        //swap the current value with the next value that was kept in state
        array[i] = next;
        // set swapped to true to indicate that a swap has occurred
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSortD([-6, 20, 8, -2, 4]));
// Big-O - O(n^2)
