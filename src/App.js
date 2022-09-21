import React, { useEffect } from "react";
import axios from "axios";
import Questionoption from "./components/questionOption/QuestionOption";
import "./App.css";
import { questionAction } from "./redux/questionoption-slice";
import Question from "./components/question/Question";
import { useSelector ,useDispatch } from "react-redux";
import Result from "./components/result/Result";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=1")
    .then((res) => {
      dispatch(questionAction.addQuestionOption(res.data.results));
    });
  }, [dispatch]);

  const showResultMessage = useSelector(
    (state) => state.checkAnswer.showResultMessage
  );
  return (
    <div className="App">
      <h2>Let's start quiz</h2>
      <Question />
      <Questionoption />
      {showResultMessage && <Result />}
    </div>
  );
}

export default App;
