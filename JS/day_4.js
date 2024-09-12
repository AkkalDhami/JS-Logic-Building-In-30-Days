//? Write a program to reverse an array without using the built-in reverse() method.

let arr = [2, 3, 4, 6, 34, 2];

function reverseArr(arr) {
  let reverseArray = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray += arr[i] + " ";
  }
  return reverseArray;
}

console.log(reverseArr(arr));
