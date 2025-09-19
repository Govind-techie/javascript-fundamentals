/*
Identifier Rules: 

All JavaScript variables must be identified with unique names (identifiers).

• Names can contain letters, digits, underscores, and dollar signs. (no space)
• Names must begin with a letter.
• Names can also begin with $ and _.
• Names are case sensitive (y and Y are different variables).
• Reserved words (like JavaScript keywords) CANNOT be used as names.
• Unicode letters (like α or β) can be used, but not recommended
• Numbers cannot be used as the first character
• Names should be meaningful and descriptive (e.g., firstName instead of x)
• No hyphens (-) allowed in names
*/

// Valid identifiers
let firstName = "ABC";
console.log(firstName); // Output: ABC

let $amount = 100;
console.log($amount); // Output: 100

let _value = 50;
console.log(_value); // Output: 50

let name123 = "Alice";
console.log(name123); // Output: Alice

let α = "alpha";
console.log(α); // Output: alpha (Unicode letter, valid but not recommended)

// Invalid identifiers examples (will cause syntax errors if uncommented)
// let 123name = "Bob"; // Invalid: cannot start with a number
// let first-name = "John"; // Invalid: hyphens are not allowed
// let var = 10; // Invalid: 'var' is a reserved keyword
// let my name = "Jane"; // Invalid: spaces are not allowed

console.log("Identifiers must not start with numbers, contain spaces or hyphens, or be reserved words.");