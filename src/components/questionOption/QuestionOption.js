import React, { Fragment, useState } from "react";
import axios from "axios";
import swal from 'sweetalert' ;
import { useDispatch, useSelector } from "react-redux";
import "./questionOption.css";
import { questionAction } from "../../redux/questionoption-slice";
import { correctAnswerAction } from "../../redux/check-answer-slice";
import QuestionOptionList from "./QuestionOptionList";

const Questionoption = () => {
 
  const dispatch = useDispatch();
  const [btndisabled , setbtndisabled]  = useState(true);
  const questionOption = useSelector(
    (state) => state.questionOption.questionOption
  );

  const checkAnswerSubmit = (userSeleteOption) => {
    if (userSeleteOption.trim().length === 0) {
      swal("please selete any option");
    } else {
      dispatch(correctAnswerAction.checkAnswer(userSeleteOption));
      setbtndisabled(false);
    }
  };

  const nextQuestionHandler = () => {

    axios.get("https://opentdb.com/api.php?amount=1").then((res) => {
      dispatch(questionAction.addQuestionOption(res.data.results));
    });
    dispatch(questionAction.removePreviewOption());
    dispatch(correctAnswerAction.removeResultMessageAfterSubmit());
    setbtndisabled(true);
    }

  return (
    <Fragment>
      {questionOption?.length > 0 && (
       <QuestionOptionList 
       questionOption ={questionOption}
       onSubmit = {checkAnswerSubmit}
       onNextQuestion = {nextQuestionHandler}
       btndisabled={btndisabled}
   
       />
      )}
   {questionOption.length===0 && <p>Loading...</p>}
    </Fragment>
  );
};
export default Questionoption;
