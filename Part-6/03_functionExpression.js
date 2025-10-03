/* 
  ================================
  Function Expressions - JavaScript
  ================================

  1. What is a Function Expression?
     - A function expression is when you create a function and assign it to a variable.
     - Unlike function declarations, function expressions are NOT hoisted, 
       meaning you cannot call them before they are defined.

  2. Syntax:
     - A function can be stored in a variable, object, or even passed as an argument.
     - General form:
          const variableName = function(parameters) {
              // code block
          };

  3. Types of Function Expressions:
     - Anonymous Function Expression:
          const greet = function() {
              console.log("Hello!");
          };

     - Named Function Expression (useful for debugging):
          const greet = function sayHello() {
              console.log("Hello!");
          };

  4. Key Differences from Function Declarations:
     - Function declarations are hoisted (can be called before they appear in code).
     - Function expressions are not hoisted (must be defined before calling).
  
  5. Use Cases:
     - Useful when passing functions as arguments (callbacks).
     - Used in event listeners, setTimeout, etc.
     - Forms the foundation for higher-order functions.

  ----------------
  Example Code:
  ----------------
*/

// Anonymous Function Expression
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // Output: 5

// Named Function Expression
const multiply = function multiplyNums(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20