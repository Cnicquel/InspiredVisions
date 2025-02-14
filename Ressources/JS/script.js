let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slidesPerView = 3;

function showSlide(index) {
    const offset = -index * (100 / slidesPerView);
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % (totalSlides - slidesPerView + 1);
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + (totalSlides - slidesPerView + 1)) % (totalSlides - slidesPerView + 1);
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);