/*
  JavaScript DataTypes

  JavaScript has several primitive data types, which are the basic building blocks of data in the language.
  Here are the main primitive types:

  1. Number
     - Represents numeric values (integers and floating-point numbers).
     - Example:
       let age = 25;
       let price = 10.99;

  2. String
     - Represents sequences of characters (text).
     - Example:
       let name = "Alice";
       let greeting = 'Hello, world!';

  3. Boolean
     - Represents logical values: true or false.
     - Example:
       let isLoggedIn = true;
       let hasPermission = false;

  4. Undefined
     - A variable that has been declared but not assigned a value is undefined.
     - Example:
       let x;
       console.log(x); // undefined

  5. Null
     - Represents the intentional absence of any object value.
     - Example:
       let data = null;

  6. Symbol (ES6)
     - Represents a unique and immutable value, often used as object property keys.
     - Example:
       let id = Symbol('id');

  7. BigInt (ES2020)
     - Used for very large integers beyond the safe limit for Number.
     - Example:
       let bigNumber = 1234567890123456789012345678901234567890n;

  Note: Objects and Arrays are not primitive types.
*/

// DataTypes

// 1. Number
// Numbers can be integers or decimals.
let age = 25; // age is a Number with value 25
let price = 10.99; // price is a Number with value 10.99
console.log("Number examples:", age, price);

// 2. String
// Strings are sequences of characters, written inside quotes.
let userName = "Alice"; // userName is a String
let greeting = 'Hello, world!'; // greeting is also a String
console.log("String examples:", userName, greeting);

// 3. Boolean
// Booleans can only be true or false.
let isLoggedIn = true; // isLoggedIn is a Boolean with value true
let hasPermission = false; // hasPermission is a Boolean with value false
console.log("Boolean examples:", isLoggedIn, hasPermission);

// 4. Undefined
// When a variable is declared but not given a value, it is undefined.
let x;
console.log("Undefined example:", x); // Outputs: undefined

// 5. Null
// Null is used to represent 'no value' or 'empty'.
let data = null;
console.log("Null example:", data); // Outputs: null
