/*
Nested Arrays - JavaScript

1. A nested array is simply an array inside another array.
   Example: let arr = [[1, 2], [3, 4], [5, 6]];

2. Accessing elements:
   - Use multiple indexes to access elements.
     console.log(arr[0][1]); // 2
     console.log(arr[2][0]); // 5

3. Updating elements:
   - You can directly update nested elements.
     arr[1][1] = 99;
     console.log(arr); // [[1, 2], [3, 99], [5, 6]]

4. Important:
   - Nested arrays can go multiple levels deep, but 
     readability and maintainability decrease with deep nesting.
   - In practice, objects or other data structures are often preferred
     when handling complex data.
*/

// Example: Working with a nested array
let arr = [[1, 2], [3, 4], [5, 6]];

console.log(arr); // [[1, 2], [3, 4], [5, 6]]

// Accessing nested elements
console.log(arr[0][1]); // 2
console.log(arr[2][0]); // 5

// Updating a nested element
arr[1][1] = 99;
console.log(arr); // [[1, 2], [3, 99], [5, 6]]

// Note: Nested arrays are powerful but can reduce readability if deeply nested.
