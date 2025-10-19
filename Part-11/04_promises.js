/* 
Promises - JavaScript

What is a Promise?
A Promise in JavaScript is an object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value. It acts as a placeholder for a value
that will be available in the future.

Why Promises?
Before Promises, developers relied on nested callbacks to handle asynchronous tasks,
which led to "Callback Hell" — deeply nested and hard-to-read code.
Promises solve this problem by providing a cleaner, chainable way to handle async flows.

Promise States:
1. Pending   → The initial state (operation not yet completed).
2. Fulfilled → The operation completed successfully (resolved).
3. Rejected  → The operation failed (error occurred).

Promise Syntax:
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    if (success) resolve("Data received");
    else reject("Error occurred");
});

Consuming a Promise:
promise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Failed:", error);
    })
    .finally(() => {
        console.log("Execution completed.");
    });

Why use Promises:
- Avoids callback hell by flattening async chains
- Makes code more readable and structured
- Integrates seamlessly with async/await syntax

Real-world examples:
- Fetching data from an API
- Reading files
- Timers and asynchronous computations

Quick Note:
Promises are the foundation for async/await syntax. Once you understand Promises deeply,
async/await will feel natural — it’s just syntactic sugar over Promises.
*/

// Function that simulates saving data to a database asynchronously
function saveToDb(data) {
    // Return a new Promise object
    return new Promise((resolve, reject) => {
        // Simulate varying internet speed by generating a random number between 1 and 10
        internetSpeed = Math.floor(Math.random() * 10) + 1;

        // If internet speed is greater than 4, consider the save operation successful
        if (internetSpeed > 4) {
            // Call resolve to indicate the Promise is fulfilled successfully
            // The string "Data saved" will be passed to the next .then() handler
            resolve("Data saved")
        } else {
            // Otherwise, call reject to indicate the Promise has failed
            // The string "Data not saved" will be passed to the .catch() handler
            reject("Data not saved")
        }
    });
}

// Using the saveToDb function and handling the Promise it returns
saveToDb("Hello")
    .then((result) => {
        // This block runs if the Promise resolves successfully
        // 'result' contains the value passed to resolve(), here "Data saved"
        console.log(result); // Output the success message
    })
    .catch((error) => {
        // This block runs if the Promise is rejected
        // 'error' contains the value passed to reject(), here "Data not saved"
        console.log(error);  // Output the failure message
    });


// Promise Chaining Example

// Start by calling saveToDb with "Hello"
saveToDb("Hello")
    .then(() => {
        // This .then() runs if the first saveToDb resolves successfully
        console.log("Data1 Saved");
        // Return another Promise from saveToDb with new data "ABC"
        // Returning a Promise here allows chaining the next .then() after this Promise resolves
        return saveToDb("ABC");
    })
    .then(() => {
        // This .then() runs after the Promise from saveToDb("ABC") resolves
        console.log("Data2 Saved");
        // Return yet another Promise for "XYZ"
        return saveToDb("XYZ");
    })
    .then(() => {
        // Runs after saveToDb("XYZ") resolves
        console.log("Data3 Saved");
        // Return Promise for "PQR"
        return saveToDb("PQR");
    })
    .then(() => {
        // Runs after saveToDb("PQR") resolves
        console.log("Data4 Saved");
        // No further Promises returned, so the chain ends here
    })
    .catch(() => {
        // If any of the Promises in the chain reject, this catch block runs
        // It handles errors in any step of the chain, providing a centralized error handler
        console.log("Connection Error");
    })

/*
Note:
- Always return a Promise in each `.then()` to maintain proper sequence in chaining.
- A single `.catch()` at the end can handle errors from any point in the chain.
- `.then()` handlers execute sequentially only if Promises are properly returned.
- The value passed into `resolve()` is received by the next `.then()`; the value in `reject()` goes to `.catch()`.
- Promises are the foundation for async/await, which provides cleaner, more readable async code.
*/