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

//Preload images
function preloadImages() {
  const seasons = ["winter", "spring", "summer", "autumn"];
  seasons.forEach((season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./img/${season}/${i}.jpg`;
    }
  });
};

// Change images
const portfolioButtons = document.querySelector(".portfolio__buttons");
const portfolioImages = document.querySelectorAll(".portfolio__image");

function changePath(target) {
  const season = target.dataset.season;
  portfolioImages.forEach((img, index) => {
    img.src = `./img/${season}/${index + 1}.jpg`;
    img.alt = `${season} photography`;
  });
};

function changeButton(targetButton) {
  const activeButton = document.querySelector(".portfolio__button--active");
  activeButton.classList.remove("portfolio__button--active");
  targetButton.classList.add("portfolio__button--active");
};

function changeImage(e) {
  if (e.target.classList.contains("portfolio__button") && !e.target.classList.contains("portfolio__button--active")) {
    changePath(e.target);
    changeButton(e.target);
  }
};

portfolioButtons.addEventListener("click", changeImage);

