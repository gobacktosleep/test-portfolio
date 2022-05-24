import i18Obj from "./translate.js";

//Set language
let lang = {
  default: "en",
  current: null,
};

lang.current = localStorage.getItem("lang") || lang.default;

// Translation
const getTranslate = (lang) => {
  const targets = document.querySelectorAll("[data-i18n]");
  targets.forEach((e) => {
    if (e.placeholder) {
      e.placeholder = i18Obj[lang][e.dataset.i18n];
      return;
    }
    e.textContent = i18Obj[lang][e.dataset.i18n];
  });
};

const setLocalStorage = () => localStorage.setItem("lang", lang.current);

const getLocalStorage = () => {
  if (lang.default != lang.current) {
    getTranslate(lang.current);
    document.querySelector(`.lang-switcher__radio[value="${lang.current}"]`).checked = true;
  }
};

const setLanguage = () => {
  lang.current = document.querySelector(".lang-switcher__radio:checked").value;
  getTranslate(lang.current);
  setLocalStorage();
}

window.addEventListener("DOMContentLoaded", () => {
  getLocalStorage();
  document.querySelector(".lang-switcher").addEventListener("change", setLanguage);
});

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

