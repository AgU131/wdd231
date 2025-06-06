document. addEventListener ('DOMContentLoaded', () => {

  const cards = document.querySelector('#members');

  const path = './data/members.json';

  //function to fetch data
  async function getMembers() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data.members);
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
  }
  getMembers();



  const displayMembers = (allMembers) => {
    allMembers.forEach((member) => {
      const myName = document.createElement('h2')
      myName.textContent= member.name;
      const myAddress = document.createElement('p')
      myAddress.textContent = member.address
      const myPhone = document.createElement('p')
      myPhone.textContent = member.phone
      const myURL = document.createElement('p')
      myURL.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
      const myLogo = document.createElement('img')
      myLogo.src=`./images/${member.logopath}`
      myLogo.setAttribute('loading', 'lazy')
      myLogo.setAttribute('width', '300')
      myLogo.setAttribute('height', '200')
      myLogo.setAttribute('alt', `${member.name}`)
      const myLevel = document.createElement('p')
      
      switch(member.level) {
        case 2:
          myLevel.textContent="Level = Silver"
          break;
          case 3:
            myLevel.textContent="Level = Gold"
          break;
        default:
          myLevel.textContent="Level is Not for Profit"
      }

      
      const mySection = document.createElement('section')
      // Sugerencias de Copilot (lo de agregarle una class)    const mySection = document.createElement('section');
      mySection.classList.add('member-card');
      // mySection.className = 'card'
      mySection.appendChild(myLogo)
      mySection.appendChild(myName)
      mySection.appendChild(myAddress)
      mySection.appendChild(myPhone)
      mySection.appendChild(myURL)
      mySection.appendChild(myLevel)
      cards.appendChild(mySection)
    });
  }

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

}) // end Content Loader


// GRID AND LIST BUTTONS
// const gridbutton = document.querySelector("#gridB");
// const listbutton = document.querySelector("#listB");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }
