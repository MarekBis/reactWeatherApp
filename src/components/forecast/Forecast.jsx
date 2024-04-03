import './Forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
const WEEK_DAYS = [
  'Pondělí',
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle"
];
const Forecast = ({ data }) => {

  const dayInAWeek = new Date().getDay();

  const forecastDay = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  console.log(data);
  console.log(forecastDay)
  return (
    <div className="containerForecast">
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.svg`} alt="weather" />
                  <label className="day">{forecastDay[index]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{(item.main.temp_min).toFixed(1)}°C / {(item.main.temp_max).toFixed(1)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pocitově: </label>
                  <label>{(item.main.feels_like).toFixed(1)}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Vítr: </label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Vlhkost: </label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Tlak: </label>
                  <label>{item.main.pressure}hPa</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        <AccordionItem></AccordionItem>
      </Accordion>
    </div>
  )
}

export default Forecast