// Dates and CopyWrite

let year = new Date().getFullYear();
let lastModified = document.lastModified;
// \u00A9 --> the unicode for the copywrite symbol. "&copy;" in html 
document.getElementById("copywrite").innerHTML = '&copy;' + ` ${year} 3DenMente`;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;	  
