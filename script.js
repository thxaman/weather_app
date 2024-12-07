const apikey = "177d4884ae187c36979920b7a5d9511c";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weathericon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";
    alert(`write a correct city name`);
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weather_icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weather_icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weather_icon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".visible_details").style.display = "flex";
    document.querySelector(".error").style.display = "none"; 
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
