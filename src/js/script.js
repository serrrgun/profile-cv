// menu

var menuBtn = document.querySelector('.menu-btn');
var header = document.querySelector('.header');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('menu-btn--active');
  header.classList.toggle('header--open');
})
