/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string): boolean {
  //   const stringASorted = stringA
  //     .replace(/[^\w]/g, "")
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("");
  //   const stringBSorted = stringB
  //     .replace(/[^\w]/g, "")
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("");
  //return stringASorted === stringBSorted;

  const sanitizeString = (str: string) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };
  return sanitizeString(stringA) === sanitizeString(stringB);
}

export { anagrams };
