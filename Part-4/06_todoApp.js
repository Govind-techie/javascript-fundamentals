/*
  Problem Statement:
  Build a simple Todo App using arrays.
  - LIST   -> Show all todos
  - ADD    -> Add a new todo
  - DELETE -> Delete a todo by index
  - QUIT   -> Exit the app
*/

// Initialize empty array to store todos
let todo = [];
// Initialize command variable to store user input
let command = "";

// Main app loop - continues until user enters "quit"
while (command.toLowerCase() !== "quit") {
    // Prompt user for command and convert to lowercase for case-insensitive comparison
    command = prompt("Enter a command (LIST, ADD, DELETE, QUIT):");

    if (command.toLowerCase() === "list") {
        // LIST command: Display all todos with their indices
        console.log("Your Todos:");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }

    } else if (command.toLowerCase() === "add") {
        // ADD command: Get new todo from user and add to array
        let newTodo = prompt("Enter your todo:");
        todo.push(newTodo);
        console.log(`Added: ${newTodo}`);

    } else if (command.toLowerCase() === "delete") {
        // DELETE command: Show current todos and ask for index to delete
        console.log("Your current todos:");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }

        // Get index from user and convert to number
        let deleteIdx = parseInt(prompt("Enter the index of the todo you want to delete:"));

        // Validate index: must be a number and within array bounds
        if ((!isNaN(deleteIdx) && deleteIdx >= 0) && (deleteIdx < todo.length)) {
            // Use array destructuring to get deleted item and remove it from array
            let [deletedTodo] = todo.splice(deleteIdx, 1);
            console.log(`Deleted: ${deletedTodo}`);
        } else {
            console.log("Invalid index");
        }

    } else if (command.toLowerCase() !== "quit") {
        // Handle invalid commands
        console.log("Unknown command. Please enter LIST, ADD, DELETE, or QUIT.");
    }
}

// Exit message when user quits
console.log("Thanks for using Todo App!");