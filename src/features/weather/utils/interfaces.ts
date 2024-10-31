interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Cloud {
  all: number;
}

interface Sleet {
  "1h": number;
}

interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  rain?: Sleet;
  snow?: Sleet;
  clouds: Cloud;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface City {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type { Coord, WeatherResponse, City };
