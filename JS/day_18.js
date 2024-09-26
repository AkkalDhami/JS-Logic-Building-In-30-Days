//? Write a function to check whether two arrays are equal or not.
//? Two arrays are equal if they have the same elements in the same order.

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // Output: true


//* ALTERNATIVE METHOD

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => value === arr2[index]);
}

console.log(areArraysEqual([1, 12, 3], [2, 1, 3])); // Output: false
