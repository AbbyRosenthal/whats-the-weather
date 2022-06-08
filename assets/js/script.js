// var searchCityEl = document.querySelector("city-input")
var currentCityEl = document.getElementById("#current-city-form")
var city;
var searchBtn = document.getElementById("searchBtn")
var lat;
var lon;


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
                lat = data.coord.lat
                lon = data.coord.lon
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
        heading.innerHTML = "The current temperature in " + city + " is " + temp + " degrees. " + "<br>" + " Humidity is " + humidity + " % " + " <br> " + " Wind Speed is " + wind + " mph. "
        currentTempDiv.appendChild(heading);
        var lon = data.coord.lon
        var lat = data.coord.lat
        console.log(lat, lon)
        getFiveDayWeather(lat, lon);
    }


    //how to get 5 day weather
    var getFiveDayWeather = function (lat, lon) {
        console.log(lat,lon)
        var fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
        var fiveDayForecast = fetch(fiveDayApi)

        fetch(fiveDayApi).then(function (response) {
            response.json().then(function (data) {
                console.log(fiveDayForecast)
                
            }
            )
        })
    }



    //  //dispaly search history
    //  var displaySearchHistory = function (city) {
    //     var showHistory = document.getElementById("searchHistory");
    //     showHistory.innerHTML = city

    // };
    // displaySearchHistory



    //how to display the data we fetched for FIVE DAY
    // var displayFiveDay = function (data) {
    //     // var fiveDay = //insert five day target from data returned
    //     var fiveDayTempDiv = document.getElementById("showFiveDayWeather")
    //     var heading = document.createElement("h3")
    //     heading.innerHTML = ""
    //     fiveDayTempDiv.appendChild(heading);

    // }

    searchBtn.addEventListener("click", formSubmitHandler);
