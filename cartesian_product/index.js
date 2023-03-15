/** 
*Problem - Given two infinite non-empty sets, find their Cartesian Product.
In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB, is the set of all pairs (a, b) where a is in A and b is in B.
const A = [1, 2]
const B = [3, 4]
AxB = [ [1, 3], [1, 4], [2, 3], [2, 4] ]
const C = [1, 2]
const D = [3, 4, 5]
CxD = [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]
*/

/**
 * It takes two arrays and returns an array of all possible pairs of elements from the two arrays
 * @param arr1 - [1, 2, 3]
 * @param arr2 - [1, 2, 3]
 * @returns An array of arrays.
 */
function cartesianProduct(arr1, arr2) {
  const product = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      product.push([arr1[i], arr2[j]]);
    }
  }

  return product;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]
// Big-O O(mn)
// Both arrays have different lengths
