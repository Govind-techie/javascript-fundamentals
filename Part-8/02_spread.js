/*
Spread Operator - JavaScript

The spread operator (...) allows an iterable (like an array or object) 
to be expanded into individual elements or key-value pairs.

Arrays
    - Copying arrays
       const arr1 = [1, 2, 3];
       const arr2 = [...arr1];
       console.log(arr2); // [1, 2, 3]

    - Merging arrays
       const arr3 = [4, 5];
       const merged = [...arr1, ...arr3];
       console.log(merged); // [1, 2, 3, 4, 5]

    - Passing array elements as function arguments
       function sum(a, b, c) { return a + b + c; }
       console.log(sum(...arr1)); // 6

Objects
    - Copying objects
       const obj1 = { x: 1, y: 2 };
       const obj2 = { ...obj1 };
       console.log(obj2); // { x: 1, y: 2 }

    - Merging objects
       const obj3 = { z: 3 };
       const mergedObj = { ...obj1, ...obj3 };
       console.log(mergedObj); // { x: 1, y: 2, z: 3 }

NOTE:
  - The spread operator creates shallow copies, not deep copies.
  - It's commonly used to copy, merge, or expand arrays and objects easily.
*/

// Example1
let arr = [3,4,2,6,7,1,5,0,8,5,6,10,6,2,-1,-3,4,-5,7,9];

// Using spread operator with Math.min to find the minimum value in the array
let min = Math.min(...arr);
console.log(min); // -5 → smallest number in the array

/*
  NOTE:
  - The spread operator (...) expands the array elements so Math.min can evaluate them individually.
  - This is a clean way to find min or max values without using loops.
*/

// Example2 (Array Literals)
let original = [1, 2, 3];
let copy = [...original, 4, 5]; // spread operator copies original and adds new elements
console.log(copy); // [1, 2, 3, 4, 5]

/*
  NOTE:
  - The spread operator creates a shallow copy of the original array.
  - You can also add new elements while copying, merge multiple arrays, or pass elements as arguments.
  - It simplifies array manipulation and avoids manual looping.
*/

// Example3 (Object Literals)

const data = {
    gmail: "abc@gmail.com",
    password: "abc123//"
}

// Copy object and add new property
let dataInfo = { ...data, id: 123 };
console.log(dataInfo); 
// Output: { gmail: 'abc@gmail.com', password: 'abc123//', id: 123 }

/*
NOTE:
- Copies all existing properties of 'data' into a new object.
- You can add or override properties while copying.
- Creates a shallow copy; nested objects are still referenced.
*/

let arr2 = [1, 2, 3, 4, 5];

// Spread array into object → keys are indices
let obj1 = { ...arr2 };
console.log(obj1); 
// Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

/*
NOTE:
- Each array index becomes a key, element becomes the value.
- Useful to map array elements into key-value pairs.
*/

let str = "Hello";

// Spread string into object → keys are character indices
let obj2 = { ...str };
console.log(obj2); 
// Output: { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

/*
NOTE:
- Each character is assigned to a key corresponding to its index.
- Works similarly to arrays, creating a key-value structure for each element.
*/
