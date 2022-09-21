import { configureStore } from "@reduxjs/toolkit";
import checkAnswerSlice from "./check-answer-slice";
import questionoptionSlice from "./questionoption-slice";
const store = configureStore({
  reducer: {
    questionOption: questionoptionSlice,
    checkAnswer: checkAnswerSlice,
  },
});

console.log(store.getState());
export default store;
