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

let celsiusTemperature = null;

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
    axios
      .get(weatherApiUrl)
      .then(displayWeatherCondition)
      .then(weatherIconDisplay);
    function displayWeatherCondition(response) {
      console.log(response);
      celsiusTemperature = Math.round(response.data.main.temp);
      let city = document.querySelector("#current-city");
      let latitude = Math.round(position.coords.latitude);
      let longitude = Math.round(position.coords.longitude);
      city.innerHTML = `${response.data.name} <br /> Latitude: ${latitude} <br /> Longitude: ${longitude}`;
      let temperature = document.querySelector("#temperature");
      temperature.innerHTML = Math.round(response.data.main.temp);
      let humidity = document.querySelector("#humidity");
      humidity.innerHTML = response.data.main.humidity;
      let windspeed = document.querySelector("#windspeed");
      windspeed.innerHTML = Math.round(response.data.wind.speed);
      let description = document.querySelector("#weather-description");
      description.innerHTML = response.data.weather[0].main;
    }
  }
  function weatherIconDisplay() {
    let description = document.querySelector("#weather-description");
    if (description.innerHTML === "Thunderstorm") {
      document.getElementById("weather-icon").src = "images/thunder.svg";
    } else {
      if (description.innerHTML === "Drizzle") {
        document.getElementById("weather-icon").src = "images/rainy-4.svg";
      } else {
        if (description.innerHTML === "Rain") {
          document.getElementById("weather-icon").src = "images/rainy-6.svg";
        } else {
          if (description.innerHTML === "Snow") {
            document.getElementById("weather-icon").src = "images/snowy-6.svg";
          } else {
            if (description.innerHTML === "Clear") {
              document.getElementById("weather-icon").src = "images/day.svg";
            } else {
              if (description.innerHTML === "Clouds") {
                document.getElementById("weather-icon").src =
                  "images/cloudy.svg";
              } else {
                document.getElementById("weather-icon").src =
                  "images/warning.svg";
              }
            }
          }
        }
      }
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
  axios
    .get(weatherApiUrl)
    .then(displayWeatherCondition)
    .then(weatherIconDisplay);
  function displayWeatherCondition(response) {
    console.log(response);
    celsiusTemperature = Math.round(response.data.main.temp);
    let city = document.querySelector("#current-city");
    let latitude = Math.round(position.coords.latitude);
    let longitude = Math.round(position.coords.longitude);
    city.innerHTML = `${response.data.name} <br /> Latitude: ${latitude} <br /> Longitude: ${longitude}`;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let windspeed = document.querySelector("#windspeed");
    windspeed.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].main;
  }
  function weatherIconDisplay() {
    let description = document.querySelector("#weather-description");
    if (description.innerHTML === "Thunderstorm") {
      document.getElementById("weather-icon").src = "images/thunder.svg";
    } else {
      if (description.innerHTML === "Drizzle") {
        document.getElementById("weather-icon").src = "images/rainy-4.svg";
      } else {
        if (description.innerHTML === "Rain") {
          document.getElementById("weather-icon").src = "images/rainy-6.svg";
        } else {
          if (description.innerHTML === "Snow") {
            document.getElementById("weather-icon").src = "images/snowy-6.svg";
          } else {
            if (description.innerHTML === "Clear") {
              document.getElementById("weather-icon").src = "images/day.svg";
            } else {
              if (description.innerHTML === "Clouds") {
                document.getElementById("weather-icon").src =
                  "images/cloudy.svg";
              } else {
                document.getElementById("weather-icon").src =
                  "images/warning.svg";
              }
            }
          }
        }
      }
    }
  }
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  cityInput.value = cityInput.value.toLowerCase().trim();
  axios
    .get(`${weatherApiUrl}q=${cityInput.value}&units=metric&appid=${apiKey}`)
    .then(displayWeatherCondition)
    .then(weatherIconDisplay);
  function displayWeatherCondition(response) {
    console.log(response);
    celsiusTemperature = Math.round(response.data.main.temp);
    let city = document.querySelector("#current-city");
    city.innerHTML = `${response.data.name} `;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let windspeed = document.querySelector("#windspeed");
    windspeed.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].main;
  }
  function weatherIconDisplay() {
    let description = document.querySelector("#weather-description");
    if (description.innerHTML === "Thunderstorm") {
      document.getElementById("weather-icon").src = "images/thunder.svg";
    } else {
      if (description.innerHTML === "Drizzle") {
        document.getElementById("weather-icon").src = "images/rainy-4.svg";
      } else {
        if (description.innerHTML === "Rain") {
          document.getElementById("weather-icon").src = "images/rainy-6.svg";
        } else {
          if (description.innerHTML === "Snow") {
            document.getElementById("weather-icon").src = "images/snowy-6.svg";
          } else {
            if (description.innerHTML === "Clear") {
              document.getElementById("weather-icon").src = "images/day.svg";
            } else {
              if (description.innerHTML === "Clouds") {
                document.getElementById("weather-icon").src =
                  "images/cloudy.svg";
              } else {
                document.getElementById("weather-icon").src =
                  "images/warning.svg";
              }
            }
          }
        }
      }
    }
  }
}

function convertToFarenheit(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  let farenheitTemperature = celsiusTemperature * 1.8 + 32;
  temperatureElement.innerHTML = Math.round(farenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  farenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = celsiusTemperature;
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
