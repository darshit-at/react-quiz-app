import React, { Fragment, useState } from "react";
import { fetchQuestion } from "../../redux/fetch-api-slice";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import "./questionOption.css";
import { questionAction } from "../../redux/questionoption-slice";
import { correctAnswerAction } from "../../redux/check-answer-add-points-slice";
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

  const checkAnswerSubmit = (userSelectOption) => {
    if (userSelectOption.trim().length === 0) {
      swal("Please selete any option");
    } else {
      setbtndisabled(false);
      dispatch(correctAnswerAction.checkAnswer(userSelectOption));
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
