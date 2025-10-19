/*
'change' and 'input' Events - JavaScript

Both 'change' and 'input' events are used to detect when the value of an input field changes,
but they differ in how and when they are triggered.

1. input event:
   - Fires immediately whenever the user changes the input value.
   - Triggered for each keystroke, paste, delete, or input modification.
   - Commonly used for live validation or real-time updates (e.g., showing typed text).

   Example:
   const inputField = document.querySelector("input");
   inputField.addEventListener("input", function(event) {
       console.log("Current value:", event.target.value);
   });

2. change event:
   - Fires when the input value is changed and the element loses focus (i.e., after pressing Enter or clicking away).
   - Does not fire on every keystroke.
   - Commonly used when you want to handle final input values (e.g., submitting or validating after user finishes typing).

   Example:
   const inputField = document.querySelector("input");
   inputField.addEventListener("change", function(event) {
       console.log("Final value after change:", event.target.value);
   });

Key difference summary:
- 'input' → fires continuously as value changes.
- 'change' → fires once, after the input loses focus or Enter is pressed.

Tip:
Use 'input' for live feedback (like updating UI as user types)
and 'change' for actions that depend on the final input value.
*/


// Example 1: input event

// This event triggers immediately whenever the user types, deletes, or pastes something in the input field.
// It provides real-time feedback, making it useful for live validation or instant updates.
const liveInput = document.querySelector('.liveInput');

liveInput.addEventListener('input', function(event) {
    // event.target refers to the element where the event occurred
    // event.target.value gives the current text inside the input field
    console.log("Typing live:", event.target.value);
});

// Note:
// The 'input' event fires for every change made in the input box (character-by-character).
// Great for features like search suggestions, live character counters, or dynamic form feedback.



// Example 2: change event

// This event triggers only after the user finishes typing and moves focus away from the input field (blur or Enter key).
// It’s best used for final validation or actions when user confirms their input.
const finalInput = document.querySelector('.finalInput');

finalInput.addEventListener('change', function(event) {
    // event.target.value captures the final value after user completes editing
    console.log("Final input value:", event.target.value);
});

// Note:
// The 'change' event doesn’t trigger on every keystroke.
// It’s ideal for tasks like validating final input (e.g., email, phone number) or saving data after editing.

