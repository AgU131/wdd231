// import { services } from '../data/services.mjs'

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





function showstuff(x) {
    //console.log(x)
    mytitle.textContent = x.title
    mylist.innerHTML = ''
    //console.log(x.details)
    x.details.forEach(y => {
        //console.log(y)
        const item = document.createElement('li')
        item.textContent = y
        mylist.appendChild(item)
    })
    mydialog.showModal()
} // end function