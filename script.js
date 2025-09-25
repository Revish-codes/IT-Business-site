  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".phone-menu h1");
    const menu = document.querySelector(".phone-menu ul");
    const closeBtn = document.querySelector(".phone-menu .close-btn");

    hamburger.addEventListener("click", () => {
      menu.classList.add("active"); // open
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active"); // close
    });
  });

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