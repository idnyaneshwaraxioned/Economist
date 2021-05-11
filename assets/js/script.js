/* Author: 

*/

// Humburger icon and nav menu

function toggleClass(){
    let humburger = document.querySelector('.header__top__nav__hamburger');
    let menu = document.querySelector('.header__top__nav__menu');

    humburger.addEventListener('click',function(){
        humburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
}
toggleClass();





















