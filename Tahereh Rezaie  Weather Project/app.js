

                           // SLIDESHOW HEADER
let myIndex = 0;
slideshow();
function slideshow(){
 let i;
 let mySlide = document.getElementsByClassName("mySlide");
 for(i = 0;i < mySlide.length; i++){
    mySlide[i].style.display="none";
 }
  myIndex++;
  if(myIndex > mySlide.length){myIndex = 1}
  mySlide[myIndex-1].style.display="block";

  setTimeout(slideshow,5000);
}

                                 // WEATHER

const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.weather-icon');
const weather_desc = document.querySelector('.weather-description');
const temp = document.querySelector('.current-temperature');
const min_temp = document.querySelector('.min-temperature');
const max_temp = document.querySelector('.max-temperature');
const city = document.querySelector('.city_name');
const pressure = document.querySelector('.pressure');
const wind_speed = document.querySelector('.wind-speed');
const feels_like = document.querySelector('.feels-like');

input.addEventListener('change', event => {
  icon.innerHTML = null;
  weather_desc.textContent = null;
  city.textContent = null;
  temp.textContent = null;
  min_temp.textContent = null;
  max_temp.textContent = null;
  pressure.textContent = null;
  wind_speed.textContent = null;
  feels_like.textContent = null;
});


btn.addEventListener('click', event => {
    event.preventDefault();

    isInputEmpty(input.value);

    getWeatherData(input.value);
});

                             //   EMPTY INPUT
const isInputEmpty = value => {

    if (value === "") {
        input.classList.add('error');
        city.textContent = "You have to enter your city...";
    } else {
        input.classList.remove('error');
    }
};
                            //  WEATHER API AND GET DATA
async function getWeatherData(input) {

    const API_KEY = "44a5302bb5bcfff365dcb6dd8b00526b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.cod === "404") {
        city.textContent = "City doesn't exist...";
    }

    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

    weather_desc.textContent = data.weather[0].main;

    temp.textContent = (Math.round(Number(data.main.temp) - 273.15)) + " °C";

    city.innerHTML = `${data.name}, <span>${data.sys.country}</span>`;

    min_temp.textContent = (Math.round(Number(data.main.temp_min) - 273.15)) + " °C";

    max_temp.textContent = (Math.round(Number(data.main.temp_max) - 273.15)) + " °C";

    pressure.textContent = `${data.main.pressure} hPa`;

    wind_speed.textContent = `${data.wind.speed} m/s`;

    feels_like.textContent = `${Math.round(Number(data.main.feels_like) - 273.15)} °C`;

    return data;
}
