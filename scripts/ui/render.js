import { createTaskElement } from "./taskElement.js";

export function clearExistingTasks() {
  const tasksContainers = document.querySelectorAll(".tasks-container");
  tasksContainers.forEach((container) => {
    container.innerHTML = "";
  });
}

export function renderTasks(tasks) {
  clearExistingTasks();

  const todoContainer = document
    .querySelector('.column-div[data-status="todo"]')
    ?.querySelector(".tasks-container");
  const doingContainer = document
    .querySelector('.column-div[data-status="doing"]')
    ?.querySelector(".tasks-container");
  const doneContainer = document
    .querySelector('.column-div[data-status="done"]')
    ?.querySelector(".tasks-container");

  
  const tasksByStatus = {
    todo: tasks.filter((task) => task.status === "todo"),
    doing: tasks.filter((task) => task.status === "doing"),
    done: tasks.filter((task) => task.status === "done"),
  };

 
  const counts = {
    todo: tasksByStatus.todo.length,
    doing: tasksByStatus.doing.length,
    done: tasksByStatus.done.length,
  };

  
  if (todoContainer) {
    tasksByStatus.todo.forEach((task) => {
      todoContainer.appendChild(createTaskElement(task));
    });
  }

  if (doingContainer) {
    tasksByStatus.doing.forEach((task) => {
      doingContainer.appendChild(createTaskElement(task));
    });
  }

  if (doneContainer) {
    tasksByStatus.done.forEach((task) => {
      doneContainer.appendChild(createTaskElement(task));
    });
  }

  /
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

