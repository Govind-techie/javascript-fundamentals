/* 
Callback Hell - JavaScript

What is Callback Hell?
Callback Hell refers to a situation in JavaScript where multiple asynchronous functions
are nested within each other, forming a deeply indented structure (often called the "Pyramid of Doom").
This happens when each async operation depends on the result of the previous one.

How it happens:
1. Each asynchronous task (like API calls or setTimeout) is written inside the callback of another.
2. As dependencies increase, code nesting becomes deeper.
3. This makes code hard to read, debug, and maintain.

Example:
getData(() => {
    processData(() => {
        saveData(() => {
            displayData(() => {
                console.log("All tasks completed!");
            });
        });
    });
});

Why it's a problem:
- Reduces code readability and structure clarity.
- Hard to debug or modify due to deeply nested logic.
- Error handling becomes complex (no straightforward try-catch).
- Difficult to scale for larger asynchronous sequences.

How to fix Callback Hell:
1. Use Promises — flatten async code using `.then()` chaining.
2. Use async/await — make async code look and behave like synchronous code.
3. Break nested callbacks into smaller, reusable functions.

Example using async/await:
async function runTasks() {
    await getData();
    await processData();
    await saveData();
    await displayData();
    console.log("All tasks completed!");
}

Why it’s useful to learn:
- Helps understand how asynchronous behavior evolved in JavaScript.
- Builds a strong foundation before learning Promises and async/await.
- Improves debugging and logical thinking when dealing with async code.

Quick note:
If you encounter messy nested callbacks while working with APIs, timers, or file operations — 
that’s callback hell. Learn to identify it and refactor it using modern asynchronous patterns.
*/

// Selecting the first <h1> element from the HTML document
let h1 = document.querySelector("h1");

// Function to change the color of the <h1> after a specific delay
// Parameters:
// - color → the color to change the text to
// - delay → the time (in milliseconds) after which the color should change
// - nextColorChange → a callback function to execute the next color change after this one completes
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color; // Change the <h1> color after the given delay
        if (nextColorChange) nextColorChange(); // If another color change is passed, call it next
    }, delay);
}

// Example of Callback Hell:
// Each color change depends on the previous one finishing.
// To achieve sequential color changes, we nest one callback inside another.
// This creates deep indentation and reduced readability — a typical "pyramid of doom".
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

/*
Note: 
- The above nested structure works but becomes hard to maintain and debug
- if we had many more colors or needed error handling.
- Later, this same logic can be refactored using Promises or async/await
  for cleaner, more readable code.
*/