let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSlideSpan = document.getElementById('current-slide');
const totalSlidesSpan = document.getElementById('total-slides');

totalSlidesSpan.textContent = totalSlides;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    currentSlideSpan.textContent = currentSlide + 1;
    
    prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
});

showSlide(0);