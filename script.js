const key = "ee50b5e24279fee77fa436c9b704948f";
const input = document.getElementById("input-text");
const button = document.getElementsByTagName("button");
const week = [];
const dayOne = [];
const dayTwo = [];
const dayThree = [];
const dayFour = [];
const dayFive = [];

// input.addEventListener("keypress", getValue);

// function getValue(e) {
//     console.log(e.target.value);
// }

function getWeather() {
  button[0].addEventListener("click", async function(e) {
    let city = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${key}`;
    let response = await axios.get(api);
    console.log(response.data);

    //put info response api into dayOne
    dayOne.push(response.data.list[0]);
    console.log(dayOne);

    //put wanted info dayOne into proper html divs

    dayTwo.push(response.data.list[8]);
    console.log(dayTwo);

    dayThree.push(response.data.list[16]);
    console.log(dayThree);

    dayFour.push(response.data.list[32]);
    console.log(dayFour);

    dayFive.push(response.data.list[39]);
    console.log(dayFive);

    //weather descriptions in proper html ids
    document.getElementById("descriptionDayOne").innerHTML =
      response.data.list[0].weather[0].description;

    document.getElementById("descriptionDayTwo").innerHTML =
      response.data.list[8].weather[0].description;

    document.getElementById("descriptionDayThree").innerHTML =
      response.data.list[16].weather[0].description;

    document.getElementById("descriptionDayFour").innerHTML =
      response.data.list[32].weather[0].description;

    document.getElementById("descriptionDayFive").innerHTML =
      response.data.list[39].weather[0].description;

    //temp in proper html divs
    document.getElementById("tempDayOne").innerHTML = Math.floor(
      convertKelvinToCelsius(response.data.list[0].main.temp)
    );

    document.getElementById("tempDayTwo").innerHTML = Math.floor(
      convertKelvinToCelsius(response.data.list[8].main.temp)
    );

    document.getElementById("tempDayThree").innerHTML = Math.floor(
      convertKelvinToCelsius(response.data.list[16].main.temp)
    );

    document.getElementById("tempDayFour").innerHTML = Math.floor(
      convertKelvinToCelsius(response.data.list[32].main.temp)
    );

    document.getElementById("tempDayFive").innerHTML = Math.floor(
      convertKelvinToCelsius(response.data.list[39].main.temp)
    );
  });
}

//convert kelvin to celcius
function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return kelvin - 273.15;
  }
}

getWeather();
