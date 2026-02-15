// Prompt user for Task 1 details
let task1Title = prompt("Enter task 1 title:");
let task1Description = prompt("Enter task 1 description:");
let task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();

// Validate Task 1 status
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}

// Prompt user for Task 2 details
let task2Title = prompt("Enter task 2 title:");
let task2Description = prompt("Enter task 2 description:");
let task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();

// Validate Task 2 status
while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

// Track if any task is completed
let completedTaskFound = false;

// Log completed tasks
if (task1Status === "done") {
  console.log(`Task Completed: ${task1Title} - Status: ${task1Status}`);
  completedTaskFound = true;
}

if (task2Status === "done") {
  console.log(`Task Completed: ${task2Title} - Status: ${task2Status}`);
  completedTaskFound = true;
}

// If no tasks were completed
if (!completedTaskFound) {
  console.log("No tasks completed, let's get to work!");
}

