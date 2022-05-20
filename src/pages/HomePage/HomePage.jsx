import React from "react";
import "./../../style/homepage.css";
import HomePageImage from "../../assets/undraw_questions_re_1fy7 (1).svg";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../data/Category";

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Quizyyy</h1>
      <img src={HomePageImage} alt="HomePageImage" className="image" />
      <h1>Your quiz settings</h1>
      <div className="quiz_setting">
        <TextField variant="outlined" label="What should we call you?" />
        <TextField select variant="outlined" label="Select Category">
          {Categories.map((c) => (
            <MenuItem key={c.category} value={c.value}>
              {c.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField select variant="outlined" label="Difficulty">
          <MenuItem>Easy</MenuItem>
          <MenuItem>Medium</MenuItem>
          <MenuItem>Hard</MenuItem>
        </TextField>
        <Button
          variant="outlined"
          color="inherit"
          style={{
            color: "#5D5A58",
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
};
