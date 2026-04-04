// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("theme-toggle-checkbox");
  const sidebar = document.getElementById("sidebar");

  // 🌗 Theme toggle
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  });

  // 📌 Hide sidebar
  window.hideSidebar = function () {
    sidebar.classList.add("hidden");
  };
});
