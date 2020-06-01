import React, { useState } from "react";
import "./index.scss";

const arr = ["A", "B", "C", "D"];

function Question({ data, onClick, onSubmit, onChoose }) {
  const right = data.right;
  const [myAns, setMyAns] = useState("");
  const [isAnswer, setIsAnswer] = useState(false);
  const handleClick = (num) => {
    setMyAns(num);
    setIsAnswer(true);
    onChoose(data.id - 1, num - 1);
  };

  return (
    <div className="question">
      <div className="question-part">
        {data.id}.{data.que}
      </div>
      <div className="answer-list">
        {data.ans.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`answer ${
              isAnswer &&
              ((index + 1 === right && "right") ||
                (index + 1 === myAns && myAns !== right && "myans"))
            }`}
          >
            {arr[index]}.<span>{item}</span>
          </div>
        ))}
      </div>
      <div className="next-btn" onClick={data.id === 5 ? onSubmit : onClick}>
        {data.id === 5 ? "提交答案" : "下一题"}
      </div>
    </div>
  );
}

export default Question;
