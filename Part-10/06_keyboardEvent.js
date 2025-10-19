/*
Keyboard Events - JavaScript

Keyboard events are triggered when a user interacts with the keyboard.
There are three main types of keyboard events:

1. keydown → Fires when a key is pressed down (fires repeatedly if held).
2. keyup   → Fires when a key is released.
3. keypress → (Deprecated) Similar to keydown, but only for character keys.

Example usage:
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

Common event properties:
- event.key → Returns the actual key value pressed (e.g., "a", "Enter", "Shift")
- event.code → Returns the physical key code (e.g., "KeyA", "ArrowUp")

Tip:
Use keydown for detecting shortcuts or continuous key presses.
Use keyup when you want an action after the key is released.

Note: Avoid using 'keypress' as it’s deprecated in modern browsers.
*/


let inp = document.querySelector('input');

// Add an event listener for the 'keydown' event
// The 'event' parameter automatically captures details about the keyboard event
inp.addEventListener('keydown', function(event) {

    // The 'event' object contains information about the key interaction.
    // Common useful properties include:
    // event.key  → gives the actual key pressed (e.g., "ArrowUp", "a", "Enter")
    // event.code → gives the physical key code (e.g., "ArrowUp", "KeyA"), independent of layout

    // Here, we're checking which arrow key was pressed using 'event.code'
    if (event.code === 'ArrowUp') {
        console.log("Character moves forward");
    } else if (event.code === 'ArrowDown') {
        console.log("Character moves backward");
    } else if (event.code === 'ArrowLeft') {
        console.log("Character moves left");
    } else if (event.code === 'ArrowRight') {
        console.log("Character moves right");
    }
});

