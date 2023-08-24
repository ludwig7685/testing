const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
