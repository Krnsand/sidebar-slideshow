window.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
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

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const body = document.body;

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    body.classList.remove("sidebar-open");
  } else {
    sidebar.classList.add("open");
    body.classList.add("sidebar-open");
  }
}
