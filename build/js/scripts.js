// Burger script
const menuToggle = document.querySelector(".burger");
const nav = document.querySelector(".menu");
const navLink = document.querySelectorAll(".menu__link");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("opened");
  menuToggle.classList.toggle("opened");
  document.body.classList.toggle("lock");
});

navLink.forEach(n => n.addEventListener("click", () => {
  nav.classList.remove("opened");
  menuToggle.classList.remove("opened");
  document.body.classList.remove("lock");
}));

