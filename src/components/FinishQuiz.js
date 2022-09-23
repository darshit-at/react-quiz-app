import React from "react";
import { useDispatch } from "react-redux";
import Button from "../layout/Button";
import { DisplayScoreAction } from "../redux/route-score-page-slice";

const FinishBtn = (props) => {
  const dispatch = useDispatch();
  const finishQuizHandler = () => {
    props.onFinish("stop");
    dispatch(DisplayScoreAction.endTheQuiz());
  };

  return <Button onClick={finishQuizHandler}>Finish</Button>;
};
export default FinishBtn;
