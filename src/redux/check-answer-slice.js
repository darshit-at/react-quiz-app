import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  showResultMessage: false,
  result: "",
  answer: "",
  isAnswerCorrect: true,
};
const checkCorrectAnswerSlice = createSlice({
  name: "checkanswer",
  initialState: initalState,
  reducers: {
    checkAnswer(state, action) {
      const userSeleteOption = action.payload;
      const correct_answer = localStorage.getItem("correct_answer");

      if (
        correct_answer.toLocaleLowerCase() ===
        userSeleteOption.toLocaleLowerCase()
      ) {
        state.result = "Your answer is correct";
        state.showResultMessage = true;
        state.isAnswerCorrect = true;
      } else {
        state.result = "Your answer is not correct";
        state.showResultMessage = true;
        state.isAnswerCorrect = false;
      }
    },
    removeResultMessageAfterSubmit(state) {
      state.showResultMessage = false;
    },
  },
});

export default checkCorrectAnswerSlice.reducer;
export const correctAnswerAction = checkCorrectAnswerSlice.actions;
