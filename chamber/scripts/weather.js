// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const report = document.querySelector('#report');
const forecast = document.querySelector('#forecast');
// const currentTemp = document.querySelector('#current-temp');
// const captionDesc = document.querySelector('figcaption');

const key = "dd13352d8628298ab841d7e562984852"
const lat = "-31.41967449183622"
const long = "-64.18860315826853"

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].main;
  // currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  // captionDesc.textContent = `${desc}`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // const temp = Math.round(data.list[0].main.temp);
  const city = document.createElement('p')
  city.innerHTML = `City: ${data.city.name}`
  report.appendChild(city)
  
  const temp = document.createElement('p')
  temp.innerHTML = data.list[0].main.temp
  report.appendChild(temp)
  
  const description = document.createElement('p')
  description.innerHTML = data.list[0].weather[0].description;
  report.appendChild(description)
  
  const high = document.createElement('p')
  high.innerHTML = `High: ${data.list[0].main.temp_min}&deg;C`
  report.appendChild(high)
  
  const low = document.createElement('p')
  low.innerHTML = `Low: ${data.list[0].main.temp_max}&deg;C`
  report.appendChild(description)
  
  const humidity = document.createElement('p')
  humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
  report.appendChild(humidity)
  
  const sunrise = document.createElement('p')
  sunrise.innerHTML = `Sunrise: ${data.city.sunrise}am`
  report.appendChild(sunrise)
  
  const sunset = document.createElement('p')
  sunset.innerHTML = `Sunset: ${data.city.sunrise}pm`
  report.appendChild(sunset)


//forecast
  const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const d = new Date();
  
  const temp1=document.createElement('p')
  temp1.innerHTML = `${dayNames[d.getDay()]}: ${data.list[0].main.temp}&deg;F`
  forecast.appendChild(temp1)


  const temp2=document.createElement('p')
  temp2.innerHTML = `${dayNames[d.getDay()+1]}: ${data.list[8].main.temp}&deg;F`
  forecast.appendChild(temp2)

  const temp3=document.createElement('p')
  temp3.innerHTML = `${dayNames[d.getDay()+2]}: ${data.list[16].main.temp}&deg;F`
  forecast.appendChild(temp3)
}