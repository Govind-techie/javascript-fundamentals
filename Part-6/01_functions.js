/*
  Functions - JavaScript


  What is a Function?
  - A function is a block of code designed to perform a particular task.
  - Functions help in reusing code (write once, use multiple times).
  - They make programs more structured, modular, and easy to debug.

  Function Syntax
  function functionName(parameters) {
      // code to be executed
      return value; // optional
  }

  Calling a Function
  - You execute (or "invoke") a function by using its name followed by ().
  Example:
      greet(); // calls the function

  Parameters vs Arguments
  - Parameters → Variables defined in the function definition.
  - Arguments → Actual values passed to the function when calling.

  Types of Functions
  1. Named Functions
     function greet() {
       console.log("Hello, World!");
     }

  2. Functions with Parameters
     function add(a, b) {
       return a + b;
     }

  3. Function Expressions (storing function in a variable)
     const multiply = function(x, y) {
       return x * y;
     };

  4. Arrow Functions (shorter syntax, ES6)
     const square = (n) => n * n;

  5. Anonymous Functions
     - Functions without a name, often used as callbacks.
     Example:
       setTimeout(function() {
         console.log("Hello after 2 seconds");
       }, 2000);

  Default Parameters
  - Provide default values if no argument is passed.
     function greet(name = "Guest") {
       console.log("Hello " + name);
     }

  Return Statement
  - Used to return a value from a function.
  - If no return is specified, the function returns `undefined`.

  Function Scope
  - Variables declared inside a function are local (not accessible outside).


  Key Takeaways:
  - Functions are reusable blocks of code.
  - Use parameters for flexibility.
  - Prefer arrow functions for short, modern syntax.
  - Functions help in writing cleaner and modular code.
*/

// Basic function without parameters
// IMP: Functions must be defined before they are called
function hello(){
    console.log("Hello"); 
}

hello(); // Function invocation (calling)

// Function to demonstrate loop inside a function
// IMP: Functions can contain any valid JavaScript code
function print1to5(){
    for (let i = 1 ; i <= 5 ; i++){
        console.log(i);
    }
}

print1to5();

// Function demonstrating Math object usage and random number generation
// IMP: Math.random() generates number between 0-1, multiply by 6 for dice
function dice(){
    let num = (Math.floor((Math.random() * 6))) + 1; // Adding 1 to get range 1-6
    console.log(`Dice rolling...`);
    console.log(num);
}

dice();

// Function with single parameter demonstration
// IMP: Parameters act as local variables within the function
function isAdult(age){
    if (age >= 18){
        console.log("You are an Adult");
    }else{
        console.log("You are Not an Adult");
    }
}

isAdult(23);
/* IMPORTANT NOTE: 
   - Arguments are the actual values passed to the function
   - They provide the function with specific data to work with
   - Without arguments, functions would behave the same way every time
*/

// Function demonstrating multiple parameters and template literals
// IMP: Parameters are processed in order they are defined
function studentInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

studentInfo("ABC",17); // Both parameters provided
studentInfo("XYZ");    // Missing second parameter
studentInfo(14);       // Number treated as name parameter

/* IMPORTANT NOTE: 
   - When arguments are missing, the parameter becomes 'undefined'
   - JavaScript is loosely typed, so parameters can accept any type
   - Parameters are assigned values in sequential order regardless of type
*/

// Function demonstrating arithmetic operations and Math.floor()
// IMP: Variables declared inside functions are not accessible outside (scope)
function calcAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(`Average: ${Math.floor(avg)}`); // Math.floor removes decimal places
}

calcAvg(100,35,67);
// console.log(avg); => Will throw ReferenceError due to variable scope
// IMP: This demonstrates variable scope - 'avg' only exists inside calcAvg function

// Function demonstrating multiplication table generation
// IMP: Shows how a single parameter can be used to create dynamic output
function printTables(n){
    for (let i = 1 ; i <= 10 ; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}


printTables(7);
/* IMPORTANT NOTE:
   - This function shows how loops and parameters can work together
   - Template literals (${}) make string formatting more readable
   - The function is reusable for any number's multiplication table
*/

// Function demonstrating the 'return' keyword
// IMP: 'return' sends a value back to where the function was called
function sum(a, b){
    return a + b; // The result is sent back, not printed here
}

// Using the returned value
let result = sum(5, 10); 
console.log(`The sum is: ${result}`); // Output will be: The sum is: 15

/* IMPORTANT NOTE:
   - 'return' immediately exits the function and passes the value back
   - Without 'return', the function only performs an action (like console.log) 
     but does not give back a value for further use
   - Returned values can be stored in variables, used in expressions, 
     or passed to other functions
*/

