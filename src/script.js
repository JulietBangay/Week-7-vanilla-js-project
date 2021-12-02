let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let apiKey = "f85062d84430cd35a6b8db439bd6c8f6";
let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?";

let now = new Date();
function currentDate() {
  let weekDay = days[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let date = document.querySelector("#current-date");
  date.innerHTML = `${weekDay} ${month} ${day} `;
  let time = document.querySelector("#current-time");
  time.innerHTML = `${hour}:${minutes}`;
}
currentDate();
openingPageCurrentLocation();

function openingPageCurrentLocation() {
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  function searchCurrentLocation(position) {
    let apiKey = "f85062d84430cd35a6b8db439bd6c8f6";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(weatherApiUrl).then(displayWeatherCondition);
    function displayWeatherCondition(response) {
      console.log(response);
      let city = document.querySelector("#current-city");
      let latitude = Math.round(position.coords.latitude);
      let longitude = Math.round(position.coords.longitude);
      city.innerHTML = `${response.data.name} <br /> Latitude: ${latitude} <br /> Longitude: ${longitude}`;
      let temperature = document.querySelector("#temperature");
      temperature.innerHTML = Math.round(response.data.main.temp) + "°C";
      let humidity = document.querySelector("#humidity");
      humidity.innerHTML = response.data.main.humidity;
      let windspeed = document.querySelector("#windspeed");
      windspeed.innerHTML = Math.round(response.data.wind.speed);
      let description = document.querySelector("#weather-description");
      description.innerHTML = response.data.weather[0].main;
    }
  }
}

let currentLocationButton = document.querySelector(
  "#search-current-location-button"
);
currentLocationButton.addEventListener("click", getCurrentLocation);

let searchCityButton = document.querySelector("#search-city-button");
searchCityButton.addEventListener("click", searchCity);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

function searchCurrentLocation(position) {
  let apiKey = "f85062d84430cd35a6b8db439bd6c8f6";
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(weatherApiUrl).then(displayWeatherCondition);
  function displayWeatherCondition(response) {
    console.log(response);
    let city = document.querySelector("#current-city");
    let latitude = Math.round(position.coords.latitude);
    let longitude = Math.round(position.coords.longitude);
    city.innerHTML = `${response.data.name} <br /> Latitude: ${latitude} <br /> Longitude: ${longitude}`;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp) + "°C";
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let windspeed = document.querySelector("#windspeed");
    windspeed.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].main;
  }
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  cityInput.value = cityInput.value.toLowerCase().trim();
  axios
    .get(`${weatherApiUrl}q=${cityInput.value}&units=metric&appid=${apiKey}`)
    .then(displayWeatherCondition);
  function displayWeatherCondition(response) {
    console.log(response);
    let city = document.querySelector("#current-city");
    city.innerHTML = `${response.data.name} `;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp) + "°C";
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let windspeed = document.querySelector("#windspeed");
    windspeed.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].main;
  }
}
