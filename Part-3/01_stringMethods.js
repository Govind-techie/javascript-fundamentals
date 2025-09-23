/* 
String Methods - Javascript

1. length
   - Returns the number of characters in a string.
   Example: 
     let str = "Hello";
     console.log(str.length); // 5

2. toUpperCase() / toLowerCase()
   - Converts the string to uppercase or lowercase.
   Example: 
     console.log(str.toUpperCase()); // "HELLO"

3. slice(start, end)
   - Extracts a part of the string from start to end (end not included).
   Example: 
     console.log(str.slice(0, 3)); // "Hel"

4. replace(searchValue, newValue)
   - Replaces the first occurrence of searchValue with newValue.
   Example: 
     console.log(str.replace("Hello", "Hi")); // "Hi"

5. includes(substring)
   - Checks if the string contains a given substring; returns true/false.
   Example: 
     console.log(str.includes("lo")); // true

6. trim()
   - Removes whitespace from both ends of the string.
   Example: 
     let str2 = "   Hello   ";
     console.log(str2.trim()); // "Hello"

NOTE:
- Strings are immutable in JS. Methods return a **new string**; original string remains unchanged.
*/

// trim()
let str = "  ABC  "; // Original string with spaces
let newStr = str.trim(); // trim() removes spaces from both ends

console.log(newStr); // Output: 'ABC' (spaces removed)
console.log(str); // Output: '  ABC  ' (original string unchanged)

// Note: Strings are immutable in JavaScript.
// Therefore, all string methods returns a new string with changes; it does NOT modify the original string.

// ---

// toUpperCase() / toLowerCase() Example
let str2 = "random string";             // Original string

let upperCaseString = str2.toUpperCase(); // Converts all letters to uppercase
let lowerCaseString = str2.toLowerCase(); // Converts all letters to lowercase

console.log(upperCaseString); // Output: "RANDOM STRING"
console.log(lowerCaseString); // Output: "random string"

// Note: Original string (str2) remains unchanged as strings are immutable in JavaScript.

// ---


/* 
STRING METHODS WITH ARGUMENTS

- A string method with arguments is a method that requires one or more inputs (arguments) to perform its task.
- An argument is a value you pass to a method to control or modify its behavior.
- Arguments are used in methods to specify things like positions, substrings, or replacement values.

Example:
slice(start, end) uses start and end as arguments to extract a portion of the string.
replace(searchValue, newValue) uses arguments to know what to replace and with what.
*/

// --- 

// indexOf()

let msg = "I love Coding"; // Original string
console.log(msg.indexOf('love')); // Returns the index where 'love' starts (2)

// Note: 
// - indexOf() returns the position of the first character of the specified substring.
// - If the substring is not found, it returns -1. 
// - Note: indexOf() is case-sensitive, so 'Love' and 'love' would be treated differently.

// ---

/*
Method Chaining
- Calling multiple methods on the same string (or value) in a single line.
- Each method returns a new string, which allows the next method to be applied.
*/

let s = "   hello world  ";
let res = s.trim().toUpperCase();
console.log(res); // Output: HELLO WORLD

// --- 

// slice(start, end)
// - Extracts part of the string from `start` index up to (but not including) `end` index.
// - If `end` is not provided, it extracts till the end of the string.

let msg2 = "IloveJavascript";

console.log(msg2.slice(1, 5)); // Output: "love" (from index 1 to 4, end is exclusive)
console.log(msg2.slice(5));    // Output: "Javascript" (from index 5 to end of string)

// Negative indices: count from the end of the string
console.log(msg2.slice(-6));     // Output: "Script" (last 6 characters)
console.log(msg2.slice(-10, -6)); // Output: "Java" (from 10th last to 6th last character)

// --- 

// replace(searchValue, newValue)
// - Replaces the first occurrence of searchValue with newValue.
// - To replace all occurrences, use a regular expression with the global flag (/g).

let text = "I like JavaScript. JavaScript is fun!";
let replacedOnce = text.replace("JavaScript", "Python");
console.log(replacedOnce); 
// Output: "I like Python. JavaScript is fun!" (only first occurrence replaced)

let replacedAll = text.replace(/JavaScript/g, "Python");
console.log(replacedAll); 
// Output: "I like Python. Python is fun!" (all occurrences replaced)

// Note: replace() does not change the original string, it returns a new one.

// ---

// repeat(count)
// - Returns a new string with the original string repeated `count` times.

let word = "Hi! ";
let repeated = word.repeat(3);
console.log(repeated); 
// Output: "Hi! Hi! Hi! "

// Additional case: using repeat() with an empty string or 0
console.log("Test".repeat(0));   // Output: "" (empty string)
console.log("X".repeat(5));      // Output: "XXXXX"

// Note: 
// - repeat() must have a non-negative integer count.
// - If count is 0, it returns an empty string.

