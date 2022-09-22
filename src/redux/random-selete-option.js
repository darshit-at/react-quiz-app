import { createSlice } from "@reduxjs/toolkit";

const randomOptionSlice = createSlice({
  name: "randomOption",
  initialState: {
    setRandomValue: "",
  },
  reducers: {
    setAnyValue(state, action) {
      state.setRandomValue = action.payload;
    },
  },
});

export default randomOptionSlice.reducer;
export const randomSeleteAction = randomOptionSlice.actions;
