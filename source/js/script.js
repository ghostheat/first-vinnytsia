$(document).ready(function () {


  $(".modal__slider").owlCarousel({
    items: 1,
    dotsEach: true,
    nav: true,
    dots: true,
    rewind: true,  
    responsiveClass: true,
    smartSpeed: 900,
  });




  $(".owl-sliders").owlCarousel({
    items: 1,
    dotsEach: true,
    nav: true,
    dots: true,
    rewind: true,
    loop: true,
    responsiveClass: true,
    smartSpeed: 900,
  });



  $(".owl-carousel").owlCarousel({
    items: 1.5,
    dotsEach: false,
    dots: false,
    autoplay: true,
    nav: true,
    smartSpeed: 900,
    rewind: true,
    autoplayHoverPause: true,
    loop: true,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1 // от 0px до 599px слайдов нет
      },
      1100: {
        items: 1.5 // от 900px до 1199px два слайда
      },
    }
  });

});


document.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 150) {
    document.documentElement.style.setProperty('--opacity', 1);
  } else {
    document.documentElement.style.setProperty('--opacity', 0);
  }
});

$('.header__burger').click(function () {
  $('.header__burger,.header__body').toggleClass('active')
  $('body').toggleClass('lock');
});

$('.item__menu').click(function () {
  $('.header__burger,.header__body').toggleClass('active')
  $('body').removeClass('lock');
});
