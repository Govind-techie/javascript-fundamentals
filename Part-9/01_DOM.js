/*
DOM (Document Object Model)

1. What is the DOM?
-------------------
The DOM (Document Object Model) is a programming interface provided by browsers 
that represents the structure of a webpage as a tree of objects. It allows 
programs and scripts (like JavaScript) to dynamically access, modify, add, or 
remove elements and content on a webpage.

2. How the DOM works in a webpage
---------------------------------
- When a browser loads an HTML page, it parses the HTML markup and creates a 
  tree-like structure called the DOM.
- Each element, attribute, and piece of text in the HTML becomes a node in this 
  tree.
- This tree structure represents the document’s content and layout in a way that 
  scripts can interact with.

3. How browsers create and represent the DOM
--------------------------------------------
- The browser reads the HTML source code from top to bottom.
- It creates nodes for each HTML tag (elements), attributes, and text.
- These nodes are linked together as parent and child nodes, forming a tree.
- This tree is stored in memory and is accessible via JavaScript.

4. How JavaScript interacts with the DOM
-----------------------------------------
- JavaScript uses the DOM API (Application Programming Interface) to 
  manipulate the webpage dynamically.
- Through the DOM, JavaScript can:
  * Select elements (e.g., by ID, class, tag name)
  * Read or change element content and attributes
  * Create new elements and insert them into the document
  * Remove existing elements from the document
  * Respond to user events like clicks or key presses by attaching event listeners

5. Example of DOM structure in a simple HTML snippet:

HTML:
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <p class="text">Welcome to the DOM tutorial.</p>
  </body>
</html>

DOM Tree:
- html (root element)
  - body (child of html)
    - h1 (child of body, with id="title")
      - Text node: "Hello World"
    - p (child of body, with class="text")
      - Text node: "Welcome to the DOM tutorial."

6. Key objects in the DOM:
--------------------------
- window: The global object representing the browser window. It contains the 
  document object and provides methods related to the browser environment.
- document: Represents the entire HTML document loaded in the window. This is 
  the entry point to access and manipulate the DOM tree.
- element: Represents an individual HTML element (like <div>, <p>, <h1>, etc.). 
  Elements are nodes in the DOM tree and have properties and methods to 
  manipulate their content, attributes, styles, and more.

Relationship:
window
  └── document
         └── element nodes (html, body, p, h1, etc.)

7. Common JavaScript DOM methods:
---------------------------------
- Selecting elements:
  * document.getElementById('id')
  * document.getElementsByClassName('className')
  * document.getElementsByTagName('tagName')
  * document.querySelector('cssSelector')
  * document.querySelectorAll('cssSelector')

- Modifying elements:
  * element.textContent = 'new text'
  * element.innerHTML = '<span>HTML content</span>'
  * element.setAttribute('attr', 'value')
  * element.style.property = 'value'

- Adding elements:
  * document.createElement('tagName')
  * parentElement.appendChild(newElement)
  * parentElement.insertBefore(newElement, referenceElement)

- Removing elements:
  * parentElement.removeChild(childElement)
  * element.remove()
*/

