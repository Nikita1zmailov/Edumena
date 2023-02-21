// import * as flsFunction from "./modules/functions.js";
// import * as burger from "./modules/menu.js";
// flsFunction.isWebp();
// burger.burgerMenu();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.querySelector(".wrapper-header").style.top = "0";
   } else {
      document.querySelector(".wrapper-header").style.top = "-96px";
   }
   prevScrollpos = currentScrollPos;
}