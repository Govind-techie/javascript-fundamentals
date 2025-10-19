/* 
EVENT LISTENERS - JAVASCRIPT

An Event Listener is a method that waits for a specific event to occur on an element 
(like a click, hover, keypress, etc.) and then executes a function when that event happens.

Syntax:
element.addEventListener(event, function, useCapture);

Parameters:
1. event → The name of the event (e.g., "click", "mouseover", "keydown").
2. function → The callback function that runs when the event occurs.
3. useCapture → (Optional) Boolean; true = capture phase, false = bubble phase (default).

Example:
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  console.log("Button was clicked!");
});

Why use addEventListener() instead of inline events?
- You can attach multiple event listeners to a single element.
- Keeps HTML clean and separates structure from behavior.
- Easier to remove using removeEventListener().

Tip:
- Use arrow functions for short actions.
- Use named functions if you need to remove the listener later.
*/

// Selecting the button element with class "btn2"
let btn2 = document.querySelector(".btn2");

// Adding an event listener using an arrow function
btn2.addEventListener("click", () => {
    console.log("button clicked");
});

// Function that displays an alert with "Hello"
function sayHello() {
    alert("Hello");
}

// Function that displays an alert with "ABC"
function sayName() {
    alert("ABC");
}

// Using 'onclick' property — can only hold one event at a time
btn2.onclick = sayHello; // Assigns the first action
btn2.onclick = sayName;  // Overwrites the previous one (only sayName runs)

// Using addEventListener() — can run multiple actions for the same event
btn2.addEventListener("click", sayHello);
btn2.addEventListener("click", sayName);

/*
Note:
- The 'onclick' property can execute only ONE function at a time (it overwrites previous ones).
- The 'addEventListener()' method allows MULTIPLE event handlers for the same event,
  meaning both functions will execute when the button is clicked.
*/

