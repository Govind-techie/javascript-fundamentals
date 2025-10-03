/*
  The `this` Keyword in JavaScript
 
  Definition:
  - Refers to the object that is executing the current function (the context).
 
  Behavior in Different Contexts:
  1. Global Scope:
     - Refers to the global object (`window` in browsers, `global` in Node.js).
 
  2. Object Methods:
     - Inside a method, `this` refers to the object owning that method.
 
  3. Regular Functions:
     - Non-strict mode: `this` = global object.
     - Strict mode: `this` = undefined.
 
  4. Arrow Functions:
     - Do not have their own `this`; inherit it from the enclosing scope.
 
  5. Constructors & Classes:
     - With `new`, `this` refers to the newly created instance.
 
  Key Notes:
  - `this` is determined by how a function is called, not where it’s defined.
  - Can be explicitly set with `.call()`, `.apply()`, or `.bind()`.
 */

// `this` inside the `avg` method refers to the `studentMarks` object.
const studentMarks =  {
    eng: 87,
    math: 93,
    sci: 91,
    avg: function getAvg() {
        // `this.eng`, `this.math`, and `this.sci` access properties of the same object.
        let avg = (this.eng + this.math + this.sci) / 3;
        console.log(avg);
    }
}
studentMarks.avg();

// Note:
// If you extract the method and call it separately, like:
// const fn = studentMarks.avg; fn();
// the value of `this` inside the function will no longer point to `studentMarks`.
// Instead, it will be `undefined` in strict mode or the global object in non-strict mode.
// This demonstrates why `this` depends on how a function is called.

