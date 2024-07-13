const apiKey = "ff0bf0e8fe0866c9a9cdf8e8a41e9f3f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function cheackWeather(place){
    
    let response = await fetch(apiUrl + place+ `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    } else{
        let wind = document.querySelector(".wind");
        let humidity = document.querySelector(".humidity");
        let temp = document.querySelector(".temp");
        let city = document.querySelector("h2");

        wind.innerHTML = data.wind.speed + "km/h";
        city.innerText = data.name;
        humidity.innerHTML = data.main.humidity+ "%";
        temp.innerText = Math.round(data.main.temp)+ "°C";

        let weatherIcon=document.querySelector(".weather-icon");
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        } 
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }
    
}

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", ()=>{
    cheackWeather(searchBox.value);
})
