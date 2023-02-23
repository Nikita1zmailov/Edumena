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

const items = Array.from(document.querySelectorAll('.faq__list__item'));

items.forEach(item => {
   item.addEventListener('click', (e) => {
      let arr = e.target.closest('span');
      if (!arr) return;
      if (arr) {
         item.children.item(1).classList.toggle('active');
         item.children.item(2).classList.toggle('visible');
      }
   })
})