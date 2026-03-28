# Kanban Task Management App

A simple, responsive Kanban board built with **HTML, CSS, and JavaScript**.  
This project helps you organize tasks into three columns: **TODO, DOING, and DONE**.  
It features task creation, status tracking, and a modal for viewing task details.

---

## ✨ Features

- 📌 Add new tasks with a title, description, and status
- 📊 Organize tasks into **TODO, DOING, DONE** columns
- 🔄 Update task counts dynamically in each column header
- 🎨 Responsive layout styled with CSS
- 🖼️ Modal window for viewing task details
- ⌨️ Keyboard accessibility (open tasks with Enter/Space)

---

## 📂 Project Structure

kanban-task-app/
│
├── index.html
├── styles.css
├── assets/
│   └── logo.png              # Example asset (replace with your own)
│
├── scripts/
│   ├── task/
│   │   └── taskElement.js    # Builds individual task cards
│   │
│   ├── ui/
│   │   └── render.js         # Renders tasks into columns
│   │
│   └── utils/
│       └── storage.js        # Utility functions (e.g. localStorage)
│
└── README.md
---

## 🛠️ Usage
- Click + Add New Task to create a task.

- Fill in the title, description, and select a status.

- Tasks will appear in the correct column (TODO, DOING, DONE).

- Click a task card to open the Task Details Modal.

- Task counts update automatically in each column heade.
---

## 🎨 Customization
- Edit styles.css to change colors, spacing, or typography.

- Modify scripts/task/taskElement.js if you want to show only titles (no descriptions).

- Extend scripts/ui/render.js to add features like drag‑and‑drop or persistence.

- Use scripts/utils/storage.js to save tasks in localStorage.
----

## 🔮 Future Improvements

- ✅ Drag‑and‑drop task movement between columns

- ✅ Dark mode toggle

- ✅ LocalStorage or database persistence

- ✅ User authentication for multiple boards

- ✅ Mobile‑friendly enhancements.
---

## 🙌 Acknowledgements
Inspired by Kanban methodology for task management

Built with vanilla JavaScript, HTML, and CSS.

