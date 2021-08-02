
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let date = new Date();
let today = days[date.getDay()-1];
let dayLight = date.getHours() < 12 ? "am" : "pm" ;
let todayHour = date.getHours();
let todayMinute = date.getMinutes();

// Shows current time
let showTime = document.querySelector("#currentTime");
showTime.innerHTML = `${today} ${todayHour}:${todayMinute} ${dayLight}`;

let apiKey = "51503e9c0c9efb4a4d3f1da0bb849b23";

// Search function
function searchCity(e) {
  e.preventDefault();
  let input = document.querySelector("#input").value;

  // Change the city name
  let city = document.querySelector("#city");
  city.innerHTML = `${input}`;
  input.value = "";

  // Show temp and weather
  let apiUrl = `
  https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCity);
}

function showCity(input){
  console.log(input);
  let temp = input.data.main.temp;
  let humidity = input.data.main.humidity;
  let weather = input.data.weather[0].main;
  let wind = input.data.wind.speed;

  document.querySelector("#weather").innerHTML = `${weather}`;
  document.querySelector("#temperature").innerHTML = `${temp}℃`;
  document.querySelector("#windSpeed").innerHTML = `Wind: ${wind}km/h`;
  document.querySelector("#humidity").innerHTML = `Humidity: ${humidity}%`;

}

let cityForm = document.querySelector("#search");
cityForm.addEventListener("submit", searchCity);


