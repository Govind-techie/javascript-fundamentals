/*
JavaScript Arrays

 What is an Array?
   - An ordered collection of values stored in a single variable.
   - Can hold numbers, strings, objects, functions, or even other arrays.

 Array Creation:
   let arr = [1, 2, 3, 4];
   let fruits = new Array("apple", "banana", "mango");

 Indexing:
   - Arrays are zero-based.
   - arr[0] → first element
   - arr[arr.length - 1] → last element

 Common Properties:
   - arr.length → returns number of elements

 Common Methods:
   - push() → add at end
   - pop() → remove from end
   - unshift() → add at start
   - shift() → remove from start
   - indexOf() → find index of element
   - includes() → check if element exists
   - slice() → extract portion (does not modify original)
   - splice() → add/remove elements (modifies original)
   - concat() → merge arrays
   - join() → convert array to string
   - forEach() / map() / filter() / reduce() → iterate & transform

 Array Types:
   - Nested arrays (multi-dimensional arrays)
   - Sparse arrays (arrays with empty slots)

 Note:
   - Arrays in JS are dynamic (size can change).
   - Elements can be of mixed types.
*/

// Array Initialization
let arr = ["abc" , "pqr" , "lmn" , "xyz"];
// Index:    0       1       2       3

// Note: Arrays in JavaScript use 0-based indexing.
// This means the first element is at index 0, and the last element is at index (length - 1).

// Accessing elements in the array:
console.log(arr[0]); // "abc"
console.log(arr[1]); // "pqr"
console.log(arr[2]); // "lmn"
console.log(arr[3]); // "xyz"

// In JavaScript, arrays are dynamic.
// - You can add, remove, or update elements at runtime using various methods.
// - There's no need to define a fixed size, as arrays automatically resize themselves.
// - This flexibility also helps optimize memory usage.

// In JavaScript, arrays can hold values of different data types within the same array.
let arr2 = ["abc" , 32 , 56.7 , true];

// Empty Array
// - Contains no elements initially.
// - Its length is 0.

let emptArr = [];

// Empty arrays are often used as placeholders to store values at runtime.
// Elements can be added later using array methods.


// Arrays are mutable
// - Mutability means the content of an array can be changed after it is created.
// - We can update, add, or remove elements without creating a new array reference.

let fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]

// Updating an element
fruits[1] = "orange"; 
console.log(fruits); // ["apple", "orange", "mango"]

// Adding a new element (beyond current length)
fruits[3] = "grapes"; 
console.log(fruits); // ["apple", "orange", "mango", "grapes"]

// Removing an element using splice()
fruits.splice(2, 1); // removes 1 element at index 2
console.log(fruits); // ["apple", "orange", "grapes"]

// Note: The original array gets modified directly, proving arrays are mutable.

