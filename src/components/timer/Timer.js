import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./timer.css";
import { correctAnswerAction } from "../../redux/check-answer-slice";
import { questionAction } from "../../redux/questionoption-slice";
const Timer = () => {
  const timer = useSelector((state) => state.timer.sec);
  const questionOption = useSelector(
     (state) => state.questionOption.questionOption
  );
  const questionNumber = useSelector(
    (state) => state.questionOption.questionNumber
  );
  const dispatch = useDispatch();

  useEffect(() => {
   
  }, [timer, dispatch ,questionOption]);

  return (
    <div className="timer">
      <h4>second:{timer}</h4>
      <div>
        <h4>question No. {questionNumber}</h4>
      </div>
    </div>
  );
};
export default Timer;
