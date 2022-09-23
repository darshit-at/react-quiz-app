import { createSlice } from "@reduxjs/toolkit";

const setTimerSlice = createSlice({
  name: "timer",
  initialState: { sec: 60 },
  reducers: {
    decreaseSecond(state, action) {
      state.sec -= 1;
      if (state.sec === 0) {
        state.sec = 60;
      }
      if(action.payload==='restart'){
        state.sec = 60;
      }
    },
  },
});

export default setTimerSlice.reducer;
export const timerAction = setTimerSlice.actions;
