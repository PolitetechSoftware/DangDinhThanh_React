import { S_Overview } from "../styles/WeatherDetail.module";
import { WeatherResponse } from "../utils/interfaces";
import { getTime } from "../utils/utils";

export default function WeatherDetail({
  currentWeather,
}: {
  currentWeather: WeatherResponse;
}) {
  return (
    <>
      <S_Overview>
        <div>
          <h2 className="text-3xl">
            {currentWeather.name}: {currentWeather.main.temp}°C
          </h2>
          <div>
            <img
              alt="icon"
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            />
            {currentWeather.weather[0].main} -{" "}
            {currentWeather.weather[0].description}
          </div>
        </div>
        <div>
          <p>Feels like: {currentWeather.main.feels_like}</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Wind speed: {currentWeather.wind.speed}m/s</p>
          <p>Visibility: {currentWeather.visibility}m</p>
          <p>Sunrise: {getTime(currentWeather.sys.sunrise)}</p>
          <p>Sunset: {getTime(currentWeather.sys.sunset)}</p>
        </div>
      </S_Overview>
    </>
  );
}
