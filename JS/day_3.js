//? 1. Write a function that converts a given number to its binary representation.

function toBinary(num) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}
console.log(toBinary(10)); // Output: 1010

//? 2. Write a program to calculate the sum of the digits of a number.
function sumOfDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(12345)); // 15
