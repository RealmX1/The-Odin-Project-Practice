let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-item');
let indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentIndex) ? 'block' : 'none';
    indicators[i].classList.toggle('active', i === currentIndex);
  });
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index);
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
  setTimeout(autoSlide, 5000);
});


const carouselPrev = document.querySelector('.carousel-control.prev');
const carouselNext = document.querySelector('.carousel-control.next');
carouselPrev.addEventListener('click', () => moveSlide(-1));
carouselNext.addEventListener('click', () => moveSlide(1));

const carouselIndicators = document.querySelectorAll('.carousel-indicators > .indicator');
carouselIndicators.forEach((indicator, i) => {
  console.log(indicator, i);
  indicator.addEventListener('click', () => currentSlide(i));
});