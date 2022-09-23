import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../layout/Button";
import { correctAnswerAction } from "../../redux/check-answer-add-points-slice";
import { DisplayScoreAction } from "../../redux/route-score-page-slice";
import { questionAction } from "../../redux/questionoption-slice";
import "./score.css";

const Score = (props) => {
  const totalScore = useSelector((state) => state.checkAnswer.point);
  const correctAnswer = useSelector((state) => state.checkAnswer.correctAnswer);
  const wrongAnswer = useSelector((state) => state.checkAnswer.wrongAnswer);

  const dispatch = useDispatch();

  const startAgainQuizHandler = () => {
    props.onStartTimer("start");
    dispatch(DisplayScoreAction.startTheQuizAgain());
    dispatch(questionAction.setQuestionNumberOnRestart());
    dispatch(correctAnswerAction.setIntialStateOnRestartQuiz());
  };

  return (
    <div className="score">
      <h4>Result</h4>
      <div>Total attempt : {correctAnswer + wrongAnswer}</div>
      <div>Your Score : {totalScore}</div>
      <div>Correct answer : {correctAnswer}</div>
      <div>Wrong answer : {wrongAnswer}</div>
      <Button onClick={startAgainQuizHandler}>Start Again</Button>
    </div>
  );
};
export default React.memo(Score);
