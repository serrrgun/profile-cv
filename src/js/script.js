// menu

var menuBtn = document.querySelector('.menu-btn');
var header = document.querySelector('.header');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('menu-btn--active');
  header.classList.toggle('header--open');
})

// slider

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
