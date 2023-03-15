//Binary search
/*
Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
*/
//NB: Binary search only applies on sorted arrays
// If the array isn't sorted, sort the array the apply binary search on the array

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      start = mid + 1;
    }
    if (array[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}
/* console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], 20)) */
//Big-O => O(logn)

// Recursive
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return search(array, target, mid + 1, end);
  } else {
    return search(array, target, start, mid - 1);
  }
}

//O(logn)
