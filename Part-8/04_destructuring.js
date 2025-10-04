/*
  Destructuring - JavaScript
  Purpose:
    Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
 
  Syntax:
    - Array destructuring:   [a, b] = array
    - Object destructuring:  {key1, key2} = object
 
   Examples:
    // Array Destructuring
    const arr = [1, 2, 3];
    const [x, y, z] = arr; // x = 1, y = 2, z = 3

    // Object Destructuring
    const obj = {name: 'Alice', age: 25};
    const {name, age} = obj; // name = 'Alice', age = 25
 
  Usage Note:
    -> Destructuring helps write cleaner and more readable code, especially when dealing with functions returning arrays or objects.
 */

// Destructuring Example (Array)
let contestants = ["ABC", "PQR", "LMN", "XYZ"];

// Array destructuring: assign first two elements to winner and runnerUp
let [winner, runnerUp] = contestants;

console.log(winner);    // Output: ABC → first element of the array
console.log(runnerUp);  // Output: PQR → second element of the array

/*
  NOTE:
  - Array destructuring allows you to extract multiple elements from an array and assign them to variables in a single line.
  - The order matters: the first variable gets the first element, the second gets the second, and so on.
  - You can skip elements by leaving empty slots: e.g., [first, , third] = array.
  - Useful for cleaner code instead of accessing elements individually with indices.
*/

// Object Destructuring Example
const student = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username: "karan123",
    password: 1234
};

// Destructuring 'username' and 'password' properties into new variable names
const { username: user, password: pass } = student;

console.log(user); // Output: 'karan123'
console.log(pass); // Output: 1234

/*
  NOTE:
  - Object destructuring allows you to extract properties into variables in a single line.
  - You can rename variables during destructuring using the syntax { propName: newVarName }.
  - Useful for extracting only the properties you need without accessing each individually.
*/