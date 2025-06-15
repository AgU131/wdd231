// Images Slider with continue animation
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


/*
Creado por la IA (slider):
<script>
        let currentIndex = 0;
        const images = document.querySelectorAll('.hero_img');

        function changeImage(direction) {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + direction + images.length) % images.length;
            images[currentIndex].style.display = 'block';
        }

        // Inicializar el slider mostrando la primera imagen
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });
    </script>

*/


