/*
  Fetch - JavaScript

  • Definition:
    The fetch() function is a modern way to make HTTP requests in JavaScript.
    It allows your code to send and receive data from APIs or servers asynchronously 
    without reloading the web page.

  • Key Points:
    1. fetch() returns a Promise — meaning it runs asynchronously.
    2. You use .then() to handle the successful response, and .catch() for errors.
    3. The response you get first is a "Response" object — to extract actual data, 
       you typically use response.json(), response.text(), or response.blob().
    4. By default, fetch() sends a GET request. 
       For other request types (POST, PUT, DELETE), you can pass an options object.

  • Basic Example:
      fetch('https://api.example.com/data')
        .then(response => response.json())  // Converts the response into JSON
        .then(data => console.log(data))    // Use the received data
        .catch(error => console.error('Error:', error));

  • Common Uses:
      - Fetching data from APIs (GET requests)
      - Sending data to servers (POST requests)
      - Interacting with REST APIs
      - Building dynamic web applications that update data without reloads

  • Important Notes:
      - Always handle errors using .catch() or try...catch with async/await.
      - The fetch() API is built on Promises, not callbacks.
      - It's cleaner, more readable, and modern compared to older XMLHttpRequest.
*/

// URL of the API endpoint we are fetching data from
let url = "https://catfact.ninja/fact";

// The fetch() function initiates a network request to the provided URL.
// It returns a Promise that resolves to a Response object once the server responds.
fetch(url)
    .then((res) => {
        console.log(res); 
        // The 'res' (response) object does not directly contain readable JSON data.
        // To access the actual data, we must convert the response into a usable format using res.json().
        // res.json() also returns a Promise that resolves once the data has been completely read and parsed.
        return res.json();
    })
    .then((data) => {
        // Once the JSON data is parsed, it becomes accessible as a normal JavaScript object.
        console.log(data);        // Logs the entire JSON object returned by the API
        console.log(data.fact);   // Accesses a specific property from the object using key:value syntax
    })
    .catch((err) => {
        // If any error occurs during the fetch or parsing process, it is caught here.
        console.log("Error -", err);
    });

/*
  Note:
  - fetch() is an asynchronous function used to make network requests.
  - It returns a Promise that resolves to a Response object.
  - Use res.json() to convert the response into a usable JSON object.
  - Always handle errors with .catch() or try...catch when using async/await.
  - By default, fetch() performs a GET request unless specified otherwise.
*/

// Fetch with async and await

// URL of the API we want to fetch data from
let url2 = "https://catfact.ninja/fact";

// Defining an asynchronous function to fetch data
async function getFacts() {
    try {
        // The 'await' keyword pauses the function until the Promise (fetch) is resolved
        // 'fetch(url2)' sends a GET request to the provided URL
        let res = await fetch(url2);

        // The response we get is a "Response" object (not the actual data yet)
        // We use 'res.json()' to parse it into a usable JavaScript object
        let data = await res.json();

        // Logs the full response object (useful for debugging and inspecting headers/status)
        console.log(res);

        // Logs the parsed JSON data received from the API
        console.log(data);
    } catch(err) {
        // If any network or parsing error occurs, it will be caught here
        console.log("Error: ", err);
    }
}

/*
  Note:
  - Using async/await makes asynchronous code look synchronous, improving readability.
  - Always wrap fetch calls in try...catch blocks to handle potential errors.
  - 'await fetch()' waits for the network response.
  - 'await res.json()' waits for the response body to be fully read and converted to JSON.
  - This approach is cleaner and more modern compared to chaining .then() and .catch().
*/
