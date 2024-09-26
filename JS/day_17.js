//? Write a function to find the whether the type of traingle is Equilateral, Isosceles or Scelene Traingle.
//* HINT:
//* 1. All sides of an equilateral triangle are equal.
//* 2. Two sides of an isosceles triangle are equal.
//* 3. No sides of a scalene triangle are equal.

function findTraingle(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral Traingle";
  } else if (a === b || b === c || c === a) {
    return "Isosceles Traingle";
  } else {
    return "Scelene Traingle";
  }
}

console.log(findTraingle(3, 3, 3)); // Output: Equilateral Traingle

console.log(findTraingle(3, 4, 5)); // Output: Scelene Traingle

console.log(findTraingle(3, 4, 3)); // Output: Isosceles Traingle
