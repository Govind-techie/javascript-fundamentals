/*
  Comparison Operators - JavaScript

  - Used to compare two values and return a boolean (true/false).

  - Common operators:
    >   : greater than
    <   : less than
    >=  : greater than or equal to
    <=  : less than or equal to
    ==  : equal to (loose equality, type conversion allowed)
    === : strict equality (no type conversion, value + type must match)
    !=  : not equal to (loose)
    !== : strict not equal to

  - String Comparison:
    - Characters are compared based on their ASCII/Unicode values
    - Uppercase letters (A-Z): 65-90
    - Lowercase letters (a-z): 97-122
    - Example: 'a' > 'A' is true because 97 > 65

  Examples:
  console.log(5 > 3);    // true
  console.log(5 == "5"); // true (loose equality)
  console.log(5 === "5");// false (strict equality)
  console.log(10 != 8);  // true
  console.log(10 !== "10"); // true
*/

// Basic number comparisons
let num1 = 10;
let num2 = 5;
console.log(num1 > num2);    // true - checks if 10 is greater than 5
console.log(num1 <= num2);   // false - checks if 10 is less than or equal to 5

// Demonstrating loose vs strict equality
let number = 42;
let stringNumber = "42";
console.log(number == stringNumber);   // true - loose equality converts string to number
console.log(number === stringNumber);  // false - strict equality checks both value and type

// Practical examples with different types
let age = 20;
let isAdult = age >= 18;     // true - stores result of comparison in variable
console.log(isAdult);        // true

// Common gotchas with equality
console.log(0 == false);     // true - loose equality does type conversion
console.log(0 === false);    // false - strict equality, different types
console.log(null == undefined); // true - loose equality
console.log(null === undefined); // false - strict equality

// String comparisons using ASCII values
console.log('a' > 'b');      // false (97 > 98)
console.log('z' > 'a');      // true (122 > 97)
console.log('A' < 'a');      // true (65 < 97)

// String comparison with different lengths
console.log('hello' > 'hell');  // true (additional 'o' makes it greater)
console.log('cat' < 'cats');    // true (longer string with same prefix is greater)

// Demonstrating case sensitivity in comparisons
console.log('Apple' < 'apple');  // true (uppercase letters have lower ASCII values)
console.log('A'.charCodeAt(0));  // 65 - shows ASCII value of 'A'
console.log('a'.charCodeAt(0));  // 97 - shows ASCII value of 'a'


