'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    }else {
        navbar.classList.remove('navbar__dark');
    }
});


// navbar-height 쉽게 찾기

// const navbar = document.querySelector('#navbar');
// const navbarHeight = navbar.scrollHeight;
//
// document.addEventListener('scroll', () => {
//     if(window.scrollY > navbarHeight) {
//         navbar.classList.add('navbar-dark');
//     } else {
//         navbar.classList.remove('navbar-dark');
//     }
// });