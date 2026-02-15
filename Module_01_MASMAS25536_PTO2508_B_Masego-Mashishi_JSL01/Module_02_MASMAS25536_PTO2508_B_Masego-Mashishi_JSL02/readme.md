JSL02: Task Input and Status Validation System
Project Overview

This project is a JavaScript-based task input system that collects details for two tasks from the user. The program ensures that task information is entered correctly by validating user input and enforcing consistent formatting.

Functionality

The program prompts the user to enter the following details for two separate tasks:

Task title

Task description

Task status

To maintain consistency, the task status input is automatically converted to lowercase. The program only accepts three valid status values: todo, doing, or done. If the user enters an invalid status, an alert message is displayed and the user is repeatedly prompted until a valid status is provided.

Validation and Output

After both tasks have been entered, the program checks for completed tasks (tasks with a status of done).

If one or more tasks are completed, the task title and status are logged to the console.

If no tasks are completed, a motivational message is displayed in the console:
"No tasks completed, let's get to work!"

Code Quality

The JavaScript code uses clear and descriptive variable names and includes comments to explain key logic. This ensures readability, maintainability, and ease of understanding.

Technologies Used

JavaScript