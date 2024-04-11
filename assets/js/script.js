'use strict';

const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', () => {
    preloader.classList.add("loaded")
});

const [navToggler, navbar] = [
    document.querySelector('[data-nav-toggler]'),
    document.querySelector('[data-navbar]')
];

const toggleNav = function () {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
}

navToggler.addEventListener('click', toggleNav)