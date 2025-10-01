/*
Break Keyword - JavaScript

Syntax:
break;

Explanation:
The break statement immediately exits the loop or switch statement in which it appears.


Important Notes:
- break only affects the nearest enclosing loop or switch.
- Useful for stopping loops early when a specific condition is satisfied.
- Prevents unnecessary iterations.
*/

// Example 1: Using break in a for loop to stop when a condition is met.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exits the loop when i equals 5
  }
  console.log(i);
}

// Example 2: Using break in a switch case.
let day = "Sunday";
switch (day) {
  case 'Monday':
    console.log('Start of the work week');
    break; // exits the switch after this case
  case 'Friday':
    console.log('End of the work week');
    break;
  case 'Sunday':
    console.log("Sunday, Funday, Holiday!!");
    break;
  default:
    console.log('Midweek days');
    break;
}