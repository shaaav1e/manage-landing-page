const navToggle= document.querySelector(".mobile-nav-toggle");
const primaryNav= document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () =>{
  primaryNav.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-expanded",false)
  : navToggle.setAttribute("aria-expanded",true)
  primaryNav.toggleAttribute('data-visible');
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: '.swiper-pagination', //these enable dots
    //   clickable: true,
    // },
    effect: 'slide',
  });
});
