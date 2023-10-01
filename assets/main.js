import {slideUp, slideDown} from './slide-animation.js';


function accordion() {
    const items = document.querySelectorAll('.accordion__item');
    const triggers = document.querySelectorAll('.accordion__trigger');
    const content = document.querySelectorAll('.accordion__content');

    triggers.forEach((trigger, idx) => {
        if(trigger.parentNode.classList.contains('active')) slideDown(content[idx]);
        
        trigger.addEventListener('click',() => {
            const parent = trigger.parentNode;
            parent.classList.toggle('active');

            if(parent.classList.contains('active')) {
                slideDown(content[idx]);
                items.forEach((item,i) => {
                    if (i !== idx) {
                        slideUp(content[i]);
                        item.classList.remove('active');
                    }
                });
            } else {
                slideUp(content[idx]);
            }
        });
    });
}

accordion();