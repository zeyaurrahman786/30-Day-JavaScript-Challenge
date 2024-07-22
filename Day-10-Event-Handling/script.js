// Activity 1: Basic Event Handling
// Task 1
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("text").textContent = "The text has been changed!";
});

console.log();

// Task 2
document
  .getElementById("toggleImage")
  .addEventListener("dblclick", function () {
    this.classList.toggle("hidden");
  });

console.log();

// Activity 2: Mouse Events
// Task 3
document.getElementById("colorBox").addEventListener("mouseover", function () {
  this.style.backgroundColor = "deeppink";
});

console.log();

// Task 4
document.getElementById("colorBox").addEventListener("mouseout", function () {
  this.style.backgroundColor = "darkgray";
});

console.log();

// Activity 3: Keyboard Events
// Task 5
document
  .getElementById("keyInput")
  .addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
  });

console.log();

// Task 6
document.getElementById("keyInput").addEventListener("keyup", function () {
  document.getElementById(
    "displayValue"
  ).textContent = `Current Value: ${this.value}`;
});

console.log();

// Activity 4: Form Events
// Task 7
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  });

console.log();

// Task 8
document
  .getElementById("selectDropdown")
  .addEventListener("change", function () {
    document.getElementById(
      "displaySelectedValue"
    ).textContent = `Selected Value: ${this.value}`;
  });

console.log();

// Activity 5: Event Delegation
// Task 9
document.getElementById("myList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
});

console.log();

// Task 10
document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${
    document.getElementById("myList").children.length + 1
  }`;
  document.getElementById("myList").appendChild(newItem);
});

console.log();