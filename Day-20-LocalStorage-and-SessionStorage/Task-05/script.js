// Task 5 : Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

// Save string to sessionStorage
sessionStorage.setItem("sessionString", "Hello, SessionStorage!");

// Retrieve and log the string
const sessionString = sessionStorage.getItem("sessionString");
console.log("Session String:", sessionString);