import React, { useState } from "react";
import "./App.scss";
import Question from "./components/question";
import List from "./questionList";
import Result from "./components/result";

function App() {
  const [num, setNum] = useState(0);
  const [myAns, setMyAns] = useState([0, 0, 0, 0, 0]);
  const [isSubmit, setIsSubmit] = useState(false);
  const answerArr = List.map(({ right }) => right - 1);
  const handleClick = () => {
    setNum(num + 1);
  };
  const handleSubmit = () => {
    setIsSubmit(true);
  };
  const handleChoose = (key, value) => {
    myAns.splice(key, 1, value);
    setMyAns(myAns);
  };
  return (
    <div className="App">
      <div className="questiom-container">
        {isSubmit ? (
          <Result
            myAns={myAns}
            curAns={answerArr}
            setNum={setNum}
            setSubmit={setIsSubmit}
            setArr={setMyAns}
          />
        ) : (
          List.map((item, index) => (
            <div className={`other ${index === num ? "cur" : ""}`}>
              <Question
                data={item}
                key={index}
                onClick={handleClick}
                onSubmit={handleSubmit}
                onChoose={(key, value) => handleChoose(key, value)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
