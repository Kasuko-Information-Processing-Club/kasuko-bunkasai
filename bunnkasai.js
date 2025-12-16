/* scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let currentIndex = 0;

    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function updateCarousel() {
        const offset = -currentIndex * 600; // 600px is the width of each image
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Optionally, you can set the carousel to automatically slide every few seconds
    setInterval(() => {
        nextButton.click();
    }, 3000); // Change slide every 3 seconds
});