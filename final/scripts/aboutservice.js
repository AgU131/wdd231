import { services } from '../data/services.mjs'

// Modal General Constants
const serviceModal = document.querySelector("#serviceModal")
const closeModal = document.querySelector("#closeModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDetails = document.querySelector("#modalDetails");

// Modal each Service Button Constants
const printBtn = document.querySelector('#serviceBtnPrint');
const modelBtn = document.querySelector('#serviceBtnModel');
const fixBtn = document.querySelector('#serviceBtnFix');
const consultBtn = document.querySelector('#serviceBtnConsult');

// Function to close the modal
closeModal.addEventListener("click", () => serviceModal.close())

// Generic function for all Modals
function configServiceModalInfo(button, service) {
  button.addEventListener('click', () => {
    modalTitle.innerHTML = service.title;
    modalDetails.innerHTML = `
      <p>Description:</p>
      <ul>
        ${service.description.map(desc => `<li>${desc}</li>`).join('')}
      </ul>
      <p>Cost: ${service.cost}</p>`;
    serviceModal.showModal();
  });
}

// Calling Generic function for each Modal with each service info
configServiceModalInfo(printBtn, services[0]);    // 3D Printing Service Info
configServiceModalInfo(modelBtn, services[1]);    // 3D Modeling Service Info
configServiceModalInfo(fixBtn, services[2]);      // Fixing 3D Parts Service Info
configServiceModalInfo(consultBtn, services[3]);  // Experts Consult Service Info




/* This is without the .mjs with the info in the array
// Generic function for all Modals
function configServiceModalInfo(button, title, description, cost) {
  button.addEventListener('click', () => {
    modalTitle.innerHTML = title
    modalDetails.innerHTML = `
    <p>Description:</p>
    <ul>
       ${description.map(desc => `<li>"${desc}"</li>`).join('')}
    </ul>
    <p>COST: ${cost}</p>
    `;
    serviceModal.showModal();
  });
};

// Calling Generic function for each Modal with each service info
configServiceModalInfo(
  printBtn,
  '3D Printing',
  [
    'Discount tickets to all Bowl Games.',
    "You'll get a nice plaque with the mayor's stamp on it.",
    'You get to ride on a float Saint Patty\'s Day.',
    'Monthly newsletter with local business updates.',
    'Early access to community yard sales.'
  ],
  'Send us your 3D Design!'
)
*/