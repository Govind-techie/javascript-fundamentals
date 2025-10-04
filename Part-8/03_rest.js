/*
  Rest Parameter - JavaScript
 
  Purpose:
    The rest parameter allows a function to accept an indefinite number of arguments as an array.
 
  Syntax:
    function funcName(...restParam) { }
 
  Example:
    function sum(...numbers) {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3)); // Output: 6
 
  Note:
    The rest parameter must be the last parameter in the function definition.
*/

function print(...args){
    // args is an array containing all arguments passed to the function
    for (let i = 0 ; i < args.length ; i++){
        console.log(`Arguments Passed: ${args[i]}`); // Print each argument
    }
}

// Function calls with different types of arguments
print(1);          // Output: Arguments Passed: 1
print("Hello");    // Output: Arguments Passed: Hello
print(45.6);       // Output: Arguments Passed: 45.6
print(true);       // Output: Arguments Passed: true

/*
  NOTE:
  - The rest parameter (...args) collects all passed arguments into a single array.
  - Useful when the number of function arguments is unknown or variable.
  - args can contain any data type: numbers, strings, booleans, objects, etc.
  - You can iterate over args using loops (for, for...of) or array methods (forEach, map).
  - The rest parameter must always be the last parameter if there are other named parameters.
*/

