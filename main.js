import {
  isMobile,
  handleEvent
} from "./js/ismobile.js";
import AddClass from "./js/addclass.js";

const btnMenu = document.querySelector(".burger");
const btnContact = document.querySelector('.btn-contact');
const navLinks = document.querySelectorAll(".left-navbar .menu-link");
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close');
const urlPath = window.location.pathname;
const urlName = urlPath.slice(urlPath.lastIndexOf("/") + 1);

const startCounterHref = () => {
  navLinks.forEach(function (element) {
    if (element.getAttribute("href") == urlName) {
      element.classList.add("active");
    } else if (element.getAttribute("href") === "/") {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

startCounterHref();

const classMenu = () => {
  const btnMenuSpan = document.querySelectorAll(".burger span");
  const leftMenu = document.querySelector(".left-navbar");
  leftMenu.classList.toggle("active");

  for (let i = 0; i < btnMenuSpan.length; i++)
    btnMenuSpan[i].classList.toggle("active");
};

handleEvent(btnMenu, 'click', classMenu);

window.onscroll = () => {
  let nav = document.querySelector(".navbar-wrapper");

  if (window.pageYOffset > 100) {
    console.log(window.pageYOffset);
    nav.classList.add("nav-active");
    btnMenu.classList.add("bounce");
  } else {
    nav.classList.remove("nav-active");
    btnMenu.classList.remove("bounce");
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
};

headerBounce(document.querySelector("h1"));

isMobile();



//show modal contact
const modalHandle=()=> {
  const aClass = new AddClass(modal, 'active'); 
  aClass.checkClass()
}

handleEvent(btnContact, 'click', modalHandle);
handleEvent(btnClose,'click',modalHandle);