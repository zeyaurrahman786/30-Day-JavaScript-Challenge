// Task 3 : Create a simple form that saves user input (e.g., name and email) to localstorage when submitted. Retrieve and display the saved data on page load.

// Save form data to localStorage
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("userData", JSON.stringify({ name, email }));
  displayData();
});

// Display saved data on page load
function displayData() {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    document.getElementById(
      "savedData"
    ).textContent = `Name: ${savedData.name}, Email: ${savedData.email}`;
  }
}

displayData();