'use strict';
let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].addEventListener('click', function (e) {
//     console.log('Произошло событие: ' + e.type + 'на элементе' + e.target);
// });

// wrap.addEventListener('click', function (e) {
//     console.log('Произошло событие: ' + e.type + 'на элементе' + e.target);
// });

// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('Произошло событие: ' + e.type + 'на элементе' + e.target);
// });

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Вышли!');
    });
});
// btn[0].addEventListener('mouseenter', function () {
//     alert('Вы навели на первую кнопку');
// });