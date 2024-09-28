//? Write a function to find the largest prime factor of a given number n.

function largestPrimeFactor(n) {
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      n /= i;
    } else {
      i++;
    }
  }

  return i;
}

console.log(largestPrimeFactor(15)); // Output: 5
