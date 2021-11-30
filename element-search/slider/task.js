'use strict';

let slides = document.querySelectorAll('.slider__item');
let prevSlide = document.querySelector('.slider__arrow_prev');
let nextSlide = document.querySelector('.slider__arrow_next');
let slidesNumber = 0;

prevSlide.onclick = () => {
    if ((slidesNumber - 1) < 0) {
        slidesNumber = slides.length - 1;
    } else {
        slidesNumber -= 1;
    }
    change(slidesNumber);
}

nextSlide.onclick = () => {
    if (slidesNumber + 1 === slides.length) {
        slidesNumber = 0;
    } else {
        slidesNumber += 1;
    }
    change(slidesNumber);
}

function change(i) {
    [...slides].forEach((item) => item.classList.remove('slider__item_active'));
    slides[i].classList.add('slider__item_active');
}