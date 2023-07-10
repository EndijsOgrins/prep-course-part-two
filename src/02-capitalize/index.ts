/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
  const words = str.split(" "); // ["hi", "there,", "how", "is", "it", "going?"]

  const capitalizedWords = words.map((word) => {
    // ["Hi", "There,", "How", "Is", "It", "Going?"]
    const firstLetter = word.charAt(0).toUpperCase(); // "H"
    const restOfWord = word.slice(1); // "i"
    return firstLetter + restOfWord; // "Hi"
  });

  return capitalizedWords.join(" "); // "Hi There, How Is It Going?"
}

export { capitalize };
