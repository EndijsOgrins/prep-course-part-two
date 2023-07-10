/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
  // Solution 1
  //   let reversed = 0;
  //   while (int !== 0) {
  //     reversed = reversed * 10 + (int % 10);
  //     int = Math.trunc(int / 10);
  //   }
  //   return reversed;
  // Solution 2
  return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

export { reverse };
