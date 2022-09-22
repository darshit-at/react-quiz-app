import axios from 'axios';
import { questionAction } from './questionoption-slice' ;

export const fetchQuestion = () => {
    return async (dispatch) => {
       const response = await axios.get("https://opentdb.com/api.php?amount=1")
       const data =  response.data.results;
       dispatch(questionAction.addQuestionOption(data))
    }
 }