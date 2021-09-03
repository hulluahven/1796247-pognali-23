const mainNav = document.querySelector(".main-nav");
const pageHeader = document.querySelector(".page-header");
const navToggle = document.querySelector(".nav-toggle");


mainNav.classList.remove("main-nav--no-js");
mainNav.classList.add("main-nav--closed");

navToggle.addEventListener("click", function(evt){
  evt.preventDefault();
  pageHeader.classList.toggle("page-header--nav-opened");
  mainNav.classList.toggle("main-nav--closed");
});


window.addEventListener('scroll',function(e){
  const scrolled = window.scrollY;


      console.log(scrolled);
if (+scrolled >= 50){
  pageHeader.classList.add("page-header--scrolled");
}
else {
  pageHeader.classList.remove("page-header--scrolled");
}



});
