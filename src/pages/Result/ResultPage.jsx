import React from "react";
import "./result.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ResultPage = ({ score }) => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="result_page">
      <h1>Your score is: {score}</h1>
      <Button
        variant="contained"
        style={{ backgroundColor: "#5d5a58" }}
        onClick={handleGoHome}
      >
        {" "}
        Home
      </Button>
    </div>
  );
};
