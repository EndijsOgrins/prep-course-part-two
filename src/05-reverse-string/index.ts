/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

// function reverse(str: string): string {
//   return str.split("").reverse().join("");
// }

function reverse(str: string): string {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

export { reverse };
