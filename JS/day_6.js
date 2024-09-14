//? Find the sum of all elements in an array.

let arr = [1, 2, 3, 4, 5, 6];

function sumArray(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(arr)); // 21

//* Alternative method

function sumArr(arr) {
    return arr.reduce((acc, val) => acc + val, 0);  // ES6+ syntax
}
console.log(sumArr(arr)); // 21