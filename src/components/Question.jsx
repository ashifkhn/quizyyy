import React, { useState } from "react";

export const Question = ({
  currentQuestion,
  setCurrentQuesion,
  question,
  options,
  correct,
  score,
  setSelectionRange,
  setQuestion,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <h2>{question[currentQuestion].question}</h2>
      <div className="options">
        {options &&
          options.map((option) => (
            <button
              onClick={() => {}}
              className="option_button"
              key={option}
              disabled={selected}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};
