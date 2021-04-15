'use strict';

// Make navbar transparent when it is on the top

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

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})


