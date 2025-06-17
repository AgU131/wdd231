// Reference to the div and data path
const cards = document.querySelector('#products');
const path = './data/products.json';

let products=[]

//function to fetch data
async function getProducts() {
  try {
    const response = await fetch(path);
    const data = await response.json();
    //console.log(data)
    products=data.products;
    displayProducts(products);
  } catch (error) {

  }
}
getProducts();


const displayProducts = (products) => {
  cards.innerHTML = '';
 
  products.forEach(product => {
    const productname = document.createElement('h2');
    const productdescr = document.createElement('p');
    const productcolor = document.createElement('li');
    const productcost = document.createElement('span');
    const productimg = document.createElement('img');

    productname.textContent = product.name;
    productdescr.textContent = product.description;
    productcolor.textContent = `Color: ${product.color}`;
    productcost.textContent = `Price: ${product.price}`;
    productimg.src = `${product.image}`;
    productimg.alt = product.name;
    productimg.loading = 'lazy';

    const productcard = document.createElement('section');
    productcard.classList.add('mycards');
    productcard.appendChild(productname)
    productcard.appendChild(productimg)
    productcard.appendChild(productdescr)
    productcard.appendChild(productcolor)
    productcard.appendChild(productcost)
    
    cards.appendChild(productcard)
  });
}


// Display each filtered product and change the button's active color
// DISPLAY  ALL
const all = document.querySelector('#all')
all.addEventListener('click', () => {
  all.className="active"
  printers.className=""
  filaments.className=""
  parts.className=""
  displayProducts(products)
});

// DISPLAY PRINTERS
const printers = document.querySelector('#printers')
printers.addEventListener('click', () => {
  const result = products.filter((course) => course.item === 'Printer');
  all.className=""
  printers.className="active"
  filaments.className=""
  parts.className=""
  displayProducts(result)
});

// DISPLAY FILAMENTS
const filaments = document.querySelector('#filaments')
filaments.addEventListener('click', () => {
  const result = products.filter((course) => course.item === 'Filaments');
  all.className=""
  printers.className=""
  filaments.className="active"
  parts.className=""
  displayProducts(result)
});

// DISPLAY COMPONENTS (PARTS)
const parts = document.querySelector('#parts')
parts.addEventListener('click', () => {
  const result = products.filter((course) => course.item === 'Parts');
  all.className=""
  printers.className=""
  filaments.className=""
  parts.className="active"
  displayProducts(result)
});

