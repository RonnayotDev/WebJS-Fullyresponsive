const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', Hamburger)
function Hamburger(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};