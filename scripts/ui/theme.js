// scripts/ui/theme.js
export function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const sidebar = document.getElementById("side-bar-div");
  const lightIcon = document.querySelector('img[alt="light-theme-icon"]');
  const darkIcon = document.querySelector('img[alt="dark-theme-icon"]');

  if (!toggleBtn) {
    console.error("Theme toggle button not found");
    return;
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || "light";
  applyTheme(initialTheme);

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Helper function to apply theme and update icons
  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      if (lightIcon) lightIcon.style.opacity = "0.3";
      if (darkIcon) darkIcon.style.opacity = "1";
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      if (lightIcon) lightIcon.style.opacity = "1";
      if (darkIcon) darkIcon.style.opacity = "0.3";
    }
  }

  // Sidebar controls (optional)
  if (sidebar) {
    window.hideSidebar = () => sidebar.classList.add("collapsed");
    window.showSidebar = () => sidebar.classList.remove("collapsed");
    window.toggleSidebar = () => sidebar.classList.toggle("collapsed");
  } else {
    console.warn("Sidebar element not found");
  }
}
