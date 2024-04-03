import "./CurrentWeather.css"

const CurrentWeather = ({ data }) => {

    return (

            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weather-description">{data.weather[0].description}</p>
                    </div>
                    <img src={`icons/${data.weather[0].icon}.svg`} alt="weather-icon" className="weather-icon" />
                </div>
                <div className="bottom">
                    <p className="temperature">
                        {(data.main.temp).toFixed()}°C
                    </p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label top">Detaily</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pocitově:</span>
                            <span className="parameter-value">{(data.main.feels_like).toFixed(1)}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Vítr:</span>
                            <span className="parameter-value">{data.wind.speed} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Vlhkost:</span>
                            <span className="parameter-value">{data.main.humidity} %</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Tlak:</span>
                            <span className="parameter-value">{data.main.pressure} hPa</span>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default CurrentWeather