window.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0; // Startindex för slideshow
  const slides = document.querySelectorAll(".slide");
  const intervalTime = 3000;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  if (slides.length > 0) {
    slides[currentIndex].classList.add("active");
    setInterval(showNextSlide, intervalTime);
  }

  // Hamburger-meny
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
