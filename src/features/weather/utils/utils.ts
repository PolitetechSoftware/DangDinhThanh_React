import { KELVIN_CELSIUS_DIFFERENT } from "./constants";

export function kelvinToCelsius(temp: number) {
  return temp - KELVIN_CELSIUS_DIFFERENT;
}

export function getTime(unixTime: number) {
  const TO_MILLISECONDS = 1000;
  return new Date(unixTime * TO_MILLISECONDS).toLocaleTimeString();
}
