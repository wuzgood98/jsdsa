/**
 * It's a recursive function that returns the number of ways to climb a staircase of n steps, where you
 * can take either 1 or 2 steps at a time
 * @param n - the number of steps in the staircase
 * @returns The number of ways to climb a staircase of n steps.
 */
function climbingStaircase(n) {
  const numOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }

  return numOfWays[n - 1];
}
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O - O(n)
