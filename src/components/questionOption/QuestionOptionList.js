import React, { useState, useRef } from "react";
import Button from "../../layout/Button";

const QuestionOptionList = (props) => {
  const userSeleteOption = useRef("");

    const [options] = props.questionOption;

  const showUserSeleteOption = (event) => {
    if(props.btndisabled) {
      const optionValue = event.target.textContent;
      userSeleteOption.current.value = optionValue;
    }
  
  };

  const handlerSubmit = () => {
    props.onSubmit(userSeleteOption.current.value)
  }

  return (
    <div className="option-control">
      <div className="upper-option">
        <span onClick={showUserSeleteOption}>{options[0]}</span>
        <span onClick={showUserSeleteOption}>{options[1]}</span>
        {options.length > 2 && (
          <>
            <span onClick={showUserSeleteOption}>{options[2]}</span>
            <span onClick={showUserSeleteOption}>{options[3]}</span>
          </>
        )}
      </div>

      <div className="button">
        <input
          type="text"
          placeholder="Your selete option "
          defaultValue={userSeleteOption.current.value}
          ref={userSeleteOption}
        />
        <Button onClick={handlerSubmit} disabled={!props.btndisabled}>
          Submit
        </Button>
        <Button disabled={props.btndisabled} onClick={props.onNextQuestion}>
          Next Question
        </Button>
      </div>
    </div>
  );
};
export default QuestionOptionList;
