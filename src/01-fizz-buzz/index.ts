/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n: number) {
  // n = 5
  for (let i = 1; i <= n; i++) {
    // i = 1, 2, 3, 4, 5
    if (i % 3 === 0 && i % 5 === 0) {
      // 3 % 3 === 0 && 3 % 5 === 0 => true
      console.log("fizzbuzz"); // "fizzbuzz"
    } else if (i % 3 === 0) {
      // 3 % 3 === 0 => true
      console.log("fizz"); // "fizz"
    } else if (i % 5 === 0) {
      // 3 % 5 === 0 => false
      console.log("buzz"); // "buzz"
    } else {
      console.log(i);
    }
  }
}

export { fizzBuzz };
