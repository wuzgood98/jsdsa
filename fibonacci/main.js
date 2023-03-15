function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const fib = fibonacci(9);
console.log(fib);
//Big-O => O(n)

/* 
Recursive Fibonacci sequence
Problem - Given a number 'n', find the nth element of the Fibonacci sequence 
*/

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
//console.log(recursiveFibonacci(6))
// O(2^n) recursive
// O(n) iterative
