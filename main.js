const btnMenu = document.querySelector(".btn-burger");
const navLinks = document.querySelectorAll(".left-navbar .menu-link");
const urlPath = window.location.pathname;
const urlName = urlPath.slice(urlPath.lastIndexOf("/")+ 1);

const startCounterHref = () => {
  navLinks.forEach(function (element) {
    if (element.getAttribute("href") == urlName) {
      element.classList.add("active");
    } else if(element.getAttribute("href")=== "/") {
      element.classList.add("active");
    }
    else {
      element.classList.remove("active");
    } 
  });
  console.log(`winow href = ${window.location.pathname}`);
};

startCounterHref();

const classMenu = () => {
  const btnMenuSpan = document.querySelectorAll(".burger span");
  const leftMenu = document.querySelector(".left-navbar");
  leftMenu.classList.toggle("active");
  for (let i = 0; i < btnMenuSpan.length; i++)
    btnMenuSpan[i].classList.toggle("active");
};

document.querySelector(".burger").addEventListener("click", classMenu);

window.onscroll = () => {
  let nav = document.querySelector(".navbar-wrapper");
  let burger = document.querySelector(".burger");
  if (window.pageYOffset > 100) {
    this.console.log("Test");
    console.log(window.pageYOffset);
    nav.classList.add("nav-active");
    burger.classList.add("bounce");
  } else {
    nav.classList.remove("nav-active");
    burger.classList.remove("bounce");
  }
};

const navElements = document.querySelectorAll(".cards__item.main");
//looping through each anchor element
navElements.forEach(function (element) {
  //adding click event on each anchor element
  element.addEventListener("mouseenter", function (e) {
    //stop default behaviour
    e.preventDefault();

    this.querySelector(".cards.main button.cards__item__btn").classList.add(
      "mystyle"
    );
  });
});

navElements.forEach(function (element2) {
  //adding click event on each anchor element
  element2.addEventListener("mouseleave", function (e) {
    //stop default behaviour
    e.preventDefault();

    this.querySelector(".cards.main button.cards__item__btn").classList.remove(
      "mystyle"
    );
  });
});

const aboutMask = document.querySelector(".mask");
const aboutContent = document.querySelector(".about-me__content");

const aboutBounce = () => {
  aboutContent.classList.add("bounce");
  console.log("mouse");
};
const aboutBounceRemove = () => {
  aboutContent.classList.remove("bounce");
};

//aboutMask.addEventListener('mouseenter', aboutBounce);
//aboutMask.addEventListener('mouseleave', aboutBounceRemove);

const headerBounce = (e) => {
  e.classList.add("bounce");
  console.log(e.target);
};

headerBounce(document.querySelector("h1"));


