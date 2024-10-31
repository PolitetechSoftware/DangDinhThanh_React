import weatherAPIs from "@/lib/http-common";
import { City } from "../utils/interfaces";

export async function searchCity(input: string): Promise<City[]> {
  try {
    const { data } = await weatherAPIs.get(`/geo/1.0/direct?q=${input}&appid=${
        import.meta.env.VITE_WEATHER_MAP_KEY
      }`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}
