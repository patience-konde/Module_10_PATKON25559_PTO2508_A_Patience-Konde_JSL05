import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";

import { renderTasks } from "./render.js";

let currentTaskId = null;

/* =========================
   EDIT MODAL HANDLERS
========================= */
export function setupEditModalHandlers() {
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const saveBtn = document.getElementById("save-btn");
  const deleteBtn = document.getElementById("delete-btn");

  // Close modal
  closeModalBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    taskModal.close();
  });

  taskModal?.addEventListener("click", (e) => {
    if (e.target === taskModal) taskModal.close();
  });

  // Save changes
  saveBtn?.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const status = document.getElementById("task-status").value;
    const priority = document.getElementById("task-priority").value;

    const tasks = loadTasksFromStorage();
    const index = tasks.findIndex((task) => task.id === currentTaskId);

    if (index !== -1 && title && description) {
      tasks[index] = {
        ...tasks[index],
        title,
        description,
        status,
        priority,
      };

      saveTasksToStorage(tasks);
      renderTasks(tasks);
      taskModal.close();
    } else {
      alert("Please fill in all fields");
    }
  });

  // Delete task
  deleteBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const tasks = loadTasksFromStorage();
    const updatedTasks = tasks.filter((task) => task.id !== currentTaskId);

    saveTasksToStorage(updatedTasks);
    renderTasks(updatedTasks);
    taskModal.close();
  });
}

// Open edit modal with task data
export function openEditModal(task) {
  currentTaskId = task.id;
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  document.getElementById("task-priority").value = task.priority || "medium";

  document.getElementById("task-modal").showModal();
}

/* =========================
   NEW TASK MODAL HANDLERS
========================= */
export function setupNewTaskModalHandler() {
  const addTaskBtn = document.getElementById("add-new-task-btn");
  const newTaskModal = document.querySelector(".modal-overlay");
  const cancelAddBtn = document.getElementById("cancel-add-btn");
  const newTaskForm = document.getElementById("new-task-modal-window");

  if (!newTaskModal || !addTaskBtn) {
    console.error("Modal or button not found in DOM");
    return;
  }

  // Open modal
  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskModal.showModal();
  });

  // Cancel modal
  cancelAddBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskModal.close();
  });

  // Click outside closes modal
  newTaskModal.addEventListener("click", (e) => {
    if (e.target === newTaskModal) newTaskModal.close();
  });

  // Submit new task
  newTaskForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title-input").value.trim();
    const description = document.getElementById("desc-input").value.trim();
    const status = document.getElementById("select-status").value;
    const priority = document.getElementById("select-priority")?.value || "medium";

    if (title && description) {
      const newTask = {
        id: generateTaskId(),
        title,
        description,
        status,
        priority,
        board: "Launch Career",
      };

      const tasks = loadTasksFromStorage();
      tasks.push(newTask);

      saveTasksToStorage(tasks);
      renderTasks(tasks);

      newTaskForm.reset();
      newTaskModal.close();
    } else {
      alert("Please fill in all fields");
    }
  });
}

/* =========================
   GENERATE TASK ID
========================= */
function generateTaskId() {
  const tasks = loadTasksFromStorage();
  if (tasks.length === 0) return 1;
  return Math.max(...tasks.map((task) => task.id)) + 1;
}