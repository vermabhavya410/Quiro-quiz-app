import "./Result.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const FinalScore = JSON.parse(localStorage.getItem("score")) || 0;
  const TotalQuestion= JSON.parse(localStorage.getItem("selectedQuestions")) || [];
  console.log(TotalQuestion);

  useEffect(() => {
    return () => {
      localStorage.removeItem("score");
    };
  }, []);

  const getMessage = () => {
    if (FinalScore >= 8) return "🚀 Quiz Master!";
    if (FinalScore >= 5) return "🔥 Great Job!";
    return "💪 Keep Practicing!";
  };

  return (
    <>
      <div className="result-container">
        <h2 className="result-title">{getMessage()}</h2>

        <div className="score-circle">
          <span>{FinalScore}</span>
        
        
        </div>
        <p className="score-text">Total Questions:{TotalQuestion.length} </p>
        <p className="score-text">Your Final Score </p>

        <div className="result-buttons">
          <button onClick={() => navigate("/quiz")}>
            🔁 Play Again
          </button>

          <button onClick={() => navigate("/")}>
            🏠 Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
