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
          // dots: true,
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

  // modal
  $('[data-modal=consultation]').on('click', () => {
    $('#overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', () => {
    $('#overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      // $('#order .modal__descr').text('1111');
      // alert($('.catalog-item__subtitle').eq(i).text());
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('#overlay, #order').fadeIn('slow');
    });
  });
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите своё имя`',
          minlength: jQuery.validator.format('Введите {0} символa!'),
        },
        phone: 'Пожалуйста, введите свой номер',
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: 'Неправильно введён адрес почты',
        },
      },
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask('+7(999)999-9999');

  // php mailer

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut('slow');
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  //smooth scroll

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  //wow.js

  new WOW().init();
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
