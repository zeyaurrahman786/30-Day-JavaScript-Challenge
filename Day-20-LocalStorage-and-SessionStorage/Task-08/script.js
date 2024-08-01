// Task 8 : Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

// Log sessionStorage content
console.log("Before Removal:", sessionStorage.getItem("sessionUser"));

// Remove item
sessionStorage.removeItem("sessionUser");

// Log sessionStorage content after removal
console.log("After Removal:", sessionStorage.getItem("sessionUser"));