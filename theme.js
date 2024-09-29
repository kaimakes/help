document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
  } else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
  }

  prefersDarkScheme.addEventListener("change", (e) => {
    document.body.classList.toggle("dark-theme", e.matches);
  });
});
