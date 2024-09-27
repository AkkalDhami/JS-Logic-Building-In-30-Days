//? Write a function that checks if a given string is a pangram.
//* HINT : A pangram is a sentence that contains every letter of the alphabet at least once. 

function isPangram(str) {
  let char = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  for (const ch of char) {
    if (!str.includes(ch)) {
      return false;
    }
  }
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world")); // false
