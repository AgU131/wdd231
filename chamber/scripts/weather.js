// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const report = document.querySelector('#report');
const forecast = document.querySelector('#forecast');
// const currentTemp = document.querySelector('#current-temp');
// const captionDesc = document.querySelector('figcaption');

const key = "dd13352d8628298ab841d7e562984852"
const lat = "-31.42"
const long = "-64.19"
// const lat = "-31.41967449183622"
// const long = "-64.18860315826853"


// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;


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


// convert a uniix time stamp to normal time
  function unixtime(x) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(x * 1000);

    // Hours part from the timestamp
    let hours = date.getHours();
    if (hours>12) {hours=hours-12}

    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    const formattedTime = `${hours}:${minutes.substring(minutes.length - 2)}`;
    return formattedTime
  
}


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
  temp.innerHTML = `${data.list[0].main.temp}&deg;C`
  report.appendChild(temp)
  
  const description = document.createElement('p')
  description.innerHTML = data.list[0].weather[0].description;
  report.appendChild(description)
  
  const high = document.createElement('p')
  high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;C`
  report.appendChild(high)
  
  const low = document.createElement('p')
  low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;C`
  report.appendChild(low)
  
  const humidity = document.createElement('p')
  humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
  report.appendChild(humidity)
  
  const sunrise = document.createElement('p')
  sunrise.innerHTML = `Sunrise: ${unixtime(data.city.sunrise)}am`
  report.appendChild(sunrise)
  
  const sunset = document.createElement('p')
  sunset.innerHTML = `Sunset: ${unixtime(data.city.sunset)}pm`
  report.appendChild(sunset)


  // Forecast general
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const date = new Date();
  
  // Forecast icons
  const iconsrc2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
  const iconsrc3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
  const icon1 = document.querySelector('#forecast-icon1');
  const icon2 = document.querySelector('#forecast-icon2');
  const icon3 = document.querySelector('#forecast-icon3');
  
  icon1.setAttribute('src', iconsrc);
  icon1.setAttribute('alt', desc);

  icon2.setAttribute('src', iconsrc2);
  icon2.setAttribute('alt', data.list[8].weather[0].main);

  icon3.setAttribute('src', iconsrc3);
  icon3.setAttribute('alt', data.list[16].weather[0].main);
  
  
  // Forecast Weather
  const temp1 = document.createElement('p')
  temp1.innerHTML = `Today: ${data.list[0].main.temp}&deg;C`
  forecast.appendChild(temp1)
  // const icon1 = document.createElement('img')

  const temp2 = document.createElement('p')
  temp2.innerHTML = `${dayNames[date.getDay()+1]}: ${data.list[8].main.temp}&deg;C`
  forecast.appendChild(temp2)
  // const icon2 = document.createElement('img')
  
  const temp3 = document.createElement('p')
  temp3.innerHTML = `${dayNames[date.getDay()+2]}: ${data.list[16].main.temp}&deg;C`
  forecast.appendChild(temp3)
  // const icon3 = document.createElement('img')

}