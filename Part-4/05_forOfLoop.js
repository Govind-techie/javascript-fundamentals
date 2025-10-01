/*
  for...of Loop in JavaScript
 
  Syntax:
    for (const element of iterable) {
        // code block to execute
    }
 
  Explanation:
    The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, maps, sets, etc.
 
  Example 1: Iterating over an array
    const numbers = [1, 2, 3];
    for (const num of numbers) {
        console.log(num);
    }
    // Output: 1 2 3
 
  Example 2: Iterating over a string
    const word = "hello";
    for (const char of word) {
      console.log(char);
    }
    // Output: h e l l o
 
  Important Notes:
  - for...of gives values directly, unlike for...in which gives keys or indexes.
  - Simplifies working with arrays, strings, and other iterable objects.
  - Not meant for iterating over plain objects (use for...in or Object.keys() instead).
*/

// Example: for...of with an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana cherry

// Example: for...of with a string
const greeting = "Hello";
for (const char of greeting) {
  console.log(char);
}
// Output: H e l l o

// Example: for...of with numbers in an array
const nums = [10, 20, 30];
for (const num of nums) {
  console.log(num);
}
// Output: 10 20 30


// Example: Nested for...of loops with a 2D array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (const row of matrix) {
  // row is each inner array
  for (const value of row) {
    console.log(value); // Print each value inside the row
  }
}
// Output: 1 2 3 4 5 6 7 8 9

