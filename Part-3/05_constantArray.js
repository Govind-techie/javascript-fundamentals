/*
Constant Arrays - JavaScript

1. Declaring an array with const:
   - Example: const arr = [1, 2, 3];

2. Important:
   - You CANNOT reassign the whole array:
       const arr = [1, 2, 3];
       arr = [4, 5, 6]; // Error

   - But you CAN modify the elements inside:
       arr[0] = 99;
       arr.push(4);
       console.log(arr); // [99, 2, 3, 4]

3. Why?
   - const prevents reassignment of the variable identifier,
     but the contents of the array (the object in memory) remain mutable.

4. Note:
   - const arrays are still mutable, only the reference is fixed.
   - If you truly need immutability, consider using Object.freeze().
*/

// Example 1: Reassignment (Not Allowed)
const arr1 = [1, 2, 3];
// arr1 = [4, 5, 6]; // Error: Assignment to constant variable
// Note: You cannot reassign a const array to a new array.

// Example 2: Modifying elements (Allowed)
const arr2 = [10, 20, 30];
arr2[0] = 99;      // modify element
arr2.push(40);     // add element
console.log(arr2); // [99, 20, 30, 40]
// Note: Even though the array is declared with const, its contents can still be changed.
