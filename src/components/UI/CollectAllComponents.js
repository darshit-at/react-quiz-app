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
import { correctAnswerAction } from "../../redux/check-answer-add-points-slice";
import { randomSelectAction } from "../../redux/random-select-option";
import Score from "../score/score";

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
  const clickOnFinishBtn = useSelector(
    (state) => state.displayScore.isUserClickOnFinish
  );
  const timer = useSelector((state) => state.timer.sec);

  useEffect(() => {
    const blankOption = localStorage.getItem("blankSelectOption");
    let clear = setInterval(() => {
      dispatch(timerAction.decreaseSecond());
      //for fetch data after timer is end and sent request after select any  random option if user not select any option
      if (timer === 1) {
        setTimeout(() => {
          dispatch(fetchQuestion());
          dispatch(correctAnswerAction.removeResultMessageAfterSubmit());
          dispatch(questionAction.removePreviewOption());
          dispatch(randomSelectAction.setAnyValue(""));
        }, 300);
      }
      //for select randon option when user not selwtw anything
      if (timer === 1 && blankOption === "") {
        questionOption.sort();
        const [randomElement] = questionOption;
        dispatch(correctAnswerAction.checkAnswer(randomElement[1]));
        dispatch(randomSelectAction.setAnyValue(randomElement[1]));
      }
    }, 1000);
    //stop interval on submit btn
    if (stopTimer === "stop") {
      clearInterval(clear);
      setStartTimer("");
    }
    //start interval on next  btn
    if (startTimer === "start") {
      setStopTimer("");
    }
    return () => {
      clearInterval(clear);
      // clearTimeout(clearTimeOut);
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
        ""
      )}
      {currentQuestion !== "" &&
        questionOption.length > 0 &&
        !clickOnFinishBtn && (
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
      {clickOnFinishBtn && <Score onStartTimer={startTimerHandler} />}
    </div>
  );
};

export default React.memo(CollectAllCompoenents);
