import React, { Fragment, useEffect, useState } from "react";
import Question from "../question/Question";
import Questionoption from "../questionOption/QuestionOption";
import Result from "../result/Result";
import { useSelector, useDispatch } from "react-redux";
import "./CollectAllComponents.css";
import Timer from "../timer/Timer";
import { questionAction } from "../../redux/questionoption-slice";
import { fetchQuestion } from "../../redux/fetch-api-slice";
import { timerAction } from "../../redux/set-timer-slice";
import { correctAnswerAction } from "../../redux/check-answer-slice";
import { randomSeleteAction } from "../../redux/random-selete-option";

const CollectAllCompoenents = () => {
  const [stopTimer, setStopTimer] = useState("");
  const [startTimer, setStartTimer] = useState("");
  const dispatch = useDispatch();

  const showResultMessage = useSelector(
    (state) => state.checkAnswer.showResultMessage
  );

  const currentQuestion = useSelector(
    (state) => state.questionOption.currentQuestion
  );
  const questionOption = useSelector(
    (state) => state.questionOption.questionOption
  );

  const timer = useSelector((state) => state.timer.sec);

  useEffect(() => {
    const blankOption = localStorage.getItem("blankSeleteOption");
    let clear = setInterval(() => {
      dispatch(timerAction.decreaseSecond());
      if (timer === 1) {
        dispatch(fetchQuestion());
        dispatch(correctAnswerAction.removeResultMessageAfterSubmit());
        dispatch(randomSeleteAction.setAnyValue(''))
        setTimeout(() => {}, 500);
      }

      if (timer === 1 && blankOption === "") {
        console.log("blank run condition is load first");
        const randomOption = questionOption[Math.floor(Math.random() * questionOption.length)];
        dispatch(correctAnswerAction.checkAnswer(randomOption[1]));
        dispatch(randomSeleteAction.setAnyValue(randomOption[1]))
        dispatch(questionAction.removePreviewOption());
      }
    }, 1000);

    if (stopTimer === "stop") {
      console.log(startTimer);
      clearInterval(clear);
    }

    if (startTimer === "start") {
      setStopTimer(" ");
    }
    return () => {
      clearInterval(clear);
    };
  }, [dispatch, timer, startTimer, stopTimer, questionOption]);

  const stopTimerHandler = (stop) => {
    setStopTimer(stop);
  };
  const startTimerHandler = (start) => {
    dispatch(timerAction.decreaseSecond("restart"));
    setStartTimer(start);
  };
  return (
    <div className="quiz-components">
      {currentQuestion === "" || questionOption.length === 0 ? (
        <h4 style={{ color: "black", textAlign: "center" }}>Loading...</h4>
      ) : (
        <Fragment>
          <Timer />
          <Question />
          <Questionoption
            onStopTimer={stopTimerHandler}
            onStartTimer={startTimerHandler}
          />
        </Fragment>
      )}

      {showResultMessage && <Result />}
    </div>
  );
};

export default React.memo(CollectAllCompoenents);
