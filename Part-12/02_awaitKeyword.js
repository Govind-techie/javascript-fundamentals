/*
 Await Keyword - JavaScript
 
  What is the Await Keyword?
  The `await` keyword is used inside async functions to pause the execution of the function until a Promise resolves or rejects.
 
  Why use Await?
  `await` helps you write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.
 
  How it Works:

  When you use `await` before a Promise, JavaScript waits for the Promise to resolve and returns its value.
  If the Promise rejects, an error is thrown at that point in the function.
 
  Syntax Example:

 ```js
  async function getData() {
      const result = await fetch("https://api.example.com/data");
      console.log(result);
  }
  ```
 
  Important Points:
  1. `await` can only be used inside an async function.
  2. It pauses execution of the async function until the Promise settles (resolves or rejects).
  3. If the Promise is rejected, it throws an error (which can be caught using try...catch).
  4. Multiple `await`s can be used in sequence to run asynchronous operations one after another.
 
  Quick Note:

 Await is built on top of Promises and is often used together with async for cleaner asynchronous control flow.
 */

// `getNum()` returns a Promise that resolves or rejects after 1 second.
// It generates a random number between 1 and 10.
// If the number is less than 5, the Promise rejects, otherwise it resolves.
// Rejection causes an error at the `await` call, skipping remaining code unless handled.
function getNum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num < 5) {
                reject("Promise rejected"); 
                // Rejection here throws an error at the awaiting async function.
                // Code after this rejection is skipped unless caught by try...catch.
            }
            console.log(num);
            resolve("Promise fulfilled");
        },1000);
    });
}

// `demo()` is an async function that uses `await` to run `getNum()` calls sequentially.
// Each call waits for the previous one to complete before starting.
// The try...catch block catches any rejection, allowing the function to continue executing subsequent code.
async function demo() {
    try {
        await getNum();
        await getNum();
        await getNum();
    } catch(error){
        console.log("error caught");
        console.log(error);
    }

    // After handling errors, subsequent code runs normally.
    let a = 5
    console.log(a)
    console.log("Hello");
}

// Calling `demo()` starts the sequential async operations.
// Each number logs after a 1-second delay, one after another.
demo();
