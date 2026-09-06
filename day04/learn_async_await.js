// Synchronous and Asynchronous Execution

console.log("Code for Enter Username"); // Synchronous: executes immediately

setTimeout(() => {
    console.log("Code for Enter Password"); // Asynchronous: executes after 5 seconds
}, 5000);

console.log("Code for Click Login Button"); // Executes immediately without waiting

// JavaScript executes normal code synchronously by default.
// Asynchronous operations like setTimeout() do not block the next line.
// To execute asynchronous operations sequentially, we can use async/await and Promises.