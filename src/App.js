import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchQuestion } from "./redux/fetch-api-slice";
import CollectAllCompoenents from "./components/UI/CollectAllComponents";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion());

  }, [dispatch]);

  return <div className="App">
    <CollectAllCompoenents />
  </div>;
};

export default App;
