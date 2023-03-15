function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const fact = factorial(5);
console.log(fact);
//Big-O => O(n)

/*
Recursive factorial of a number
Problem - Given an integer 'n', find the factrorial of that integer.
The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.
*/

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

//console.log(recursiveFactorial(5))
// O(n)
