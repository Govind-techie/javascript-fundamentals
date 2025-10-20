/*
Async Functions - JavaScript

What are Async Functions?
Async functions are functions declared with the `async` keyword that always return a Promise. They allow you to write asynchronous code that looks and behaves like synchronous code.

Why Async Functions?
Async functions make it easier to work with asynchronous operations by allowing you to use `await` to pause execution until a Promise resolves, resulting in cleaner and more readable code.

Async/Await Syntax:

async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.log("Error occurred:", error);
    }
}

Important Points:
1. `async` makes a function return a Promise automatically.
2. `await` pauses the function execution until a Promise settles (resolved/rejected).
3. The code after `await` runs only when the Promise resolves.
4. Errors are handled using `try...catch`.
5. Async/await provides synchronous-like flow for asynchronous code.

Real-world examples:
  - Fetching data from APIs
  - Reading files
  - Database queries

Quick Note:
Async/await is built on top of Promises and provides a cleaner, more readable syntax.
*/

// The async keyword before a function means it automatically returns a Promise.
// Here, greet() returns a Promise that resolves with the string "Hello!".
async function greet() {
    return "Hello!";  // This value is wrapped in a resolved Promise automatically.
}

// When we log greet(), it doesn't print "Hello!" directly.
// Instead, it logs the Promise object itself because greet() returns a Promise.
console.log(greet()); // Logs: Promise { <state>: "fulfilled", <result>: "Hello!" }

// To access the resolved value ("Hello!"), we use .then() on the Promise returned by greet().
greet()
    .then((result) => {
        // This callback runs when the Promise is fulfilled.
        console.log("Promise fulfilled");
        console.log("result: ", result); // Logs: "Hello!"
    })
    .catch((error) => {
        // This callback runs if the Promise is rejected (error occurs).
        console.log("Promise rejected");
        console.log("error: ", error);
    })