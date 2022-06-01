import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { Question } from "../../components/Question";
import "./quizpage.css";
import { useUserContext } from "../../context/UserContext";

export const QuizPage = () => {
  const { name, score, setOption, question, currentQuestion } =
    useUserContext();

  const handleShuffleAnswer = (resultsApi) => {
    return resultsApi.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOption(
      question &&
        handleShuffleAnswer([
          question[currentQuestion]?.correct_answer,
          ...question[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [question, currentQuestion, setOption]);
  return (
    <div className="quiz_container">
      <h1 className="welcome">Welcome {name}</h1>
      {question ? (
        <div>
          <div className="quiz_details">
            <h2>{question[currentQuestion].category}</h2>
            <h2>Your Score is: {score}</h2>
          </div>
          <Question />
        </div>
      ) : (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
