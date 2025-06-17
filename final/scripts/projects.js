// Loop Slider on JS
let currentImageIndex = 0;
const images = document.querySelectorAll('.sliderImage'); // Selecciona todas las imágenes
const totalImages = images.length;

function showImage(index) {
    // Hide all images
    images.forEach(img => img.classList.remove('active'));

    // Show all images on the given index
    images[index].classList.add('active');
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Shows the first image when the page loads
showImage(currentImageIndex);



//Display all Projects
document. addEventListener ('DOMContentLoaded', () => {
  const cards = document.querySelector('#projects');
  const path = './data/projects.json';

  //function to fetch data
  async function getProjects() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data.projects);   //Aca tiene que esatr el nombre del array
        displayProjects(data.projects);
    } catch (error) {
        console.error('Error fetching Projects:', error);
    }
  }
  getProjects();

  const displayProjects = (allProjects) => {
    allProjects.forEach((project) => {
      const myName = document.createElement('h2')
      myName.textContent= project.name;
      const myMaterial = document.createElement('p')
      myMaterial.textContent = `Material: ${project.material}`
      const myType = document.createElement('p')
      myType.textContent = `Type: ${project.type}`
      const myURL = document.createElement('p')
      myURL.innerHTML = `<a href="${project.url}" target="_blank">Website</a>`
      const myPicture = document.createElement('img')
      myPicture.src=`./images/projects/${project.picture}`
      myPicture.setAttribute('loading', 'lazy')
      myPicture.setAttribute('width', '300')
      myPicture.setAttribute('height', '200')
      myPicture.setAttribute('alt', `${project.name}`)
      const myDescription = document.createElement('p')
      myDescription.textContent = `Description: ${project.description}`;

      const mySection = document.createElement('section')
      mySection.classList.add('project-card');

      mySection.appendChild(myPicture)
      mySection.appendChild(myName)
      mySection.appendChild(myMaterial)
      mySection.appendChild(myType)
      mySection.appendChild(myURL)
      mySection.appendChild(myDescription)
      cards.appendChild(mySection)
    });
  }



  //Grid and List options mode
  const setGrid = document.querySelector('#gridB')
  const setList = document.querySelector('#listB')
  setGrid.addEventListener('click',() => {
    setGrid.className="active"
    setList.className=""
    cards.className='grid'
  })
  setList.addEventListener('click',() => {
    setList.className="active"
    setGrid.className=""
    cards.className='list'
  })
})
