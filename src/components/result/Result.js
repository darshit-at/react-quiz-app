import React from 'react';
import { useSelector } from 'react-redux';
import './result.css'
const Result = () => {
    const result = useSelector((state) => state.checkAnswer.result);
     const isAnswerCorrect = useSelector((state) => state.checkAnswer.isAnswerCorrect);
     const classes =isAnswerCorrect ? "correct-answer" : "wrong-answer";
     console.log(isAnswerCorrect)

 return (
    <div className={classes}>
       <h4>{result}</h4>
    </div>
 )
};
export default React.memo(Result);