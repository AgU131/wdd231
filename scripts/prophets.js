const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}

getProphetData();

// function getProphetData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const prophets = data.prophets;
//       displayProphets(prophets);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
// }
