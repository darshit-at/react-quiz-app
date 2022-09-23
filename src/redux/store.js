import { configureStore } from "@reduxjs/toolkit";
import checkAnswerSlice from "./check-answer-add-points-slice";
import questionoptionSlice from "./questionoption-slice";
import setTimerSlice from "./set-timer-slice";
import randomOptionSlice from './random-select-option'
import displayScoreSlice from "./route-score-page-slice";

const store = configureStore({
  reducer: {
    questionOption: questionoptionSlice,
    checkAnswer: checkAnswerSlice,
    timer :setTimerSlice,
    randomSelect : randomOptionSlice,
    displayScore : displayScoreSlice
  },
});


export default store;
