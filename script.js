const key = "ee50b5e24279fee77fa436c9b704948f";
const input = document.getElementById("input-text");
const button = document.getElementsByTagName("button");
const today = new Date();
const tempDay1 = document.getElementById("tempDayOne");
const tempDay2 = document.getElementById("tempDayTwo");
const tempDay3 = document.getElementById("tempDayThree");
const tempDay4 = document.getElementById("tempDayFour");
const tempDay5 = document.getElementById("tempDayFive");
const cardcontainer = document.getElementById("cardcontainer");
const iconOne = document.getElementById("iconDayOne");
const iconTwo = document.getElementById("iconDayTwo");
const iconThree = document.getElementById("iconDayThree");
const iconFour = document.getElementById("iconDayFour");
const iconFive = document.getElementById("iconDayFive");
const week = [];
const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];
const dateOne = "";
const days = document.getElementsByClassName("day");
const keyup =
  "5c7a3ad73173f096501026c20378f643a7bf804bf3c2bbf6732986486c70f513";

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

    console.log(dayFive);
    let temp1 = convertKelvinToCelsius(dayOne[0].main.temp);
    let temp2 = convertKelvinToCelsius(dayTwo[0].main.temp);
    let temp3 = convertKelvinToCelsius(dayThree[0].main.temp);
    let temp4 = convertKelvinToCelsius(dayFour[0].main.temp);
    let temp5 = convertKelvinToCelsius(dayFive[0].main.temp);

    tempDay1.innerText = Math.floor(temp1);
    tempDay2.innerText = Math.floor(temp2);
    tempDay3.innerText = Math.floor(temp3);
    tempDay4.innerText = Math.floor(temp4);
    tempDay5.innerText = Math.floor(temp5);
    document.getElementById("descriptionDayOne").innerHTML =
      dayOne[0].weather[0].description;

    document.getElementById("descriptionDayTwo").innerHTML =
      dayTwo[0].weather[0].description;

    document.getElementById("descriptionDayThree").innerHTML =
      dayThree[0].weather[0].description;

    document.getElementById("descriptionDayFour").innerHTML =
      dayFour[0].weather[0].description;

    document.getElementById("descriptionDayFive").innerHTML =
      dayFive[0].weather[0].description;

    iconOne.src =
      "http://openweathermap.org/img/w/" + dayOne[0].weather[0].icon + ".png";
    iconTwo.src =
      "http://openweathermap.org/img/w/" + dayTwo[0].weather[0].icon + ".png";
    iconThree.src =
      "http://openweathermap.org/img/w/" + dayThree[0].weather[0].icon + ".png";
    iconFour.src =
      "http://openweathermap.org/img/w/" + dayFour[0].weather[0].icon + ".png";
    iconFive.src =
      "http://openweathermap.org/img/w/" + dayFive[0].weather[0].icon + ".png";
    // datestringlong1 = dayOne[0].dt_txt.toString();
    // date1 = datestringlong1.substring(0, 10);
    // datestringlong2 = dayTwo[0].dt_txt.toString();
    // date2 = datestringlong2.substring(0, 10);
    // datestringlong3 = dayThree[0].dt_txt.toString();
    // date3 = datestringlong3.substring(0, 10);
    // datestringlong4 = dayFour[0].dt_txt.toString();
    // date4 = datestringlong4.substring(0, 10);
    // datestringlong5 = dayFive[0].dt_txt.toString();
    // date5 = datestringlong5.substring(0, 10);
    // days[0].innerText = date1;
    // days[1].innerText = date2;
    // days[2].innerText = date3;
    // days[3].innerText = date4;
    // days[4].innerText = date5;

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
    document.getElementById("weekdayOne").innerHTML = weekday[d.getDay()];
    document.getElementById("weekdayTwo").innerHTML = weekday[d.getDay() + 1];
    document.getElementById("weekdayThree").innerHTML = weekday[d.getDay() + 2];
    document.getElementById("weekdayFour").innerHTML = weekday[d.getDay() + 3];
    document.getElementById("weekdayFive").innerHTML = weekday[d.getDay() + 4];

    let apiup = `https://api.unsplash.com/photos/random/?query=${city}&client_id=${keyup}`;
    let responseup = await axios.get(apiup);
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = `url("${responseup.data.urls.regular}")`;
  });
}
getWeather();

function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return kelvin - 273.15;
  }
}