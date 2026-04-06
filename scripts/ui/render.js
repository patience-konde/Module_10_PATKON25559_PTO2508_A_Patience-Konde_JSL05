import { createTaskElement } from "./taskElement.js";
import { openEditModal } from "./modalHandlers.js"; // make sure path is correct

export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach(container => {
    container.innerHTML = "";
  });
}

export function renderTasks(tasks) {
  clearExistingTasks();

  const todoContainer = document.querySelector('.column-div[data-status="todo"]')?.querySelector(".tasks-container");
  const doingContainer = document.querySelector('.column-div[data-status="doing"]')?.querySelector(".tasks-container");
  const doneContainer = document.querySelector('.column-div[data-status="done"]')?.querySelector(".tasks-container");

  const tasksByStatus = {
    todo: tasks.filter(task => task.status === "todo"),
    doing: tasks.filter(task => task.status === "doing"),
    done: tasks.filter(task => task.status === "done"),
  };

  const counts = {
    todo: tasksByStatus.todo.length,
    doing: tasksByStatus.doing.length,
    done: tasksByStatus.done.length,
  };

  if (todoContainer) {
    tasksByStatus.todo.forEach(task => {
      const el = createTaskElement(task);
      el.addEventListener("click", () => openEditModal(task));
      todoContainer.appendChild(el);
    });
  }

  if (doingContainer) {
    tasksByStatus.doing.forEach(task => {
      const el = createTaskElement(task);
      el.addEventListener("click", () => openEditModal(task));
      doingContainer.appendChild(el);
    });
  }

  if (doneContainer) {
    tasksByStatus.done.forEach(task => {
      const el = createTaskElement(task);
      el.addEventListener("click", () => openEditModal(task));
      doneContainer.appendChild(el);
    });
  }

  updateColumnHeaderCounts(counts);
}

function updateColumnHeaderCounts(counts) {
  const todoHeader = document.getElementById("toDoText");
  const doingHeader = document.getElementById("doingText");
  const doneHeader = document.getElementById("doneText");

  if (todoHeader) todoHeader.textContent = `TODO (${counts.todo})`;
  if (doingHeader) doingHeader.textContent = `DOING (${counts.doing})`;
  if (doneHeader) doneHeader.textContent = `DONE (${counts.done})`;
}