/* 
DOM EVENTS IN JAVASCRIPT

WHAT ARE DOM EVENTS?
- Events are actions or occurrences that happen in the browser.
- Examples: user clicks a button, hovers mouse, presses a key, scrolls a page, etc.
- JavaScript allows you to "listen" for these events and "respond" to them.

TYPES OF DOM EVENTS (Commonly Used)

1. Mouse Events:
   - click → Fired when an element is clicked.
   - dblclick → Fired when an element is double-clicked.
   - mouseover → Fired when the mouse enters an element.
   - mouseout → Fired when the mouse leaves an element.
   - mousedown / mouseup → Fired when mouse button is pressed or released.

2. Keyboard Events:
   - keydown → Fired when a key is pressed.
   - keyup → Fired when a key is released.
   - keypress → (Deprecated) older version of keydown.

3. Form Events:
   - submit → Fired when a form is submitted.
   - change → Fired when the value of input/select changes.
   - input → Fired when user types something in an input field.
   - focus / blur → Fired when element gets or loses focus.

4. Window Events:
   - load → Fired when the page finishes loading.
   - resize → Fired when window size changes.
   - scroll → Fired when user scrolls the page.
   - unload → Fired when user leaves the page.

3 MAIN WAYS TO HANDLE EVENTS

1. HTML Inline Event Handling
   Example:
   <button onclick="alert('Button clicked!')">Click me</button>
   Not recommended — mixes HTML with JS.

2. DOM Property Method
   Example:
   const btn = document.querySelector("button");
   btn.onclick = function() {
       console.log("Button clicked!");
   };
   Limitation: Can only assign one event handler per event type.

3. addEventListener() (Best Practice)
   Example:
   const btn = document.querySelector("button");
   btn.addEventListener("click", () => {
       console.log("Button clicked!");
   });
   - Can attach multiple listeners.
   - Can remove them later with removeEventListener().
   - Works for capturing & bubbling phases.

EVENT FLOW (IMPORTANT CONCEPT)
1. Capturing Phase → Event travels from root to target.
2. Target Phase → Event reaches the target element.
3. Bubbling Phase → Event bubbles back up (default phase).
   You can control this:
   - Use { capture: true } for capturing phase.
   - Use event.stopPropagation() to stop bubbling.

EVENT OBJECT
- Each event handler receives an event object automatically.
  Example:
  btn.addEventListener("click", (event) => {
      console.log(event.type);   // "click"
      console.log(event.target); // element clicked
  });

REAL USE CASE EXAMPLES
- Button clicks
- Form validation
- Dynamic content updates
- Real-time input (e.g., search suggestions)
- Interactive animations
*/

// MOUSE/POINTER EVENT

