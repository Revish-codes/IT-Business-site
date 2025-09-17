const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// back to top
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { 
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});