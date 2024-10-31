import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/GetCurrentWeather";
import { S_WeatherSection } from "../styles/WeatherSection.module";
import { WeatherResponse, Coord } from "../utils/interfaces";
import WeatherDetail from "./WeatherDetail";
import { useDispatch, useSelector } from "react-redux";
import { changeTemperature } from "../slices/temperatureSlice";

export default function WeatherSection() {
  const [currentLocation, setCurrentLocation] = useState<Coord>({
    lat: 0,
    lon: 0,
  });
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(
    null
  );
  const city = useSelector((state) => state.city.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function getCurrentLocation() {
      const location = window.navigator && window.navigator.geolocation;
      if (location) {
        location.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          () => {
            setCurrentLocation({
              lat: 0,
              lon: 0,
            });
          }
        );
      }
    }
    getCurrentLocation();
  }, []);

  useEffect(() => {
    setCurrentLocation({ lat: city.lat, lon: city.lon });
  }, [city.lat, city.lon]);

  useEffect(() => {
    async function getWeather() {
      const weather = await getCurrentWeather(
        currentLocation.lat,
        currentLocation.lon
      );
      setCurrentWeather(weather);
    }

    if (currentLocation.lat || currentLocation.lon) {
      getWeather();
      dispatch(changeTemperature(currentWeather?.main.temp));
    }
  }, [
    currentLocation.lat,
    currentLocation.lon,
    currentWeather?.main.temp,
    dispatch,
  ]);

  return (
    <>
      <S_WeatherSection>
        {currentWeather ? (
          <WeatherDetail currentWeather={currentWeather} />
        ) : (
          <>Please enable location or select any city to check the weather</>
        )}
      </S_WeatherSection>
    </>
  );
}
