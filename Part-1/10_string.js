/*
Strings - JavaScript

1. String Declaration:
   ✓ Using single quotes:    let str = 'Hello';
   ✓ Using double quotes:    let str = "Hello";
   ✓ Using backticks:        let str = `Hello`;

2. String Indices:
   • Characters in strings are indexed from 0
   • Each character has a position (index)
   Example:
   let text = "Hello";
   // H  e  l  l  o
   // 0  1  2  3  4

3. Accessing Characters:
   ✓ Using bracket notation:  str[0]     // first character
   ✓ Using charAt():         str.charAt(0)
   Note: Trying to access an index beyond string length returns undefined

4. Common Mistakes to Avoid:
   ✗ Don't mix quote types:  let str = 'Hello";    // Wrong
   ✗ Don't use \ for line breaks without escape:
     let str = "Hello
     World";                 // Wrong
   ✗ Don't try to modify individual characters:
     str[0] = 'h';          // Won't work (strings are immutable)

5. Best Practices:
   ✓ Use single quotes consistently unless needed otherwise
   ✓ Use template literals for string interpolation
   ✓ Use proper escaping for special characters
   
6. String Length:
   • Access using length property
   let str = "Hello";
   console.log(str.length);  // Output: 5

7. Escape Characters:
   \' - single quote
   \" - double quote
   \n - new line
   \t - tab
   \\ - backslash

Example Usage:
let name = "Alice";
console.log(name[0]);        // Output: A
console.log(name.length);    // Output: 5
console.log(name[name.length - 1]); // Output: e (last character)
*/


// 1. Basic String Declaration
let firstName = 'John';              // using single quotes
let lastName = "Doe";                // using double quotes
let fullName = `John Doe`;          // using backticks

// 2. String with Quotes Inside
let text1 = 'He said "Hello!"';     // use single quotes to wrap double quotes
let text2 = "It's a nice day";      // use double quotes to wrap apostrophe
let text3 = `He said "It's nice"`; // backticks can contain both

// 3. String Indexing
let word = "HELLO";
console.log(word[0]);               // Output: H (first character)
console.log(word[4]);               // Output: O (last character)
console.log(word.charAt(1));        // Output: E (alternative way)

// 4. Template Literals (String Interpolation)
let price = 10;
let quantity = 5;
let total = `Total: $${price * quantity}`; // Output: Total: $50

// 5. String Length
let str = "JavaScript";
console.log(str.length);            // Output: 10
console.log(str[str.length - 1]);   // Output: t (last character)

// 6. Multiline Strings
let multiline = `
    First line
    Second line
    Third line
`;

// 7. Common String Operations
let email = "user@example.com";
console.log(email.toUpperCase());   // Output: USER@EXAMPLE.COM
console.log(email.includes("@"));   // Output: true
console.log(email.split("@"));      // Output: ['user', 'example.com']
