import React from "react";
import { useSelector } from "react-redux";
import "./result.css";
const Result = () => {
  const result = useSelector((state) => state.checkAnswer.result);
  const isAnswerCorrect = useSelector(
    (state) => state.checkAnswer.isAnswerCorrect
  );
  const classes = isAnswerCorrect ? "correct-answer" : "wrong-answer";
  const correct_answer = localStorage.getItem("correct_answer");

  return (
    <div className="result">
      <div className={classes}>
        <h4>{result}</h4>
      </div>
      {!isAnswerCorrect && (
        <h4 style={{ textAlign: "center" }}>
          Correct answer : {correct_answer}
        </h4>
      )}
    </div>
  );
};
export default React.memo(Result);
