//? Write a function to reverse a given string without using built-in methods.
let string = "javascript";
function reverseStr(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
console.log(reverseStr(string)); //tpircsavaj
