// scripts/ui/theme.js
export function initThemeToggle() {
  const toggleCheckbox = document.getElementById("theme-toggle-checkbox");
  const sidebar = document.getElementById("sidebar");

  // Initialize theme
  if (!document.body.classList.contains("light-mode") &&
      !document.body.classList.contains("dark-mode")) {
    document.body.classList.add("light-mode");
  }

  // Theme toggle
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  });

  // Sidebar functions
  window.hideSidebar = () => sidebar.classList.add("hidden");
  window.showSidebar = () => sidebar.classList.remove("hidden");
}
