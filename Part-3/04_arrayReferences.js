/*
Array References - JavaScript

1. Arrays are objects in JavaScript.
   - When you assign an array to another variable, 
     it does NOT create a new array. 
     Instead, both variables reference the SAME array in memory.

2. Example:
     let arr1 = [1, 2, 3];
     let arr2 = arr1; // arr2 references the same array
     arr2.push(4);

     console.log(arr1); // [1, 2, 3, 4]
     console.log(arr2); // [1, 2, 3, 4]

   - Notice how changing arr2 also changed arr1.

3. To create a true copy of an array:
   - Use slice():
       let copy = arr1.slice();
   - Use spread syntax:
       let copy = [...arr1];
   - Use Array.from():
       let copy = Array.from(arr1);

   These methods create a shallow copy (suitable for primitive elements).

4. Important:
   - A shallow copy only copies the first level. 
     Nested arrays or objects inside will still be referenced.
*/


// Example 1: Reference assignment
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
// Note: Both arr1 and arr2 reference the same array in memory, so changes to one affect the other.

// Example 2: Creating a shallow copy using slice()
let copy1 = arr1.slice();
copy1.push(5);

console.log(arr1);  // [1, 2, 3, 4]
console.log(copy1); // [1, 2, 3, 4, 5]
// Note: slice() creates a new array, so arr1 is unaffected by changes to copy1.

// Example 3: Using spread syntax
let copy2 = [...arr1];
copy2.push(6);

console.log(arr1);  // [1, 2, 3, 4]
console.log(copy2); // [1, 2, 3, 4, 6]
// Note: spread syntax also creates a shallow copy (only top-level elements are copied).

// Example 4: Using Array.from()
let copy3 = Array.from(arr1);
copy3.push(7);

console.log(arr1);  // [1, 2, 3, 4]
console.log(copy3); // [1, 2, 3, 4, 7]
// Note: Array.from() creates a shallow copy, same as slice() or spread.

// Example 5: Shallow copy limitation with nested arrays
let nestedArr = [[1, 2], [3, 4]];
let shallowCopy = nestedArr.slice();

shallowCopy[0].push(99);

console.log(nestedArr);   // [[1, 2, 99], [3, 4]]
console.log(shallowCopy); // [[1, 2, 99], [3, 4]]
// Note: The inner arrays are still shared (shallow copy).
