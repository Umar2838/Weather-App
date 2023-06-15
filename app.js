var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var date = new Date()


var Date_time = document.getElementById("date_time");

Date_time.innerHTML = days[date.getDay()] + ", " +  month[date.getMonth()] + " " +date.getDate()

function addZero(x, n) {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  }
  
var time = document.getElementById("time")
var hours = addZero(date.getHours(),2)
var Minute = addZero(date.getMinutes(),2)

time.innerHTML = hours + ":" + Minute

var Search = document.querySelector(".Search-location")
var SearchBtn = document.querySelector(".search-icon")
var weatherIcon = document.querySelector(".weather-icon") 

const apiKey = "f990398a43d507e3c83b93dab4a6e8ab"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkweather(city){
  const response = await fetch(apiUrl  + city +  `&appid=${apiKey}`)
  var data = await response.json()

  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main == "Clouds"){

  weatherIcon.src = "images/clouds.png"
 
   } else if (data.weather[0].main == "Clear"){
 weatherIcon.src = "images/clear.png"

} 
else if (data.weather[0].main == "Rain"){
  weatherIcon.src = "images/rain.png.png"
 
 } else if (data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images/drizzle.png.png"
 
 } else if (data.weather[0].main == "Mist"){
  weatherIcon.src = "images/mist.png.png"
 
 } 
 document.querySelector(".weather").style.display="block"
}
checkweather()

SearchBtn.addEventListener("click", function(){
  checkweather(Search.value)
})