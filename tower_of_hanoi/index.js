/**
 * Move n-1 disks from A to B using C, then move the nth disk from A to C, then move the n-1 disks from
 * B to C using A.
 * @param n - number of disks
 * @param fromRod - The rod from which we move the disk
 * @param toRod - The rod to which we want to move the disks.
 * @param usingRod - The rod that is being used to move the disks.
 * @returns the number of moves it takes to move n disks from one rod to another.
 */
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// Big-O - O(2^n)
