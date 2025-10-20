

/*
  Axios - JavaScript

  • Definition:
    Axios is a promise-based HTTP client used to make HTTP requests from both the browser and Node.js.
    It simplifies sending and receiving data from APIs by automatically transforming JSON data 
    and handling errors more effectively than the native fetch() method.

  • Key Points:
    1. Axios returns a Promise just like fetch(), but provides additional features.
    2. It automatically converts response data into JSON (no need for response.json()).
    3. Supports request and response interceptors for global configurations.
    4. Allows setting headers, timeouts, and base URLs easily.
    5. Works seamlessly with async/await syntax for cleaner asynchronous code.

  • Basic Example:
      axios.get('https://api.example.com/data')
        .then(response => console.log(response.data)) // Access parsed data directly
        .catch(error => console.error('Error:', error));

  • Common Uses:
      - Fetching or sending data to APIs (GET, POST, PUT, DELETE requests)
      - Handling authentication tokens (via headers)
      - Managing global API configurations using interceptors
      - Making concurrent API requests using axios.all()

  • Important Notes:
      - Axios automatically parses JSON responses, unlike fetch() which requires manual parsing.
      - Use try...catch with async/await for cleaner error handling.
      - Supports advanced features like request cancellation and interceptors.
      - Ideal for projects that make multiple or complex API calls.
*/

// URL of the API endpoint that provides random cat facts
let url = "https://catfact.ninja/fact";

// Asynchronous function to fetch data using Axios
async function getFacts() {
    try {
        // Send a GET request to the API using Axios
        // 'await' waits for the promise to resolve before moving ahead
        let res = await axios.get(url);

        // Axios automatically parses the response data into JSON format
        // Access the actual cat fact from the response data object
        console.log(res.data.fact);
    } catch (error) {
        // If any network or parsing error occurs, it will be caught here
        console.log("Error: ", error);
    }
}

getFacts();

/*
  Note:
  - Axios simplifies HTTP requests by automatically handling JSON parsing and errors.
  - It returns a Promise, making it easy to use with async/await syntax.
  - Unlike fetch(), there’s no need to manually call response.json() — Axios already gives parsed data.
  - The response object structure is:
      {
        data: actual response data,
        status: HTTP status code,
        statusText: text message (e.g., "OK"),
        headers: response headers,
        config: request configuration
      }
  - Always handle errors using try...catch to prevent runtime crashes.
  - Axios can be customized globally using axios.defaults or interceptors for authentication, logging, etc.
*/

// Headers with axios

let url2 = " https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } }
        let res = await axios.get(url2, config);
        console.log(res.data.joke);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getJokes();