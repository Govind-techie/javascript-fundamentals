/* 
  Setting Content in Webpage Elements – JavaScript

  1. innerText – Change or read the visible text inside an element.
     - Example:
         let heading = document.querySelector("h1");
         heading.innerText = "Spider-Man: The Hero Next Door";

  2. innerHTML – Set or get HTML markup (including tags) inside an element.
     - Example:
         let box = document.querySelector(".box");
         box.innerHTML += "<p>New info here!</p>";

  3. src – Change the source of an image element.
     - Example:
         let img = document.querySelector("#mainImg");
         img.src = "assets/creation_1.png";

  4. href – Change the destination URL of a link element.
     - Example:
         let link = document.querySelector(".boxLink");
         link.href = "https://www.marvel.com/characters/spider-man-peter-parker";

  5. style – Directly modify the CSS styles of an element.
     - Example:
         img.style.border = "3px solid crimson";
         img.style.borderRadius = "8px";

  Notes:
    - Each selected HTML element (via querySelector, etc.) behaves like a JavaScript object.
    - You can read or update properties (like innerText, innerHTML, src, href, style) to change what appears on the page.
    - These changes update the page in real time and can be logged to the console for verification.
*/


// Example 1: Changing text content using .innerText
let heading = document.querySelector("h1"); // selects the <h1> element
console.log("Original heading:", heading.innerText);

// Update heading text
heading.innerText = "Spider-Man: The Hero Next Door";
console.log("Updated heading:", heading.innerText);

// Example 2: Changing paragraph text
let aboutPara = document.querySelector("p"); // selects the first <p> element
console.log("Original paragraph:", aboutPara.innerText);

// Update text inside the paragraph
aboutPara.innerText =
  "Spider-Man is a legendary Marvel superhero known for his agility, intelligence, and moral strength.";

// Example 3: Updating an image source using the .src property
let mainImage = document.querySelector("#mainImg"); // selects image by ID
console.log("Original image source:", mainImage.src);

// Update image to a new one
mainImage.src = "assets/creation_1.png"; // changes displayed image
mainImage.alt = "Spider-Man in Action"; // adds alternative text
mainImage.style.border = "3px solid crimson";
mainImage.style.borderRadius = "8px";

// Example 4: Modifying link text and URL using .innerText and .href
let firstLink = document.querySelector(".boxLink"); // selects first link in .box
console.log("Old link text:", firstLink.innerText);
console.log("Old link href:", firstLink.href);

// Update link text and URL
firstLink.innerText = "Visit Marvel Website";
firstLink.href = "https://www.marvel.com/characters/spider-man-peter-parker";
firstLink.target = "_blank"; // opens in new tab
console.log("Updated link text:", firstLink.innerText);
console.log("Updated link href:", firstLink.href);

// Example 5: Adding new content dynamically using .innerHTML
let boxSection = document.querySelector(".box");
boxSection.innerHTML += 
   `<p style="color: darkblue; font-weight: bold; margin-top: 10px;">
    Spider-Man continues to inspire generations of readers and viewers across the world.
  </p>`;

// Notes:
// - Each selected HTML element acts as a JavaScript object with editable properties.
// - Commonly used properties:
//     • innerText → to read or change visible text
//     • innerHTML → to add structured HTML content
//     • src → to change image source
//     • href → to change link destination
//     • style → to modify CSS directly
// - These updates are visible in real time on the HTML page and logged in the console.