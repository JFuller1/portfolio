'use strict'

const header = document.querySelector('header');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const body = document.querySelector('body');

body.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

header.addEventListener('animationend', function() {
    header.style.transform = 'none';
});

name.addEventListener('animationend', function() {
    name.style.transform = 'none';
});

description.addEventListener('animationend', function() {
    description.style.transform = 'none';
    body.style.overflow = 'scroll';
});