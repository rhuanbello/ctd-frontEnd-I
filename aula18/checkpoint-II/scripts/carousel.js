'use strict'

let counter = 1;
const slide = document.querySelector('.navigation-auto');
let slides = Array.from(slide.children);

setInterval( () => {

    document.getElementById(`radio${counter}`).checked = true;
    counter++

    if(counter > slides.length) {

        counter = 1;

    }

}, 4000);
