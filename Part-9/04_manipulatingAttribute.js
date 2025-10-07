/*
Manipulating Attributes – JavaScript

1. What are Attributes?
   - Attributes are additional information or properties set on HTML elements.
   - Common attributes include: src (for images), href (for links), id, alt, class, title, etc.
   - Example:
        <img src="logo.png" alt="Logo" id="mainImage">
        <a href="https://example.com" id="myLink">Visit</a>

2. Main Methods for Attribute Manipulation:
   a) getAttribute(attributeName)
      - Retrieves the value of the specified attribute from an element.
      - Example:
          let img = document.querySelector('img');
          let srcValue = img.getAttribute('src'); // returns "logo.png"

   b) setAttribute(attributeName, value)
      - Sets or updates the value of the specified attribute on an element.
      - Example:
          let link = document.getElementById('myLink');
          link.setAttribute('href', 'https://newsite.com');

   c) removeAttribute(attributeName)
      - Removes the specified attribute from the element.
      - Example:
          img.removeAttribute('alt');

3. Purpose and Effect of Each Method:
   - getAttribute(): Use this to read the current value of an attribute (e.g., to check where a link points).
   - setAttribute(): Use this to change or add an attribute dynamically (e.g., to update an image or link).
   - removeAttribute(): Use this to completely remove an attribute (e.g., to make an image have no alt text).

4. Notes:
   - Changes made using these methods are immediately reflected on the webpage.
   - You can see the effects in the browser's Elements panel (Inspector) and by logging the element or attribute values in the console.
   - These methods work for any standard or custom attribute on HTML elements.
*/

// Example: Manipulating attributes on Spider-Man webpage elements

// Select the main image using its ID 'mainImg'
const mainImage = document.getElementById('mainImg');

// Get the current 'src' attribute value of the main image
console.log('Original main image src:', mainImage.getAttribute('src'));

// Change the 'src' attribute to a new image URL
mainImage.setAttribute('src', 'images/spiderman-new.jpg');
console.log('Updated main image src:', mainImage.getAttribute('src'));

// Select the first link with class 'boxLink'
const boxLink = document.querySelector('.boxLink');

// Get the current 'href' attribute value of the link
console.log('Original boxLink href:', boxLink.getAttribute('href'));

// Update the 'href' attribute to point to a different URL
boxLink.setAttribute('href', 'https://www.marvel.com/characters/spider-man-peter-parker');
console.log('Updated boxLink href:', boxLink.getAttribute('href'));

// Remove the 'title' attribute from the link if it exists
console.log('Original boxLink title attribute:', boxLink.getAttribute('title'));
boxLink.removeAttribute('title');
console.log('Title attribute after removal:', boxLink.getAttribute('title')); // Should log null

// These changes will be reflected immediately on the webpage:
// - The main image source will update to the new Spider-Man image.
// - The link will now navigate to the Marvel Spider-Man character page.
// - The link's title attribute will be removed, so no tooltip will appear on hover.

