/*
  Conditional Statements - JavaScript

  - Used to perform different actions based on conditions.
  - Conditions evaluate to true or false.

  Types:
  1. if statement      → Executes code if the condition is true.
  2. if...else         → Executes one block if condition is true, otherwise another block.
  3. if...else if...else → Used for multiple conditions.
  4. switch statement  → Used for multiple possible values of a single expression.
  5. nested if...else  → If statements inside another if statement.

  Examples:
  let age = 20;

  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
*/

// Variable to store user's age
let age = 23;

// If block: Executes when condition (age >= 18) is true
if (age >= 18){ 
    console.log("You are elgible to vote")
} 
// Else block: Executes only when the if condition is false (age < 18)
else {
    console.log("You are not eligible to vote")
}

// Note: Only one block will execute:
// - If age is 18 or greater, only the if block runs
// - If age is less than 18, only the else block runs

// Example of else-if statements for grade calculation
let score = 85;

// Multiple conditions are checked in sequence until one is true
if (score >= 90) {
    console.log("Grade: A"); // Executes if score is 90 or above
} 
else if (score >= 80) {
    console.log("Grade: B"); // Executes if score is between 80-89
} 
else if (score >= 70) {
    console.log("Grade: C"); // Executes if score is between 70-79
} 
else if (score >= 60) {
    console.log("Grade: D"); // Executes if score is between 60-69
} 
else {
    console.log("Grade: F"); // Executes if none of the above conditions are true (score < 60)
}

// Note: 
// - Conditions are checked from top to bottom
// - Only the first true condition's block will execute
// - If no condition is true, the else block executes

// Example of nested if-else statements
let userAge = 20;
let hasID = true;

// Outer if checks age
if (userAge >= 18) {
    // Inner if checks for ID
    if (hasID) {
        console.log("Welcome to the club!");
    } else {
        console.log("Please bring your ID next time.");
    }
} else {
    console.log("Sorry, you must be 18 or older.");
}

// Note for nested if-else:
// - Inner if-else only executes if outer condition is true
// - Helps check multiple conditions in sequence
// - Can have multiple levels of nesting (though not recommended for readability)

