const openBtn = document.getElementById("open-demo");
const modal = document.getElementById("demoModal");
const closeBtn = modal.querySelector(".close");

const iframeSrc =
  "https://demo.bgaming-network.com/games/Plinko/FUN?play_token=6d2447d4-5ed7-40f8-973d-5e8ab6890cc4";
const iframe = modal.querySelector("iframe");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  iframe.src = iframeSrc; 
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
  iframe.src = ""; 
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
