

/*
  Array of Objects - JavaScript

  - An array of objects is when multiple objects are stored inside a single array.
  - Useful for representing collections of structured data (like multiple users, products, or students).

  Example:
  let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];

  Accessing Values:
  - users[0].name   → "Alice"
  - users[1].age    → 30

  Updating Values:
  - users[0].age = 26;

  Adding New Object:
  - users.push({ name: "Charlie", age: 22 });

  Note: Array of objects is commonly used to store lists of related entities.
*/

// Example of Array of Objects in action
let students = [
  {
    name: "ABC",
    age: 17,
    marks: 95,
    grade: "A+"
  },
  {
    name: "PQR",
    age: 19,
    marks: 93,
    grade: "A"
  },
  {
    name: "XYZ",
    age: 20,
    marks: 85,
    grade: "B"
  }
];

// Accessing values
console.log(students[0].name); // "ABC"
console.log(students[1].marks); // 93
console.log(students[2].grade); // "B"

// Updating a value
students[0].marks = 97;
console.log(students[0].marks); // 97

// Adding a new student object
students.push({ name: "LMN", age: 18, marks: 90, grade: "A" });
console.log(students);

// Deleting a property from an object inside the array
delete students[2].grade;
console.log(students[2]); 
// { name: "XYZ", age: 20, marks: 85 } → "grade" removed