const apiKey = '9b211d440b58ba85adbcd9d620404cfd';

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city !== '') {
    getWeather(city);
  }
});

function getWeather(city) {
  const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9b211d440b58ba85adbcd9d620404cfd`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const weather = data.weather[0].description;
      if (data.cod === 200) {
        update(data);
      } else {
        alert('Error fetching weather data');
      }
      updateBackground(weather);
    })
     .catch(() => {
      alert('Error fetching weather data');
    });
}

function update(data) {
  document.getElementById('weatherResult').classList.remove('hidden');
  console.log("Icon URL:", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  document.getElementById('cityName').innerHTML = data.name;
  document.getElementById('description').innerHTML = data.weather[0].description;
  document.getElementById('temp').innerHTML = Math.round(data.main.temp);
  document.getElementById('humidity').innerHTML = data.main.humidity;
  document.getElementById('windSpeed').innerHTML = data.wind.speed;
  document.getElementById('feelsLike').innerHTML =data.main.feels_like;
  document.getElementById('WS1').innerHTML = data.weather[0].description; 
  document.getElementById('WS2').innerHTML = Math.round(data.main.temp);
  document.getElementById('WS3').innerHTML = data.main.feels_like;
  document.getElementById('WS5').innerHTML = data.weather[0].description; 
  document.getElementById('WS6').innerHTML = Math.round(data.main.temp);
  document.getElementById('WS7').innerHTML = data.main.feels_like;
  document.getElementById('WS9').innerHTML = data.weather[0].description; 
  document.getElementById('WS10').innerHTML = Math.round(data.main.temp);
  document.getElementById('WS11').innerHTML = data.main.feels_like;
  document.getElementById('WS13').innerHTML = data.weather[0].description; 
  document.getElementById('WS14').innerHTML = Math.round(data.main.temp);
  document.getElementById('WS15').innerHTML = data.main.feels_like;

const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
document.getElementById("weatherIcon").src = iconUrl;
};

function updateBackground(weather) {
  console.log('Changing background for:', weather);
  const body = document.body;
switch (weather) {
    case 'clear sky':
      body.style.backgroundImage = "url('clear.png')"; //clear
      body.style.backgroundColor = '';
      break;
    case 'sunny':
      body.style.backgroundImage = "url('sunny.png')";//sunny
      body.style.backgroundColor = '';
      break;
    case 'overcast clouds':
      body.style.backgroundImage = "url('cloudy.png')"; //cloudz
      body.style.backgroundColor = '';
      break;
    case 'moderate rain':
      body.style.backgroundImage = "url('rainy.png')"; //rainy
      body.style.backgroundColor = '';
      break;
    default:
      body.style.backgroundImage = "";
      body.style.backgroundColor = 'linear-gradient(270deg, #e69553, #feb47b, #86a8e7, #91eae4);';
  }
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
  }

  const toggleButton = document.getElementById("toggleDark");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

  

