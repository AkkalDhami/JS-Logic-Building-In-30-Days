//? Write a program that finds the largest and smallest elements in an array.

let arr = [12, 2, 3, 45, 6];

let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("Smallest: " + smallest);
console.log("Largest: " + largest);
// Output: smallest = 2, largest = 45
