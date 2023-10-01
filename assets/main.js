import {slideUp, slideDown} from './slide-animation.js';


function accordion() {
    const items = document.querySelectorAll('.accordion__item');
    const triggers = document.querySelectorAll('.accordion__trigger');
    const content = document.querySelectorAll('.accordion__content');

    triggers.forEach((trigger, idx) => {
        trigger.addEventListener('click',() => {
            const parent = trigger.parentNode;
            parent.classList.toggle('active');
        });
    });
}

accordion();