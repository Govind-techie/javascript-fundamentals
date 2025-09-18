/* 
Boolean in JavaScript

A Boolean is a data type that can have only two possible values: true or false.

These are the two Boolean values:
  true   // means "yes", "correct", or "on"
  false  // means "no", "incorrect", or "off"

Booleans are commonly used in:
  - Conditions (if statements)
  - Comparisons (==, ===, >, <, etc.)
  - Loops and logical operations

Examples:
  let isSunny = true;
  let isRaining = false;

  if (isSunny) {
    console.log("Let's go outside!");
  }

  let age = 18;
  let isAdult = age >= 18; // isAdult will be true

  console.log(isAdult); // Output: true
*/

// Boolean variable assignments
let isSunny = true;
let isRaining = false;
console.log("Is it sunny? ", isSunny);       // Output: true
console.log("Is it raining? ", isRaining);   // Output: false

// Boolean comparisons
let age = 20;
let isAdult = age >= 18;
console.log("Age is 20. Is adult? ", isAdult); // Output: true

let temperature = 30;
let isHot = temperature > 25;
console.log("Temperature is 30. Is it hot? ", isHot); // Output: true