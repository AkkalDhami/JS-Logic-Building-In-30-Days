//? Write a function that returns the longest word in a given sentence.

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("This is a sample sentence .")); // Output: "sentence"


//* ALTERNATIVE METHOD

const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;
  return str.split(" ").reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
};

console.log(findLongestWord("This is a sample sentence .")); // Output: "sentence"
