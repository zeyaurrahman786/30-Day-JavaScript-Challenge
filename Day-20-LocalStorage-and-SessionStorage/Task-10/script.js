// Task 10 : Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();

  console.log("LocalStorage after clear:", localStorage.length);
  console.log("SessionStorage after clear:", sessionStorage.length);
}

clearAllStorages();