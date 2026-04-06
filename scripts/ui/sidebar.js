// ui/sidebar.js
export default function initSidebar() {
  const sidebar = document.getElementById("side-bar-div"); // whole nav
  const logo = document.getElementById("logo");
  const toggleBtn = document.getElementById("toggleBtn");

  if (!sidebar || !logo || !toggleBtn) {
    console.error("Sidebar elements not found in DOM");
    return;
  }

  // Hide sidebar
  toggleBtn.addEventListener("click", () => {
    console.log("Toggle button clicked"); // debug
    sidebar.classList.add("closed");
    sidebar.classList.remove("open");
  });

  // Show sidebar when logo clicked
  logo.addEventListener("click", () => {
    console.log("Logo clicked"); // debug
    sidebar.classList.add("open");
    sidebar.classList.remove("closed");
  });
}