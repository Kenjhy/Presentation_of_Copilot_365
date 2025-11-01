// level-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-button');
    const slidesContainer = document.getElementById('slides-container');

    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const level = button.dataset.level;
            switchLevel(level);
        });
    });

    function switchLevel(level) {
        const allSlides = slidesContainer.querySelectorAll('.slide');
        allSlides.forEach(slide => {
            slide.style.display = 'none'; // Hide all slides
        });

        const selectedSlides = slidesContainer.querySelectorAll(`.slide-${level}`);
        selectedSlides.forEach(slide => {
            slide.style.display = 'block'; // Show selected level slides
        });
    }
});