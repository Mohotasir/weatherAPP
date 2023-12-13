
const apiKey = "9d20f8986f06594dd61610704466e6fd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(cityName){
    const response = await fetch(apiUrl+cityName+`&appid=${apiKey}`);
    var data = await response.json();
    
   
    if(response.status == 404 || search.value ==""){
        document.querySelector(".msg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let city =  document.querySelector(".cityName");
        let temp = document.querySelector(".temp");
        let humidity = document.querySelector(".humidity");
        let wind =  document.querySelector(".wind");
        let weatherIcon = document.querySelector(".weather-icon");
        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp+"°c";
        humidity.innerHTML = data.main.humidity+"%";
        wind.innerHTML = data.wind.speed+" km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
        }
        document.querySelector(".msg").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        search.value = "";
       
    }
    
}
btn.addEventListener("click",()=>{
    checkWeather(search.value);
})
