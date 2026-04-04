// Import utilities
import { loadTasksFromStorage } from "./utils/localStorage.js";

// Import render functions (now inside ui/)
import { clearExistingTasks, renderTasks } from "./ui/render.js";

// Import UI handlers
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler
} from "./ui/modalHandlers.js";

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

// Run once DOM is ready
document.addEventListener("DOMContentLoaded", initialTasksBoard);
