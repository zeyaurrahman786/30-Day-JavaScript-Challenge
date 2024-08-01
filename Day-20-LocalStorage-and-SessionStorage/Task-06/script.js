// Task 6 : * Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save object to sessionStorage
const sessionUser = { name: "Bob", email: "bob@example.com" };
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));

// Retrieve and parse the object
const sessionSavedUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log("Session User:", sessionSavedUser);