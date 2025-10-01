/*
  Nested Objects - JavaScript
 
  - A nested object means an object inside another object.
  - Useful for representing structured data (like a user profile, settings, or product details).
 
  Example:
  let user = {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      zip: 10001
    }
  };
 
  Accessing Nested Values:
  - user.address.city   → "New York"
  - user["address"]["zip"] → 10001
 
  Updating Nested Values:
  - user.address.city = "Los Angeles";
 
  Adding New Nested Properties:
  - user.address.country = "USA";
 
  Note: Nested objects help organize data in a clear and logical way.
*/

// Example of Nested Object in action
let studentInfo = {
    ABC: {
        age: 17,
        marks: 95,
        grade: "A+"
    },
    PQR: {
        age: 19,
        marks: 93,
        grade: "A"
    },
    XYZ: {
        age: 20,
        marks: 85,
        grade: "B"
    }
};

// Accessing nested values
console.log(studentInfo.ABC.age);   // 17
console.log(studentInfo.PQR.marks); // 93
console.log(studentInfo.XYZ.grade); // "B"

// Updating nested values
studentInfo.ABC.marks = 97;
console.log(studentInfo.ABC.marks); // 97

// Adding new nested property
studentInfo.PQR.subject = "Mathematics";
console.log(studentInfo.PQR.subject); // "Mathematics"

// Deleting nested property
delete studentInfo.XYZ.grade;
console.log(studentInfo.XYZ); 
// { age: 20, marks: 85 } → "grade" removed