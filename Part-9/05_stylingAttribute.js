/* 
Manipulating Style Attributes – JavaScript

1. The style property is used to apply inline CSS styles directly to HTML elements via JavaScript.
   It allows you to dynamically change the appearance of elements on the page.

2. You can access and modify individual CSS properties using dot notation on the style object.
   Example:
     const element = document.getElementById('myElement');
     element.style.color = 'red';  // Changes text color to red
     element.style.backgroundColor = 'yellow';  // Sets background color

3. To set multiple styles at once, you can assign each property individually:
     element.style.color = 'blue';
     element.style.fontSize = '20px';

4. Alternatively, use the cssText property to set multiple styles quickly as a single string:
     element.style.cssText = 'color: green; font-size: 18px; background-color: lightgray;';

5. Inline styling with JavaScript applies styles directly to the element's style attribute,
   which overrides styles from external CSS files or <style> blocks unless !important is used.
   External CSS is generally preferred for maintainability, but inline styles are useful for dynamic changes.
*/

const heading = document.querySelector('h1');

heading.style.color = 'blue';
heading.style.fontSize = '48px';

heading.style.cssText = 'color: green; font-size: 50px; background-color: lightgray;';
