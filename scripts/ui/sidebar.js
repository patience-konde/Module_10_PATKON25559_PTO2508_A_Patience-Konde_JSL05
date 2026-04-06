// ui/sidebar.js
export default function initSidebar() {
  const sidebar = document.getElementById("side-bar-div"); // whole nav
  const logo = document.getElementById("logo");
  const toggleBtn = document.getElementById("toggleBtn");

  // Hide sidebar
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("closed");
    sidebar.classList.remove("open");
  });

  // Show sidebar when logo clicked
  logo.addEventListener("click", () => {
    sidebar.classList.add("open");
    sidebar.classList.remove("closed");
  });
}