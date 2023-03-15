//Linear search
/*
Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
*/

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4], 2));
// O(n)
