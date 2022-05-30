import { createContext, useContext, useState } from "react";
import axios from "axios";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [options, setOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const fetchQues = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestion(data.results);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        selected,
        setSelected,
        error,
        setError,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        options,
        setOption,
        currentQuestion,
        setCurrentQuestion,
        question,
        setQuestion,
        score,
        setScore,
        fetchQues,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
