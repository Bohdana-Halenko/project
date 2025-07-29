document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isOpen = faqItem.classList.contains("open");

    if (isOpen) {
      faqItem.classList.remove("open");
      question.querySelector(".faq-icon").textContent = "+";
    } else {
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-icon").textContent = "+";
      });

      faqItem.classList.add("open");
      question.querySelector(".faq-icon").textContent = "−";
    }
  });
});
