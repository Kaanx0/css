const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// Toggle Bar
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Remove when clicked to link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
