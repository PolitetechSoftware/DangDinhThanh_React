import weatherAPIs from "@/lib/http-common";
import { WeatherResponse } from "../utils/interfaces";

export async function getCurrentWeather(
  latitude: number,
  longitude: number
): Promise<WeatherResponse> {
  try {
    const { data } = await weatherAPIs.get(
      `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_MAP_KEY
      }&units=metric`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}
