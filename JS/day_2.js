//! Day 2:
//? 1. Write a recursive and iterative function to calculate the factorial of a given number.

function fact(num) {
  if (num === 0 || num === 1) return 1;
  return fact(num - 1) * num;
}

console.log(fact(5)); // Output: 120

//? 2. Write a function that checks whether a given string is a palindrome.

function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
}
console.log(isPalindrome("madam")); // true

//* Alternative Method
function returnPalindrome(str) {

    return str === str.split("").reverse().join("");

}
console.log(returnPalindrome("hello"));

