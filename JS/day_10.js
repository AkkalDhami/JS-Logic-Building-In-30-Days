// Write a program that finds and prints duplicate elements in an array.

function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        duplicates.push(arr[i]);
      } else {
        seen[arr[i]] = true;
      }
    }
  
    return duplicates;
  }
  
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 6, 4])); // [2, 4]
  

//Alternative Method 
  
  let arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 10];
let dupes = [
  ...new Set(arr.filter((x) => arr.filter((y) => y === x).length > 1)),
];

console.log(dupes); // [2, 3]
