'use strict';

const tabs = Array.from(document.querySelectorAll('.tab'));
const tab__content = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
        let closestElement = event.target.closest('.tabs')
        let tab_active = closestElement.querySelector('.tab_active');
        let tab__content_active = closestElement.querySelector('.tab__content_active');

        tab_active.classList.remove('tab_active');
        tab__content_active.classList.remove('tab__content_active');
        tabs[i].classList.toggle('tab_active');
        tab__content[i].classList.toggle('tab__content_active');
    });
}