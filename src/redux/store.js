import { configureStore } from "@reduxjs/toolkit";
import checkAnswerSlice from "./check-answer-slice";
import questionoptionSlice from "./questionoption-slice";
import setTimerSlice from "./set-timer-slice";
import randomOptionSlice from './random-selete-option'
const store = configureStore({
  reducer: {
    questionOption: questionoptionSlice,
    checkAnswer: checkAnswerSlice,
    timer :setTimerSlice,
    randomSelete : randomOptionSlice
  },
});

console.log(store.getState())
export default store;
