//? Write a function that returns the sum of all multiples of 3 or 5 below a given number.
let sumProduct = (num) => {
  let result = 0;
  for (let i = 1; i < num; i++)
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  return result;
};
console.log(sumProduct(10)); // Output: 23 (3 + 5 + 6 + 9)

//? ALTERNATIVE METHOD

const sumProduct2 = (num) =>
  [...Array(num).keys()]
    .filter((i) => i % 3 === 0 || i % 5 === 0)
    .reduce((acc, i) => acc + i, 0);

console.log(sumProduct2(10)); // Output: 23 (3 + 5 + 6 + 9)
