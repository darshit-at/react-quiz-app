import React, { Fragment, useState } from "react";
import { fetchQuestion } from "../../redux/fetch-api-slice";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import "./questionOption.css";
import { questionAction } from "../../redux/questionoption-slice";
import { correctAnswerAction } from "../../redux/check-answer-slice";
import QuestionOptionList from "./QuestionOptionList";

const Questionoption = (props) => {
  const dispatch = useDispatch();
  const [btndisabled, setbtndisabled] = useState(true);

  const questionOption = useSelector(
    (state) => state.questionOption.questionOption
  );


  const similarFunctility = () => {
    dispatch(fetchQuestion());
    dispatch(questionAction.removePreviewOption());
    dispatch(correctAnswerAction.removeResultMessageAfterSubmit());
  };

  const checkAnswerSubmit = (userSeleteOption) => {
    if (userSeleteOption.trim().length === 0) {
      swal("please selete any option");
    } else {
      setbtndisabled(false);
      dispatch(correctAnswerAction.checkAnswer(userSeleteOption));
    }
  };

  const nextQuestionHandler = () => {
    similarFunctility();
    setbtndisabled(true);
    props.onStartTimer("start");
  };

  return (
    <Fragment>
      <QuestionOptionList
        questionOption={questionOption}
        onSubmit={checkAnswerSubmit}
        onNextQuestion={nextQuestionHandler}
        btndisabled={btndisabled}
        onStopTimer={props.onStopTimer}
      />
    </Fragment>
  );
};
export default React.memo(Questionoption);
