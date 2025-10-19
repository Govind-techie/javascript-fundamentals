/* 

JavaScript Call Stack

The Call Stack is a mechanism that helps the JavaScript interpreter (engine) keep track of function calls in a program.

How it works:
- When a function is invoked, it is added ("pushed") onto the stack.
- When the function finishes execution, it is removed ("popped") from the stack.
- The stack operates on a LIFO (Last In, First Out) principle — the last function that was called is the first to finish execution.

Example flow:
   - Function A calls Function B.
   - Function B calls Function C.
   - The order of execution (stack) will be: [A → B → C].
   - Once C finishes, it’s removed, then B, and finally A.

Important Notes:
- JavaScript is single-threaded → it has only ONE call stack.
- Long-running functions can block the call stack and freeze the UI (in browsers).
- The stack works closely with the Event Loop and Web APIs for asynchronous behavior.

In short:
      The Call Stack keeps track of "where in the code" the program is.
      When functions are called, they are stacked; when they return, they are removed.
*/

// Example - 1

function hello() {
    console.log("Hello");
    // Step 3: "hello" function runs and logs "Hello" to the console.
    // After this function finishes, it is removed (popped) from the stack.
}

function demo() {
    // Step 2: "demo" function is pushed onto the call stack.
    hello(); // Step 3: "hello" function is now called and pushed onto the stack.
    // Step 4: After "hello" completes, it's popped out of the stack.
    // Step 5: Then "demo" finishes and is popped out as well.
}

// Step 1: "demo()" is invoked — this gets pushed onto the call stack first.
demo();

/*
Important Notes:
- The JavaScript Call Stack executes code in a LIFO (Last In, First Out) order.
- Each function call creates a new "stack frame" that holds its execution context.
- When a function finishes, its frame is removed from the stack.
- If a function calls another, the new function gets added on top of the stack.
- When the stack becomes empty, it means the program has finished running.
*/

// ---

// Example - 2
// This example shows how multiple nested function calls are handled in the Call Stack.

function one() {
    // Step 3: "one" is called (multiple times later) and returns 1 each time.
    // After execution, "one" is popped from the stack.
    return 1;
}

function two() {
    // Step 2: "two" is pushed onto the stack when called.
    // Inside "two", "one()" is called twice.
    // So, each call to "one()" adds a new frame to the stack temporarily.
    return one() + one(); // Each "one()" call executes and returns 1, then is removed from stack.
}

function three() {
    // Step 1: "three()" is invoked first, so it’s added to the stack.
    // Inside "three", "two()" is called, which then calls "one()" twice.
    // After "two()" returns its result, "one()" is called again once more.
    let ans = two() + one(); 
    console.log(ans); 
    // Step 4: Once all functions complete, the stack unwinds completely.
}

// Call the main function to start execution.
three();

/*
Call Stack Flow (Step-by-Step):
1. "three()" is called → added to stack.
2. Inside "three()", "two()" is called → added on top of stack.
3. Inside "two()", "one()" is called → added to stack, executes, pops out.
4. Second "one()" is called → executes, pops out.
5. "two()" returns → popped from stack.
6. Back in "three()", "one()" is called again → executes, pops out.
7. "console.log()" runs inside "three" → executes, pops out.
8. "three()" finishes → stack becomes empty.
*/

