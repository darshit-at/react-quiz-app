import React from "react";
import { useSelector } from "react-redux";
import "./question.css";

const Question = () => {
  const currentQuestion = useSelector((state) => state.questionOption.currentQuestion);
  console.log(currentQuestion)

  return (
    <div className="question-control">
      <div className="question">
        <div>
          {currentQuestion === "" && <div>Loading...</div>}
          {currentQuestion !==""  && 
            <div>{currentQuestion}</div>}
        </div>
      </div>
    </div>
  );
};
export default Question;
