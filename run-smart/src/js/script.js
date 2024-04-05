'use strict';

$(document).ready(function () {
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
});

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: true,
// });
