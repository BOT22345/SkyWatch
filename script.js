const apiKey="a375f2c81d9e5796ad1d23751043fdf8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input ");
const searchBtn=document.querySelector(".search button") ;
const weatherIcon=document.querySelector(".weatherIcon");
const error=document.querySelector(".error");
const weather=document.querySelector(".weather")


async function checkWeather(city){
    try {
        
        const response=await fetch(apiUrl+city+ `&appid=${apiKey}`);
        var data=await response.json();
        console.log(response)
        if(!response.ok){
            error.style.display="block";
            error.style.visibility="visible";
            weather.style.display="none";
        return;
    }else{

        error.style.display = "none"; 
        weather.style.display = "block";
        console.log(data);
        
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

    //to change the weather image
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="./Assets/sunny.png";
        weatherIcon.style.display="inline-block";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./Assets/cloud.png";
        weatherIcon.style.display="inline-block";
    }else{
        weatherIcon.src="./Assets/weathericon.png"
        weatherIcon.style.display="inline-block";
    }
}
} catch (error) {
    console.log(error)
}
}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
