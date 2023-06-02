function plusSlides(sliderId, n) {
  showSlides(sliderId, (slideIndex[sliderId] += n));
}

function currentSlide(sliderId, n) {
  showSlides(sliderId, (slideIndex[sliderId] = n));
}

function showSlides(sliderId, n) {
  const slides = document.querySelectorAll(`#${sliderId} .mySlides.fade`);
  const dots = document.querySelectorAll(`#${sliderId} .dot`);
  if (n > slides.length) {
    slideIndex[sliderId] = 1;
  }
  if (n < 1) {
    slideIndex[sliderId] = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active__dot");
  }
  slides[slideIndex[sliderId] - 1].style.display = "block";
  dots[slideIndex[sliderId] - 1].classList.add("active__dot");
}

// Initialize slideIndex for each slider
const slideIndex = {};

// Create the sliders
function createSlider(sliderId) {
  slideIndex[sliderId] = 1;
  showSlides(sliderId, slideIndex[sliderId]);
}

// Create instances of the sliders
createSlider("slider1");
createSlider("slider2");
createSlider("slider3");
createSlider("slider4");
