'use strict';

// const $ = (selector) => document.querySelector(selector);

function getScrollWidth() {
  let divScroll = document.createElement('div');
  divScroll.style.overflowY = 'scroll';
  divScroll.style.width = '50px';
  divScroll.style.height = '50px';
  document.body.append(divScroll);
  let scrollWidth = divScroll.offsetWidth - divScroll.clientWidth;
  divScroll.remove();
  return scrollWidth / 10;
}

function openMenu() {
  menu.classList.add('active');
  document.body.style.overflowY = 'hidden';
  document.body.style.padding = `0 ${scrollWidth}rem 0 0`;
  burger.style.right = `${scrollWidth + 2}rem`
}
function closeMenu() {
  menu.classList.remove('active');
  document.body.style.overflowY = 'auto';
  document.body.style.padding = `0 0 0 0`;
  burger.style.right = `${2}rem`
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.menu__overlay');
const scrollWidth = getScrollWidth();

burger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => {
  if (menu.classList.contains('active') && e.key === 'Escape') closeMenu();
});
