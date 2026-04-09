// api/taskApi.js

// Example: Task API module for CRUD operations
// This assumes you’re using fetch to call a backend REST API.
// Adjust the base URL to match your server setup.

const BASE_URL = "http://localhost:5000/api/tasks"; // replace with your backend URL

// Get all tasks
export async function getTasks() {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
}

// Get a single task by ID
export async function getTaskById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch task");
  return response.json();
}

// Create a new task
export async function createTask(taskData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) throw new Error("Failed to create task");
  return response.json();
}

// Update an existing task
export async function updateTask(id, taskData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
}

// Delete a task
export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
  return response.json();
}