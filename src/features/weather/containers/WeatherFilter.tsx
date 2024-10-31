import { useSelector } from "react-redux";
import { S_WeatherFilter } from "../styles/WeatherFilter.module";
import { useEffect, useMemo, useState } from "react";
import { FAMOUS_CITIES } from "../utils/constants";
import { searchCity } from "../services/SearchCity";
import { getCurrentWeather } from "../services/GetCurrentWeather";
import { City } from "../utils/interfaces";

export default function WeatherFilter() {
  const [cities, setCities] = useState<City[]>([]);
  const [similarCities, setSimilarCities] = useState<string[]>([]);
  const temperature = useSelector((state) => state.temperature.value);
  const city = useSelector((state) => state.city.value);

  useEffect(() => {
    async function getListCities() {
      const fetchCities = FAMOUS_CITIES.map((city) => searchCity(city));
      const listCities = await Promise.all(fetchCities);
      setCities(listCities.flat());
    }

    getListCities();
  }, []);

  useEffect(() => {
    async function getListCities() {
      const fetchTemps = cities.map((city) =>
        getCurrentWeather(city.lat, city.lon)
      );
      const listWeather = await Promise.all(fetchTemps);
      const filteredWeather = listWeather
        .filter((weather) => {
          return Math.abs(weather.main.temp - temperature) < 3;
        })
        .map((weather) => weather.name);
      setSimilarCities(filteredWeather);
    }
    getListCities();
  }, [cities, city, temperature]);

  return (
    <>
      <S_WeatherFilter>
        Famous cities with similar temperature:
        <ul>
          {similarCities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </S_WeatherFilter>
    </>
  );
}
