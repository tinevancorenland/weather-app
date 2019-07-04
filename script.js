const key = "ee50b5e24279fee77fa436c9b704948f";
const input = document.getElementById("input-text");
const button = document.getElementsByTagName("button");
const today = new Date;
const temperature = document.getElementsByClassName('temperature')
cardcontainer = document.getElementById('cardcontainer')
const icon = document.getElementsByClassName('icon')
const description = document.getElementsByClassName('description')
const week = [];
const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];
const dateOne = "";
const days = document.getElementsByClassName("day");
const keyup = "5c7a3ad73173f096501026c20378f643a7bf804bf3c2bbf6732986486c70f513";
var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getWeather() {
  button[0].addEventListener("click", async function (e) {
    cardcontainer.style.display = "grid";
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
    let response = await axios.get(api);
    for (i = 0; i < response.data.list.length; i += 8) {
      week.push(response.data.list[i]);
    }
    dayOne.push(week[0]);
    dayTwo.push(week[1]);
    dayThree.push(week[2]);
    dayFour.push(week[3]);
    dayFive.push(week[4]);

    let temp1 = convertKelvinToCelsius(dayOne[0].main.temp);
    let temp2 = convertKelvinToCelsius(dayTwo[0].main.temp);
    let temp3 = convertKelvinToCelsius(dayThree[0].main.temp);
    let temp4 = convertKelvinToCelsius(dayFour[0].main.temp);
    let temp5 = convertKelvinToCelsius(dayFive[0].main.temp);

    temperature[0].innerText = Math.floor(temp1)
    temperature[1].innerText = Math.floor(temp2)
    temperature[2].innerText = Math.floor(temp3)
    temperature[3].innerText = Math.floor(temp4)
    temperature[4].innerText = Math.floor(temp5)

    description[0].innerHTML = dayOne[0].weather[0].description
    description[1].innerHTML = dayTwo[0].weather[0].description
    description[2].innerHTML = dayThree[0].weather[0].description
    description[3].innerHTML = dayFour[0].weather[0].description
    description[4].innerHTML = dayFive[0].weather[0].description

    icon[0].src = "http://openweathermap.org/img/w/" + dayOne[0].weather[0].icon + ".png";
    icon[1].src = "http://openweathermap.org/img/w/" + dayTwo[0].weather[0].icon + ".png";
    icon[2].src = "http://openweathermap.org/img/w/" + dayThree[0].weather[0].icon + ".png";
    icon[3].src = "http://openweathermap.org/img/w/" + dayFour[0].weather[0].icon + ".png";
    icon[4].src = "http://openweathermap.org/img/w/" + dayFive[0].weather[0].icon + ".png";

    days[0].innerHTML = weekday[d.getDay()];
    days[1].innerHTML = weekday[d.getDay() + 1];
    days[2].innerHTML = weekday[d.getDay() + 2];
    days[3].innerHTML = weekday[d.getDay() + 3];
    days[4].innerHTML = weekday[d.getDay() + 4];

    let apiup = `https://api.unsplash.com/photos/random/?query=${city}&client_id=${keyup}`;
    let responseup = await axios.get(apiup);
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = `url("${responseup.data.urls.regular}")`
  })
}
getWeather();

function convertKelvinToCelsius(kelvin) {
  if (kelvin < (0)) {
    return 'below absolute zero (0 K)';
  } else {
    return (kelvin - 273.15);
  }
}