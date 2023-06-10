// Select all the zoomable images
const zoomableImages = document.querySelectorAll('.zoomable-image');

// Add a click event listener to each zoomable image
zoomableImages.forEach(image => {
  image.addEventListener('click', zoomImage);
});

// Define the zoomImage function
function zoomImage() {
  const imageUrl = this.src;

  // Create a new element for the zoomed image
  const zoomedImg = document.createElement('div');
  zoomedImg.classList.add('zoomed-img');

  // Set the background image of the zoomed image
  zoomedImg.style.backgroundImage = `url(${imageUrl})`;

  // Append the zoomed image to the document body
  document.body.appendChild(zoomedImg);

  // Add a click event listener to the zoomed image to close it when clicked
  zoomedImg.addEventListener('click', closeZoom);
}
// Define the closeZoom function
function closeZoom() {
  // Remove the zoomed image from the document body
  document.body.removeChild(this);
}
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
