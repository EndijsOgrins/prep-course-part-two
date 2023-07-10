/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string): number {
  // Solution 1
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of s.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
  // Solution 2
  //   const matches = s.match(/[aeiou]/gi);
  //   return matches ? matches.length : 0;
}

export { vowels };
