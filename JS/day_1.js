//! Day 1:
//? 1. Write a program to swap two numbers without using a temporary variable.
// let a = 5;
// let b = 10;

// console.log(`Before swap: a = ${a}, b = ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`After swap: a = ${a}, b = ${b}`);

//? 2. Generate the Fibonacci sequence up to a given number using a loop.
// let n1 = 0;
// let n2 = 1;

// for (let i = 0; i < 10; i++) {
//   console.log(n1);
//   let n3 = n1 + n2;
//   n1 = n2;
//   n2 = n3;
// }

//* Alternative Method:

// function fibonacci(num) {
//   let fib = [0, 1];
//   for (i = 2; i < num; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(10));

//? 3. Write a function that checks if a number is a prime number.

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(2)); //isPrime: true
// console.log(isPrime(10)); //isPrime: false

//? 3->Bonous. Write a function that console prime number from 0 to n.

// let n = 20;
// let logPrime = (num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// for (let i = 0; i <= n; i++){
//     if (logPrime(i)) {
//         console.log(i);
//     }
// }