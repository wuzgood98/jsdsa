function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  //divide array thru the middle
  const mid = Math.floor(arr.length / 2);
  // consider the left side of the array from 0 up to but not the mid included
  const leftArr = arr.slice(0, mid);
  //consider the right side from the middle to the last element of the array
  const rightArr = arr.slice(mid, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [-6, 20, 8, -2, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
//Big-O => O(nlogn)
