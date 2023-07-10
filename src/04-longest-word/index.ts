/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(longestWord: string): string {
  // Remove punctuation and split the sentence into an array of words
  const words = longestWord.replace(/[^\w\s]/g, "").split(" ");

  // Initialize the longest word as an empty string
  let longest = "";

  // Iterate over each word in the array
  for (const word of words) {
    // Check if the current word is longer than the current longest word
    if (word.length > longest.length) {
      longest = word;
    }
  }

  // Return the longest word
  return longest;
}

export { longestWord };
