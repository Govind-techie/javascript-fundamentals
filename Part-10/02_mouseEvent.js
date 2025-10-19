

/* 

MOUSE EVENTS - JAVASCRIPT

Mouse events are actions that occur when a user interacts with a webpage using a mouse.
They are commonly used to handle clicks, hovering, dragging, and other pointer actions.

Common Mouse Events:

click       → Triggered when the element is clicked.
dblclick    → Triggered when the element is double-clicked.
mouseover   → Triggered when the mouse enters an element.
mouseout    → Triggered when the mouse leaves an element.
mousedown   → Triggered when a mouse button is pressed down.
mouseup     → Triggered when a mouse button is released.
mousemove   → Triggered when the mouse moves within an element.
contextmenu → Triggered when the right mouse button is clicked.

Usage Example:
element.addEventListener("click", function() {
  console.log("Element clicked!");
});

Tip:
- You can combine these events with CSS changes, animations, or logic to create interactive UI.
- Use `event` object properties like `event.clientX` and `event.clientY` to get mouse position.
*/

// Selects the first element in the document with the class "btn"
// querySelector returns the first matching element, or null if not found.
let btn = document.querySelector(".btn");

// Logs a detailed, interactive representation of the button element to the console.
// console.dir shows all properties and methods of the DOM element (unlike console.log, which prints the HTML).
console.dir(btn);

// Defines a function called sayHello.
// When called, this function will display a popup alert with the message "Hello".
function sayHello() {
    alert("Hello");
}

// Assigns the sayHello function as the click event handler for the button.
// When the button is clicked, the sayHello function will be executed.
// This uses the DOM property method (btn.onclick), which can only hold one handler at a time for the "click" event.
btn.onclick = sayHello;

// The onmouseenter property is an event handler for when the mouse pointer enters the element.
// This event is triggered once when the mouse enters the boundaries of the element.
// Unlike mouseover, onmouseenter does not bubble — meaning it only fires on the element it is directly attached to, not on child elements.
// Here, when the mouse enters the button element, the function executes and logs a message to the console.
// The console.log statement outputs the string "you entered a button" to the browser console.
btn.onmouseenter = function() {
    console.log("you entered a button");
}