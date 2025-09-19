/*
NaN in JavaScript

NaN stands for "Not-a-Number".
It is a special value in JavaScript that represents the result of an invalid or undefined mathematical operation.

Description:
- NaN is of type 'number', but it is not equal to any value, including itself.
- NaN is produced when an operation cannot produce a valid number as a result.

Situations that lead to NaN:
- Performing arithmetic with non-numeric values that cannot be converted to numbers.
- Dividing zero by zero.
- Parsing an invalid number from a string using parseInt or parseFloat.
- Math operations with undefined or unrepresentable results.

*/


console.log("Type of NaN:", typeof NaN); // "number"

// Invalid arithmetic
console.log("Result of 'hello' * 2:", 'hello' * 2); // NaN

// 0 divided by 0
console.log("0 / 0:", 0 / 0); // NaN

// Math operation with undefined
let undefinedVar;
console.log("undefinedVar + 5:", undefinedVar + 5); // NaN (undefined + number)

// NaN is not equal to itself
console.log("NaN === NaN:", NaN === NaN); // false

// To check if a value is NaN, use isNaN() or Number.isNaN()
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true