
//HERO Images Slider
let currentImageIndex = 0;
const images = document.querySelectorAll('.sliderImage'); // Selecciona todas las imágenes
const totalImages = images.length;

function showImage(index) {
    // Oculta todas las imágenes
    images.forEach(img => img.classList.remove('active'));

    // Muestra la imagen en el índice dado
    images[index].classList.add('active');
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Mostrar la primera imagen al cargar la página
showImage(currentImageIndex);




