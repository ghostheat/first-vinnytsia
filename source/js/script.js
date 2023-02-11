



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
    document.documentElement.style.setProperty('--opacity', 0.5);
  } else {
    document.documentElement.style.setProperty('--opacity', 0);
  }
});


var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
  modal.style.display = "block";
  $('body').toggleClass('lock');
}


span.onclick = function () {
  modal.style.display = "none";
  $('body').removeClass('lock');
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $('body').removeClass('lock');
  }
}


var modal2 = document.getElementById("my_modal2");
var btn2 = document.getElementById("btn_modal_window2");
var span2 = document.getElementsByClassName("close_modal_window2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
  $('body').toggleClass('lock');
}


span2.onclick = function () {
  modal2.style.display = "none";
  $('body').removeClass('lock');
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal2.style.display = "none";
    $('body').removeClass('lock');
  }
}

var modal3 = document.getElementById("my_modal3");
var btn3 = document.getElementById("btn_modal_window3");
var span3 = document.getElementsByClassName("close_modal_window3")[0];

btn3.onclick = function () {
  modal3.style.display = "block";
  $('body').toggleClass('lock');
}

span3.onclick = function () {
  modal3.style.display = "none";
  $('body').removeClass('lock');
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal3.style.display = "none";
    $('body').removeClass('lock');
  }
}

var modal4 = document.getElementById("my_modal4");
var btn4 = document.getElementById("btn_modal_window4");
var span4 = document.getElementsByClassName("close_modal_window4")[0];

btn4.onclick = function () {
  modal4.style.display = "block";
  $('body').toggleClass('lock');
}

span4.onclick = function () {
  modal4.style.display = "none";
  $('body').removeClass('lock');
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal4.style.display = "none";
    $('body').removeClass('lock');
  }
}


$('.header__burger').click(function () {
  $('.header__burger,.header__body').toggleClass('active')
  $('body').toggleClass('lock');
});

$('.item__menu').click(function () {
  $('.header__burger,.header__body').toggleClass('active')
  $('body').removeClass('lock');
});