const openBtn = document.getElementById("open-demo");
const modal = document.getElementById("demoModal");
const closeBtn = modal.querySelector(".close");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
