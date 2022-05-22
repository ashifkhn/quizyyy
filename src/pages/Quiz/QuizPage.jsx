import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Question } from "../../components/Question";
import "./quizpage.css";

export const QuizPage = ({ name, score, setScore, question, setQuestion }) => {
  const [options, setOption] = useState("");
  const [currentQuestion, setCurrentQuesion] = useState(0);

  const handleSuffleAnswer = (resultsApi) => {
    return resultsApi.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log(question);

    setOption(
      question &&
        handleSuffleAnswer([
          question[currentQuestion]?.correct_answer,
          ...question[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [question]);
  // console.log(options);
  return (
    <div className="quiz_container">
      <h1 className="welcome">Welcome {name}</h1>
      {question ? (
        <div>
          <div className="quiz_details">
            <h2>{question[currentQuestion].category}</h2>
            <h2>Your Score is: {score}</h2>
          </div>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuesion={setCurrentQuesion}
            question={question}
            options={options}
            correct={question[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
          />
        </div>
      ) : (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
