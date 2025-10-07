/* 
  Selecting Elements - JavaScript

  1. getElementById()
     - Selects a single element by its unique ID.
     - Returns the element object or null if not found.
     - Example:
       const element = document.getElementById('myId'); 
       // selects element with id="myId"

  2. getElementsByClassName()
     - Selects all elements with the specified class name.
     - Returns an HTMLCollection (live list) of elements.
     - Example:
       const items = document.getElementsByClassName('item'); 
       // selects all elements with class="item"

  3. getElementsByTagName()
     - Selects all elements with the specified tag name.
     - Returns an HTMLCollection of elements.
     - Example:
       const paragraphs = document.getElementsByTagName('p'); 
       // selects all <p> elements

  4. querySelector()
     - Selects the first element that matches a CSS selector.
     - Returns the element object or null if no match.
     - Example:
       const firstButton = document.querySelector('button.primary'); 
       // selects first <button> with class "primary"

  5. querySelectorAll()
     - Selects all elements matching a CSS selector.
     - Returns a static NodeList of elements.
     - Example:
       const allButtons = document.querySelectorAll('button.primary'); 
       // selects all <button> elements with class "primary"
*/

// getElementById()

// Selects the element with the unique ID "mainImg" from the DOM
let imgObj = document.getElementById("mainImg");

// Displays the full JavaScript object representation of the selected element
// (shows all its properties and methods) in the browser console
console.dir(imgObj);

// Logs the id attribute of the selected element — expected output: "mainImg"
console.log(imgObj.id);

console.dir(document.getElementById("abc"));
// Note:
// If the specified ID ("abc" in this case) does not exist in the HTML document,
// document.getElementById("abc") will return null instead of throwing an error.
// This means the element wasn't found in the DOM.

// Updates the image source (src attribute) to a new file
// This instantly changes the displayed image on the webpage
imgObj.src = "assets/creation_1.png";

// Note: 
// - You can see 'console.dir()' and 'console.log()' outputs in the browser console (Inspect → Console tab)
// - The image change is visible directly on the HTML webpage in real time

// ---

// getElementsByClassName()

// Selects all elements with the class name "boxLink" from the DOM
// Returns an HTMLCollection (like an array but live — it updates if the DOM changes)
let links = document.getElementsByClassName("boxLink");

// Displays the HTMLCollection of selected elements in the browser console
// You can see all elements that share the class "boxLink"
console.dir(links);

console.dir(document.getElementsByClassName("abc"));
// Note:
// If no elements exist in the HTML document with the given class name ("abc" in this case),
// document.getElementsByClassName("abc") will return an *empty HTMLCollection* instead of null.
// This means the query ran successfully, but there were simply no matching elements found.

// Access the first element in the collection (index 0) and log its text content
console.log(links[0].textContent); // Expected output: "Publisher"

// Change the text color of all elements with the class "boxLink" to red
// Loops through the HTMLCollection and applies style change to each one
for (let link of links) {
  link.style.color = "red";
}

// Notes:
// - This method returns a live HTMLCollection (if the DOM updates, this collection updates too).
// - You can see the selected elements in the console using console.dir().
// - The color change will be visible directly on the webpage — all links with class "boxLink" will turn red.
// - Always use a loop (for...of or for loop) to modify multiple elements from an HTMLCollection.

// ---

// getElementsByTagName()

// Selects all elements with the tag name "p" from the DOM
// Returns an HTMLCollection (like an array — containing all <p> tags found in the document)
let paragraphs = document.getElementsByTagName("p");

// Displays the HTMLCollection of all <p> elements in the browser console
console.dir(paragraphs);

// Logs the total number of <p> tags found in the document
console.log("Number of <p> tags:", paragraphs.length);

// Access the first <p> element (index 0) and log its text content
console.log(paragraphs[0].textContent);

// Modify the second <p> element (index 1)
// This will instantly change the text visible on the webpage
paragraphs[1].innerText = "This paragraph was updated using getElementsByTagName()";

// Change the text color of all <p> elements to purple
// Loops through each paragraph and applies style changes
for (let para of paragraphs) {
  para.style.color = "purple";
  para.style.fontFamily = "Arial";
}

// Log a non-existent tag (like <xyz>) to show behavior when not found
console.dir(document.getElementsByTagName("xyz"));

// Note:
// - If the specified tag ("xyz" here) does not exist in the HTML document,
//   document.getElementsByTagName("xyz") will return an *empty HTMLCollection* (not null).
// - HTMLCollection is "live", meaning it automatically updates if new <p> tags are added or removed later.
// - You can view console outputs in the browser console (Inspect → Console tab).
// - The text and color changes are visible directly on the webpage in real time.

// ---

// querySelector() & querySelectorAll()

// Selects the first element that matches the given CSS selector.
// Unlike getElementsByClassName or getElementsByTagName, it returns a single element object, not a collection.

// Example 1: Select the first element with the class "boxLink"
let firstBoxLink = document.querySelector(".boxLink");

// Displays the full JavaScript object representation of the selected element
console.dir(firstBoxLink);

// Logs the text content of the selected element (expected output: "Publisher")
console.log(firstBoxLink.textContent);

// Change the text color and font size of the first ".boxLink" element
firstBoxLink.style.color = "green";
firstBoxLink.style.fontSize = "18px";

// Example 2: Select element by ID
let descPara = document.querySelector("#description"); // selects the paragraph with id="description"
descPara.style.backgroundColor = "lightyellow"; // changes its background color
descPara.style.borderLeft = "4px solid orange"; // adds a decorative border
console.log("Selected paragraph text:", descPara.textContent);

// Example 3: Select element by tag name
let heading = document.querySelector("h2"); // selects the FIRST <h2> tag (there are two in your HTML)
heading.style.color = "crimson";
heading.innerText = "About Spider-Man (Modified via querySelector)";

// Example 4: Selecting nested elements using CSS-like syntax
let nestedLink = document.querySelector(".box ul li a"); // selects the FIRST <a> inside .box
nestedLink.style.textDecoration = "underline";
nestedLink.style.fontWeight = "bold";
console.log("Nested link selected:", nestedLink.textContent);

// Example 5: Selecting non-existent element
console.dir(document.querySelector(".nonexistentClass")); 
// If no element matches the selector, querySelector() returns null — not an empty collection.

// Example 6: Using querySelectorAll() to select all anchor tags nested inside a div
// Selects all <a> elements that are descendants of any <div> element
let allDivAnchors = document.querySelectorAll("div a");

// Logs the NodeList of all selected anchor elements in the console
console.dir(allDivAnchors);

// Loops through the NodeList and applies style changes to each <a> element
for (let anchor of allDivAnchors) {
  anchor.style.color = "blue";
  anchor.style.textDecoration = "none";
}

// Notes:
// - querySelector() accepts any valid CSS selector (#id, .class, tag, or combinations).
// - If multiple elements share the same class or tag, ONLY the first matching element is selected.
// - It returns a single element object (not a collection like HTMLCollection or NodeList).
// - Use querySelectorAll() if you want to select all matching elements instead of just the first one.
// - The effects (color, text, etc.) are visible directly on the webpage, and logs appear in the browser console.
