import { createSlice } from "@reduxjs/toolkit";
import { City } from "../utils/interfaces";

const initialState: { value: City } = {
  value: {
    name: "",
    lat: 0,
    lon: 0,
    country: "",
  },
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
