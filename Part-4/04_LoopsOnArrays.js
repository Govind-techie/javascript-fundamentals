/*
Loops and Nested Loops on Arrays - JavaScript

Example 1: Simple for loop on an array
   const numbers = [1, 2, 3, 4];
   for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
   }

 Example 2: for...of loop on an array
   const fruits = ['apple', 'banana', 'cherry'];
   for (const fruit of fruits) {
     console.log(fruit);
   }

 Example 3: Nested loop on a 2D array
   const matrix = [
     [1, 2],
     [3, 4]
   ];
   for (let i = 0; i < matrix.length; i++) {
     for (let j = 0; j < matrix[i].length; j++) {
       console.log(matrix[i][j]);
     }
   }
  Loops are used with arrays to access or process each element efficiently.
  
  Important Notes:
  - Loops help iterate through each element without manually accessing indexes.
  - Nested loops are useful for working with multi-dimensional arrays (matrices).
  - Be cautious with performance, as nested loops can increase time complexity.
  */

 // Example: Sum of elements in an array
 // Loop through the array and calculate the total sum
 const nums = [10, 20, 30];
 let sum = 0;
 for (let i = 0; i < nums.length; i++) {
   sum += nums[i]; // add each element to sum
 }
 console.log("Sum:", sum); // Output: Sum: 60

// Example: Print all elements of a 2D array using nested loops
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  // Outer loop for rows
  for (let j = 0; j < matrix[i].length; j++) {
    // Inner loop for columns
    console.log(matrix[i][j]); // Print each element
  }
}
// Output: 1 2 3 4 5 6 7 8 9

