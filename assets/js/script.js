// var searchCityEl = document.querySelector("city-input")
var currentCityEl = document.getElementById("#current-city-form")
var city;
var searchBtn = document.getElementById("searchBtn")
var lat;
var lon;
var uv;
var uvEl;


function formSubmitHandler(event) {
    event.preventDefault();
    //get value from form **WORKING
    city = document.getElementById("city-input").value

    if (city) {
        getCityWeather(city);
    } else {
        alert("please enter a city!")
    }
}

//get current weather from API **WORKING
var getCityWeather = function () {

    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(cityApi)

    fetch(cityApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayCurrentWeather(data)
            // lat = data.coord.lat
            // lon = data.coord.lon
        })
    })
}



//how to display the data we fetched **WORKING
var displayCurrentWeather = function (data) {
    var temp = data.main.temp
    var humidity = data.main.humidity
    var wind = data.wind.speed
    var currentTempDiv = document.getElementById("showCurrentWeather")
    var heading = document.createElement("h3")
    heading.classList = "heading"
    //NOT FUNCTIONING
    // var weatherIcon = document.createElement("img")
    // var iconUrl = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
    // weatherIcon.setAttribute("src", iconUrl)
    // var iconDescription = data.current.weather[0].description;
    heading.innerHTML = "The current temperature in " + city + " is " + temp + " degrees. " + "<br>" + " Humidity is " + humidity + " % " + " <br> " + " Wind Speed is " + wind + " mph. "
    currentTempDiv.appendChild(heading);
    var lon = data.coord.lon
    var lat = data.coord.lat
    console.log(lat, lon)
    getFiveDayWeather(lat, lon);
}


//how to get 5 day weather
var getFiveDayWeather = function (lat, lon) {
    console.log(lat, lon)
    var fiveDayApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    fetch(fiveDayApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayFiveDayWeather(data);
        }
        )
    })

}

// how to display the data we fetched for FIVE DAY **FUCNTION triggers but not acurate code
function displayFiveDayWeather(data) {
    var fiveDayTempDiv = document.getElementById("showFiveDayWeather")
    for (i = 0; i < 5; i++) {
        var date = data.daily[i].dt
        var humidity = data.daily[i].humidity
        var windSpeed = data.daily[i].wind_speed
        var temp = data.daily[i].temp.day
        var uv = data.daily[i].uvi
        var dayDiv = document.createElement("div")
        dayDiv.classList = ("card-body bg-dark text-white m-5 p-2")
        var dayDate = document.createElement("h3")
        dayDate.innerHTML = dayjs.unix(date).format('M/D/YYYY');
        var humiditiyEL = document.createElement("p")
        humiditiyEL.innerHTML = "Humidity: " + humidity + "%"
        var windSpeedEl = document.createElement("p")
        windSpeedEl.innerHTML = "Wind Speed: " + windSpeed + " mph "
        var tempEl = document.createElement("p")
        tempEl.innerHTML = "Temp: " + temp + " °F"
        var uvEL = document.createElement("p")
        uvEL.innerHTML = "UV Index: " + uv
        var weatherIcon = document.createElement("img")
        var forecastIconUrl = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
        weatherIcon.setAttribute("src", forecastIconUrl)
        var forecastIconDescription = data.daily[i].weather[0].description;
        dayDiv.append(dayDate, humiditiyEL, windSpeedEl, tempEl, uvEL, forecastIconDescription, weatherIcon);
        fiveDayTempDiv.appendChild(dayDiv);

    }
    // displaySearchHistory(city);
}





// //  //display search history ** RUNS but doesn't display the search
// function displaySearchHistory(city) {
//     localStorage.setItem(city)
//     localStorage.getItem(city)
//     var searchHistoryEl = document.getElementById("searchHistory")
//     var buttonEl = document.createElement("div")
//     buttonEl.textContent = "city"
//     searchHistoryEl.appendChild(buttonEl)

// }




searchBtn.addEventListener("click", formSubmitHandler);
