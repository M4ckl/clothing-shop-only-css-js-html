document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalImages = images.length;
    let sliderInterval;

    function updateSlider(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider(currentIndex);
    }

    function startSlider() {
        sliderInterval = setInterval(showNextImage, 3000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    startSlider();

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    images.forEach(image => {
        image.addEventListener('mouseenter', stopSlider);
        image.addEventListener('mouseleave', startSlider);
    });

    updateSlider(currentIndex);
});


