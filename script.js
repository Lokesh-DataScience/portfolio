// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


const titles = ["AI/ML Engineer", "Data Scientist", "Data Analyst"];
let titleIndex = 0;
const slidingText = document.getElementById("sliding-text");

function updateSlidingText() {
  // Remove animation to reset
  slidingText.style.animation = "none";
  // Force reflow
  void slidingText.offsetWidth;
  // Change text
  slidingText.textContent = titles[titleIndex];
  // Re-add animation
  slidingText.style.animation = "slideText 2s cubic-bezier(0.4,0,0.2,1)";
}

setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  updateSlidingText();
}, 2000);

// Initial call
updateSlidingText();