/*
Arrow Functions in JavaScript:

- Arrow functions provide a shorter syntax for writing function expressions.
- They do not have their own `this`, `arguments`, `super`, or `new.target`.
- The value of `this` inside an arrow function is lexically bound, meaning it uses `this` from the surrounding code context.
- Arrow functions cannot be used as constructors and will throw an error if used with `new`.
- They are commonly used for callbacks and concise one-line functions.
*/

// Single-line return
const add = (a, b) => a + b;

// Multi-line return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Arrow function with no parameters
const greet = () => console.log("Hello!");

// Arrow function with a single parameter that implicitly returns the square (no parentheses around the parameter)
const square = x => x * x;

// Arrow function used as a callback with forEach
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));


// Understanding `this` in Arrow Functions vs Regular Functions

const obj = {
  value: 42,
  // Regular function method: `this` refers to the object itself
  regularFunction: function() {
    console.log("Regular function 'this.value':", this.value);
  },
  // Arrow function method: `this` does NOT refer to the object,
  // but inherits `this` from the surrounding lexical scope (likely global or undefined in strict mode)
  arrowFunction: () => {
    console.log("Arrow function 'this.value':", this.value);
  }
};

obj.regularFunction(); // Logs: 42
obj.arrowFunction();   // Logs: undefined (or global value if exists)

// Note: Arrow functions are not suitable as methods when you need `this` to refer to the object itself.
