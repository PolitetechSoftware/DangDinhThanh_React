import { createSlice } from "@reduxjs/toolkit";

export const temperatureSlice = createSlice({
  name: "city",
  initialState: {
    value: 0,
  },
  reducers: {
    changeTemperature: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTemperature } = temperatureSlice.actions;
export default temperatureSlice.reducer;
