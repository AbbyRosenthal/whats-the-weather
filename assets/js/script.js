// var searchCityEl = document.querySelector("city-input")
var currentCityEl = document.getElementById("#current-city-form")
var city;
var searchBtn = document.getElementById("searchBtn")


function formSubmitHandler(event) {
    event.preventDefault();
    //get value from form
    city = document.getElementById("city-input").value
    console.log(city)

    if (city) {
        getCityWeather(city);
    } else {
        alert("please enter a city!")
    }
};


var getCityWeather = function () {

    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(cityApi)

    fetch(cityApi)
    .then(response)
    console.log(response)

}










// fetch(cityApi)
//     .then(function (response) {
//         return response.json();
//     }).then(function (data) 

//         //determines the city using lat and long from the search entered
//         lat = data.coord.lat;
//         lon = data.coord.lon

//         return fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat, "&lon=" + lon, "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2");
//     }
//     )


searchBtn.addEventListener("click", formSubmitHandler);










// FIRST TRY AT THE PROJECT
// var cityNameEl = document.querySelector("#city");
// var currentCityEl = document.querySelector("#current-city-form");
// var cityFormEl = document.querySelector("#city-form")



// //function to get city's data from API
// var getWeather = function (city) {
//     // EXAMPLE URL FOR LONDON
//     var apiUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=974e7f7c498a1d90f5f12aeb4fe7e9e2"
//     console.log(fetch(apiUrl))
//     console.log(response)

//     //make a request to URL
//     fetch(apiUrl)
//         .then(function (response) {
//             console.log("city")
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     displayWeather();
//                     console.log("o")
//                 });
//             } else {
//                 alert("City Not Found!");
//             }
//         })
//         .catch(function (error) {
//             //notice this '.catch()' getting choianed onto the end of the .then method
//             alert("Unable to find City!")
//         });
//     response.json().then(function (data) {
//         displayWeather(data);
//     });
// }
// getWeather()


// var citySubmit = function (event) {
//     event.preventDefault();
//     //get value from city input
//     var city = cityNameEl.value.trim();

//     if (city) {
//         getWeather(city);
//         cityNameEl.value = "";
//     } else {
//         alert("Please enter a city name");
//     }
// }

// var displayWeather = function (data, searchTerm) {

//     //check if apie returned any cities
//     if (city.length === 0) {
//         currentCityEl.textContent = "No Forecasts Found";
//         return;
//     }
//     console.log(city);
// }



// cityFormEl.addEventListener("submit", getWeather); 
