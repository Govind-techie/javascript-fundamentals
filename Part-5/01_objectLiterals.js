/*
  Object Literals in JavaScript
 
  - An object literal is a simple way to create objects using `{}`.
  - Objects store data in key-value pairs.
  - Keys (also called properties) are usually strings, values can be any data type (string, number, boolean, array, function, another object, etc.).
 
  Example:
  let person = {
    name: "Alice",
    age: 25,
    isStudent: true
 };

  Accessing Values:
  - Dot notation: person.name   → "Alice"
  - Bracket notation: person["age"] → 25
 
  Updating Values:
  - person.age = 26;
  - person["isStudent"] = false;
 
  Adding New Properties:
  - person.city = "New York";
 
  Deleting Properties:
  - delete person.isStudent;
 
  Note: Object literals are the most common way to define and work with objects in JavaScript.
*/

// Creating a student object with basic information
let student = {
    stName: "ABC",    // Student's name
    age: 17,          // Student's age
    marks: 95.32,     // Student's marks (percentage)
};

// Creating a social media thread object
let thread = {
    username: "@stevejobs",     // User handle
    content: "Stay Hungry, Stay Foolish",    // Post content
    likes: 100,                 // Number of likes on the post
    repost: 75,                 // Number of reposts/shares
    hashtags: ["#learning", "#growth-mindset", "#stevejobs"]    // Array of hashtags
};

// Demonstrating different ways to access object properties
// Using template literal with dot notation
console.log(`student name: ${student.stName}`);
// Using simple dot notation
console.log(thread.username);
// Accessing array stored as object property
console.log(thread.hashtags);
console.log(thread.likes);
// Using square bracket notation - alternative way to access properties
console.log(thread["repost"]); 

// Demonstrating how to modify and add properties
// Adding new 'name' property (Note: this is different from stName)
student.name = "XYZ";
console.log(student.name);      // Shows the newly added/modified property
// Adding a completely new property 'gender'
student.gender = "male";
console.log(student.gender);    // Shows the newly added property

// Demonstrating property deletion
delete student.marks;           // Removing the marks property
console.log(student.marks);     // Shows undefined as property no longer exists

