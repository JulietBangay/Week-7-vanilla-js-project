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
