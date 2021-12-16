"use strict";

const accordionBtns = document.querySelectorAll(".accordion__btn");

accordionBtns.forEach((accordion) => {
   accordion.onclick = function () {
      this.classList.toggle("is__open");

      let content = this.nextElementSibling;

      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + "px";
      }
   };
});
