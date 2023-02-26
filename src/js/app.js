import * as flsFunction from "./modules/functions.js";
flsFunction.isWebp();
// import * as burger from "./modules/menu.js";
// burger.burgerMenu();



window.addEventListener('DOMContentLoaded', () => {
   // ! constants
   // const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
   const headerBtn = document.querySelector('.header-btn');
   const hiddenSection = document.getElementById('registration');
   const items = Array.from(document.querySelectorAll('.faq__list__item'));
   const hideMenu = document.querySelector(".wrapper-header");
   let prevScrollpos = window.pageYOffset;




   // ! Scroll menu

   window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
         hideMenu.style.top = "0";
      } else {
         hideMenu.style.top = "-96px";
      }
      if (currentScrollPos > 200 || currentScrollPos !== 0) {
         hideMenu.style.backgroundColor = "#151515";
      } else {
         hideMenu.style.backgroundColor = "transparent";
      }
      prevScrollpos = currentScrollPos;
   }



   //! Toggle faq's

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

   // ! Registration form
   headerBtn.addEventListener('click', showSection);
   document.querySelector('.close-form').addEventListener('click', hideSection)

   // ! animated section 
   function showSection() {
      if (headerBtn.classList.contains('header-btn')) {
         if (hiddenSection.classList.contains('hidden')) {
            hiddenSection.classList.remove('hidden');
            setTimeout(() => {
               hiddenSection.classList.remove('visuallyhidden');
            }, 20);
         }
      }
   }

   function hideSection() {
      hiddenSection.classList.add('visuallyhidden');
      hiddenSection.addEventListener('transitionend', (e) => {
         hiddenSection.classList.add('hidden');
      }, {
         capture: false,
         once: true,
         passive: false
      });
   }

   // Registration forms
   let registrBtn = document.querySelector(".registration__btn");
   let loginBtn = document.querySelector(".login__btn");
   // let slider = document.querySelector(".slider");
   let formSection = document.querySelector(".form-swiper");

   console.log(registrBtn, loginBtn, formSection);

   registrBtn.addEventListener("click", () => {
      formSection.classList.add("form-section-move");
   });

   loginBtn.addEventListener("click", () => {
      // slider.classList.remove("moveslider");
      formSection.classList.remove("form-section-move");
   });
})
