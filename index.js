let currentIndex = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevIcon = document.querySelector("#prev-btn i");
const nextIcon = document.querySelector("#next-btn i");

const totalSlides = slides.length;
let slideWidth = slides[0].offsetWidth;
prevIcon.style.opacity = 0.35;

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width } = entry.contentRect;
    slideWidth = width;
    updateSlider();
  }
});

slides.forEach((slide) => {
  resizeObserver.observe(slide);
});

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex === slides.length - 1) {
    nextIcon.style.opacity = 0.35;
    return;
  }
  currentIndex = (currentIndex + 1) % totalSlides;
  prevIcon.style.opacity = 1;
  updateSlider();
}

function prevSlide() {
  if (currentIndex === 0) {
    prevIcon.style.opacity = 0.35;
    return;
  }
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  nextIcon.style.opacity = 1;
  updateSlider();
}
