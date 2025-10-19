/* 
JavaScript Breakpoints

What are Breakpoints?
Breakpoints are intentional stopping points or "pauses" set in the code (usually using developer tools or the `debugger;` statement).
They help you inspect the code line by line to understand how it executes and debug issues effectively.

How they work:
1. You can set breakpoints in your browser’s DevTools (Sources tab in Chrome).
2. When code execution reaches a breakpoint, it pauses.
3. You can then:
   - Inspect variable values.
   - Step over (execute the next line).
   - Step into (go inside a function).
   - Step out (finish current function and return).
   - Continue execution.

Types of Breakpoints:
- Line breakpoint: Stops at a specific line.
- Conditional breakpoint: Stops only if a given condition is true.
- Debugger keyword: You can add `debugger;` in your code to trigger a breakpoint programmatically.

Example:
function testDebug(x) {
    debugger; // Execution will pause here if DevTools is open
    let y = x * 2;
    return y;
}
testDebug(5);

Why they’re useful:
- Help trace bugs and logic errors efficiently.
- Let you watch the call stack and variable changes in real time.
- Provide insights into function flow, loops, and conditional branches.

Quick note:
Breakpoints are a feature of browser DevTools (e.g., Chrome DevTools). To really learn them, open DevTools (Sources tab) and try setting line/conditional breakpoints or add `debugger;` in this file while running the code — hands-on practice makes the behavior clear.
*/

