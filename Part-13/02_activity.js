// Activity-1:
// This small activity demonstrates how to fetch data from an API using Axios 
// and display it dynamically in the HTML page when a button is clicked.

let link = "https://catfact.ninja/fact";

// Selecting the paragraph element where the fetched fact will be displayed
let para = document.querySelector(".facts");

// Selecting the button element that will trigger the API request on click
let btn = document.querySelector(".btn");

// Adding a click event listener to the button
// When the button is clicked, the getFacts2() function will be executed
btn.addEventListener("click", getFacts);

// Defining an asynchronous function to fetch and display the data
async function getFacts() {
    try {
        // Sending a GET request to the API endpoint using Axios
        // 'await' waits for the response before proceeding
        let res = await axios.get(link);

        // Updating the paragraph's inner text with the fetched cat fact from the API response
        para.innerText = res.data.fact;
    } catch (error) {
        // If an error occurs (like a network issue or invalid response), it will be caught here
        console.log("Error fetching cat fact:", error);

        // Optionally, we can display a user-friendly error message on the page
        para.innerText = "Failed to fetch cat fact. Please try again later.";
    }
}

// Activity-2: 
// This activity demonstrates how to fetch a random dog image using Axios 
// and display it dynamically on the webpage when a button is clicked by the user.

// URL of the Dog API endpoint that provides a random dog image
let link2 = "https://dog.ceo/api/breeds/image/random";

// Selecting the image element from the HTML where the fetched dog image will be displayed
let img = document.querySelector(".img");

// Selecting the button element from the HTML that triggers the API request when clicked
let btn2 = document.querySelector(".btn2");

// Adding an event listener to the button
// When the user clicks the button, the dogPic() function is called
btn2.addEventListener("click", dogPic);

// Defining an asynchronous function to fetch and display the dog image
async function dogPic() {
    try {
        // Sending a GET request to the Dog API using Axios
        // 'await' pauses the execution until Axios receives the response from the server
        let res = await axios.get(link2);

        // The API response includes an image URL inside the 'message' property
        // We assign that URL to the 'src' attribute of the <img> tag to display the fetched image
        img.src = res.data.message;
    } catch (error) {
        // If an error occurs during the fetch request, it will be caught here
        console.log("Error fetching dog image:", error);

        // Optionally, we can update the image alt text to indicate failure
        img.alt = "Failed to load dog image. Please try again later.";
    }
}