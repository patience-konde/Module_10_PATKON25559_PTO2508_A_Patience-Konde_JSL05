// scripts/ui/theme.js
export function initThemeToggle() {
  const toggleCheckbox = document.getElementById("theme-toggle-checkbox");
  const sidebar = document.getElementById("sidebar");

  // Safety checks
  if (!toggleCheckbox) {
    console.error("Theme toggle checkbox not found");
    return;
  }

  // Load saved theme (optional but recommended)
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleCheckbox.checked = true;
  } else {
    document.body.classList.add("light-mode");
    toggleCheckbox.checked = false;
  }

  // Toggle theme
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  });

  // Sidebar controls
  if (sidebar) {
    window.hideSidebar = () => sidebar.classList.add("collapsed");
    window.showSidebar = () => sidebar.classList.remove("collapsed");
    window.toggleSidebar = () => {
    sidebar.classList.toggle("collapsed");
  };

  } else {
    console.warn("Sidebar element not found");
  }
}
