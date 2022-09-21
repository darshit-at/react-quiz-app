import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  questionOption: [],
  currentQuestion: "",
};
const questionOptionSlice = createSlice({
  name: "quizOption",
  initialState: initalState,
  reducers: {
    
    addQuestionOption(state, action) {
      const incorrect_answers = action.payload[0].incorrect_answers;
      const correct_answer = action.payload[0].correct_answer;
      localStorage.setItem("correct_answer", correct_answer);
      incorrect_answers.push(correct_answer);
      state.questionOption.push(incorrect_answers);
      state.currentQuestion = action.payload[0].question;
    },
    removePreviewOption(state) {
      state.questionOption.shift();
      state.currentQuestion = ''
    },
  },
});
export default questionOptionSlice.reducer;
export const questionAction = questionOptionSlice.actions;
