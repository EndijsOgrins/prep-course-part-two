/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number): boolean {
  return (n & 1) === 0; // bitwise AND operator (&) returns 1 if both bits are 1, otherwise 0
}

export { isEven };
