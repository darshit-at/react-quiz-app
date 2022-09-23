import React from "react";
import { useSelector } from "react-redux";
import "./question.css";

const Question = () => {
  const currentQuestion = useSelector(
    (state) => state.questionOption.currentQuestion
  );

  return (
    <div className="question-control">
      <div className="question">
        <div>
          <div dangerouslySetInnerHTML={{ __html: currentQuestion }}></div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Question);
