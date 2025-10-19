/*
Form Events - JavaScript

Form events are triggered when a user interacts with form elements such as input fields, checkboxes, or buttons.
These events help you handle user input, validate data, and control form submission.

Common form events:
1. submit → Fires when a form is submitted (before sending data to the server).
2. input → Fires whenever the value of an input or textarea changes.
3. change → Fires when an element loses focus after its value has been changed.
4. focus → Fires when an element gains focus.
5. blur → Fires when an element loses focus.

Example:
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission (page reload)
    console.log("Form submitted!");
});

Common use cases:
- Validating form inputs before submission.
- Displaying live feedback as users type.
- Preventing unwanted reloads with event.preventDefault().

Tip:
Always call event.preventDefault() in a form submit handler if you're handling the submission with JavaScript.
*/

let form = document.querySelector("form");

// Attach an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {

    // The 'event' object automatically gets passed to the function and
    // contains information about the event that occurred (here, the form submission).

    // By default, form submission causes the page to reload.
    // event.preventDefault() stops that default behavior, allowing us to handle
    // the form submission using JavaScript instead (for example, to validate input or send data via AJAX).
    event.preventDefault();

    // Display an alert message to indicate the form was successfully submitted.
    alert("Form Submitted");
});

// Extracting Form Data
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Select the input field
    let inp2 = document.querySelector('.userData');

    // Access the value typed by the user
    let enteredValue = inp2.value;

    // Log it or use it anywhere
    console.log("User entered:", enteredValue);

    alert("You entered: " + enteredValue);
});