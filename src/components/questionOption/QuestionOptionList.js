import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../layout/Button";
import Input from "../../layout/Input";
import FinishBtn from "../FinishQuiz";
import DisplayOption from "./DisplayOption";

const QuestionOptionList = (props) => {
  const timer = useSelector((state) => state.timer.sec);
  const getRandomOption = useSelector(
    (state) => state.randomSelect.setRandomValue
  );
  const totalQuestionNumber = useSelector(
    (state) => state.questionOption.questionNumber
  );
  const [userSelectOption, getUserSelectOption] = useState("");
  const [showNextQuestionBtn, setShowQuestionbtn] = useState(false);
  const [options] = props.questionOption;

  useEffect(() => {
    if (timer === 1 && userSelectOption === "") {
      localStorage.setItem("blankSelectOption", userSelectOption);
    }
    if (getRandomOption !== "") {
      getUserSelectOption(getRandomOption);
    }
  }, [timer, userSelectOption, getRandomOption]);

  const showUserSelectOptionHandler = (value) => {
    if (props.btndisabled) {
      const optionValue = value;
      getUserSelectOption(optionValue);
      localStorage.setItem("blankSelectOption", optionValue);
    }
  };

  const handlerSubmit = () => {
    setShowQuestionbtn(true);
    props.onSubmit(userSelectOption);
    props.onStopTimer("stop");
  };

  const getUserInput = (input) => {
    getUserSelectOption(input);
  };

  return (
    <div className="option-control">
      <div className="upper-option">
        {options.length > 0 &&
          options.map((option, index) => {
            return (
              <DisplayOption
                key={`option${index}`}
                option={option}
                dangerouslySetInnerHTML={{ __html: option }}
                onSelect={showUserSelectOptionHandler}
                userSelectOption={userSelectOption}
              />
            );
          })}
      </div>
      <div className="input">
        <Input onChange={getUserInput} userSeleteOption={userSelectOption} />
      </div>
      <div className="button">
        <Button onClick={handlerSubmit} disabled={!props.btndisabled}>
          Submit
        </Button>
        {showNextQuestionBtn && (
          <Button disabled={props.btndisabled} onClick={props.onNextQuestion}>
            Next Question
          </Button>
        )}
        {totalQuestionNumber > 10 && <FinishBtn onFinish={props.onStopTimer} />}
      </div>
    </div>
  );
};
export default React.memo(QuestionOptionList);
