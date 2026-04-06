import { openEditModal } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.setAttribute("data-task-id", task.id);
  taskCard.setAttribute("data-task-status", task.status);
  taskCard.setAttribute("role", "button");
  taskCard.setAttribute("tabindex", "0");

  taskCard.innerHTML = `
    <h3 class="task-title">${task.title}</h3>
  `;

  // Click or keyboard opens edit modal
  taskCard.addEventListener("click", () => {
    openEditModal(task);
  });

  taskCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEditModal(task);
    }
  });

  return taskCard;
}