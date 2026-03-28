import { createTaskElement } from "./elements.js";

/** 
 * find the tasks container element based on status and render the tasks
 */
function getContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector(".tasks-container") : null;
}
/**
 * clear all existing tasks from the UI before re-rendering
 */
export function clearExistingTasks() {
    document.querySelectorAll(".tasks-container").forEach(container => {
        container.innerHTML = "";
    });
}

/**
 * render the tasks to their respective columns based on their status
 */
export function renderTasks(tasks) {
    tasks.forEach(task => {
        const container = getContainerByStatus(task.status);
        if (container) {
            const taskElement = createTaskElement(task);
            container.appendChild(taskElement);
        } else {
            console.warn(`No container found for status: ${task.status}`);
        }
    });
}

