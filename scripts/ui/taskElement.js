export function createTaskElement(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.setAttribute("data-task-id", task.id);
  taskCard.setAttribute("data-task-status", task.status);
  taskCard.setAttribute("role", "button");
  taskCard.setAttribute("tabindex", "0");

  taskCard.innerHTML = `
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
  `;

  taskCard.addEventListener("click", () => {
    openTaskDetailsModal(task);
  });

  taskCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openTaskDetailsModal(task);
    }
  });

  return taskCard;
}

function openTaskDetailsModal(task) {
  const taskModal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  if (!taskModal || !titleInput || !descInput || !statusSelect) return;

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  titleInput.disabled = true;
  descInput.disabled = true;
  statusSelect.disabled = true;

  try {
    taskModal.showModal();
  } catch (error) {
    console.error("Unable to open task detail modal:", error);
  }
}
