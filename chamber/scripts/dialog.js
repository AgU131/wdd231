// WEEK 4 ACTIVITY DIALOG JS

// EASY WAY TO SOLVE THIS: by copy and paste the same function over an over for each membership level

// Modal General Constants
const membershipModal = document.querySelector("#membershipModal")
const closeModal = document.querySelector("#closeModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDetails = document.querySelector("#modalDetails");

// Modal each Membership Constants
const level1Btn = document.querySelector('#level1Btn');
const level2Btn = document.querySelector('#level2Btn');
const level3Btn = document.querySelector('#level3Btn');
const level4Btn = document.querySelector('#level4Btn');

// Function to close the modal
closeModal.addEventListener("click", () => membershipModal.close())

// Function for each Modal membership level
level1Btn.addEventListener('click', () => {
    modalTitle.innerHTML = `Bronze Membership`//`${}`
    modalDetails.innerHTML = `
    <p>Benefits include:</p>
    <ul>
      <li>"Discount tickets to all Bowl Games."</li>
      <li>"You'll get a nice plaque with the mayor's stamp on it."</li>
      <li>"You get to ride on a float Saint Patty's Day."</li>
      <li>"Monthly newsletter with local business updates."</li>
      <li>"Early access to community yard sales."</li>
    </ul>
    <p>COST: Free</p>
    `
    membershipModal.showModal();
});

level2Btn.addEventListener('click', () => {
    modalTitle.innerHTML = `Silver Membership`
    modalDetails.innerHTML = `
    <p>Benefits include:</p>
    <ul>
      <li>"Free soda at the snack bar."</li>
      <li>"Discount tickets to all Bowl Games."</li>
      <li>"You'll get a nice plaque with the mayor's stamp on it."</li>
      <li>"You get to ride on a float Saint Patty's Day."</li>
      <li>"10% discount on sponsored events."</li>
      <li>"Access to exclusive networking lunches with local leaders."</li>
    </ul>
    <p>COST: Free</p>
    `
    membershipModal.showModal();
});

level3Btn.addEventListener('click', () => {
    modalTitle.innerHTML = `Gold Membership`
    modalDetails.innerHTML = `
    <p>Benefits include:</p>
    <ul>
      <li>"Home Page Spotlight."</li>
      <li>"Invitation to special events."</li>
      <li>"Free soda at the snack bar."</li>
      <li>"Discount tickets to all Bowl Games."</li>
      <li>"You'll get a nice plaque with the mayor's stamp on it."</li>
      <li>"You get to ride on a float Saint Patty's Day."</li>
      <li>"Priority booth placement at local expos."</li>
      <li>"One free ad per month in the Chamber bulletin."</li>
      <li>"Dedicated support line for business services."</li>
    </ul>
    <p>COST: Free</p>
    `
    membershipModal.showModal();
});

level4Btn.addEventListener('click', () => {
    modalTitle.innerHTML = `Non Profit Membership`
    modalDetails.innerHTML = `
    <p>Benefits include:</p>
    <ul>
      <li>"You'll get a nice plaque with the mayor's stamp on it."</li>
      <li>"You get to ride on a float Saint Patty's Day."</li>
      <li>"Free listing in the community nonprofit directory."</li>
      <li>"Access to volunteer recruitment board."</li>
      <li>"Invitations to grant-writing workshops."</li>
    </ul>
    <p>COST: Free</p>
    `
    membershipModal.showModal();
});


//HIDDEN DATE for the Form
document.querySelector('#today').value = new Date();


// TRYHARD WAY TO SOLVE THIS: by creatin a .json file with made up info for each membership and use it instead of describing the info in each function every time

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
// 
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