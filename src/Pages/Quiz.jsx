import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const questions = JSON.parse(localStorage.getItem("selectedQuestions")) || [];
  console.log(questions);
  const navigate=useNavigate();
  const [CurrquestionIndex, setCurrquestionIndex] = useState(0);
  const [SelectedOption, setSelectedOption] = useState("");
  const [Score,setScore]=useState(0);

  const currentQuestion = questions[CurrquestionIndex];

  function handleNext() {
    if (CurrquestionIndex < questions.length - 1) {
      setCurrquestionIndex((prev) => prev + 1);

    if(currentQuestion.correctAnswer===SelectedOption){
       setScore(prev => prev + 1);
    }
    }
  }
  localStorage.setItem("score",JSON.stringify(Score));

  function calscore(){
   navigate("/result")
  }

  return (
    <>
    <div className="quiz-container">
      <h3 className="question">{currentQuestion.question}</h3>
      {
        currentQuestion.options.map((option, Index) => (
          <label className="option" key={Index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={SelectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        ))
      }

     <div className="quiz-buttons">
      <button
        onClick={handleNext}
        disabled={CurrquestionIndex === questions.length - 1 || !SelectedOption}
      >
        Next
      </button>

      <button
      className="finish-btn"
       onClick={calscore}
       disabled={CurrquestionIndex !== questions.length - 1 || !SelectedOption}
       >Finish</button>
       </div>
       </div>
    </>
  )
}

export default Quiz;