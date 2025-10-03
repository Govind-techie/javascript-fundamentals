/*
  Methods - JavaScript

  Definition:
    - A method is simply a function that is defined as a property of an object.
    - Methods are used to define behaviors for objects.
    - The main difference between a function and a method:
        - Function: standalone piece of code.
        - Method: function attached to an object.

  Main Characteristics:
    1. Belongs to an object
       - Defined as a property inside an object.
       - Example:
         const person = {
           name: "ABC",
           greet: function() {
             return "Hello, " + this.name;
           }
         };
         person.greet(); // "Hello, Govind"

    2. Uses 'this' keyword
       - Methods can use 'this' to access properties of the same object.
       - Example:
         const car = {
           brand: "Tesla",
           model: "Model 3",
           info: function() {
             return this.brand + " " + this.model;
           }
         };
         car.info(); // "Tesla Model 3"

    3. Built-in Methods
       - JavaScript provides many built-in methods for common objects:
         - String methods: "hello".toUpperCase();  // "HELLO"
         - Array methods: [1, 2, 3].push(4);       // [1, 2, 3, 4]

  Summary:
    - Methods are functions tied to objects.
    - They allow objects to have behaviors (actions).
    - Useful for both built-in objects (String, Array, etc.) and custom objects.
*/

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

console.log(calculator.add(1,2));
console.log(calculator.sub(7,3));
console.log(calculator.mul(3,2));