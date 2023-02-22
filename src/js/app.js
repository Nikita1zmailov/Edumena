// import * as flsFunction from "./modules/functions.js";
// import * as burger from "./modules/menu.js";
// flsFunction.isWebp();
// burger.burgerMenu();

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   let currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.querySelector(".wrapper-header").style.top = "0";
   } else {
      document.querySelector(".wrapper-header").style.top = "-96px";
   }
   prevScrollpos = currentScrollPos;
}