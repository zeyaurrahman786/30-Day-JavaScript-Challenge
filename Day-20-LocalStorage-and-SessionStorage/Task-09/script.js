// Task 9 : * Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  console.log("LocalStorage Value:", localStorage.getItem(key));
  console.log("SessionStorage Value:", sessionStorage.getItem(key));
}

saveToBothStorages("sharedKey", "Shared Value");