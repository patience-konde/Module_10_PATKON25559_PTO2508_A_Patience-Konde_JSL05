import {createTaskElement} from "./taskElement.js";
/** 
 *  Finds the task container element  based on the status.
*/
function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector(".task-container") : null;
}

/** * Clears all existing tasks from the UI.
 */
export function clearExistingTasks() {
    document.querySelectorAll(".task-container").forEach((container) => {
        container.innerHTML = "";
    });
}
/** * Renders the tasks to their respective columns.
 */
export function renderTasks(tasks) {
    tasks.forEach((task) => {
        const container = getTaskContainerByStatus(task.status);
        if (container) {
            const taskElement = createTaskElement(task);
            container.appendChild(taskElement);
        }
    });
}