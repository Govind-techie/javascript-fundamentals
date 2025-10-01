/*
While Loop in JavaScript

Syntax:
while (condition) {
    // code to execute in each iteration
}

1. Initialization:
   - Usually done before the loop starts.

2. Condition:
   - Checked before each iteration.
   - If true → loop body executes.
   - If false → loop stops.

3. Update:
   - The loop variable should be updated inside the loop body to avoid infinite loops.

Example 1: Print numbers 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5

Example 2: Countdown from 5
let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}
// Output: 5 4 3 2 1

Important Notes:
- `while` loop is best when the number of iterations is not exactly known in advance.
- Be careful to update the loop variable, otherwise it may cause an infinite loop.
*/

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}
