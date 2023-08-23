const modeToggle = document.getElementById("mode-toggle");
const expressalts = document.querySelector(".expressalts");
const greenExpressalts = document.querySelector(".green-expressalts");

modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.style.backgroundColor = "white";
    expressalts.style.color = "black";
    greenExpressalts.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    expressalts.style.color = "white";
    greenExpressalts.style.color = "green";
  }
});
