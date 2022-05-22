import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { useUserContext } from './context/UserContext';
import { HomePage } from './pages/HomePage/HomePage';
import { QuizPage } from './pages/Quiz/QuizPage';
import { ResultPage } from './pages/Result/ResultPage';
import axios from "axios"


function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const fetchQues = async (category = "", difficulty = "") => {

    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestion(data.results)

  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage name={name} setName={setName} fetchQues={fetchQues} />} />
        <Route path="/quiz" element={<QuizPage name={name} question={question} setQuestion={setQuestion} score={score} setScore={setScore} />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
