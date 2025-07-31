const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextReview() {
  current = (current + 1) % reviews.length;
  showReview(current);
}

setInterval(nextReview, 2500);
