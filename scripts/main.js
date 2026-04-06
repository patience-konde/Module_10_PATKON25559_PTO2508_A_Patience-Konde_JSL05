// Import utilities
import { loadTasksFromStorage } from "./utils/localStorage.js";

// Import render functions (now inside ui/)
import { clearExistingTasks, renderTasks } from "./ui/render.js";

// Import UI handlers
import { setupEditModalHandlers, setupNewTaskModalHandler } from "./ui/modalHandlers.js";

document.addEventListener("DOMContentLoaded", () => {
  setupEditModalHandlers();
  setupNewTaskModalHandler();
});

// Import theme toggle

import { initThemeToggle } from "./ui/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
});


// Initialize the board
function initialTasksBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}
const select = document.getElementById("task-priority");
const selected = select.querySelector(".selected");
const options = select.querySelector(".options");

selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

options.querySelectorAll("li").forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    selected.className = "selected " + option.className;
    options.style.display = "none";
    // You can also store the value:
    console.log("Selected priority:", option.dataset.value);
  });
});

// Close dropdown if clicking outside
window.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    options.style.display = "none";
  }
});

// Run once DOM is ready
document.addEventListener("DOMContentLoaded", initialTasksBoard);
