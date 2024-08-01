// Task 7 : Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

// Save form data to sessionStorage
document.getElementById("sessionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("sessionName").value;
  const email = document.getElementById("sessionEmail").value;
  sessionStorage.setItem("sessionData", JSON.stringify({ name, email }));
  displaySessionData();
});

// Display saved data on page load
function displaySessionData() {
  const savedSessionData = JSON.parse(sessionStorage.getItem("sessionData"));
  if (savedSessionData) {
    document.getElementById(
      "sessionData"
    ).textContent = `Name: ${savedSessionData.name}, Email: ${savedSessionData.email}`;
  }
}

displaySessionData();