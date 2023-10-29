let darkModeEnabled = localStorage.getItem("darkMode");

if (darkModeEnabled === "true") {
  enableDarkMode();
}

let darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
    localStorage.setItem("darkMode", "false");
  } else {
    enableDarkMode();
    localStorage.setItem("darkMode", "true");
  }
});

function enableDarkMode() {
  document.body.classList.add("dark-mode");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
}
