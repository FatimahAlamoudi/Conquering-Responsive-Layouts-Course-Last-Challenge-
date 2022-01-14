const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");

navToggle.addEventListener("click", () => {
  ul.classList.toggle('hidden');
  nav.classList.toggle("nav--visible");
});
