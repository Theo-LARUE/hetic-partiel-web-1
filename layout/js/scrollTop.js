var header = document.getElementById("header");
var scroll = window.scrollY;

window.onscroll = function () {
  if (scroll > scrollY) {
    header.classList.add('header--hidden');
  } else {
    header.classList.add('header--hidden');
  }
  scroll = scrollY;
}
scrollY