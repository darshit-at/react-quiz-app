import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import Button from "../../layout/Button";
import Input from "../../layout/Input";

const QuestionOptionList = (props) => {
  const timer = useSelector((state) => state.timer.sec);
  const setRandomOption = useSelector((state) => state.randomSelete.setRandomValue);
  const [userSeleteOption, getUserSeleteOption] = useState("");
  const [showNextQuestionBtn, setShowQuestionbtn] = useState(false);
  const [options] = props.questionOption;

  useEffect(() => {
    if (timer === 1 && userSeleteOption === "") {
      localStorage.setItem("blankSeleteOption", userSeleteOption);
    }
    if(setRandomOption!==''){
      getUserSeleteOption(setRandomOption)
    }

  }, [timer, userSeleteOption,setRandomOption]);

  const showUserSeleteOption = (event) => {
    if (props.btndisabled) {
      const optionValue = event.target.textContent;
      getUserSeleteOption(optionValue);
      localStorage.setItem("blankSeleteOption" , optionValue)
    }
  };

  const handlerSubmit = () => {

    setShowQuestionbtn(true);
    props.onSubmit(userSeleteOption);
    props.onStopTimer("stop");
  };

  const getUserInput = (input) => {
    getUserSeleteOption(input);
  };

  return (
    <div className="option-control">
      <div className="upper-option">
        {options.length > 0 &&
          options.map((option, index) => {
            return (
              <span
                dangerouslySetInnerHTML={{ __html: option }}
                onClick={showUserSeleteOption}
                key={`option${index}`}
              ></span>
            );
          })}
      </div>
      <div className="input">
        <Input onChange={getUserInput} userSeleteOption={userSeleteOption} />
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
      </div>
    </div>
  );
};
export default QuestionOptionList;
