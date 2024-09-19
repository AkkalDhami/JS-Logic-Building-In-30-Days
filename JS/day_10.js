// Write a program that finds and prints duplicate elements in an array.

let duplicates = [];
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

console.log(findDuplicates(arr));
  

//Alternative Method 
  
let arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 10];
let dupes = [
  ...new Set(arr.filter((x) => arr.filter((y) => y === x).length > 1)),
];

console.log(dupes); // [2, 3]

