/*
'this' Keyword in Event Listeners

Core Concept:
In JavaScript, the value of 'this' inside an event listener
refers to the DOM element that received (or triggered) the event.

Example (using a normal function):
button.addEventListener("click", function() {
    console.log(this);  // Refers to the button element itself
});

Important Difference:
If you use an arrow function, 'this' behaves differently.
Arrow functions do NOT have their own 'this'; instead,
they inherit it from their surrounding (lexical) scope.

Example (using an arrow function):
button.addEventListener("click", () => {
    console.log(this);  // Refers to the outer scope (e.g., window in global context)
});

Best Practice:
Use a regular (function) expression if you need 'this' to
reference the element that triggered the event.

Summary:
- 'this' in a regular function → The element itself
- 'this' in an arrow function → Lexical (outer) scope
*/

let bt = document.querySelector('.bt');

bt.addEventListener('click',function() {
    console.dir(this.innerText)
    this.style.backgroundColor = "red";
    this.style.color = "white";
});

// Note: In this context, 'this' refers to the specific button element on which the event listener was attached.
// It allows direct access to that button's properties and styles inside the event handler.

