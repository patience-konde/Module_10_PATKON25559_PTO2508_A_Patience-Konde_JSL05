import {loadTasksFromStorage} from "./utils/localStorage.js";
import {clearExistingTasks, renderTasks} from "./utils/renderTasks.js";
import {
    setupModalCloseHandler,
    setupNewTaskModalHandler,
} from "./ui/modalHandler.js";

function initialTaskBoard() {
    const tasks = loadTasksFromStorage();
    clearExistingTasks();
    renderTasks(tasks);
    setupModalCloseHandler();
    setupNewTaskModalHandler();
}
document.addEventListener("DOMContentLoaded", initialTaskBoard);