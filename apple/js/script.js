'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName('menu-item'),
    menuItem = document.createElement('li'),
    title = document.getElementsByClassName('title')[0],
    adv = document.getElementsByClassName('adv')[0],
    getQuetion = prompt('Как вы относитесь к технике apple?'),
    ans = document.querySelector('#prompt');

menu.insertBefore(menuItems[2], menuItems[1]);

menuItem.classList.add('menu-item');
menuItem.innerHTML = 'Пятый пункт';
menu.appendChild(menuItem);
document.body.style.backgroundImage = "url(img/apple_true.jpg)";
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();
ans.textContent = getQuetion;