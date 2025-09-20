/*
  Truthy and Falsy Values - JavaScript

  In JavaScript, every value is either truthy or falsy when evaluated
  in a Boolean context (like inside an 'if' condition).

  Falsy Values (only 7 in total):
    1. false
    2. 0
    3. -0
    4. 0n  (BigInt zero)
    5. ""  (empty string)
    6. null
    7. undefined
    8. NaN

  Truthy Values:
    - Everything else that is NOT falsy.
    - Examples: "hello", 42, -7, [], {}, function(){}, "0", "false"

  Quick Tip:
    - Use truthy/falsy checks for concise conditions.
    - Example:
        if ("hello") { console.log("This runs"); }
        if ("") { console.log("This won't run"); }

 */
       
// Example: Falsy Values
if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy"); // This will run
}

if ("") {
  console.log("Empty string is truthy");
} else {
  console.log("Empty string is falsy"); // This will run
}

if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy"); // This will run
}

// Example: Truthy Values
if ("hello") {
  console.log("'hello' is truthy"); // This will run
}

if (42) {
  console.log("42 is truthy"); // This will run
}

if ([]) {
  console.log("[] (empty array) is truthy"); // This will run
}

if ({}) {
  console.log("{} (empty object) is truthy"); // This will run
}
