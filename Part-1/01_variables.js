/* 
  Variables in JavaScript:
  Variables are containers for storing data values. 
  You can declare variables using `var`, `let`, or `const`.

  - `var`: function-scoped, can be redeclared and updated.
    Example: var x = 5;
  - `let`: block-scoped, can be updated but not redeclared in the same scope.
    Example: let y = 10;
  - `const`: block-scoped, cannot be updated or redeclared. Must be initialized during declaration.
    Example: const z = 15;
*/

// var: Function-scoped variable, can be redeclared and reassigned
// Warning: Generally avoided in modern JavaScript due to potential scope issues
var x = 5;

// let: Block-scoped variable, can be reassigned but not redeclared in same scope
// Preferred for variables that need to be reassigned
let y = 10;

// const: Block-scoped constant, cannot be reassigned or redeclared
// Used for values that should not change after initialization
const z = 15;