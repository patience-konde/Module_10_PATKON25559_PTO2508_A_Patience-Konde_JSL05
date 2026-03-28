import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { renderTasks } from "./render.js";

export function setupModalCloseHandler() {
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (taskModal) {
        taskModal.close();
      }
    });
  }


  if (taskModal) {
    taskModal.addEventListener("click", (e) => {
      if (e.target === taskModal) {
        taskModal.close();
      }
    });
  }
}

/**
 * Setup handlers for the "Add New Task" button and modal
 */
export function setupNewTaskModalHandler() {
  const addTaskBtn = document.getElementById("add-new-task-btn");
  const newTaskModal = document.querySelector(".modal-overlay");
  const cancelAddBtn = document.getElementById("cancel-add-btn");
  const newTaskForm = document.getElementById("new-task-modal-window");

  if (!newTaskModal || !addTaskBtn) {
    console.error("Modal or button not found in DOM");
    return;
  }


  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Add Task button clicked");
    try {
      newTaskModal.showModal();
      console.log("Modal opened successfully");
    } catch (error) {
      console.error("Error opening modal:", error);
    }
  });

  if (cancelAddBtn) {
    cancelAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      newTaskModal.close();
    });
  }

 

  
  if (newTaskForm) {
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted");

      const titleInput = document.getElementById("title-input");
      const descInput = document.getElementById("desc-input");
      const statusSelect = document.getElementById("select-status");

      if (!titleInput || !descInput || !statusSelect) {
        console.error("Form inputs not found");
        return;
      }

      const title = titleInput.value.trim();
      const description = descInput.value.trim();
      const status = statusSelect.value;

      console.log("Form values:", { title, description, status });

      if (title && description) {
        const newTask = {
          id: generateTaskId(),
          title,
          description,
          status,
          board: "Launch Career",
        };

        console.log("Creating task:", newTask);

        const tasks = loadTasksFromStorage();
        tasks.push(newTask);
        saveTasksToStorage(tasks);
        console.log("Tasks saved to storage");

        renderTasks(tasks);
        console.log("Board re-rendered");

        newTaskForm.reset();
        newTaskModal.close();
        console.log("Modal closed, form reset");
      } else {
        console.warn("Title or description is empty");
      }
    });
  } else {
    console.error("Form element not found");
  }
}

/**
 * Generate a unique task ID
 * @returns {number} - A unique task ID
 */
function generateTaskId() {
  const tasks = loadTasksFromStorage();
  if (tasks.length === 0) return 1;
  return Math.max(...tasks.map((task) => task.id)) + 1;
}

