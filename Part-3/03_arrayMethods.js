/*
JavaScript Array Methods

1. push()
   - Adds one or more elements to the end of the array.
   - Returns the new length of the array.
   Example:
     let arr = [1, 2];
     arr.push(3); // [1, 2, 3]

2. pop()
   - Removes the last element from the array.
   - Returns the removed element.
   Example:
     let arr = [1, 2, 3];
     arr.pop(); // returns 3, array becomes [1, 2]

3. unshift()
   - Adds one or more elements to the beginning of the array.
   - Returns the new length of the array.
   Example:
     let arr = [2, 3];
     arr.unshift(1); // [1, 2, 3]

4. shift()
   - Removes the first element from the array.
   - Returns the removed element.
   Example:
     let arr = [1, 2, 3];
     arr.shift(); // returns 1, array becomes [2, 3]

5. indexOf()
   - Returns the first index at which a given element is found.
   - Returns -1 if the element is not found.
   Example:
     let arr = ["a", "b", "c", "b"];
     arr.indexOf("b"); // 1
     arr.indexOf("z"); // -1

6. includes()
   - Checks if an array contains a certain element.
   - Returns true if found, false otherwise.
   Example:
     let arr = ["a", "b", "c"];
     arr.includes("b"); // true
     arr.includes("z"); // false

7. concat()
   - Merges two or more arrays into a new array.
   - Does NOT change the existing arrays.
   Example:
     let arr1 = [1, 2];
     let arr2 = [3, 4];
     let merged = arr1.concat(arr2); // [1, 2, 3, 4]

8. reverse()
   - Reverses the order of elements in the array.
   - Mutates (changes) the original array.
   Example:
     let arr = [1, 2, 3];
     arr.reverse(); // [3, 2, 1]

9. slice()
   - Returns a shallow copy of a portion of an array into a new array.
   - Does NOT modify the original array.
   - Takes two arguments: slice(startIndex, endIndex)
     → startIndex = starting position (inclusive)
     → endIndex = ending position (exclusive)
   Example:
     let arr = [10, 20, 30, 40, 50];
     let sliced = arr.slice(1, 4); // [20, 30, 40]

10. splice()
   - Changes the contents of an array by removing, replacing, or adding elements.
   - Mutates (changes) the original array.
   - Syntax: splice(startIndex, deleteCount, item1, item2, ...)
   Example:
     let arr = [1, 2, 3, 4, 5];
     arr.splice(2, 2, "x", "y"); 
     // removes 2 elements starting at index 2 → [3, 4]
     // inserts "x" and "y" → result: [1, 2, "x", "y", 5]

11. sort()
   - Sorts the elements of an array in place (mutates the original array).
   - By default, it converts elements to strings and sorts them lexicographically.
   - Can take a compare function for numeric or custom sorting.
   Example:
     let arr = [3, 1, 20, 10];
     arr.sort(); // [1, 10, 20, 3] (lexicographic, not numeric!)
     arr.sort((a, b) => a - b); // [1, 3, 10, 20] (numeric ascending)
*/

let carBrands = ["Audi", "BMW", "Ferrari"];

// --- push() ---
// Adds one or more elements to the END of the array.
// Returns: the new length of the array.
carBrands.push("Lamborghini");
carBrands.push("Toyota");
console.log(carBrands); // ["Audi", "BMW", "Ferrari", "Lamborghini", "Toyota"]

// Note: push() mutates (changes) the original array.

// --- pop() ---
// Removes the LAST element from the array.
// Returns: the removed element.
let removedBrand = carBrands.pop();
console.log(removedBrand); // "Toyota"
console.log(carBrands);    // ["Audi", "BMW", "Ferrari", "Lamborghini"]

// --- unshift() ---
// Adds one or more elements to the BEGINNING of the array.
// Returns: the new length of the array.
let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]

// Note: unshift() is less efficient than push()
// because all existing elements must be shifted to the right.

// --- shift() ---
// Removes the FIRST element from the array.
// Returns: the removed element.
let firstNumber = numbers.shift();
console.log(firstNumber);  // 1
console.log(numbers);      // [2, 3]

// Note: shift() also mutates the original array, just like pop().

// --- indexOf() ---
// Returns the FIRST index where a given element is found.
// If the element is NOT found, it returns -1.
let colors = ["red", "blue", "yellow", "orange", "green"];
// indexes:     0       1        2         3         4

console.log(colors.indexOf("orange")); // 3 (found at index 3)
console.log(colors.indexOf("purple")); // -1 (not found)

// Note: indexOf() is case-sensitive → "Red" and "red" are different.

// --- includes() ---
// Checks if an array contains a specific element.
// Returns: true if found, false otherwise.
console.log(colors.includes("purple")); // false
console.log(colors.includes("yellow")); // true

// Note: includes() is also case-sensitive → "Blue" !== "blue".

// --- concat() ---
// Used to merge two or more arrays into a NEW array.
// Does NOT change the original arrays.
let fruits = ["apple", "banana"];
let moreFruits = ["mango", "orange"];
let allFruits = fruits.concat(moreFruits);

console.log(allFruits); // ["apple", "banana", "mango", "orange"]
console.log(fruits);    // ["apple", "banana"] (unchanged)

// Note: concat() creates a shallow copy → nested objects/arrays are not deeply cloned.

// --- reverse() ---
// Reverses the order of elements in an array.
// Mutates (changes) the original array.
let numbersList = [1, 2, 3, 4, 5];
numbersList.reverse();

console.log(numbersList); // [5, 4, 3, 2, 1]

// Note: reverse() is destructive → it modifies the array in place.

// --- slice() ---
// Extracts a portion of an array and returns it as a NEW array.
// Original array remains unchanged.
let nums = [10, 20, 30, 40, 50];
let part = nums.slice(1, 4);

console.log(part); // [20, 30, 40]
  
// Example with negative indexes:
let lastTwo = nums.slice(-2);
console.log(lastTwo); // [40, 50]

console.log(nums); // [10, 20, 30, 40, 50] (unchanged)

// Note: slice() is useful for copying arrays or subarrays without mutating the original.


// --- splice() ---
// Removes, replaces, or adds elements in an array.
// Mutates (changes) the original array.
let letters = ["a", "b", "c", "d", "e"];

// Remove 2 elements starting at index 1
let removed = letters.splice(1, 2);
console.log(letters); // ["a", "d", "e"]
console.log(removed); // ["b", "c"]

// Insert elements at index 1
letters.splice(1, 0, "x", "y");
console.log(letters); // ["a", "x", "y", "d", "e"]

// Replace elements at index 2
letters.splice(2, 1, "z");
console.log(letters); // ["a", "x", "z", "d", "e"]

// Note: splice() is versatile but always modifies the original array.

// --- sort() ---
// Sorts the elements of an array.
// Mutates (changes) the original array.

let days = ["Monday", "Wednesday", "Friday", "Tuesday", "Thursday"];
days.sort();

console.log(days); // ["Friday", "Monday", "Thursday", "Tuesday", "Wednesday"]

// Note: sort() converts elements to strings and sorts them lexicographically by default.
// For numbers or custom order, always use a compare function.

// Example with numbers
let numsArray = [30, 4, 100, 25, 9];

// Default sort() → sorts as strings (lexicographic order)
numsArray.sort();
console.log(numsArray); // [100, 25, 30, 4, 9]

// Correct numeric sort (ascending)
numsArray.sort((a, b) => a - b);
console.log(numsArray); // [4, 9, 25, 30, 100]

// Numeric sort (descending)
numsArray.sort((a, b) => b - a);
console.log(numsArray); // [100, 30, 25, 9, 4]

// Note: Always provide a compare function when sorting numbers to avoid unexpected results.
