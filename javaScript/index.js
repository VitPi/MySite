//
//


"use strict";







let inputCheck = document.getElementById('menu-toggle'),
    link = document.querySelectorAll('.menu-item');

function hideInput() {
    inputCheck.checked = false
}


for (const i of link) {
    i.addEventListener('click', hideInput)
}











