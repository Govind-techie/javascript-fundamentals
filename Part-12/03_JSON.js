/*
  JSON - JavaScript

1. What is JSON?
   - JSON stands for JavaScript Object Notation.
   - It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
   - JSON is primarily used to exchange data between a server and a client in web applications.

2. Why JSON?
   - Readable: JSON syntax is easy to read and understand.
   - Lightweight: Less verbose than XML, making it efficient for data transfer.
   - Language Independent: JSON is text-based and supported by most programming languages.

3. JSON Syntax Example
   // Example of a JSON object:
   {
     "name": "Alice",
     "age": 28,
     "isStudent": false
   }

   // Example of a JSON array:
   [
     { "id": 1, "product": "Book" },
     { "id": 2, "product": "Pen" }
   ]

4. Converting JSON to JS object
   - Use `JSON.parse(jsonString)` to convert a JSON string into a JavaScript object.
   - Example:
     const jsonString = '{"name":"Bob","age":30}';
     const obj = JSON.parse(jsonString); // obj is now a JS object

5. Converting JS object to JSON
   - Use `JSON.stringify(jsObject)` to convert a JavaScript object into a JSON string.
   - Example:
     const user = { name: "Carol", age: 25 };
     const json = JSON.stringify(user); // json is now a string

6. Important Points
   - Property names in JSON must be double-quoted strings.
   - JSON values can be strings, numbers, objects, arrays, booleans, or null.
   - JSON cannot contain functions, undefined, or comments.
   - Trailing commas are not allowed in JSON.

7. Real-world Examples
   - Exchanging data with APIs (RESTful services).
   - Storing data in localStorage or files.
   - Configuration files for apps and tools.

8. Quick Note
   - JSON is the de facto standard format for communication between client and server in web development.
*/

// Accessing JSON Data

// JSON data received as a string (typical in API responses)
let jsonData = '{"fact":"Spanish-Jewish folklore recounts that Adam’s first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child’s breath.","length":245}'

// Note: API responses in JSON format are received as strings by default.
// Use JSON.parse() to convert them into JavaScript objects.

// Convert the JSON string into a JavaScript object
let parsedData = JSON.parse(jsonData);

// Accessing a property from the JavaScript object
// Here, we print the 'fact' property of the parsed object
console.log(parsedData.fact);

// Creating a regular JavaScript object
let student = {
   studentName: "ABC",
   marks: 95,
   age: 17
}

// Convert the JavaScript object into a JSON string
// Useful for sending data to APIs or saving in localStorage
let jsonString = JSON.stringify(student);

// Print the JSON string representation of the student object
console.log(jsonString);


/*
  Important Points / Notes:

  1. JSON.parse() always takes a string as input and returns a JavaScript object.
     - If the string is not valid JSON, it will throw a syntax error.
  
  2. JSON.stringify() converts a JavaScript object into a string.
     - This is required when sending data to APIs or storing it in localStorage.

  3. When accessing data from a parsed JSON object, use dot notation or bracket notation:
     - e.g., obj.property or obj["property"]

  4. JSON property names must always be double-quoted strings.
     - Single quotes are invalid in JSON strings.

  5. JSON cannot store functions, undefined, or special objects like Date directly.
     - Only strings, numbers, objects, arrays, booleans, or null are allowed.

  6. Variable naming: Avoid using `JSON` as a variable name in real code.
     - `JSON` is a built-in JavaScript object, and overwriting it may cause bugs.
*/