/*
  Alert & Prompt in JavaScript

  1. alert(message)
     - Displays a message in a dialog box with an OK button.
     - Used to show information to the user.
     Example:
        alert("Welcome to my website!");

  2. prompt(message, defaultValue)
     - Displays a dialog box that asks the user for input.
     - Returns the value entered by the user as a string, or null if Cancel is pressed.
     Example:
        let name = prompt("What is your name?", "Guest");
        alert("Hello, " + name);

  Note:
    - alert() and prompt() are blocking functions (they pause code execution until the user responds).
    - They are mostly used for simple demos or debugging, not in modern production apps.
*/

// Simple alert example
alert("Welcome to our website!"); // Shows popup with OK button

// Prompt example with default value
let userName = prompt("What is your name?", "Guest");
alert("Hello, " + userName + "! Nice to meet you.");

// Example with number input
let userAge = prompt("Enter your age:", "18");

// Convert string to number and use in condition
if (Number(userAge) >= 18) {
    alert("You are an adult!");
} else {
    alert("You are a minor!");
}

/* Note:
   - These alerts and prompts will only be visible when:
   1. Your HTML file has the JavaScript file linked using <script> tag
   2. The webpage is opened in a browser
   3. The JavaScript code is actually executed
   
   Example HTML link:
   <script src="07_alertAndPrompt.js"></script>
*/

