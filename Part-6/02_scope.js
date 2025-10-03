/* 
  Scope - JavaScript

  Scope in JavaScript refers to the current context of code, which determines
  the accessibility or visibility of variables and functions at various parts
  of the code during runtime. Understanding scope is crucial as it helps in
  managing variable lifetimes, avoiding naming conflicts, and writing clean,
  maintainable code.
  
  There are several main types of scope in JavaScript:
  
  1. Global Scope:
     Variables declared outside any function or block have global scope.
     They are accessible from anywhere in the code.
 
 2. Function Scope:
     Variables declared within a function are only accessible inside that function.
     Each function creates a new scope.
  
  3. Block Scope:
     Introduced with ES6, variables declared with let or const inside a block (e.g., inside curly braces {})
     are only accessible within that block.
  
  4. Lexical Scope:
     Also known as static scope, this means that the scope of a variable is determined by its physical
     location in the source code. Inner functions have access to variables declared in their outer scope. 
*/

let sum = 54; // Global scope: This variable 'sum' is declared outside any function or block, so it is accessible throughout the entire script.

function calcSum(a,b){
    // Function scope: The variable 'sum' declared here is local to this function and shadows the global 'sum' variable.
    let sum = a+b; // This 'sum' exists only within calcSum and holds the sum of parameters a and b.
    console.log(sum); // Prints the locally scoped sum value within the function.
    // Note: Variables declared with function scope are not accessible outside the function, but global variables remain accessible inside the function.
}

calcSum(1,2);
console.log(sum) // Output: 54; This logs the global 'sum' variable because the local 'sum' inside calcSum is not accessible outside the function.


// Block Scope Example:
// The variable 'a' is declared with 'let' inside this block, so it is block-scoped.
// This means 'a' only exists and is accessible within the curly braces below.
{
    let a = 25; // 'a' is only accessible inside this block.
}

// Trying to access 'a' outside its block will result in a ReferenceError,
// because 'a' is not defined in this (global) scope.
console.log(a); // ReferenceError: a is not defined


function outerFunc(){
    // 'x' is declared in the outer function scope.
    let x = 5;

    function innerFunc(){
        // 'y' is declared inside innerFunc and is local to this inner function.
        let y = 2;

        // Due to lexical scope, innerFunc has access to variables declared in its outer scope,
        // so it can access and log 'x'.
        console.log(x);
    }

    // Trying to access 'y' here will cause a ReferenceError because 'y' is not defined in this scope.
    // 'y' is local to innerFunc and not accessible in outerFunc.
    console.log(y); // ReferenceError: y is not defined

    // Call innerFunc to demonstrate access to 'x'.
    innerFunc();
}

// Calling outerFunc will throw a ReferenceError at console.log(y) inside it.
outerFunc();
