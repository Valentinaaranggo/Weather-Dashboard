var cityInputEl = document.getElementById("city-input");
var cityFormEl = document.getElementById("city-form");
var searchButtonEl = document.getElementById("search-button");
var searchHistoryEl = document.getElementById("search-history")
var containerEl = document.getElementById("current-container")
var containerE2 = document.getElementById("forecast-container")

var APIkey = "15cfc10db48f94d127fa1ca931415290";

function getWeatherData(city,latitude,longitude) { 
    ///5-day forecast API
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely,hourly&appid=" + APIkey;
        
    fetch(requestUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);

        });
    });
};
function getCityData(city) {
    event.preventDefault();
    
  
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;

   
    fetch(cityUrl)
    .then(function(response) {

        if (response.ok) {
            response.json()
            .then(function(data) {
            console.log(data);

    
    var cityName = data.name;
    var latitude = data.coord.lat;
    var longitude = data.coord.lon;
    
  
    getWeatherData(cityName,latitude,longitude);

    });

    } else { 
        alert("That city wasn't found!")
        cityFormEl.reset()
     }
   });
};
 function currentData(city, data) {
    var currentTemp = data.current.temp;
    var humidity = data.current.humidity;
    var windSpeed = data.current.wind_speed;
    var uvIndex = data.current.uvi;
    var iconCurrent = data.current.weather[0].icon;

    
    
};

