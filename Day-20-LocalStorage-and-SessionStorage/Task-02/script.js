// Task 2 : Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Save object to localStorage
const user = { name: "Alice", email: "alice@example.com" };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse the object
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log("Saved User:", savedUser);