import { createSlice } from "@reduxjs/toolkit"

const DisplayScoreSlice = createSlice({
    name : 'displayscore',
    initialState : {
        isUserClickOnFinish : false
    },
    reducers : {
        endTheQuiz(state ,action) {
          state.isUserClickOnFinish = true
        },
        startTheQuizAgain (state){
            state.isUserClickOnFinish = false
        }
    }
});


export default DisplayScoreSlice.reducer;
export const DisplayScoreAction = DisplayScoreSlice.actions;
