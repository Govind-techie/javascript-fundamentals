/*
  classList Property in JavaScript

  ➤ The `classList` property allows you to access and manipulate 
    the list of CSS classes applied to an HTML element.

  ➤ It returns a DOMTokenList (like an array of class names).

  Common Uses:
     1. Add a new class → element.classList.add("className")
     2. Remove an existing class → element.classList.remove("className")
     3. Toggle a class (add if not present, remove if present) → element.classList.toggle("className")
     4. Check if an element has a class → element.classList.contains("className")
     5. Replace a class with another → element.classList.replace("oldClass", "newClass")

  Note:
     - `classList` is more convenient than using `className`, 
       as it gives built-in methods to manage multiple classes easily.
     - You can access specific classes using index (like an array),
       e.g. element.classList[0]
*/

// Selecting all anchor tags inside <div class="box">
let links = document.getElementsByClassName("boxLink");

// Let's pick the first link (Publisher)
let firstLink = links[0]; 

// Adding a new class to highlight the first link
firstLink.classList.add("highlight");
// Now <a class="boxLink highlight">Publisher</a>

// Removing an existing class 'boxLink'
firstLink.classList.remove("boxLink");
// Now it no longer has the class 'boxLink'

// Toggling a class
firstLink.classList.toggle("hidden");
// If 'hidden' doesn’t exist, it adds it; if it exists, removes it

// Checking if the element has a class
console.log(firstLink.classList.contains("highlight")); // true

// Replacing a class
firstLink.classList.replace("highlight", "activeLink");
// Replaces 'highlight' → 'activeLink'

// Viewing all classes in console
console.log(firstLink.classList);
// Output: DOMTokenList ["activeLink"]