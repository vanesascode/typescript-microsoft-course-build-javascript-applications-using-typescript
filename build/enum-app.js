"use strict";
var WeatherCondition;
(function (WeatherCondition) {
    WeatherCondition[WeatherCondition["Sunny"] = 0] = "Sunny";
    WeatherCondition[WeatherCondition["Cloudy"] = 1] = "Cloudy";
    WeatherCondition[WeatherCondition["Rainy"] = 2] = "Rainy";
    WeatherCondition[WeatherCondition["Stormy"] = 3] = "Stormy";
})(WeatherCondition || (WeatherCondition = {}));
function displayWeatherCondition(condition) {
    let weatherOutput = "";
    switch (condition) {
        case WeatherCondition.Sunny:
            weatherOutput = "It's sunny today!";
            break;
        case WeatherCondition.Cloudy:
            weatherOutput = "It's cloudy today.";
            break;
        case WeatherCondition.Rainy:
            weatherOutput = "It's raining today.";
            break;
        case WeatherCondition.Stormy:
            weatherOutput = "There's a storm today!";
            break;
        default:
            weatherOutput = "Unknown weather condition.";
    }
    const weatherOutputElement = document.getElementById("weather-output");
    weatherOutputElement.innerHTML = weatherOutput;
}
function handleDisplay() {
    const weatherInput = document.getElementById("weatherInput");
    if (weatherInput instanceof HTMLInputElement) {
        const inputValue = weatherInput.value.toLowerCase();
        switch (inputValue) {
            case "sunny":
                displayWeatherCondition(WeatherCondition.Sunny);
                break;
            case "cloudy":
                displayWeatherCondition(WeatherCondition.Cloudy);
                break;
            case "rainy":
                displayWeatherCondition(WeatherCondition.Rainy);
                break;
            case "stormy":
                displayWeatherCondition(WeatherCondition.Stormy);
                break;
            default:
                console.log("Unknown weather condition.");
        }
    }
}
