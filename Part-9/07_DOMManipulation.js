/*  
DOM MANIPULATION - Navigation, Adding, Removing Elements

1. NAVIGATING THE DOM

DOM navigation helps you move through elements on a webpage.

Common navigation properties:
    • parentElement         → Accesses the parent node of an element.
    • children              → Returns all direct child elements.
    • firstElementChild     → Selects the first child element.
    • lastElementChild      → Selects the last child element.
    • nextElementSibling    → Moves to the next sibling element.
    • previousElementSibling→ Moves to the previous sibling element.

Example:
    const parent = document.querySelector(".container");
    console.log(parent.children);           // Lists all child elements
    console.log(parent.firstElementChild);  // First child
    console.log(parent.lastElementChild);   // Last child


2. ADDING ELEMENTS TO THE PAGE
We can dynamically create and insert elements into the DOM.

Common methods:
    • document.createElement("tagName")   → Creates a new element.
    • element.append(child)               → Adds inside at the end.
    • element.prepend(child)              → Adds inside at the start.
    • element.before(child)               → Adds before the element.
    • element.after(child)                → Adds after the element.
    • element.innerHTML / textContent     → Add content to elements.

Example:
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello, DOM!";
    document.body.append(newDiv); // Adds at end of body


3. REMOVING ELEMENTS FROM THE PAGE
We can remove unwanted elements easily using these methods.

Common methods:
    • element.remove()                    → Removes the element itself.
    • parent.removeChild(child)           → Removes a specific child.

Example:
    const para = document.querySelector("p");
    para.remove(); // Removes the paragraph


NOTE:
All these are fundamental DOM operations that let you:
    ✅ Navigate through elements
    ✅ Dynamically create or insert new content
    ✅ Remove unnecessary elements

These form the foundation of building interactive webpages using JavaScript.
*/

// NAVIGATION

// Example 1: Access the parent element of the Spider-Man image
console.log(document.querySelector("#mainImg").parentElement);

// Example 2: Get all children of the .box div
console.log(document.querySelector(".box").children);

// Example 3: Access the first child (<h4>) inside .box
console.log(document.querySelector(".box").firstElementChild);

// Example 4: Access the next sibling of the <h1> (Spider Man)
console.log(document.querySelector("h1").nextElementSibling);

// ADDING ELEMENT ON PAGE

// Example 1: Add a new heading at the bottom of the page
const newHeading = document.createElement("h3");
newHeading.textContent = "New Spider-Verse Update!";
document.body.append(newHeading);

// Example 2: Add a new list item inside the .box <ul>
const newListItem = document.createElement("li");
newListItem.textContent = "First Comic: 1962";
document.querySelector(".box ul").append(newListItem);

// Example 3: Add a note before the image section
const note = document.createElement("p");
note.textContent = "This page shows Spider-Man’s history.";
document.querySelector("#mainImg").before(note);

// Example 4: Prepend a new paragraph at the top of body
document.body.prepend(document.createElement("p")).textContent = "Welcome to Spider-Man Universe!";


// Example 5: Insert adjacent element after the main heading
const subHeading = document.createElement("h4");
subHeading.textContent = "Marvel Comics Hero";
document.querySelector("h1").insertAdjacentElement("afterend", subHeading);

/*  
NOTE: insertAdjacentElement()

- Used to insert an existing or newly created element at a specific position 
  relative to another element.

Possible positions:
    • "beforebegin" → Before the element itself
    • "afterbegin"  → Inside, before its first child
    • "beforeend"   → Inside, after its last child
    • "afterend"    → After the element itself

Example:
    target.insertAdjacentElement("afterend", newElement);

In our example:
   - The <h4> element "Marvel Comics Hero" is inserted 
     right after the main <h1> ("Spider Man").

*/

// REMOVING ELEMENT FROM PAGE

// Example 1: Remove the second image from the "images" section
const oldImages = document.querySelectorAll(".oldImg");
oldImages[1].remove(); // Removes the middle image

// Example 2: Remove the last list item from .box
const list = document.querySelector(".box ul");
list.lastElementChild.remove();

// Example 3: Remove the "Creation & Development" paragraph
document.querySelector("#description").remove();
