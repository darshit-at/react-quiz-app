import { createSlice } from "@reduxjs/toolkit";

const randomOptionSlice = createSlice({
  name: "randomOption",
  initialState: {
    setRandomValue: "",
    isAlreadySeleteAnyOption: false,
    classes: "",
  },
  reducers: {
    setAnyValue(state, action) {
      state.setRandomValue = action.payload;
    },
 
  },
});

export default randomOptionSlice.reducer;
export const randomSelectAction = randomOptionSlice.actions;
