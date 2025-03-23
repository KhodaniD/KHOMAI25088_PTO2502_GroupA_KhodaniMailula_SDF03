document.addEventListener('DOMContentLoaded', function() {

    const images = document.querySelectorAll('.profile-image img, .gallery-item img');
    images.forEach(image => {
        const loader = image.parentElement.querySelector('.loader');
        image.addEventListener('load', () => {
            loader.style.display = 'none'; // Hide loader
            image.style.display = 'block'; // Show image
        });
        image.addEventListener('error', () => {
            loader.style.display = 'none'; // Hide loader on error
        });
    });
});