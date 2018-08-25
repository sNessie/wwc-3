'use strict';
document.addEventListener('DOMContentLoaded', function() {


const btnMenu = document.querySelector('.navbar_hamburger');
const navMenu = document.querySelector('.navbar_menu');
const menuLink = document.querySelectorAll('.menu_link');
const linkPosition = ['home', 'portfolio', 'about', 'blog', 'contact'];
btnMenu.addEventListener("click", function(){
        navMenu.classList.toggle("navbar_menu-open");
        this.classList.toggle("navbar_hamburger-open");
 });



for(let i=0; i < menuLink.length; i++){
  menuLink[i].addEventListener('click', function(){
    let e = document.getElementById(linkPosition[i]);
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: (e.offsetTop -80)
    });
})}


})
