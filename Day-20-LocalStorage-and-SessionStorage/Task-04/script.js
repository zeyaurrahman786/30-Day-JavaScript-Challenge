// Task 4 : Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

// Log localStorage content
console.log("Before Removal:", localStorage.getItem("user"));

// Remove item
localStorage.removeItem("user");

// Log localStorage content after removal
console.log("After Removal:", localStorage.getItem("user"));