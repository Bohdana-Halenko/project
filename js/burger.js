const tocBtn = document.querySelector(".toc-toggle");
const tocList = document.querySelector(".toc-list");

tocBtn.addEventListener("click", () => {
  tocList.classList.toggle("open");
});
