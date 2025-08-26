const log = document.querySelectorAll(".log");
const error = document.querySelector(".error");

log.forEach(log => {
  log.addEventListener("click", () => {
    error.classList.add("light");
  });
});