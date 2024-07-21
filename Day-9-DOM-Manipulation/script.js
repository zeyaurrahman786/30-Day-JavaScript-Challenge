// Day 9: DOM Manipulation



// Tasks/Activities:


// Activity 1: Selecting and Manipulating Elements 

// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("changeText").textContent = "Text Content Changed";

// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".bgColorChange").style.backgroundColor = "red";



// Activity 2: Creating and Appending Elements 

// * Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = "Creating a new div and adding text content to it.";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.textContent = "List Item Added Successfully.";
document.querySelector("ul").appendChild(newLi);



// Activity 3: Removing Elements 

// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById("parentElement");
parentElement.removeChild(parentElement.lastChild);



// Activity 4: Modifying Attributes and Classes 

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.querySelector(".firstImage");
image.src = "./changedImage.png";

// Task 8: Add and remove a CSS class to/from an HTML element.
const myElement = document.querySelector(".elem");
myElement.classList.add("addClass");
myElement.classList.remove("removeClass");



// Activity 5: Event Handling 

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").textContent = "Paragraph Text changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.querySelector(".hoverElement").addEventListener("mouseover", () => {
  document.querySelector(".hoverElement").style.borderColor = "red";
});