let tasks = [];
let isEditing = false;
let editingIndex = null;

// Handle form submission to add or edit a task
document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;

  if (isEditing) {
    // Update the existing task
    tasks[editingIndex] = { title, description, dueDate };
    isEditing = false;
    editingIndex = null;
  } else {
    // Add a new task
    const task = { title, description, dueDate };
    tasks.push(task);
  }

  displayTasks();
  this.reset();
});

// Function to display all tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <small>Due: ${task.dueDate}</small>
            </div>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  });
}

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;

  isEditing = true;
  editingIndex = index;
}

// Function to delete a task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    displayTasks();
  }
}
