import "./App.css"
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/CurrentWeather';
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleonSearchChange = async (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
    try {
      const currentWeatherFetch = await fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&lang=cz&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastFetch = await fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&lang=cz&appid=${WEATHER_API_KEY}&units=metric`)

      const [weatherResponse, forecastResponse] = await Promise.all([currentWeatherFetch.json(), forecastFetch.json()]);

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container'>
      <div className="col">
        <Search
          onSearchChange={handleonSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
