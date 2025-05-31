// WEEK 4 ACTIVITY DIALOG
const membershipmodal = document.querySelector("#membershipModal")
const closeModal = document.querySelector("#closeModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDetails = document.querySelector("#modalDetails");

closeModal.addEventListener("click", () => membershipDetails.close())

const level1Btn = document.querySelector('#level1Btn');
level1Btn.addEventListener('click', () => {
    modalTitle.innerHTML = "Non Profit Membership"
    modalDetails.innerHTML = `<p>Benefits include:</p>
    <ul>${item.name}</ul>
    <p>COST: Free</p>
    `
    membershipModal.showModal();
});

// function displayMembershipDetails(member) {
//   membershipDetails.innerHTML = '';
//   membershipDetails.innerHTML = `
//     <button id="closeModal">X</button>
//     <h2>${member.subject} ${member.number}</h2>
//     <h3>${member.title}</h3>
//     <p><strong>Credits</strong>: ${member.credits}</p>
//     <p><strong>Certificate</strong>: ${member.certificate}</p>
//     <p>${member.description}</p>
//     <p><strong>Technologies</strong>: ${member.technology.join(', ')}</p>
//   `;
//   membershipDetails.showModal();

// }





// // const openButton = document.querySelector("#openButton");
// const dialogBox = document.querySelector("#dialogBox");
// const dialogH4 = document.querySelector("#dialogBox h4");
// const dialogP = document.querySelector("#dialogBox p");
// const closeButton = document.querySelector("#closeButton");

// const memberLevel = document.querySelector("#memberlevels");
// // const memberInfo = document.createElement("#memberlevels p");


// closeButton.addEventListener("click", () => dialogBox.close());

// function displayMemberInfo(data) {
//     console.log(data);
//     // const memberLevel = document.createElement("#memberlevels");

//     data.memberLevels.forEach(item => {
//         const levelDiv = document.createElement("div");
//         levelDiv.classList.add("card");
//         levelDiv.setAttribute("class", `${item.level}`);
//         console.log(`memberLevels: ${item.level}`);

//         levelDiv.innerHTML = `
//         <h4>${item.name}</h4>
//         <button>More Level Infomation</button>
//         `;


//         memberLevel.appendChild(levelDiv);

//         levelDiv.addEventListener("click", () => {
//             console.log(item);
//             displayLevelDetails(item);
//         });
//     });
// };


// function displayLevelDetails(item) {
//     console.log("This displayLevelsData One!");
//     console.log(item);

//     let memberStr = `
//         <p>Membership Cost:     ${item.cost}</p>
//         <p>Membership Benefits: ${item.benefits}</p>
//         <p>------------------------------</p>
//     `;
//     console.log(`memberStr = ${memberStr}`);
    
//     dialogH4.innerHTML = `${item.name}`;
//     dialogP.innerHTML = `${memberStr}`;

//     // dialogBox.innerHTML = `
//     // <h4>${item.name}</h4>
//     // <p>${item.name}</p>
//     // <button id="closeButton">Close</button>
//     // `;

//     dialogBox.showModal();
// };