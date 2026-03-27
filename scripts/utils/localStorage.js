import { initialTasks } from "../../initialData.js";

export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
   
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
      return initialTasks;
    }
  }

  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}




