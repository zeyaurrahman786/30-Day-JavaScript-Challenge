// Task 1 : Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.

// Save string to localStorage
localStorage.setItem("myString", "Hello, LocalStorage!");

// Retrieve and log the string
const savedString = localStorage.getItem("myString");
console.log("Saved String:", savedString);