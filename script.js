const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const MobileNavDiv = document.querySelector(".mobile__nav");
const NavBarDiv = document.querySelector(".header__nav");

MobileNavDiv.addEventListener("click", ()=> {
  NavBarDiv.classList.toggle("active");
})