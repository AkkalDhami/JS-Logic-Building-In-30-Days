//? Write a program that find the largest and smallest elements in an array.

let arr = [12, 2, 3, 45, 6];

let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
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


//* Alternative Method
function findLargest(arr) {
  return Math.max(...arr);
}
function findSmallest(arr) {
  return Math.min(...arr);
}

console.log("Smallest: " + findSmallest([1, 2, 3, 4, 5, 6, 7])); // 1
console.log("Largest: " + findLargest([2, 23, 34, 45, 56, 67])); // 67