/*
Event Bubbling

Definition:
Event Bubbling is a concept in the DOM (Document Object Model) where an event 
that occurs on a child element "bubbles up" and gets triggered on its parent 
elements as well.

Example:
If you click a button inside a div, the click event will first trigger on the 
button, then the div, and continue up through ancestor elements (like body, 
html, and document).

Event Flow Phases:
- Capturing Phase – Event travels from the root to the target element.
- Target Phase – Event occurs on the actual target.
- Bubbling Phase – Event bubbles up from the target to the root.

Controlling Bubbling:
- Use `event.stopPropagation()` to prevent the event from bubbling further.
- Use `event.stopImmediatePropagation()` to stop other listeners on the same element.

Tip:
Event Bubbling is useful for event delegation — attaching one event listener 
to a parent element to manage all child events efficiently.
*/

let div = document.querySelector('div'); // Selects the div element
let ul = document.querySelector('ul');   // Selects the ul element
let list = document.querySelectorAll('li'); // Selects all li elements

// Event listener for the div element
div.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("div was clicked");
});

// Event listener for the ul element
ul.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

// Loop through each li element and add a click listener
for (li of list) {
    li.addEventListener('click', function(event) {
        // Prevents the event from bubbling up to parent elements
        event.stopPropagation(); 
        console.log("li was clicked");
    });
}

/*
Note - event.stopPropagation():

- The event.stopPropagation() method prevents an event from bubbling up 
  (or propagating) to its parent elements.
- This means the event will only run on the target element where it was triggered.
- It is useful when you don’t want parent elements to respond to a child’s event.
- Example: Clicking on <li> should not trigger the <ul> or <div> click handlers.
*/
