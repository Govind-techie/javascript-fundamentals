/*
Logical Operators - JavaScript

1. AND (&&)
   - Returns true if both conditions are true.
   Example: (5 > 2 && 10 > 5) → true

2. OR (||)
   - Returns true if at least one condition is true.
   Example: (5 > 10 || 10 > 5) → true

3. NOT (!)
   - Reverses the boolean value of an expression.
   Example: !(5 > 2) → false

Notes:
- These operators are often used in conditional statements (if/else).
- Short-circuiting:
   - In AND (&&), if the first condition is false, it won’t check the second.
   - In OR (||), if the first condition is true, it won’t check the second.
*/

// 1. AND Operator (&&)
let age = 25;
let hasLicense = true;

// Both conditions must be true for the overall result to be true
if (age >= 18 && hasLicense) {
    console.log("You can drive"); // This will execute
}

// 2. OR Operator (||)
let isWeekend = false;
let isHoliday = true;

// At least one condition must be true for the overall result to be true
if (isWeekend || isHoliday) {
    console.log("You can rest today"); // This will execute
}

// 3. NOT Operator (!)
let isLoggedIn = false;

// NOT operator reverses the boolean value
if (!isLoggedIn) {
    console.log("Please log in first"); // This will execute because isLoggedIn is false
}

// Combining multiple logical operators
let score = 85;
let attendance = 75;
let extraCredit = false;

// Complex condition using multiple operators
if ((score >= 80 && attendance >= 70) || extraCredit) {
    console.log("You pass the course");
}

/*
Truth Tables for Logical Operators

1. AND Operator (&&)
   A       B       A && B
   true    true    true
   true    false   false
   false   true    false
   false   false   false

2. OR Operator (||)
   A       B       A || B
   true    true    true
   true    false   true
   false   true    true
   false   false   false

3. NOT Operator (!)
   A       !A
   true    false
   false   true
*/