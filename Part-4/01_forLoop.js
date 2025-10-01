/*
For Loop in JavaScript

Syntax:
for (initialization; condition; increment/decrement) {
    // code to execute in each iteration
}

1. Initialization:
   - Runs once at the start of the loop.
   - Commonly used to declare and set a loop counter variable.

2. Condition:
   - Checked before each iteration.
   - If true → loop body executes.
   - If false → loop stops.

3. Increment/Decrement:
   - Updates the loop counter after each iteration.


Syntax: 
for (initialisation; condition; updation){
    // Code Block
}

Example 1: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5

Example 2: Countdown from 5
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5 4 3 2 1

Important Notes:
- `for` loop is best when the number of iterations is known.
- Avoid infinite loops by ensuring the condition eventually becomes false.
- The loop counter variable (`i`) is usually `let` to keep block scope.
*/

// Example1: Print number from 1 to 5.
for (let i = 0 ; i <= 5 ; i++){
    console.log(i);
}

// Example2: Print number 5 to 1 (backward loop)
for (let i = 5 ; i >= 1 ; i--){
    console.log(i);
}

// Note: Variables declared with let/const inside the loop are block-scoped,
// meaning they cannot be accessed outside the loop.

// Problem: Print all odd numbers (1 to 15)

for (let i = 1 ; i <= 15 ; i++){
    // Using modulo operator (%):
    // If a number divided by 2 leaves a remainder of 1 → it’s an odd number.
    if (i % 2 === 1){
        console.log(i);
    }
}

// Problem: Print all even numbers (2 to 10)

for (let i = 2 ; i <= 10 ; i++){
    // Using modulo operator (%):
    // If a number divided by 2 leaves a remainder of 0 → it’s an even number.
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
Infinite Loop Example:
The following loop creates an infinite loop because the condition `i >= 0` is always true as `i` increases.
Since `i` starts at 1 and is incremented by 1 on each iteration, it will never become less than 0,
so the condition never becomes false and the loop never stops.
*/

// for (let i = 1 ; i >= 0 ; i++){
//     console.log(i);
// }

// Note: Infinite loops are harmful for your system as they consume memory and processing power without stopping.



// Problem: Print multiplication table of 5

// Loop from 1 to 10 to generate the multiplication table
for (let i = 1; i <= 10 ; i++){
    // Template literals (``) let us embed variables and expressions directly using ${}
    console.log(`5 X ${i} = ${5*i}`);
}

// Nested Loops

// Example: Print a simple pattern using nested loops
// Outer loop controls the number of rows
for (let i = 1; i <= 3; i++) {
    // Inner loop runs for each column in the current row
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* "; // Add a star for each column (string concatenation)
    }
    console.log(row); // Print the row after inner loop completes
}

// Output:
// *
// * *
// * * *