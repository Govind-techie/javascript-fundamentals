/*
Array Methods - JavaScript

JavaScript arrays have powerful built-in methods for looping, transforming,
filtering, and combining data efficiently.

forEach()
    - Executes a function once for each element.
    - Used for side effects (like printing).
    - Does NOT return a new array.

    Example:
    const arr = [1, 2, 3];
    arr.forEach(num => console.log(num * 2)); // 2, 4, 6

map()
    - Returns a NEW array by applying a function to each element.
    - Commonly used for transforming data.

    Example:
    const doubled = [1, 2, 3].map(num => num * 2);
    console.log(doubled); // [2, 4, 6]

filter()
    - Returns a NEW array of elements that satisfy a condition.

    Example:
    const adults = [12, 18, 25, 10].filter(age => age >= 18);
    console.log(adults); // [18, 25]

some()
    - Checks if at least one element meets a condition.
    - Returns true/false.

    Example:
    console.log([45, 67, 82].some(score => score >= 80)); // true

every()
    - Checks if all elements meet a condition.
    - Returns true/false.

    Example:
    console.log([70, 85, 90].every(mark => mark >= 60)); // true

reduce()
    - Combines all elements into a single value (sum, max, etc.).
    - Syntax: arr.reduce((acc, curr) => ..., initialValue)

Example:
    const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 10

*/

// forEach()

let arr = [1, 2, 3, 4, 5];

// Defining a function that prints the square of a number
function sq(x) {
    console.log(x * x); // Prints square of each element passed
}

// Using forEach() to call sq() function for each element of the array
arr.forEach(sq); 
// forEach() automatically passes each array element to the callback function (sq)
// It simply executes the function for every element without returning anything
// The return value of sq() is ignored since forEach() doesn't store or use it

/*
  NOTE:
  - forEach() works similarly to a for...of loop: it only *accesses* elements, not modifies them.
  - It does NOT change the original array unless you explicitly modify it inside the callback (e.g., arr[i] = ...).
  - It’s mainly used for performing side effects like logging, counting, or updating external variables.
  - If you want to create a NEW array with results (like squared numbers), use map() instead.
*/

// --- 

// map()

let num = [1, 2, 3, 4, 5];

// Using map() to create a NEW array where each element is doubled
let double = num.map((el) => {
    return el * 2; // Each element is multiplied by 2
});

// Using for...of loop to print each element from the new array
for (const element of double) {
    console.log(element); // Prints 2, 4, 6, 8, 10
}

/*
  NOTE:
  - map() does NOT modify the original array; it creates and returns a NEW array.
  - The callback function runs once for each element and its return value is stored in the new array.
  - Unlike forEach(), map() is chainable — meaning you can apply more array methods after it (e.g., filter, reduce).
  - Use map() when you want to transform data and get a new result array.
  - The original array (num) remains unchanged.
*/

// --- 

// filter()

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

// Using filter() to create a NEW array of even numbers
let even = nums.filter((num) => (num % 2 === 0));
// The callback runs for each element and keeps only those that satisfy the condition (num % 2 === 0)
// In this case, it keeps only even numbers

// Printing each element from the filtered array
for (const el of even) {
    console.log(el); // Prints 2, 4, 6, 2, 8
}

/*
  NOTE:
  - filter() creates a NEW array containing only elements that meet a given condition.
  - It does NOT modify the original array.
  - The callback must return true for elements you want to keep, and false for those you want to discard.
  - Commonly used to filter out unwanted data (e.g., even numbers, adults, positive values, etc.).
  - If no elements satisfy the condition, it returns an empty array [].
*/

// ---

// every()

// Creating two arrays — one with all even numbers and one with a mix
let arr2 = [2, 4, 6, 5];
let evenNums = [2, 4, 6, 8];

// Using every() to check if ALL elements in the array are even
console.log(arr2.every((el) => (el % 2 === 0))); // false → because 5 is not even
console.log(evenNums.every((el) => (el % 2 === 0))); // true → all elements are even

/*
  NOTE:
  - every() checks whether ALL elements in the array satisfy the given condition.
  - It returns true only if every element meets the condition; otherwise, it returns false.
  - The method stops checking as soon as it finds the first element that fails the condition (short-circuiting).
  - Commonly used for validation checks — e.g., "Are all users adults?" or "Are all numbers positive?"
  - It does NOT modify the original array.
*/

// ---

// some()

// Creating two arrays — one with all odd numbers and one with a mix
let arr3 = [1, 3, 5, 7];
let mixedNums = [1, 3, 4, 7];

// Using some() to check if AT LEAST ONE element in the array is even
console.log(arr3.some((el) => (el % 2 === 0))); // false → no even numbers present
console.log(mixedNums.some((el) => (el % 2 === 0))); // true → because 4 is even

/*
  NOTE:
  - some() checks if AT LEAST ONE element in the array satisfies the given condition.
  - It returns true as soon as it finds one matching element (short-circuiting).
  - If no elements satisfy the condition, it returns false.
  - Commonly used to test conditions like "Is there any failed student?" or "Does any value exceed 100?"
  - It does NOT modify the original array.
*/

// ---

// reduce()

// Creating an array of numbers
let num2 = [1, 2, 3, 4];

// Using reduce() to calculate the sum of all elements
let res = num2.reduce((acc, el) => acc + el);
// Here:
// acc → accumulator (stores the running total)
// el → current element being processed
// reduce() iterates through the array and combines all elements into one single value

console.log(res); // 10 → (1 + 2 + 3 + 4)

/*
  NOTE:
  - reduce() executes a callback function for each element to "reduce" the array into a single result (sum, product, max, etc.).
  - Syntax: arr.reduce((accumulator, currentValue) => ..., initialValue)
  - The accumulator carries over the result from each iteration.
  - If no initialValue is provided, the first array element is used as the starting accumulator.
  - Commonly used for summing, finding max/min, flattening arrays, or counting occurrences.
  - It does NOT modify the original array.
*/

let num3 = [1,4,5,2,3,7,0,8,9,5];

// Using reduce() to find the maximum number in the array
let max = num3.reduce((max, el) => {
    // Compare each element with the current maximum
    if (max < el) {
        return el; // Update max if current element is larger
    } else {
        return max; // Keep previous max otherwise
    }
});

console.log(max); // 9 → largest number in the array



