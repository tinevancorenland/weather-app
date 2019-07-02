const key = "ee50b5e24279fee77fa436c9b704948f";
const input = document.getElementById("input-text");
const button = document.getElementsByTagName("button");

input.addEventListener("keypress", getValue);

function getValue(e) {
    console.log(e.target.value);
}

function getWeather() {
    button[0].addEventListener("click", async function (e) {
        let city = input.value;
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&APPID=${key}`;
        let response = await axios.get(api);
        console.log(response.data);
    })
}

getWeather();