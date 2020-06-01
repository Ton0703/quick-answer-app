import React from "react";
import "./index.scss";

const letter = ["A", "B", "C", "D"];
function Result({ myAns, curAns, setNum, setArr, setSubmit }) {
  let count = 0;
  for (let i = 0; i < myAns.length; i++) {
    if (myAns[i] === curAns[i]) {
      count++;
      continue;
    }
  }
  const handleClick = () => {
    setSubmit(false);
    setNum(0);
    setArr([]);
  };

  return (
    <div className="result">
      <div className="again" onClick={handleClick}>
        再来一次！
      </div>
      <div className="title">结果</div>
      <div className="result-detail">
        <div className="answer-detail">
          <div className="myans">
            <h3>你的答案：</h3>
            <div className="myans-list">
              {myAns.map((item, index) => (
                <div className="item" key={index}>
                  {letter[item]}
                </div>
              ))}
            </div>
          </div>
          <div className="curans">
            <h3>参考答案：</h3>
            <div className="myans-list">
              {curAns.map((item, index) => (
                <div className="item" key={index}>
                  {letter[item]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="total">
          <div className="total-title">正确率</div>
          <div className="total-content">{(count / myAns.length) * 100}%</div>
        </div>
      </div>
    </div>
  );
}

export default Result;
