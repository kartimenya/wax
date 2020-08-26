

$( document ).ready(function() {
    $('.header__slider').slick({
      dots: true,
      dotsClass: 'header__slider-btn',
      arrows: true,
      prevArrow: '<button type="button" class="header__slider-prev"><img src="img/back.svg" alt=""></button>',
      nextArrow: '<button type="button" class="header__slider-next"><img src="img/next.svg" alt=""></button>'

  });
  $('.posts__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  });
});
