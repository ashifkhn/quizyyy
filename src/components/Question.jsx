import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "./style/question.css";

export const Question = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    question,
    options,
    correct,
    score,
    setScore,
    error,
    setError,
    selected,
    setSelected,
  } = useUserContext();

  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };

  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {
    navigate("/result");
  };

  const handleNext = () => {
    if (currentQuestion > 8) {
      navigate("/result");
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelected();
  };

  return (
    <div className="question_container">
      <h2>Question {currentQuestion + 1}</h2>
      <h2>{question[currentQuestion].question}</h2>
      {error && <div>Wrong Answer</div>}
      <div className="options">
        {options &&
          options.map((option) => (
            <button
              onClick={() => handleCheck(option)}
              className={`singleOption ${selected && handleSelect(option)}`}
              key={option}
              disabled={selected}
            >
              {option}
            </button>
          ))}
      </div>
      <div className="other_option">
        <Button
          variant="contained"
          style={{ backgroundColor: " #ff3c46" }}
          onClick={handleQuit}
        >
          {" "}
          Quit
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#5d5a58" }}
          onClick={handleNext}
        >
          {" "}
          Next
        </Button>
      </div>
    </div>
  );
};
