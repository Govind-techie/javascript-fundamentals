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

