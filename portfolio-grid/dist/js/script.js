'use strict';

// const $ = (selector) => document.querySelector(selector);

function openMenu() {
  menu.classList.add('active');
  burger.style.opacity = 0;
}
function closeMenu() {
  menu.classList.remove('active');
  burger.style.opacity = 1;
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.menu__overlay');

burger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => {
  if (menu.classList.contains('active') && e.key === 'Escape') closeMenu();
});
