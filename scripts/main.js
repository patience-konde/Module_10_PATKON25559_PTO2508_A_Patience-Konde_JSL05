// Import utilities
import { loadTasksFromStorage } from "./utils/localStorage.js";

// Import render functions
import { clearExistingTasks, renderTasks } from "./ui/render.js";

// Import UI handlers
import {
  setupEditModalHandlers,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

// Import theme toggle
import { initThemeToggle } from "./ui/theme.js";

// Import sidebar
import { setupSidebar } from "./ui/sidebarManager.js";

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // INITIALIZE UI MODULES
  // =========================
  setupEditModalHandlers();
  setupNewTaskModalHandler();
  initThemeToggle();
  setupSidebar();

  // =========================
  // INITIAL TASK RENDER
  // =========================
  initialTasksBoard();

  // =========================
  // PRIORITY DROPDOWN
  // =========================
  setupPriorityDropdown();
});

// =========================
// TASK BOARD INIT
// =========================
function initialTasksBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
}

// =========================
// PRIORITY DROPDOWN LOGIC
// =========================
function setupPriorityDropdown() {
  const select = document.getElementById("select-priority");

  if (!select) {
    console.error("❌ select-priority not found in DOM");
    return;
  }

  const selected = select.querySelector(".selected");
  const options = select.querySelector(".options");

  if (!selected || !options) return;

  // Toggle dropdown
  selected.addEventListener("click", (e) => {
    e.stopPropagation();
    options.classList.toggle("show");
  });

  // Select option
  options.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      selected.dataset.value = item.dataset.value;
      options.classList.remove("show");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      options.classList.remove("show");
    }
  });
}