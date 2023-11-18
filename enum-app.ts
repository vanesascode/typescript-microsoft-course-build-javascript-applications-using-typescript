enum WeatherCondition {
  Sunny,
  Cloudy,
  Rainy,
  Stormy,
}

function displayWeatherCondition(condition: WeatherCondition) {
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

  const weatherOutputElement = document.getElementById(
    "weather-output"
  ) as HTMLInputElement;

  weatherOutputElement.innerHTML = weatherOutput;
}

function handleDisplay() {
  const weatherInput = document.getElementById(
    "weatherInput"
  ) as HTMLInputElement;

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
