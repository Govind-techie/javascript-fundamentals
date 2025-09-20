

/*
  Switch Statement in JavaScript

  - The switch statement is used to perform different actions based on different conditions.
  - It is often used as a cleaner alternative to multiple if-else-if statements.

  Syntax:
    switch(expression) {
      case value1:
        // Code block if expression === value1
        break;

      case value2:
        // Code block if expression === value2
        break;

      default:
        // Code block if no cases match
    }

  Key Points:
    1. The `break` statement stops execution from falling through to the next case.
    2. If `break` is omitted, execution continues to the next case (fall-through behavior).
    3. The `default` case is optional but useful as a fallback.
*/


// Example: Using switch to handle traffic light signals
// Each case matches a possible traffic light color and executes the corresponding action.

let trafficLight = "red";

switch (trafficLight){
    case "red":
        console.log("Stop");
        break; // stops execution after this case
    case "yellow":
        console.log("Ready");
        break; // prevents execution from falling through to "green"
    case "green":
        console.log("GO");
        break; // prevents execution from reaching default
    default:
        console.log("Broken-Light");
}

// NOTE: 'break' is very important!
// Without 'break', once a case matches, execution will continue to run all following cases
// until it hits a break or the end of the switch block (fall-through behavior).
