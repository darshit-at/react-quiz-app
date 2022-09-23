import { createSlice } from "@reduxjs/toolkit";
const initalState = {
  showResultMessage: null,
  result: "",
  answer: "",
  isAnswerCorrect: true,
  point: 0,
  correctAnswer :0,
  wrongAnswer : 0
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
        state.correctAnswer +=1
      } else {
        state.result = "Your answer is not correct";
        state.showResultMessage = true;
        state.isAnswerCorrect = false;
        state.point -= 2;
        state.wrongAnswer +=1
      }
  
    },
    removeResultMessageAfterSubmit(state,action) {
      state.showResultMessage = false;
    },
    setIntialStateOnRestartQuiz(state) {
      state.correctAnswer = 0;
      state.wrongAnswer   = 0;
      state.point = 0; 
      state.showResultMessage = null;
    }
  },
});

export default checkCorrectAnswerSlice.reducer;
export const correctAnswerAction = checkCorrectAnswerSlice.actions;
