const apiKey="a375f2c81d9e5796ad1d23751043fdf8"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather(){
    const response=await fetch(apiUrl+ `&appid=${apiKey}`)
    var data=await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=data.main.temp +"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity +" %"
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h"

}


checkWeather()