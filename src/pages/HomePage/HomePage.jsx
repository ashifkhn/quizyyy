import React from "react";
import "./homepage.css";
import HomePageImage from "../../assets/undraw_questions_re_1fy7 (1).svg";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../data/Category";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export const HomePage = () => {
  const navigate = useNavigate();
  const {
    name,
    setName,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    error,
    setError,
    fetchQues,
  } = useUserContext();
  const onClickHandler = () => {
    if (!category || !difficulty || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQues(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Quizyyy</h1>
      <img src={HomePageImage} alt="HomePageImage" className="image" />
      <h2>Your quiz settings</h2>
      <div className="quiz_setting">
        <TextField
          variant="outlined"
          label="What should we call you?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          select
          variant="outlined"
          label="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Categories.map((c) => (
            <MenuItem key={c.category} value={c.value}>
              {c.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          variant="outlined"
          label="Difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <Button
          variant="outlined"
          color="inherit"
          style={{
            color: "#5D5A58",
          }}
          onClick={onClickHandler}
        >
          Start
        </Button>
        {error && <p>Please fill all the form</p>}
      </div>
    </div>
  );
};
