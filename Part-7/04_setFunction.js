/*
  setTimeout and setInterval in JavaScript
 
  setTimeout:
  - Executes a function or a piece of code once after a specified delay (in milliseconds).
  - Syntax: setTimeout(function, delay, [arg1, arg2, ...])
  - Common use cases: delaying actions, scheduling code execution after some time.
 
  setInterval:
  - Repeatedly executes a function or a piece of code at specified intervals (in milliseconds).
  - Syntax: setInterval(function, interval, [arg1, arg2, ...])
  - Common use cases: animations, periodic checks, updating UI elements regularly.
 
  Both functions return an ID which can be used to cancel the scheduled execution:
  - Use clearTimeout(id) to cancel a timeout set by setTimeout.
  - Use clearInterval(id) to cancel an interval set by setInterval.
*/

// Example of setTimeout:
// This line runs immediately when the script is executed
console.log("Hello, World!");

// This schedules a message to be printed after 4 seconds
setTimeout(() => {
    // This message is printed after the 4-second delay
    console.log("I Love Web Development");
});

// Note: The rest of the code continues to execute without waiting for the setTimeout callback,
// because setTimeout is asynchronous.

// Example of setInterval:
// The code inside this interval runs repeatedly every 2 seconds (2000 milliseconds).
let count = 1;
const IntervalId = setInterval(() => {
    console.log(count);
    count++;

    // Note: You can clear the interval with clearInterval(intervalId) when you want to stop it,
    // for example, after a certain condition is met.

    // Condition to stop the interval
    if (count > 5) {
        clearInterval(intervalId); // Stops the interval
        console.log("Interval stopped!");
    }
}, 2000);

