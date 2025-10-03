/*

  High-Order Functions - JavaScript
 
  Definition:
    - A high-order function (HOF) is a function that does at least one of the following:
      - Takes one or more functions as arguments (parameters)
    - Returns a function as its result
 
  Main Characteristics:
    1. Takes other functions as arguments
       - Example: Array methods like 'map', 'filter', and 'forEach' take a function as a parameter.
       - Example:
         const numbers = [1, 2, 3, 4];
         // 'map' takes a function as argument
         const doubled = numbers.map(function(num) {
           return num * 2;
         });
         // doubled = [2, 4, 6, 8]
 
    2. Returns a function
       - Example: A function that creates other functions.
       - Example:
         function multiplier(factor) {
           // Returns a function
           return function(number) {
             return number * factor;
           };
        }
        const double = multiplier(2);
        double(5); // 10
 
Summary:
- High-order functions enable powerful patterns like callbacks, function composition, and abstraction in JavaScript.
*/

// Example 1: Passing a function as an argument using 'map'
const numbers = [1, 2, 3, 4];
// 'map' is a high-order function that takes a callback function as an argument
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]

// Example 2: Function returning another function (multiplier)
function multiplier(factor) {
  // Returns a new function that multiplies its input by 'factor'
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

