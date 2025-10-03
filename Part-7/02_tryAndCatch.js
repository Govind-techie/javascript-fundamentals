/*
Try & Catch Statement - Javascript

  The `try...catch` statement in JavaScript is used to handle runtime errors gracefully without stopping the execution of a program.
  
  - Definition:
    `try...catch` allows you to test a block of code for errors (try block) and handle those errors (catch block) if they occur.

  - Purpose:
    It is mainly used to catch exceptions that may be thrown during the execution of code, preventing the program from crashing.
  
  - Structure:
    The `try` block contains code that may throw an error.
    The `catch` block contains code that executes if an error is thrown in the try block.
  
  - Optional `finally` block:
    This block executes after try and catch, regardless of whether an error was thrown or caught.
    It is typically used for cleanup code.
  
 - Syntax:
     try {
         // Code that may throw an error
     } catch (error) {
         // Code to handle the error
     } finally {
         // Code that runs regardless of error occurrence
     }
  
  - Example scenarios:
    - Parsing invalid JSON data can throw an error, which can be caught using try...catch.
    - Handling runtime errors like accessing properties of undefined variables.
  
  - Important notes:
    - `try...catch` only works for synchronous code.
    - It will not catch errors thrown inside asynchronous callbacks unless those callbacks themselves use try...catch.
*/

// Attempting to access an undefined variable which will throw a ReferenceError
try { // Note: If no error occurs in the try block, the catch block is skipped entirely
    console.log(a);
} catch (err) {
    // The error is caught and handled here, preventing the program from crashing
    // 'err' is the error object automatically passed when an error is thrown
    // It contains details about the error such as its type and message
    console.log(`Error: ${err}`);
}

// Note:
// Using try...catch is important to handle errors gracefully without stopping the execution of the entire script.
// Without try...catch, the ReferenceError thrown by accessing an undefined variable would stop the script execution.

