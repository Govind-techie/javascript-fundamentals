/*
  Math Object in JavaScript
 
  - The Math object is a built-in global object that provides mathematical constants and functions.
  - You cannot create a Math object (no need for `new Math()`), you use its properties and methods directly.
 
  Common Properties:
  - Math.PI      → Value of π (3.14159...)
  - Math.E       → Euler's number (2.718...)
 
  Common Methods:
  - Math.round(x)   → Rounds x to the nearest integer
  - Math.floor(x)   → Rounds x down
  - Math.ceil(x)    → Rounds x up
  - Math.trunc(x)   → Removes the decimal part of x
  - Math.pow(x, y)  → x raised to the power y
  - Math.sqrt(x)    → Square root of x
  - Math.abs(x)     → Absolute value of x
  - Math.max(a,b,...) → Largest number
  - Math.min(a,b,...) → Smallest number
  - Math.random()   → Random number between 0 (inclusive) and 1 (exclusive)

  Example Usage:
  console.log(Math.PI);        // 3.141592653589793
  console.log(Math.round(4.7)); // 5
  console.log(Math.floor(4.7)); // 4
  console.log(Math.random());   // e.g. 0.456721
 
 Note: The Math object is useful for calculations, rounding numbers, and generating random values.
*/

// Examples of commonly used Math methods

// 1. Math.abs() - Returns absolute (positive) value
let negativeNum = -25.5;
console.log(Math.abs(negativeNum)); // Output: 25.5
console.log(Math.abs(-10)); // Output: 10

// 2. Math.pow() - Returns base to the power of exponent
console.log(Math.pow(2, 3)); // Output: 8 (2³)
console.log(Math.pow(5, 2)); // Output: 25 (5²)

// 3. Math.floor() - Rounds down to nearest integer
let price = 99.99;
console.log(Math.floor(price)); // Output: 99
console.log(Math.floor(3.8)); // Output: 3

// 4. Math.ceil() - Rounds up to nearest integer
let temperature = 23.1;
console.log(Math.ceil(temperature)); // Output: 24
console.log(Math.ceil(5.01)); // Output: 6

// 5. Math.random() - Generates random number between 0 and 1
// Generate random number between 0 and 1
console.log(Math.random()); // Output: e.g., 0.7845673421

// Generate random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Output: random number 1-10

// Generate random number between 1 and 100
let randomHundred = Math.floor(Math.random() * 100) + 1;
console.log(randomHundred); // Output: random number 1-100

