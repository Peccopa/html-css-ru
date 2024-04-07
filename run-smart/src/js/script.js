'use strict';

$(document).ready(function () {
  // slider
  $('.carousel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/slider/prev.png" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/slider/next.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  // tabs
  // https://denis-creative.com/jquery-tabs/
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );
  //rotate card

  function toggleSlide(className) {
    $(className).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content')
          .eq(i)
          .toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});

// const slider = tns({
//   // https://github.com/ganlanyuan/tiny-slider?tab=readme-ov-file
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   // autoplay: true,
//   // speed: 1000,
//   // autoplayButtonOutput: false,
//   controls: false,
//   nav: false,
//   responsive: {
//     640: {
//       // edgePadding: 20,
//       // gutter: 20,
//       // items: 2,
//     },
//     700: {
//       // gutter: 30,
//     },
//     900: {
//       // items: 3,
//     },
//   },
// });
// document
//   .querySelector('.prev')
//   .addEventListener('click', () => slider.goTo('prev'));
// document
//   .querySelector('.next')
//   .addEventListener('click', () => slider.goTo('next'));
