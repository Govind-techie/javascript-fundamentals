let input = document.querySelector('.inp');
let btn = document.querySelector('.add');
let list = document.querySelector('.list');

btn.addEventListener('click', function() {
    let task = input.value;

    // Check if input is empty
    if (task.trim() === "") {
        alert("Enter a task");
        return; // Stop execution if empty
    }

    // Create a new li element
    let newItem = document.createElement('li');

    // Set its text to the entered task
    newItem.innerText = task;
    
    let delIcon = document.createElement('i');
    delIcon.classList.add("fa-solid", "fa-minus", "delIcon");
    newItem.appendChild(delIcon);
    
    // Append it to the list
    list.append(newItem);

    // Clear input after adding
    input.value = "";

    delIcon.addEventListener('click',function() {
        newItem.remove();
    });
});

// 📘 Mini Projects: Practical JavaScript Applications

// This section showcases **practical JavaScript implementations** — featuring interactive projects that combine various JavaScript concepts learned throughout the course.
// Essential for understanding how different JavaScript concepts work together in real-world applications.

// ### ✅ Projects Included:
// - **eventBubbling** – Demonstrating event propagation through DOM hierarchy with practical examples.
// - **todoAppActivity** – Building a complete todo application with UI interactions and state management.
// - **simon-say-game** – Creating an interactive memory game implementing DOM manipulation, events, and game logic.

// ---

// 📌 **Note:** This repository covers fundamental JavaScript concepts including variables, control flow, arrays, loops, objects, functions, error handling, modern features, DOM manipulation, events, asynchronous JavaScript, API interactions, HTTP libraries, and practical project implementations.
// Future updates will explore:
// - JavaScript Modules
// - Advanced Web APIs

