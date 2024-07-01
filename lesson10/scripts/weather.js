const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=34.592000&lon=-106.3652&appid=56f6f829964c7a408a0cf6398ab3356c&units=imperial"

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;f`;
    captionDesc.innerHTML = data.weather[0].main;
    weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn"+data.weather[0].icon+"@2x.png");
}

async function apiFetch(){
    try {
        const response = await fetch(WEATHER_URL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}