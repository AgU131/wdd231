
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




// Randomply display spotligths for Printing and Modeling Services
document.addEventListener('DOMContentLoaded', () => {
  const randomContainer = document.querySelector('#random-projects'); // Asegúrate de tener este contenedor en tu HTML
  const path = './data/projects.json'; // Misma ruta que tu JSON de proyectos

  // Function to get and show random projects
  async function getRandomProjects() {
    try {
      const response = await fetch(path);
      const data = await response.json();
      const randomProjects = selectRandomProjects(data.projects, 3);
      displayRandomProjects(randomProjects);
    } catch (error) {
      console.error('Error fetching random projects:', error);
    }
  }

  // Selects the first N random projects with no repetition
  function selectRandomProjects(projects, count) {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Shows Random projects
  const displayRandomProjects = (projects) => {
    randomContainer.innerHTML = ''; // Clear
    
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('random-project-card');
      
      projectElement.innerHTML = `
        <img src="./images/projects/${project.picture}" alt="${project.name}" loading="lazy">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Ver proyecto</a>
      `;
      
      randomContainer.appendChild(projectElement);
    });
  }

  getRandomProjects();
});