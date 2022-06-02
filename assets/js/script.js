var cityNameEl = document.querySelector("#city");
var currentCityEl = document.querySelector("#current-city-form");
var cityFormEl = document.querySelector("#city-form")


var getWeather = function(weather) {
    // format the weather api url **CHECK THAT THIS IS CORRECT
    var apiUrl = "https://https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}api.openweathermap.org"; 

//make a request to URL
fetch(apiUrl).then(function(response) {
    if (response.ok) {
        response.json().then(function(data){
            displayWeather(data);
        });
    } else {
        alert("City Not Found!");
    }
})
.catch(function(error) {
    //notice this '.catch()' getting choianed onto the end of the .then method
    alert("Unable to find City!")
  });
  response.json().then(function(data) {
    displayWeather(data);
  });
}



var citySubmit = function (event) {
    event.preventDefault ();
//get value from city input
var city = cityNameEl.value.trim();

if (city) {
    getWeather(city);
    cityNameEl.value = "";
} else {
    alert("Please enter a city name");
}
}



var displayWeather = function (data, searchTerm) {

    //check if apie returned any cities
    if (city.length === 0) {
        currentCityEl.textContent = "No Forecasts Found";
        return;
    }
    console.log(city);
}



cityFormEl.addEventListener("submit", citySubmit);
