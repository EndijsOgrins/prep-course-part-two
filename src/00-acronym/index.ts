/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  // Split the input phrase into an array of words
  let result = "";
  const words = input.split(/ |-|_/);
  words.forEach((word) => {
    if (word[0]) {
      const firstLetter = word[0].toUpperCase();
      result += firstLetter;
    }
  });
  return result;
}

export { parse };
