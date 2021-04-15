'use strict';

// Make navbar transparent when it is on the top
console.log('test');

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
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