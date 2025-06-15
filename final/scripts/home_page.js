const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.slider img');
const containerWidth = document.querySelector('.slider-container').offsetWidth;
let animationDuration = 20; // Duración inicial de la animación

// Ajusta la duración de la animación basada en el número de imágenes
animationDuration = (image.length / 2) * 5; // Ajusta el 5 según tus necesidades
slider.style.animationDuration = `${animationDuration}s`;

// Duplica las imágenes si es necesario para asegurar un bucle continuo
if (slider.scrollWidth <= containerWidth) {
    const numCopies = Math.ceil(containerWidth / slider.scrollWidth) + 1; // Calcula cuantas copias necesita
    for (let i = 0; i < numCopies; i++) {
        image.forEach(img => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
        });
    }
}


//HERO Images Slider
let currentImageIndex = 0;
const images = document.querySelectorAll('#sliderImage'); // Selecciona todas las imágenes
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

