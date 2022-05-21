import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="quizyyy">Quizyyy</div>
      </Link>
      <hr />
    </div>
  );
};
