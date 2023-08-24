const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
});
