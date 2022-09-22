import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  showResultMessage: null,
  result: "",
  answer: "",
  isAnswerCorrect: true,
  point: 0,

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
        state.point += 5;
      } else {
        state.result = "Your answer is not correct";
        state.showResultMessage = true;
        state.isAnswerCorrect = false;
        state.point -= 2;
      }
  
    },
    removeResultMessageAfterSubmit(state,action) {
      state.showResultMessage = false;
    },
  },
});

export default checkCorrectAnswerSlice.reducer;
export const correctAnswerAction = checkCorrectAnswerSlice.actions;
