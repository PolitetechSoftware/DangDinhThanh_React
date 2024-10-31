import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./features/weather/slices/citySlice";
import temperatureReducer from "./features/weather/slices/temperatureSlice";

export default configureStore({
  reducer: {
    city: cityReducer,
    temperature: temperatureReducer,
  },
});
