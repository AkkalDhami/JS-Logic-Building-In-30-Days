//? Implement a sorting algorithm (Bubble Sort or Selection Sort) without using the built-in sort() method.

//* Array Sorting (Bubble Sort)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [ 11, 12, 22, 25, 34, 64, 90 ]

//* Array Sorting (Bubble Sort) with additional variable

function bubbleSort(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 234, 234, 11, 90])); //[ 11, 12, 22, 25, 34, 64, 90, 234, 234 ]

//* Array Sorting (Selection Sort)
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let arr2 = [29, 10, 14, 37, 13];
console.log("Sorted array:", selectionSort(arr2));



//* USING IN-BUILT METHOD

let arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log(arr3.sort((a, b) => a - b));
