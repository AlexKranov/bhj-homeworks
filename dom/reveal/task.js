'use strict'

const reval = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    reval.forEach(element => {
        const viewportHeight = window.innerHeight;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementBottom < viewportHeight) {
            element.classList.add('reveal_active');
        }
    });
});